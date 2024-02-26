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
      stroke-width="2"
    />

    <path
      :stroke="colors.svgStroke"
      d="m42.104166666666664 35.25 -19.583333333333332 10.770833333333332 -19.583333333333332 -10.770833333333332V13.708333333333332l19.583333333333332 -10.770833333333332 19.583333333333332 10.770833333333332v21.541666666666664Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="2"
    />
    <path
      :stroke="colors.svgStroke"
      d="m11.75 24.479166666666664 8.8125 7.833333333333333 12.729166666666666 -15.666666666666666"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="2"
    />
  </svg>
</template>
