/*
 * General application related logic.
 */

export const useRoutingStore = defineStore('global-routing', {

  getters: {
    route() {
      return useRoute()
    },

    routeName() {
      return this.route?.name
    },

    routePath() {
      return this.route?.path
    },

    routeMeta() {
      return this.route?.meta
    },

    isSecureLayout() {
      return this.routeMeta?.layout === 'secure'
    },

    isSignInView() {
      return this.routeName === 'Auth-Signin'
    },

    isWelcomeScreenSeeker() {
      return this.routeName?.includes('new/seeker')
    },

    isWelcomeScreenOrganization() {
      return this.routeName?.includes('new/organization.step')
    },

    isWelcomeScreenJoin() {
      return this.routeName === 'new/organization.join'
    },

    isWelcomeScreen() {
      return this.routePath?.includes('new')
    },

    isWelcomeScreenIntro() {
      return this.routeName === 'welcome-Intro'
    },

    isWelcomeScreenCompletion() {
      return this.routeName === 'Welcome-Completion'
    },

    isWelcomeFirstStep() {
      const substringsToCheck = ['step.1', 'step/1']
      return substringsToCheck.some(substring => this.routeName?.includes(substring))
    },

    isNewJobPostView() {
      return this.routeName === 'Jobpost-New'
    },

  },
})
