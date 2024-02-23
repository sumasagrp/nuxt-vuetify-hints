<script setup>
defineProps({
  size: {
    type: String,
    default: 'default',
  },

  color: {
    type: String,
    default: 'black-button',
  },

  border: {
    type: Boolean,
    default: true,
  },

  removeIcon: {
    type: Boolean,
    default: false,
  },

  refreshIcon: {
    type: Boolean,
    default: false,
  },

  copyIcon: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  submit: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    default: '',
  },

  loading: {
    type: Boolean,
    default: false,
  },

  light: {
    type: Boolean,
    default: false,
  },

})
</script>

<template>
  <div :class="{ 'cursor-not-allowed pointer-events-none': disabled || loading }">
    <VBtn
      v-bind="$attrs"
      :border="border"
      :color="light ? 'light-button' : color"
      :loading="loading"
      :size="size"
      :type="!disabled && submit ? 'submit' : 'button'"
      class="rounded-lg"
      elevation="0"
      @click.stop
    >
      <VIcon v-if="removeIcon" start>
        $mdiTrashCanOutline
      </VIcon>
      <VIcon v-if="refreshIcon" start>
        $mdiRefresh
      </VIcon>
      <VIcon v-if="copyIcon" start>
        $mdiContentCopy
      </VIcon>

      {{ title }}
      <slot />
    </VBtn>
  </div>
</template>
