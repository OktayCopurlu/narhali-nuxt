(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,6],{504:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return d}));var r=n(17),l=(n(83),n(117));function o(t,e){return c.apply(this,arguments)}function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(content,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getEntries({content_type:content,"fields.slug":e});case 2:return n=t.sent,t.abrupt("return",n.items[0].fields);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,e){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.apolloProvider.defaultClient,t.next=3,r.query({query:n});case 3:return l=t.sent,t.abrupt("return",l.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},505:function(t,e,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("29fe6b20",content,!0,{sourceMap:!1})},507:function(t,e,n){"use strict";n(505)},508:function(t,e,n){var r=n(42)(!1);r.push([t.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),r.push([t.i,'nav>ul *[data-v-3a455bca]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.large-display-none[data-v-3a455bca]{display:none}@media only screen and (max-width:768px){.large-display-none[data-v-3a455bca]{display:inline-block}}.urun-link-container[data-v-3a455bca]{margin:auto;display:flex;flex-wrap:wrap;width:90vw;align-items:center;justify-content:center}@media only screen and (max-width:600px){.urun-link-container[data-v-3a455bca]{width:95vw}.urun-link-container li[data-v-3a455bca]{width:100%;margin:1rem 0}.urun-link-container li img[data-v-3a455bca]{width:100%;height:auto}}.light[data-v-3a455bca]{background-color:grey;color:#fff}.dark[data-v-3a455bca]{background-color:#fff;color:grey}li[data-v-3a455bca]{width:25rem;list-style:none;margin:1rem}li a[data-v-3a455bca]{text-decoration:none}li a h3[data-v-3a455bca]{color:#000}li a p[data-v-3a455bca]{margin-top:1rem;color:red}img[data-v-3a455bca]{width:25rem;height:31.25rem}',""]),t.exports=r},509:function(t,e,n){"use strict";n.r(e);var r=n(48),l=Object(r.b)({props:["urun","content"]}),o=(n(507),n(71)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("nuxt-link",{attrs:{to:t.content+"/"+t.urun.slug}},[n("img",{attrs:{src:t.urun.resimlerCollection.items[0].url,alt:"urun resmi"}}),t._v(" "),n("h3",[t._v(t._s(t.urun.baslik))])])],1)}),[],!1,null,"3a455bca",null);e.default=component.exports},514:function(t,e,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("2029fcee",content,!0,{sourceMap:!1})},517:function(t,e,n){"use strict";n(514)},518:function(t,e,n){var r=n(42)(!1);r.push([t.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),r.push([t.i,'nav>ul *[data-v-3c178bb7]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.large-display-none[data-v-3c178bb7]{display:none}@media only screen and (max-width:768px){.large-display-none[data-v-3c178bb7]{display:inline-block}}.urun-link-container[data-v-3c178bb7]{margin:auto;display:flex;flex-wrap:wrap;width:90vw;align-items:center;justify-content:center}@media only screen and (max-width:600px){.urun-link-container[data-v-3c178bb7]{width:95vw}.urun-link-container li[data-v-3c178bb7]{width:100%;margin:1rem 0}.urun-link-container li img[data-v-3c178bb7]{width:100%;height:auto}}.light[data-v-3c178bb7]{background-color:grey;color:#fff}.dark[data-v-3c178bb7]{background-color:#fff;color:grey}main h2[data-v-3c178bb7]{text-align:center;margin-top:3rem}main section[data-v-3c178bb7]{display:flex;justify-content:space-around}ul[data-v-3c178bb7]{display:flex;width:69%;overflow:hidden}ul li[data-v-3c178bb7]{list-style-type:none}ul li img[data-v-3c178bb7]{width:100%}',""]),t.exports=r},532:function(t,e,n){var content=n(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("7f8448d6",content,!0,{sourceMap:!1})},535:function(t,e,n){"use strict";n.r(e);var r=n(48),l=Object(r.b)({setup:function(){var t=Object(r.e)(0);return{clickRight:function(){t.value++},resim1:Object(r.a)((function(){return"https://picsum.photos/1920/1080? + ".concat(t.value+1)})),resim2:Object(r.a)((function(){return"https://picsum.photos/1920/1080? + ".concat(t.value+2)})),resim3:Object(r.a)((function(){return"https://picsum.photos/1920/1080? + ".concat(t.value+3)})),clickLeft:function(){t.value--}}}}),o=(n(517),n(71)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h2",[t._v("YENI CIKANLAR")]),t._v(" "),n("section",[n("button",{on:{click:t.clickLeft}},[n("i",{staticClass:"fas fa-arrow-left"})]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/hali"}},[n("img",{attrs:{src:t.resim1,alt:"hali resimleri"}})])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/hali"}},[n("img",{attrs:{src:t.resim2,alt:"hali resimleri"}})])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/hali"}},[n("img",{attrs:{src:t.resim3,alt:"hali resimleri"}})])],1)]),t._v(" "),n("button",{on:{click:t.clickRight}},[n("i",{staticClass:"fas fa-arrow-right"})])])])}),[],!1,null,"3c178bb7",null);e.default=component.exports},562:function(t,e,n){"use strict";n(532)},563:function(t,e,n){var r=n(42)(!1);r.push([t.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),r.push([t.i,'nav>ul *[data-v-60ad4842]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.large-display-none[data-v-60ad4842]{display:none}@media only screen and (max-width:768px){.large-display-none[data-v-60ad4842]{display:inline-block}}.urun-link-container[data-v-60ad4842]{margin:auto;display:flex;flex-wrap:wrap;width:90vw;align-items:center;justify-content:center}@media only screen and (max-width:600px){.urun-link-container[data-v-60ad4842]{width:95vw}.urun-link-container li[data-v-60ad4842]{width:100%;margin:1rem 0}.urun-link-container li img[data-v-60ad4842]{width:100%;height:auto}}.light[data-v-60ad4842]{background-color:grey;color:#fff}.dark[data-v-60ad4842]{background-color:#fff;color:grey}',""]),t.exports=r},579:function(t,e,n){"use strict";n.r(e);var r=n(17),l=(n(83),n(219)),o=n(504),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.next=3,Object(o.b)(n,l.e);case 3:return r=e.sent,data=r.magazalarimizCollection.items,e.abrupt("return",{data:data});case 6:case"end":return e.stop()}}),e)})))()},head:{title:"title",meta:[{hid:"description",name:"description",content:"some page description"}]}},d=(n(562),n(71)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("YeniCikanlar"),t._v(" "),n("ul",{staticClass:"urun-link-container"},t._l(t.data,(function(t){return n("UrunLink",{key:t.slug,attrs:{urun:t,content:"magazalarimiz"}})})),1)],1)}),[],!1,null,"60ad4842",null);e.default=component.exports;installComponents(component,{YeniCikanlar:n(535).default,UrunLink:n(509).default})}}]);