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
    <path d="m21 32 -14 -15h28l-14 15Z" fill="transparent" stroke-width="1" />
    <path d="m39 2 -8 4.6v9l8 4.4 8 -4.4V6.6l-8 -4.6Z" fill="transparent" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M21 32V17h14l-14 15Z" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="m39 6.6 -4 2.4v4l4 2.6 4 -2.6v-4l-4 -2.4Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m21 32 -14 -15h28l-14 15Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M1 1h10l-8 8h8l11 14"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M21 32v15"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M15 47h12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m39 15.6 4 -2.6v-4l-4 -2.4 -4 2.4v2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m39 20 8 -4.4V6.6l-8 -4.6 -8 4.6v6.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
