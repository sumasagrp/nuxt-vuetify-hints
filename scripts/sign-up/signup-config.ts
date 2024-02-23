import { useSignUpContext } from './signup-context'

/**
 * Creates a configuration object for the sign-in form, including form options,
 * password field, email field, and submit button properties.
 *
 * @returns {object} - An object containing configuration options for the sign-in form.
 */

export function createSignUpConfig() {
  /**
   * This function creates an object context to encapsulate logic related to user authentication.
   * It provides methods and properties for handling sign-in submissions and password visibility toggling.
   */

  const { rules, form, handleSignUp, validated } = useSignUpContext()
  const { loading } = toRefs(useAuthStore())

  // Form Options Configuration
  const formOptions = computedEager(() => ({
    validateOn: 'submit lazy',
  }))

  const firstNameField = {
    label: 'First name',
    autofocus: true,
    rules: rules.firstName,
  }

  // Email Field Configuration
  const lastNameField = {
    label: 'Last name',
    rules: rules.lastName,
  }

  // Email Field Configuration
  const emailField = {
    label: 'Email',
    rules: rules.email,
    placeholder: 'your@email.com',
  }

  // Password Field Configuration
  const passwordField = {
    rules: rules.password,
    hint: 'your password needs to be at least 10 characters. Include multiple words and phrases to make it more secure',
  }

  // Submit Button Configuration
  const submitButton = computedEager(() => ({
    class: 'mt-2',
    color: 'black-button',
    loading: loading.value,
    text: 'Create account',
  }))

  return {
    form,
    validated,
    formOptions,
    firstNameField,
    lastNameField,
    passwordField,
    emailField,
    submitButton,
    handleSignUp,
  }
}
