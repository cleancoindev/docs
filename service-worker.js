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
    "url": "0xcert-framework.svg",
    "revision": "82d69102af8178f89d620d53a8dd46e1"
  },
  {
    "url": "0xcert-logo.svg",
    "revision": "780242d9a166ea4703aa89253b275583"
  },
  {
    "url": "404.html",
    "revision": "22c990e3dd6e2e7f1dba594842b635ef"
  },
  {
    "url": "api-icon.svg",
    "revision": "df67661118113e7c8d05ffbb9cd882e1"
  },
  {
    "url": "api/api/certification.html",
    "revision": "8be1d1d205e42bab8fb8cc9b02564fc8"
  },
  {
    "url": "api/api/client.html",
    "revision": "4ef1a95740ad43915bb7c89f7b951da8"
  },
  {
    "url": "api/api/rest.html",
    "revision": "6ec69b886e5e55142e8e19cb02121359"
  },
  {
    "url": "api/guides/additional-scenarios.html",
    "revision": "f9d6cfe032d68307ff8c0a0c18fa197e"
  },
  {
    "url": "api/guides/asset-ledger-deployment.html",
    "revision": "6c7c806a649accc318b39b52056c482a"
  },
  {
    "url": "api/guides/atomic-operations.html",
    "revision": "a4bd75f022ec90ff122880b8c50c7c36"
  },
  {
    "url": "api/guides/certification.html",
    "revision": "28abcac4d1d219b4a86dc0f2f6c02be8"
  },
  {
    "url": "api/guides/dashboard.html",
    "revision": "2c2ffcf7dca1593dfb5a432c80732c33"
  },
  {
    "url": "api/guides/destroy-asset.html",
    "revision": "784dcb72f92a7d0c99f5e4ec54c8d225"
  },
  {
    "url": "api/guides/fungible-values.html",
    "revision": "48e657ff91bec66f3ca0e1313cc4bced"
  },
  {
    "url": "api/guides/get-credits.html",
    "revision": "878c1a8d769d77d1305474fd45f5ad90"
  },
  {
    "url": "api/guides/installation.html",
    "revision": "f406ac2b22a1a59151ed88e117a9d838"
  },
  {
    "url": "api/guides/issue-asset.html",
    "revision": "dbb34fa25109e94aaafcf149e094a0d5"
  },
  {
    "url": "api/guides/non-fungible-assets.html",
    "revision": "046af56dc99d2313e4031152ab20282b"
  },
  {
    "url": "api/guides/providers.html",
    "revision": "a878378683b85f18c5170b42e94af940"
  },
  {
    "url": "api/guides/set-asset-ledger-abilities.html",
    "revision": "138d01c6b8976b3373464aec200fa3cd"
  },
  {
    "url": "api/guides/transfer-asset.html",
    "revision": "2e95e6635e139fa8aea263dfe13d6927"
  },
  {
    "url": "api/guides/transfer-value.html",
    "revision": "67e68f82268428abc572276e6e94ee58"
  },
  {
    "url": "api/guides/update-asset-imprint.html",
    "revision": "5192e79d32ba515d903a5adb459184bf"
  },
  {
    "url": "api/guides/use-cases.html",
    "revision": "1dde1c21f9165e9fa5d11daad214e6f2"
  },
  {
    "url": "api/index.html",
    "revision": "adc91a148547dfc401f4b16efce9a8f9"
  },
  {
    "url": "api/schemas/86-base-asset-schema.html",
    "revision": "ad48e3f001734e5f21f96b4cd5ddb951"
  },
  {
    "url": "api/schemas/87-asset-evidence-schema.html",
    "revision": "ef60e655c1c27a54db109e0709781c08"
  },
  {
    "url": "api/schemas/88-crypto-collectible-schema.html",
    "revision": "2b033d4dfe841dead5f44a9574429caf"
  },
  {
    "url": "api/schemas/xcert-schema.html",
    "revision": "a0656366ec0aa1f03c5e5615acb8c551"
  },
  {
    "url": "assets/css/0.styles.97a5db50.css",
    "revision": "d980e7241d63ce13723cf3f79a901889"
  },
  {
    "url": "assets/img/atomic-swap.33e9e009.svg",
    "revision": "33e9e009fd08bc8d33037e7612c718bf"
  },
  {
    "url": "assets/img/block_balance.76df9697.svg",
    "revision": "76df969771b008e4c91ecba8efc7c865"
  },
  {
    "url": "assets/img/certification.31c7b71d.svg",
    "revision": "31c7b71d4c8fd6a766c108d2ff494226"
  },
  {
    "url": "assets/img/conflicts-explained.c37f02a2.svg",
    "revision": "c37f02a29cb1699937146a8acb6fdce4"
  },
  {
    "url": "assets/img/dashboard.16371e3e.svg",
    "revision": "16371e3ebd00b65330840c8ac581ed64"
  },
  {
    "url": "assets/img/deposit-options.5d6d1f98.png",
    "revision": "5d6d1f98ad1757646a2d42b0db7cdbbf"
  },
  {
    "url": "assets/img/exposed-part.5e486307.svg",
    "revision": "5e48630774daf3592db57d1454aa3b08"
  },
  {
    "url": "assets/img/login.73da2ce5.svg",
    "revision": "73da2ce51e6a0a75f6e8b1f1823b07fc"
  },
  {
    "url": "assets/img/no-conflicting-proogs.a3213736.svg",
    "revision": "a32137363710f3ee693cbd9c072ae3a4"
  },
  {
    "url": "assets/img/notarized.e62f8d82.svg",
    "revision": "e62f8d828e030c82db405054e14d705f"
  },
  {
    "url": "assets/img/part-proved.c1187f5f.svg",
    "revision": "c1187f5f1951d21e14a64ee515e22217"
  },
  {
    "url": "assets/img/request-details.cabc2414.svg",
    "revision": "cabc24145895fe13025c229bddea9cca"
  },
  {
    "url": "assets/img/scheme_1.4b756bc1.svg",
    "revision": "4b756bc1575b7bdb18b62f706659a2a9"
  },
  {
    "url": "assets/img/scheme_1.4e83c37f.svg",
    "revision": "4e83c37fa32170bfa902024b974ce4a4"
  },
  {
    "url": "assets/img/scheme_2.1806743d.svg",
    "revision": "1806743d3971430f0c0c5bd6b2641fd2"
  },
  {
    "url": "assets/img/scheme_3.6fecffe4.svg",
    "revision": "6fecffe4ee3161e49c44902379f6691f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zero-info.eab30f82.svg",
    "revision": "eab30f82996642dc34cfefcc90e61222"
  },
  {
    "url": "assets/js/10.d9cb8a52.js",
    "revision": "048d4d48a11ee2743b4e94b7e3e0aca7"
  },
  {
    "url": "assets/js/11.6f1b0b1d.js",
    "revision": "cdd5ede040482b111e05522f1ebb5ac0"
  },
  {
    "url": "assets/js/12.813dd159.js",
    "revision": "d44bf14a23febca468d3087dce8783ef"
  },
  {
    "url": "assets/js/13.3e1f5ff1.js",
    "revision": "4aeaeede48d0d342002bf0386a3734ab"
  },
  {
    "url": "assets/js/14.4c758c0f.js",
    "revision": "a127186791800edb2ad9c2cd86482dfa"
  },
  {
    "url": "assets/js/15.ff735b42.js",
    "revision": "3cf50b69e29d4d67ea25c7966f82a8a2"
  },
  {
    "url": "assets/js/16.f677359c.js",
    "revision": "960dcebc42c7db04334a1537d185e52e"
  },
  {
    "url": "assets/js/17.f86b9192.js",
    "revision": "cfcf0fef8574a572e570cca71622243a"
  },
  {
    "url": "assets/js/18.9a0185c7.js",
    "revision": "a5e6a671900d9344e52a19243179f5d0"
  },
  {
    "url": "assets/js/19.55d691f5.js",
    "revision": "991b1fd5145b8727989cf6a1aba4bc50"
  },
  {
    "url": "assets/js/2.58b97c4e.js",
    "revision": "37d3fb5524cbf7b7ef95815f56a85efc"
  },
  {
    "url": "assets/js/20.908af4f3.js",
    "revision": "5f7bb999767552452c1f837f48e29742"
  },
  {
    "url": "assets/js/21.296783cd.js",
    "revision": "b7a943181b5f706429722f2dbb185610"
  },
  {
    "url": "assets/js/22.53936e97.js",
    "revision": "9ada2bfc675809e63bf6f8cffc7e4cb0"
  },
  {
    "url": "assets/js/23.b54d6b74.js",
    "revision": "89edb297c7252df0933f3d87a9f4e60b"
  },
  {
    "url": "assets/js/24.8b723ace.js",
    "revision": "cd1dbddb43fa7388bd778a0be3da2e58"
  },
  {
    "url": "assets/js/25.d87fe992.js",
    "revision": "bff81d881421c7a6a39ce03923ce8e6e"
  },
  {
    "url": "assets/js/26.0a496879.js",
    "revision": "d565e1426ebb68e06ab836713fa0e169"
  },
  {
    "url": "assets/js/27.5164abaa.js",
    "revision": "142f6670f5bc5d6815562b71d55b62bc"
  },
  {
    "url": "assets/js/28.400e48a4.js",
    "revision": "c1e8a81311ee4a8f1e61afb7aca13c07"
  },
  {
    "url": "assets/js/29.acea9f2b.js",
    "revision": "416205a33a1dd0a9b467f7f8562e4a02"
  },
  {
    "url": "assets/js/3.d9706aa8.js",
    "revision": "318ed46d80c64ef04435de487d4421d4"
  },
  {
    "url": "assets/js/30.5e1d62b2.js",
    "revision": "9c16fe43251ac116e5febe7901028af0"
  },
  {
    "url": "assets/js/31.229418b0.js",
    "revision": "25e4c4ec22ccdfedad573120e91f7f89"
  },
  {
    "url": "assets/js/32.a6a95d6b.js",
    "revision": "f3f3cfff106a729aa492c0049fc9ed8b"
  },
  {
    "url": "assets/js/33.fc4d2020.js",
    "revision": "4d1bcc05c1eb66a9e4943d2bc14a8df8"
  },
  {
    "url": "assets/js/34.feccfd54.js",
    "revision": "9a35a33c106f03ccfbb5c2795544fbf1"
  },
  {
    "url": "assets/js/35.fc664e29.js",
    "revision": "178a5cf97dd63988a4b8c989af0d4808"
  },
  {
    "url": "assets/js/36.2ac36ee6.js",
    "revision": "d78ccfdc4d2752c4049f1e1b5cc159f0"
  },
  {
    "url": "assets/js/37.8cb2260e.js",
    "revision": "4d36452bcd5452a85aa40f6927f31f6b"
  },
  {
    "url": "assets/js/38.0fa65e03.js",
    "revision": "17aaf728f31159a265de8dcdd6f46309"
  },
  {
    "url": "assets/js/39.5afe727f.js",
    "revision": "2bf7136428413ecbd4eebaf1291c391e"
  },
  {
    "url": "assets/js/4.6707ccfd.js",
    "revision": "4a3efc397544148ef513f80b1d5e1ad8"
  },
  {
    "url": "assets/js/40.ef713317.js",
    "revision": "80da063bcfeabc40ba709608bbc68bda"
  },
  {
    "url": "assets/js/41.1ee8693a.js",
    "revision": "5af8b6448dca6fadc3d25ad96e8ee5d9"
  },
  {
    "url": "assets/js/42.bc270ce8.js",
    "revision": "9fbecee0fd6af4e9d7be3a3f21ca97c8"
  },
  {
    "url": "assets/js/43.46976a27.js",
    "revision": "1443b08619adc6c3de4ccb2b2960dba5"
  },
  {
    "url": "assets/js/44.a3fe1875.js",
    "revision": "163adf557bafaecfb0654f9a664e2238"
  },
  {
    "url": "assets/js/45.c29fc0f1.js",
    "revision": "4a04d27e2ea9b5a30293f634c4c94276"
  },
  {
    "url": "assets/js/46.51fbf2ff.js",
    "revision": "09ef9d90e44a42e7729b35af1f49514f"
  },
  {
    "url": "assets/js/47.4e4ba971.js",
    "revision": "48d31fbf9353ef0ca99c7c4b173814e5"
  },
  {
    "url": "assets/js/48.6650f26d.js",
    "revision": "75f33ba95feb49acab44e04b55198c91"
  },
  {
    "url": "assets/js/49.8c0d09ce.js",
    "revision": "ed78d42280502bf1b07a0fc2c1481cda"
  },
  {
    "url": "assets/js/5.288ef22c.js",
    "revision": "03bf761c2e610d3c28960f389b357647"
  },
  {
    "url": "assets/js/50.569863be.js",
    "revision": "8a9506f1ffbd9b441822eb01e9d057f0"
  },
  {
    "url": "assets/js/51.f77d81f7.js",
    "revision": "b35298672e6a9a3798be8b5c68ebdb99"
  },
  {
    "url": "assets/js/52.972a0e27.js",
    "revision": "649731cc62d3d273ac98141b4ed7199e"
  },
  {
    "url": "assets/js/53.0235d268.js",
    "revision": "6658a10ccce298b8671e6f3a5a2c4b32"
  },
  {
    "url": "assets/js/54.bdfe1fac.js",
    "revision": "f8bbf25dd5ee4e48c320b645b56f422c"
  },
  {
    "url": "assets/js/55.5bce31e4.js",
    "revision": "52b88bb69538fdf33a10c20ff081f858"
  },
  {
    "url": "assets/js/56.63e88825.js",
    "revision": "321f93a8b17465658abe5160a801a996"
  },
  {
    "url": "assets/js/57.148c8d98.js",
    "revision": "906e044d96e23ab88a5593553e0c95c6"
  },
  {
    "url": "assets/js/58.f3ee94ca.js",
    "revision": "92c38dc7130ab57aedfc6b7a613d48ac"
  },
  {
    "url": "assets/js/59.a7c18ff3.js",
    "revision": "27d11a7c532dfa0eeef96aadbadc0a94"
  },
  {
    "url": "assets/js/6.60320752.js",
    "revision": "84c1952a5624379040abdd48ad8356bc"
  },
  {
    "url": "assets/js/60.de3de055.js",
    "revision": "bac00a8c297767c2d170947e83ddcf8f"
  },
  {
    "url": "assets/js/61.8f5deb6c.js",
    "revision": "715ee793b402e9aa6fcacc07079c955b"
  },
  {
    "url": "assets/js/62.278586a2.js",
    "revision": "f0980d5ad5ddf184862b252739f0c513"
  },
  {
    "url": "assets/js/63.7693d9d5.js",
    "revision": "21e3a2363b6857146fcd9e24eda5d7a0"
  },
  {
    "url": "assets/js/64.27160e32.js",
    "revision": "2bda6668dc7993f0ff1837f0473b1688"
  },
  {
    "url": "assets/js/65.99a28a7e.js",
    "revision": "255bf65f81beeec6c69fa76fe26e76b3"
  },
  {
    "url": "assets/js/66.0bea9dc7.js",
    "revision": "e91f826adcc84ef1cb3f3b53fc276fcb"
  },
  {
    "url": "assets/js/67.2df8126d.js",
    "revision": "6c1d2594ce44ec2ac06dfd5f3bc68356"
  },
  {
    "url": "assets/js/68.7915ea6a.js",
    "revision": "5c1761ebb2660451b2990fc5c749c167"
  },
  {
    "url": "assets/js/69.25f3699d.js",
    "revision": "f0d3623e6a0ef274f8a92587bccccfcd"
  },
  {
    "url": "assets/js/7.6abbfced.js",
    "revision": "e107e613de9782e4674ce984df475e16"
  },
  {
    "url": "assets/js/70.cbc8a251.js",
    "revision": "4201c63486220601505ab4e70cb00ae6"
  },
  {
    "url": "assets/js/71.adc779d7.js",
    "revision": "569ad9bc1df2221e9abf85c6ea1636ba"
  },
  {
    "url": "assets/js/72.147c2d93.js",
    "revision": "ac74293e56e662bb89ec61e236a6d081"
  },
  {
    "url": "assets/js/73.ddc2f88e.js",
    "revision": "63a1285d795bf9c8a422ecf62c1aa674"
  },
  {
    "url": "assets/js/74.130d41ff.js",
    "revision": "01563a4d7014f4053b1cf6031fbb5391"
  },
  {
    "url": "assets/js/75.44f827e0.js",
    "revision": "416436839fde1e4af8055e8207ae5041"
  },
  {
    "url": "assets/js/76.76a4622d.js",
    "revision": "99ac9cdda2093d879153709e8705f816"
  },
  {
    "url": "assets/js/77.3b77a324.js",
    "revision": "04ffcca4280798b5a9bfea59d4892c86"
  },
  {
    "url": "assets/js/8.50888374.js",
    "revision": "e3564547f32057edf1d81d0d725587d0"
  },
  {
    "url": "assets/js/9.a8b9c59c.js",
    "revision": "20580fee8a3113a418b88684b2b3abae"
  },
  {
    "url": "assets/js/app.43731f85.js",
    "revision": "cc08c06202cf106fd39dad906e52d901"
  },
  {
    "url": "background.svg",
    "revision": "5dfa0b3c79465dfa2a64827a18d32db0"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "e598ccb43c5f485758ebbcc553bedd09"
  },
  {
    "url": "ethereum.png",
    "revision": "e87ef377b6298693af14e868e7bd9d54"
  },
  {
    "url": "favicon.png",
    "revision": "95a4dd7b4970ca0eb015e3a10c3e6394"
  },
  {
    "url": "framework-icon.svg",
    "revision": "238a8eda04c75c7ca680da3cfacbb6b8"
  },
  {
    "url": "framework/v1/api/core.html",
    "revision": "4767d172a351a20a3cdd0fee79f23b30"
  },
  {
    "url": "framework/v1/api/ethereum.html",
    "revision": "660d0123cdc52a4b4fcd9d6f9004fbfc"
  },
  {
    "url": "framework/v1/api/wanchain.html",
    "revision": "325448579b09d41150c49908c89942aa"
  },
  {
    "url": "framework/v1/guide/about-assets.html",
    "revision": "f77bc54ec1434b157a455c33b214d6d0"
  },
  {
    "url": "framework/v1/guide/about-cryptocurrency.html",
    "revision": "eccded3658f6942090e8d8e4c0362766"
  },
  {
    "url": "framework/v1/guide/asset-management.html",
    "revision": "e3e8fbbc7e4b5ea2754f1f213adb4658"
  },
  {
    "url": "framework/v1/guide/atomic-orders.html",
    "revision": "4452bfdef00924e60b75b920a0c6a1f3"
  },
  {
    "url": "framework/v1/guide/certification.html",
    "revision": "a1a69bfc1318b7210b99bd211364e487"
  },
  {
    "url": "framework/v1/guide/communication.html",
    "revision": "f42013286e3fa6727d0b3d02eb4d12ac"
  },
  {
    "url": "framework/v1/guide/getting-started.html",
    "revision": "fbe434440c2689773afcc6fec952da01"
  },
  {
    "url": "framework/v1/guide/introduction.html",
    "revision": "6aaff269aebb6238ab72aeea954449bf"
  },
  {
    "url": "framework/v1/guide/threat-models.html",
    "revision": "d7e2dd8ee52fb66ce0fc866dcfd75547"
  },
  {
    "url": "framework/v1/guide/using-providers.html",
    "revision": "890489b5ec84eb8e17018205b0f827ed"
  },
  {
    "url": "framework/v1/guide/value-management.html",
    "revision": "4e58614f6d203918c1a8516bdfe92ea7"
  },
  {
    "url": "framework/v1/index.html",
    "revision": "7b918562cc155e83019e245fe6e31ad7"
  },
  {
    "url": "framework/v1/plugins/vuejs.html",
    "revision": "8f2843074d4e445cff4de263c9505960"
  },
  {
    "url": "framework/v2/api/0xcertapi-client.html",
    "revision": "886bc8a4f51361aaadaddbbc7476df79"
  },
  {
    "url": "framework/v2/api/certification.html",
    "revision": "d13b278fcec93515aeadb4dc1a00fd16"
  },
  {
    "url": "framework/v2/api/ethereum-connectors.html",
    "revision": "e9d90a08d433d22234053a805911cb7f"
  },
  {
    "url": "framework/v2/api/vuejs-plugin.html",
    "revision": "91c245cb933bea7732faaf39ec086c1d"
  },
  {
    "url": "framework/v2/api/wanchain-connectors.html",
    "revision": "97bd3767a5a23b6ab6cdfccafaeeac3a"
  },
  {
    "url": "framework/v2/guides/asset-management.html",
    "revision": "ff007594d751ec3d8e1a88f92e49eb20"
  },
  {
    "url": "framework/v2/guides/atomic-actions.html",
    "revision": "1ca57f1f435673c7b1ae014766fb683e"
  },
  {
    "url": "framework/v2/guides/atomic-approval.html",
    "revision": "44978e6b29ff5c0afe1fa9fc83d7adbc"
  },
  {
    "url": "framework/v2/guides/atomic-deployments.html",
    "revision": "7da94cecdf730b643049c8441797bb18"
  },
  {
    "url": "framework/v2/guides/certification.html",
    "revision": "d1d8551431ddf34b83c332094394163a"
  },
  {
    "url": "framework/v2/guides/communication.html",
    "revision": "4dadac548444d96a07dc6538a629dce4"
  },
  {
    "url": "framework/v2/guides/providers.html",
    "revision": "9d348f6e9d6a50887b703a18e7f12d9a"
  },
  {
    "url": "framework/v2/guides/value-management.html",
    "revision": "f830c2eb87f0c9966c02129c07e8cf43"
  },
  {
    "url": "framework/v2/index.html",
    "revision": "740196c6b8e9360294087007de3ea576"
  },
  {
    "url": "framework/v2/introduction/0xcert-tokens.html",
    "revision": "18d14aa52ed6a76f872d7c0401eac3c7"
  },
  {
    "url": "framework/v2/introduction/atomic-transactions.html",
    "revision": "45e703da00ca002fc7205f36e8615874"
  },
  {
    "url": "framework/v2/introduction/authenticity.html",
    "revision": "d0860322c69cebdcb17fd30fa040eca1"
  },
  {
    "url": "framework/v2/introduction/fungible-values.html",
    "revision": "f73d9ec7b20b94d1396923a9e037cbec"
  },
  {
    "url": "framework/v2/introduction/getting-started.html",
    "revision": "3b1b0c23faf8bfaa5c4126209e9c266b"
  },
  {
    "url": "framework/v2/introduction/interoperability.html",
    "revision": "38cad261783cb1ffcc953ef2e39e0d61"
  },
  {
    "url": "framework/v2/introduction/non-fungible-assets.html",
    "revision": "1440469c6fa2f3deff6869e5d0c25506"
  },
  {
    "url": "framework/v2/introduction/threat-models.html",
    "revision": "13e3d9b5d816460532d2bd4f9845302b"
  },
  {
    "url": "framework/v2/schemas/86-base-asset-schema.html",
    "revision": "d02eb729eeb03ccd193fcae6b5c316fa"
  },
  {
    "url": "framework/v2/schemas/87-asset-evidence-schema.html",
    "revision": "d48576192b529eec7270135d7d270ff4"
  },
  {
    "url": "framework/v2/schemas/88-crypto-collectible-schema.html",
    "revision": "39efd2532f4b8679e7bc95a615f3c0d3"
  },
  {
    "url": "framework/v2/schemas/xcert-schema.html",
    "revision": "3e52b73b6ce113c9c6d06209a8756c8c"
  },
  {
    "url": "hero-image.svg",
    "revision": "7a23f7cc21f915a46ce92c59b8984d3b"
  },
  {
    "url": "index.html",
    "revision": "2d75815be1f4a70be54bad1b5c362353"
  },
  {
    "url": "LICENSE.html",
    "revision": "0e650d330f189e906d3b400dd2c2e093"
  },
  {
    "url": "logo_0xcert.svg",
    "revision": "1b51dc3973753349a7c9c72a4c37fb3a"
  },
  {
    "url": "logo_alliance.svg",
    "revision": "077c3f0fc6e4955815f8e9d7d4d53e61"
  },
  {
    "url": "logo_swapmarket.svg",
    "revision": "c14ff3d5b6d2ccb8bbcbcb63dbed8d15"
  },
  {
    "url": "logo_validator.svg",
    "revision": "f6b907c537d8075d30fc24a49d9dcf66"
  },
  {
    "url": "logo-bitski.svg",
    "revision": "6bf34f5872caea823c755a950675ccb1"
  },
  {
    "url": "logo-metamask.svg",
    "revision": "fa7b829817860f80d7733f08efd3e4fe"
  },
  {
    "url": "wanchain.png",
    "revision": "c3256bc210ca559021a431d950d3fb3b"
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
