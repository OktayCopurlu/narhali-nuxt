(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(290),o=r.createClient({space:"smvwsw82via7",accessToken:"Qypj9WSPb7heGA0dqmU9W9a_085DQ46LlUbnwmQUrds",environment:"master"})},219:function(t,n,e){"use strict";e.d(n,"a",(function(){return k})),e.d(n,"c",(function(){return x})),e.d(n,"e",(function(){return w})),e.d(n,"f",(function(){return O})),e.d(n,"d",(function(){return j})),e.d(n,"b",(function(){return _})),e.d(n,"g",(function(){return C})),e.d(n,"h",(function(){return z}));var r,o,l,c,d,f,m,v,y=e(81),h=e(56),k=Object(h.b)(r||(r=Object(y.a)(["\n  query {\n    halilarCollection {\n      items {\n        baslik\n        aciklama\n        slug\n        resimlerCollection {\n          items {\n            url\n          }\n        }\n        sys {\n          id\n        }\n      }\n    }\n  }\n"]))),x=Object(h.b)(o||(o=Object(y.a)(["\n  query {\n    assetCollection {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n"]))),w=Object(h.b)(l||(l=Object(y.a)(["\n  query {\n    magazalarimizCollection {\n      items {\n        baslik\n        slug\n        resimlerCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"]))),O=Object(h.b)(c||(c=Object(y.a)(["\n  query {\n    perdelerCollection {\n      items {\n        baslik\n        slug\n        resimlerCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"]))),j=Object(h.b)(d||(d=Object(y.a)(["\n  query {\n    kaymazHalilarCollection {\n      items {\n        baslik\n        slug\n        resimlerCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"]))),_=Object(h.b)(f||(f=Object(y.a)(["\n  query {\n    evDekorasyonCollection {\n      items {\n        baslik\n        slug\n        resimlerCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"]))),C=Object(h.b)(m||(m=Object(y.a)(["\n  query {\n    yataklarCollection {\n      items {\n        baslik\n        slug\n        resimlerCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"]))),z=Object(h.b)(v||(v=Object(y.a)(["\n  query {\n    hakkimizdaCollection {\n      items {\n        baslik\n        slug\n        aciklama\n        resimlerCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"])))},261:function(t,n,e){var content=e(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("ebee6298",content,!0,{sourceMap:!1})},274:function(t,n,e){var content=e(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("2130efaf",content,!0,{sourceMap:!1})},275:function(t,n,e){var content=e(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("5def9f22",content,!0,{sourceMap:!1})},276:function(t,n,e){var content=e(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("9ae5057e",content,!0,{sourceMap:!1})},300:function(t,n,e){"use strict";var r=e(18),o=(e(83),e(48)),l=e(117),c=e(219),d=Object(o.b)({setup:function(){var t=Object(o.e)(""),n=Object(o.h)();return(0,Object(o.i)(Object(r.a)(regeneratorRuntime.mark((function e(){var r,o,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=null===(r=n.app)||void 0===r?void 0:r.apolloProvider.defaultClient,e.next=3,o.query({query:c.c});case 3:return d=e.sent,e.next=6,l.a.getAsset(d.data.assetCollection.items[Math.floor(Math.random()*d.data.assetCollection.items.length)].sys.id);case 6:f=e.sent,t.value=f.fields.file.url;case 8:case"end":return e.stop()}}),e)})))).fetch)(),{imageURL:t}},head:function(){return{title:"title",meta:[{hid:"description",name:"description",content:"some page description"}]}}}),f=(e(428),e(71)),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("Navigation",{attrs:{resim:t.imageURL}}),t._v(" "),e("Nuxt"),t._v(" "),e("Footer")],1)}),[],!1,null,"3a5550dc",null);n.a=component.exports;installComponents(component,{Navigation:e(490).default,Footer:e(491).default})},302:function(t,n,e){e(303),e(304),t.exports=e(307)},379:function(t,n,e){"use strict";e(261)},380:function(t,n,e){var r=e(42)(!1);r.push([t.i,"h1[data-v-95ab159a]{font-size:20px}",""]),t.exports=r},412:function(t,n){},428:function(t,n,e){"use strict";e(274)},429:function(t,n,e){var r=e(42)(!1);r.push([t.i,'.main[data-v-3a5550dc]:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;background-size:cover;background-position:50%;opacity:.25}',""]),t.exports=r},430:function(t,n,e){"use strict";e(275)},431:function(t,n,e){var r=e(42)(!1);r.push([t.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),r.push([t.i,'nav>ul *[data-v-62ba4dd9]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.large-display-none[data-v-62ba4dd9]{display:none}@media only screen and (max-width:768px){.large-display-none[data-v-62ba4dd9]{display:inline-block}}.urun-link-container[data-v-62ba4dd9]{margin:auto;display:flex;flex-wrap:wrap;width:90vw;align-items:center;justify-content:center}@media only screen and (max-width:600px){.urun-link-container[data-v-62ba4dd9]{width:95vw}.urun-link-container li[data-v-62ba4dd9]{width:100%;margin:1rem 0}.urun-link-container li img[data-v-62ba4dd9]{width:100%;height:auto}}.light[data-v-62ba4dd9]{background-color:grey;color:#fff}.dark[data-v-62ba4dd9]{background-color:#fff;color:grey}nav[data-v-62ba4dd9]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:auto;min-height:23rem}nav #bar[data-v-62ba4dd9]{display:none}nav label[data-v-62ba4dd9]{font-size:1.7rem;color:#fff;cursor:pointer;padding:1rem}nav ul[data-v-62ba4dd9]{display:flex;justify-content:space-around;align-items:flex-end;height:23rem}nav ul li[data-v-62ba4dd9]{margin-bottom:1rem;list-style:none}nav ul li a[data-v-62ba4dd9]{font-size:1.8vw;color:#fff;text-decoration:none}nav ul li a[data-v-62ba4dd9]:hover{color:#e6e6e6;text-decoration:underline;-webkit-text-decoration-color:#ccc;text-decoration-color:#ccc}@media only screen and (max-width:768px){nav ul[data-v-62ba4dd9]{display:block;transform:translateX(-200px);transition:all .2s linear;padding-left:1rem}nav ul li[data-v-62ba4dd9]{margin-top:.3rem;list-style:none}nav ul li a[data-v-62ba4dd9]{font-size:1.2rem;color:#fff;text-decoration:none}nav #bar:checked~ul[data-v-62ba4dd9]{transform:translateX(0);transition:all .2s linear}}',""]),t.exports=r},432:function(t,n,e){"use strict";e(276)},433:function(t,n,e){var r=e(42)(!1);r.push([t.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),r.push([t.i,'nav>ul *{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.large-display-none{display:none}@media only screen and (max-width:768px){.large-display-none{display:inline-block}}.urun-link-container{margin:auto;display:flex;flex-wrap:wrap;width:90vw;align-items:center;justify-content:center}@media only screen and (max-width:600px){.urun-link-container{width:95vw}.urun-link-container li{width:100%;margin:1rem 0}.urun-link-container li img{width:100%;height:auto}}.light{background-color:grey;color:#fff}.dark{background-color:#fff;color:grey}a{text-decoration:none}.footer{text-align:center}',""]),t.exports=r},470:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return r})),e.d(n,"mutations",(function(){return o}));var r=function(){return{page:" "}},o={SET_PAGE:function(t,n){t.page=n,console.log(t.page)}}},490:function(t,n,e){"use strict";e.r(n);e(25),e(22),e(27),e(13),e(28),e(23),e(29);var r=e(5),o=e(48);function l(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var c=Object(o.b)({props:["resim"],setup:function(){var t=Object(o.d)({navList:[{link:"/",text:"Ana Sayfa"},{link:"/hakkimizda",text:"Hakkimizda"},{link:"/halilar",text:"Halilar"},{link:"/perdeler",text:"Perdeler"},{link:"/yataklar",text:"Yataklar"},{link:"/kaymaz-halilar",text:"Kaymaz Halilar"},{link:"/ev-dekorasyon",text:"Ev Dekorasyon"},{link:"/magazalarimiz",text:"Magazalarimiz"}]});return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(o.g)(t))}}),d=c,f=(e(430),e(71)),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{style:"background-image: url("+t.resim+")"},[t._m(0),e("input",{attrs:{type:"checkbox",name:"bar",id:"bar"}}),t._v(" "),e("ul",t._l(t.navList,(function(element){return e("li",{key:element.link},[e("nuxt-link",{attrs:{to:element.link}},[t._v(" "+t._s(element.text))])],1)})),0)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("label",{staticClass:"large-display-none",attrs:{for:"bar"}},[n("i",{staticClass:"fas fa-bars"})])}],!1,null,"62ba4dd9",null);n.default=component.exports},491:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{icons:["mdi-facebook","mdi-instagram"]}}},o=(e(432),e(71)),l=e(170),c=e.n(l),d=e(502),f=e(212),m=e(135),v=e(503),y=e(500),h=e(501),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-footer",{attrs:{padless:""}},[e("v-card",{staticClass:"flex",staticStyle:{"background-color":"gray","border-radius":"0",color:"white"},attrs:{flat:"",tile:""}},[e("v-card-title",{staticClass:"teal"},[e("strong",{staticClass:"subheading"},[t._v("Sosyal medyada magazamizi ziyaret edin!")]),t._v(" "),e("v-spacer"),t._v(" "),t._l(t.icons,(function(n){return e("v-btn",{key:n,staticClass:"mx-4",attrs:{dark:"",icon:""}},[e("a",{staticClass:"light",attrs:{href:"https://www.instagram.com/narhaliperde1/",target:"_blank"}},[e("v-icon",{attrs:{size:"24px"}},[t._v("\n            "+t._s(n)+"\n          ")])],1)])}))],2),t._v(" "),e("v-card-text",{staticClass:"py-2 white--text text-center footer"},[e("span",{staticClass:"light"},[t._v(" "+t._s((new Date).getFullYear())+" —")]),t._v(" "),e("strong",{staticClass:"light"},[t._v("Oktay")])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardText:m.a,VCardTitle:m.b,VFooter:v.a,VIcon:y.a,VSpacer:h.a})},94:function(t,n,e){"use strict";var r=e(48),o=Object(r.b)({props:["error"],setup:function(){return{name:"EmptyLayout",layout:"empty",pageNotFound:"404 Not Found",otherError:"An error occurred"}}}),l=(e(379),e(71)),c=e(170),d=e.n(c),f=e(499),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"95ab159a",null);n.a=component.exports;d()(component,{VApp:f.a})}},[[302,17,1,18]]]);