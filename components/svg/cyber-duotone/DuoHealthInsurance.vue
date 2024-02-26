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
    <path d="m23 41 22 -22L32 4l-9 8L14 4 1 19l22 22Z" fill="transparent" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="m23 41 22 -22L32 4l-9 8v29Z" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="M1 25h10l3 -4 4 6 5 -10 4 14 3 -6h17"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m43 21 2 -2L32 4l-9 8L14 4 1 19l2 2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m11 29 12 12 12 -12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
