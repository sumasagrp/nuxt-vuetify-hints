<script setup>
const { profile } = toRefs(useUserProfileStore())

const notifications = [

  {
    id: 'k2j3h4g5',
    avatar: '/avatars/sample1.jpg',
    user: 'Julia Dasser',
    action: 'is inviting you to join the organization',
    target: 'Spotify',
    actionButtons: true,
  },
  {
    id: 'k1jah4g5',
    avatar: '/avatars/sample5.jpg',
    user: 'August Pantier',
    action: 'is inviting you to join the organization',
    target: 'Skype',
    actionButtons: true,
  },
  {
    id: 'k1lah4g0',
    avatar: '/avatars/sample4.jpg',
    user: 'Peter Jäsa',
    action: 'Accepted your connection request.',
    target: '',
    actionButtons: false,
  },
  {
    id: 'zzlah4g0',
    avatar: '/avatars/sample3.jpg',
    user: 'Sebastian Mondak',
    action: 'Applied to your job post',
    target: 'Senior Virtualization Consultant',
    actionButtons: false,
    isApplication: true,
  },

  {
    id: 'k2j3h4g5',
    avatar: '/avatars/sample1.jpg',
    user: 'Julia Dasser',
    action: 'is inviting you to join the organization',
    target: 'Spotify',
    actionButtons: true,
  },
  {
    id: 'k1jah4g5',
    avatar: '/avatars/sample5.jpg',
    user: 'August Pantier',
    action: 'is inviting you to join the organization',
    target: 'Skype',
    actionButtons: true,
  },
  {
    id: 'k1lah4g0',
    avatar: '/avatars/sample4.jpg',
    user: 'Peter Jäsa',
    action: 'Accepted your connection request.',
    target: '',
    actionButtons: false,
  },
  {
    id: 'zzlah4g0',
    avatar: '/avatars/sample3.jpg',
    user: 'Sebastian Mondak',
    action: 'Applied to your job post',
    target: 'Senior Virtualization Consultant',
    actionButtons: false,
    isApplication: true,
  },
]
// const notifications = [

// ]
</script>

<template>
  <VMenu v-if="profile" :close-on-content-click="false" class="border" offset="24 95" scrim="#000">
    <template #activator="{ props }">
      <VBadge
        bordered
        class="mx-5 prevent-select"
        color="primary"
        content="2"
        offset-x="3"
        offset-y="2"
      >
        <RoundedSquareAvatar v-bind="props" icon="$mdiBellOutline" link />
      </VBadge>
    </template>

    <VCard elevation="10">
      <VContainer>
        <div class="flex gap-2">
          <div class="text-h6 font-bold">
            Notifications
          </div>
          <VSpacer />

          <SettingsButton class="mr-1">
            Mark all as read
          </SettingsButton>

          <SettingsButton>
            <VIcon start>
              $mdiCogOutline
            </VIcon>
            Notification settings
          </SettingsButton>
        </div>
      </VContainer>

      <VDivider />

      <VTabs class="border-b" color="link">
        <VTab :ripple="false">
          All <VChip class="ml-2" size="x-small">
            33
          </VChip>
        </VTab>
        <VTab :ripple="false">
          Unread
          <VChip class="ml-2" size="x-small">
            0
          </VChip>
        </VTab>
      </VTabs>

      <VSheet class="flex flex-col h-fullx overflow-auto" height="483" min-width="710">
        <GAppBarNotificationsEmpty v-if="!notifications.length" />

        <template v-else>
          <div v-for="item in notifications" :key="item.id">
            <div class="flex w-100 pa-4">
              <div class="pr-5x">
                <RoundedSquareAvatar :src="item.avatar" />
              </div>

              <div class="px-8 flex flex-col w-100 ">
                <div>
                  <span class="text-link font-bold">{{ item.user }} </span> <span class="text-body-2">  {{ item.action }} </span> <span class="text-link font-bold">{{ item.target }}</span>
                </div>

                <small>5 minutes ago</small>

                <div v-if="item.actionButtons" class="flex mt-2">
                  <SettingsButton class="mr-1" size="small">
                    <VIcon start>
                      $mdiThumbUpOutline
                    </VIcon>  Accept
                  </SettingsButton>
                  <SettingsButton color="accent-button" size="small">
                    <VIcon start>
                      $mdiThumbDownOutline
                    </VIcon>
                    Decline
                  </SettingsButton>
                </div>
                <div v-if="item.isApplication" class="flex mt-3 gap-2">
                  <SettingsButton class="roudeed-lg" size="small">
                    Review applicaiton
                  </SettingsButton>
                </div>
              </div>

              <div class="flex">
                <SettingsButton v-if="!item.actionButtons" class="rounded-lg mr-2" color="link" icon size="small" variant="text">
                  <VIcon icon="$mdiThumbUpOutline" size="large" />
                </SettingsButton>

                <!-- <SettingsButton class="rounded-lg mr-2" color="link" icon size="small" variant="text">
                  <VIcon icon="$mdiDotsHorizontal" size="large" />
                  </SettingsButton> -->
              </div>
            </div>
            <VDivider />
          </div>
        </template>
      </VSheet>
    </VCard>
  </VMenu>
</template>
