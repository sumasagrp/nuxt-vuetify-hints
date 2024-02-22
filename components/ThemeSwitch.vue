<script setup>
const mode = useColorMode()
</script>

<template>
  <div>
    Color mode {{ mode }}
    <VSelect
      v-model="mode" :items="['dark', 'light', 'system']"
    />
  </div>
</template>
