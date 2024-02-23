<script setup>
const organizationStore = useOrganizationStore()
const { activeOrganization } = toRefs(organizationStore)

const { orgTagline = null } = activeOrganization.value || {}

const orgtaglineForm = reactive({
  orgTagline,
})

// Use the useResetRef composable to manage the state of the profile form
const { reset, hasNewValues, syncInitialValues } = useResetRef(orgtaglineForm)

const taglineForm = ref()

// Get form values to its default values.
function resetForm() {
  // Reset validations,
  // since we are validating lazily.
  taglineForm.value.resetValidation()
  reset()
}

const validationPassed = ref()

// Validation rules for the profile form fields
const rules = {
  orgUrl: [
    (value) => {
      try {
        Yup.string().required('You need to choose a tagline').validateSync(value)
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

async function updateOrgTagline(validationEvent) {
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
    await organizationStore.updateOrgTagline({ ...orgtaglineForm })

    // Update the initial values to reflect the current state of the profile form
    syncInitialValues()

    snackbar('Tagline has been updated.')
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
    ref="taglineForm"
    v-model="validationPassed"
    @keyup.esc="resetForm()"
    @submit.prevent="updateOrgTagline"
  >
    <SettingsCard :kbd="hasNewValues" title="Organization Tagline">
      <!-- * [ Org Tagline field ] -->
      <VTextField
        v-model.trim="orgtaglineForm.orgTagline"
        :rules="rules.orgTagline"
        counter
        label="Organization tagline"
        maxlength="120"
        placeholder="An information services firm helping small companies succeed."
      />

      <template #footer>
        <VSpacer />
        <SettingsButton v-show="hasNewValues" light title="Reset" @click="resetForm()" />
        <SettingsButton :disabled="!hasNewValues" :loading="isSavingLoading" submit title="Save" />
      </template>
    </SettingsCard>
  </VForm>
</template>
