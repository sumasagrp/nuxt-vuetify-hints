<script setup>
defineProps({
  text: {
    type: String,
    default: 'Submit',
  },
})
</script>

<template>
  <VBtn block class="rounded-xl border" size="large" type="submit">
    <div>
      {{ text }}
    </div>
  </VBtn>
</template>
