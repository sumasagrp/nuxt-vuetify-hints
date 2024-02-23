<script setup>
const organizationStore = useOrganizationStore()
const { activeOrganization } = toRefs(organizationStore)

const { orgWebsite = null } = activeOrganization.value || {}

const orgWebsiteForm = reactive({
  orgWebsite,
})

// Use the useResetRef composable to manage the state of the profile form
const { reset, hasNewValues, syncInitialValues } = useResetRef(orgWebsiteForm)

const websiteForm = ref()

// Get form values to its default values.
function resetForm() {
  // Reset validations,
  // since we are validating lazily.
  websiteForm.value.resetValidation()
  reset()
}

const validationPassed = ref()

// Validation rules for the profile form fields
const rules = {
  orgWebsite: [
    (value) => {
      try {
        Yup.string().validateSync(value)
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

async function updateOrgWebsite(validationEvent) {
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
    await organizationStore.updateOrgWebsite({ ...orgWebsiteForm })

    // Update the initial values to reflect the current state of the profile form
    syncInitialValues()

    snackbar('Website has been updated.')
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
    ref="websiteForm"
    v-model="validationPassed"
    @keyup.esc="resetForm()"
    @submit.prevent="updateOrgWebsite"
  >
    <SettingsCard :kbd="hasNewValues" title="Organization website">
      <!-- * [ Org Website field ] -->
      <div class="ml-1 mb-3 text-red" />
      <VTextField
        v-model.trim="orgWebsiteForm.orgWebsite"
        :rules="rules.orgWebsite"
        append-inner-icon="i-mdi:web"
        counter
        label="Organization website"
        persistent-hint
        placeholder="organization.com/"
        prefix="https://"
        @click:append-inner.stop="
          orgWebsiteForm.orgWebsite && openLink(`https://${orgWebsiteForm.orgWebsite}`)
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
