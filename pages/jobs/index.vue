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

    <div class="py-5 border-b pl-3 bg-redx gap-y-4 flex flex-col bg-redx w-100 items-end justify-center pr-7x">
      <div class="flex gap-2">
        <SettingsButton light size="large">
          Applied Jobs
        </SettingsButton>

        <SettingsButton prepend-icon="i-mdi:bookmark-outline" light size="large">
          My saved jobs
        </SettingsButton>
      </div>
    </div>
  </div>

  <div class="h-full grid grid-cols-12 gap-3 pt-5">
    <div class="col-span-3">
      <div class="sticky top-20">
        <search-filters />
      </div>
    </div>

    <div class="col-span-9">
      <v-sheet height="80" color="background" class="sticky top-20 align-center">
        <div class="flex flex-col h-100 w-100 align-center justify-center">
          <div class="w-100 flex align-center  bg-greenx">
            <VTextField
              placeholder="Search by title, company or just free text"
              autofocus
              hide-details
              class="mr-2"
              prepend-inner-icon="i-mdi:magnify"
            />

            <SettingsButton class="mr-1" height="40">
              Search
            </SettingsButton>

            <SettingsButton light append-icon="i-mdi:chevron-down" class="mr-1" height="40">
              Sort by relevance
            </SettingsButton>

            <v-btn-toggle
              mandatory
              class=" rounded-lg"
              style="height: 40px"
              density="compact"
              variant="outlined"
              divided
            >
              <v-btn>
                <v-icon icon="i-mdi-format-list-bulleted-square" />
              </v-btn>
              <v-btn>
                <v-icon icon="i-mdi-dots-grid" />
              </v-btn>
            </v-btn-toggle>
          </div>
        </div>
      </v-sheet>
      <div>
        <v-sheet v-for="item in 100" height="150" class="mb-2" />
      </div>
    </div>
  </div>
</template>
