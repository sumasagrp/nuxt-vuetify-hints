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
  <svg :height="size" :width="size" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5 9.5h-8v-8h-6v8h-8v6h8v8h6v-8h8v-6Z" fill="transparent" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="m8.5 23.5 2 -2h2v-8h10v2h-8v8h-6Z" stroke-width="1" />
    <path
      :stroke="colors.svgStroke" d="M22.5 9.5h-8v-8h-6v8h-8v6h8v8h6v-8h8v-6Z" stroke-linecap="round" stroke-linejoin="round"
      stroke-miterlimit="10" stroke-width="1"
    />
  </svg>
</template>
