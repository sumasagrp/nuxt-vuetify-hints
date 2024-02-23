/**
 * This function creates an object context to encapsulate logic related to user authentication.
 * It provides methods and properties for handling sign-in submissions and password visibility toggling.
 *
 * @returns {object} - An object containing various properties and methods for authentication.
 */

export function useSignInContext() {
  const validated = ref()

  const rules = {
    email: [
      (value) => {
        try {
          Yup.string()
            .required('The email is required')
            .email('The email is invalid')
            .validateSync(value)
          return true
        }
        catch (error) {
          return error.message
        }
      },
    ],

    password: [
      (value) => {
        try {
          Yup.string().required('The password is required').validateSync(value)
          return true
        }
        catch (error) {
          return error.message
        }
      },
    ],
  }

  // Reactive object for user credentials
  const credentials = reactive({
    email: '',
    password: '',
  })

  // const shakeElement = inject('shakeElement')
  // const startShaking = shakeElement ? shakeElement.startShaking : undefined

  const { signInWithEmail, navigateToApp } = useAuthStore()
  const { authenticated, signin } = signInWithEmail()
  const { loading } = toRefs(useAuthStore())

  async function handleSignIn(event) {
    try {
      const { valid } = await event

      if (!valid) {
        // startShaking()
        return
      }

      loading.value = true
      await signin(credentials)

      if (!authenticated.value) {
        // startShaking()
        return
      }

      navigateToApp()
    }
    catch (error) {
      // startShaking()
    }
    finally {
      loading.value = false
    }
  }

  // Return the context object with properties and methods
  return {
    loading,
    rules,
    credentials,
    validated,
    handleSignIn,
  }
}
