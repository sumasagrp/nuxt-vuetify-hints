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
    viewBox="-0.5 -0.5 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.229166666666664 27.416666666666664V4.895833333333333H0.9791666666666666v37.20833333333333h29.9625l5.2875000000000005 2.9375 7.833333333333333 -4.308333333333334v-8.8125l-7.833333333333333 -4.504166666666666Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M44.0625 31.920833333333334v8.8125l-7.833333333333333 4.308333333333334 -7.833333333333333 -4.308333333333334 15.666666666666666 -8.8125Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M36.229166666666664 8.8125H0.9791666666666666v5.875h35.25v-5.875Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M24.28333333333333 42.104166666666664H0.9791666666666666v-27.416666666666664h35.25v7.833333333333333"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M0.9791666666666666 14.6875v-9.791666666666666h35.25v9.791666666666666"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M18.604166666666664 8.8125v-5.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M28.395833333333332 8.8125v-5.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M8.8125 8.8125v-5.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m44.0625 40.733333333333334 -7.833333333333333 4.308333333333334 -7.833333333333333 -4.308333333333334v-8.8125l7.833333333333333 -4.504166666666666 7.833333333333333 4.504166666666666v8.8125Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M32.3125 36.229166666666664 35.25 39.166666666666664l4.895833333333333 -5.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
