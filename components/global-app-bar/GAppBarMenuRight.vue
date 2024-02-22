<script setup>
const { isLoggedIn } = toRefs(useAuthStore())
const { isSecureLayout, isWelcomeScreen } = toRefs(useRoutingStore())
</script>

<template>
  <div>
    <div class="lg:flex hidden align-center ">
      <div v-if="!isWelcomeScreen && !isSecureLayout" class="gap-4 flex">
        <VBtn
          :active="false"
          class="border-0 no-gutters"
          color="appbar-buttons"
          size="large"
          to="/search"
          variant="plain"
        >
          Find Jobs
        </VBtn>

        <VBtn
          :active="false"
          class="border-0 no-gutters"
          color="appbar-buttons"
          disabled=""
          size="large"
          variant="plain"
        >
          Browse Companies
        </VBtn>

        <VBtn
          :active="false"
          class="border-0 no-gutters"
          color="appbar-buttons"
          disabled
          size="large"
          to="/"
          variant="plain"
        >
          Pricing
        </VBtn>
      </div>

      <VDivider class="mx-3" vertical />

      <div v-if="!isLoggedIn" class="gap-3 flex">
        <VBtn class="rounded-xl border-0" color="link" size="large" to="/auth" variant="plain">
          Sign In
        </VBtn>

        <VBtn
          class="rounded-xl border"
          color="black-button"
          size="large"
          to="/auth/signup"
          variant="flat"
        >
          <div class=" flex align-center">
            Get started
            <VIcon class="ml-1" end icon="$mdiArrowRight" size="17" />
          </div>
        </VBtn>
      </div>

      <template v-else>
        <GAppBarNotifications />
        <GAppBarProfileMenu />
      </template>
    </div>
  </div>
</template>
