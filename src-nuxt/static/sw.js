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
    "url": "/_nuxt/manifest.ebe3eaaa720ec9c5f806.js",
    "revision": "6b86840f63825c4bf4f6a101219f369e"
  },
  {
    "url": "/_nuxt/pages/aboutme.5f8ca3aaa6d158bcaf2a.js",
    "revision": "072e199606fc06fecb5bbe90b1d368b1"
  },
  {
    "url": "/_nuxt/pages/category/_category.c05bc368eb3ef5b553b6.js",
    "revision": "13a403b8e1ee7989b8d7b3523569ae40"
  },
  {
    "url": "/_nuxt/pages/index.ec2d11a84c4280f2d7e3.js",
    "revision": "7fdacc0c4e08821b59489881654dd249"
  },
  {
    "url": "/_nuxt/pages/legal.dd4565d28c03b94259b4.js",
    "revision": "e22525ebbedd50e237aaf4be7dfcef8a"
  },
  {
    "url": "/_nuxt/pages/posts/_post.8bbf74a20e10b6f12392.js",
    "revision": "39d029d20a81b9cc0db7e2d5b2ba5f7a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

