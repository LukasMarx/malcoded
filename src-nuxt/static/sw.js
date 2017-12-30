importScripts('/_nuxt/workbox.476439e0.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "malcoded.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.bc64d76b1e2df69e7487.js",
    "revision": "796237c7ab49070a03a738b762d5dcc7"
  },
  {
    "url": "/_nuxt/common.57999567817b74c5ea50.js",
    "revision": "b27746ee8c16d9877f3a6c43b5b3be08"
  },
  {
    "url": "/_nuxt/common.7aad08466a0affdf98008de359a281b9.css",
    "revision": "24a4af27c9068cb1f1d78851558b2a17"
  },
  {
    "url": "/_nuxt/layouts/default.1e16ed5e1e91f34d2e33.js",
    "revision": "e37aa64446b4665b6186ae96a4a69adf"
  },
  {
    "url": "/_nuxt/manifest.d45f0bd03b0d31c4d09e.js",
    "revision": "0429e34dc86f7644a075951fac46b4b9"
  },
  {
    "url": "/_nuxt/pages/aboutme.9d85b908afadb7646e80.js",
    "revision": "f10d5722fbd194a3f1e09b6a6158a362"
  },
  {
    "url": "/_nuxt/pages/category/_category.d6d5806040180975bbbb.js",
    "revision": "2ac701652b7e5dfe6824a304338d8c1f"
  },
  {
    "url": "/_nuxt/pages/index.d1292a722fac18aa1509.js",
    "revision": "af13e6f001d389d5ddc11c077dc80e43"
  },
  {
    "url": "/_nuxt/pages/legal.8b8467b11b602f1ba905.js",
    "revision": "8f72af81fd488089f589934e54abb5f5"
  },
  {
    "url": "/_nuxt/pages/posts/_post.6348c9b9bcb458700d70.js",
    "revision": "87952b3e8ec15005771e307cf3b664af"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

