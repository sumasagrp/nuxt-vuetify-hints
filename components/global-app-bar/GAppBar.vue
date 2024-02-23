<script setup lang="ts">
const route = useRoute()
const hideAppBar = computedEager(() => !route.meta.hideAppBar)
const disableHideOnScroll = computedEager(() => route.meta.disableHideOnScroll)
</script>

<template>
  <VAppBar
    v-if="hideAppBar"
    :scroll-behavior="disableHideOnScroll ? undefined : 'hide'"
    :height="100"
    class=" px-3"
    color="background"
  >
    <VCard :style="`width: ${1450}px`" class="mx-auto flex items-center p-7 mt-2 elevation-0 dark:backdrop-blur  " height="68">
      <NuxtLink to="/">
        <SkriptjobsLogo />
      </NuxtLink>
      <VSpacer />

      <GAppBarMenuRight />
    </VCard>
  </VAppBar>
</template>
