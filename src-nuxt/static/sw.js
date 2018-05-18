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
    "url": "/dist/app.90482770a33cdce3803b1a624e3bfb86.css",
    "revision": "90482770a33cdce3803b1a624e3bfb86"
  },
  {
    "url": "/dist/layouts_default.451d152b6e5c9d0ce3a6.js",
    "revision": "276064a2fbabfab508317030df4bf556"
  },
  {
    "url": "/dist/manifest.fe80c44d9c09fe9f2ba7.js",
    "revision": "185cd869faa6cb54204bbc79b70119c8"
  },
  {
    "url": "/dist/pages_aboutme.58481cce6d686fe0bc5f.js",
    "revision": "33ee11cc59c51f9a895d946b4b72c55f"
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
    "url": "/dist/pages_legal.5e8e393e803da8dc6137.js",
    "revision": "9dc2649567c84b812ad7037f72d0dbee"
  },
  {
    "url": "/dist/pages_posts__post.ddec05f5c15b62e8c9b3.js",
    "revision": "bf9b6b033f07b1059ea4b9b4e0fa8c2b"
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

