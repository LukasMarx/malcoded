importScripts('/_nuxt/workbox.476439e0.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "malcoded.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.7e148f4af4a2c02cc2be.js",
    "revision": "c3cdeefddb1f39f2bac18e90e6727529"
  },
  {
    "url": "/_nuxt/common.57999567817b74c5ea50.js",
    "revision": "b27746ee8c16d9877f3a6c43b5b3be08"
  },
  {
    "url": "/_nuxt/common.841ef176885920264f53435538513eec.css",
    "revision": "3398d3b354bc91a04c57f92c3513b253"
  },
  {
    "url": "/_nuxt/layouts/default.8043fa0a758321b04dbc.js",
    "revision": "b621bec1e38db7d8fbadc4d7a8c8daed"
  },
  {
    "url": "/_nuxt/manifest.2882cd64ac492dba540e.js",
    "revision": "ca975a33ef5e9e34030765656e070f66"
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
    "url": "/_nuxt/pages/index.e6f8fd87ad421c4910a9.js",
    "revision": "d113ddceb24e2a6f23ae8cdf87622590"
  },
  {
    "url": "/_nuxt/pages/legal.8b8467b11b602f1ba905.js",
    "revision": "8f72af81fd488089f589934e54abb5f5"
  },
  {
    "url": "/_nuxt/pages/posts/_post.bcc315da2053bb7f2854.js",
    "revision": "9f0830fdd4bb2d309c42dd457bebb1aa"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

