import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

import {
  defaultsCustom,
  defaultsNative,
  themes,
} from './settings'

export default defineVuetifyConfiguration({

  theme: {
    themes,
  },

  defaults: {
    ...defaultsNative,
    ...defaultsCustom,
  },

})