/**
 * This function creates an object context to encapsulate logic related to user authentication.
 * It provides methods and properties for handling sign-in submissions and password visibility toggling.
 *
 * @returns {object} - An object containing various properties and methods for authentication.
 */

export function useSignUpContext() {
  const validated = ref()

  const rules = {
    firstName: [
      (value) => {
        try {
          Yup.string().required('a first name is required').validateSync(value)
          return true
        }
        catch (error) {
          return error.message
        }
      },
    ],

    lastName: [
      (value) => {
        try {
          Yup.string().required('a last name is required').validateSync(value)
          return true
        }
        catch (error) {
          return error.message
        }
      },
    ],

    email: [
      (value) => {
        try {
          Yup.string()
            .required('an email is required')
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
          Yup.string().required('a password is required').validateSync(value)
          return true
        }
        catch (error) {
          return error.message
        }
      },
    ],
  }

  // const shakeElement = inject('shakeElement')
  // const startShaking = shakeElement ? shakeElement.startShaking : undefined

  const { signupWitEmail } = useAuthStore()
  const { signup } = signupWitEmail()
  const { loading } = toRefs(useAuthStore())

  // Reactive object for user credentials
  const form = reactive({
    names: {
      firstName: '',
      lastName: '',
    },
    email: '',
    password: '',
  })

  async function handleSignUp(event) {
    try {
      const { valid } = await event

      if (!valid) {
        // startShaking()
        return
      }

      loading.value = true

      await signup(form)
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
    rules,
    loading,
    form,
    validated,
    handleSignUp,
  }
}
