<template>
  <!-- <OrgSettingsAvatar /> -->

  <div class="flex flex-col gap-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <OrgSettingsName />
      <OrgSettingsAccountUrl />
    </div>

    <OrgSettingsAbout />
    <OrgSettingsTagline />
    <OrgSettingsWebsite />

    <OrgSettingsSocial />

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <OrgSettingsFounded />
      <OrgSettingsType />
      <OrgSettingsSize />
      <OrgSettingsIndustry />
    </div>
  </div>
</template>
