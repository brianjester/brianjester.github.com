/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["asl/800px-Sign_language_A.svg.png","000524fe2ac34ded4dfd10adef5a8e8d"],["asl/800px-Sign_language_O.svg.png","0525aa28f15e1eaeb1292b9840441220"],["asl/800px-Sign_language_Y.svg.png","6f94884b6ded9a6092677bcdaa4436b4"],["asl/LSQ_1.jpg","f0e1dff8c9f93b25ce1e47d122c8613d"],["asl/LSQ_10.jpg","7aedfd1cc2bafee0492bb590be8bdf21"],["asl/LSQ_2.jpg","480c5164229cab3556fdd23ff1d916c7"],["asl/LSQ_3.jpg","2893d9151f896bc2710e694930f28e16"],["asl/LSQ_4.jpg","ec306d54a2e330583b8be2ef14070b4d"],["asl/LSQ_5.jpg","86ad60954368f7cd7d0d97749002d96e"],["asl/LSQ_6.jpg","e4e2aa64b45b641873199b0f3b172bc4"],["asl/LSQ_7.jpg","92dd24671778e8367e5d61dc0f88693c"],["asl/LSQ_8.jpg","54a73737ff2844aa3bf03cb4fbe2574a"],["asl/LSQ_9.jpg","ed2a0adc91bb2b6f88fd03a68b84eb4d"],["asl/Sign_language_B.svg.png","c4a2b857eff314c5a27f82948f3c4d22"],["asl/Sign_language_C.svg.png","543f648f1a2e6220907e38a24e15bdf5"],["asl/Sign_language_D.svg.png","5941f14d484f932a0874f8dd538ef954"],["asl/Sign_language_E.svg.png","0a4fb0a89b8aaa4e7486dcad5efe28b8"],["asl/Sign_language_F.svg.png","f467c4fd56e082b03ca123d056fc913d"],["asl/Sign_language_G.svg.png","f585ebd993a026a87c2d55dffd2fef8c"],["asl/Sign_language_H.svg.png","7f551fc1ba9d014d6f9f9529afe182ca"],["asl/Sign_language_I.svg.png","fdfba64ea5215b9da7ce9a5e5de05d73"],["asl/Sign_language_J.svg.png","1e37efd75a62ae637e480f586fff7cfe"],["asl/Sign_language_K.svg.png","f7ed75581b08bc9e36927cbaef7acc8e"],["asl/Sign_language_L.svg.png","1ed89cbf0acf7b5b6c2ba61bb048b8fe"],["asl/Sign_language_M.svg.png","61e75a828c83984f886c8db6fd497c98"],["asl/Sign_language_N.svg.png","419683aafd79acd7bc602facee045ca6"],["asl/Sign_language_P.svg (1).png","a642de5e1654f6a6d88a61038dafb8f6"],["asl/Sign_language_P.svg.png","a642de5e1654f6a6d88a61038dafb8f6"],["asl/Sign_language_Q.svg.png","f5d20ea0ecadb3cbbc12c0996866aab3"],["asl/Sign_language_R.svg.png","e963687069ebc298dcadc1953a748bf7"],["asl/Sign_language_S.svg.png","76f9641c1bca2d2ad96d97d162be7d0d"],["asl/Sign_language_T.svg.png","458f835b24d0047c439eb1191cf86219"],["asl/Sign_language_U.svg.png","70580061861b917edd9978dd29f98168"],["asl/Sign_language_V.svg.png","08c89f95bd2921301b9b0dca29a42160"],["asl/Sign_language_W.svg.png","2539e8090a22d32862b01df320dc83a4"],["asl/Sign_language_X.svg.png","3a1434bb8dc2eb15cfd51ac00f0ad81a"],["asl/Sign_language_Z.svg.png","bd31ddbfab95b622fe5d205c26444848"],["blog.css","3b24f2642605e0077d4de0004e9b1eae"],["contract192.png","bc64228c57d8ed53b958ec82c439f52d"],["contract512.png","9e5e136566113aa5fbb289b89a72968e"],["dividedhighwayends.png","e2294d05a3a586a0ba588984ff9c139d"],["donotenter.png","8367fe6a998f507f9951bedf62b16e33"],["favicon.ico","12e352e0dcfcd3089808acc273483347"],["favicon.jpg","9f32134388e8dddd27c90e2c40ed4a04"],["hillahead.png","d11726d65e03ded3cddbb7e9a7351026"],["hiragana/Hiragana_あ_stroke_order_animation.gif","15619967ac3a36f5a62279a7f251704b"],["hiragana/Hiragana_い_stroke_order_animation.gif","5fb6ff6d0aa41f92993663c2182de32e"],["hiragana/Hiragana_う_stroke_order_animation.gif","27fec2580e7f6cae357895b5d2369df4"],["hiragana/Hiragana_え_stroke_order_animation.gif","a2d099851daffec8b99623c13ae27bf6"],["hiragana/Hiragana_お_stroke_order_animation.gif","2311842c62d7d45f641959881c7d2778"],["hiragana/Hiragana_か_stroke_order_animation.gif","b690e2900a8688ae86cd65e08cc639df"],["hiragana/Hiragana_き_stroke_order_animation.gif","dd9229ceea0fb7d6c95fba4019b552b6"],["hiragana/Hiragana_く_stroke_order_animation.gif","0a04148b448c6bd690bafa790a9d4e86"],["hiragana/Hiragana_け_stroke_order_animation.gif","cbe5fd778c416ba9a27cdf568097fb2d"],["hiragana/Hiragana_こ_stroke_order_animation.gif","ca4bbadf1bd16881ecaf4421f6e8013b"],["hiragana/Hiragana_さ_stroke_order_animation.gif","621dc8aa8ba436bf5ab5f83f3832602f"],["hiragana/Hiragana_し_stroke_order_animation.gif","68082ef753cb6fb096fb2434938b490a"],["hiragana/Hiragana_す_stroke_order_animation.gif","69e62c0741c4591f817c358586b641c8"],["hiragana/Hiragana_せ_stroke_order_animation.gif","e0f9e4fb9d538ebf758200d62af0e1c0"],["hiragana/Hiragana_そ_stroke_order_animation.gif","40382d668553953f44b2fa93d75549a1"],["hiragana/Hiragana_た_stroke_order_animation.gif","b8c5a29dd5fd5184f97f39f54c7059de"],["hiragana/Hiragana_ち_stroke_order_animation.gif","bd1fdc520811dee618fe2e0bdd4f1226"],["hiragana/Hiragana_つ_stroke_order_animation.gif","7b00f130d29801523ed5ba75f697bf85"],["hiragana/Hiragana_て_stroke_order_animation.gif","bc0dfa4b844d47f60f734740c39dfaeb"],["hiragana/Hiragana_と_stroke_order_animation.gif","929b4d83595141275f1665694f1231c0"],["hiragana/Hiragana_な_stroke_order_animation.gif","10a6295062736181d67e55cbccada0dc"],["hiragana/Hiragana_に_stroke_order_animation.gif","4cd73ef02902242ed0cde69c18a78ee2"],["hiragana/Hiragana_ぬ_stroke_order_animation.gif","5c6fb71fac87c78cee671bf5a8747d7e"],["hiragana/Hiragana_ね_stroke_order_animation.gif","13d8437cb5f4e2bc55a8a6781ab133d0"],["hiragana/Hiragana_の_stroke_order_animation.gif","acf4ebc7fde9920ee7d78f3ae59259ff"],["hiragana/Hiragana_は_stroke_order_animation.gif","fcea01c95ef064e163ca20611560dd7d"],["hiragana/Hiragana_ひ_stroke_order_animation.gif","fc249cbbfabb14ce16f281b7196a3feb"],["hiragana/Hiragana_ふ_stroke_order_animation.gif","6b76b989689afe4230aadd7485373d22"],["hiragana/Hiragana_へ_stroke_order_animation.gif","14081cf3531b725fe283dff6fab296fd"],["hiragana/Hiragana_ほ_stroke_order_animation.gif","00a027f13101dd4060752e24030df95e"],["hiragana/Hiragana_ま_stroke_order_animation.gif","c082bd9be11ab9816d5ce0e550d93b94"],["hiragana/Hiragana_み_stroke_order_animation.gif","24d8a13db34d0bb530415adf667b3129"],["hiragana/Hiragana_む_stroke_order_animation.gif","d0cf610183a66a20e4b3efc0404e05ac"],["hiragana/Hiragana_め_stroke_order_animation.gif","8a45be70b32fec3ed0e8964dcb2406df"],["hiragana/Hiragana_も_stroke_order_animation.gif","bd582ff70d1e08633789b3412a2af045"],["hiragana/Hiragana_や_stroke_order_animation.gif","8f76090c9a015b9e8c620563a46ede9c"],["hiragana/Hiragana_ゆ_stroke_order_animation.gif","a42715ae77f1d4681603d32a4f3addc7"],["hiragana/Hiragana_よ_stroke_order_animation.gif","af5318193faa9e6a7555f7626bfbde8f"],["hiragana/Hiragana_ら_stroke_order_animation.gif","9c0536a153dfbca91bf6d394ffdbcf49"],["hiragana/Hiragana_り_stroke_order_animation.gif","adb59d2ee1d75907f474e9fea93b270c"],["hiragana/Hiragana_る_stroke_order_animation.gif","54fcd79fb6904e2b1330a0cb18f7bc2c"],["hiragana/Hiragana_れ_stroke_order_animation.gif","ad337982d119ccfdd1d1c8dd4c912762"],["hiragana/Hiragana_ろ_stroke_order_animation.gif","66030084cca3609e3b3872773baa15da"],["hiragana/Hiragana_わ_stroke_order_animation.gif","4167ffe16179af0fdcf737469084a32f"],["hiragana/Hiragana_ゐ_stroke_order_animation.gif","68c4a10233b44991ad9a4d4dd78bb218"],["hiragana/Hiragana_ゑ_stroke_order_animation.gif","c6730fceb52ab792b769f560519fc894"],["hiragana/Hiragana_を_stroke_order_animation.gif","26c859bb3b3f74c7537dbd37137cf5c1"],["hiragana/Hiragana_ん_stroke_order_animation.gif","c02f7a5e36be11a3b77f4a87b1f41598"],["hospitaltoright.png","c1cb35ec0d6326b6af10e86625f533e1"],["index.html","023010c5a705f8a3eaf9c539caf93146"],["jp_2/EA-11_eng_2.png","1486d5e2a357461451e66de2da3a6b67"],["jp_2/EA-12_eng_2.png","09af7485d164fec92cd83e35448c4154"],["jp_2/EA-13_eng_2.png","a47a0f0f81b48ebda9d81550785434e8"],["jp_2/EA-14_eng_2.png","f74af8d7df3df4c3e812412bb2bbc715"],["jp_2/EA-17_eng_2.png","900c855d446380d24bd67c1693413a38"],["jp_2/EA-20_eng_2.png","98dd0dbd93955477536c9a173d19931e"],["jp_2/EA-2_eng_2.png","921985d96bedc90545432c7e592f1574"],["jp_2/EA-3_eng_2.png","538053e8d55fd4464f6e14504bc1cca8"],["jp_2/EA-4_eng_2.png","40870e03b2832eac0b157d66bca8cfdb"],["jp_2/EA-5_eng_2.png","134acaff533195b39dbbd533b38cd0dc"],["jp_2/EA-7_eng_2.png","c86dcc7eb3e274209513cd96c18ebbe9"],["jp_2/EA-8_eng_2.png","9208cc16697258e13091a4605c2ff6fe"],["jp_2/EA-9_eng_2.png","a55906bc198f627b4401d9c1992f40f6"],["jp_2/EB-1_eng_2.png","936848eaf393bdf15f1484a0b686c44d"],["jp_2/EB-2_eng_2.png","48b0c3d7caed4710d97075cd6f404a88"],["jp_2/EB-3_eng_2.png","bdae4b5e844e4f6a556972e4fec257df"],["jp_2/EB-4_eng_2.png","305579373391e80bf7972787cba71a16"],["jp_2/EB-5_eng_2.png","13b508c049315df3590443e216dc9f01"],["jp_2/RA-10_eng_2.png","52a71b786ea261d6c697cb1ad8d7a7a5"],["jp_2/RA-11_eng_2.png","49ac65e5196b29d626a26021d50a1fcc"],["jp_2/RA-12_eng_2.png","e6e742650e242b7ab5a1818854d7d4a9"],["jp_2/RA-13_eng_2.png","6362f99330ac077a9dd739d39a2b801b"],["jp_2/RA-16_eng_2.png","0c9a4abeae23a2f5222efcb9b91766cc"],["jp_2/RA-19_eng_2.png","8529a80c1b04884137cdbedb05a00dbc"],["jp_2/RA-21_eng_2.png","0dd91632925674afc76ff929214d8b24"],["jp_2/RA-23_eng_2.png","b61173fe89d6d2c467f00e59e1a9fe41"],["jp_2/RA-24_eng_2.png","b8031ffc24ed316b59faa2b240f6cd31"],["jp_2/RA-2_eng_2.png","4d2dea920bd71e4811fcdeb42eddd27f"],["jp_2/RA-5_eng_2.png","70cb7631b00595e7c76b609345ce6431"],["jp_2/RA-6_eng_2.png","21c1532a2c31b91b5a94c86e7813c4e0"],["jp_2/RA-7_eng_2.png","0353553e00e134e56d97789470055712"],["jp_2/RA-9_eng_2.png","3cd35019168b18b95f604d4228e53836"],["jp_2/RB-1_eng_2.png","6d50197d7545806ebe139a831adeb90f"],["jp_2/RB-2_eng_2.png","38531ff82ed063e219a54c6325ca9406"],["jp_2/RB-3_eng_2.png","a4254c1badb427a7804e79af9edb61a8"],["jp_2/RB-4_eng_2.png","bcc0bbb83e9406328ee45f4694c77e2b"],["jp_2/RB-5_eng_2.png","a18423a0bfc6f39d8c528d532c17e9f3"],["jp_2/RB-6_eng_2.png","a5e1c142df18074f851c8674d08d2c5d"],["kanji_1/一-order.gif","55c2eada01fb2d460f66eeab88d20475"],["kanji_1/七-order.gif","e77af61f2ffd3e709d29213a25fab071"],["kanji_1/三-order.gif","bd54582ea8cd7ac3fc2a06916c9da0a5"],["kanji_1/上-order.gif","161e6ad5ee1f3a47aea43e12366b69c1"],["kanji_1/下-order.gif","a4a96f7826aa2e40174e1b607c1e7ca9"],["kanji_1/中-order.gif","91684c070d171c9a36b5a066f7c1f16b"],["kanji_1/九-order.gif","a5c7ee5c341a65eab9c65e86ecb273aa"],["kanji_1/二-order.gif","5c78c21b5b4771f13f90e64698a8a564"],["kanji_1/五-order.gif","91c5410428b03cf9aecd9e926729e7de"],["kanji_1/人-order.gif","4785d84b7b7f5b7535f72d5b5c7b2bf0"],["kanji_1/休-bw.png","dfb68e8ad28d7e3c97a05750fb35f024"],["kanji_1/先-bw.png","60fc380d7a89c95b30dc7aa276a7a324"],["kanji_1/入-order.gif","747d1028f34ab132cc2716f4b11496c6"],["kanji_1/八-order.gif","4658f0bf4a3387ac9c9c88c49b1238d1"],["kanji_1/六-order.gif","39f5a77dac220055add3a9b7d010aaa3"],["kanji_1/円-jbw.png","ec5464cacd78e64d6879b7370838b20a"],["kanji_1/出-order.gif","b6eb1af982fc2615c3b5a2aa77182e31"],["kanji_1/力-order.gif","7d4448cd11c39a86e62a9d9251bc09a8"],["kanji_1/十-order.gif","9d9e2e401f19d7fcfcb3067236fc4ed2"],["kanji_1/千-order.gif","f837c6a7136d18053b9a40ed3ff33986"],["kanji_1/口-order.gif","c74b858ff98753b787cf72d8f9dfaf19"],["kanji_1/右-jbw.png","18460765212749ffeb29d592f525c291"],["kanji_1/名-order.gif","a634f1498d2ae13dff065b218e67cd0b"],["kanji_1/四-order.gif","6e9b9bdb26d7c7cab5f9e3b7cc520ca1"],["kanji_1/土-order.gif","ce05561cdcad11fd0f80d9b14256dc69"],["kanji_1/夕-order.gif","f27ca88d86ca1db9ac0a0d7ca17e907f"],["kanji_1/大-order.gif","bd18f7b32fb014c1f58035c102998ac2"],["kanji_1/天-order.gif","0bd127fca4ba312f4f4fde2d688cc01c"],["kanji_1/女-order.gif","890f9cb2d5c1926be030dc7c6f49bf95"],["kanji_1/子-order.gif","45625589e55e90407c41e7c11a9e25b7"],["kanji_1/字-order.gif","81e3197b91be493bce45e27ef2d2c47b"],["kanji_1/学-order.gif","2ad28b6b533f43f8025975e0c9c0d3c7"],["kanji_1/小-order.gif","4fe48f1bdea50fa532a91233dc5f0f1a"],["kanji_1/山-order.gif","185a5227fa08fe3d217bde721a65b11a"],["kanji_1/川-order.gif","c7fed1212fb3207d7dd26aacb75c72b7"],["kanji_1/左-bw.png","dc5c6053a097f09d8cb1f81815b3c587"],["kanji_1/年-order.gif","94c61849c80838c1294fa9b2ecdc9a82"],["kanji_1/手-order.gif","2d4f635fa30dff492e7ea93627764b9e"],["kanji_1/文-order.gif","b55732f7f77e5d4045b975c1db113b38"],["kanji_1/日-order.gif","8e638f5ebbb60beda68134915ff23cc7"],["kanji_1/早-order.gif","f59765b2c7889289f94ce6d19e1c41b7"],["kanji_1/月-order.gif","9343e6af7e1bd854021b6af0778c81c9"],["kanji_1/木-order.gif","6a749d16cba5561aaf0bcc3f275d3203"],["kanji_1/本-order.gif","f74dffbd54e1ac1a783cdd6b40039741"],["kanji_1/村-bw.png","e0d6294800544f8250137eb5af177f26"],["kanji_1/林-bw.png","d14f4b05c98ff4576a631a3c5839f823"],["kanji_1/校-bw.png","2cc28f67d3c65daa56f87a28875e655f"],["kanji_1/森-bw.png","b939199c45e5e35bf89689bc490898cf"],["kanji_1/正-order.gif","684b646b6e2e081f9388d3ba0371f1af"],["kanji_1/気-jbw.png","cbc2c03a04d094e6e1f89941656cde15"],["kanji_1/水-order.gif","96283fdd0842b49c7f8a2aa99fcd0d29"],["kanji_1/火-order.gif","4835dbba910ac05de62ca1b5c66b8739"],["kanji_1/犬-order.gif","fce2fa385124ddbc1102b7596031084f"],["kanji_1/玉-jorder.gif","1e6a2d1a623962c3c92a7514c5c76ffc"],["kanji_1/王-order.gif","951242ee0dfb27df026958fe9b05fba1"],["kanji_1/生-jorder.gif","f6250950351448f8ec0e1e1e7671fd01"],["kanji_1/田-jorder.gif","a805689d7b79df137b31927f6879fb04"],["kanji_1/男-jbw.png","42737cb63384406e48784dffa2902706"],["kanji_1/町-jbw.png","ce2fe35a38dafde9c55b919e9af0cd64"],["kanji_1/白-order.gif","e76041e506712348e28720f4c98929e5"],["kanji_1/百-order.gif","71ce59a847cd09efa9b20b79457911bf"],["kanji_1/目-order.gif","36ad58442b84af5165a9c9453b914cdf"],["kanji_1/石-order.gif","971f652cb29a7c90af29d5e0386c92d3"],["kanji_1/空-bw.png","b1288f9ce09a3dcfecfb18a6eec35988"],["kanji_1/立-order.gif","eecef70521e517697c6cc68809600627"],["kanji_1/竹-order.gif","64fa2094979e96632f98e2309f6e861c"],["kanji_1/糸-order.gif","f3d00d062fc0cc3637262777eb4868f1"],["kanji_1/耳-jorder.gif","ce3c6ffedd3b525f19cbb1f8330771f0"],["kanji_1/花-bw.png","35be4dae5e5087cafbab53df8ecdc8db"],["kanji_1/草-bw.png","a3ab9b8fda7e188a4ed14504a0c784d8"],["kanji_1/虫-order.gif","ab051e397ada5516a2baf4e1720fed16"],["kanji_1/見-order.gif","82fa6b2eb0560abc08f88746c3bd99df"],["kanji_1/貝-order.gif","0ae7fe7b95fb97cf328a69680d7d4778"],["kanji_1/赤-order.gif","6ee04787934562f09a8ab2d6c72eb45c"],["kanji_1/足-order.gif","d163a96e37efc925924bc20fa268a0c1"],["kanji_1/車-order.gif","0c5c3d6a943d0efeb86f57bf8fd8e735"],["kanji_1/金-order.gif","5748d8a604a1ac3f8c975d69ec0be069"],["kanji_1/雨-order.gif","8fd248acd73f024b78d15db6e2bf00f4"],["kanji_1/青-jbw.png","9758e5056f21ae44f1357b59fbdc3598"],["kanji_1/音-order.gif","83799fa3a66a9d7a92fc2dcab7930243"],["keepright.png","52075473a4f76e47ac80d5912931a746"],["lefthanddown.png","e1d650bc9b6747c32ae74a8238cbcd79"],["lefthandup.png","083133fa2933f0db2ab9ff6b0434156c"],["manifest.json","51e81802029afae14da0ab9a75cbba44"],["mergingtrafficfromright.png","9a3d8d652510c821eeb60edab9f68104"],["music/A3w.JPG","315142e1abdf237482ea7fb86007d4a7"],["music/A4w.JPG","a5311edda0327d807469d609ec745078"],["music/A5w.JPG","361fc8e79bf670fc23b9bb9f3ec46cee"],["music/B3w.JPG","070c7c7a7d33bf52d6388410c2a61cbd"],["music/B4w.JPG","0aeba1cde5c519afe470943e12e7a562"],["music/B5w.JPG","3f4d44e1cc8394ef612864e9b8901a66"],["music/C4w.JPG","743a35297dbddba72067548e569410c9"],["music/C5w.JPG","e659479a345a60e73936705bc4f93296"],["music/C6w.JPG","d0f84cd102ae1c4e69898e8fc9f45afd"],["music/D4w.JPG","5c220f1f3c207187a89214174f68806f"],["music/D5w.JPG","1e4f7f226c288dac86609445d81513cb"],["music/E4w.JPG","4a49164f6186523dc9fbc130646a53a5"],["music/E5w.JPG","67ccfad8e161de63c4a0c9c4d32bd057"],["music/F4w.JPG","50c49b5451ce9e39de6a7b4225b6ac87"],["music/F5w.JPG","32900ad7eb1ae1fbc819e59be93670ca"],["music/G4w.JPG","17f8d182def82936a92a6d56e9530cfe"],["music/G5w.JPG","a075962a7cb2c4f9e19d99744cf4fc5e"],["navbar-top.css","1be3f9d8122cefc438975ce808b1601f"],["noleftturn.png","9eb957d51d9c1b3acb1df8fa9048b5a2"],["nouturn.png","58dff31353eb4bde179690f938ed3370"],["questions_ca_basic.json","8cac4c059dc98913642ae33858d42cf0"],["questions_jp_2.json2","0d08e91585ff64478ae6361b4cee2044"],["questions_jp_hira.json","b2060662322c47f6ae37650f1c2adb51"],["questions_jp_kanji_1.json","f72d3f9f1066dd9b20bc41375a278bf1"],["questions_us_ca_dl.json","3755245b87fba7f368c13d9c83f3a762"],["questions_us_ca_re.json","fa4b91edf6cbd90bc71c7d88f078bc3f"],["questions_us_fcc_tech.json","f16e2fc05e7aaa6900f277f00d770d35"],["questions_us_music_notes_1.json","51e9e5dae2d5621f66cf4fc2022701fc"],["questions_us_ny_dl.json","c2bf0eda762cd158ba4a4ad317c85565"],["rightlaneendskeepleft.png","ff2813bd00dd063cf8185a4d4cc96659"],["rxrsign.png","6130715148c3d1d4782435234ad6bc0c"],["schoolcrossing.png","3e7b73a8a3f62f05a3053f5725115565"],["screenshot1.png","73f272aea72452f27ca22f472356cc29"],["screenshot2.jpg","dc79f7a1a0a6e8e808b137e9082a597e"],["slipperywhenwet.png","0e20e37b4c13e6a00ff5a6df2ba32d39"],["sticky-footer-navbar.css","2faf06ca9acc7d4336869ec1d9a3e4d6"],["stopsign.png","93e7ed72a0ddfcd03a3b9d826c11acd0"],["success.mp3","6e8da1a9d7e899a15a1871cf97d4788b"],["trafficlightahead.png","f2346ef72ffad3d74c5efe810d66f088"],["twowaytraffic.png","fddb2659c43f5409f4a04a0525b20a05"],["us_fcc_tech/T-1.jpg","04241ac2362c63b93998c4907d97c6f1"],["us_fcc_tech/T-2.jpg","95e84889fa9ba056710aeb7649c0adcb"],["us_fcc_tech/T-3.jpg","06236c264e10c7173368e5a512e6d567"],["yieldsign.png","f7dbb7b4adb7497e33f579fe2545f1b3"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







