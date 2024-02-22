<script setup>
const theme = useTheme()
const colorMode = useColorMode()

const selectedMode = ref('light') // default mode

function setTheme() {
  nextTick(() => {
    theme.global.name.value = colorMode.value
    selectedMode.value = colorMode.preference
  })
}

watch(() => colorMode.value, (theme) => {
  if (theme)
    setTheme()
})

onMounted(() => {
  setTheme()
})

const themeButtons = [
  { mode: 'dark', icon: 'i-mdi:moon-waning-crescent' },
  { mode: 'light', icon: 'i-mdi:lightbulb-on' },
  { mode: 'system', icon: 'i-mdi:laptop' },
]

const selectedModeIndex = computed({
  get: () => themeButtons.findIndex(btn => btn.mode === selectedMode.value),
  set: index => colorMode.preference = themeButtons[index].mode,
})
</script>

<template>
  <client-only>
    <VBtnToggle v-model="selectedModeIndex" class="pa-1" variant="text">
      <VBtn
        v-for="(btn, i) in themeButtons"
        :key="i"
        :icon="btn.icon"
        class="mr-1 mask mask-hexagon"
        rounded="lg"
        size="small"
      >
        <VIcon size="x-small">
          {{ btn.icon }}
        </VIcon>
      </VBtn>
    </VBtnToggle>
  </client-only>
</template>
