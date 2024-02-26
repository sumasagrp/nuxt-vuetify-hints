<script setup>
import pen from '@/components/svg/cyber-duotone/DuoPen.vue'
import job from '@/components/svg/cyber-duotone/DuoJobMagnifier.vue'
import calendar from '@/components/svg/cyber-duotone/DuoCalendar.vue'

const cards = [
  {
    readMoreText: 'Learn about promoting your posts',
    icon: calendar,
    title: 'Effective for 30 Days',
    description:
        'Effective for 30 Days. Your job opening will remain active for an entire month, garnering visibility amongst Thousands of daily visitors...',
  },
  {
    readMoreText: 'Learn the advatages of it ',
    icon: job,
    title: 'Included in Google Jobs',
    description:
        'Your job postings featured and easily accessible through google search results increase visibility for your job listings...',
  },
  {
    readMoreText: 'Explore other free options',
    icon: pen,
    title: 'Edit your listing at no cost',
    description:
        'Made errors or forgot key details? Not an issue! Revamp your listing hassle-free as many times as you need...',
  },
]
</script>

<template>
  <div class="intro-card-wrapper">
    <CardSpotLight
      v-for="card in cards"
      :key="card.title"
    >
      <HomeIntroCard
        :mask="false"
        stack
        v-bind="{ ...card }"
      >
        <template #footer>
          <ContinueReading :text="card.readMoreText" />
        </template>
      </HomeIntroCard>
    </CardSpotLight>
  </div>
</template>

<style scoped>
  .intro-card-wrapper {
  @apply grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3;
}
</style>
