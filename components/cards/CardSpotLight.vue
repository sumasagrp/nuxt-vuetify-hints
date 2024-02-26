<script setup lang="ts">
const divRef = ref(null)
const position = reactive({ x: 0, y: 0 })
const opacity = ref(0)

function handleMouseMove(e) {
  if (!divRef.value)
    return

  const rect = divRef.value.getBoundingClientRect()

  position.x = e.clientX - rect.left
  position.y = e.clientY - rect.top
}

function handleMouseEnter() {
  opacity.value = 1
}

function handleMouseLeave() {
  opacity.value = 0
}
</script>

<template>
  <v-card>
    <TopBorderHighlight />

    <div
      ref="divRef"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div
        class="pointer-events-none absolute -inset-px transition duration-300"
        :style="{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120,86,255,.1), transparent 40%)`,
        }"
      />
      <slot />
    </div>
  </v-card>
</template>
