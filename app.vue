<script setup lang="ts">
const title = 'Skriptjobs™ – Discover your next career journey'
const description = 'Join us and start exploring companies, jobs or talent. We made job hunting and recruiting a fun thing to do. We aim to be the proxy that links talent with opportunity.'
const image = 'https://skriptjobs.com/Skriptjobs-Meta-ShareImg_Hero-EN.png'
const url = 'https://skriptjobs.com'

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogImage: image,
  twitterCard: 'summary',
  twitterTitle: title,
  twitterImage: image,
  twitterDescription: description,
  ogTitle: title,
  ogUrl: url,
})

const boot = ref(false)

onMounted(() => {
  setTimeout(() => {
    boot.value = true
  }, 300)
})
</script>

<template>
  <VApp :class="boot ? 'opacity-100' : 'opacity-0'">
    <GAppBar />
    <NuxtLayout>
      <div class="max-w-[1475px] mx-auto px-3">
        <NuxtPage />
      </div>
    </NuxtLayout>
    <TheFooter />
  </VApp>
</template>

<style>
html.dark,
html.light {
  background-color: rgba(var(--v-theme-background)) !important;
}
</style>
