<script setup>
const sidebarLinks = [{ title: 'Dashboard', route: '/app', icon: 'i-mdi:home-outline' }]

const sidebarEngagements = [
  { title: 'Messages', route: '/app/org/messages', icon: 'i-mdi:email-outline', disabled: true },
  {
    title: 'Applicants',
    route: '/app/org/aplicants/',
    icon: 'i-mdi:bullseye-arrow',
    disabled: true,
  },
  {
    title: 'Job Posts',
    route: '/app/org/jobposts',
    icon: 'i-mdi:bookmark-outline',
    disabled: false,
  },
]

const sidebarSettings = [
  {
    title: 'Preferences',
    route: '/app/org/integrations',
    icon: 'i-mdi:brush-outline',
    disabled: true,
  },
  {
    title: 'Billing & Plans',
    route: '/app/org/billing',
    icon: 'i-mdi:tag-outline',
    disabled: true,
  },
  {
    title: 'Organization',
    route: '/app/org/organization/profile',
    icon: 'i-mdi:lightning-bolt-outline',
  },

  {
    title: 'Your Profile',
    route: '/app/profile',
    icon: 'i-mdi:account-outline',
    disabled: false,
  },

  { title: 'Manage Acccount', route: '/app/account', icon: 'i-mdi:cog-outline', disabled: false },

]
</script>

<template>
  <VList density="compact" class="pa-y mt-2 px-0x bg-transparent">
    <!-- * [ Home ] -->
    <VListItem

      v-for="link in sidebarLinks" :key="link.id" :ripple="false" :title="link.title" :to="link.route" exact link
      rounded="lg"
    >
      <template #prepend="{ isActive }">
        <VIcon :color="isActive && 'primary'" :icon="link.icon" end />
      </template>
    </VListItem>

    <VDivider class="my-2" />

    <VListSubheader class="text-overline">
      Engagement
    </VListSubheader>

    <!-- * [ Engagement ] -->
    <VListItem
      v-for="link in sidebarEngagements"
      :key="link.id" rounded="lg" :disabled="link.disabled" :ripple="false"
      :title="link.title" :to="link.route"
    >
      <template #prepend="{ isActive }">
        <VIcon :color="isActive && 'primary'" :icon="link.icon" end />
      </template>
    </VListItem>

    <VDivider class="my-2" />
    <VListSubheader class="text-overline">
      Settings
    </VListSubheader>

    <!-- * [ Settings ] -->
    <VListItem
      v-for="link in sidebarSettings" :key="link.id" :disabled="link.disabled" :ripple="false"
      :title="link.title" :to="link.route" exact link rounded="md"
    >
      <template #prepend="{ isActive }">
        <VIcon :color="isActive && 'primary'" :icon="link.icon" end />
      </template>
    </VListItem>
  </VList>
</template>
