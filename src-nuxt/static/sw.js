importScripts('/_nuxt/workbox.476439e0.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "malcoded.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.b865b035405094e9a293.js",
    "revision": "336e8429504f24ee38dc6224d69b4165"
  },
  {
    "url": "/_nuxt/common.45c5409e2ea56c367837.js",
    "revision": "701ac065006f0eb887f67710f3e358fd"
  },
  {
    "url": "/_nuxt/common.7aad08466a0affdf98008de359a281b9.css",
    "revision": "24a4af27c9068cb1f1d78851558b2a17"
  },
  {
    "url": "/_nuxt/layouts/default.b66f10eefde8766371ee.js",
    "revision": "f428f9c2ed3f678206877c049003c8bc"
  },
  {
    "url": "/_nuxt/manifest.f67c12feb620b0adba62.js",
    "revision": "18b2c49ebccbc86eaed4d91e28f40590"
  },
  {
    "url": "/_nuxt/pages/aboutme.668908ce0a0a3ab505ff.js",
    "revision": "0ad3152b0bcb38e6fd0d3fbfe5b22663"
  },
  {
    "url": "/_nuxt/pages/category/_category.35c13444fab19de1570e.js",
    "revision": "fb2ad6ec314194da4fbc941641bb3116"
  },
  {
    "url": "/_nuxt/pages/index.71eda35aa9da24ec0538.js",
    "revision": "d83816bb7e4474c2ab9d67d673231b69"
  },
  {
    "url": "/_nuxt/pages/legal.401aae61c97e15832ee3.js",
    "revision": "de9e236e1ec8d4d820be6390710d1703"
  },
  {
    "url": "/_nuxt/pages/posts/_post.d004926a2a1efb6430ee.js",
    "revision": "79c4c63425ffc02ce1cf254285f19bf5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

