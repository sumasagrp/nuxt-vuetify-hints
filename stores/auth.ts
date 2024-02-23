/*
 * Firebase authentication related logic.
 */

export const useAuthStore = defineStore('global-auth', {
  state: () => ({
    user: null,
    loading: false,
    loadingGoogle: false,
    formRef: null,
  }),

  getters: {
    // Get the user ID if available, otherwise return null.
    userId: state => state.user?.uid || null,

    // Check if a user is currently logged in.
    isLoggedIn: state => !!state.user,
  },

  actions: {
    /*
       * This claim is needed to be used in router-guards to prevent non-organization
       * profiles to access organization only views.
       */

    async removeNewUserClaim() {
      return await handleRemoveNewUserClaim('isNewUser', false)
    },

    /*
       * This claim is needed to be used in router-guards to remove the force re-route
       * to the welcome wizard screen.
       */

    async addOrgProfileClaim() {
      return await handleAddOrgProfileClaim('isOrgProfile', true)
    },

    fields() {
      return {
        flags: {
          isVerified: false,
          isDisabled: false,
          isBanned: false,
          isNewUser: true,
        },
      }
    },

    signInWithEmail() {
      const authenticated = ref(false)

      async function signin(credentials) {
        log('reached signin function inside signInWithEmail')

        const { email, password } = credentials

        if (!email || !password)
          throw new Error('Email and password fields are required to sign in.')

        try {
          await delay(1500)

          await signInWithEmailAndPassword(auth, email, password)

          authenticated.value = true
        }
        catch (error) {
          snackbar(error, 'error')
        }
      }

      return { authenticated, signin }
    },

    async signInWithGooglePopup() {
      const provider = new GoogleAuthProvider()

      provider.setCustomParameters({
        prompt: 'select_account',
        display: 'popup',
      })

      return await signInWithPopup(auth, provider)
    },

    signupWitEmail() {
      async function signup(form) {
        const { email, password } = form

        if (!email || !password)
          throw new Error('Email and password fields are required to sign in.')

        try {
          await delay(1500)

          const userCredential = await createUserWithEmailAndPassword(auth, email, password)

          const { user } = userCredential
          await this.addUserToUsersCollection(user, form)

          this.router.push('/app/profile')
        }
        catch (error) {
          snackbar(error.code, 'error')
        }
      }

      // Using bind(this) to maintain the 'this' context.
      // Ensures 'this' inside the 'signup' function refers
      // to the same object as 'this' in the outer scope.

      const boundSignup = signup.bind(this)
      return { signup: boundSignup }
    },

    async signOutCurrentUser() {
      const organizationStore = useOrganizationStore()
      const jobPostStore = useJobPostStore()
      const authStore = useAuthStore()

      // const { unsubscribeJobSnapshot } = toRefs(useJobPostStore())
      // const { unsubscribeOrganizationSnapshot } = toRefs(useOrganizationStore())

      try {
        await signOut(auth)

        /*
           * Reset the stores to their initial state.
           * This avoids the data from the previous user to be displayed.
           */

        authStore.$reset()
        jobPostStore.$reset()
        organizationStore.$reset()

        /*
           * Reduce Data Transfer, Performance Optimization, Preventing Memory Leaks
           * it's a good practice to manage your listeners and unsubscribe them when they are no longer required,
           */

        // unsubscribeJobSnapshot.value?.()
        // unsubscribeOrganizationSnapshot?.value()
      }
      catch (error) {
        log(error)
      }
    },

    async addUserToUsersCollection(user, form) {
      const { avatarPlaceholder } = useUserProfileStore()
      const { email, names } = form

      // Adds a document in a  firestore collection.
      // doc (Firestore instance, collection name, collection id).
      const userDocRef = doc(db, 'users', user.uid)

      // User profile fields to be created in db (payload)
      const userDocData = {
        photoURL: avatarPlaceholder,
        uid: user.uid,
        email,
        names,
        ...this.fields(),
      }

      // SetDoc (Firestore, Payload)
      // creates the user profile in the db collection.
      await setDoc(userDocRef, userDocData)

      try {
        await setDoc(userDocRef, userDocData)
        return {
          created: true,
        }
      }
      catch ({ ...error }) {

      }
    },

    /**
     * Adds a user document to the "users" collection in Firestore.
     *
     * @param {object} user - The user object containing user information.
     * @param {string} user.uid - The unique identifier of the user.
     * @param {string} user.email - The email address of the user.
     * @param {string} user.displayName - The display name of the user.
     * @param {string} user.photoURL - The URL of the user's profile photo.
     * @returns {Promise<object>} - A promise that resolves to an object indicating whether the document was created successfully.
     * @throws {Error} - If an error occurs while adding the document to the collection.
     */
    async addUserToUsersCollectionGoogle(user) {
      // Adds a document in a firestore collection.
      // doc (Firestore instance, collection name, collection id).
      const userDocRef = doc(db, 'users', user.uid)

      const { uid, email, displayName, photoURL } = user

      // Get an array of names
      const names = displayName.split(/(\s+)/)

      // User profile fields to be created in db (payload)
      const userDocData = {
        ...this.fields(),
        uid,
        email,
        names: { firstName: names[0], lastName: names.slice(1).join('').trim() },
        photoURL,
      }

      /**
       * Authentication providers should be considered trusted sources.
       */
      userDocData.flags.isVerified = true

      try {
        await setDoc(userDocRef, userDocData)
        return {
          created: true,
        }
      }
      catch ({ ...error }) {

      }
    },

    async authenticateWithGoogle() {
      try {
        this.loadingGoogle = true
        const userCredential = await this.signInWithGooglePopup()

        const { user } = userCredential

        const userExists = await this.checkIfUserExists(user.uid)

        if (!userExists) {
          const profileCreated = await this.createUserProfile(user)

          if (!profileCreated)
            return
        }

        if (userCredential)
          this.navigateToApp()
      }
      catch (error) {
        this.handleGoogleAuthenticationError(error)
      }
      finally {
        this.loadingGoogle = false
      }
    },

    handleGoogleAuthenticationError(error) {
      snackbar(
          `Something went wrong getting your Google credentials to work. Try again or contact support for assistance : ${error}`,
          'error',
      )

      if (error.code === 'auth/account-exists-with-different-credential')
        snackbar('User already exists...', 'error')
    },

    async createUserProfile(user) {
      const profile = await this.addUserToUsersCollectionGoogle(user)
      return profile.created
    },

    async checkIfUserExists(uid) {
      const docRef = doc(db, 'users', uid)
      const docSnap = await getDoc(docRef)
      return docSnap.exists()
    },

    navigateToApp() {
      this.router.push('/app/profile')
    },

    async isOrgProfileVerification() {
      // Get the current user's ID token result.
      const user = auth.currentUser

      if (!user)
        return

      const idTokenResult = await user.getIdTokenResult()
      const isOrganizationProfile = idTokenResult?.claims.isOrgProfile
      return !!isOrganizationProfile
    },

    async isNewUserVerification() {
      // Get the current user's ID token result.
      const user = auth.currentUser

      if (!user)
        return

      const idTokenResult = await user.getIdTokenResult()
      const isNewUserClaim = idTokenResult?.claims.isNewUser
      return !!isNewUserClaim
    },
  },
})
