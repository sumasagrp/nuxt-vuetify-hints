import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({

  ssr: true,

  unocss: {
    icons: true,
  },

  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'unplugin-fonts/nuxt',
    'vuetify-nuxt-module',
    'nuxt-lodash',
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
    dirs: ['stores', 'scripts/**/*.{ts,js}'],

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
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },

    ssr: {
      noExternal: ['vuetify'],
    },

    optimizeDeps: {
      exclude: [
        'vuetify',
      ],
    },

    define: {
      'process.env.DEBUG': false,
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },

  },

  sourcemap: {
    server: false,
    client: false,
  },

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

  experimental: {
    typedPages: true,
  },

  devtools: { enabled: false },

})
