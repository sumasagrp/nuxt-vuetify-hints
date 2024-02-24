<template>
  <div>
    <div class="lg:flex hidden align-center ">
      <div class="gap-4 flex">
        <VBtn
          :active="false"
          class="border-0 no-gutters"
          color="appbar-buttons"
          size="large"
          to="/jobs"
          variant="plain"
        >
          Find Jobs
        </VBtn>

        <VBtn
          :active="false"
          class="border-0 no-gutters"
          color="appbar-buttons"
          size="large"
          variant="plain"
          to="/companies"
        >
          Browse Companies
        </VBtn>

        <VBtn
          :active="false"
          class="border-0 no-gutters"
          color="appbar-buttons"
          disabled
          size="large"
          to="/"
          variant="plain"
        >
          Pricing
        </VBtn>
      </div>

      <VDivider class="mx-3" vertical />

      <div class="gap-3 flex">
        <VBtn class="rounded-xl border-0" color="link" size="large" to="/auth/signin" variant="plain">
          Sign In
        </VBtn>

        <SettingsButton
          color="black-button"
          size="large"
          to="/app"
          variant="flat"
          light
        >
          <div class=" flex align-center">
            Get started
            <VIcon class="ml-1" end icon="i-mdi:arrow-right" size="17" />
          </div>
        </SettingsButton>
      </div>

      <!-- <template v-else>
        <GAppBarNotifications />
        <GAppBarProfileMenu />
      </template> -->
    </div>
  </div>
</template>
