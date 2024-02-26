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
    <path d="M4 11 1 6 4 1h6L13 6 10 11H4Z" fill="transparent" stroke-width="1" />
    <path
      d="m9.836 18.068 -0.726 1.692 1.59 10.47L1 39.932l1.06 6.008 6.01 1.062 9.7 -9.702 10.472 1.59 10.758 -4.614 6 -12.726 -5.91 -12.64L26.452 3 18.376 6.808"
      fill="transparent"
      stroke-width="1"
    />
    <path :fill="colors.svgFillSoft" d="m10 1 -6 10h6L13 6 10 1Z" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="M39.09 8.91 26.452 3 18.376 6.808l-8.54 11.26 -0.722 1.686 0.006 0.006h-0.01l19.132 19.13 10.758 -4.614 6 -12.726 -5.91 -12.64Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M4 11 1 6 4 1h6L13 6 10 11H4Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m9.836 18.068 -0.726 1.692 1.59 10.47L1 39.932l1.06 6.008 6.01 1.062 9.7 -9.702 10.472 1.59 10.758 -4.614 6 -12.726 -5.91 -12.64L26.452 3 18.376 6.808"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m9.11 19.76 19.132 19.13"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
