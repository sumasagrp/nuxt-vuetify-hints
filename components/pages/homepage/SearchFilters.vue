<script setup>
import jobTypes from '@/data/job-types'
import locationTypes from '@/data/location-types'
import seniorityTypes from '@/data/job-experience'

const { selectedJobTypes, selectedSeniorityType, selectedLocationType } = toRefs(useSearchStore())
const filterPanel = ref(0)
</script>

<template>
  <VList class="bg-transparent">
    <VListItem>
      <template #title>
        <b>Filters</b>
      </template>
      <template #append>
        <VBtn color="error" size="small" variant="text" @click="clearAllFilters()">
          Clear filters
        </VBtn>
      </template>
    </VListItem>
    <VListItem>
      <template #title>
        <b>Location</b>
      </template>
    </VListItem>
    <VListItem>
      <VTextField density="compact" disabled hide-details placeholder="Stockholm, Sweden">
        <template #prepend-inner>
          <VIcon icon="i-mdi:map-marker" size="small" />
        </template>
        <template #append-inner>
          <VIcon icon="i-mdi:chevron-down" size="small" />
        </template>
      </VTextField>
    </VListItem>
  </VList>

  <VExpansionPanels v-model="filterPanel" color="background" class="search-filters" variant="accordion">
    <VExpansionPanel bg-color="background" elevation="0" rounded="0" title="Job Types">
      <VExpansionPanelText>
        <VCheckbox
          v-for="jobType in jobTypes"
          :key="jobType.value"
          v-model="selectedJobTypes"
          :label="jobType.title"
          :value="jobType.value"
          density="compact"
          hide-details
        />
      </VExpansionPanelText>
      <div
        v-if="selectedJobTypes.length"
        class="v-expansion-panel-text__wrapper flex flex-wrap gap-2"
      >
        <VChip v-for="jobType in selectedJobTypes" :key="jobType" closable size="small">
          {{ jobType }}
        </VChip>
      </div>
    </VExpansionPanel>

    <VExpansionPanel bg-color="background" elevation="0" rounded="0" title="Job Location">
      <VExpansionPanelText>
        <VCheckbox
          v-for="locationType in locationTypes"
          :key="locationType.value"
          v-model="selectedLocationType"
          :label="locationType.title"
          :value="locationType.value"
          density="compact"
          hide-details
        />
      </VExpansionPanelText>
    </VExpansionPanel>

    <VExpansionPanel bg-color="background" elevation="0" rounded="0" title="Experience Levels">
      <VExpansionPanelText>
        <VCheckbox
          v-for="seniorityType in seniorityTypes"
          :key="seniorityType.value"
          v-model="selectedSeniorityType"
          :label="seniorityType.title"
          :value="seniorityType.title"
          density="compact"
          hide-details
        />
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
