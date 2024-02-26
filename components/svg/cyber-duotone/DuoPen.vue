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
      d="m42.104166666666664 35.25 -19.583333333333332 10.770833333333332 -19.583333333333332 -10.770833333333332V13.708333333333332l19.583333333333332 -10.770833333333332 19.583333333333332 10.770833333333332v21.541666666666664Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M37.99166666666666 32.704166666666666 22.520833333333332 41.125l-15.470833333333333 -8.420833333333333L2.9375 35.25l19.583333333333332 10.770833333333332 19.583333333333332 -10.770833333333332 -4.1125 -2.5458333333333334Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="m35.25 17.625 -2.9375 -2.9375L11.75 35.25l7.833333333333333 -1.9583333333333333 15.666666666666666 -15.666666666666666Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m42.104166666666664 35.25 -19.583333333333332 10.770833333333332 -19.583333333333332 -10.770833333333332V13.708333333333332l19.583333333333332 -10.770833333333332 19.583333333333332 10.770833333333332v21.541666666666664Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m42.104166666666664 35.25 -19.583333333333332 10.770833333333332 -19.583333333333332 -10.770833333333332V13.708333333333332l19.583333333333332 -10.770833333333332 19.583333333333332 10.770833333333332v21.541666666666664Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m11.75 35.25 1.9583333333333333 -7.833333333333333 15.666666666666666 -15.666666666666666 5.875 5.875 -15.666666666666666 15.666666666666666 -7.833333333333333 1.9583333333333333Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m26.4375 14.6875 5.875 5.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m13.708333333333332 27.416666666666664 5.875 5.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
