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
      d="m20.5625 19.09375 3.9166666666666665 -1.46875 7.833333333333333 2.9375v3.9166666666666665H27.416666666666664v17.625h-6.854166666666666V19.09375Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      d="m30.354166666666664 12.729166666666666 -5.875 2.9375 -5.875 -2.9375v-7.833333333333333l5.875 -2.9375 5.875 2.9375v7.833333333333333Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      d="M12.729166666666666 42.104166666666664v-11.75h3.9166666666666665v-9.791666666666666L8.8125 17.625l-7.833333333333333 2.9375v9.791666666666666h3.9166666666666665v11.75h7.833333333333333Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      d="M14.6875 12.729166666666666 8.8125 15.666666666666666l-5.875 -2.9375v-7.833333333333333l5.875 -2.9375 5.875 2.9375v7.833333333333333Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      d="m46.02083333333333 40.635416666666664 -7.833333333333333 4.40625 -7.833333333333333 -4.40625v-8.8125l7.833333333333333 -4.40625 7.833333333333333 4.40625v8.8125Z"
      fill="transparent"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M27.416666666666664 31.333333333333332h-6.854166666666666v10.770833333333332H27.416666666666664V31.333333333333332Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M12.729166666666666 31.333333333333332h-7.833333333333333v10.770833333333332h7.833333333333333V31.333333333333332Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M14.6875 6.854166666666666h-7.833333333333333l-3.9166666666666665 -1.9583333333333333 5.875 -2.9375 5.875 2.9375v1.9583333333333333Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M30.354166666666664 6.854166666666666h-7.833333333333333l-3.9166666666666665 -1.9583333333333333 5.875 -2.9375 5.875 2.9375v1.9583333333333333Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="M46.02083333333333 31.822916666666664v8.8125l-7.833333333333333 4.40625 -7.833333333333333 -4.40625 15.666666666666666 -8.8125Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M14.6875 6.854166666666666h-7.833333333333333l-3.9166666666666665 -1.9583333333333333 5.875 -2.9375 5.875 2.9375v1.9583333333333333Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M30.354166666666664 6.854166666666666h-7.833333333333333l-3.9166666666666665 -1.9583333333333333 5.875 -2.9375 5.875 2.9375v1.9583333333333333Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m20.5625 19.09375 3.9166666666666665 -1.46875 7.833333333333333 2.9375v3.9166666666666665"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M20.5625 30.354166666666664v11.75h5.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M24.479166666666664 22.520833333333332v3.9166666666666665"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m30.354166666666664 12.729166666666666 -5.875 2.9375 -5.875 -2.9375v-7.833333333333333l5.875 -2.9375 5.875 2.9375v7.833333333333333Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M30.354166666666664 6.854166666666666h-7.833333333333333l-3.9166666666666665 -1.9583333333333333"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M12.729166666666666 42.104166666666664v-11.75h3.9166666666666665v-9.791666666666666L8.8125 17.625l-7.833333333333333 2.9375v9.791666666666666h3.9166666666666665v11.75h7.833333333333333Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M8.8125 22.520833333333332v5.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M14.6875 12.729166666666666 8.8125 15.666666666666666l-5.875 -2.9375v-7.833333333333333l5.875 -2.9375 5.875 2.9375v7.833333333333333Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M14.6875 6.854166666666666h-7.833333333333333l-3.9166666666666665 -1.9583333333333333"
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
    <path
      :stroke="colors.svgStroke"
      d="M38.1875 32.3125v7.833333333333333"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M42.104166666666664 36.229166666666664h-7.833333333333333"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
