<script setup>
definePageMeta({
  name: 'Auth-Signin',
})

const title = 'Skriptjobs™ – Sign in and start the journey!'

useSeoMeta({
  title,
  description,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
  ogTitle: title,
})

// Create the configuration for the sign-in form elements.
const {
  validated,
  formOptions,
  emailField,
  passwordField,
  submitButton,
  credentials,
  handleSignIn,
} = createSignInConfig()

const { formRef } = toRefs(useAuthStore())
</script>

<template>
  <VForm ref="formRef" v-bind="{ ...formOptions }" v-model="validated" @submit.prevent="handleSignIn">
    <VRow dense>
      <VCol>
        <VTextField v-bind="{ ...emailField }" v-model="credentials.email" />
      </VCol>

      <VCol cols="12">
        <div class="flex justify-end mt-n2">
          <div>Forgot your password? </div>
        </div>
        <PasswordField v-bind="{ ...passwordField }" v-model="credentials.password" />
      </VCol>
    </VRow>

    <VRow dense>
      <VCol sm="6">
        <VCheckbox class="ml-n2" label="Stay signed in" />
      </VCol>

      <VCol class="justify-sm-end flex items-center" cols="12" sm="6">
        <div>Single sign-on (SSO)</div>
      </VCol>
    </VRow>
    <FormSubmitButton v-bind="{ ...submitButton }" />
  </VForm>
</template>
