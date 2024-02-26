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
      d="M26.4375 16.15625 17.625 19.583333333333332 8.8125 16.15625v-11.75L17.625 0.9791666666666666l8.8125 3.427083333333333v11.75Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      d="m38.1875 27.416666666666664 -6.025791666666667 3.389875 -1.2357083333333332 -4.322041666666666L30.354166666666664 24.479166666666664 17.625 21.541666666666664l-12.729166666666666 2.9375 -3.9166666666666665 13.708333333333332h29.375v2.4479166666666665l7.833333333333333 4.40625 7.833333333333333 -4.40625v-8.8125l-7.833333333333333 -4.40625Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M11.015625 3.5504583333333333 17.625 6.854166666666666h8.8125V4.40625L17.625 0.9791666666666666 11.015625 3.5504583333333333Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M46.02083333333333 31.822916666666664v8.8125l-7.833333333333333 4.40625 -7.833333333333333 -4.40625 15.666666666666666 -8.8125Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M26.4375 16.15625 17.625 19.583333333333332 8.8125 16.15625v-11.75L17.625 0.9791666666666666l8.8125 3.427083333333333v11.75Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M14.6875 11.75v-0.9791666666666666"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M20.5625 11.75v-0.9791666666666666"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M31.088541666666664 27.048499999999997 30.354166666666664 24.479166666666664 17.625 21.541666666666664l-12.729166666666666 2.9375 -3.9166666666666665 13.708333333333332h25.458333333333332"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M11.015625 3.5504583333333333 17.625 6.854166666666666h8.8125V4.40625L17.625 0.9791666666666666 11.015625 3.5504583333333333Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M22.428791666666665 22.650083333333335 17.625 30.354166666666664l-4.803791666666666 -7.704083333333333L17.625 21.541666666666664l4.803791666666666 1.1084166666666666Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M38.1875 32.3125v5.875h3.9166666666666665"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m46.02083333333333 40.635416666666664 -7.833333333333333 4.40625 -7.833333333333333 -4.40625v-8.8125l7.833333333333333 -4.40625 7.833333333333333 4.40625v8.8125Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
