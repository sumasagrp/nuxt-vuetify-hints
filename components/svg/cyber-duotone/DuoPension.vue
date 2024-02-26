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
    <path d="m11 38.99 -7 -5L11 0.998 18 33.99l-7 5Z" fill="transparent" stroke-width="1" />
    <path
      d="m30 15 -3 -4.01 3 -3 2 -3h3l3 3h4l3 3L42 15h-12Z"
      fill="transparent"
      stroke-width="1"
    />
    <path :fill="colors.svgFillSoft" d="M18 33.99 11 0.998v37.992l7 -5Z" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="m30 15 -3 -4.01 3 -3 2 -3h3l3 3h4l3 3L42 15h-12Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M1 46.99h46"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M27 38.998v7.992"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M39 38.998v7.992"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M23 38.998h20"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M11 46.99v-8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m11 38.99 -7 -5L11 0.998 18 33.99l-7 5Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
