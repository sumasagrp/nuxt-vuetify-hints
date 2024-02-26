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
    <path
      d="M41 11h-4V8L32 5l-5 2 2 -0.8V3L24 1l-5 2v3.2l2 0.8 -5 -2L11 8v3h-4l-2 4 2 4 4 28h26l4 -28 2 -4 -2 -4Z"
      fill="transparent"
      stroke-width="1"
    />
    <path :fill="colors.svgFillSoft" d="m10.4 43 0.6 4h26l0.6 -4H10.4Z" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="M27 19v10h4l2 3 -2 3h-4v12H32l2 -28h-7Z"
      stroke-width="1"
    />
    <path
      :fill="colors.svgFillSoft"
      d="m17 35 -2 -3 2 -3h4v-10H14l2 28h5v-12h-4Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m7 19 4 28h26l4 -28h-34Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M31 35h-14l-2 -3 2 -3h14l2 3 -2 3Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M21 29v-10"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M21 47v-12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m16 47 -2 -28"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m32 47 2 -28"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M27 29v-10"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M27 47v-12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m7 19 -2 -4 2 -4h6l2 2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M11 11V8L16 5l5 2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m41 19 2 -4 -2 -4h-6l-2 2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M37 11V8L32 5l-5 2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M29 6.2V3L24 1l-5 2v3.2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M29 15H28l-2 -2h-4l-2 2h-1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
