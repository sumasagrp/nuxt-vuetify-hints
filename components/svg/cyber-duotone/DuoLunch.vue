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
    <path d="m3 33 4 14h32l4 -14h-40Z" fill="transparent" stroke-width="1" />
    <path
      d="M36 21h-4L29 24l-6 -5 -6 5L14 21H10l-6 8h38l-6 -8Z"
      fill="transparent"
      stroke-width="1"
    />
    <path :fill="colors.svgFillSoft" d="M45 29H1v4h44v-4Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="m5.8 43 1.2 4h32l1.2 -4H5.8Z" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="m3 33 4 14h32l4 -14"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M45 29H1v4h44v-4Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M36 21h-4L29 24l-6 -5 -6 5L14 21H10l-6 8h38l-6 -8Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m15 15 2 -2 -4 -4 2 -2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m23 15 2 -2 -4 -4 2 -2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m31 15 2 -2 -4 -4 2 -2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
