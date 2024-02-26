<template>
  <div class="flex flex-col gap-6 bg-indigox">
    <HomeHero />
    <HomeJobsSearch />

    <HomeIntroCards />
    <div class="grid grid-cols-2 gap-8">
      <BlogCard v-for="card in 2" />
    </div>
  </div>
</template>

<style scoped>
  .search-apply-connect {
  @apply text-6xl font-bold;
}

.get-hired {
  @apply bg-clip-text bg-gradient-to-bl from-[#8788ee] to-[#304c85] text-transparent;
}
</style>
