<script setup>
const { $vuetify } = useNuxtApp()

const mode = useColorMode({
  emitAuto: true,

  onChanged: (mode) => {
    $vuetify.theme.global.name.value = mode
  },
})
</script>

<template>
  <div>
    Color mode: {{ mode }}
    <VSelect
      v-model="mode"
      :items="['dark', 'light', 'auto']"
    />
  </div>
</template>
