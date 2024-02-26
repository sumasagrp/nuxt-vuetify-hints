<script setup>
defineProps({
  text: {
    type: String,
    default: 'Read More',
  },

  to: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex align-center text-link cursor-pointer active-push-downx text-lg">
    <div class="truncate">
      {{ text }}
    </div>
    <VIcon end icon="i-mdi:arrow-right" size="17" />
  </div>
</template>
