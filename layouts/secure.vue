<script setup>
const route = useRoute()
const fullHeight = computedEager(() => route.meta.fullHeight)
</script>

<template>
  <VMain class="bg-redx" :class="fullHeight && 'h-full'">
    <slot />
  </VMain>
</template>
