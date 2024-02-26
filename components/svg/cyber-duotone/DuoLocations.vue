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
    <path d="m20 23 7 -11.6V5.2L20 1 13 5.2v6.2l7 11.6Z" fill="transparent" stroke-width="1" />
    <path
      d="m40 35 7 -11.4V17.2L40 13l-7 4.2v6.4l7 11.4Z"
      fill="transparent"
      stroke-width="1"
    />
    <path d="m9 47 8 -13v-8l-8 -5 -8 5v8l8 13Z" fill="transparent" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="M9 21V26l4 2.6v4l-4 2.4v12l8 -13v-8l-8 -5Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M20 1v5.6l3 1.4v3l-3 1.6v10.4l7 -11.6V5.2L20 1Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M40 13v5.6l3 1.6v2.8l-3 1.6v10.4l7 -11.4V17.2L40 13Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m24 24 8.8 6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m15.6 44.6 19.8 -9.2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m9 47 8 -13v-8l-8 -5 -8 5v8l8 13Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m13 32.6 -4 2.4 -4 -2.4v-4l4 -2.6 4 2.6v4Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m20 23 7 -11.6V5.2L20 1 13 5.2v6.2l7 11.6Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m23 11 -3 1.6 -3 -1.6V8l3 -1.4 3 1.4v3Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m40 35 7 -11.4V17.2L40 13l-7 4.2v6.4l7 11.4Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m43 23 -3 1.6 -3 -1.6v-2.8l3 -1.6 3 1.6v2.8Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
