<script setup>
const organizationStore = useOrganizationStore()
const { updateOrgUrl, loading } = validateAndSave()
const { formFields, formRef, changed, sync, reset } = useFormFields(organizationStore, 'activeOrganization.orgUrl')

// Validation rules for the profile form fields
const rules = {
  orgUrl: [
    (value) => {
      try {
        Yup.string().required('You need to choose a url').validateSync(value)
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
    @submit.prevent="submitForm($event, updateOrgUrl, formFields, sync)"
  >
    <SettingsCard :kbd="changed" fill-height title="Skriptjobs public  URL">
      <!-- * [ Org Url field ] -->
      <VTextField
        v-model.trim="formFields.orgUrl"
        :rules="rules.orgUrl"
        append-inner-icon="i-mdi:web"
        counter
        label="skriptjobs.com/<your-organization>"
        maxlength="80"
        persistent-hint
        prefix="https://skriptjobs.com/"
        @click:append-inner.stop="
          formFields.orgUrl && openLink(`https://skriptjobs.com/search/${formFields.orgUrl}`)
        "
      />

      <template #footer>
        <VSpacer />
        <SettingsButton v-show="changed" light title="Reset" @click="reset" />
        <SettingsButton :disabled="!changed" :loading="loading" submit title="Save" />
      </template>
    </SettingsCard>
  </VForm>
</template>
