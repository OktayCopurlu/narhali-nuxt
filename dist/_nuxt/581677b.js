(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,6],{504:function(e,t,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("018d5806",content,!0,{sourceMap:!1})},505:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var r=n(18),l=(n(83),n(117));function o(){return c.apply(this,arguments)}function c(){return c=Object(r.a)(regeneratorRuntime.mark((function e(){var content,t,n,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return content=r.length>0&&void 0!==r[0]?r[0]:"magazalarimiz",t=r.length>1?r[1]:void 0,e.next=4,l.a.getEntries({content_type:content,"fields.slug":t});case 4:return n=e.sent,e.abrupt("return",n.items[0].fields);case 6:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function d(e,t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.apolloProvider.defaultClient,e.next=3,r.query({query:n});case 3:return l=e.sent,e.abrupt("return",l.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},506:function(e,t,n){"use strict";n(504)},507:function(e,t,n){var r=n(42)(!1);r.push([e.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),r.push([e.i,'nav>ul *[data-v-62edf0e4]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.large-display-none[data-v-62edf0e4]{display:none}@media only screen and (max-width:768px){.large-display-none[data-v-62edf0e4]{display:inline-block}}.urun-link-container[data-v-62edf0e4]{margin:auto;display:flex;flex-wrap:wrap;width:90vw;align-items:center;justify-content:center}@media only screen and (max-width:600px){.urun-link-container[data-v-62edf0e4]{width:95vw}.urun-link-container li[data-v-62edf0e4]{width:100%;margin:1rem 0}.urun-link-container li img[data-v-62edf0e4]{width:100%;height:auto}}.light[data-v-62edf0e4]{background-color:grey;color:#fff}.dark[data-v-62edf0e4]{background-color:#fff;color:grey}li[data-v-62edf0e4]{width:25rem;list-style:none;margin:1rem}li a[data-v-62edf0e4]{text-decoration:none}li a h3[data-v-62edf0e4]{color:#000}li a p[data-v-62edf0e4]{margin-top:1rem;color:red}img[data-v-62edf0e4]{width:25rem;height:31.25rem}',""]),e.exports=r},508:function(e,t,n){"use strict";n.r(t);var r=n(48),l=Object(r.b)({props:["urun"]}),o=(n(506),n(71)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("nuxt-link",{attrs:{to:"/"+e.urun.slug}},[n("img",{attrs:{src:e.urun.resimlerCollection.items[0].url,alt:"urun resmi"}}),e._v(" "),n("h3",[e._v(e._s(e.urun.baslik))])])],1)}),[],!1,null,"62edf0e4",null);t.default=component.exports},510:function(e,t,n){var content=n(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("2029fcee",content,!0,{sourceMap:!1})},514:function(e,t,n){"use strict";n(510)},515:function(e,t,n){var r=n(42)(!1);r.push([e.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),r.push([e.i,'nav>ul *[data-v-3c178bb7]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.large-display-none[data-v-3c178bb7]{display:none}@media only screen and (max-width:768px){.large-display-none[data-v-3c178bb7]{display:inline-block}}.urun-link-container[data-v-3c178bb7]{margin:auto;display:flex;flex-wrap:wrap;width:90vw;align-items:center;justify-content:center}@media only screen and (max-width:600px){.urun-link-container[data-v-3c178bb7]{width:95vw}.urun-link-container li[data-v-3c178bb7]{width:100%;margin:1rem 0}.urun-link-container li img[data-v-3c178bb7]{width:100%;height:auto}}.light[data-v-3c178bb7]{background-color:grey;color:#fff}.dark[data-v-3c178bb7]{background-color:#fff;color:grey}main h2[data-v-3c178bb7]{text-align:center;margin-top:3rem}main section[data-v-3c178bb7]{display:flex;justify-content:space-around}ul[data-v-3c178bb7]{display:flex;width:69%;overflow:hidden}ul li[data-v-3c178bb7]{list-style-type:none}ul li img[data-v-3c178bb7]{width:100%}',""]),e.exports=r},526:function(e,t,n){var content=n(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("0fd3e282",content,!0,{sourceMap:!1})},530:function(e,t,n){"use strict";n.r(t);var r=n(48),l=Object(r.b)({setup:function(){var e=Object(r.e)(0);return{clickRight:function(){e.value++},resim1:Object(r.a)((function(){return"https://picsum.photos/1920/1080? + ".concat(e.value+1)})),resim2:Object(r.a)((function(){return"https://picsum.photos/1920/1080? + ".concat(e.value+2)})),resim3:Object(r.a)((function(){return"https://picsum.photos/1920/1080? + ".concat(e.value+3)})),clickLeft:function(){e.value--}}}}),o=(n(514),n(71)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h2",[e._v("YENI CIKANLAR")]),e._v(" "),n("section",[n("button",{on:{click:e.clickLeft}},[n("i",{staticClass:"fas fa-arrow-left"})]),e._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/hali"}},[n("img",{attrs:{src:e.resim1,alt:"hali resimleri"}})])],1),e._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/hali"}},[n("img",{attrs:{src:e.resim2,alt:"hali resimleri"}})])],1),e._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/hali"}},[n("img",{attrs:{src:e.resim3,alt:"hali resimleri"}})])],1)]),e._v(" "),n("button",{on:{click:e.clickRight}},[n("i",{staticClass:"fas fa-arrow-right"})])])])}),[],!1,null,"3c178bb7",null);t.default=component.exports},548:function(e,t,n){"use strict";n(526)},549:function(e,t,n){var r=n(42)(!1);r.push([e.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),r.push([e.i,'nav>ul *[data-v-20db29b1]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.large-display-none[data-v-20db29b1]{display:none}@media only screen and (max-width:768px){.large-display-none[data-v-20db29b1]{display:inline-block}}.urun-link-container[data-v-20db29b1]{margin:auto;display:flex;flex-wrap:wrap;width:90vw;align-items:center;justify-content:center}@media only screen and (max-width:600px){.urun-link-container[data-v-20db29b1]{width:95vw}.urun-link-container li[data-v-20db29b1]{width:100%;margin:1rem 0}.urun-link-container li img[data-v-20db29b1]{width:100%;height:auto}}.light[data-v-20db29b1]{background-color:grey;color:#fff}.dark[data-v-20db29b1]{background-color:#fff;color:grey}',""]),e.exports=r},562:function(e,t,n){"use strict";n.r(t);var r=n(18),l=(n(83),n(219)),o=n(505),c=n(301),d={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,c.state.page="magazalarimiz",t.next=4,Object(o.b)(n,l.e);case 4:return r=t.sent,data=r.magazalarimizCollection.items,t.abrupt("return",{data:data});case 7:case"end":return t.stop()}}),t)})))()},head:{title:"title",meta:[{hid:"description",name:"description",content:"some page description"}]}},f=(n(548),n(71)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("YeniCikanlar"),e._v(" "),n("ul",{staticClass:"urun-link-container"},e._l(e.data,(function(e){return n("UrunLink",{key:e.slug,attrs:{urun:e}})})),1)],1)}),[],!1,null,"20db29b1",null);t.default=component.exports;installComponents(component,{YeniCikanlar:n(530).default,UrunLink:n(508).default})}}]);