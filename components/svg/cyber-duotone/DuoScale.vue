<script setup>
defineProps({
  size: {
    type: String,
    default: '48',
  },
})

const theme = useTheme()

const colors = computed(() => {
  return theme.current.value.colors
})
</script>

<template>
  <svg
    :height="size"
    :width="size"
    fill="none"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m45 33 -1 4 -8 4 -8 -4 -1 -4h18Z" fill="transparent" stroke-width="1" />
    <path d="m3 33 1 4 8 4 8 -4 1 -4h-18Z" fill="transparent" stroke-width="1" />
    <path d="M36 33h9l-1 4 -8 4v-8Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="m12 41 8 -4 1 -4H12v8Z" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="M5 11h40"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M25 7v6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m45 33 -1 4 -8 4 -8 -4 -1 -4h18Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m30 33 6 -22 6 22"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m3 33 1 4 8 4 8 -4 1 -4h-18Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m18 33 -6 -22 -6 22"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
