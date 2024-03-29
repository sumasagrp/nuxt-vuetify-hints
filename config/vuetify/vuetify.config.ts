import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

import {
  defaultsCustom,
  defaultsNative,
  themes,
} from './settings'

export default defineVuetifyConfiguration({

  icons: {
    defaultSet: 'unocss-mdi',
  },

  theme: {
    themes,
  },

  defaults: {
    global: { transition: false },

    ...defaultsNative,
    ...defaultsCustom,
  },

})
