importScripts('/dist/workbox.476439e0.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "malcoded.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/dist/app.841ef176885920264f53435538513eec.css",
    "revision": "841ef176885920264f53435538513eec"
  },
  {
    "url": "/dist/app.84d35dd97ac0b25f9206.js",
    "revision": "68e910959e93eead6eade2752b64ba13"
  },
  {
    "url": "/dist/layouts_default.2968aefa739a22ad830c.js",
    "revision": "cb9df0ed0a941305dd9103ced991fa39"
  },
  {
    "url": "/dist/manifest.c7af2c4420f63f8d522c.js",
    "revision": "a81ac3784b8450931095cc1ce03d3074"
  },
  {
    "url": "/dist/pages_aboutme.06e7303d726cc88285cc.js",
    "revision": "72e011447b4c917be8329069fc94e24c"
  },
  {
    "url": "/dist/pages_category__category.18514321b9926efe3ddc.js",
    "revision": "3d03e4ccd05af6f127fb6162c15d1cf9"
  },
  {
    "url": "/dist/pages_index.07b5590282eb9a318aab.js",
    "revision": "23b17cd6cbc21228ff98270568227e30"
  },
  {
    "url": "/dist/pages_legal.562997654ccfd55422fa.js",
    "revision": "e928caf29047cf5f21e3dadb81c7406e"
  },
  {
    "url": "/dist/pages_posts__post.6c02abbeb6d5559ead5e.js",
    "revision": "b1eddeec47d256c39ede9178d9a024fb"
  },
  {
    "url": "/dist/vendor.dc5c2b7b994fc83e21d0.js",
    "revision": "4846a01cf23baac95f44561803800690"
  }
])


workboxSW.router.registerRoute(new RegExp('/dist/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

