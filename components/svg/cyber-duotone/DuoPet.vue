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
      d="m41 3 -4 3L24 1 11 6 6 3l-5 10L4 28l5 -5V28L14 40l4 2 5 -2 5 2 4 -2 5 -12v-5L42 28l3 -15 -4 -10Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="m27.2 41.6 -1.2 3.4 -3 2 -3 -2 -1.2 -3.4 4.2 -1.6 4.2 1.6Z"
      stroke-width="1"
    />
    <path :fill="colors.svgFillSoft" d="m5 27 4 -4v-10L5 18v9Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="m41 27 -4 -4v-10l4 5v9Z" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="M37 13V28L32 40l-4 2 -5 -2L18 42l-4 -2 -5 -12V13"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M37 23 42 28l3 -15 -4 -10 -4 3L24 1 11 6 6 3l-5 10L4 28l5 -5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M23 40v-5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M17 17v2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M29 17v2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M19 35h8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m27.2 41.6 -1.2 3.4 -3 2 -3 -2 -1.2 -3.4 4.2 -1.6 4.2 1.6Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
