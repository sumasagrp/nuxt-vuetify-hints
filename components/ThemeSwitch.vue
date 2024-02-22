<script setup>
const colorMode = useColorMode()
const theme = useTheme()

function setTheme() {
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
      @update:model-value="setTheme()"
    />
  </client-only>
</template>
