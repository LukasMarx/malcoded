const nodeExternals = require("webpack-node-externals");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

const generateDisallow = () => {
  const array = ["/privacy", "/legal"];
  if (process.env.BLOCK_ROBOTS) {
    array.push("/");
  }
  return array;
};

module.exports = {
  /*
   ** Headers of the page
   */
  router: {
    base: "/"
  },
  head: {
    title: "malcoded | Learn to build Web-Applications",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "google-site-verification",
        content: "FWSL-9BrQcznNznCkDYWgceFZ3XNzxBggv8KXU0Ut2k"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Learn all about building Single Page Applications using the Angular framework and Typescript! From absolute beginner to intermediate; We've got you covered!"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/_nuxt/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#c3002f" },

  modules: [
    "@nuxtjs/apollo",
    [
      "nuxt-robots-module",
      [
        {
          /* module options */
          UserAgent: "*",
          Disallow: generateDisallow()
        }
      ]
    ],
    [
      "nuxt-env",
      {
        keys: ["GRAPHQL_URL", "ASSET_URL", "BASE_URL", "ROBOTS"]
      }
    ],
    ["@nuxtjs/pwa", { onesignal: false, workbox: false }]
    // [
    //     '@nuxtjs/google-analytics',
    //     {
    //         id: 'UA-87372848-1',
    //         set: [{ field: 'anonymizeIp', value: true }, { field: 'storage', value: 'none' }, { field: 'storeGac', value: false }],
    //         commands: {
    //             optOut: function() {
    //                 document.cookie = 'ga-disable-UA-87372848-1=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    //                 window['ga-disable-UA-87372848-1'] = true;
    //             }
    //         },
    //         beforeFirstHit: function() {
    //             // this is right after the tracker and before every other hit to Google Analytics
    //             if (document.cookie.indexOf('ga-disable-UA-87372848-1=true') > -1) {
    //                 window['ga-disable-UA-87372848-1'] = true;
    //             }
    //         },
    //         autoTracking: {
    //             shouldRouterUpdate: function(to, from) {
    //                 return !window['ga-disable-UA-87372848-1'];
    //             }
    //         }
    //     }
    // ]
  ],
  plugins: ["~/plugins/vuetify.js"],
  manifest: {
    name: "malcoded",
    short_name: "malcoded",
    description:
      "Learn all about building Single Page Applications using the Angular framework and Typescript! From absolute beginner to intermediate; We've got you covered!",
    lang: "en",
    theme_color: "#c3002f"
  },

  // workbox: {
  //     importScripts: ['custom-sw.js'],
  //     cacheId: 'malcoded.com',
  //     navigateFallback: '/',
  //     skipWaiting: true,
  //     runtimeCaching: [
  //         {
  //             urlPattern: 'https://fonts.googleapis.com/.*',
  //             handler: 'networkFirst'
  //         },
  //         {
  //             urlPattern: 'https://assets.malcoded.com/.*',
  //             handler: 'networkFirst'
  //         },
  //         {
  //             urlPattern: 'https://api.malcoded.com/.*',
  //             handler: 'networkFirst'
  //         }
  //     ]
  // },

  css: ["~/assets/vuetify.min.css"],
  apollo: {
    clientConfigs: {
      default: "~/apollo/client-configs/default.js",
      post: "~/apollo/client-configs/post.js"
    }
  },
  srcDir: "src-nuxt",

  /*
   ** Build configuration
   */
  build: {
    publicPath: "/dist/",
    extractCSS: true,
    babel: {
      plugins: [
        [
          "prismjs",
          {
            languages: ["javascript", "css", "markup", "typescript", "tsx"]
          }
        ]
      ]
    },
    transpile: [/^vuetify/],
    plugins: [new VuetifyLoaderPlugin()],
    extend(config, ctx) {
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
