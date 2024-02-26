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
    <path d="M43 31v-24h-38v24l-4 12h46l-4 -12Z" fill="transparent" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="m29.888 15.282 0.992 0.722 0.12 -0.002V27h-4v-6l-3 -2 -3 2v6h-4v-3.58l-12 7.58h38v-24l-13.112 8.282Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M21 27v-6l3 -2 3 2v6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m13 19 11 -8 11 8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M17 16.092V27h14V16.002"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M43 31v-24h-38v24"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M47 43H1l4 -12h38l4 12Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M23 39h2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
