importScripts('/_nuxt/workbox.476439e0.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "malcoded.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.8abcf4928d59dc65a54f.js",
    "revision": "11ef0b99fa17592c57a14e21ce7fd62b"
  },
  {
    "url": "/_nuxt/common.6854f1dcba5c85d0d72ac5b57d097799.css",
    "revision": "d8cd8dd35b88323ddaeed36ef9176ba4"
  },
  {
    "url": "/_nuxt/common.e80fa29222a460979949.js",
    "revision": "432867434157e870452cd5eb80d89939"
  },
  {
    "url": "/_nuxt/common.edd977c9e8332a0e283e5d7ef0b958a7.css",
    "revision": "7ee97bbb3229f6b2e9c91f11df51fe49"
  },
  {
    "url": "/_nuxt/layouts/default.1482e26ea29d56f97f03.js",
    "revision": "c25fe88a9f6133413de46c79eba6e135"
  },
  {
    "url": "/_nuxt/manifest.213cd3587ed2a5d4b115.js",
    "revision": "10bc40839e69dc3d74deb0c08c3302c0"
  },
  {
    "url": "/_nuxt/pages/aboutme.5f8ca3aaa6d158bcaf2a.js",
    "revision": "072e199606fc06fecb5bbe90b1d368b1"
  },
  {
    "url": "/_nuxt/pages/category/_category.e43a51246da72f5ab193.js",
    "revision": "8bfc23ef683ec9619bee80feecf40dcb"
  },
  {
    "url": "/_nuxt/pages/index.fa29d337e4f7e5c79ab3.js",
    "revision": "aadc064ad16cd2815e021ac94d1b6dcc"
  },
  {
    "url": "/_nuxt/pages/legal.6a5efb1c5a38fae04616.js",
    "revision": "744240318f75c78bff327eab09d3a2ac"
  },
  {
    "url": "/_nuxt/pages/posts/_post.b499dfbd5ff2843db3f6.js",
    "revision": "8da4b8a45ec8129bd381dca70d55d296"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://assets.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://api.malcoded.com/.*'), workboxSW.strategies.networkFirst({}), 'GET')

