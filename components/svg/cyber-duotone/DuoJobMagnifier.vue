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
      d="m34.4745 28.597541666666665 1.7546666666666666 -1.7566249999999999V10.369375L26.842875 0.9791666666666666H10.367416666666665L0.9811249999999999 10.369375v16.4735l9.38825 9.38825h16.4735l1.7566249999999999 -1.7566249999999999L40.14583333333333 46.02083333333333h5.875v-5.875l-11.546333333333333 -11.548291666666668Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="m45.65266666666667 46.02083333333333 -14.301708333333332 -14.301708333333332 -2.7534166666666664 2.7534166666666664L40.14583333333333 46.02083333333333h5.506833333333333Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M24.479166666666664 12.729166666666666H17.625L12.729166666666666 9.791666666666666l5.875 -2.9375 5.875 2.9375v2.9375Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m24.479166666666664 17.625 -5.875 2.9375 -5.875 -2.9375V9.791666666666666l5.875 -2.9375 5.875 2.9375v7.833333333333333Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M28.395833333333332 28.395833333333332V25.458333333333332l-9.791666666666666 -2.9375 -9.791666666666666 2.9375v2.9375"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M26.842875 36.231125H10.369375L0.9811249999999999 26.842875V10.369375L10.367416666666665 0.9791666666666666h16.475458333333332L36.229166666666664 10.369375v16.4735l-9.386291666666667 9.38825Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m32.3125 38.1875 5.875 -5.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M24.479166666666664 12.729166666666666H17.625L12.729166666666666 9.791666666666666l5.875 -2.9375 5.875 2.9375v2.9375Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M34.47254166666667 28.597541666666665 46.02083333333333 40.14583333333333v5.875h-5.875l-11.548291666666668 -11.548291666666668 5.875 -5.875Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
