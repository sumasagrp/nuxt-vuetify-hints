<script setup>
const organizationStore = useOrganizationStore()
const { activeOrganization } = toRefs(organizationStore)

const { orgUrl = null } = activeOrganization.value || {}

const orgNameForm = reactive({
  orgUrl,
})

// Use the useResetRef composable to manage the state of the profile form
const { reset, hasNewValues, syncInitialValues } = useResetRef(orgNameForm)

const urlForm = ref()

// Get form values to its default values.
function resetForm() {
  // Reset validations,
  // since we are validating lazily.
  urlForm.value.resetValidation()
  reset()
}

const validationPassed = ref()

// Validation rules for the profile form fields
const rules = {
  orgUrl: [
    (value) => {
      try {
        Yup.string().required('You need to choose a url').validateSync(value)
        return true // Return true if validation passes
      }
      catch (error) {
        return error.message // Return the error message if validation fails
      }
    },
  ],
}

/**
 * Asynchronously saves the profile based on a validation event.
 *
 * @param {object} validationEvent - An object representing the validation event.
 */

const isSavingLoading = ref(false)

async function updateOrgUrl(validationEvent) {
  // Extract the 'valid' property from the validation event
  const { valid } = await validationEvent

  // If the validation is not valid, show an alert and stop the process
  if (!valid) {
    snackbar('Please, correct the required fields.', 'error')
    return
  }

  // Set the isSavingLoading flag to true to indicate that the save operation is in progress
  isSavingLoading.value = true

  try {
    await organizationStore.updateOrgUrl({ ...orgNameForm })

    // Update the initial values to reflect the current state of the profile form
    syncInitialValues()

    snackbar('Url has been updated.')
  }
  catch (error) {
    snackbar(`An error occurred: ${error} `, 'error')
  }
  finally {
    // Regardless of the outcome, set isSavingLoading to false
    // to indicate the end of the save operation
    isSavingLoading.value = false
  }
}
</script>

<template>
  <VForm
    ref="urlForm"
    v-model="validationPassed"
    @keyup.esc="resetForm()"
    @submit.prevent="updateOrgUrl"
  >
    <SettingsCard :kbd="hasNewValues" fill-height title="Skriptjobs public  URL">
      <!-- * [ Org Url field ] -->
      <VTextField
        v-model.trim="orgNameForm.orgUrl"
        :rules="rules.orgUrl"
        append-inner-icon="i-mdi:web"
        counter
        label="skriptjobs.com/<your-organization>"
        maxlength="80"
        persistent-hint
        prefix="https://skriptjobs.com/"
        @click:append-inner.stop="
          orgNameForm.orgUrl && openLink(`https://skriptjobs.com/search/${orgNameForm.orgUrl}`)
        "
      />

      <template #footer>
        <VSpacer />
        <SettingsButton v-show="hasNewValues" light title="Reset" @click="resetForm()" />
        <SettingsButton :disabled="!hasNewValues" :loading="isSavingLoading" submit title="Save" />
      </template>
    </SettingsCard>
  </VForm>
</template>
