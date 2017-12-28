importScripts('/_nuxt/workbox.476439e0.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "malcoded.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.756c3b1fc909453d6230.js",
    "revision": "4ea803b4d147320f2890f346aed1545c"
  },
  {
    "url": "/_nuxt/common.1bd7bddeea8366381818098af1b1f738.css",
    "revision": "12afc98ff4246f623ebec583de16fe6d"
  },
  {
    "url": "/_nuxt/common.6854f1dcba5c85d0d72ac5b57d097799.css",
    "revision": "d8cd8dd35b88323ddaeed36ef9176ba4"
  },
  {
    "url": "/_nuxt/common.fd87d53c25043bfff5ab.js",
    "revision": "4ed17f9780a24977886285662313fe6c"
  },
  {
    "url": "/_nuxt/layouts/default.1482e26ea29d56f97f03.js",
    "revision": "c25fe88a9f6133413de46c79eba6e135"
  },
  {
    "url": "/_nuxt/manifest.3bd0b341fffe2612802d.js",
    "revision": "7bc4e69b1b53521fae281a5dad4fa728"
  },
  {
    "url": "/_nuxt/pages/aboutme.5f8ca3aaa6d158bcaf2a.js",
    "revision": "072e199606fc06fecb5bbe90b1d368b1"
  },
  {
    "url": "/_nuxt/pages/category/_category.e43a51246da72f5ab193.js",
    "revision": "8bfc23ef683ec9619bee80feecf40dcb"
  },
  {
    "url": "/_nuxt/pages/index.fa29d337e4f7e5c79ab3.js",
    "revision": "aadc064ad16cd2815e021ac94d1b6dcc"
  },
  {
    "url": "/_nuxt/pages/legal.6a5efb1c5a38fae04616.js",
    "revision": "744240318f75c78bff327eab09d3a2ac"
  },
  {
    "url": "/_nuxt/pages/posts/_post.b499dfbd5ff2843db3f6.js",
    "revision": "8da4b8a45ec8129bd381dca70d55d296"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

