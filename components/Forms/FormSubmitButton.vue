<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'Submit',
  },
})
</script>

<template>
  <SettingsButton
    color="black-button"
    size="large"
    block
    variant="flat"
    light
    type="submit"
  >
    {{ text }}
  </SettingsButton>
</template>
