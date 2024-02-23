<script setup lang="ts">
const { isSignInView } = toRefs(useRoutingStore())

const footerAccountText = computedEager(() => {
  return isSignInView.value ? `Don't have an account?` : `Already have an account?`
})

const formType = computed(() => {
  return [
    { name: 'Sign up', to: '/auth/signup', condition: isSignInView.value },
    { name: 'Sign in', to: '/auth/signin', condition: !isSignInView.value },
  ]
})

const links = [
  { name: 'Skriptjôbs™', to: '/' },
  { name: 'Contact', to: '/' },
  { name: 'Privacy & terms', to: '/' },
]
</script>

<template>
  <div class="flex flex-column text-subtitle-2 mx-5">
    <div class="flex">
      {{ footerAccountText }}

      <template
        v-for="{ name, to, condition } in formType"
        :key="name"
      >
        <NuxtLink
          v-if="condition"
          :to="to"
          class="ml-2 ignore-a-style text-link"
        >
          {{ name }}
        </NuxtLink>
      </template>
    </div>

    <div class="flex gap-3 mt-2">
      <NuxtLink
        v-for="{ name, to } in links"
        :key="name"
        :to="to"
      >
        <span>{{ name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
