<script setup>
import orgIndustry from '@/data/job-industries'

const organizationStore = useOrganizationStore()
const { activeOrganization } = toRefs(organizationStore)

const orgIndustryForm = reactive({
  orgIndustry: activeOrganization.value?.orgIndustry,
})

// Use the useResetRef composable to manage the state of the profile form
const { reset, hasNewValues, syncInitialValues } = useResetRef(orgIndustryForm)

const industryForm = ref()

// Get form values to its default values.
function resetForm() {
  // Reset validations,
  // since we are validating lazily.
  industryForm.value.resetValidation()
  reset()
}

const validationPassed = ref()

// Validation rules for the profile form fields
// const rules = {
//   orgIndustry: [
//     (value) => {
//       try {
//         Yup.string().validateSync(value)
//         return true // Return true if validation passes
//       }
//       catch (error) {
//         return error.message // Return the error message if validation fails
//       }
//     },
//   ],
// }

/**
 * Asynchronously saves the profile based on a validation event.
 *
 * @param {object} validationEvent - An object representing the validation event.
 */

const isSavingLoading = ref(false)

async function updateOrgIndustry(validationEvent) {
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
    await organizationStore.updateOrgIndustry({ ...orgIndustryForm })

    // Update the initial values to reflect the current state of the profile form
    syncInitialValues()

    snackbar('Organization industry has been updated.')
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
    ref="industryForm"
    v-model="validationPassed"
    @keyup.esc="resetForm()"
    @submit.prevent="updateOrgIndustry"
  >
    <SettingsCard :kbd="hasNewValues" title="Organization Industry">
      <!-- * [ Org industry field ] -->
      <VAutocomplete
        v-model.trim="orgIndustryForm.orgIndustry"
        :items="orgIndustry"
        clear-on-select
        hide-no-data
        label="Organization Industry"
        maxlength="20"
        persistent-hint
        return-object
      />

      <template #footer>
        <VSpacer />
        <SettingsButton v-show="hasNewValues" light title="Reset" @click="resetForm()" />
        <SettingsButton :disabled="!hasNewValues" :loading="isSavingLoading" submit title="Save" />
      </template>
    </SettingsCard>
  </VForm>
</template>
