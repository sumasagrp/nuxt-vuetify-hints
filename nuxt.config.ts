import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({

  ssr: true,

  modules: [
    // https://icones.js.org/
    'nuxt-icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'unplugin-fonts/nuxt',
    'vuetify-nuxt-module',
    '@nuxtjs/color-mode',

  ],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  unfonts: {
    custom: {
      families: [
        {
          name: 'Product Sans',
          local: 'Product Sans',
          // 👉 ProductSans-Regular.woff
          src: 'assets/fonts/*.woff',
        },
      ],
    },
  },

  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
      'storeToRefs',
    ],
  },

  imports: {
    injectAtEnd: true,
    dirs: ['stores'],

    presets: [
      {
        from: 'vuetify',
        imports: ['useDisplay', 'useTheme'],
      },

    ],
  },

  components:
  [{
    path: '@/components',
    pathPrefix: false,
  }],

  vite: {

    define: {
      'process.env.DEBUG': false,
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },

  },

  sourcemap: false,

  css: [
    'assets/vuetify/main.scss',
    'assets/css/main.css',
    'assets/css/vuetify.css',
    'assets/css/globals.css',

  ],

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },

  vuetify: {

    vuetifyOptions: 'config/vuetify/vuetify.config.ts',

    moduleOptions: {
      ssrClientHints: {
        viewportSize: true,
      },

      styles: {
        configFile: 'assets/vuetify/settings.scss',
      },

    },
  },

  features: {
    inlineStyles: false,
  },

  devtools: { enabled: false },

})
