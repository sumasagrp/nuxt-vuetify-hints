import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({

  ssr: true,

  modules: [
    // https://icones.js.org/
    'nuxt-icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'unplugin-fonts/nuxt',
    'vuetify-nuxt-module',
    // 'nuxt-delay-hydration',

  ],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: '',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
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

  i18n: {
    lazy: false,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json',
      },
    ],
    defaultLocale: 'en',
    vueI18n: 'config/i18n.config.ts',
    detectBrowserLanguage: false,
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

    optimizeDeps: {
      exclude: [
        'vuetify',
      ],
    },

    define: {
      'process.env.DEBUG': false,
    },

    ssr: {
      noExternal: ['vuetify'],
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

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },

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

  typescript: {
    strict: false,
  },

  devtools: { enabled: false },

})
