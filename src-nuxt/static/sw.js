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
    "url": "/_nuxt/layouts/default.09216168edc404a642dd.js",
    "revision": "64eec01dba5a04add84e5590d7f340dd"
  },
  {
    "url": "/_nuxt/manifest.7596ab7b8e0edf9c2c64.js",
    "revision": "1898392531a2ec13f8699ca82d3be416"
  },
  {
    "url": "/_nuxt/pages/aboutme.5f8ca3aaa6d158bcaf2a.js",
    "revision": "072e199606fc06fecb5bbe90b1d368b1"
  },
  {
    "url": "/_nuxt/pages/category/_category.278be3bb3f6741122e97.js",
    "revision": "fd1c327a95a04fc8286544dccfbd650a"
  },
  {
    "url": "/_nuxt/pages/index.7d6e099c9a6511084d7f.js",
    "revision": "791e9956c3d151389c5265c67ba42ec5"
  },
  {
    "url": "/_nuxt/pages/legal.dd4565d28c03b94259b4.js",
    "revision": "e22525ebbedd50e237aaf4be7dfcef8a"
  },
  {
    "url": "/_nuxt/pages/posts/_post.4de5270ec33b58abf2e1.js",
    "revision": "78433acf22911f2b8dc01ba9149c183c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

