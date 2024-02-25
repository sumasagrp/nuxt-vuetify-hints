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
      <div class="max-w-[1475px] mx-auto px-3 bg-bluex flex flex-col h-full ">
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

.scroll-shadow {
  .scrollGradient {
    background:
      linear-gradient(#ffffff 33%, rgba(255, 255, 255, 0)),
      linear-gradient(rgba(255, 255, 255, 0), #ffffff 66%) 0 100%,
      radial-gradient(
        farthest-side at 50% 0,
        rgba(102, 102, 102, 0.5),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
          farthest-side at 50% 100%,
          rgba(102, 102, 102, 0.5),
          rgba(0, 0, 0, 0)
        )
        0 100%;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-attachment: local, local, scroll, scroll;
    background-size:
      100% 96px,
      100% 96px,
      100% 32px,
      100% 32px;
  }
}
</style>
