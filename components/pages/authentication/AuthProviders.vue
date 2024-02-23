<script setup lang="ts">
const auth = useAuthStore()
const { loadingGoogle } = toRefs(auth)
const { formRef } = toRefs(useAuthStore())

const buttons = computed(() => {
  return [
    {
      name: 'Google',
      icon: 'i-mdi:google',
      color: 'error',
      loading: loadingGoogle.value,
      action() {
        return auth.authenticateWithGoogle()
      },
    },
  ]
})
</script>

<template>
  <LoginOrDivider class="mt-4" />

  <div class="text-center">
    <VBtn
      v-for="button in buttons"
      :key="button.name"
      :color="button.color"
      :disabled="button.disabled"
      :loading="button.loading"
      class="mx-1 my-3 mask mask-hexagon"
      icon
      variant="tonal"
      @click="button.action();formRef.resetValidation()"
    >
      <VIcon :icon="button.icon" />
    </VBtn>
  </div>
</template>
