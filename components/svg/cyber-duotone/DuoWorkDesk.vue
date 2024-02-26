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
    <path d="M27 19H1v8h26v14h20v-22h-20Z" fill="transparent" stroke-width="1" />
    <path d="M17 1h-12l-1 6h14l-1 -6Z" fill="transparent" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M15 15h-8v4h8v-4Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M27 23H1v4h26v-4Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M47 37h-20v4h20v-4Z" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="M47 47v-28H1v28"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M47 19h-20v22h20v-22Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M1 27h26"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M33 27v6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M18 7H4l1 -6h12l1 6Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M11 15v-8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M15 15h-8v4h8v-4Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
