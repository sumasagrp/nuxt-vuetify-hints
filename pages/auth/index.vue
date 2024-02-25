<script setup lang="ts">
const { isLoggedIn, loading, loadingGoogle } = toRefs(useAuthStore())

definePageMeta({
  hideAppBar: true,
  hideFooter: true,
})

const { isSignInView } = toRefs(useRoutingStore())

const title = computedEager(() => {
  return isSignInView.value ? 'Sign in to your account' : 'Create an account'
})
</script>

<template>
  <div>
    <div
      v-show="!isLoggedIn"
      :class="{ disabled: loading || loadingGoogle }"
      class="gap-7 flex flex-column py-10x px-3 mx-auto justify-center max-w-[545px]"
    >
      <GAppBarLogo />

      <VCard
        class="mt-5"
      >
        <TopBorderHighlight />

        <div class="pt-5 pa-8">
          <VCardTitle class="text-h5x font-weight-bold mt-5 mb-8 ml-1">
            {{ title }}
          </VCardTitle>

          <VCardText>
            <!-- * SignIn, SignOut & PasswordReet Views] -->
            <NuxtPage />
            <!-- * External Authentication Provider buttons ] -->
            <AuthProviders />
          </VCardText>
        </div>
      </VCard>

      <AuthFooter />
    </div>
  </div>
</template>
