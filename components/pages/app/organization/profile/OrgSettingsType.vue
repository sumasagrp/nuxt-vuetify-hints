<script setup>
import orgType from '@/data/org-types'

const organizationStore = useOrganizationStore()
const { activeOrganization } = toRefs(organizationStore)

const orgTypeForm = reactive({
  orgType: activeOrganization.value?.orgType,
})

// Use the useResetRef composable to manage the state of the profile form
const { reset, hasNewValues, syncInitialValues } = useResetRef(orgTypeForm)

const typeForm = ref()

// Get form values to its default values.
function resetForm() {
  // Reset validations,
  // since we are validating lazily.
  typeForm.value.resetValidation()
  reset()
}

const validationPassed = ref()

// Validation rules for the profile form fields
// const rules = {
//   orgType: [
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

async function updateOrgType(validationEvent) {
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
    await organizationStore.updateOrgType({ ...orgTypeForm })

    // Update the initial values to reflect the current state of the profile form
    syncInitialValues()

    snackbar('Organization type has been updated.')
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
    ref="typeForm"
    v-model="validationPassed"
    @keyup.esc="resetForm()"
    @submit.prevent="updateOrgType"
  >
    <SettingsCard :kbd="hasNewValues" title="Organization Type">
      <!-- * [ Org type field ] -->
      <VAutocomplete
        v-model.trim="orgTypeForm.orgType"
        :items="orgType"
        clear-on-select
        hide-no-data
        label="Organization type"
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
