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
    <path
      d="M22.694 1 15 9l-8 -6v22l16 7 16 -7v-22l-8 6 -8.306 -8Z"
      fill="transparent"
      stroke-width="1"
    />
    <path d="m23 47 8 -8h10l-7 8h-11Z" fill="transparent" stroke-width="1" />
    <path d="m23 47 -8 -8h-10l7 8h11Z" fill="transparent" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="m23 47 18 -8 -7 8h-11Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="m23 47 -18 -8 7 8h11Z" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="M22.694 11 15 19l-8 -6v12l16 7 16 -7v-12l-8 6 -8.306 -8Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m23 47 8 -8h10l-7 8h-11Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m23 47 -8 -8h-10l7 8h11Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M22.694 1 15 9l-8 -6v22l16 7 16 -7v-22l-8 6 -8.306 -8Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M15 19v2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M31 19v2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M23 47V32"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M15 9v6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M31 9v6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
