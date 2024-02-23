<script setup>
defineProps({
  job: {
    type: Object,
    default: () => {},
  },

  isLastItem: {
    type: Boolean,
    default: false,
  },

  expandButtonText: {
    type: String,
    default: '',
  },
})

const { parseLocationType, parseJobType } = toRefs(useJobPostStore())

function handleImageError(job) {
  job.hiringOrganization.logo = '/placeholders/img_plc_2.jpg'
}

const isExpanded = ref(false)

function closeExpand() {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <VCard
    :class="[
      `mb-${isLastItem ? '0' : '3'}`,
      job.promoted && 'border-e-4 border-e-purple-400',
    ]"
    class="pa-5x card-color"
  >
    <div class="grid lg:grid-flow-col">
      <div class="pa-4">
        <div class="flex">
          <div class="bg-pinks flex align-center">
            <!-- Jopost org avatar -->
            <RouterLink :to="`/search/${job?.organizationDetails?.orgUrl}`">
              <RoundedSquareAvatar
                :highlight="job?.promoted"
                :initial="job?.hiringOrganization?.name[0] || ''"
                :src="job?.hiringOrganization?.logo"
                class="mr-4"
                link
                size="85"
                @error="handleImageError(job)"
              />
            </RouterLink>
          </div>

          <div>
            <!-- Jopost organization name -->
            <div class="x">
              <RouterLink
                :to="{
                  path: `/search/${job?.organizationDetails?.orgUrl}`,
                }"
              >
                <div class="active-push-down text-lg mb-n1">
                  {{ capitalize(job?.hiringOrganization?.name) }}
                </div>
              </RouterLink>
            </div>

            <!-- Jopost role title -->
            <div class="bg-pinkx">
              <RouterLink
                :to="`/job/${job?.organizationDetails?.orgUrl}/${job?.identifier?.value}`"
                class="ignore-a-style"
              >
                <div class="active-push-down text-lg font-bold">
                  {{ capitalizeEveryWord(job?.title) }}
                </div>
              </RouterLink>
            </div>

            <!-- Jopost geolocation meta -->
            <div class="mt-n1 flex gap-2">
              <div> 12 Applicants </div>
              <div class="text-link">
                Stockholm, Sweden
                <div>
                  {{ job?.jobLocation?.description }}
                </div>
              </div>
            </div>

            <!-- Jopost chips  -->
            <div class="mt-3 gap-2 flex align-center justify-start flex-wrap">
              <VChip
                v-if="job.jobLocationType"
                color="blue-lighten-1"
                elevation="2"
                size="small"
              >
                {{ parseLocationType(job?.jobLocationType) }}
              </VChip>

              <VChip v-if="job?.jobType" color="indigo-lighten-2" elevation="2" size="small">
                {{ parseJobType(job?.jobType) }}
              </VChip>

              <VChip
                v-if="job?.jobSeniority"
                color="indigo-lighten-3"
                elevation="2"
                size="small"
              >
                {{ job?.jobSeniority }}
              </VChip>

              <VSpacer />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-surface-footer flex gap-2 pa-2 border-t">
      <div class="flex align-center mx-2">
        <div>
          <div class="text-body-2">
            Posted
            {{ xDaysAgo(job?.datePosted) }}
          </div>
        </div>
      </div>
      <VSpacer />

      <!-- Jopost promoted and action btns -->
      <div class="text-end">
        <template v-if="job.promoted">
          <VChip color="deep-purple-accent-1 mx-4" label size="large">
            <VIcon icon="$mdiChevronUp" />
            Promoted
          </VChip>
        </template>

        <slot name="actions" />
      </div>
    </div>
    <div>
      <slot v-if="isExpanded" :close-expand="closeExpand" name="expand" />
    </div>
  </VCard>
</template>

<style scoped>
  .hover-up {
            box-shadow: 0 10px 23px -20px rgba(181, 181, 181, 0.19)!important;

    transition: all .2s ease-out;
}

.hover-up:hover {
     transform: translateY(-1.5px)!important;
        box-shadow: 0 1px 50px rgba(112, 109, 109, 0.1), 0 1px 2px rgba(0,0,0,.05)!important;

}
</style>
