<script setup lang="ts">
const route = useRoute()

const hideAppBar = computedEager(() => !route.meta.hideAppBar)
// const isNotEmptyAppBar = computedEager(() => !route.meta.emptyAppBar)
</script>

<template>
  <VAppBar
    v-if="hideAppBar"
    scroll-behavior="hide"
    :height="90"
    class=" px-3"
  >
    <VCard :style="`width: ${1450}px`" class="mx-auto flex items-center pa-7 mt-2 elevation-0 dark:backdrop-blur dark:bg-gray-800/50 bg-white" height="68">
      <NuxtLink to="/">
        <SkriptjobsLogo />
      </NuxtLink>
      <VSpacer />

      <GAppBarMenuRight />
    </VCard>
  </VAppBar>
</template>
