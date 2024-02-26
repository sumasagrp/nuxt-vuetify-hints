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
      d="m37 21 -2 1.5V10.48L20 1 5 10.48V35h24.616l7.384 12 8 -13v-7l-8 -6Z"
      fill="transparent"
      stroke-width="1"
    />
    <path :fill="colors.svgFillSoft" d="M23 16 20 18 17 16V13l3 -2 3 2V16Z" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="M20 1 5 10.48v6L20 7l15 9.48v-6L20 1Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M37 21v6l4 2v4l-4 2v12l8 -13v-7l-8 -6Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M5 10.48V35h20"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M35 10.48V17"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M39 13 20 1l-19 12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M23 16 20 18 17 16V13l3 -2 3 2V16Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m37 47 8 -13v-7l-8 -6 -8 6V34l8 13Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m41 33 -4 2 -4 -2v-4l4 -2 4 2v4Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
