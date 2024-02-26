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
    <path d="M41 1h-34v40h34V1Z" fill="transparent" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="m7 23 17 6 17 -6v-16l-34 16Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="m37 35 -3 2 -3 -2V32l3 -2 3 2v3Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="m17 35 -3 2 -3 -2V32L14 30l3 2v3Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M17 41v4.002l-4 1.998 -4 -1.998V41" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M39 41v4.002l-4 1.998 -4 -1.998V41" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="M41 1h-34v40h34V1Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m7 23 17 6 17 -6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M3 21v-14h38"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M45 21v-14h-38"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m37 35 -3 2 -3 -2V32l3 -2 3 2v3Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m17 35 -3 2 -3 -2V32L14 30l3 2v3Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M17 41v4.002l-4 1.998 -4 -1.998V41"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M39 41v4.002l-4 1.998 -4 -1.998V41"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
