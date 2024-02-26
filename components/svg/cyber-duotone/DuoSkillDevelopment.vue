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
    <path d="M1 5v34h20v8h6v-8h20v-34H1Z" fill="transparent" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M27 44h-6v3h6V44Z" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="m33 15.4 6 2.6 -6 2.6V28l-8 4 -8 -4v-0.8l-3.6 2.6 0.6 1.2H11.8l-10.8 8h46v-34l-14 10.4Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M47 5H1v34h46v-34Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M13 47h22"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M21 39v8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M27 39v8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m25 24 14 -6 -14 -6 -14 6 14 6Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M17 20.6V28l8 4 8 -4v-7.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M11 18v7"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m11 25 -3 6h6l-3 -6Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
