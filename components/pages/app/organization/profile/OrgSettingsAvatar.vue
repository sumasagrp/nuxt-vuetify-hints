<script setup>
const organizationStore = useOrganizationStore()
const { organizationAvatar, avatarPlaceholder, activeOrganizationName } = toRefs(organizationStore)

const fileInput = ref()

// Function to open the file input when the avatar is clicked
function openFileInput() {
  // Use $refs to access the fileInput element and trigger a click event
  fileInput.value && fileInput.value.click()
}

// Destructure the returned values from the composable
const { selectedFile, handleFileChange, displayImage } = useSelectImage()

const loading = ref(false)

async function removeOrgAvatar() {
  try {
    await organizationStore.removeOrgAvatar()
    snackbar('Avatar has been removed.')
  }
  catch (error) {
    snackbar(`Removing avatar failed. ${error}`, 'error')
  }
}

whenever(displayImage, async () => {
  loading.value = true
  try {
    await organizationStore.uploadOrgAvatar(selectedFile.value)
    snackbar('Avatar has been updated.')
  }
  catch (error) {
    snackbar(`Updating avatar failed. ${error}`, 'error')
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <SettingsCard
      :loading="loading && 'link'"
      no-gutters
      split
      subtitle="This is your organization avatar. <br>
      Click on the avatar to upload a custom one from your files. <br>
      Choose a square image with a solid background color of at least <b> 100x100px <b>"
      title="Organization Avatar"
    >
      <template #right>
        <div class="flex justify-end align-center h-full">
          <input ref="fileInput" accept="image/png, image/jpeg, image/gif" class="d-none" type="file" @change="handleFileChange">

          <RoundedSquareAvatar
            :initial="activeOrganizationName ? activeOrganizationName[0] : ''"
            :loading="loading"
            :src="organizationAvatar"
            hover
            link
            size="150"
            @click="openFileInput"
          />
        </div>
      </template>

      <template #footer>
        <TrucateText> An organization avatar is optional but strongly recommended. </TrucateText>
        <VSpacer />

        <SettingsButton
          v-if="organizationAvatar !== avatarPlaceholder"
          remove-icon
          @click.stop="removeOrgAvatar()"
        >
          Remove Avatar
        </SettingsButton>
      </template>
    </SettingsCard>
  </div>
</template>
