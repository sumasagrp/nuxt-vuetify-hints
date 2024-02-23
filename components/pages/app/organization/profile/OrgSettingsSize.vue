<script setup>
import orgSize from '@/data/org-sizes'

const organizationStore = useOrganizationStore()
const { activeOrganization } = toRefs(organizationStore)

const orgsizeForm = reactive({
  orgSize: activeOrganization.value?.orgSize,
})

// Use the useResetRef composable to manage the state of the profile form
const { reset, hasNewValues, syncInitialValues } = useResetRef(orgsizeForm)

const sizeForm = ref()

// Get form values to its default values.
function resetForm() {
  // Reset validations,
  // since we are validating lazily.
  sizeForm.value.resetValidation()
  reset()
}

const validationPassed = ref()

// Validation rules for the profile form fields
// const rules = {
//   orgSize: [
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

async function updateOrgSize(validationEvent) {
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
    await organizationStore.updateOrgSize({ ...orgsizeForm })

    // Update the initial values to reflect the current state of the profile form
    syncInitialValues()

    snackbar('Organization size has been updated.')
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
    ref="sizeForm"
    v-model="validationPassed"
    @keyup.esc="resetForm()"
    @submit.prevent="updateOrgSize"
  >
    <SettingsCard :kbd="hasNewValues" title="Organization Size">
      <!-- * [ Org size field ] -->
      <VAutocomplete
        v-model.trim="orgsizeForm.orgSize"
        :items="orgSize"
        clear-on-select
        hide-no-data
        label="Number of employees"
        maxlength="20"
        persistent-hint
        placeholder="Employees"
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
