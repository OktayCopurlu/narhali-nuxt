(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5],{504:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(17),o=(n(83),n(117));function c(e,t){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function e(content,t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getEntries({content_type:content,"fields.slug":t});case 2:return n=e.sent,e.abrupt("return",n.items[0].fields);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.apolloProvider.defaultClient,e.next=3,r.query({query:n});case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},505:function(e,t,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("29fe6b20",content,!0,{sourceMap:!1})},507:function(e,t,n){"use strict";n(505)},508:function(e,t,n){var r=n(42)(!1);r.push([e.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),r.push([e.i,'nav>ul *[data-v-3a455bca]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.large-display-none[data-v-3a455bca]{display:none}@media only screen and (max-width:768px){.large-display-none[data-v-3a455bca]{display:inline-block}}.urun-link-container[data-v-3a455bca]{margin:auto;display:flex;flex-wrap:wrap;width:90vw;align-items:center;justify-content:center}@media only screen and (max-width:600px){.urun-link-container[data-v-3a455bca]{width:95vw}.urun-link-container li[data-v-3a455bca]{width:100%;margin:1rem 0}.urun-link-container li img[data-v-3a455bca]{width:100%;height:auto}}.light[data-v-3a455bca]{background-color:grey;color:#fff}.dark[data-v-3a455bca]{background-color:#fff;color:grey}li[data-v-3a455bca]{width:25rem;list-style:none;margin:1rem}li a[data-v-3a455bca]{text-decoration:none}li a h3[data-v-3a455bca]{color:#000}li a p[data-v-3a455bca]{margin-top:1rem;color:red}img[data-v-3a455bca]{width:25rem;height:31.25rem}',""]),e.exports=r},509:function(e,t,n){"use strict";n.r(t);var r=n(48),o=Object(r.b)({props:["urun","content"]}),c=(n(507),n(71)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("nuxt-link",{attrs:{to:e.content+"/"+e.urun.slug}},[n("img",{attrs:{src:e.urun.resimlerCollection.items[0].url,alt:"urun resmi"}}),e._v(" "),n("h3",[e._v(e._s(e.urun.baslik))])])],1)}),[],!1,null,"3a455bca",null);t.default=component.exports},521:function(e,t,n){var content=n(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("0a65836c",content,!0,{sourceMap:!1})},540:function(e,t,n){"use strict";n(521)},541:function(e,t,n){var r=n(42)(!1);r.push([e.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),r.push([e.i,'nav>ul *[data-v-2cfe729e]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.large-display-none[data-v-2cfe729e]{display:none}@media only screen and (max-width:768px){.large-display-none[data-v-2cfe729e]{display:inline-block}}.urun-link-container[data-v-2cfe729e]{margin:auto;display:flex;flex-wrap:wrap;width:90vw;align-items:center;justify-content:center}@media only screen and (max-width:600px){.urun-link-container[data-v-2cfe729e]{width:95vw}.urun-link-container li[data-v-2cfe729e]{width:100%;margin:1rem 0}.urun-link-container li img[data-v-2cfe729e]{width:100%;height:auto}}.light[data-v-2cfe729e]{background-color:grey;color:#fff}.dark[data-v-2cfe729e]{background-color:#fff;color:grey}',""]),e.exports=r},568:function(e,t,n){"use strict";n.r(t);var r=n(17),o=(n(83),n(38),n(219)),c=n(504),l={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,r=e.route,e.store.commit("SET_PAGE",r.name),t.next=4,Object(c.b)(n,o.a);case 4:return l=t.sent,data=l.halilarCollection.items,t.abrupt("return",{data:data});case 7:case"end":return t.stop()}}),t)})))()},head:{title:"title",meta:[{hid:"description",name:"description",content:"some page description"}]}},d=(n(540),n(71)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"urun-link-container"},e._l(e.data,(function(e){return n("UrunLink",{key:e.slug,attrs:{urun:e,content:"halilar"}})})),1)])}),[],!1,null,"2cfe729e",null);t.default=component.exports;installComponents(component,{UrunLink:n(509).default})}}]);