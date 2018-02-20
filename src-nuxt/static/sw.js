importScripts('/dist/workbox.476439e0.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "malcoded.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/dist/app.08638ff8dd7168ad701b.js",
    "revision": "3a92101b42be149038a275ef801c11ca"
  },
  {
    "url": "/dist/common.57999567817b74c5ea50.js",
    "revision": "b27746ee8c16d9877f3a6c43b5b3be08"
  },
  {
    "url": "/dist/common.841ef176885920264f53435538513eec.css",
    "revision": "3398d3b354bc91a04c57f92c3513b253"
  },
  {
    "url": "/dist/layouts/default.8043fa0a758321b04dbc.js",
    "revision": "b621bec1e38db7d8fbadc4d7a8c8daed"
  },
  {
    "url": "/dist/manifest.21079122934063956f25.js",
    "revision": "bf726215b7517cd129fe1207a8d439cc"
  },
  {
    "url": "/dist/pages/aboutme.9d85b908afadb7646e80.js",
    "revision": "f10d5722fbd194a3f1e09b6a6158a362"
  },
  {
    "url": "/dist/pages/category/_category.989e02909947cc7e9a1c.js",
    "revision": "8096b6d038526811a90df1598e8e552d"
  },
  {
    "url": "/dist/pages/index.b1cf243d9086b2e11450.js",
    "revision": "b41a2a27796baa79dbaebb0be33ae97a"
  },
  {
    "url": "/dist/pages/legal.8b8467b11b602f1ba905.js",
    "revision": "8f72af81fd488089f589934e54abb5f5"
  },
  {
    "url": "/dist/pages/posts/_post.4a2e2969ab8640ead860.js",
    "revision": "c8ab44558a2d2f9ea89b5e8e770cd738"
  }
])


workboxSW.router.registerRoute(new RegExp('/dist/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

