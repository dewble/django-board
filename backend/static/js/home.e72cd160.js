(function(t){function e(e){for(var o,n,s=e[0],l=e[1],c=e[2],v=0,u=[];v<s.length;v++)n=s[v],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},r={home:0},i=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("7cf4")},"402c":function(t,e,a){"use strict";var o=a("2b0e"),r=a("f309");o["a"].use(r["a"]),e["a"]=new r["a"]({})},"7cf4":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("MainMenu"),a("v-main",[a("HelloWorld")],1),a("v-footer",{attrs:{app:""}},[a("span",[t._v("© 2022")])])],1)},i=[],n=a("add6"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify (HOME) ")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),o("br"),t._v("please join our online "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},l=[],c={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},d=c,v=a("2877"),u=a("6544"),f=a.n(u),p=a("62ad"),m=a("a523"),g=a("adda"),h=a("0fd9"),b=Object(v["a"])(d,s,l,!1,null,null,null),w=b.exports;f()(b,{VCol:p["a"],VContainer:m["a"],VImg:g["a"],VRow:h["a"]});var y={components:{MainMenu:n["a"],HelloWorld:w},data:function(){return{}}},_=y,x=a("7496"),k=a("553a"),C=a("f6c4"),V=Object(v["a"])(_,r,i,!1,null,null,null),j=V.exports;f()(V,{VApp:x["a"],VFooter:k["a"],VMain:C["a"]});var O=a("402c");o["a"].config.productionTip=!1,new o["a"]({vuetify:O["a"],render:function(t){return t(j)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"static/img/logo.63a7d78d.svg"},add6:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Vue.js + Django CRUD Board")]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"/"}},[t._v("HOME")]),a("v-btn",{attrs:{text:"",href:"/blog/post/list"}},[t._v("Blog")]),a("v-btn",{attrs:{text:"",href:"/admin"}},[t._v("Admin")]),a("v-btn",{attrs:{text:"",href:"/post_list.html"}},[t._v("POST LIST")]),a("v-btn",{attrs:{text:"",href:"/post_detail.html"}},[t._v("POST Detail")]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),o),[a("v-icon",[t._v("mdi-account")]),t._v(" Annoymous "),a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:function(e){t.dialog.login=!0}}},[a("v-list-item-title",[t._v("Login")])],1),a("v-list-item",{on:{click:function(e){t.dialog.register=!0}}},[a("v-list-item-title",[t._v("Register")])],1),a("v-list-item",[a("v-list-item-title",[t._v("Logout")])],1),a("v-list-item",{on:{click:function(e){t.dialog.pwdchg=!0}}},[a("v-list-item-title",[t._v("Password change")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login form")]),a("v-spacer")],1),a("v-card-text",[a("v-form",{attrs:{id:"login-form"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account",name:"username",label:"Username",type:"text"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"password",label:"Password",type:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("login")}}},[t._v("Cancel")]),a("v-btn",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.save("login")}}},[t._v("Login")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"success",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Register form")]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"mdi-account",name:"username1",label:"Username",type:"text"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"password1",label:"Password",type:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"password2",label:"Password agian",type:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){t.dialog.register=!1}}},[t._v("Cancel")]),a("v-btn",{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){t.dialog.register=!1}}},[t._v("Register")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.pwdchg,callback:function(e){t.$set(t.dialog,"pwdchg",e)},expression:"dialog.pwdchg"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"warning",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Password change form")]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"old_password",label:"Old_Password",type:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"new_password1",label:"New_Password1",type:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"new_password2",label:"New_Password2",type:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){t.dialog.pwdchg=!1}}},[t._v("Cancel")]),a("v-btn",{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){t.dialog.pwdchg=!1}}},[t._v("Password change")])],1)],1)],1)],1)},r=[],i=a("bc3a"),n=a.n(i);n.a.defaults.xsrfCookieName="csrftoken",n.a.defaults.xsrfHeaderName="X-CSRFToken";var s={data:function(){return{drawer:null,dialog:{login:!1,register:!1,pwdchg:!1},me:{},items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}]}},methods:{cancel:function(t){console.log("cancel()...",t),"login"===t?this.dialog.login=!1:"register"===t?this.dialog.register=!1:"pwdchg"===t&&(this.dialog.pwdchg=!1)},save:function(t){console.log("save()...",t),"login"===t?(this.login(),this.dialog.login=!1):"register"===t?(this.register(),this.dialog.register=!1):"pwdchg"===t&&(this.pwdchg(),this.dialog.pwdchg=!1)},login:function(){var t=this;console.log("login()...");var e=new FormData(document.getElementById("login-form"));n.a.post("/api/login/",e).then((function(e){console.log("LOGIN POST RES",e),alert("user ".concat(e.data.username," login success")),t.me=e.data})).catch((function(t){console.log("LOGIN POST ERR.RESPONSE",t.response),alert("login error")}))}}},l=s,c=a("2877"),d=a("6544"),v=a.n(d),u=a("40dc"),f=a("5bc1"),p=a("8336"),m=a("b0af"),g=a("99d9"),h=a("169a"),b=a("4bd4"),w=a("132d"),y=a("8860"),_=a("da13"),x=a("5d23"),k=a("34c3"),C=a("e449"),V=a("f774"),j=a("2fa4"),O=a("8654"),P=a("71d9"),S=a("2a7f"),T=Object(c["a"])(l,o,r,!1,null,null,null);e["a"]=T.exports;v()(T,{VAppBar:u["a"],VAppBarNavIcon:f["a"],VBtn:p["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["b"],VDialog:h["a"],VForm:b["a"],VIcon:w["a"],VList:y["a"],VListItem:_["a"],VListItemContent:x["a"],VListItemIcon:k["a"],VListItemTitle:x["b"],VMenu:C["a"],VNavigationDrawer:V["a"],VSpacer:j["a"],VTextField:O["a"],VToolbar:P["a"],VToolbarTitle:S["a"]})}});
//# sourceMappingURL=home.e72cd160.js.map