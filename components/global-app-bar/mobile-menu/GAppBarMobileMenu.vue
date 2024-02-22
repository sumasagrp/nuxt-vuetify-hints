<script setup>
const { lgAndUp } = useDisplay()
const { mobileMenu } = toRefs(useAppStore())

watch(() => lgAndUp.value, (lgAndUp) => {
  if (lgAndUp)
    mobileMenu.value = false
})

const { currentTheme } = toRefs(useThemeStore())

const authStore = useAuthStore()
const { isLoggedIn } = toRefs(authStore)

const routingStore = useRoutingStore()
const { isWelcomeScreen, isSecureLayout } = toRefs(routingStore)

const router = useRouter()

async function signOutCurrentUser() {
  try {
    await authStore.signOutCurrentUser()
  }
  catch (error) {
    snackbar(`An error occurred: ${error} `, 'error')
  }
  finally {
    mobileMenu.value = false

    /**
     * Delays the execution of routing,
     * helps for a cleanr transition back to the login page.
     */
    await delay(150)

    if (isSecureLayout.value || isWelcomeScreen.value)
      router.replace('/auth')
  }
}
const sidebarSettings = [

  {
    title: 'Homepage',
    route: '/',
    icon: '$mdiHomeOutline',
    disabled: false,
  },

  {
    title: 'Find Jobs',
    route: '/search',
    icon: '$mdiMagnify',
    disabled: false,
  },
  {
    title: 'Browse Companies',
    route: '/app/org/billing',
    icon: '$mdiMagnify',
    disabled: true,
  },
  {
    title: 'Pricing',
    route: '/app/org/organization/profile',
    icon: '$mdiLightningBoltOutline',
    disabled: true,

  },

]
</script>

<template>
  <VDialog v-model="mobileMenu" :scrim="false" :transition="false" fullscreen z-index="3">
    <NavBarContainer flat>
      <template #prepend>
        <div class="h-[92px]" />
      </template>

      <SNavBar v-if="isSecureLayout" />

      <VList v-else>
        <!-- * [ Settings ] -->
        <VListItem
          v-for="link in sidebarSettings" :key="link.id" :disabled="link.disabled" :ripple="false"
          :title="link.title" :to="link.route" exact link rounded="md"
        >
          <template #prepend="{ isActive }">
            <VIcon :color="isActive && 'primary'" :icon="link.icon" end />
          </template>
        </VListItem>
      </VList>

      <template #append>
        <div class="py-4 flex flex-col gap-y-2">
          <div
            class="flex align-center mx-1"
          >
            <small class="mr-2x">
              Theme: {{ capitalize(currentTheme) }} </small>
            <VSpacer />
            <SJThemeSwitch @click.stop />
          </div>

          <VDivider class="my-2" />

          <SettingsButton
            v-if="isLoggedIn"
            block color="link"
            size="large" to="/app/profile" variant="text"
          >
            <!-- <VIcon start>$plus</VIcon> -->

            Dashboard
          </SettingsButton>

          <SettingsButton
            v-if="!isLoggedIn"
            block color="link"
            size="large" to="/auth"
            variant="text"
          >
            <!-- <VIcon start>$plus</VIcon> -->

            Sign in
          </SettingsButton>

          <SettingsButton
            v-else
            block color="link"
            size="large" variant="text"
            @click.stop="signOutCurrentUser()"
          >
            <!-- <VIcon start>$plus</VIcon> -->

            Sign out
          </SettingsButton>
        </div>
      </template>
    </NavBarContainer>
  </VDialog>
</template>
