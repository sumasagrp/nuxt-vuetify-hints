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
    <path d="M43 10v12l-6 3h-8l-6 -3V10l6 -3h8l6 3Z" fill="transparent" stroke-width="1" />
    <path
      d="M16.954 33.068 21 27 20 24l-10 6 -5 6 -4 1 4 9L16 41h14l11 -7 -1 -3 -10 3 -13.046 -0.932Z"
      fill="transarent"
      stroke-width="1"
    />
    <path :fill="colors.svgFillSoft" d="M33 25h4l6 -3V10l-6 3h-4v12Z" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="m43 14 -6 3h-8l-6 -3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m43 18 -6 3h-8l-6 -3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M11 1v2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M11 11v2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M17 7h-2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M7 7h-2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m23 10 6 -3h8l6 3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m23 22 6 3h8l6 -3V10l-6 3h-8l-6 -3v12Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M5 46 16 41h14l11 -7 -1 -3 -10 3 -14 -1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M16.954 33.068 21 27 20 24l-10 6 -5 6 -4 1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
