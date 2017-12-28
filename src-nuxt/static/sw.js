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
    "url": "/_nuxt/layouts/default.ea4f50a20eb62ae6d1a6.js",
    "revision": "bbd177adfa53c47d253659eddcef7c25"
  },
  {
    "url": "/_nuxt/manifest.4f6f965e5faddc98cf90.js",
    "revision": "a478639b0987931484d19b3525f08f5f"
  },
  {
    "url": "/_nuxt/pages/aboutme.5f8ca3aaa6d158bcaf2a.js",
    "revision": "072e199606fc06fecb5bbe90b1d368b1"
  },
  {
    "url": "/_nuxt/pages/category/_category.0259c41323fc6a45fbce.js",
    "revision": "8607a9af3ab4fbc1975830bf896a5a26"
  },
  {
    "url": "/_nuxt/pages/index.262290524c90fcf58f4b.js",
    "revision": "16afab2b49edd3570fb0c55c224e5ac6"
  },
  {
    "url": "/_nuxt/pages/legal.dd4565d28c03b94259b4.js",
    "revision": "e22525ebbedd50e237aaf4be7dfcef8a"
  },
  {
    "url": "/_nuxt/pages/posts/_post.4e40d9982eb369b52266.js",
    "revision": "e25da5dbd62b9e68a03964bb2dc0054e"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

