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
      d="m30.354166666666664 16.254166666666666 -7.833333333333333 4.308333333333334 -7.833333333333333 -4.308333333333334V7.441666666666666l7.833333333333333 -4.504166666666666 7.833333333333333 4.504166666666666v8.8125Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      d="m16.645833333333332 41.7125 -7.833333333333333 4.308333333333334 -7.833333333333333 -4.308333333333334v-8.8125l7.833333333333333 -4.504166666666666 7.833333333333333 4.504166666666666v8.8125Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      d="m44.0625 41.7125 -7.833333333333333 4.308333333333334 -7.833333333333333 -4.308333333333334v-8.8125l7.833333333333333 -4.504166666666666 7.833333333333333 4.504166666666666v8.8125Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="m0.9791666666666666 41.516666666666666 2.9375 -1.3708333333333331L8.8125 43.08333333333333 13.708333333333332 40.14583333333333l2.9375 1.5666666666666667 -7.833333333333333 4.308333333333334 -7.833333333333333 -4.504166666666666Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="m28.395833333333332 41.516666666666666 2.9375 -1.3708333333333331 4.895833333333333 2.9375 4.895833333333333 -2.9375 2.9375 1.5666666666666667 -7.833333333333333 4.308333333333334 -7.833333333333333 -4.504166666666666Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M14.6875 16.05833333333333 17.625 14.6875 22.520833333333332 17.625 27.416666666666664 14.6875l2.9375 1.5666666666666667 -7.833333333333333 4.308333333333334 -7.833333333333333 -4.504166666666666Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m30.354166666666664 16.254166666666666 -7.833333333333333 4.308333333333334 -7.833333333333333 -4.308333333333334V7.441666666666666l7.833333333333333 -4.504166666666666 7.833333333333333 4.504166666666666v8.8125Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m16.645833333333332 41.7125 -7.833333333333333 4.308333333333334 -7.833333333333333 -4.308333333333334v-8.8125l7.833333333333333 -4.504166666666666 7.833333333333333 4.504166666666666v8.8125Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m44.0625 41.7125 -7.833333333333333 4.308333333333334 -7.833333333333333 -4.308333333333334v-8.8125l7.833333333333333 -4.504166666666666 7.833333333333333 4.504166666666666v8.8125Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m32.9 30.354166666666664 -6.658333333333333 -11.945833333333333"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M16.645833333333332 36.229166666666664h11.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m18.799999999999997 18.408333333333335 -6.658333333333333 11.945833333333333"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
