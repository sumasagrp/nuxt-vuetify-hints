<script setup lang="ts">
const password = defineModel()
const isPasswordVisible = ref(false)
const togglePasswordVisibility = useToggle(isPasswordVisible)
const icon = computed(() => (isPasswordVisible.value ? 'i-mdi:eye' : 'i-mdi:eye-off'))
</script>

<template>
  <VTextField
    v-model="password"
    :append-inner-icon="password && icon"
    placeholder="••••••••"
    :type="isPasswordVisible ? 'text' : 'password'"
    label="Password"
    @click:append-inner="togglePasswordVisibility()"
  />
</template>
