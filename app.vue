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
</script>

<template>
  <div class="max-w-[1450px] mx-auto px-4">
    <VApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </VApp>
  </div>
</template>

<style>
html.dark {
  background-color: #091a28;
}

html.light {
  background-color: #f1e7d0;
}
</style>
