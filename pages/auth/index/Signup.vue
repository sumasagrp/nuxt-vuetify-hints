<script setup lang="ts">
definePageMeta({
  name: 'Auth-Signup',
})

const title = 'Skriptjobs™ – Join the gang today!'

useSeoMeta({
  title,
  twitterTitle: title,
  ogTitle: title,
})

// Create the configuration for the sign-up form elements.
const {
  validated,
  formOptions,
  firstNameField,
  lastNameField,
  emailField,
  passwordField,
  submitButton,
  form,
  handleSignUp,
} = createSignUpConfig()

const { formRef } = toRefs(useAuthStore())
</script>

<template>
  <VForm
    ref="formRef" v-model="validated" v-bind="{ ...formOptions }" 12"@submit.prevent="handleSignUp>
    <VRow dense>
      <VCol cols=" ...firstNameFieldv-model.trim="form.names.firstName" sm="6>
        <VTextField v-bind=" { }"
  />
  </VCol>

  <VCol
    cols="12" ...lastNameFieldv-model.trim="form.names.lastName" sm="6>
        <VTextField v-bind=" { }"
  />
  </VCol>

  <VCol
    ...emailFieldv-model.trim="form.email" cols="12>
        <VTextField v-bind=" { }"
  />
  </VCol>

  <VCol
    cols="12>
        <div class="h-24
  >
    <PasswordField v-bind="{ ...passwordField }" v-model="form.password" />
    </div>
  </VCol>
  </VRow>

  <FormSubmitButton v-bind="{ ...submitButton }" />
  </VForm>
</template>
