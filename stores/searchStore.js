export const useSearchStore = defineStore('local-search', {
  persist: {
    paths: ['selectedJobTypes', 'selectedLocationType', 'selectedSeniorityType'],
  },

  state: () => ({
    // Initial state properties
    jobs: [],
    selectedJobPost: null,
    selectedJobTypes: [],
    selectedLocationType: [],
    selectedSeniorityType: [],
    selectedOrganization: null,
    selectedOrganizationUrl: null,

    searchField: '',
    lastSearch: '',
    isJobsLoading: false,
    isOrganizationPage: false,
  }),

  getters: {
    isJobDrilldownRoute() {
      return this.router.currentRoute.value.name
    },

    numberOfFiltersSelected(state) {
      const { selectedJobTypes, selectedLocationType, selectedSeniorityType } = state
      return selectedJobTypes.length + selectedLocationType.length + selectedSeniorityType.length
    },

    isJobPostSelected(state) {
      return !!state.selectedJobPost
    },

    hasPublishedJobs(state) {
      // Use conditional chaining to check if state.jobs.published is empty
      return state.jobs?.length
    },
  },

  actions: {
    // Select a job post
    selectJobPost() {},

    // Clear all applied filters
    clearAllFilters() {
      this.selectedJobTypes = this.selectedLocationType = this.selectedSeniorityType = []
    },

    async lookupJobById(jobId) {
      // log(jobId)

      try {
        const jobsCollectionRef = collection(db, 'jobs')
        const jobDocRef = doc(jobsCollectionRef, jobId)
        const jobSnapshot = await getDoc(jobDocRef)

        if (jobSnapshot.exists()) {
          // The job document exists; return its data
          // We return the data in this format, so it can match the format
          // from situations where there are multiple documents returned.
          return { docs: [jobSnapshot] }
        }
        else {
          // The job document with the specified ID does not exist
          return null
        }
      }
      catch (error) {
        console.error('Error looking up job by ID:', error)
        throw error
      }
    },

    async lookupOrganizationByOrgName(orgUrl) {
      // log('lookupOrganizationByOrgName:', orgUrl)
      try {
        const organizationsCollectionRef = collection(db, 'organizations')
        const querySnapshot = await getDocs(organizationsCollectionRef)

        // Iterate through the documents in the collection
        for (const doc of querySnapshot.docs) {
          const data = doc.data()
          if (data.orgUrl === orgUrl) {
            // Found the organization with the matching orgUrl
            return data
          }
        }

        // If no matching organization is found, return null or handle as needed
        return null
      }
      catch (error) {
        console.error('Error looking up organization:', error)
        throw error
      }
    },

    // Lookup a job post by identifier value
    async lookupJobPost(identifierValue) {
      const { attachDetailsToJobPost } = useJobPostStore()

      this.isJobsLoading = true // Set loading to true before making the request

      try {
        // Reference to the 'jobs' collection
        const jobsCollectionRef = collection(db, 'jobs')

        // Query all documents in the 'jobs' collection
        const querySnapshot = await getDocs(jobsCollectionRef)

        // Iterate through the documents and their published jobs
        for (const doc of querySnapshot.docs) {
          const data = doc.data()
          const publishedJobs = data.published || []

          // Loop through the published jobs array to find a match
          for (const jobPost of publishedJobs) {
            if (jobPost.identifier?.value === identifierValue) {
              // Call the attachDetailsToJobPost function and update jobPost
              const updatedJobPost = await attachDetailsToJobPost(jobPost)

              // log('Job post:', updatedJobPost)
              return updatedJobPost
            }
          }
        }

        // If no matching job post is found, return null or an appropriate value
        return null
      }
      catch (error) {
        // Handle errors here, set loading to false in case of an error
        console.error('Error fetching job post:', error)
        throw error
      }
      finally {
        this.isJobsLoading = false
      }
    },

    // Fetch jobs data from Firestore
    async fetchJobsFromFirestore(orgName = null) {
      // orgName will only display jobs matching a specific organization
      // and not all available jobs from all organizations.

      let jobs

      if (orgName) {
        // log(`Loading job posts realted to organization: ${orgName}`)

        const organization = await this.lookupOrganizationByOrgName(orgName)

        // log('organization: ', organization)

        if (organization) {
          this.selectedOrganization = organization
          jobs = await this.lookupJobById(organization.uid)
          // log(jobs)
        }
      }
      else {
        const jobsCollectionRef = collection(db, 'jobs')
        jobs = await getDocs(jobsCollectionRef)

        // log(
        //   'Job posts:',
        //   jobs.docs.map(doc => doc.data()),
        // )
      }

      return jobs ? jobs.docs.map(doc => doc.data()) : []
    },

    // Fetch a single job document from Firestore based on its ID
    async fetchJobByIdFromFirestore(jobId) {
      const jobRef = doc(db, 'jobs', jobId)
      const jobSnapshot = await getDoc(jobRef)

      if (jobSnapshot.exists())
        return jobSnapshot.data()
      else
        throw new Error('Document not found') // You can customize the error message as needed
    },

    // Get a specific field value from a job object
    getFieldValue(job, field) {
      return field.split('.').reduce((obj, key) => obj[key], job)
    },

    // Check if any field matches the search term
    isFieldMatch(jobFields, searchField) {
      return jobFields.some(fieldValue => fieldValue.includes(searchField))
    },

    // Get checkbox flags based on selected values
    getCheckboxFlags(selectedValues) {
      return selectedValues.length > 0 ? 'not_empty' : 'empty'
    },

    // Check if a checkbox matches the selected values and job data
    isCheckboxMatch(checkbox, selectedValues, job) {
      if (checkbox.flag === 'not_empty' || selectedValues.length > 0) {
        const mapProperty = checkbox.map
        return selectedValues.includes(job[mapProperty])
      }
      return true
    },

    // Update a job with additional details asynchronously
    async updateJobWithDetails(job, attachDetailsToJobPost) {
      if (job.isContactInfoVisible || (job.identifier && job.identifier.orgUid))
        return await attachDetailsToJobPost(job)

      return job
    },

    // Compare jobs for sorting, promoted jobs sould be displayed first.
    compareJobsForSorting(a, b) {
      if (a.promoted && !b.promoted)
        return -1
      if (!a.promoted && b.promoted)
        return 1
      return b.datePosted - a.datePosted
    },

    getSearchConfig() {
      // Convert to lowercase or default to an empty string if null
      const searchField = this.searchField?.toLowerCase() ?? ''

      const searchableFields = ['title', 'descriptionNoHtml', 'hiringOrganization.originalName']
      const searchableCheckboxes = [
        { key: 'selectedJobTypes', map: 'jobType' },
        { key: 'selectedLocationType', map: 'jobLocationType' },
        { key: 'selectedSeniorityType', map: 'jobSeniorityType' },
      ]

      return { searchField, searchableFields, searchableCheckboxes }
    },
    // Filter jobs based on search criteria and checkboxes
    filterJobs(data, searchConfig, checkboxFlags) {
      return data.map((dataItem) => {
        const publishedJobs = dataItem.published || []
        return publishedJobs.filter((job) => {
          const jobFields = searchConfig.searchableFields.map((field) => {
            const fieldValue = this.getFieldValue(job, field)
            return fieldValue ? fieldValue.toLowerCase() : ''
          })

          const fieldMatch = this.isFieldMatch(jobFields, searchConfig.searchField)

          const checkboxConditions = checkboxFlags.map((checkbox) => {
            return this.isCheckboxMatch(checkbox, this[checkbox.key], job)
          })

          const checkboxMatch = checkboxConditions.every(condition => condition)

          return fieldMatch && checkboxMatch
        })
      })
    },

    // Perform the job search action
    async searchJobs(orgName = null) {
      // log(`called from: ${calledFrom}`)

      // if (orgName) {
      //   log(`searching ${orgName} for jobs...`)
      // } else {
      //   log(`searching for all jobs...`)
      // }

      const { attachDetailsToJobPost } = useJobPostStore()

      this.lastSearch = this.searchField

      this.isJobsLoading = true

      try {
        await delay(800)

        const searchConfig = this.getSearchConfig()

        const checkboxFlags = searchConfig.searchableCheckboxes.map(checkbox => ({
          ...checkbox,
          flag: this.getCheckboxFlags(this[checkbox.key]),
        }))

        const jobData = await this.fetchJobsFromFirestore(orgName)

        const filteredJobsArrays = this.filterJobs(jobData, searchConfig, checkboxFlags)

        const combinedMatchingJobs = filteredJobsArrays.flat().sort(this.compareJobsForSorting)

        const updatedJobs = await Promise.all(
          combinedMatchingJobs.map(jobPost =>
            this.updateJobWithDetails(jobPost, attachDetailsToJobPost),
          ),
        )

        this.jobs = updatedJobs
      }
      catch (error) {
        console.error('Error searching for job posts:', error)
        this.jobs = []
      }
      finally {
        this.isJobsLoading = false
      }
    },
  },
})
