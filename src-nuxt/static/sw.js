importScripts('/_nuxt/workbox.476439e0.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "malcoded.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.79587a349390c51334df.js",
    "revision": "3f16ea45d8f3e0dbdfd2a5af3f0091ef"
  },
  {
    "url": "/_nuxt/common.0406683f37b1cad608a8.js",
    "revision": "4f67d6c2c0269deb866b04db6685a007"
  },
  {
    "url": "/_nuxt/common.7aad08466a0affdf98008de359a281b9.css",
    "revision": "24a4af27c9068cb1f1d78851558b2a17"
  },
  {
    "url": "/_nuxt/layouts/default.7f2ae26a0d55fa28303a.js",
    "revision": "9d40dc712652067ac1b44f74a51a9942"
  },
  {
    "url": "/_nuxt/manifest.1d29ae6675463df8a253.js",
    "revision": "196e4a4843b6064805812141211d4501"
  },
  {
    "url": "/_nuxt/pages/aboutme.3f5657bb1f6e4167850d.js",
    "revision": "0264f9bded0c2b59417ee03e7c232524"
  },
  {
    "url": "/_nuxt/pages/category/_category.7df3603c5784d1c29ba9.js",
    "revision": "814ec13d38d3ccc599bfbb7c03afc887"
  },
  {
    "url": "/_nuxt/pages/index.829e1334ee7609db77ea.js",
    "revision": "86f5277834e1b0399a638b76549cacf5"
  },
  {
    "url": "/_nuxt/pages/legal.b4b6135f2e3d9bb00ecc.js",
    "revision": "ff80ed21ab4822359ace31cbd276578a"
  },
  {
    "url": "/_nuxt/pages/posts/_post.be6ac4e9daed053e5f8d.js",
    "revision": "396d97981624acd176d5da8f0efc78f0"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

