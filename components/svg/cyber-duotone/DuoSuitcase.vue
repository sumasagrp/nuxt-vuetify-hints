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
      d="M45 13H1V22l2 0.588V45h40V22.588l2 -0.588V13Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M45 17H1V22l2 0.588v4l16 4.706h0.294L19 31v-8h8v8l-0.294 0.294h0.294l16 -4.706v-4l2 -0.588V17Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M32 13H14l2 -6h14l2 6Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M23 29v-2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M3 22.588V45h40V22.588"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m27 31 -4 4 -4 -4v-8h8v8Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m27 27.294 18 -5.294V13H1V22l18 5.294"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
