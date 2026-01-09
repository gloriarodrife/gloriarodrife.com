// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Gloria Rodríguez - Software Developer',
      meta: [
        { name: 'description', content: 'Software Developer. Never stop learning. Animal lover. Sports' }
      ],
    },
  },
});
