<script setup lang="ts">
definePageMeta({
  fullHeight: true,
  hideFooter: true,
  disableHideOnScroll: true,

})
</script>

<template>
  <div class="flex">
    <div class="py-5 border-b pl-3 bg-redx gap-y-2 flex flex-col bg-bluex w-100 text-black dark:text-[#ccc]">
      <div class="text-3xl ">
        Search Jobs
      </div>

      <div>
        Query and visualize your Vercel usage, traffic, and more with the fields below.
      </div>
    </div>

    <div class="py-5 border-b pl-3 bg-redx gap-y-4 flex flex-col bg-redx w-100 items-end justify-center pr-7">
      <div class="flex gap-2">
        <SettingsButton size="large">
          My saved jobs
        </SettingsButton>
        <SettingsButton light size="large">
          Applied Jobs
        </SettingsButton>
      </div>
    </div>
  </div>

  <div class="h-full grid grid-cols-12 gap-3 pt-5">
    <div class="col-span-3">
      <div min-height="300" class="sticky top-20 pl-3x">
        <search-filters />
      </div>
    </div>

    <div class="col-span-9">
      <v-card v-for="(item, i) in 20" class="h-24 mb-4" :title="`card-${i}`" />
    </div>
  </div>
</template>
