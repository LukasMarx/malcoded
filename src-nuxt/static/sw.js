importScripts('/_nuxt/workbox.476439e0.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "malcoded.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.3174cf6128bb2492daba.js",
    "revision": "abd39b400c94977381e00265e36d7598"
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
    "url": "/_nuxt/manifest.5cacfbd4a3418fd43a77.js",
    "revision": "7497831ff7d72ebc6f0fd754a066ac97"
  },
  {
    "url": "/_nuxt/pages/aboutme.9d85b908afadb7646e80.js",
    "revision": "f10d5722fbd194a3f1e09b6a6158a362"
  },
  {
    "url": "/_nuxt/pages/category/_category.783f973fd7b981ec45ea.js",
    "revision": "01ae3c9058fa320d5c3e88c74f2f30ab"
  },
  {
    "url": "/_nuxt/pages/index.cda4d72ca1e233bf103b.js",
    "revision": "ea4c4bef49d9e67d140120d6e1ae9e74"
  },
  {
    "url": "/_nuxt/pages/legal.8b8467b11b602f1ba905.js",
    "revision": "8f72af81fd488089f589934e54abb5f5"
  },
  {
    "url": "/_nuxt/pages/posts/_post.10114ab9e1358c86e270.js",
    "revision": "94842a3c52055c9d60e41cfc645a333e"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

