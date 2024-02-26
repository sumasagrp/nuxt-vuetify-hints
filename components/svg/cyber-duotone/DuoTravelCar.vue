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
      d="M32.3125 0.9791666666666666h-21.541666666666664l-5.875 9.791666666666666v9.791666666666666h33.291666666666664v-9.791666666666666l-5.875 -9.791666666666666Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      d="m24.479166666666664 26.73125 9.791666666666666 -5.189583333333333 9.791666666666666 5.189583333333333v11.1625l-9.791666666666666 5.189583333333333 -9.791666666666666 -5.189583333333333v-11.1625Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M38.1875 10.770833333333332h-33.291666666666664l27.416666666666664 -9.791666666666666 5.875 9.791666666666666Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M12.729166666666666 20.5625v3.9166666666666665h-5.875v-3.9166666666666665"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M44.0625 26.73125v11.1625l-9.791666666666666 5.189583333333333 -9.791666666666666 -5.189583333333333 19.583333333333332 -11.1625Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M26.4375 20.5625h-21.541666666666664v-9.791666666666666h33.291666666666664v7.833333333333333"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M38.1875 10.770833333333332h-33.291666666666664l5.875 -9.791666666666666h21.541666666666664l5.875 9.791666666666666Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M12.729166666666666 20.5625v3.9166666666666665h-5.875v-3.9166666666666665"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M4.895833333333333 16.647791666666667h33.291666666666664"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m4.895833333333333 10.770833333333332 -3.9166666666666665 -1.9583333333333333"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m38.1875 10.770833333333332 3.9166666666666665 -1.9583333333333333"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M30.354166666666664 32.3125 33.291666666666664 35.25l4.895833333333333 -5.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m24.479166666666664 26.73125 9.791666666666666 -5.189583333333333 9.791666666666666 5.189583333333333v11.1625l-9.791666666666666 5.189583333333333 -9.791666666666666 -5.189583333333333v-11.1625Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
