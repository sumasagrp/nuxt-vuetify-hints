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
      d="m23 41 5 4h8l9 -15v-6l-4 -3V14l-4 -2V8l-6 -5 -8 5 -8 -5 -6 5v4l-4 2v7l-4 2V30l8 15h8l6 -4Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="m45 24 -4 -3V14l-4 -2v-0.5L34 9 26 14 18 9 12 14v4l-4 2v7l-4 2v6.626L9 45h8l6 -4 5 4h8l9 -15v-6Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M23 8v33"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m12 14 3 2L18 14"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M11 39h4v-3.5l2 -2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M15 16v6l-4 4v3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M5 21h4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M27 27h-8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M15 3v6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M2.6 33h6.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m23 41 5 4h8l9 -15v-6l-4 -3V14l-4 -2V8l-6 -5 -8 5 -8 -5 -6 5v4l-4 2v7l-4 2V30l8 15h8l6 -4Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m34 14 -3 2L28 14"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M35 39h-4v-3.5l-2 -2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M31 16v6l4 4v3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M41 21h-4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M31 3v6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M43.2 33h-6.2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
