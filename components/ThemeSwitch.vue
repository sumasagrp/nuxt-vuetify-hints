<script setup>
const theme = useTheme()
const colorMode = useColorMode()

function setTheme() {
  nextTick(() => {
    theme.global.name.value = colorMode.value
  })
}

watch(() => colorMode.value, (theme) => {
  if (theme)
    setTheme()
})

onMounted(() => {
  setTheme()
})
</script>

<template>
  {{ colorMode.value }}
  <client-only>
    <VSelect
      v-model="colorMode.preference"
      :items="['dark', 'light', 'system']"
      @update:model-value="setTheme"
    />
  </client-only>
</template>
