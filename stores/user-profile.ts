export const useUserProfileStore = defineStore('global-user-profile', {
  state: () => ({
    profile: null,
    // avatarPlaceholder: '/avatars/avatar_placeholder.png',
    avatarPlaceholder: null,
    /*
     * used by setUserAndProfile firebase authentication helper.
     * src/firebase
     */

    unsubscribeProfileSnapshot: null,
  }),

  actions: {
    async uploadProfileAvatar(file, userId) {
      return await handleUploadProfileAvatar(file, userId || this.userId)
    },

    async removeProfileAvatar() {
      return await handleRemoveProfileAvatar(this.userId, this.avatarPlaceholder)
    },

    async updateProfileNames(names) {
      return await handleUpdateProfileNames(this.userId, names)
    },

    async updateProfilePhone(phone) {
      return await handleUpdateProfilePhone(this.userId, phone)
    },

    async updateProfileCountry(country) {
      return await handleUpdateProfileCountry(this.userId, country)
    },

    async updateProfileSocialNetworks(socialNetworks) {
      return await handleUpdateProfileSocialNetworks(this.userId, socialNetworks)
    },

    async updateProfileWebsite(website) {
      return await handleUpdateProfileWebsite(this.userId, website)
    },

    // Organizaton related
    async updatePreferenceDefaultOrganization(defaultOrg) {
      return await handleUpdatePreferenceDefaultOrganization(this.userId, defaultOrg)
    },

    async updatePreferenceOrganizationsListOrder(orderedList) {
      return await handleUpdatePreferenceOrganizationsListOrder(this.userId, orderedList)
    },

    // Welcome Wizard Related
    async createInitialProfilePreferences(preferences) {
      return await handleCreateInitialProfilePreferences(this.userId, preferences)
    },

    async updateFirstCreatedUserProfile(payload) {
      return await handleUpdateFirstCreatedUserProfile(this.userId, payload)
    },

    // Welcome Wizard Related
    async updateUserProfileOrganizations(orgId, ownerId) {
      return await handleUpdateUserProfileOrganizations(orgId, ownerId)
    },

  },

  getters: {
    isNewUser() {
      return this.profile?.flags?.isNewUser
    },

    preferences() {
      return this.profile?.preferences
    },

    userId() {
      return useAuthStore().userId
    },

    profileId() {
      return this.profile?.uid
    },

    profileFirstNameInitial() {
      const { profile } = this
      if (!profile)
        return null

      return `${capitalize(profile?.names?.firstName[0])}`
    },

    profileFirstName() {
      const { profile } = this
      if (!profile)
        return null

      return `${capitalize(profile?.names?.firstName)}`
    },

    profileFullName() {
      const { profile } = this
      if (!profile)
        return null

      return `${capitalize(profile?.names?.firstName)} ${capitalize(profile?.names?.lastName)}`
    },

    profileEmail() {
      const { profile } = this
      if (!profile)
        return null
      return `${profile?.email}`
    },

    profileAvatar() {
      const { profile } = this
      return profile?.photoURL
    },

    isOrganizationProfile() {
      return !!this.profile?.flags?.isOrganizationProfile
    },

    defaultOrganization() {
      return this.profile?.preferences?.defaultOrganization
    },

    assignedOrganizationsIds() {
      const { profile } = this
      if (!profile)
        return null
      return profile?.organizations
    },

  },
})
