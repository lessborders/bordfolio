import { defineNuxtConfig } from 'nuxt3'
import { IntlifyModuleOptions } from '@intlify/nuxt3'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // meta
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Create your portfolio website in minutes and share it with your friends or potential employers.',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://static.lessborders.com/assets/css/root.css',
      },
    ],
    // js
    script: [
      { src: 'https://static.lessborders.com/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js' },
      {
        hid: 'gtm',
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WBC9QHT');`,
        type: 'text/javascript',
      },
    ],
  },

  // css
  css: ['~/assets/scss/styles.scss'],

  // plugins
  plugins: ['~/plugins/routeChange.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // build modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
  ],

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'de'],
    },
  },
})
