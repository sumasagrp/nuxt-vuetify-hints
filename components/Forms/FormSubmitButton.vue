<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'Submit',
  },
})
</script>

<template>
  <VBtn block class="rounded-lg border" size="large" type="submit">
    <div>
      {{ text }}
    </div>
  </VBtn>
</template>
