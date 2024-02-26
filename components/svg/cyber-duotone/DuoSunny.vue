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
      d="m30.334 26 2.666 -1.5v-9l-8 -4.5 -8 4.5v9l2.666 1.5"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M45 30 42 33 38 30l-4 3 -4 -3 -4 3 -4 -3 -4 3L14 30l-4 3L6 30l-3 3v14L6 44l4 3L14 44l4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3 3 -3v-14Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M25 7v-4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M37 19h4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M9 19h4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m13.686 7.686 2.828 2.828"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m33.486 10.514 2.828 -2.828"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M3 47 6 44l4 3L14 44l4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3 3 -3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M3 40 6 37 10 40l4 -3L18 40l4 -3 4 3 4 -3 4 3 4 -3 4 3 3 -3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M3 33 6 30l4 3L14 30l4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3 3 -3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m30.334 26 2.666 -1.5v-9l-8 -4.5 -8 4.5v9l2.666 1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
