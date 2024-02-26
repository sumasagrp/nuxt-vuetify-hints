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
      d="m10.8 22.4 -1.2 -2.8 12.6 -16.6 20.6 2.8 1.2 2.8 -33.2 13.8Z"
      fill="transparent"
      stroke-width="1"
    />
    <path :fill="colors.svgFillSoft" d="M35 33 25.4 38h19.6v-5h-10Z" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="M41 9.8 24 7.6l-10.2 13.6 27.2 -11.4Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m3 44 4 -3 4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m10.8 22.4 -1.2 -2.8 12.6 -16.6 20.6 2.8 1.2 2.8 -33.2 13.8Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m27.6 15.4 7.4 17.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M45 33h-10l-9.2 4.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
