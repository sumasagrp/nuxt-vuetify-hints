<script setup lang="ts">
definePageMeta({
  name: 'Auth-Signup',
})

const title = 'Skriptjobs™ – Join hundreds of companies looking for talent like yours!'

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
  <VForm ref="formRef" v-model="validated" v-bind="{ ...formOptions }" @submit.prevent="handleSignUp">
    <VRow dense>
      <VCol cols="12" sm="6">
        <VTextField v-bind="{ ...firstNameField }" v-model.trim="form.names.firstName" />
      </VCol>

      <VCol cols="12" sm="6">
        <VTextField v-bind="{ ...lastNameField }" v-model.trim="form.names.lastName" />
      </VCol>

      <VCol cols="12">
        <VTextField v-bind="{ ...emailField }" v-model.trim="form.email" />
      </VCol>

      <VCol cols="12">
        <div class="h-24">
          <PasswordField v-bind="{ ...passwordField }" v-model="form.password" />
        </div>
      </VCol>
    </VRow>

    <FormSubmitButton v-bind="{ ...submitButton }" />
  </VForm>
</template>
