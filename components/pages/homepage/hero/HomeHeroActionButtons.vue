<script setup lang="ts">
const { smAndDown } = useDisplay()
</script>

<template>
  <div class="mt-9 flex flex-wrap gap-4>
    <VBtn
      :block="smAndDown"
      class="rounded-xl border"
      color="link"
      size="x-large"
      variant="outlined"
    >
      Explore jobs
    </VBtn>

    <VBtn
      :block="smAndDown"
      class="rounded-xl border"
      color="black-button"
      size="x-large"
    >
      <div>
        Request early access
        <v-icon icon="i-mdi:chevron-right" />
      </div>
    </VBtn>
  </div>
</template>
