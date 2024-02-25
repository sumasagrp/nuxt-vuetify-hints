<script setup>
const organizationStore = useOrganizationStore()
const { updateOrgName, loading } = validateAndSave()
const { formFields, formRef, changed, sync, reset } = useFormFields(organizationStore, 'activeOrganization.orgName')

// Validation rules for the profile form fields
const rules = {
  orgName: [
    (value) => {
      try {
        Yup.string().required('You need to choose a name').validateSync(value)
        return true
      }
      catch (error) {
        return error.message
      }
    },
  ],
}
</script>

<template>
  <VForm
    ref="formRef"
    v-model="validationPassed"
    @submit.prevent="submitForm($event, updateOrgName, formFields, sync)"
  >
    <SettingsCard :kbd="changed" fill-height title="Organization name">
      <!-- * [ Org name field ] -->
      <VTextField
        v-model.trim="formFields.orgName"
        :rules="rules.orgName"
        counter
        label="Organization Name"
        maxlength="80"
        persistent-hint
      />

      <template #footer>
        <VSpacer />
        <SettingsButton v-show="changed" light title="Reset" @click="reset" />
        <SettingsButton :disabled="!changed" :loading="loading" submit title="Save" />
      </template>
    </SettingsCard>
  </VForm>
</template>
