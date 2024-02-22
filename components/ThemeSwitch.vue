<script setup>
const colorMode = useColorMode()
const theme = useTheme()

function setTheme() {
  nextTick(() => {
    theme.global.name.value = colorMode.value
  })
}

watch(() => colorMode.value, (newValue) => {
  if (newValue)
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
