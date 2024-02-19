export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:before-create', ({ vuetifyOptions }) => {
    // Logs this OK
    console.log('vuetify:plugin:hook', vuetifyOptions)
  })

  nuxtApp.hook('vuetify:ready', () => {
    // Logs this OK
    console.log('vuetify:ready')
  })

  nuxtApp.hook('vuetify:ssr-client-hints', ({ ssrClientHints }) => {
    // I never this this logged in the console.
    console.log('vuetify:ssr-client-hints', ssrClientHints)
  })
})
