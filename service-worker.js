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
    "revision": "e0b727b699d9e34ef89afa9002526fab"
  },
  {
    "url": "about/index.html",
    "revision": "a1d9200274dfce15405c754406eddd85"
  },
  {
    "url": "assets/css/0.styles.3ba4a4e2.css",
    "revision": "7e4d981aafba37fb2dd4f7c21360b38c"
  },
  {
    "url": "assets/img/block.e765478b.jpg",
    "revision": "e765478b744e5b2ee3f26bb147efa8c0"
  },
  {
    "url": "assets/img/inline-block.421dd8f6.jpg",
    "revision": "421dd8f6c23679cc03cb3384f1cb0069"
  },
  {
    "url": "assets/img/inline.6249d4e0.jpg",
    "revision": "6249d4e0d461800f9f3b8479d1e41da1"
  },
  {
    "url": "assets/img/quotation.648877a7.jpg",
    "revision": "648877a730c9ed465cb8d7d6713698af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/shorthand.59cf8c80.jpg",
    "revision": "59cf8c807e9b87e6255101a4eb45a03a"
  },
  {
    "url": "assets/img/typography.8220d65d.jpg",
    "revision": "8220d65db898478052517a4a052f5635"
  },
  {
    "url": "assets/js/10.1d93dc4f.js",
    "revision": "4bcf34a6391c936285448ff2edba40c0"
  },
  {
    "url": "assets/js/11.520194f9.js",
    "revision": "2fbc12906cfc849434ce6db6747ad94f"
  },
  {
    "url": "assets/js/12.43605eeb.js",
    "revision": "47c09e8514ec655cfe328695e7d519d8"
  },
  {
    "url": "assets/js/13.36a997fa.js",
    "revision": "721d3dabf07e397699f8db877ed22b92"
  },
  {
    "url": "assets/js/14.8d20d136.js",
    "revision": "fca0309ca47fa962e02a9dfc725bbd58"
  },
  {
    "url": "assets/js/15.8900bf89.js",
    "revision": "4fc247ecf7e6951a87f90c24b9ee233f"
  },
  {
    "url": "assets/js/16.223af94e.js",
    "revision": "fe083f67ddb84282167cca63a439e9ad"
  },
  {
    "url": "assets/js/17.117759ed.js",
    "revision": "241c1ebe3ea38b7191b3b20d3e574ffd"
  },
  {
    "url": "assets/js/18.29e76d5d.js",
    "revision": "81eff2cf9c14c17483c7f21127c90c22"
  },
  {
    "url": "assets/js/19.040aaff4.js",
    "revision": "e630c6b952930764bb09d33a19328908"
  },
  {
    "url": "assets/js/2.c181ef0e.js",
    "revision": "eea833fed1d52de5887b09e351f9fbbc"
  },
  {
    "url": "assets/js/20.9c1e08be.js",
    "revision": "94dcefff0d92e424e0fa855b5260f389"
  },
  {
    "url": "assets/js/21.ccbb08ed.js",
    "revision": "cfa5f8a598a3f36ddd593e828a9ef251"
  },
  {
    "url": "assets/js/22.24791f3c.js",
    "revision": "a4a44888fd50b9404b998b0c6d6c5eb6"
  },
  {
    "url": "assets/js/23.743c558d.js",
    "revision": "998ec1088ff5ad03c4ef0904701819e1"
  },
  {
    "url": "assets/js/24.3f04b84b.js",
    "revision": "5366d29d4b49d4418ef8d4eaa46a76f4"
  },
  {
    "url": "assets/js/25.7d93d959.js",
    "revision": "1ed7927fc111e93ae947f929cd41ca8c"
  },
  {
    "url": "assets/js/26.aae11ed6.js",
    "revision": "94787d6a95481764b644d74706251da8"
  },
  {
    "url": "assets/js/27.e2f90b8a.js",
    "revision": "271c10558310ef5ba94120de0b3c86b4"
  },
  {
    "url": "assets/js/28.5fbd213f.js",
    "revision": "31d2328bf7c516067c9d8bf6c45d555b"
  },
  {
    "url": "assets/js/29.bf8f24eb.js",
    "revision": "75c4c4b42415e437df727a15ab8e2c67"
  },
  {
    "url": "assets/js/3.7f0dde34.js",
    "revision": "b468e0a692feb156154b2d4890c74bff"
  },
  {
    "url": "assets/js/30.db3d9073.js",
    "revision": "d53eef7fa89e7675ed8b64df4b8d1cd7"
  },
  {
    "url": "assets/js/31.553ca8f6.js",
    "revision": "f68ecced2fe2706863529ddeba74e5bd"
  },
  {
    "url": "assets/js/32.afb5489d.js",
    "revision": "71eb94295cdc548f43300edb2070ed07"
  },
  {
    "url": "assets/js/33.04bd0062.js",
    "revision": "a7bb328441918f6a7ff92c494d15a068"
  },
  {
    "url": "assets/js/34.1cf95759.js",
    "revision": "dc28208ed64958fc10b2bfc61d55b721"
  },
  {
    "url": "assets/js/35.e885b9a0.js",
    "revision": "ce4a1774f4b83bb431ab6be1c8660ff0"
  },
  {
    "url": "assets/js/36.dbb2d25e.js",
    "revision": "8dca542ed2bf1cefb2befbd68a4f5243"
  },
  {
    "url": "assets/js/37.0aac68ec.js",
    "revision": "ff0f030d04d43e812fb5dac6170c8c53"
  },
  {
    "url": "assets/js/38.bb015650.js",
    "revision": "fd312797ef1328d07fe91ecbcb675d05"
  },
  {
    "url": "assets/js/39.10166429.js",
    "revision": "ba508f897511f0559bf7dfccb7a370ee"
  },
  {
    "url": "assets/js/4.c13a4f9c.js",
    "revision": "96617659230416ab476b0bd60e4761b5"
  },
  {
    "url": "assets/js/40.0fe59a55.js",
    "revision": "1781736d4b839fa1f20dcf543fd1f2f3"
  },
  {
    "url": "assets/js/41.3c541323.js",
    "revision": "9a04bc5c48d5ead4c0ae896726273412"
  },
  {
    "url": "assets/js/42.9804291f.js",
    "revision": "55d34b2dc96910d5be3066b292fabc1a"
  },
  {
    "url": "assets/js/43.5046f2e2.js",
    "revision": "b0c7a7ad370a806a1246a8015d0371f4"
  },
  {
    "url": "assets/js/44.05d0554c.js",
    "revision": "d758b421b1a6274ac45c03c192335d13"
  },
  {
    "url": "assets/js/45.07550eaa.js",
    "revision": "333e12e145977363b545c06f27373daf"
  },
  {
    "url": "assets/js/46.fec23a95.js",
    "revision": "b1bca3327223ff4e753dd1b83997a2ec"
  },
  {
    "url": "assets/js/47.4a1bfe85.js",
    "revision": "08a40da7d6f27bcd09bc88367cecb399"
  },
  {
    "url": "assets/js/48.675c72a8.js",
    "revision": "851bbc8afcd5a5eb55dc783de560d26f"
  },
  {
    "url": "assets/js/5.82097aca.js",
    "revision": "dae49a80c26e3d430c9bcf7124a97fcb"
  },
  {
    "url": "assets/js/6.52615dea.js",
    "revision": "c83484781be4404a69f680d3fe91211c"
  },
  {
    "url": "assets/js/7.51eeeea2.js",
    "revision": "1a1d0e2662711ff91f5924c4a1176a70"
  },
  {
    "url": "assets/js/8.e2ea41f3.js",
    "revision": "4b253a5b58833515ae31c12fd827f88a"
  },
  {
    "url": "assets/js/9.100b9831.js",
    "revision": "106eeaa13b79f110e2ef2f721122d4f0"
  },
  {
    "url": "assets/js/app.386b0505.js",
    "revision": "0a00550a9245db9bed08f14f7912acc9"
  },
  {
    "url": "css/basic.html",
    "revision": "2e29099e4cc8ece088b48386ade66090"
  },
  {
    "url": "css/bfc_bc.html",
    "revision": "a25fb45b6151736b45370b0cabbccbf0"
  },
  {
    "url": "css/boxmodel.html",
    "revision": "1461aa4ceb257bf334655be855122d75"
  },
  {
    "url": "css/browser.html",
    "revision": "e7963576980a869ea9db0ac9b6e5f100"
  },
  {
    "url": "css/em_rem.html",
    "revision": "a730324af1da06b2400672c9bb390ad3"
  },
  {
    "url": "css/fix_float.html",
    "revision": "b62b933081fcfbe8a174f8a9f0bb8b78"
  },
  {
    "url": "css/interaction.html",
    "revision": "8adaf0223f8f4a59d047e48f4eefa664"
  },
  {
    "url": "css/layout.html",
    "revision": "2b5e6947be586f9ce95edebe4c8cabbc"
  },
  {
    "url": "css/lint.html",
    "revision": "d5f78e7d73508fec34e5eae6360db86d"
  },
  {
    "url": "css/media.html",
    "revision": "1b88cc22f91d635ff0f961e8c0ab2f4b"
  },
  {
    "url": "css/reset_normalize.html",
    "revision": "2433963804638b846665f9882a99f100"
  },
  {
    "url": "css/state.html",
    "revision": "57fab36bc45f3f40ddc2239650690136"
  },
  {
    "url": "css/typography.html",
    "revision": "784475260d6eaf7256faab93a52c9984"
  },
  {
    "url": "css/what-is-css.html",
    "revision": "ccd0b1b8c2c2d64c233698cb5b7d024a"
  },
  {
    "url": "guide.html",
    "revision": "92d8a1f23747d98d471a523b893920ec"
  },
  {
    "url": "html/anchor.html",
    "revision": "162e59e12334b4583d5496bba327d186"
  },
  {
    "url": "html/description-list.html",
    "revision": "3aa2b84a5277a8e325c6ad2db9ed68fd"
  },
  {
    "url": "html/div-span.html",
    "revision": "602f6498d71199bd419dafe54da990a1"
  },
  {
    "url": "html/doctype.html",
    "revision": "0ed5268c4359b04ba4f9f543112baccc"
  },
  {
    "url": "html/emphasis.html",
    "revision": "ca53fc6e194a619a5f29aba30a332d03"
  },
  {
    "url": "html/etc.html",
    "revision": "a2cc7e5dc34a153b20aca975fbf89f1a"
  },
  {
    "url": "html/form.html",
    "revision": "c1e275d1b07eef22c57fb169165e5184"
  },
  {
    "url": "html/generic-section.html",
    "revision": "3deb45b7d7f8b14af125f73b20bdb924"
  },
  {
    "url": "html/graph.html",
    "revision": "0ca56cd7f39f5fed65f2ce8456ede337"
  },
  {
    "url": "html/headings-paragraph.html",
    "revision": "4ee0bd9c11f12ebf8a75d99b548f8b33"
  },
  {
    "url": "html/img.html",
    "revision": "ae6a71e82fef2b6432f3eb875db5b619"
  },
  {
    "url": "html/media.html",
    "revision": "419b025fbf138c6bc213f47ac91eb93f"
  },
  {
    "url": "html/meta.html",
    "revision": "91624dd947b250e07d26dca0ded2d41c"
  },
  {
    "url": "html/quotations.html",
    "revision": "ec122726226beb245ffa6b78fb526397"
  },
  {
    "url": "html/style-script.html",
    "revision": "f17f6adf0382698690818871f7e114f0"
  },
  {
    "url": "html/tag-anatomy.html",
    "revision": "820f6326f70aeee81775b68e2cf64eb4"
  },
  {
    "url": "html/unorder-order-list.html",
    "revision": "7f2b541de2723b7626f500e9f4f11050"
  },
  {
    "url": "html/what-is-html.html",
    "revision": "e7b7788e5ce17cbcd1d9c6066f94b4b7"
  },
  {
    "url": "images/android-chrome-192x192.png",
    "revision": "6fe090b50ce77ae2a4033ab7dc42adee"
  },
  {
    "url": "images/android-chrome-256x256.png",
    "revision": "4f2525f2a07d53ddfff7a64281d761a6"
  },
  {
    "url": "images/apple-touch-icon.png",
    "revision": "34274f37ccbf09bec99e178c036a24f2"
  },
  {
    "url": "images/example/block.jpg",
    "revision": "e765478b744e5b2ee3f26bb147efa8c0"
  },
  {
    "url": "images/example/dl.jpg",
    "revision": "6e13232a266179f3a686ba98302d3920"
  },
  {
    "url": "images/example/emphasis.jpg",
    "revision": "30c6bbed6d56242490b4a37de1fcabc5"
  },
  {
    "url": "images/example/ex-h-p.png",
    "revision": "b5324265416bb6e84b93f276624dfce8"
  },
  {
    "url": "images/example/inline-block.jpg",
    "revision": "421dd8f6c23679cc03cb3384f1cb0069"
  },
  {
    "url": "images/example/inline.jpg",
    "revision": "6249d4e0d461800f9f3b8479d1e41da1"
  },
  {
    "url": "images/example/link.jpg",
    "revision": "8c31abe123a641a9d00ca2efa2827235"
  },
  {
    "url": "images/example/list.jpg",
    "revision": "c7404037a9298cd5e960673e69fc7b27"
  },
  {
    "url": "images/example/quotation.jpg",
    "revision": "648877a730c9ed465cb8d7d6713698af"
  },
  {
    "url": "images/example/shorthand.jpg",
    "revision": "59cf8c807e9b87e6255101a4eb45a03a"
  },
  {
    "url": "images/example/typography.jpg",
    "revision": "8220d65db898478052517a4a052f5635"
  },
  {
    "url": "images/favicon-16x16.png",
    "revision": "b7f100712d5525246b25dbe01b15b2a1"
  },
  {
    "url": "images/favicon-32x32.png",
    "revision": "093d45e4219d93fe2e447d4bd8a99477"
  },
  {
    "url": "images/mstile-150x150.png",
    "revision": "7b4cc6510cd7c73d5fb1c3788d142ca3"
  },
  {
    "url": "images/safari-pinned-tab.svg",
    "revision": "eb2983654fdf134348f045d1f70c4c35"
  },
  {
    "url": "index.html",
    "revision": "9999d623ce534a72c1ed053bd6ffa8c4"
  },
  {
    "url": "semantic/aria-attribute.html",
    "revision": "534cf6756703d537b574e92720ab5f4c"
  },
  {
    "url": "semantic/background-image.html",
    "revision": "02d8a11526435163b4d19554bc5acd2e"
  },
  {
    "url": "semantic/data-attribute.html",
    "revision": "441761cdee81a502484958a7ed19297d"
  },
  {
    "url": "semantic/multiple-h1.html",
    "revision": "9d29c44119bb425ca7cf504f493fce09"
  },
  {
    "url": "semantic/title-tip.html",
    "revision": "c39a9f0dc5d48ca71428cdd9f34a8353"
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
