import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';
import config from './postcss.config';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

export default defineNuxtConfig({
  ssr: true,
  app: {
  },
  typescript: {
    strict: true
  },
  vite: {
    plugins: [eslintPlugin()]
  },
  modules: [
    'vite-plugin-vue-type-imports/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/image-edge'
  ],
  build: {
    postcss: {
      postcssOptions: config
    }
  },
  css: ['~/assets/css/tailwind.css'],
  i18n: {
    lazy: false,
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de.json',
        name: 'German'
      }
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    vueI18n: {
      legacy: false,
      locale: 'en'
    }
  },
});
