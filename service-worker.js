/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6d386ff2338d81fbde313dbc5c33048a"
  },
  {
    "url": "assets/css/0.styles.3aeb97d6.css",
    "revision": "ea4f17a4a1261b0797392c24412dfcc2"
  },
  {
    "url": "assets/image/logo.png",
    "revision": "b383ec6a9d72e346ad176c82d09aedf6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66857b1d.js",
    "revision": "437025f9202d3e3c22edee2ade16d72b"
  },
  {
    "url": "assets/js/2.ed4d223f.js",
    "revision": "42af62fd55d5f2c3be5cb04070212386"
  },
  {
    "url": "assets/js/3.ae9e1bdf.js",
    "revision": "eb4efd9e2ebaf8ae53e9bd85b7396d5b"
  },
  {
    "url": "assets/js/4.966e1942.js",
    "revision": "d0fb9e6ac54c711bc1c1a75e9d5587a0"
  },
  {
    "url": "assets/js/5.973bcde4.js",
    "revision": "3ba415398165db9b94e2ea72798d3c1b"
  },
  {
    "url": "assets/js/6.b3cff707.js",
    "revision": "4e8e58f2870439dcb0bab4268a2f63d2"
  },
  {
    "url": "assets/js/7.1368ab31.js",
    "revision": "4b4e98d7387b345a755b362a556a756c"
  },
  {
    "url": "assets/js/8.8186445d.js",
    "revision": "a9dbdf907dff08ba06b8173cfaf3e0b7"
  },
  {
    "url": "assets/js/9.ff883202.js",
    "revision": "a7fbfcc62127695b160e31031143defe"
  },
  {
    "url": "assets/js/app.bfa9a0f3.js",
    "revision": "0f65b6431c0f9dde71a39198eb42f3db"
  },
  {
    "url": "en-us/index.html",
    "revision": "2bf7000f6bf4f4bc3676bf45c4db2f53"
  },
  {
    "url": "index.html",
    "revision": "42225910c9e165bba161ff1fafc12cfd"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "9712304d64da7dbdcfe6579fe4be9fa3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})