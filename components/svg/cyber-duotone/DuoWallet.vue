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
    <path d="M47 19h-8v-10H1v34h38v-12h8v-12Z" fill="transparent" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M39 39H1v4h38v-4Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M39 19h4v-14H6l-5 4h38v10Z" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M43 31h-4v8h4v-8Z" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="M39 31v12H1v-34h38v10"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M43 31v8h-4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m1 9 5 -4h37v14"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M35 25h2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M33 31h14v-12h-14l-5 6 5 6Z"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
