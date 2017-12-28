const nodeExternals = require('webpack-node-externals');
const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    base: '/'
  },
  head: {
    title: 'malcoded | Angular, Typescript & more!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      {
        hid: 'index_description',
        name: 'description',
        content:
          "Learn all about building Single Page Applications using the Angular framework and Typescript! From absolute beginner to intermediate; We've got you covered!"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/_nuxt/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#c3002f' },

  modules: [
    '@nuxtjs/apollo',
    ['@nuxtjs/pwa', { onesignal: false }],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-87372848-1',
        set: [{ field: 'anonymizeIp', value: true }],
        commands: {
          optOut: function() {
            document.cookie =
              'ga-disable-UA-87372848-1=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
            window['ga-disable-UA-87372848-1'] = true;
          }
        },
        beforeFirstHit: function() {
          // this is right after the tracker and before every other hit to Google Analytics
          if (document.cookie.indexOf('ga-disable-UA-87372848-1=true') > -1) {
            window['ga-disable-UA-87372848-1'] = true;
          }
        },
        autoTracking: {
          shouldRouterUpdate: function(to, from) {
            return !window['ga-disable-UA-87372848-1'];
          }
        }
      }
    ]
  ],

  manifest: {
    name: 'malcoded.com',
    lang: 'en',
    theme_color: '#c3002f'
  },

  workbox: {
    importScripts: ['custom-sw.js'],
    cacheId: 'malcoded.com',
    navigateFallback: '/',
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'networkFirst'
      },
      {
        urlPattern: 'https://assets.malcoded.com/.*',
        handler: 'networkFirst'
      },
      {
        urlPattern: 'https://api.malcoded.com/.*',
        handler: 'networkFirst'
      }
    ]
  },

  css: ['~/assets/vuetify.min.css'],

  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  srcDir: 'src-nuxt',
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        [
          'transform-imports',
          {
            vuetify: {
              transform: 'vuetify/es5/components/${member}',
              preventFullImport: true
            }
          }
        ]
      ]
    },
    vendor: ['~/plugins/vuetify.js'],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  },
  plugins: ['~/plugins/vuetify.js']
};
