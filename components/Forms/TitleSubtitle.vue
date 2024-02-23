<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="wrapper">
    <div class="text-h3 component-title">
      {{ title }}
    </div>
    <p class="subtitle text-xl component-subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
  .wrapper {
  @apply max-w-2xl mx-auto text-center;
}

.component-title {
  @apply font-bold tracking-normal;
}

.component-subtitle {
  @apply mt-4;
}
</style>
