'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"version.json": "f124181e58b12572810925130e6735b8",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/AssetManifest.json": "b3d18482e7bf1cd44957a3f86b8d4398",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/NOTICES": "840e8fb25ed94be87aa4980c1a81cb07",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/jnr.png": "224a3371f2b4aa43419217d03aa38d65",
"assets/assets/imgs/cni.png": "2b7b79c1ce1e203d4a0f6d660fe690f3",
"assets/assets/imgs/stars.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/kalind.jpg": "5bcf99d48f15fe9eaf3fc16e5dec67af",
"assets/assets/imgs/doc.png": "7ce9ca494672af4a94ffd9394e5f408a",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/1.png": "2db860ed6caf711f9ba977b46c005148",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/flutter.svg": "92199e1295daa401a178e23bcfc438c8",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "1e65564d6bf7491d3b40b155f4de6e85",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/fb/e896d8ee7ae82c013ff1b0f8b2f290b7b95edc": "a7201aae7b4042a935dbb7d8bbe82d00",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/46/09c2c645b9a2f1e08481958b6d09725062b498": "936d0ad07ad152a2499ca80bd73597ca",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/93/20c2deea47adee35e26657fde83deb3ff6a800": "b4461eb0bd55b1ca8867b36c3cb2849f",
".git/objects/6e/70f663ce9fe5968e265d4a3ef40812d3b2f624": "d5dc06abe40e891ee0369ebb263f667b",
".git/objects/d5/a5e07b5799d58eadd6c23d629f0eaf36b4883c": "c79b8139a440caa9ca1d119e080a3bca",
".git/objects/75/7d4deb2be8818be8a1143272ebdf23561e4d6c": "e715da83bdabb263638ca595bf6c78f6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/f7/0c43a95daedcbe7baca9d9056293ac5aa59a44": "68c1f17ed3163f7413937428b84ae656",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/32/79ea35bf8b132a8fc7ce303d307a85f3f1ec8a": "22deb71d5c7e6f083fae73095c6f8078",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/f911946c4a34e44e866273b52a9748cfdcdb73": "5f9f4f95e39ef3a249b03bb7080c4622",
".git/objects/1d/62c2fc512a7a01dbe9669d44258bf3d94717f5": "14f7995090681b1f9376abf89e794808",
".git/objects/92/5612a8f8708be0c26256414700411f9294249e": "bede6b57228e0047543d92b70845a72d",
".git/objects/92/a14f5863cadae8f64207e638a69ba095ca3dff": "123ffc8e8793a6cd4ad17b101181774e",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/72/6dcd5aa277b4860050da1d0634a4fcc76e7193": "e235c35f9ea7999f7c46aaff773fff88",
".git/objects/64/221f872255fd6a8137c9c5d0ec13e598225976": "e29aeb8803bd7fce9f1da527a021b952",
".git/objects/b6/36ad5892aea29fce11535b637266efe0c1996e": "fd98615a65d292ddc92a2b5bc95b814c",
".git/objects/0f/d36a2cd6749cb2cd351c2e743b0c5a2d90c0cf": "c13165a5ba9fd45de64a9d6e41739a29",
".git/objects/0f/cde62b4970d93af4db66d37d34d3b24eb9a7ba": "9ccfc608caa67e6eaf3ea34a0adbaf3e",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/38/31a8b6cb19d877b5f093e92fbb310bd8395c41": "fe838f361097dd6e92a28987cd0156c3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2a/0dfa82cbbe012b58fa7342699bff01aec7e57f": "2d57b6ed081da304c1103f9e4f1cb6f8",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/24/c0eb1696f4b1f3f2a6c3bb2803f86354ab38af": "5a710fdc6b8f0968b797c1a48b396ab3",
".git/objects/68/5cf820049a9890acb819bc6cfe4564804c7a71": "2eb00b08f9d985efcfb71b5625106f84",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/20/95360876eca0889a30680994d773c99891e2a6": "90507eb8388083dad9d50ca158d84e82",
".git/objects/5c/a32ab3f0e7b68d1d1e0476fa9345efbc759c70": "08a3a98d44d44d334c7e3a89066185bd",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/bc31ec5006bd8b54e44920e8dfefd5d2272703": "236e5c956aa87197fbea1f2136bf48e3",
".git/objects/c5/27bdeb0b8335176321a5f17615e0b7b1b2b23f": "1269f8eea390ab62d831e3cbda7b2bb3",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/de8326dde85196d446754741ffd1af45c35684": "9eaac736f8febf8b1f44a748fe0ea51b",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/ed/075ccb5204502c45f8bf24a3656542d339c961": "9c3e28c6448e3115aa83abc4f6df150f",
".git/objects/59/272f910c46fd2884790d80ca1f1a033adaeda2": "3c41c3cfd727f6659ed3b6a591c6c6f0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/3d/90b8181e78fb5c721af5a57369b9cf4b5c903f": "4e49dac718c1d1736eb4627b5d29418b",
".git/objects/50/8e3e43fa3170210ab23eba09da6b3c75599f05": "4885b0a95042b96d0669f12e9f93bf90",
".git/objects/e1/2ec6afbcc18700790deeec77bcf5a4a50886ea": "1ae7f86d77b206a183d4a22f62ded75e",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/21/b113934f04119560d7bf67fddc8523d24528f8": "cf829d195099d8ed562e4a9922379a3f",
".git/objects/21/8fad30e479fae3d9ec4e51d371048ea938e015": "f6a192e2b80267f65757e5bba3306a4b",
".git/objects/16/4cf3d46b8ab88582d511332b04647b14b35941": "a2ae39b06c63ef0c4b558ce9b3a23431",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/88/59b33e118a28ac83f24ebabd135bbaad514b25": "58026ad7da6a93c605fd366f1a83bba8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/83/f81059e57a8b91d51ac59ca5331091182bbda0": "616ccb0c57dce9e53bdff1342abaf06a",
".git/objects/83/ae9bf51ad1a34589512c02310836200b068da8": "87e33a95d553eb1ca6dc4f4d8da814b8",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f1/72d66325627934e637a4d18757f94df538b15b": "f9a66b98eb3109b4d5772d012f7289eb",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/84/d72e29666e34c1a6a7f51305ab688f3c0d493a": "77af064794714cf13171116e454ad06c",
".git/objects/03/4dde5096b88bc68a4bf8afea4cb8c296b55989": "6d860da88a49a36006a6b288f4a3787f",
".git/objects/87/1a4c29fa9e23a90e02b12b252d56ebfec2b1c3": "7bb137adaabcef5b53605f6b4f28bd9a",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/17/9c4b3919d5e9091cd97ce04a8ba414a7f4ecc2": "78cfc776e1e4b1315d475bde5b437ee9",
".git/objects/8c/dc4ede19af57744aa573133093776a2a62437f": "ee29db22f43f0a43c417f3e5d46a952d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f8/1b64d8fba6fe95a91bd50bf3f3597509eaa7c9": "4200179dcdbe2d99dd39b10c153a8cb7",
".git/objects/23/984458563e789a1325c13507083c0602707b70": "2ff3cad3b21a37108f352e027bb059b4",
".git/objects/29/21f3e0c077d887ec20d6bb5eb9d747eee818d0": "0982ce0915afbdcd9ccc5c71bcc55551",
".git/objects/29/f988d6d9e1b42579974f7d431ea41b4312a385": "efe8c8d1fca94d325376180fba3151a2",
".git/objects/fd/ed848465c00c41bc12f3aa5c61bf0dbfda2a66": "3343ef3ecddd2894e9ffb97829988980",
".git/objects/dc/7c09093f6cb2fde1ff6a70707019ca2e12264f": "42277cf9e572a83dc805baaac0b44fa5",
".git/objects/01/657959cf09522f6d7b62e508ffe5e30fc89af6": "89c63a9bbbead3d1f4d01ef226e5d869",
".git/objects/01/8e38be6695c12892bb0175649ae35d0ba25d93": "d24c2c1367faa5ba516b4744bc825432",
".git/objects/7d/b6ba8347bcba89e2135abb54950c4cb52abcbd": "bdd944734dfdc713ac8a0cda8bdf0cbf",
".git/objects/af/1434d6b62ee1ae7602bed8c0c2b7bb8433a2f1": "f34ebe42b9da8583b7fa009e79f00e1c",
".git/objects/af/3c23da32bf12925bcf1deb54015f1352ecd8d1": "02f4ac70846b40862c6322fe94605b24",
".git/objects/7a/abbb479a3c0dcf21f08719367e28b6d9b2a484": "701ae20f6bd378272bf29ddb41cc9890",
".git/objects/7a/a1f54bcb2d94393e5ff0cdf9fe4eb870617a01": "d566f45f38fd96a72771b5d926e176c7",
".git/objects/d2/f51b3e8b3bd4853d0fab762630b8e556dc588a": "15e1bb4dd202d0ebee18d5c338c556f5",
".git/objects/0b/8ae3ed3ed546da9bf609b1ed9f809ba9420729": "6503dc4c2d6983753abebca0ff0f25a1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/4c/416cfcc64e0f36cb76ad30d275195b4cb53a7b": "6d2dd05097ec2e740f97ecb0c55f2171",
".git/objects/70/04410c906670a4729f69644f420800af0db675": "64a9c2a5ab5d933eef763c7ec0036200",
".git/objects/b2/9d5d759042c79e72faee6da79bc3bc219f3ba8": "ae1ce10b8818ef78274e20c75c8a4370",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/34/ab5050dce04c638815a3a1fc8328012ef9b164": "4fb2327db09b6ff50f8322185bf9fcc8",
".git/objects/85/c4d6cf1639ea98d130a0f561ed832663ae7451": "e53e4e52b66431bf03c5bb4bbfdbc1b1",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/6f/6b0376c756f6e4df7465917f40b921a711e6f7": "b086c47de8558b874b0160d5a984b642",
".git/objects/6f/76fcf49dff88bd172192870f3f88ce63edb4df": "7c3029cf0a0661ac89f57f2437b6cd54",
".git/objects/e7/7acacc33680ff7bb224f03bfef0e398c1c038a": "064fac0618649e1900dd62f423d72c25",
".git/objects/e7/09209a96fc96865ea1ed6511fc03ab421d69ef": "4e6550b9aed474af2600e1f898555c01",
".git/objects/a1/0dcaa0f39c7ef5aa1e8b916c4219bf79403452": "fd95d761bb6b25865efc8083977e4857",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/d3/09110de7fa7d37579daf02879895ee875ae6e7": "3cb848ab8598669833e3f63c58bfecfe",
".git/objects/4f/9b2b42080243750c968de1286bedcd5ca8135c": "4f284ebcbf9f9222f0e960781b24fbad",
".git/objects/06/d9fb59a3d8ff22e53abc9327bf8dd479dc5f11": "2cc4989c2562a8152eb7446f607f53e4",
".git/objects/06/621bfbdadbd5f9772c68d1c1eb34f0310ad921": "21a5c8554a835515d7cd6f35960aaab6",
".git/objects/de/014419447c791bd56842230fa063ec5c49414f": "8a62e6d64b539ba843c07497df68348d",
".git/ORIG_HEAD": "2d42f509ef2501b368fee6aa71fac9eb",
".git/logs/HEAD": "d69ab8f2cb69c563cd6d5b504e0570d8",
".git/logs/refs/heads/main": "64636494cc44d4ddaa2232c88dd59bdb",
".git/logs/refs/heads/development": "7a43f70b92464136d422fc7add825927",
".git/logs/refs/remotes/origin/main": "8b6722a670cfa166d8e7db9c95c14f8e",
".git/FETCH_HEAD": "08656d981d995c3e46dc92722060c067",
".git/index": "93ce25c4324afb9e74dd73c7d3f0b816",
".git/config": "5e91d2ba92b16648c837fcff43ffed47",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/refs/heads/main": "30abbeb8475a9a8c1bd4e8b92d7a1466",
".git/refs/heads/development": "2d42f509ef2501b368fee6aa71fac9eb",
".git/refs/remotes/origin/main": "30abbeb8475a9a8c1bd4e8b92d7a1466",
"main.dart.js": "2c57057e05a11dc8dd72739e3cae4ed7",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "47e086f8841aee14e325f5f82ed0795f",
"index.html": "e942ba918c45d53168d6b5b2afc6fe9b",
"/": "e942ba918c45d53168d6b5b2afc6fe9b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
