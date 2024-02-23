<script setup lang="ts">
const { smAndDown, mdAndUp, smAndUp } = useDisplay()

const route = useRoute()

const hideFooter = computedEager(() => route.meta.hideFooter)

const socialIcons = [
  { title: 'github', icon: 'i-mdi:github', link: 'https://github.com/Skriptjobs' },
  { title: 'linkedin', icon: 'i-mdi:linkedin', link: 'https://www.linkedin.com/company/skriptjobs/' },
]

const columns = [
  {
    name: 'Organizations',
    children: [
      { name: 'Pricing', link: '#' },
      { name: 'Packages', link: '#' },
      { name: 'Contact Sales', link: '#' },
      { name: 'Dedicated Support', link: '#' },
    ],
  },

  {
    name: 'Candidates',
    children: [
      { name: 'Find jobs', link: '#' },
      { name: 'Find Remote jobs', link: '#' },
      { name: 'Explore Companies  ', link: '#' },
      { name: 'The blog', link: '#' },
    ],
  },

  {
    name: 'Skriptjobs',
    children: [
      { name: 'Newsroom', link: '#' },
      { name: 'Career Opportunities', link: '#' },
      { name: 'Customer Stories', link: '#' },
      { name: 'Contact Skriptjobs', link: '#' },
    ],
  },
]
</script>

<template>
  <VFooter v-show="!hideFooter">
    <VSheet :width="1475" class="bg-redx mx-auto bg-background p-5">
      <div class="lg:flex md:justify-between">
        <!-- ** Skriptjobs logo  -->
        <div class="mb-10 md:mb-5 prevent-select md:w-8/12 lg:w-4/12 text-lg mr-7">
          <p class="my-2">
            We made job hunting and recruiting a fun thing to do. Why overcomplcating matters,
            talent is everywhere, we aim to be the proxy that links talent with opportunity.
          </p>

          <p class="mt-4 text-overline mb-2">
            Need help? We've got you
          </p>

          <div class="flex gap-x-2">
            <SettingsButton light>
              Support
            </SettingsButton>

            <SettingsButton light>
              Help Center
            </SettingsButton>
          </div>
        </div>

        <!-- ** Columns  -->
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div v-for="{ name, children } in columns" :key="name">
            <h2 class="mb-6 text-sm font-semibold uppercase">
              {{ name }}
            </h2>

            <!-- ** Column Links  -->
            <ul>
              <li v-for="{ name: childName, link } in children" :key="childName" class="mb-4">
                <a :href="link" class="hover:underline" target="_blank">
                  {{ capitalize(childName) }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ** Divider Line  -->
      <VDivider class="my-4" />

      <div class="flex">
        <VRow>
          <VCol
            :cols="!mdAndUp && '12'"
            :order="smAndDown && 'last'"
            align-self="center"
            class="flex flex-col gap-y-3"
          >
            <!-- ** Copyright  -->
            <div class="flex text-sm flex-col">
              <div :class="[{ 'inline-flex': smAndUp }]" class="gap-3">
                <div>
                  © 2022-{{ new Date().getFullYear() }}
                  <a class="hover:underline" href="#"> Skriptjôbs </a> - All Rights Reserved
                </div>

                <div class="flex flex-wrap gap-3">
                  <a class="hover:underline" href="#"> Terms of Use </a>
                  <a class="hover:underline" href="#"> Privacy Policy </a>
                  <a class="hover:underline" href="#"> Use of Data </a>
                </div>
              </div>
            </div>

            <!-- ** Made with ...  -->
            <div>
              Made with <span style="font-size: 13px"> 💜</span> in Sweden
              <span style="font-size: 15px"> 🇸🇪</span>
            </div>
          </VCol>

          <VCol align-self="center" cols="12" sm="auto">
            <!-- ** Social Icons and Theming  -->
            <div class="gap-y-2 flex space-x-6 sm:mt-0 sm:justify-end align-center">
              <!-- ** Theme Controls  -->
              <theme-switch />

              <!-- ** Social icons  -->
              <a
                v-for="{ title, icon, link } in socialIcons"
                :key="title"
                :href="link"
                target="_blank"
              >

                <v-icon :icon="icon" />

              </a>
            </div>
          </VCol>
        </VRow>
      </div>
    </VSheet>
  </VFooter>
</template>
