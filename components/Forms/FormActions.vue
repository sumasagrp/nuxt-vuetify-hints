<script setup>
defineProps({
  noGutters: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="flex h-full gap-2 align-center px-5 py-2x">
    <slot />
  </div>
</template>
