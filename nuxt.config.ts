// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  // colorMode: {
   //  preference: 'system', // default value of $colorMode.preference
  //   fallback: 'light', // fallback value if not system preference found
  //   hid: 'nuxt-color-mode-script',
  //   globalName: '__NUXT_COLOR_MODE__',
  //   componentName: 'ColorScheme',
  //   classPrefix: '',
  //   classSuffix: '-mode',
  //   storageKey: 'nuxt-color-mode', crossorigin
 // },
  css: ['@/assets/main.css', '@/assets/styles/portfolio.scss'],
  app: {
    head: {
      script: [ { } ],
      link: [
      {  rel:"preconnect", href:"https://fonts.googleapis.com"},//Стили шрифтов с Google
      { rel:"preconnect", href:"https://fonts.gstatic.com" },
      {href:"https://fonts.googleapis.com/css2?family=Satisfy&display=swap&family=Sofia+Sans+Semi+Condensed:ital,wght@1,600&display=swap" ,rel:"stylesheet"},
        {
          rel: 'stylesheet',
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        },
     		 { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  }
})
// export default {
//   buildModules: ['@nuxtjs/color-mode'],
//   css: ['@/assets/main.css']
// }									  