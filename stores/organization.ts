export const useOrganizationStore = defineStore('global-organization', {
  state: () => ({
    avatarPlaceholder: null,

    organizations: [],

    collaborators: [],

    selectedOrganization: [],

    generatedInvitationCode: '',

    isJobsSnapshotLoading: true,
    isOrganizationLoading: false,

    // Realtime Snapshots
    unsubscribeOrganizationSnapshot: null,

    // Organization Collaboration
    // collaborationSettings: null,

    isLookingUpOrganizationLoading: false,

    searchCollaborators: '',

    rules: {
      orgName: [
        (value) => {
          try {
            Yup.string()
              .required('You need to choose a valid organization name')
              .nullable()
              .validateSync(value)
            return true
          }
          catch (error) {
            return error.message
          }
        },
      ],
      orgUrl: [
        (value) => {
          try {
            Yup.string()
              .required('You need to choose a valid public url')
              .nullable()
              .matches(/^[a-zA-Z0-9]*$/, 'Please enter a valid alphanumeric word ')
              .validateSync(value)
            return true
          }
          catch (error) {
            return error.message
          }
        },
      ],

      orgIndustry: [
        (value) => {
          try {
            Yup.object()
              .required('You need to select an organization industry')
              .nullable()
              .validateSync(value)
            return true
          }
          catch (error) {
            return error.message
          }
        },
      ],

      orgSize: [
        (value) => {
          try {
            Yup.object()
              .required('You need to select and average range ')
              .nullable()
              .validateSync(value)
            return true
          }
          catch (error) {
            return error.message
          }
        },
      ],
      orgType: [
        (value) => {
          try {
            Yup.object()
              .required('You need to select an organization type')
              .nullable()
              .validateSync(value)
            return true
          }
          catch (error) {
            return error.message
          }
        },
      ],
      orgEmail: [
        (value) => {
          try {
            Yup.string()
              .required('You need to choose a valid organization rmail')
              .email()
              .nullable()
              .validateSync(value)
            return true
          }
          catch (error) {
            return error.message
          }
        },
      ],
      orgTagline: [
        (value) => {
          try {
            Yup.string().required('You need to choose a tagline').nullable().validateSync(value)
            return true
          }
          catch (error) {
            return error.message
          }
        },
      ],
    },
  }),

  actions: {
    async uploadOrgAvatar(file, orgId) {
      return await handleUploadOrgAvatar(file, orgId || this.orgId)
    },

    async removeOrgAvatar() {
      return await handleRemoveOrgAvatar(this.orgId, this.avatarPlaceholder)
    },

    async updateOrgName(name) {
      return await handleUpdateOrgName(this.orgId, name)
    },

    async updateOrgUrl(url) {
      return await handleUpdateOrgUrl(this.orgId, url)
    },

    async updateOrgWebsite(website) {
      return await handleUpdateOrgWebsite(this.orgId, website)
    },

    async updateOrgSize(size) {
      return await handleUpdateOrgSize(this.orgId, size)
    },

    async updateOrgIndustry(industry) {
      return await handleUpdateOrgIndustry(this.orgId, industry)
    },

    async updateOrgType(type) {
      return await handleUpdateOrgType(this.orgId, type)
    },

    async updateOrgTagline(tagline) {
      return await handleUpdateOrgTagline(this.orgId, tagline)
    },

    async updateOrgFounded(date) {
      return await handleUpdateOrgFounded(this.orgId, date)
    },

    async updateOrgAbout(about) {
      return await handleUpdateOrgAbout(this.orgId, about)
    },

    async updateOrganizationSocialNetworks(socialNetworks) {
      return await handleUpdateOrganizationSocialNetworks(this.orgId, socialNetworks)
    },

    // Collaboration
    async generateCollaborationInviteCode(inviteCode) {
      const { userId } = toRefs(useUserProfileStore())

      inviteCode.datePosted = getFormattedDateTime()
      inviteCode.organization = this.orgId
      inviteCode.generatedByUserId = userId.value
      return await handleGenerateCollaborationInviteCode(this.orgId, inviteCode)
    },

    async lookupOrganizationByOtpInvitation(otp) {
      return await handleLookupOrganizationByOtpInvitation(otp)
    },

    // Welcome Wizard Related
    async lookupOrganizationOwnersById(orgOwners) {
      this.isLookingUpOrganizationLoading = true

      await delay(1000)

      try {
        const orgCollectionName = 'users'

        const orgCollectionRef = collection(db, orgCollectionName)
        const q = query(orgCollectionRef, where('uid', 'in', orgOwners))

        onSnapshot(q, (snapshot) => {
          const collaborators = []

          snapshot.forEach((doc) => {
            collaborators.push(doc.data())
          })

          this.collaborators = collaborators
        })
      }
      catch (error) {
        throw new Error(`Setting default organization failed. ${error}`)
      }
      finally {
        this.isLookingUpOrganizationLoading = false
      }
    },

    async updateOrganizationOwners(orgId, ownerId) {
      return await handleUpdateOrganizationOwners(orgId, ownerId)
    },

    async createOrganizationProfile(payload) {
      return await handleCreateOrganizationProfile(payload)
    },

    async updateCreatedOrgProfile(newOrgId, payload) {
      return await handleUpdateCreatedOrgProfile(newOrgId, payload)
    },

    verifyOrgIdExistenceInUserProfile(orgId) {
      return this.organizationsIds.find(id => id === orgId)
    },

    async leaveOrganization(orgId, ownerId) {
      return await handleLeaveOrganization(orgId, ownerId)
    },

    async setDefaultOrganization(orgId) {
      const { updatePreferenceDefaultOrganization } = useUserProfileStore()

      try {
        await updatePreferenceDefaultOrganization({
          preferences: {
            defaultOrganization: orgId,
          },
        })
      }
      catch (error) {
        throw new Error(`Setting default organization failed. ${error}`)
      }
    },

    /*
     * This realtime snapshot allows real-time updates in the
     * currently selected organization object.
     */
    async createOrganizationsRealtimeSnapshot() {
    /*
     * Don't create a snapshot yet, as we won't be interacting with
     * organizations yet, we are in the process of creating one.
     */

      const { assignedOrganizationsIds } = toRefs(useUserProfileStore())
      const { isOrganizationProfile } = toRefs(useUserProfileStore())

      // Introduce a loading state
      this.isOrganizationLoading = true

      await delay(600)

      if (!assignedOrganizationsIds?.value?.length || !isOrganizationProfile?.value) {
        this.organizations = []
        this.isOrganizationLoading = false
        return
      }

      const orgCollectionRef = collection(db, 'organizations')
      const q = query(orgCollectionRef, where('uid', 'in', assignedOrganizationsIds?.value))

      onSnapshot(q, (snapshot) => {
        const organizationsData = []

        snapshot?.forEach((doc) => {
          organizationsData.push(doc?.data())
        })

        this.organizations = this.sortOrganizationsByDragOrderPreference(
          assignedOrganizationsIds,
          organizationsData,
        )

        // Update loading state when data retrieval is completed
        this.isOrganizationLoading = false
      })
    },

    /*
     * This will make sure to show the assigned organizations
     * in the right dregged order.
     */
    sortOrganizationsByDragOrderPreference(orgIds, organizations) {
      // Sort organizationsData based on the order of assignedOrganizationsIds

      return organizations.length > 1
        ? orgIds.value.map(id => organizations.find(org => org.uid === id))
        : organizations
    },
  },

  getters: {

    organizationCollaborators(state) {
      if (!state.collaborators.length)
        return []
      return state.collaborators
    },

    filteredCollaborators() {
      const searchableFields = ['email', 'names']

      if (!this.organizationCollaborators.length)
        return []

      return this.organizationCollaborators
        .filter(item =>
          searchableFields
            .map(field => item[field])
            .some(value =>
              value
                .toString()
                .toLowerCase()
                .includes(this.searchCollaborators.toLowerCase() ?? ''),
            ),
        )
    },

    orgId() {
      return this.activeOrganization?.uid
    },

    activeOrganization(state) {
      // Destructuring to get defaultOrganization from the user profile store
      const { defaultOrganization } = toRefs(useUserProfileStore())

      // Retrieve the first organization in the state
      // const firstOrganization = state.organizations[0]

      // Function to find an organization by Id
      const findOrganizationById = uid => state?.organizations?.find(o => o?.uid === uid)

      const selectedOrg = state.selectedOrganization[0]
      const hasSelectedOrg = selectedOrg && findOrganizationById(selectedOrg)

      const defaultOrg = defaultOrganization.value
      const hasDefaultOrg = defaultOrg && findOrganizationById(defaultOrg)

      const firstAvailableOrg = state.organizations[0]

      const attachCollaborationEvents = {
        ...this.attachCollaborationEvents,
      }

      // const attachCollaborators = {
      //   ...this.attachCollaborators,
      // }

      // return hasDefaultOrg || hasSelectedOrg || selectedOrg
      return {
        ...(hasDefaultOrg || hasSelectedOrg || firstAvailableOrg),
        // ...attachCollaborators,
        ...attachCollaborationEvents,
      }
    },

    activeOrganizationName(state) {
      return state.activeOrganization?.orgName
    },

    activeOrganizationOwners(state) {
      return state.activeOrganization?.orgOwners
    },

    organizationAvatar(state) {
      return state.activeOrganization?.photoURL
    },

    isOrganizationsEmpty(state) {
      return !state.organizations.length
    },

    /**
     * Get the active organization with collaboration settings.
     * @param {object} state - The Vuex state object containing organizations.
     * @returns {object|null} The active organization object with collaboration settings, or null if not found.
     */

    attachCollaborationEvents() {
      const { events } = useEventHubStore()
      return {
        ...events,
      }
    },

    /*
     * This is the list of organization ids the user has assigned.
     */

    organizationsIds(state) {
      if (state.organizations && Array.isArray(state.organizations)) {
        return state.organizations
          .filter(org => org && typeof org === 'object' && org.uid)
          .map(org => org.uid)
      }
      return []
    },
  },
})
