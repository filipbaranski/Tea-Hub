(function(e){function t(t){for(var a,s,c=t[0],i=t[1],d=t[2],l=0,p=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Tea-Hub/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01c8":function(e,t,n){"use strict";n("4f1a")},"10f1":function(e,t,n){},1219:function(e,t,n){},1809:function(e,t,n){"use strict";n("ab93")},"1c69":function(e,t,n){"use strict";n("bd76")},"25bb":function(e,t,n){"use strict";n("febe")},2636:function(e,t,n){},"342c":function(e,t,n){},"4ea4":function(e,t,n){},"4f1a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("Banner",{attrs:{windowTop:e.windowTop},on:{closeMenu:function(t){return e.setMenuState(!1)}}}),n("MobileMenuBar",{attrs:{windowTop:e.windowTop},on:{openMenu:function(t){return e.setMenuState(!0)}}}),n("MenuItems",{class:{"menu-mobile":!0,open:e.menuOpened},attrs:{role:e.role,route:this.$route.name},on:{closeMenu:function(t){return e.setMenuState(!1)}}}),n("MenuItems",{staticClass:"menu-desktop",attrs:{role:e.role,route:this.$route.name}})],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{banner:!0,sticky:e.windowTop>55},on:{click:function(t){return e.$emit("closeMenu")}}},[n("router-link",{attrs:{to:"/"}},[n("h1",[e._v("Tea Hub")])])],1)},d=[],u={name:"banner",props:["windowTop"]},l=u,p=(n("94d5"),n("2877")),f=Object(p["a"])(l,i,d,!1,null,"d2b2e1ec",null),h=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{class:{"mobile-bar":!0,sticky:e.windowTop>55},on:{click:function(t){return e.$emit("openMenu")}}},[n("MenuIcon")],1)},v=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticStyle:{"enable-background":"new 0 0 297 297"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 297 297","xml:space":"preserve"}},[n("g",[n("path",{attrs:{d:"M279.368,24.726H102.992c-9.722,0-17.632,7.91-17.632,\n        17.632V67.92c0,9.722,7.91,17.632,17.632,17.632h176.376c9.722,\n        0,17.632-7.91,17.632-17.632V42.358C297,32.636,289.09,24.726,279.368,\n        24.726z"}}),n("path",{attrs:{d:"M279.368,118.087H102.992c-9.722,0-17.632,7.91-17.632,\n        17.632v25.562c0,9.722,7.91,17.632,17.632,17.632h176.376c9.722,\n        0,17.632-7.91,17.632-17.632v-25.562C297,125.997,289.09,118.087,\n        279.368,118.087z"}}),n("path",{attrs:{d:"M279.368,211.448H102.992c-9.722,0-17.632,7.91-17.632,\n        17.633v25.561c0,9.722,7.91,17.632,17.632,17.632h176.376c9.722,\n        0,17.632-7.91,17.632-17.632v-25.561C297,219.358,289.09,211.448,\n        279.368,211.448z"}}),n("path",{attrs:{d:"M45.965,24.726H17.632C7.91,24.726,0,32.636,0,42.358V67.92c0,\n        9.722,7.91,17.632,17.632,17.632h28.333c9.722,0,17.632-7.91,\n        17.632-17.632V42.358C63.597,32.636,55.687,24.726,45.965,24.726z"}}),n("path",{attrs:{d:"M45.965,118.087H17.632C7.91,118.087,0,125.997,0,135.719v25.562c0,\n        9.722,7.91,17.632,17.632,17.632h28.333c9.722,0,17.632-7.91,\n        17.632-17.632v-25.562C63.597,125.997,55.687,118.087,45.965,118.087z"}}),n("path",{attrs:{d:"M45.965,211.448H17.632C7.91,211.448,0,219.358,0,229.081v25.561c0,\n        9.722,7.91,17.632,17.632,17.632h28.333c9.722,0,17.632-7.91,\n        17.632-17.632v-25.561C63.597,219.358,55.687,211.448,45.965,211.448z"}})])])},y=[],_=(n("7614"),{}),g=Object(p["a"])(_,b,y,!1,null,"119fcff6",null),M=g.exports,w={name:"mobile-menu-bar",props:["windowTop"],components:{MenuIcon:M}},O=w,x=(n("72b9"),Object(p["a"])(O,m,v,!1,null,"2fddee4c",null)),C=x.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{on:{click:function(t){return e.$emit("closeMenu")}}},[n("router-link",{class:{active:"projects"===e.route},attrs:{to:"/projects"}},[e._v(" Projekty ")]),"admin"===e.role?n("router-link",{class:{active:"calendar"===e.route},attrs:{to:"/calendar"}},[e._v(" Kalendarz ")]):e._e(),"admin"===e.role?n("router-link",{class:{active:"other"===e.route},attrs:{to:"/other"}},[e._v(" Inne ")]):e._e()],1)},k=[],$={name:"menu-items",props:["route","role"]},j=$,E=(n("8801"),Object(p["a"])(j,D,k,!1,null,"739a7678",null)),q=E.exports,S={name:"Header",components:{Banner:h,MobileMenuBar:C,MenuItems:q},data:function(){return{role:"admin",menuOpened:!1,windowTop:0}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){this.windowTop=window.top.scrollY},setMenuState:function(e){var t=document.body;t.classList.toggle("noscroll",e),this.menuOpened=e}}},T=S,A=(n("c99f"),Object(p["a"])(T,s,c,!1,null,"41ba71ac",null)),P=A.exports,N={name:"app",components:{Header:P},mounted:function(){var e=new Date;this.$store.dispatch("getQuotes"),this.$store.dispatch("getDates"),this.$store.dispatch("getCalendar",{year:e.getFullYear(),month:e.getMonth()+1})}},I=N,z=(n("5c0b"),Object(p["a"])(I,o,r,!1,null,null,null)),Q=z.exports,J=n("8c4f"),H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard"},[n("Quote",{staticClass:"dashboard-layout"}),n("Dates",{staticClass:"dashboard-layout"}),n("div",{staticClass:"dashboard-background"})],1)},L=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"quote"},[n("p",[e._v(e._s(e.randomQuote.strong))])])},B=[],F={name:"quote",computed:{quotes:function(){return this.$store.state.quotes},randomQuote:function(){if(0!==this.quotes.length){var e=0,t=this.quotes.length,n=e+Math.floor((t-e)*Math.random());return this.quotes[n]}return""}}},W=F,Y=(n("7bc6"),Object(p["a"])(W,R,B,!1,null,"4b1f70d3",null)),V=Y.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0!==e.upcomingEvents.length?n("div",{staticClass:"dates"},e._l(e.daysInAdvance+1,(function(t){return n("section",{key:t},[0!==e.eventFilter(t-1).length?n("div",{staticClass:"dates-block"},[n("p",{staticClass:"dates-heading"},[e._v(" "+e._s(t-1===0?"Dzisiaj":"")+" "+e._s(t-1===1?"Jutro":"")+" "+e._s(t-1>1?"Za "+(t-1)+" dni":"")+" ")]),e._l(e.eventFilter(t-1),(function(t){return n("span",{key:t.id},[n("p",[e._v(e._s(t.event))])])}))],2):e._e()])})),0):e._e()},Z=[],K=(n("4de4"),n("4160"),n("159b"),n("5530")),G={name:"quote",data:function(){return{daysInAdvance:7}},computed:{upcomingEvents:function(){var e=[],t=864e5,n=this.daysInAdvance*t,a=new Date,o=a.getMonth(),r=a.getFullYear(),s=new Date(r,o,a.getDate()),c=s.getTime(),i=this.$store.state.dates;return i.forEach((function(a){var s=parseInt(a.day,10),i=parseInt(a.month,10)-1,d=r;a.year&&(d=parseInt(a.year,10)),i<o&&(d=r+1);var u=new Date(d,i,s),l=u.getTime(),p=l-c;if(p<=n&&p>-1*t){var f=Math.floor(p/t);e.push(Object(K["a"])(Object(K["a"])({},a),{},{daysLeft:f}))}})),e}},methods:{eventFilter:function(e){var t=this.upcomingEvents,n=t.filter((function(t){return t.daysLeft===e}));return n}}},X=G,ee=(n("93fb"),Object(p["a"])(X,U,Z,!1,null,"6da09e53",null)),te=ee.exports,ne={name:"dashboard",components:{Quote:V,Dates:te}},ae=ne,oe=(n("a41f"),Object(p["a"])(ae,H,L,!1,null,"a7f5189e",null)),re=oe.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"projects"},[n("p",{on:{click:function(t){return e.increment()}}},[e._v("Projekty")])])},ce=[],ie={name:"projects"},de=ie,ue=Object(p["a"])(de,se,ce,!1,null,null,null),le=ue.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"calendar"},[e.editModalOpen?n("CalendarModal",{attrs:{data:this.editedData},on:{closeModal:e.closeEditModal}}):e._e(),n("section",{staticClass:"calendar-header"},[n("section",[n("h3",[e._v(e._s(e.translate(e.month)))])])]),e.calendarData.year?n("main",{staticClass:"calendar-proper"},[e._l(e.emptyDays,(function(e){return n("div",{key:"empty-day-"+e,staticClass:"calendar-day"})})),e._l(e.daysInMonth,(function(t){return n("div",{key:"actual-day-"+t,class:{"calendar-day":!0,"calendar-day-filled":!0,red:t<=e.currentDay&&-1!==e.calendarData.red.indexOf(t),blocked:t>e.currentDay,current:t===e.currentDay},on:{click:function(n){return e.openEditModal(t)}}},[t>e.currentDay?n("p",[e._v(e._s(t))]):e._e(),t<=e.currentDay?n("div",{staticClass:"calendar-day-footer"},[n("p",[e._v(" "+e._s(e.calendarData.number[t-1])+" ")]),n("img",{attrs:{src:-1===e.calendarData.no_cube.indexOf(t)?e.CubeWhite:e.Cube}})]):e._e()])}))],2):e._e()],1)},fe=[],he=(n("99af"),n("c975"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"modal-box"},[a("div",{staticClass:"modal-mask",on:{click:function(t){return e.$emit("closeModal")}}}),a("section",{staticClass:"modal-proper"},[a("header",[e._v(e._s(e.date))]),a("div",{staticClass:"modal-selects"},[a("div",{staticClass:"modal-section"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.red,expression:"red"}],attrs:{id:"red",type:"checkbox"},domProps:{checked:Array.isArray(e.red)?e._i(e.red,null)>-1:e.red},on:{change:function(t){var n=e.red,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.red=n.concat([r])):s>-1&&(e.red=n.slice(0,s).concat(n.slice(s+1)))}else e.red=o}}}),a("label",{attrs:{for:"red"}},[a("div",{class:{"modal-circle":!0,red:e.red}})])]),a("div",{staticClass:"modal-section"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.no_cube,expression:"no_cube"}],attrs:{id:"cube",type:"checkbox"},domProps:{checked:Array.isArray(e.no_cube)?e._i(e.no_cube,null)>-1:e.no_cube},on:{change:function(t){var n=e.no_cube,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.no_cube=n.concat([r])):s>-1&&(e.no_cube=n.slice(0,s).concat(n.slice(s+1)))}else e.no_cube=o}}}),a("label",{attrs:{for:"cube"}},[e.no_cube?a("img",{attrs:{src:n("fbc9")}}):e._e(),e.no_cube?e._e():a("img",{attrs:{src:n("f444")}})])])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"text",placeholder:"Powtórzenia",spellcheck:"false"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}}),a("footer",[a("button",{on:{click:e.update}},[e._v("Zmień")]),a("button",{on:{click:function(t){return e.$emit("closeModal")}}},[e._v("Anuluj")])])])])}),me=[],ve={name:"calendar-modal",props:["data"],data:function(){return{date:this.$props.data.date,id:this.$props.data.id,day:this.$props.data.day,number:this.$props.data.number,red:this.$props.data.red,no_cube:this.$props.data.no_cube}},methods:{update:function(){var e=this,t=this.id,n=this.day,a=this.number,o=this.red,r=this.no_cube,s={day:n,number:a,red:o,no_cube:r};this.$store.dispatch("updateCalendar",{id:t,payload:s}).then((function(){e.$emit("closeModal")}))}}},be=ve,ye=(n("1809"),Object(p["a"])(be,he,me,!1,null,"5a5745df",null)),_e=ye.exports,ge=n("fbc9"),Me=n.n(ge),we=n("f444"),Oe=n.n(we),xe={name:"calendar",components:{CalendarModal:_e},data:function(){var e=new Date;return{Cube:Me.a,CubeWhite:Oe.a,currentDate:e,editModalOpen:!1,editedData:{},currentDay:e.getDate(),month:e.getMonth(),year:e.getFullYear()}},computed:{calendarData:function(){return this.$store.state.calendar},emptyDays:function(){var e=this.currentDate.getDay()-this.currentDay%7+1;return e>0?e-1:e+6},daysInMonth:function(){return new Date(this.year,this.month+1,0).getDate()}},methods:{openEditModal:function(e){if(e<=this.currentDay){var t=this.calendarData,n=t._id,a=t.red,o=t.number,r=t.no_cube,s={date:"".concat(e>=10?e:"0".concat(e),".").concat(this.month>=9?this.month+1:"0".concat(this.month+1),".").concat(this.year),id:n,day:e,number:o[e-1],red:-1!==a.indexOf(e),no_cube:-1!==r.indexOf(e)};this.editedData=s,this.editModalOpen=!0}},closeEditModal:function(){this.editModalOpen=!1,this.editedData={}},translate:function(e){switch(e){case 0:return"Styczeń";case 1:return"Luty";case 2:return"Marzec";case 3:return"Kwiecień";case 4:return"Maj";case 5:return"Czerwiec";case 6:return"Lipiec";case 7:return"Sierpień";case 8:return"Wrzesień";case 9:return"Październik";case 10:return"Listopad";case 11:return"Grudzień";default:return"Nie ma takiego miesiąca"}}}},Ce=xe,De=(n("25bb"),Object(p["a"])(Ce,pe,fe,!1,null,"b8992a50",null)),ke=De.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"other"},[n("Tabs",{attrs:{viewData:e.viewData,view:e.view},on:{changeTab:function(t){return e.switchTab(t)}}}),"quotes"===e.view?n("Quotes"):e._e(),"dates"===e.view?n("Dates"):e._e()],1)},je=[],Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"tabs"},e._l(e.viewData,(function(t){return n("div",{key:t.label,staticClass:"tabs-label",class:{active:e.view===t.label},on:{click:function(n){return e.$emit("changeTab",t.label)}}},[e._v(" "+e._s(t.text)+" ")])})),0)},qe=[],Se={name:"tabs",props:["view","viewData"]},Te=Se,Ae=(n("fe5c"),Object(p["a"])(Te,Ee,qe,!1,null,"994e5ca0",null)),Pe=Ae.exports,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"quote"},[e.modalOpen?n("AddModal",{attrs:{type:"quote"},on:{closeModal:e.closeModal}}):e._e(),e.editModalOpen?n("EditModal",{attrs:{type:"quote",data:this.editedData},on:{closeModal:e.closeEditModal}}):e._e(),e._l(e.quotes,(function(t){return n("div",{key:t.id,staticClass:"quote-container",on:{click:function(n){return e.openEditModal(t)}}},[n("p",{staticClass:"quote-text"},[e._v(" "+e._s(t.text)+" "),n("strong",[e._v(" "+e._s(t.strong)+" ")])])])})),n("section",{on:{click:e.openModal}},[n("AddButton")],1)],2)},Ie=[],ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"button"},[e._v("+")])},Qe=[],Je={name:"add-button"},He=Je,Le=(n("1c69"),Object(p["a"])(He,ze,Qe,!1,null,"442011aa",null)),Re=Le.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"modal-box"},[n("div",{staticClass:"modal-mask",on:{click:function(t){return e.$emit("closeModal")}}}),n("section",{staticClass:"modal-proper"},[n("header",[e._v("Dodaj")]),"quote"===e.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.quote.text,expression:"quote.text"}],attrs:{placeholder:"Początek...",spellcheck:"false"},domProps:{value:e.quote.text},on:{input:function(t){t.target.composing||e.$set(e.quote,"text",t.target.value)}}}):e._e(),e._v(" "),"quote"===e.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.quote.strong,expression:"quote.strong"}],staticClass:"bold",attrs:{placeholder:"Pointa...",spellcheck:"false"},domProps:{value:e.quote.strong},on:{input:function(t){t.target.composing||e.$set(e.quote,"strong",t.target.value)}}}):e._e(),e._v(" "),"date"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.date.day,expression:"date.day"}],attrs:{placeholder:"DD",spellcheck:"false"},domProps:{value:e.date.day},on:{input:function(t){t.target.composing||e.$set(e.date,"day",t.target.value)}}}):e._e(),"date"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.date.month,expression:"date.month"}],attrs:{placeholder:"MM",spellcheck:"false"},domProps:{value:e.date.month},on:{input:function(t){t.target.composing||e.$set(e.date,"month",t.target.value)}}}):e._e(),"date"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.date.year,expression:"date.year"}],attrs:{placeholder:"RRRR",spellcheck:"false"},domProps:{value:e.date.year},on:{input:function(t){t.target.composing||e.$set(e.date,"year",t.target.value)}}}):e._e(),"date"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.date.event,expression:"date.event"}],attrs:{placeholder:"Wydarzenie",spellcheck:"false"},domProps:{value:e.date.event},on:{input:function(t){t.target.composing||e.$set(e.date,"event",t.target.value)}}}):e._e(),n("footer",[n("button",{on:{click:e.send}},[e._v("Stwórz")]),n("button",{on:{click:function(t){return e.$emit("closeModal")}}},[e._v("Anuluj")])]),e.error?n("p",[e._v("Coś jest nie tak...")]):e._e()])])},Fe=[],We={name:"add-modal",props:["type"],data:function(){return{quote:{text:"",strong:""},date:{day:"",month:"",year:"",event:""},error:!1}},methods:{validate:function(e,t){if("quote"===e&&""!==t.text&&""!==t.strong)return!0;if("date"===e){var n=t.day,a=t.month,o=t.year,r=t.event;if(""!==n&&2===n.length&&parseInt(n,10)>0&&parseInt(n,10)<=31&&""!==a&&2===a.length&&parseInt(a,10)>0&&parseInt(a,10)<=12&&(""!==o&&4===o.length||""===o)&&""!==r)return!0}return!1},send:function(){var e=this,t=this.$props.type;if("quote"===t){var n=this.validate("quote",this.quote);n&&this.$store.dispatch("postQuote",{text:this.quote.text,strong:this.quote.strong}).then((function(){e.$emit("closeModal")}))}if("date"===t){var a=this.validate("date",this.date);if(a){this.error=!1;var o={day:this.date.day,month:this.date.month,event:this.date.event};""!==this.date.year&&(o.year=this.date.year),this.$store.dispatch("postDate",o).then((function(){e.$emit("closeModal")}))}else this.error=!0}}}},Ye=We,Ve=(n("fbf1"),Object(p["a"])(Ye,Be,Fe,!1,null,"db8c5ed6",null)),Ue=Ve.exports,Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"modal-box"},[n("div",{staticClass:"modal-mask",on:{click:function(t){return e.$emit("closeModal")}}}),n("section",{staticClass:"modal-proper"},[n("header",[e._v("Edytuj")]),"quote"===e.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.quote.text,expression:"quote.text"}],attrs:{placeholder:"Początek...",spellcheck:"false"},domProps:{value:e.quote.text},on:{input:function(t){t.target.composing||e.$set(e.quote,"text",t.target.value)}}}):e._e(),e._v(" "),"quote"===e.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.quote.strong,expression:"quote.strong"}],staticClass:"bold",attrs:{placeholder:"Pointa...",spellcheck:"false"},domProps:{value:e.quote.strong},on:{input:function(t){t.target.composing||e.$set(e.quote,"strong",t.target.value)}}}):e._e(),e._v(" "),"date"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.date.day,expression:"date.day"}],attrs:{placeholder:"DD",spellcheck:"false"},domProps:{value:e.date.day},on:{input:function(t){t.target.composing||e.$set(e.date,"day",t.target.value)}}}):e._e(),"date"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.date.month,expression:"date.month"}],attrs:{placeholder:"MM",spellcheck:"false"},domProps:{value:e.date.month},on:{input:function(t){t.target.composing||e.$set(e.date,"month",t.target.value)}}}):e._e(),"date"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.date.year,expression:"date.year"}],attrs:{placeholder:"RRRR",spellcheck:"false"},domProps:{value:e.date.year},on:{input:function(t){t.target.composing||e.$set(e.date,"year",t.target.value)}}}):e._e(),"date"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.date.event,expression:"date.event"}],attrs:{placeholder:"Wydarzenie",spellcheck:"false"},domProps:{value:e.date.event},on:{input:function(t){t.target.composing||e.$set(e.date,"event",t.target.value)}}}):e._e(),n("footer",[n("button",{on:{click:e.update}},[e._v("Zmień")]),n("button",{on:{click:function(t){return e.$emit("closeModal")}}},[e._v("Anuluj")]),n("button",{on:{click:e.remove}},[e._v("Usuń")])]),e.error?n("p",[e._v("Coś jest nie tak...")]):e._e()])])},Ke=[],Ge={name:"add-modal",props:["type","data"],data:function(){return{quote:{text:this.$props.data.text||"",strong:this.$props.data.strong||""},date:{day:this.$props.data.day||"",month:this.$props.data.month||"",year:this.$props.data.year||"",event:this.$props.data.event||""},error:!1}},methods:{validate:function(e,t){if("quote"===e&&""!==t.text&&""!==t.strong)return!0;if("date"===e){var n=t.day,a=t.month,o=t.year,r=t.event;if(""!==n&&2===n.length&&parseInt(n,10)>0&&parseInt(n,10)<=31&&""!==a&&2===a.length&&parseInt(a,10)>0&&parseInt(a,10)<=12&&(""!==o&&4===o.length||""===o)&&""!==r)return!0}return!1},update:function(){var e=this,t=this.$props,n=t.type,a=t.data,o=a._id;if("quote"===n){var r=this.validate("quote",this.quote);if(r){this.error=!1;var s={text:this.quote.text,strong:this.quote.strong};this.$store.dispatch("updateQuote",{id:o,payload:s}).then((function(){e.$emit("closeModal")}))}}if("date"===n){var c=this.validate("date",this.date);if(c){this.error=!1;var i={day:this.date.day,month:this.date.month,event:this.date.event};""!==this.date.year&&(i.year=this.date.year),this.$store.dispatch("updateDate",{id:o,payload:i}).then((function(){e.$emit("closeModal")}))}else this.error=!0}},remove:function(){var e=this,t=this.$props,n=t.type,a=t.data,o=a._id;"quote"===n&&this.$store.dispatch("deleteQuote",o).then((function(){e.$emit("closeModal")})),"date"===n&&this.$store.dispatch("deleteDate",o).then((function(){e.$emit("closeModal")}))}}},Xe=Ge,et=(n("df65"),Object(p["a"])(Xe,Ze,Ke,!1,null,"70a36ead",null)),tt=et.exports,nt={name:"quotes",components:{AddButton:Re,AddModal:Ue,EditModal:tt},data:function(){return{modalOpen:!1,editModalOpen:!1,editedData:{}}},computed:{quotes:function(){return this.$store.state.quotes}},methods:{openModal:function(){this.modalOpen=!0},closeModal:function(){this.modalOpen=!1},openEditModal:function(e){this.editedData=e,this.editModalOpen=!0},closeEditModal:function(){this.editModalOpen=!1}}},at=nt,ot=(n("01c8"),Object(p["a"])(at,Ne,Ie,!1,null,"01504a00",null)),rt=ot.exports,st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"date"},[e.addModalOpen?n("AddModal",{attrs:{type:"date"},on:{closeModal:e.closeModal}}):e._e(),e.editModalOpen?n("EditModal",{attrs:{type:"date",data:this.editedData},on:{closeModal:e.closeEditModal}}):e._e(),e._l(e.orderedOneTimeDates,(function(t){return n("div",{key:t.id,class:{"date-container":!0,grey:!0===e.passed(t)},on:{click:function(n){return e.openEditModal(t)}}},[n("p",{staticClass:"date-format"},[e._v(" "+e._s(t.day)+"."+e._s(t.month)+"."+e._s(t.year)+" ")]),n("p",{staticClass:"date-event"},[e._v(" "+e._s(t.event)+" ")])])})),n("p",{staticClass:"date-separator"},[e._v("Coroczne")]),e._l(e.orderedDates,(function(t){return n("div",{key:t.id,staticClass:"date-container",on:{click:function(n){return e.openEditModal(t)}}},[n("p",{staticClass:"date-format"},[e._v(" "+e._s(t.day)+"."+e._s(t.month)+" ")]),n("p",{staticClass:"date-event"},[e._v(" "+e._s(t.event)+" ")])])})),n("section",{on:{click:e.openModal}},[n("AddButton")],1)],2)},ct=[],it=(n("fb6a"),n("bf19"),{name:"tabs",components:{AddButton:Re,AddModal:Ue,EditModal:tt},data:function(){return{addModalOpen:!1,editModalOpen:!1,editedData:{}}},computed:{datesData:function(){return this.$store.state.dates},orderedDates:function(){if(0!==this.datesData.length){var e=this.datesData,t=e.filter((function(e){return!e.year})),n=t.sort(this.compare);return n}return[]},orderedOneTimeDates:function(){if(0!==this.datesData.length){var e=this.datesData,t=e.filter((function(e){return e.year})),n=t.sort(this.compareWithYear);return n}return[]}},methods:{compare:function(e,t){return"".concat(e.month).concat(e.day)>"".concat(t.month).concat(t.day)?1:"".concat(t.month).concat(t.day)>"".concat(e.month).concat(e.day)?-1:0},compareWithYear:function(e,t){return"".concat(e.year).concat(e.month).concat(e.day)>"".concat(t.year).concat(t.month).concat(t.day)?1:"".concat(t.year).concat(t.month).concat(t.day)>"".concat(e.year).concat(e.month).concat(e.day)?-1:0},openModal:function(){this.addModalOpen=!0},closeModal:function(){this.addModalOpen=!1},openEditModal:function(e){this.editedData=e,this.editModalOpen=!0},closeEditModal:function(){this.editModalOpen=!1},passed:function(e){var t=(new Date).toJSON().slice(0,10),n=function(e){var t=e.year,n=e.month,a=e.day;return new Date(t,n-1,parseInt(a,10)+1).toJSON().slice(0,10)};return n(e)<t}}}),dt=it,ut=(n("cd1f"),Object(p["a"])(dt,st,ct,!1,null,"400e7daf",null)),lt=ut.exports,pt={name:"other",components:{Tabs:Pe,Quotes:rt,Dates:lt},data:function(){return{view:"dates",viewData:[{text:"Daty",label:"dates"},{text:"Cytaty",label:"quotes"}]}},methods:{switchTab:function(e){this.view=e}}},ft=pt,ht=(n("fdc0"),Object(p["a"])(ft,$e,je,!1,null,"2bb72a3c",null)),mt=ht.exports;a["a"].use(J["a"]);var vt=new J["a"]({routes:[{path:"/",name:"dashboard",component:re},{path:"/projects",name:"projects",component:le},{path:"/calendar",name:"calendar",component:ke},{path:"/other",name:"other",component:mt},{path:"*",redirect:"/"}]}),bt=(n("d81d"),n("b64b"),n("d3b7"),n("25f0"),n("2909")),yt=n("2f62");a["a"].use(yt["a"]);var _t="https://tranquil-shelf-80926.herokuapp.com",gt=function(e,t,n){var a=!0;if(null===t)return!1;var o=Object(bt["a"])(e),r=Object(bt["a"])(t),s=o.map((function(e){return e._id})).toString(),c=r.map((function(e){return e._id})).toString();return s===c&&("quotes"===n&&o.forEach((function(e){var t=e.strong,n=e.text,o=e._id,s=r.filter((function(e){return e._id===o}));s[0].strong===t&&s[0].text===n||(a=!1)})),"dates"===n&&o.forEach((function(e){var t=e.day,n=e.month,o=e.year,s=e.event,c=e._id,i=r.filter((function(e){return e._id===c}));i[0].day===t&&i[0].month===n&&i[0].year===o&&i[0].event===s||(a=!1)})),a)},Mt=function(e,t){var n=[];if(null===t)return!1;var a=Object(K["a"])({},e),o=Object(K["a"])({},t),r=a._id.toString(),s=o._id.toString();if(r!==s)return!1;var c={no_cube:a.no_cube,red:a.red,number:a.number};return Object.keys(c).forEach((function(e){var t=o[e].toString(),a=c[e].toString();n.push(t===a)})),-1===n.indexOf(!1)},wt=new yt["a"].Store({state:{quotes:[],dates:[],calendar:{}},mutations:{SET_QUOTES:function(e,t){e.quotes=t},SET_DATES:function(e,t){e.dates=t},SET_CALENDAR:function(e,t){e.calendar=t}},actions:{getVersion:function(){var e=localStorage.getItem("version");fetch("".concat(_t,"/version")).then((function(e){return e.json()})).then((function(t){null!==e&&e!==t.version&&window.location.reload(),localStorage.setItem("version",t.version)}))},getQuotes:function(e){var t=localStorage.getItem("quotes"),n=JSON.parse(t);null!==t&&e.commit("SET_QUOTES",n),fetch("".concat(_t,"/quotes")).then((function(e){return e.json()})).then((function(t){!1===gt(t,n,"quotes")&&(localStorage.setItem("quotes",JSON.stringify(t)),e.commit("SET_QUOTES",t))}))},postQuote:function(e,t){fetch("".concat(_t,"/quote"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){return e.dispatch("getQuotes")}))},updateQuote:function(e,t){fetch("".concat(_t,"/quote/").concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.payload)}).then((function(){return e.dispatch("getQuotes")}))},deleteQuote:function(e,t){fetch("".concat(_t,"/quote/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(){return e.dispatch("getQuotes")}))},getDates:function(e){var t=localStorage.getItem("dates"),n=JSON.parse(t);null!==t&&e.commit("SET_DATES",n),fetch("".concat(_t,"/dates")).then((function(e){return e.json()})).then((function(t){!1===gt(t,n,"dates")&&(localStorage.setItem("dates",JSON.stringify(t)),e.commit("SET_DATES",t))}))},postDate:function(e,t){fetch("".concat(_t,"/date"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){return e.dispatch("getDates")}))},updateDate:function(e,t){fetch("".concat(_t,"/date/").concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.payload)}).then((function(){return e.dispatch("getDates")}))},deleteDate:function(e,t){fetch("".concat(_t,"/date/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(){return e.dispatch("getDates")}))},getCalendar:function(e,t){var n=localStorage.getItem("calendar"),a=JSON.parse(n);null!==n&&e.commit("SET_CALENDAR",a),fetch("".concat(_t,"/calendar/").concat(t.year,"/").concat(t.month)).then((function(e){return e.json()})).then((function(t){!1===Mt(t,a)&&(localStorage.setItem("calendar",JSON.stringify(t)),e.commit("SET_CALENDAR",t))}))},updateCalendar:function(e,t){var n=t.payload,a=Object(K["a"])({},this.state.calendar),o={number:Object(bt["a"])(a.number),red:Object(bt["a"])(a.red),no_cube:Object(bt["a"])(a.no_cube)};o.number[n.day-1]=parseInt(n.number,10),-1===o.red.indexOf(n.day)&&!0===n.red?o.red.push(n.day):-1!==o.red.indexOf(n.day)&&!1===n.red&&(o.red=o.red.filter((function(e){return e!==n.day}))),-1===o.no_cube.indexOf(n.day)&&!0===n.no_cube?o.no_cube.push(n.day):-1!==o.no_cube.indexOf(n.day)&&!1===n.no_cube&&(o.no_cube=o.no_cube.filter((function(e){return e!==n.day}))),fetch("".concat(_t,"/calendar/").concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(){var t=new Date,n=t.getFullYear(),a=t.getMonth()+1;e.dispatch("getCalendar",{year:n,month:a})}))}}}),Ot=(n("b20f"),n("9483"));Object(Ot["a"])("".concat("/Tea-Hub/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,wt.dispatch("getVersion"),new a["a"]({router:vt,store:wt,render:function(e){return e(Q)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"72b9":function(e,t,n){"use strict";n("ca69")},7614:function(e,t,n){"use strict";n("a5b3")},"76d8":function(e,t,n){},"7bc6":function(e,t,n){"use strict";n("8064")},"7d68":function(e,t,n){},8064:function(e,t,n){},8801:function(e,t,n){"use strict";n("4ea4")},"93fb":function(e,t,n){"use strict";n("7d68")},"94d5":function(e,t,n){"use strict";n("10f1")},"9c0c":function(e,t,n){},a41f:function(e,t,n){"use strict";n("342c")},a47d:function(e,t,n){},a5b3:function(e,t,n){},ab93:function(e,t,n){},b20f:function(e,t,n){},bd76:function(e,t,n){},c99f:function(e,t,n){"use strict";n("76d8")},ca69:function(e,t,n){},cd1f:function(e,t,n){"use strict";n("1219")},df65:function(e,t,n){"use strict";n("2636")},eada:function(e,t,n){},eb28:function(e,t,n){},f444:function(e,t,n){e.exports=n.p+"img/CubeWhite.484b8b07.svg"},fbc9:function(e,t,n){e.exports=n.p+"img/Cube.8e46f253.svg"},fbf1:function(e,t,n){"use strict";n("eada")},fdc0:function(e,t,n){"use strict";n("a47d")},fe5c:function(e,t,n){"use strict";n("eb28")},febe:function(e,t,n){}});
//# sourceMappingURL=app.2c002f0e.js.map