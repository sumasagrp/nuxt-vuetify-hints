import { useSignInContext } from './signin-context'

/**
 * Creates a configuration object for the sign-in form, including form options,
 * password field, email field, and submit button properties.
 *
 * @returns {object} - An object containing configuration options for the sign-in form.
 */

export function createSignInConfig() {
  /**
   * This function creates an object context to encapsulate logic related to user authentication.
   * It provides methods and properties for handling sign-in submissions and password visibility toggling.
   */

  const { rules, loading, credentials, handleSignIn, validated } = useSignInContext()

  // Form Options Configuration
  const formOptions = computedEager(() => ({
    validateOn: 'submit lazy',
    // disabled: loading.value,
    modelValue: validated.value,
  }))

  // Password Field Configuration
  const passwordField = {
    rules: rules.password,
  }

  // Email Field Configuration
  const emailField = {
    label: 'Email',
    autofocus: true,
    rules: rules.email,
    placeholder: 'your@email.com',
  }

  // Submit Button Configuration
  const submitButton = computedEager(() => ({
    class: 'mt-2',
    color: 'black-button',
    loading,
    text: 'Sign in',
  }))

  return {
    validated,
    formOptions,
    passwordField,
    emailField,
    submitButton,
    credentials,
    handleSignIn,
  }
}
