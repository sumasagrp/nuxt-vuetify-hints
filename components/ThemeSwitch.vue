<script setup>
const colorMode = useColorMode()
const theme = useTheme()

function setTheme() {
  if (colorMode.preference === 'system') {
    theme.global.name.value = colorMode.value
    return
  }
  theme.global.name.value = colorMode.preference
}

onMounted(() => {
  setTheme()
})
</script>

<template>
  <client-only>
    {{ $colorMode }}
    <VSelect
      v-model="colorMode.preference"
      :items="['dark', 'light', 'system']"
      @update:model-value="setTheme"
    />
  </client-only>
</template>
