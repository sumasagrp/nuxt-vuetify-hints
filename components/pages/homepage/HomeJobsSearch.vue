<script setup>
const { lgAndUp } = useDisplay()
const popular = ['marketing', 'design', 'developer', 'sales', 'product manager', 'business dev', 'intern', 'co-founder', 'customer service', 'remote']
</script>

<template>
  <div>
    <SquareImageCard :hide-column="!lgAndUp" avatar="/media/job-search.png" order="right">
      <div class=" mt-5 pa-md-10">
        <p class="search-apply-connect text-5xl lg:text-6xl sm:w-8/12 lg:w-auto h-fullx mb-5">
          Start your search for that
          <span class="text-link">perfect </span>job!
        </p>

        <div class="flex align-center justify-center gap-2 pt-3 w-100">
          <VTextField hide-details maxlength="65" placeholder="Search jobs..." prepend-inner-icon="i-mdi:magnify" />
        </div>
        <div class="gap-2 flex flex-wrap mt-5">
          <VChip v-for="tag in popular" :key="tag">
            <div>
              <VIcon color="link" icon="i-mdi:magnify" start />
              {{ capitalize(tag) }}
            </div>
          </VChip>
        </div>
      </div>
    </squareimagecard>
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
