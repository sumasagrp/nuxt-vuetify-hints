<script setup lang="ts">
const { isDark, toggle } = useCustomTheme()
</script>

<template>
  <VBtn
    class="mr-1 mask mask-hexagon"
    rounded="lg"
    size="small"
    icon
    @click.stop="toggle()"
  >
    <Icon :name="isDark ? 'carbon:sun' : 'carbon:asleep-filled' " />
  </VBtn>
</template>
