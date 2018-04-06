importScripts('/dist/workbox.476439e0.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "malcoded.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/dist/app.2506ae895ea296ffa1de.js",
    "revision": "db697fbb30c01ebae835a9241025510b"
  },
  {
    "url": "/dist/app.c3b1211ca03346a7f185fb7dbd03112a.css",
    "revision": "c3b1211ca03346a7f185fb7dbd03112a"
  },
  {
    "url": "/dist/layouts_default.88145e16a89bcdce19ca.js",
    "revision": "0f7ae522fbfb43a1cafb0731abe22ff7"
  },
  {
    "url": "/dist/manifest.5a02d6176d664f0aa031.js",
    "revision": "ce93271a48fef088efdcd0903fab8ecf"
  },
  {
    "url": "/dist/pages_aboutme.afbe438ef053140b2787.js",
    "revision": "2c1effadc7ef89217b99bebeafd7ce78"
  },
  {
    "url": "/dist/pages_category__category.80c3d9d18e87f486de24.js",
    "revision": "8ccc9180bacb8a97c68858f0966ff540"
  },
  {
    "url": "/dist/pages_index.cccae81eb13f8c899576.js",
    "revision": "f3e85574875383459202c275873d9763"
  },
  {
    "url": "/dist/pages_legal.789229c96242a0ad2fa0.js",
    "revision": "36685c8f43aab386a86a5d74110fca93"
  },
  {
    "url": "/dist/pages_posts__post.f6d8a21656b2ad265853.js",
    "revision": "7105b2fb99247f0b0a474899d3fa80fc"
  },
  {
    "url": "/dist/vendor.8079cb6e83ef1342348e.js",
    "revision": "9717755f1910318743475f740c341b84"
  },
  {
    "url": "/dist/vendor.a8dc81343336b6986b7592f96f5c9b44.css",
    "revision": "a8dc81343336b6986b7592f96f5c9b44"
  }
])


workboxSW.router.registerRoute(new RegExp('/dist/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

