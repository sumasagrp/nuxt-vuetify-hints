<script setup>
const theme = useTheme()

const colors = computed(() => {
  return theme.current.value.colors
})
</script>

<template>
  <svg
    :stroke="colors.svgStroke"
    class="-ml-2 h-6 w-6 rotate-90"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 12H4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
  </svg>
</template>
