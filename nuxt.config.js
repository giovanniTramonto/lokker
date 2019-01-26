const pkg = require('./package')
const path = require('path')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  generate: {
    fallback: '404.html'
  },

  /*
  ** Global CSS
  */
  css: [
    '@/stylesheets/index.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // proxyHeaders: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          }
        )
      }

      for (const ruleList of Object.values(config.module.rules || {})) {
        for (const rule of Object.values(ruleList.oneOf || {})) {
          for (const loader of rule.use) {
            const loaderModifier = loaderModifiers[loader.loader]
            if (loaderModifier) {
              loaderModifier(loader)
            }
          }
        }
      }
    }
  }
}

const loaderModifiers = {
  'sass-loader': loader => {
    loader.options.includePaths = [path.join(__dirname, 'stylesheets')]
    loader.options.data = '@import "imports";'
  }
}
