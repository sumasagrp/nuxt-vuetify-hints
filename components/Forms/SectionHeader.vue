<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <div class="mb-5 flex">
      <div class="text-h5 font-black">
        {{ title }}
      </div>
      <VSpacer />
      <slot name="append" />
    </div>
    <VDivider class="mb-5" />
  </div>
</template>
