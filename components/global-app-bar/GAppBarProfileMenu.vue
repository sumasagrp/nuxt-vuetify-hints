<script setup>
const authStore = useAuthStore()
const { profileFullName, profileEmail, profileAvatar, profile, profileFirstNameInitial } = toRefs(useUserProfileStore())
const { currentTheme } = toRefs(useThemeStore())

const { isWelcomeScreen, isSecureLayout } = toRefs(useRoutingStore())

const router = useRouter()

async function signOutCurrentUser() {
  try {
    await authStore.signOutCurrentUser()
  }
  catch (error) {
    snackbar(`An error occurred: ${error} `, 'error')
  }
  finally {
    /**
     * Delays the execution of routing,
     * helps for a cleanr transition back to the login page.
     */
    await delay(150)

    if (isSecureLayout.value || isWelcomeScreen.value)
      router.replace('/auth')
  }
}

const { lgAndUp } = useDisplay()
</script>

<template>
  <VMenu
    v-if="lgAndUp"
    close-on-content-click offset="24 183"
  >
    <template #activator="{ props }">
      <RoundedSquareAvatar v-bind="props" :initial="profileFirstNameInitial || ''" :loading="!profile" :src="profileAvatar" account link size="45" />
    </template>

    <VCard v-if="profile" :link="false" :ripple="false" class="p-5" min-width="250" @click.self.stop>
      <div class="mx-auto">
        <div @click.stop>
          <div class="text-lg">
            <b>{{ profileFullName }}</b>
          </div>
          <div>{{ profileEmail }}</div>
        </div>

        <VDivider class="my-3" />
        <div class="flex align-center">
          <small class="mr-2">Theme: {{ capitalize(currentTheme) }} </small>
          <VSpacer />
          <SJThemeSwitch @click.stop />
        </div>

        <VDivider class="my-3" />

        <VBtn block color="link" to="/app/profile" variant="text">
          Dashboard
        </VBtn>

        <VDivider class="my-3" />

        <VBtn block color="link" variant="text" @click.stop="signOutCurrentUser()">
          Sign out
        </VBtn>
      </div>
    </VCard>
  </VMenu>
  <!-- <div v-else class="flex h-full items-center justify-center">
    <VProgressCircular color="secondary" indeterminate size="40" />
    </div> -->
</template>
