<script setup>
const organizationStore = useOrganizationStore()
const { activeOrganization } = toRefs(organizationStore)

const { orgAbout = null } = activeOrganization.value || {}

const orgAboutForm = ref({
  orgAbout,
})

// Use the useResetRef composable to manage the state of the profile form
const { reset, hasNewValues, syncInitialValues } = useResetRef(orgAboutForm)

const aboutForm = ref()

// Get form values to its default values.
function resetForm() {
  // Reset validations,
  // since we are validating lazily.
  aboutForm.value.resetValidation()
  reset()
}

const validationPassed = ref()

/**
 * Asynchronously saves the profile based on a validation event.
 *
 * @param {object} validationEvent - An object representing the validation event.
 */

const isSavingLoading = ref(false)

async function updateOrgAbout() {
  // Set the isSavingLoading flag to true to indicate that the save operation is in progress
  isSavingLoading.value = true

  try {
    await organizationStore.updateOrgAbout({ ...orgAboutForm.value })

    // Update the initial values to reflect the current state of the profile form
    syncInitialValues()

    snackbar('About has been updated.')
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
    ref="aboutForm"
    v-model="validationPassed"
    @keyup.esc="resetForm()"
    @submit.prevent="updateOrgAbout"
  >
    <SettingsCard
      :key="activeOrganization.orgAbout"
      :kbd="hasNewValues"
      title="About your Organization"
    >
      <!-- * [ Org about field ] -->
      <VTextarea
        v-model.trim="orgAboutForm.orgAbout"
        auto-grow
        counter
        label="Organization about"
        maxlength="500"
      />

      <template #footer>
        <VSpacer />
        <SettingsButton v-show="hasNewValues" light title="Reset" @click="resetForm()" />
        <SettingsButton :disabled="!hasNewValues" :loading="isSavingLoading" submit title="Save" />
      </template>
    </SettingsCard>
  </VForm>
</template>
