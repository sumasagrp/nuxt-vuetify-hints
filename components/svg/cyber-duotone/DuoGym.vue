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
    <path d="m11 26 -4 2 -4 -2V8l4 -2 4 2v18Z" fill="transparent" stroke-width="1" />
    <path d="m45 26 -4 2 -4 -2V8l4 -2 4 2v18Z" fill="transparent" stroke-width="1" />
    <path
      d="m31 11 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V22L18 25l-3 22h16l-2 -22 4 -3V17h-2v-6Z"
      fill="transparent"
      stroke-width="1"
    />
    <path :fill="colors.svgFillSoft" d="M3 13V26l4 2 4 -2V13l-4 -2 -4 2Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M37 13V26l4 2 4 -2V13l-4 -2 -4 2Z" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="M30 17v2.656L26.656 22H15L18 25h11l4 -3V17H30Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M11 17h4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M31 17h6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m11 26 -4 2 -4 -2V8l4 -2 4 2v18Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m45 26 -4 2 -4 -2V8l4 -2 4 2v18Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m31 11 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V22L18 25l-3 22h16l-2 -22 4 -3V17h-2v-6Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M45 17h2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M1 17h2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
