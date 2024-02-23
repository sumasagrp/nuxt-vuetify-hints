<script setup>
const organizationStore = useOrganizationStore()
const { activeOrganization } = toRefs(organizationStore)

const { orgSocial = [] } = activeOrganization.value || {}

const profileSocialForm = ref({
  orgSocial: [...orgSocial],
})

// Use the useResetRef composable to manage the state of the profile form
const { reset, hasNewValues, syncInitialValues } = useResetRef(profileSocialForm)

const socialNetworksForm = ref()

// Get form values to its default values.
function resetForm() {
  // Reset validations,
  // since we are validating lazily.
  socialNetworksForm.value.resetValidation()

  // Reset from to initial values.
  reset()
}

const validationPassed = ref()

// Validation rules for the profile form fields
// const rules = {
//   x: [
//     (value) => {
//       try {
//         Yup.string().nullable().validateSync(value)
//         return true // Return true if validation passes
//       }
//       catch (error) {
//         return error.message // Return the error message if validation fails
//       }
//     },
//   ],
//   linkedin: [
//     (value) => {
//       try {
//         Yup.string().nullable().validateSync(value)
//         return true // Return true if validation passes
//       }
//       catch (error) {
//         return error.message // Return the error message if validation fails
//       }
//     },
//   ],
//   github: [
//     (value) => {
//       try {
//         Yup.string().nullable().validateSync(value)
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

async function updateOrganizationSocialNetworks(validationEvent) {
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
    await organizationStore.updateOrganizationSocialNetworks({ ...profileSocialForm.value })

    // Update the initial values to reflect the current state of the profile form
    syncInitialValues()

    snackbar('Social networks have been updated.')
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
    ref="socialNetworksForm"
    v-model="validationPassed"
    @keyup.esc="resetForm()"
    @submit.prevent="updateOrganizationSocialNetworks"
  >
    <SettingsCard :kbd="hasNewValues" subtitle="You can add up to 5 different social networks" title="Social Networks">
      <template #right-actions>
        <SettingsButton @click="profileSocialForm.orgSocial.length <= 5 && profileSocialForm.orgSocial.push('')">
          <VIcon> $plus</VIcon>
        </SettingsButton>
      </template>

      <div v-for="(network, i) in profileSocialForm.orgSocial" :key="i">
        <VTextField
          v-model.trim="profileSocialForm.orgSocial[i]"
          append-inner-icon="$mdiTrashCanOutline"
          counter
          hide-details
          maxlength="50"
          @click:append-inner.stop="profileSocialForm.orgSocial.length > 1 && profileSocialForm.orgSocial.pop(i)
          "
        />
      </div>
      <template #footer>
        <VSpacer />
        <SettingsButton v-show="hasNewValues" light title="Reset" @click="resetForm()" />
        <SettingsButton :disabled="!hasNewValues" :loading="isSavingLoading" submit title="Save" />
      </template>
    </SettingsCard>
  </VForm>
</template>
