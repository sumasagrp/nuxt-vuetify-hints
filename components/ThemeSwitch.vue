<script setup>
const { isDark, toggleDark } = useCustomTheme()
</script>

<template>
  <v-switch
    :model-value="isDark"
    color=""
    hide-details
    density="compact"
    inset
    style="opacity: 0.8"
    @update:model-value="toggleDark"
  />
</template>
