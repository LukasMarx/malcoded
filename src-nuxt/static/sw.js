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
    "url": "/dist/app.a38334247df1731164fc.js",
    "revision": "dc73244fc7c916540db1cbaab81087aa"
  },
  {
    "url": "/dist/layouts_default.2968aefa739a22ad830c.js",
    "revision": "cb9df0ed0a941305dd9103ced991fa39"
  },
  {
    "url": "/dist/manifest.da6de3ec6abbf5756045.js",
    "revision": "7dc0e51e8224ccb4df2ee4c7c799ba3d"
  },
  {
    "url": "/dist/pages_aboutme.06e7303d726cc88285cc.js",
    "revision": "72e011447b4c917be8329069fc94e24c"
  },
  {
    "url": "/dist/pages_category__category.433dcec48895714c56da.js",
    "revision": "2971b94ae3d4e6518ee6f57ac2d122ce"
  },
  {
    "url": "/dist/pages_index.286fe08c5b1e8297feed.js",
    "revision": "9f7891444b1e191999b613b1b32a5e91"
  },
  {
    "url": "/dist/pages_legal.562997654ccfd55422fa.js",
    "revision": "e928caf29047cf5f21e3dadb81c7406e"
  },
  {
    "url": "/dist/pages_posts__post.1331dbc9a54fe87026d2.js",
    "revision": "bb2dd44bce1c5c11a0e47eb93830f4e2"
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

