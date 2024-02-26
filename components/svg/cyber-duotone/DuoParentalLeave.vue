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
      d="m45 33 -4 9 -18 5 -18 -5 -4 -9 5 -10L3 6l10 -3V10l10 4 10 -4V3l10 3 -3 17 5 10Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="m20 21 -3 -4L14 20l2 3 -1 3L18 31l5 1 5 -1 3 -5 -1 -3 2 -3 -3 -3 -3 4h-6Z"
      stroke-width="1"
    />
    <path d="m5 42 4 -4 14 4 15 -4 3 4 -18 5 -18 -5Z" fill="#bbd8ff" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="m20 21 -3 -4L14 20l2 3 -1 3L18 31l5 1 5 -1 3 -5 -1 -3 2 -3 -3 -3 -3 4h-6Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m45 33 -4 9 -18 5 -18 -5 -4 -9 5 -10L3 6l10 -3.2V10l10 4 10 -4V2.8l10 3.2 -3 17 5 10Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m19 1 -6 1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m33 2.8 -6 -1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m1 33 22 4 22 -4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M21 27v-2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M25 27v-2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
