(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Tea-Hub/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01c8":function(t,e,n){"use strict";var a=n("bada"),o=n.n(a);o.a},"0d02":function(t,e,n){"use strict";var a=n("dffe"),o=n.n(a);o.a},1947:function(t,e,n){"use strict";var a=n("eba7"),o=n.n(a);o.a},"1c23":function(t,e,n){},"1c69":function(t,e,n){"use strict";var a=n("f194"),o=n.n(a);o.a},"477b":function(t,e,n){},"4c86":function(t,e,n){"use strict";var a=n("55bc"),o=n.n(a);o.a},"55bc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("Banner",{attrs:{windowTop:t.windowTop},on:{closeMenu:function(e){return t.setMenuState(!1)}}}),n("MobileMenuBar",{attrs:{windowTop:t.windowTop},on:{openMenu:function(e){return t.setMenuState(!0)}}}),n("MenuItems",{class:{"menu-mobile":!0,open:t.menuOpened},attrs:{role:t.role,route:this.$route.name},on:{closeMenu:function(e){return t.setMenuState(!1)}}}),n("MenuItems",{staticClass:"menu-desktop",attrs:{role:t.role,route:this.$route.name}})],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{banner:!0,sticky:t.windowTop>55},on:{click:function(e){return t.$emit("closeMenu")}}},[n("router-link",{attrs:{to:"/"}},[n("h1",[t._v("Tea Hub")])])],1)},u=[],l={name:"banner",props:["windowTop"]},d=l,p=(n("94d5"),n("2877")),f=Object(p["a"])(d,c,u,!1,null,"d2b2e1ec",null),h=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:{"mobile-bar":!0,sticky:t.windowTop>55},on:{click:function(e){return t.$emit("openMenu")}}},[n("MenuIcon")],1)},m=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticStyle:{"enable-background":"new 0 0 297 297"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 297 297","xml:space":"preserve"}},[n("g",[n("path",{attrs:{d:"M279.368,24.726H102.992c-9.722,0-17.632,7.91-17.632,\n        17.632V67.92c0,9.722,7.91,17.632,17.632,17.632h176.376c9.722,\n        0,17.632-7.91,17.632-17.632V42.358C297,32.636,289.09,24.726,279.368,\n        24.726z"}}),n("path",{attrs:{d:"M279.368,118.087H102.992c-9.722,0-17.632,7.91-17.632,\n        17.632v25.562c0,9.722,7.91,17.632,17.632,17.632h176.376c9.722,\n        0,17.632-7.91,17.632-17.632v-25.562C297,125.997,289.09,118.087,\n        279.368,118.087z"}}),n("path",{attrs:{d:"M279.368,211.448H102.992c-9.722,0-17.632,7.91-17.632,\n        17.633v25.561c0,9.722,7.91,17.632,17.632,17.632h176.376c9.722,\n        0,17.632-7.91,17.632-17.632v-25.561C297,219.358,289.09,211.448,\n        279.368,211.448z"}}),n("path",{attrs:{d:"M45.965,24.726H17.632C7.91,24.726,0,32.636,0,42.358V67.92c0,\n        9.722,7.91,17.632,17.632,17.632h28.333c9.722,0,17.632-7.91,\n        17.632-17.632V42.358C63.597,32.636,55.687,24.726,45.965,24.726z"}}),n("path",{attrs:{d:"M45.965,118.087H17.632C7.91,118.087,0,125.997,0,135.719v25.562c0,\n        9.722,7.91,17.632,17.632,17.632h28.333c9.722,0,17.632-7.91,\n        17.632-17.632v-25.562C63.597,125.997,55.687,118.087,45.965,118.087z"}}),n("path",{attrs:{d:"M45.965,211.448H17.632C7.91,211.448,0,219.358,0,229.081v25.561c0,\n        9.722,7.91,17.632,17.632,17.632h28.333c9.722,0,17.632-7.91,\n        17.632-17.632v-25.561C63.597,219.358,55.687,211.448,45.965,211.448z"}})])])},b=[],g=(n("7614"),{}),_=Object(p["a"])(g,y,b,!1,null,"119fcff6",null),w=_.exports,M={name:"mobile-menu-bar",props:["windowTop"],components:{MenuIcon:w}},O=M,x=(n("72b9"),Object(p["a"])(O,v,m,!1,null,"2fddee4c",null)),$=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{on:{click:function(e){return t.$emit("closeMenu")}}},[n("router-link",{class:{active:"projects"===t.route},attrs:{to:"/projects"}},[t._v("\n        Projekty\n    ")]),"admin"===t.role?n("router-link",{class:{active:"calendar"===t.route},attrs:{to:"/calendar"}},[t._v("\n        Kalendarz\n    ")]):t._e(),"admin"===t.role?n("router-link",{class:{active:"other"===t.route},attrs:{to:"/other"}},[t._v("\n        Inne\n    ")]):t._e()],1)},q=[],k={name:"menu-items",props:["route","role"]},E=k,C=(n("8801"),Object(p["a"])(E,j,q,!1,null,"739a7678",null)),D=C.exports,T={name:"Header",components:{Banner:h,MobileMenuBar:$,MenuItems:D},data:function(){return{role:"admin",menuOpened:!1,windowTop:0}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){this.windowTop=window.top.scrollY},setMenuState:function(t){var e=document.body;e.classList.toggle("noscroll",t),this.menuOpened=t}}},S=T,P=(n("c99f"),Object(p["a"])(S,s,i,!1,null,"41ba71ac",null)),I=P.exports,N={name:"app",components:{Header:I},mounted:function(){this.$store.dispatch("getQuotes"),this.$store.dispatch("getDates")}},A=N,Q=(n("5c0b"),Object(p["a"])(A,o,r,!1,null,null,null)),H=Q.exports,z=n("8c4f"),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("Quote",{staticClass:"dashboard-layout"}),n("Dates",{staticClass:"dashboard-layout"}),n("div",{staticClass:"dashboard-background"})],1)},B=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quote"},[n("p",[t._v(t._s(t.randomQuote.strong))])])},L=[],F={name:"quote",computed:{quotes:function(){return this.$store.state.quotes},randomQuote:function(){if(0!==this.quotes.length){var t=0,e=this.quotes.length,n=t+Math.floor((e-t)*Math.random());return this.quotes[n]}return""}}},U=F,V=(n("7bc6"),Object(p["a"])(U,R,L,!1,null,"4b1f70d3",null)),W=V.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!==t.upcomingEvents.length?n("div",{staticClass:"dates"},t._l(t.daysInAdvance+1,(function(e){return n("section",{key:e},[0!==t.eventFilter(e-1).length?n("div",{staticClass:"dates-block"},[n("p",{staticClass:"dates-heading"},[t._v("\n                "+t._s(e-1===0?"Dzisiaj":"")+"\n                "+t._s(e-1===1?"Jutro":"")+"\n                "+t._s(e-1>1?"Za "+(e-1)+" dni":"")+"\n            ")]),t._l(t.eventFilter(e-1),(function(e){return n("span",{key:e.id},[n("p",[t._v(t._s(e.event))])])}))],2):t._e()])})),0):t._e()},Z=[],K=(n("8e6e"),n("456d"),n("bd86"));n("ac6a");function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(Object(n),!0).forEach((function(e){Object(K["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var tt={name:"quote",data:function(){return{daysInAdvance:7}},computed:{upcomingEvents:function(){var t=[],e=864e5,n=this.daysInAdvance*e,a=new Date,o=a.getMonth(),r=a.getFullYear(),s=new Date(r,o,a.getDate()),i=s.getTime(),c=this.$store.state.dates;return c.forEach((function(a){var s=parseInt(a.day,10),c=parseInt(a.month,10)-1,u=r;a.year&&(u=parseInt(a.year,10)),c<o&&(u=r+1);var l=new Date(u,c,s),d=l.getTime(),p=d-i;if(p<=n&&p>-1*e){var f=Math.floor(p/e);t.push(X({},a,{daysLeft:f}))}})),t}},methods:{eventFilter:function(t){var e=this.upcomingEvents,n=e.filter((function(e){return e.daysLeft===t}));return n}}},et=tt,nt=(n("0d02"),Object(p["a"])(et,Y,Z,!1,null,"e9937a14",null)),at=nt.exports,ot={name:"dashboard",components:{Quote:W,Dates:at}},rt=ot,st=(n("4c86"),Object(p["a"])(rt,J,B,!1,null,"5e198386",null)),it=st.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects"},[n("p",{on:{click:function(e){return t.increment()}}},[t._v("Projekty")])])},ut=[],lt={name:"projects"},dt=lt,pt=Object(p["a"])(dt,ct,ut,!1,null,null,null),ft=pt.exports,ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendar"},[n("p",[t._v("Calendar")])])}],mt={name:"calendar"},yt=mt,bt=Object(p["a"])(yt,ht,vt,!1,null,null,null),gt=bt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"other"},[n("Tabs",{attrs:{viewData:t.viewData,view:t.view},on:{changeTab:function(e){return t.switchTab(e)}}}),"quotes"===t.view?n("Quotes"):t._e(),"dates"===t.view?n("Dates"):t._e()],1)},wt=[],Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"tabs"},t._l(t.viewData,(function(e){return n("div",{key:e.label,staticClass:"tabs-label",class:{active:t.view===e.label},on:{click:function(n){return t.$emit("changeTab",e.label)}}},[t._v("\n        "+t._s(e.text)+"\n    ")])})),0)},Ot=[],xt={name:"tabs",props:["view","viewData"]},$t=xt,jt=(n("fe5c"),Object(p["a"])($t,Mt,Ot,!1,null,"994e5ca0",null)),qt=jt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"quote"},[t.modalOpen?n("AddModal",{attrs:{type:"quote"},on:{closeModal:t.closeModal}}):t._e(),t.editModalOpen?n("EditModal",{attrs:{type:"quote",data:this.editedData},on:{closeModal:t.closeEditModal}}):t._e(),t._l(t.quotes,(function(e){return n("div",{key:e.id,staticClass:"quote-container",on:{click:function(n){return t.openEditModal(e)}}},[n("p",{staticClass:"quote-text"},[t._v("\n            "+t._s(e.text)+" "),n("strong",[t._v(" "+t._s(e.strong)+" ")])])])})),n("section",{on:{click:t.openModal}},[n("AddButton")],1)],2)},Et=[],Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button"},[t._v("+")])},Dt=[],Tt={name:"add-button"},St=Tt,Pt=(n("1c69"),Object(p["a"])(St,Ct,Dt,!1,null,"442011aa",null)),It=Pt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"modal-box"},[n("div",{staticClass:"modal-mask",on:{click:function(e){return t.$emit("closeModal")}}}),n("section",{staticClass:"modal-proper"},[n("header",[t._v("Dodaj")]),"quote"===t.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote.text,expression:"quote.text"}],attrs:{placeholder:"Początek...",spellcheck:"false"},domProps:{value:t.quote.text},on:{input:function(e){e.target.composing||t.$set(t.quote,"text",e.target.value)}}}):t._e(),"quote"===t.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote.strong,expression:"quote.strong"}],staticClass:"bold",attrs:{placeholder:"Pointa...",spellcheck:"false"},domProps:{value:t.quote.strong},on:{input:function(e){e.target.composing||t.$set(t.quote,"strong",e.target.value)}}}):t._e(),"date"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.date.day,expression:"date.day"}],attrs:{placeholder:"DD",spellcheck:"false"},domProps:{value:t.date.day},on:{input:function(e){e.target.composing||t.$set(t.date,"day",e.target.value)}}}):t._e(),"date"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.date.month,expression:"date.month"}],attrs:{placeholder:"MM",spellcheck:"false"},domProps:{value:t.date.month},on:{input:function(e){e.target.composing||t.$set(t.date,"month",e.target.value)}}}):t._e(),"date"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.date.year,expression:"date.year"}],attrs:{placeholder:"RRRR",spellcheck:"false"},domProps:{value:t.date.year},on:{input:function(e){e.target.composing||t.$set(t.date,"year",e.target.value)}}}):t._e(),"date"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.date.event,expression:"date.event"}],attrs:{placeholder:"Wydarzenie",spellcheck:"false"},domProps:{value:t.date.event},on:{input:function(e){e.target.composing||t.$set(t.date,"event",e.target.value)}}}):t._e(),n("footer",[n("button",{on:{click:t.send}},[t._v("Stwórz")]),n("button",{on:{click:function(e){return t.$emit("closeModal")}}},[t._v("Anuluj")])]),t.error?n("p",[t._v("Coś jest nie tak...")]):t._e()])])},At=[],Qt={name:"add-modal",props:["type"],data:function(){return{quote:{text:"",strong:""},date:{day:"",month:"",year:"",event:""},error:!1}},methods:{validate:function(t,e){if("quote"===t&&""!==e.text&&""!==e.strong)return!0;if("date"===t){var n=e.day,a=e.month,o=e.year,r=e.event;if(""!==n&&2===n.length&&parseInt(n,10)>0&&parseInt(n,10)<=31&&""!==a&&2===a.length&&parseInt(a,10)>0&&parseInt(a,10)<=12&&(""!==o&&4===o.length||""===o)&&""!==r)return!0}return!1},send:function(){var t=this,e=this.$props.type;if("quote"===e){var n=this.validate("quote",this.quote);n&&this.$store.dispatch("postQuote",{text:this.quote.text,strong:this.quote.strong}).then((function(){t.$emit("closeModal")}))}if("date"===e){var a=this.validate("date",this.date);if(a){this.error=!1;var o={day:this.date.day,month:this.date.month,event:this.date.event};""!==this.date.year&&(o.year=this.date.year),this.$store.dispatch("postDate",o).then((function(){t.$emit("closeModal")}))}else this.error=!0}}}},Ht=Qt,zt=(n("fbf1"),Object(p["a"])(Ht,Nt,At,!1,null,"db8c5ed6",null)),Jt=zt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"modal-box"},[n("div",{staticClass:"modal-mask",on:{click:function(e){return t.$emit("closeModal")}}}),n("section",{staticClass:"modal-proper"},[n("header",[t._v("Edytuj")]),"quote"===t.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote.text,expression:"quote.text"}],attrs:{placeholder:"Początek...",spellcheck:"false"},domProps:{value:t.quote.text},on:{input:function(e){e.target.composing||t.$set(t.quote,"text",e.target.value)}}}):t._e(),"quote"===t.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote.strong,expression:"quote.strong"}],staticClass:"bold",attrs:{placeholder:"Pointa...",spellcheck:"false"},domProps:{value:t.quote.strong},on:{input:function(e){e.target.composing||t.$set(t.quote,"strong",e.target.value)}}}):t._e(),"date"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.date.day,expression:"date.day"}],attrs:{placeholder:"DD",spellcheck:"false"},domProps:{value:t.date.day},on:{input:function(e){e.target.composing||t.$set(t.date,"day",e.target.value)}}}):t._e(),"date"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.date.month,expression:"date.month"}],attrs:{placeholder:"MM",spellcheck:"false"},domProps:{value:t.date.month},on:{input:function(e){e.target.composing||t.$set(t.date,"month",e.target.value)}}}):t._e(),"date"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.date.year,expression:"date.year"}],attrs:{placeholder:"RRRR",spellcheck:"false"},domProps:{value:t.date.year},on:{input:function(e){e.target.composing||t.$set(t.date,"year",e.target.value)}}}):t._e(),"date"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.date.event,expression:"date.event"}],attrs:{placeholder:"Wydarzenie",spellcheck:"false"},domProps:{value:t.date.event},on:{input:function(e){e.target.composing||t.$set(t.date,"event",e.target.value)}}}):t._e(),n("footer",[n("button",{on:{click:t.update}},[t._v("Zmień")]),n("button",{on:{click:function(e){return t.$emit("closeModal")}}},[t._v("Anuluj")]),n("button",{on:{click:t.remove}},[t._v("Usuń")])]),t.error?n("p",[t._v("Coś jest nie tak...")]):t._e()])])},Rt=[],Lt={name:"add-modal",props:["type","data"],data:function(){return{quote:{text:this.$props.data.text||"",strong:this.$props.data.strong||""},date:{day:this.$props.data.day||"",month:this.$props.data.month||"",year:this.$props.data.year||"",event:this.$props.data.event||""},error:!1}},methods:{validate:function(t,e){if("quote"===t&&""!==e.text&&""!==e.strong)return!0;if("date"===t){var n=e.day,a=e.month,o=e.year,r=e.event;if(""!==n&&2===n.length&&parseInt(n,10)>0&&parseInt(n,10)<=31&&""!==a&&2===a.length&&parseInt(a,10)>0&&parseInt(a,10)<=12&&(""!==o&&4===o.length||""===o)&&""!==r)return!0}return!1},update:function(){var t=this,e=this.$props,n=e.type,a=e.data,o=a._id;if("quote"===n){var r=this.validate("quote",this.quote);if(r){this.error=!1;var s={text:this.quote.text,strong:this.quote.strong};this.$store.dispatch("updateQuote",{id:o,payload:s}).then((function(){t.$emit("closeModal")}))}}if("date"===n){var i=this.validate("date",this.date);if(i){this.error=!1;var c={day:this.date.day,month:this.date.month,event:this.date.event};""!==this.date.year&&(c.year=this.date.year),this.$store.dispatch("updateDate",{id:o,payload:c}).then((function(){t.$emit("closeModal")}))}else this.error=!0}},remove:function(){var t=this,e=this.$props,n=e.type,a=e.data,o=a._id;"quote"===n&&this.$store.dispatch("deleteQuote",o).then((function(){t.$emit("closeModal")})),"date"===n&&this.$store.dispatch("deleteDate",o).then((function(){t.$emit("closeModal")}))}}},Ft=Lt,Ut=(n("df65"),Object(p["a"])(Ft,Bt,Rt,!1,null,"70a36ead",null)),Vt=Ut.exports,Wt={name:"quotes",components:{AddButton:It,AddModal:Jt,EditModal:Vt},data:function(){return{modalOpen:!1,editModalOpen:!1,editedData:{}}},computed:{quotes:function(){return this.$store.state.quotes}},methods:{openModal:function(){this.modalOpen=!0},closeModal:function(){this.modalOpen=!1},openEditModal:function(t){this.editedData=t,this.editModalOpen=!0},closeEditModal:function(){this.editModalOpen=!1}}},Yt=Wt,Zt=(n("01c8"),Object(p["a"])(Yt,kt,Et,!1,null,"01504a00",null)),Kt=Zt.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"date"},[t.addModalOpen?n("AddModal",{attrs:{type:"date"},on:{closeModal:t.closeModal}}):t._e(),t.editModalOpen?n("EditModal",{attrs:{type:"date",data:this.editedData},on:{closeModal:t.closeEditModal}}):t._e(),t._l(t.orderedDates,(function(e){return n("div",{key:e.id,staticClass:"date-container",on:{click:function(n){return t.openEditModal(e)}}},[n("p",{staticClass:"date-format"},[t._v("\n            "+t._s(e.day)+"."+t._s(e.month)+"\n        ")]),n("p",{staticClass:"date-event"},[t._v("\n            "+t._s(e.event)+"\n        ")])])})),n("div",{staticClass:"date-container-space"}),t._l(t.orderedOneTimeDates,(function(e){return n("div",{key:e.id,staticClass:"date-container",on:{click:function(n){return t.openEditModal(e)}}},[n("p",{staticClass:"date-format"},[t._v("\n            "+t._s(e.day)+"."+t._s(e.month)+"."+t._s(e.year)+"\n        ")]),n("p",{staticClass:"date-event"},[t._v("\n            "+t._s(e.event)+"\n        ")])])})),n("section",{on:{click:t.openModal}},[n("AddButton")],1)],2)},Xt=[],te=(n("55dd"),{name:"tabs",components:{AddButton:It,AddModal:Jt,EditModal:Vt},data:function(){return{addModalOpen:!1,editModalOpen:!1,editedData:{}}},computed:{datesData:function(){return this.$store.state.dates},orderedDates:function(){if(0!==this.datesData.length){var t=this.datesData,e=t.filter((function(t){return!t.year})),n=e.sort(this.compare);return n}return[]},orderedOneTimeDates:function(){if(0!==this.datesData.length){var t=this.datesData,e=t.filter((function(t){return t.year})),n=e.sort(this.compareWithYear);return n}return[]}},methods:{compare:function(t,e){return"".concat(t.month).concat(t.day)>"".concat(e.month).concat(e.day)?1:"".concat(e.month).concat(e.day)>"".concat(t.month).concat(t.day)?-1:0},compareWithYear:function(t,e){return"".concat(t.year).concat(t.month).concat(t.day)>"".concat(e.year).concat(e.month).concat(e.day)?1:"".concat(e.year).concat(e.month).concat(e.day)>"".concat(t.year).concat(t.month).concat(t.day)?-1:0},openModal:function(){this.addModalOpen=!0},closeModal:function(){this.addModalOpen=!1},openEditModal:function(t){this.editedData=t,this.editModalOpen=!0},closeEditModal:function(){this.editModalOpen=!1}}}),ee=te,ne=(n("1947"),Object(p["a"])(ee,Gt,Xt,!1,null,"6e28e08c",null)),ae=ne.exports,oe={name:"other",components:{Tabs:qt,Quotes:Kt,Dates:ae},data:function(){return{view:"dates",viewData:[{text:"Daty",label:"dates"},{text:"Cytaty",label:"quotes"}]}},methods:{switchTab:function(t){this.view=t}}},re=oe,se=(n("fdc0"),Object(p["a"])(re,_t,wt,!1,null,"2bb72a3c",null)),ie=se.exports;a["a"].use(z["a"]);var ce=new z["a"]({routes:[{path:"/",name:"dashboard",component:it},{path:"/projects",name:"projects",component:ft},{path:"/calendar",name:"calendar",component:gt},{path:"/other",name:"other",component:ie},{path:"*",redirect:"/"}]}),ue=(n("6b54"),n("75fc")),le=n("2f62");a["a"].use(le["a"]);var de="https://tranquil-shelf-80926.herokuapp.com",pe=function(t,e,n){var a=!0;if(null===e)return!1;var o=Object(ue["a"])(t),r=Object(ue["a"])(e),s=o.map((function(t){return t._id})).toString(),i=r.map((function(t){return t._id})).toString();return s===i&&("quotes"===n&&o.forEach((function(t){var e=t.strong,n=t.text,o=t._id,s=r.filter((function(t){return t._id===o}));s[0].strong===e&&s[0].text===n||(a=!1)})),"dates"===n&&o.forEach((function(t){var e=t.day,n=t.month,o=t.year,s=t.event,i=t._id,c=r.filter((function(t){return t._id===i}));c[0].day===e&&c[0].month===n&&c[0].year===o&&c[0].event===s||(a=!1)})),a)},fe=new le["a"].Store({state:{quotes:[],dates:[]},mutations:{SET_QUOTES:function(t,e){t.quotes=e},SET_DATES:function(t,e){t.dates=e}},actions:{getQuotes:function(t){var e=localStorage.getItem("quotes"),n=JSON.parse(e);null!==e&&t.commit("SET_QUOTES",n),fetch("".concat(de,"/quotes")).then((function(t){return t.json()})).then((function(e){!1===pe(e,n,"quotes")&&(localStorage.setItem("quotes",JSON.stringify(e)),t.commit("SET_QUOTES",e))}))},postQuote:function(t,e){fetch("".concat(de,"/quote"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){return t.dispatch("getQuotes")}))},updateQuote:function(t,e){fetch("".concat(de,"/quote/").concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.payload)}).then((function(){return t.dispatch("getQuotes")}))},deleteQuote:function(t,e){fetch("".concat(de,"/quote/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(){return t.dispatch("getQuotes")}))},getDates:function(t){var e=localStorage.getItem("dates"),n=JSON.parse(e);null!==e&&t.commit("SET_DATES",n),fetch("".concat(de,"/dates")).then((function(t){return t.json()})).then((function(e){!1===pe(e,n,"dates")&&(localStorage.setItem("dates",JSON.stringify(e)),t.commit("SET_DATES",e))}))},postDate:function(t,e){fetch("".concat(de,"/date"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){return t.dispatch("getDates")}))},updateDate:function(t,e){fetch("".concat(de,"/date/").concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.payload)}).then((function(){return t.dispatch("getDates")}))},deleteDate:function(t,e){fetch("".concat(de,"/date/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(){return t.dispatch("getDates")}))}}}),he=(n("b20f"),n("9483"));Object(he["a"])("".concat("/Tea-Hub/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var ve="0.1.1",me=function(){var t=localStorage.getItem("version");null!==t&&t!==ve&&window.location.reload(),localStorage.setItem("version",ve)},ye=me;a["a"].config.productionTip=!1,ye(),new a["a"]({router:ce,store:fe,render:function(t){return t(H)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("e332"),o=n.n(a);o.a},"72b9":function(t,e,n){"use strict";var a=n("f85b"),o=n.n(a);o.a},7614:function(t,e,n){"use strict";var a=n("bcb6"),o=n.n(a);o.a},"7bc6":function(t,e,n){"use strict";var a=n("da97"),o=n.n(a);o.a},8801:function(t,e,n){"use strict";var a=n("c13f"),o=n.n(a);o.a},9147:function(t,e,n){},"94d5":function(t,e,n){"use strict";var a=n("cdae"),o=n.n(a);o.a},a2b9:function(t,e,n){},b20f:function(t,e,n){},bada:function(t,e,n){},bc14:function(t,e,n){},bcb6:function(t,e,n){},c13f:function(t,e,n){},c99f:function(t,e,n){"use strict";var a=n("9147"),o=n.n(a);o.a},cdae:function(t,e,n){},da97:function(t,e,n){},df65:function(t,e,n){"use strict";var a=n("477b"),o=n.n(a);o.a},dffe:function(t,e,n){},e332:function(t,e,n){},eba7:function(t,e,n){},f194:function(t,e,n){},f85b:function(t,e,n){},fbf1:function(t,e,n){"use strict";var a=n("a2b9"),o=n.n(a);o.a},fdc0:function(t,e,n){"use strict";var a=n("1c23"),o=n.n(a);o.a},fe5c:function(t,e,n){"use strict";var a=n("bc14"),o=n.n(a);o.a}});
//# sourceMappingURL=app.2fe906ef.js.map