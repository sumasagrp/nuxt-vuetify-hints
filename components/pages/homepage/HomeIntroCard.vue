<script setup>
defineOptions({
  inheritAttrs: false,
})

defineProps({
  to: {
    type: String,
    default: null,
  },

  link: {
    type: Boolean,
    default: false,
  },

  mask: {
    type: Boolean,
    default: true,
  },

  stack: {
    type: Boolean,
    default: false,
  },

  size: {
    type: [String, Number],
    default: '65',
  },

  icon: {
    type: [String, Object],
    default: '$mdiGithub',
  },

  title: {
    type: String,
    default: 'title',
  },

  description: {
    type: String,
    default: 'description',
  },
})
</script>

<template>
  <div :class="stack && 'stack'">
    <div
      :to="to"
      class="active-push-down-no-shadow pa-5 pa-md-8 flex flex-col gap-5 h-full"
      v-bind="{ ...$attrs }"
    >
      <VAvatar v-if="mask" :size="size" class="bg-deep-purple-darken-3 mask mask-hexagon">
        <VIcon :icon="icon" color="white" size="x-large" />
      </VAvatar>

      <div>
        <component :is="icon" :size="size" color="white" />
      </div>

      <h2 class="text-2xl font-bold">
        {{ title }}
      </h2>

      <div class="text-lg h-full text-[#]">
        {{ description }}
      </div>

      <div v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
