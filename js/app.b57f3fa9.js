(function(t){function e(e){for(var n,i,s=e[0],c=e[1],d=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Tea-Hub/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"043c":function(t,e,a){},"0596":function(t,e,a){"use strict";a("b759")},"138e":function(t,e,a){},2038:function(t,e,a){"use strict";a("2f83")},"263d":function(t,e,a){"use strict";a("7c6b")},"2b12":function(t,e,a){"use strict";a("cccb")},"2c3f":function(t,e,a){"use strict";a("358e")},"2f83":function(t,e,a){},3082:function(t,e,a){},3491:function(t,e,a){},"358e":function(t,e,a){},"45c9":function(t,e,a){},"520d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("Banner",{attrs:{windowTop:t.windowTop},on:{closeMenu:function(e){return t.setMenuState(!1)}}}),a("MobileMenuBar",{attrs:{windowTop:t.windowTop},on:{openMenu:function(e){return t.setMenuState(!0)}}}),a("MenuItems",{class:{"menu-mobile":!0,open:t.menuOpened},attrs:{role:t.role,route:this.$route.name},on:{closeMenu:function(e){return t.setMenuState(!1)}}}),a("MenuItems",{staticClass:"menu-desktop",attrs:{role:t.role,route:this.$route.name}})],1)},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:{banner:!0,sticky:t.windowTop>55},on:{click:function(e){return t.$emit("closeMenu")}}},[a("router-link",{attrs:{to:"/"}},[a("h1",[t._v("Tea Hub")])])],1)},d=[],l={name:"banner",props:["windowTop"]},u=l,p=(a("b47d"),a("2877")),f=Object(p["a"])(u,c,d,!1,null,"0be0f43d",null),h=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:{"mobile-bar":!0,sticky:t.windowTop>55},on:{click:function(e){return t.$emit("openMenu")}}},[a("MenuIcon")],1)},v=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticStyle:{"enable-background":"new 0 0 297 297"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 297 297","xml:space":"preserve"}},[a("g",[a("path",{attrs:{d:"M279.368,24.726H102.992c-9.722,0-17.632,7.91-17.632,\n        17.632V67.92c0,9.722,7.91,17.632,17.632,17.632h176.376c9.722,\n        0,17.632-7.91,17.632-17.632V42.358C297,32.636,289.09,24.726,279.368,\n        24.726z"}}),a("path",{attrs:{d:"M279.368,118.087H102.992c-9.722,0-17.632,7.91-17.632,\n        17.632v25.562c0,9.722,7.91,17.632,17.632,17.632h176.376c9.722,\n        0,17.632-7.91,17.632-17.632v-25.562C297,125.997,289.09,118.087,\n        279.368,118.087z"}}),a("path",{attrs:{d:"M279.368,211.448H102.992c-9.722,0-17.632,7.91-17.632,\n        17.633v25.561c0,9.722,7.91,17.632,17.632,17.632h176.376c9.722,\n        0,17.632-7.91,17.632-17.632v-25.561C297,219.358,289.09,211.448,\n        279.368,211.448z"}}),a("path",{attrs:{d:"M45.965,24.726H17.632C7.91,24.726,0,32.636,0,42.358V67.92c0,\n        9.722,7.91,17.632,17.632,17.632h28.333c9.722,0,17.632-7.91,\n        17.632-17.632V42.358C63.597,32.636,55.687,24.726,45.965,24.726z"}}),a("path",{attrs:{d:"M45.965,118.087H17.632C7.91,118.087,0,125.997,0,135.719v25.562c0,\n        9.722,7.91,17.632,17.632,17.632h28.333c9.722,0,17.632-7.91,\n        17.632-17.632v-25.562C63.597,125.997,55.687,118.087,45.965,118.087z"}}),a("path",{attrs:{d:"M45.965,211.448H17.632C7.91,211.448,0,219.358,0,229.081v25.561c0,\n        9.722,7.91,17.632,17.632,17.632h28.333c9.722,0,17.632-7.91,\n        17.632-17.632v-25.561C63.597,219.358,55.687,211.448,45.965,211.448z"}})])])},g=[],y=(a("7614"),{}),b=Object(p["a"])(y,_,g,!1,null,"119fcff6",null),D=b.exports,C={name:"mobile-menu-bar",props:["windowTop"],components:{MenuIcon:D}},E=C,O=(a("2b12"),Object(p["a"])(E,m,v,!1,null,"60568487",null)),M=O.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{on:{click:function(e){return t.$emit("closeMenu")}}},["admin"===t.role?a("router-link",{class:{active:"calendar"===t.route},attrs:{to:"/calendar"}},[t._v(" Kalendarz ")]):t._e(),"admin"===t.role?a("router-link",{class:{active:"other"===t.route},attrs:{to:"/other"}},[t._v(" Inne ")]):t._e()],1)},x=[],T={name:"menu-items",props:["route","role"]},w=T,S=(a("2038"),Object(p["a"])(w,A,x,!1,null,"83cf5002",null)),$=S.exports,k={name:"Header",components:{Banner:h,MobileMenuBar:M,MenuItems:$},data:function(){return{role:"admin",menuOpened:!1,windowTop:0}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){this.windowTop=window.top.scrollY},setMenuState:function(t){var e=document.body;e.classList.toggle("noscroll",t),this.menuOpened=t}}},q=k,j=(a("f520"),Object(p["a"])(q,i,s,!1,null,"5971626c",null)),N=j.exports,L={name:"app",components:{Header:N},mounted:function(){var t=new Date;this.$store.dispatch("getQuotes"),this.$store.dispatch("getDates"),this.$store.dispatch("getCalendar",{year:t.getFullYear(),month:t.getMonth()+1})}},U=L,I=(a("5c0b"),Object(p["a"])(U,o,r,!1,null,null,null)),P=I.exports,R=a("8c4f"),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[t.editModalOpen?a("CalendarModal",{attrs:{data:this.editedData},on:{closeModal:t.closeEditModal}}):t._e(),a("Quote",{staticClass:"dashboard-layout"}),a("section",{staticClass:"dashboard-layout dashboard-bottom_container"},[a("CalendarDay",{on:{openModal:t.openEditModal}}),a("Dates")],1),a("div",{staticClass:"dashboard-background"})],1)},Q=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 0!==t.quotes.length?a("div",{staticClass:"quote"},[a("p",[t._v(t._s(t.randomQuote.strong))])]):t._e()},z=[],H={name:"quote",computed:{quotes:function(){return this.$store.state.quotes.quotes},randomQuote:function(){if(0!==this.quotes.length){var t=0,e=this.quotes.length,a=t+Math.floor((e-t)*Math.random());return this.quotes[a]}return""}}},Y=H,W=(a("56ed"),Object(p["a"])(Y,J,z,!1,null,"119a589e",null)),B=W.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.calendarData.year&&null!==t.calendarDaysUpdating?a("section",{staticClass:"calendar_day-container",on:{click:function(e){return t.$emit("openModal",t.editedData)}}},[t.calendarLoading||-1!==t.calendarDaysUpdating.indexOf(t.currentDay)?a("div",{staticClass:"calendar_day-loader"}):t._e(),t.calendarLoading||-1!==t.calendarDaysUpdating.indexOf(t.currentDay)?a("div",{staticClass:"calendar_day-mask"}):t._e(),a("div",{staticClass:"calendar_day"},[a("div",{class:{"calendar_day-circle":!0,red:-1!==t.calendarData.red.indexOf(t.currentDay)}}),a("img",{attrs:{src:-1===t.calendarData.no_cube.indexOf(t.currentDay)?t.CubeWhite:t.Cube}}),a("p",[t._v(" "+t._s(t.calendarData.number[t.currentDay-1]||0)+" ")])])]):t._e()},V=[],Z=(a("99af"),a("c975"),a("fbc9")),K=a.n(Z),X=a("f444"),tt=a.n(X),et={name:"calendar-day",data:function(){var t=new Date;return{Cube:K.a,CubeWhite:tt.a,currentDay:t.getDate(),month:t.getMonth(),year:t.getFullYear()}},computed:{calendarDaysUpdating:function(){return this.$store.state.calendar.calendarDaysUpdating},calendarLoading:function(){return this.$store.state.calendar.calendarLoading},calendarData:function(){return this.$store.state.calendar.calendar},editedData:function(){var t=this.calendarData,e=t._id,a=t.red,n=t.number,o=t.no_cube,r=this.currentDay,i={date:"".concat(r>=10?r:"0".concat(r),".").concat(this.month>=9?this.month+1:"0".concat(this.month+1),".").concat(this.year),id:e,day:r,number:n[r-1],red:-1!==a.indexOf(r),no_cube:-1!==o.indexOf(r)};return i}}},at=et,nt=(a("f644"),Object(p["a"])(at,F,V,!1,null,"d4c557a4",null)),ot=nt.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[0!==t.upcomingEvents.length?a("div",{staticClass:"dates"},[!0===t.datesLoading||0!==t.datesDateUpdating.length?a("div",{staticClass:"dates-loader"}):t._e(),t._l(t.daysInAdvance+1,(function(e){return a("section",{key:e},[0!==t.eventFilter(e-1).length?a("div",{staticClass:"dates-block"},[a("p",{staticClass:"dates-heading"},[t._v(" "+t._s(e-1===0?"Dzisiaj":"")+" "+t._s(e-1===1?"Jutro":"")+" "+t._s(e-1>1?"Za "+(e-1)+" dni":"")+" ")]),t._l(t.eventFilter(e-1),(function(e){return a("span",{key:e.id},[a("p",{staticClass:"dates-date"},[t._v(t._s(e.event))])])}))],2):t._e()])}))],2):t._e()])},it=[],st=(a("4de4"),a("4160"),a("159b"),a("5530")),ct={name:"dates",data:function(){return{daysInAdvance:7}},computed:{datesDateUpdating:function(){return this.$store.state.dates.datesDateUpdating},datesLoading:function(){return this.$store.state.dates.datesLoading},storedDates:function(){return this.$store.state.dates.dates},upcomingEvents:function(){var t=[],e=864e5,a=this.daysInAdvance*e,n=new Date,o=n.getMonth(),r=n.getFullYear(),i=new Date(r,o,n.getDate()),s=i.getTime(),c=this.$store.state.dates.dates;return c.forEach((function(n){var i=parseInt(n.day,10),c=parseInt(n.month,10)-1,d=r;n.year&&(d=parseInt(n.year,10)),c<o&&(d=r+1);var l=new Date(d,c,i),u=l.getTime(),p=u-s;if(p<=a&&p>-1*e){var f=Math.floor(p/e);t.push(Object(st["a"])(Object(st["a"])({},n),{},{daysLeft:f}))}})),t}},methods:{eventFilter:function(t){var e=this.upcomingEvents,a=e.filter((function(e){return e.daysLeft===t}));return a}}},dt=ct,lt=(a("70af"),Object(p["a"])(dt,rt,it,!1,null,"fdf8e09c",null)),ut=lt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"modal-box"},[a("div",{staticClass:"modal-mask",on:{click:function(e){return t.$emit("closeModal")}}}),a("section",{staticClass:"modal-proper"},[a("header",[t._v(t._s(t.date))]),a("div",{staticClass:"modal-selects"},[a("div",{staticClass:"modal-section"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.red,expression:"red"}],attrs:{id:"red",type:"checkbox"},domProps:{checked:Array.isArray(t.red)?t._i(t.red,null)>-1:t.red},on:{change:function(e){var a=t.red,n=e.target,o=!!n.checked;if(Array.isArray(a)){var r=null,i=t._i(a,r);n.checked?i<0&&(t.red=a.concat([r])):i>-1&&(t.red=a.slice(0,i).concat(a.slice(i+1)))}else t.red=o}}}),a("label",{attrs:{for:"red"}},[a("div",{class:{"modal-circle":!0,red:t.red}})])]),a("div",{staticClass:"modal-section"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.no_cube,expression:"no_cube"}],attrs:{id:"cube",type:"checkbox"},domProps:{checked:Array.isArray(t.no_cube)?t._i(t.no_cube,null)>-1:t.no_cube},on:{change:function(e){var a=t.no_cube,n=e.target,o=!!n.checked;if(Array.isArray(a)){var r=null,i=t._i(a,r);n.checked?i<0&&(t.no_cube=a.concat([r])):i>-1&&(t.no_cube=a.slice(0,i).concat(a.slice(i+1)))}else t.no_cube=o}}}),a("label",{attrs:{for:"cube"}},[a("img",{attrs:{src:t.no_cube?t.Cube:t.CubeWhite}})])])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{type:"text",placeholder:"Powtórzenia",spellcheck:"false"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}}),a("footer",[a("button",{on:{click:t.update}},[t._v("Zmień")]),a("button",{on:{click:function(e){return t.$emit("closeModal")}}},[t._v("Anuluj")])])])])},ft=[],ht={name:"calendar-modal",props:["data"],data:function(){return{Cube:K.a,CubeWhite:tt.a,date:this.$props.data.date,id:this.$props.data.id,day:this.$props.data.day,number:this.$props.data.number,red:this.$props.data.red,no_cube:this.$props.data.no_cube}},methods:{update:function(){var t=this,e=this.id,a=this.day,n=this.number,o=this.red,r=this.no_cube,i={day:a,number:n,red:o,no_cube:r};this.$store.dispatch("updateCalendar",{id:e,payload:i}).then((function(){t.$emit("closeModal")}))}}},mt=ht,vt=(a("982b"),Object(p["a"])(mt,pt,ft,!1,null,"830d394a",null)),_t=vt.exports,gt={name:"dashboard",components:{Quote:B,CalendarDay:ot,Dates:ut,CalendarModal:_t},data:function(){return{editModalOpen:!1,editedData:{}}},methods:{openEditModal:function(t){!1===this.$store.state.calendar.calendarLoading&&(this.editedData=t,this.editModalOpen=!0)},closeEditModal:function(){this.editModalOpen=!1,this.editedData={}}}},yt=gt,bt=(a("b2f6"),Object(p["a"])(yt,G,Q,!1,null,"3ef3e99d",null)),Dt=bt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects"},[a("p",{on:{click:function(e){return t.increment()}}},[t._v("Projekty")])])},Et=[],Ot={name:"projects"},Mt=Ot,At=Object(p["a"])(Mt,Ct,Et,!1,null,null,null),xt=At.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"calendar"},[t.editModalOpen?a("CalendarModal",{attrs:{data:this.editedData},on:{closeModal:t.closeEditModal}}):t._e(),t.calendarData.year&&null!==t.calendarDaysUpdating?a("main",{staticClass:"calendar-proper"},[t.calendarLoading||0!==t.calendarDaysUpdating.length?a("div",{staticClass:"calendar-loader"}):t._e(),t.calendarLoading||0!==t.calendarDaysUpdating.length?a("div",{staticClass:"calendar-mask"}):t._e(),t._l(t.emptyDays,(function(t){return a("div",{key:"empty-"+t,staticClass:"calendar-day"})})),t._l(t.daysInMonth,(function(e){return a("div",{key:"actual-"+e,class:{"calendar-day":!0,"calendar-day-filled":!0,red:-1!==t.calendarData.red.indexOf(e),blocked:e>t.currentDay,current:e===t.currentDay},on:{click:function(a){return t.openEditModal(e)}}},[e>t.currentDay?a("p",[t._v(t._s(e))]):t._e(),e<=t.currentDay?a("div",{staticClass:"calendar-day-footer"},[a("p",[t._v(" "+t._s(t.calendarData.number[e-1])+" ")]),a("img",{attrs:{src:-1===t.calendarData.no_cube.indexOf(e)?t.CubeWhite:t.Cube}})]):t._e()])}))],2):t._e()],1)},wt=[],St={name:"calendar",components:{CalendarModal:_t},data:function(){var t=new Date;return{Cube:K.a,CubeWhite:tt.a,currentDate:t,editModalOpen:!1,editedData:{},currentDay:t.getDate(),month:t.getMonth(),year:t.getFullYear()}},computed:{calendarDaysUpdating:function(){return this.$store.state.calendar.calendarDaysUpdating},calendarLoading:function(){return this.$store.state.calendar.calendarLoading},calendarData:function(){return this.$store.state.calendar.calendar},emptyDays:function(){var t=this.currentDate.getDay()-this.currentDay%7+1;return t>0?t-1:t+6},daysInMonth:function(){return new Date(this.year,this.month+1,0).getDate()}},methods:{openEditModal:function(t){if(t<=this.currentDay&&!1===this.calendarLoading&&0===this.calendarDaysUpdating.length){var e=this.calendarData,a=e._id,n=e.red,o=e.number,r=e.no_cube,i={date:"".concat(t>=10?t:"0".concat(t),".").concat(this.month>=9?this.month+1:"0".concat(this.month+1),".").concat(this.year),id:a,day:t,number:o[t-1],red:-1!==n.indexOf(t),no_cube:-1!==r.indexOf(t)};this.editedData=i,this.editModalOpen=!0}},closeEditModal:function(){this.editModalOpen=!1,this.editedData={}}}},$t=St,kt=(a("eae9"),Object(p["a"])($t,Tt,wt,!1,null,"07613ba0",null)),qt=kt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"other"},[a("Tabs",{attrs:{viewData:t.viewData,view:t.view},on:{changeTab:function(e){return t.switchTab(e)}}}),"quotes"===t.view?a("Quotes"):t._e(),"dates"===t.view?a("Dates"):t._e()],1)},Nt=[],Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"tabs"},t._l(t.viewData,(function(e){return a("div",{key:e.label,staticClass:"tabs-label",class:{active:t.view===e.label},on:{click:function(a){return t.$emit("changeTab",e.label)}}},[t._v(" "+t._s(e.text)+" ")])})),0)},Ut=[],It={name:"tabs",props:["view","viewData"]},Pt=It,Rt=(a("0596"),Object(p["a"])(Pt,Lt,Ut,!1,null,"25fb9b12",null)),Gt=Rt.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"quote"},[t.modalOpen?a("AddModal",{attrs:{type:"quote"},on:{closeModal:t.closeModal}}):t._e(),t.editModalOpen?a("EditModal",{attrs:{type:"quote",data:this.editedData},on:{closeModal:t.closeEditModal}}):t._e(),t._l(t.quotes,(function(e){return a("div",{key:e.id,staticClass:"quote-container",on:{click:function(a){return t.openEditModal(e)}}},[a("p",{staticClass:"quote-text"},[t._v(" "+t._s(e.text)+" "),a("strong",[t._v(" "+t._s(e.strong)+" ")])])])})),a("section",{on:{click:t.openModal}},[a("AddButton")],1)],2)},Jt=[],zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button"},[t._v("+")])},Ht=[],Yt={name:"add-button"},Wt=Yt,Bt=(a("9263"),Object(p["a"])(Wt,zt,Ht,!1,null,"7aacf710",null)),Ft=Bt.exports,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"modal-box"},[a("div",{staticClass:"modal-mask",on:{click:function(e){return t.$emit("closeModal")}}}),a("section",{staticClass:"modal-proper"},[a("header",[t._v("Dodaj")]),"quote"===t.type?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote.text,expression:"quote.text"}],attrs:{placeholder:"Początek...",spellcheck:"false"},domProps:{value:t.quote.text},on:{input:function(e){e.target.composing||t.$set(t.quote,"text",e.target.value)}}}):t._e(),t._v(" "),"quote"===t.type?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote.strong,expression:"quote.strong"}],staticClass:"bold",attrs:{placeholder:"Pointa...",spellcheck:"false"},domProps:{value:t.quote.strong},on:{input:function(e){e.target.composing||t.$set(t.quote,"strong",e.target.value)}}}):t._e(),t._v(" "),"date"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.date.day,expression:"date.day"}],attrs:{placeholder:"DD",spellcheck:"false"},domProps:{value:t.date.day},on:{input:function(e){e.target.composing||t.$set(t.date,"day",e.target.value)}}}):t._e(),"date"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.date.month,expression:"date.month"}],attrs:{placeholder:"MM",spellcheck:"false"},domProps:{value:t.date.month},on:{input:function(e){e.target.composing||t.$set(t.date,"month",e.target.value)}}}):t._e(),"date"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.date.year,expression:"date.year"}],attrs:{placeholder:"RRRR",spellcheck:"false"},domProps:{value:t.date.year},on:{input:function(e){e.target.composing||t.$set(t.date,"year",e.target.value)}}}):t._e(),"date"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.date.event,expression:"date.event"}],attrs:{placeholder:"Wydarzenie",spellcheck:"false"},domProps:{value:t.date.event},on:{input:function(e){e.target.composing||t.$set(t.date,"event",e.target.value)}}}):t._e(),a("footer",[a("button",{on:{click:t.send}},[t._v("Stwórz")]),a("button",{on:{click:function(e){return t.$emit("closeModal")}}},[t._v("Anuluj")])]),t.error?a("p",[t._v("Coś jest nie tak...")]):t._e()])])},Zt=[],Kt={name:"add-modal",props:["type"],data:function(){return{quote:{text:"",strong:""},date:{day:"",month:"",year:"",event:""},error:!1}},methods:{validate:function(t,e){if("quote"===t&&""!==e.text&&""!==e.strong)return!0;if("date"===t){var a=e.day,n=e.month,o=e.year,r=e.event;if(""!==a&&2===a.length&&parseInt(a,10)>0&&parseInt(a,10)<=31&&""!==n&&2===n.length&&parseInt(n,10)>0&&parseInt(n,10)<=12&&(""!==o&&4===o.length||""===o)&&""!==r)return!0}return!1},send:function(){var t=this,e=this.$props.type;if("quote"===e){var a=this.validate("quote",this.quote);a&&this.$store.dispatch("postQuote",{text:this.quote.text,strong:this.quote.strong}).then((function(){t.$emit("closeModal")}))}if("date"===e){var n=this.validate("date",this.date);if(n){this.error=!1;var o={day:this.date.day,month:this.date.month,event:this.date.event};""!==this.date.year&&(o.year=this.date.year),this.$store.dispatch("postDate",o).then((function(){t.$emit("closeModal")}))}else this.error=!0}}}},Xt=Kt,te=(a("8652"),Object(p["a"])(Xt,Vt,Zt,!1,null,"13a05d38",null)),ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"modal-box"},[a("div",{staticClass:"modal-mask",on:{click:function(e){return t.$emit("closeModal")}}}),a("section",{staticClass:"modal-proper"},[a("header",[t._v("Edytuj")]),"quote"===t.type?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote.text,expression:"quote.text"}],attrs:{placeholder:"Początek...",spellcheck:"false"},domProps:{value:t.quote.text},on:{input:function(e){e.target.composing||t.$set(t.quote,"text",e.target.value)}}}):t._e(),t._v(" "),"quote"===t.type?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote.strong,expression:"quote.strong"}],staticClass:"bold",attrs:{placeholder:"Pointa...",spellcheck:"false"},domProps:{value:t.quote.strong},on:{input:function(e){e.target.composing||t.$set(t.quote,"strong",e.target.value)}}}):t._e(),t._v(" "),"date"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.date.day,expression:"date.day"}],attrs:{placeholder:"DD",spellcheck:"false"},domProps:{value:t.date.day},on:{input:function(e){e.target.composing||t.$set(t.date,"day",e.target.value)}}}):t._e(),"date"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.date.month,expression:"date.month"}],attrs:{placeholder:"MM",spellcheck:"false"},domProps:{value:t.date.month},on:{input:function(e){e.target.composing||t.$set(t.date,"month",e.target.value)}}}):t._e(),"date"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.date.year,expression:"date.year"}],attrs:{placeholder:"RRRR",spellcheck:"false"},domProps:{value:t.date.year},on:{input:function(e){e.target.composing||t.$set(t.date,"year",e.target.value)}}}):t._e(),"date"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.date.event,expression:"date.event"}],attrs:{placeholder:"Wydarzenie",spellcheck:"false"},domProps:{value:t.date.event},on:{input:function(e){e.target.composing||t.$set(t.date,"event",e.target.value)}}}):t._e(),a("footer",[a("button",{on:{click:t.update}},[t._v("Zmień")]),a("button",{on:{click:function(e){return t.$emit("closeModal")}}},[t._v("Anuluj")]),a("button",{on:{click:t.remove}},[t._v("Usuń")])]),t.error?a("p",[t._v("Coś jest nie tak...")]):t._e()])])},ne=[],oe={name:"add-modal",props:["type","data"],data:function(){return{quote:{text:this.$props.data.text||"",strong:this.$props.data.strong||""},date:{day:this.$props.data.day||"",month:this.$props.data.month||"",year:this.$props.data.year||"",event:this.$props.data.event||""},error:!1}},methods:{validate:function(t,e){if("quote"===t&&""!==e.text&&""!==e.strong)return!0;if("date"===t){var a=e.day,n=e.month,o=e.year,r=e.event;if(""!==a&&2===a.length&&parseInt(a,10)>0&&parseInt(a,10)<=31&&""!==n&&2===n.length&&parseInt(n,10)>0&&parseInt(n,10)<=12&&(""!==o&&4===o.length||""===o)&&""!==r)return!0}return!1},update:function(){var t=this,e=this.$props,a=e.type,n=e.data,o=n._id;if("quote"===a){var r=this.validate("quote",this.quote);if(r){this.error=!1;var i={text:this.quote.text,strong:this.quote.strong};this.$store.dispatch("updateQuote",{id:o,payload:i}).then((function(){t.$emit("closeModal")}))}}if("date"===a){var s=this.validate("date",this.date);if(s){this.error=!1;var c={day:this.date.day,month:this.date.month,event:this.date.event,year:""!==this.date.year?this.date.year:""};this.$store.dispatch("updateDate",{id:o,payload:c}).then((function(){t.$emit("closeModal")}))}else this.error=!0}},remove:function(){var t=this,e=this.$props,a=e.type,n=e.data,o=n._id;"quote"===a&&this.$store.dispatch("deleteQuote",o).then((function(){t.$emit("closeModal")})),"date"===a&&this.$store.dispatch("deleteDate",o).then((function(){t.$emit("closeModal")}))}}},re=oe,ie=(a("2c3f"),Object(p["a"])(re,ae,ne,!1,null,"c1591fe4",null)),se=ie.exports,ce={name:"quotes",components:{AddButton:Ft,AddModal:ee,EditModal:se},data:function(){return{modalOpen:!1,editModalOpen:!1,editedData:{}}},computed:{quotes:function(){return this.$store.state.quotes.quotes}},methods:{openModal:function(){this.modalOpen=!0},closeModal:function(){this.modalOpen=!1},openEditModal:function(t){this.editedData=t,this.editModalOpen=!0},closeEditModal:function(){this.editModalOpen=!1}}},de=ce,le=(a("ca4c"),Object(p["a"])(de,Qt,Jt,!1,null,"9ac3ece4",null)),ue=le.exports,pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"date"},[t.addModalOpen?a("AddModal",{attrs:{type:"date"},on:{closeModal:t.closeModal}}):t._e(),t.editModalOpen?a("EditModal",{attrs:{type:"date",data:this.editedData},on:{closeModal:t.closeEditModal}}):t._e(),a("p",{staticClass:"date-separator first"},[t._v("Coroczne")]),t._l(t.orderedDates,(function(e){return a("div",{key:e.id,class:{"date-container":!0,loading:-1!==t.datesDateUpdating.indexOf(e._id)},on:{click:function(a){return t.openEditModal(e)}}},[a("p",{staticClass:"date-format"},[t._v(" "+t._s(e.day)+"."+t._s(e.month)+" ")]),a("p",{staticClass:"date-event"},[t._v(" "+t._s(e.event)+" ")]),!0===t.datesLoading&&0===t.datesDateUpdating.length||-1!==t.datesDateUpdating.indexOf(e._id)?a("div",{staticClass:"date-loader"}):t._e(),!0===t.datesLoading&&0===t.datesDateUpdating.length||-1!==t.datesDateUpdating.indexOf(e._id)?a("div",{staticClass:"date-mask"}):t._e()])})),a("p",{staticClass:"date-separator"},[t._v("Terminy")]),t._l(t.orderedOneTimeDates,(function(e){return a("div",{key:e.id,class:{"date-container":!0,grey:!0===t.passed(e),loading:-1!==t.datesDateUpdating.indexOf(e._id)},on:{click:function(a){return t.openEditModal(e)}}},[a("p",{staticClass:"date-format"},[t._v(" "+t._s(e.day)+"."+t._s(e.month)+"."+t._s(e.year)+" ")]),a("p",{staticClass:"date-event"},[t._v(" "+t._s(e.event)+" ")]),!0===t.datesLoading&&0===t.datesDateUpdating.length||-1!==t.datesDateUpdating.indexOf(e._id)?a("div",{staticClass:"date-loader"}):t._e(),!0===t.datesLoading&&0===t.datesDateUpdating.length||-1!==t.datesDateUpdating.indexOf(e._id)?a("div",{staticClass:"date-mask"}):t._e()])})),a("section",{on:{click:t.openModal}},[a("AddButton")],1)],2)},fe=[],he=(a("fb6a"),a("bf19"),{name:"date",components:{AddButton:Ft,AddModal:ee,EditModal:se},data:function(){return{addModalOpen:!1,editModalOpen:!1,editedData:{}}},computed:{datesDateUpdating:function(){return this.$store.state.dates.datesDateUpdating},datesLoading:function(){return this.$store.state.dates.datesLoading},datesData:function(){return this.$store.state.dates.dates},orderedDates:function(){if(0!==this.datesData.length){var t=this.datesData,e=t.filter((function(t){return!t.year})),a=e.sort(this.compare);return a}return[]},orderedOneTimeDates:function(){if(0!==this.datesData.length){var t=this.datesData,e=t.filter((function(t){return t.year})),a=e.sort(this.compareWithYear);return a}return[]}},methods:{compare:function(t,e){return"".concat(t.month).concat(t.day)>"".concat(e.month).concat(e.day)?1:"".concat(e.month).concat(e.day)>"".concat(t.month).concat(t.day)?-1:0},compareWithYear:function(t,e){return"".concat(t.year).concat(t.month).concat(t.day)>"".concat(e.year).concat(e.month).concat(e.day)?1:"".concat(e.year).concat(e.month).concat(e.day)>"".concat(t.year).concat(t.month).concat(t.day)?-1:0},openModal:function(){this.addModalOpen=!0},closeModal:function(){this.addModalOpen=!1},openEditModal:function(t){!1===this.datesLoading&&-1===this.datesDateUpdating.indexOf(t._id)&&(this.editedData=t,this.editModalOpen=!0)},closeEditModal:function(){this.editModalOpen=!1},passed:function(t){var e=(new Date).toJSON().slice(0,10),a=function(t){var e=t.year,a=t.month,n=t.day;return new Date(e,a-1,parseInt(n,10)+1).toJSON().slice(0,10)};return a(t)<e}}}),me=he,ve=(a("263d"),Object(p["a"])(me,pe,fe,!1,null,"44f91c6c",null)),_e=ve.exports,ge={name:"other",components:{Tabs:Gt,Quotes:ue,Dates:_e},data:function(){return{view:"dates",viewData:[{text:"Daty",label:"dates"},{text:"Cytaty",label:"quotes"}]}},methods:{switchTab:function(t){this.view=t}}},ye=ge,be=(a("c52c"),Object(p["a"])(ye,jt,Nt,!1,null,"58481543",null)),De=be.exports;n["a"].use(R["a"]);var Ce=new R["a"]({routes:[{path:"/",name:"dashboard",component:Dt},{path:"/projects",name:"projects",component:xt},{path:"/calendar",name:"calendar",component:qt},{path:"/other",name:"other",component:De},{path:"*",redirect:"/"}]}),Ee=(a("d3b7"),a("2f62")),Oe=(a("b64b"),a("25f0"),a("2909"));n["a"].use(Ee["a"]);var Me="https://tranquil-shelf-80926.herokuapp.com",Ae=function(t,e){var a=[];if(null===e)return!1;var n=Object(st["a"])({},t),o=Object(st["a"])({},e),r=n._id.toString(),i=o._id.toString();if(r!==i)return!1;var s={no_cube:n.no_cube,red:n.red,number:n.number};return Object.keys(s).forEach((function(t){var e=o[t].toString(),n=s[t].toString();a.push(e===n)})),-1===a.indexOf(!1)},xe={state:function(){return{calendar:{},calendarLoading:!1,calendarDaysUpdating:[]}},mutations:{SET_CALENDAR:function(t,e){t.calendar=e},SET_CALENDAR_LOADING:function(t,e){t.calendarLoading=e},SET_CALENDAR_DAYS_UPDATING:function(t,e){var a=-1!==t.calendarDaysUpdating.indexOf(e);a?t.calendarDaysUpdating.filter((function(t){return t!==e})):t.calendarDaysUpdating.push(e)},CLEAR_CALENDAR_DAYS_UPDATING:function(t,e){t.calendarDaysUpdating=e}},actions:{getCalendar:function(t,e){t.commit("SET_CALENDAR_LOADING",!0);var a=localStorage.getItem("calendar"),n=JSON.parse(a);null!==a&&t.commit("SET_CALENDAR",n),fetch("".concat(Me,"/calendar/").concat(e.year,"/").concat(e.month)).then((function(t){return t.json()})).then((function(e){!1===Ae(e,n)&&(localStorage.setItem("calendar",JSON.stringify(e)),t.commit("SET_CALENDAR",e)),t.commit("SET_CALENDAR_LOADING",!1),t.commit("CLEAR_CALENDAR_DAYS_UPDATING",[])})).catch((function(){t.commit("SET_CALENDAR_LOADING",!1),t.commit("CLEAR_CALENDAR_DAYS_UPDATING",[])}))},updateCalendar:function(t,e){t.commit("SET_CALENDAR_DAYS_UPDATING",e.payload.day);var a=e.payload,n=Object(st["a"])({},this.state.calendar),o={number:Object(Oe["a"])(n.calendar.number),red:Object(Oe["a"])(n.calendar.red),no_cube:Object(Oe["a"])(n.calendar.no_cube)};o.number[a.day-1]=parseInt(a.number,10),-1===o.red.indexOf(a.day)&&!0===a.red?o.red.push(a.day):-1!==o.red.indexOf(a.day)&&!1===a.red&&(o.red=o.red.filter((function(t){return t!==a.day}))),-1===o.no_cube.indexOf(a.day)&&!0===a.no_cube?o.no_cube.push(a.day):-1!==o.no_cube.indexOf(a.day)&&!1===a.no_cube&&(o.no_cube=o.no_cube.filter((function(t){return t!==a.day}))),fetch("".concat(Me,"/calendar/").concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(){var e=new Date,a=e.getFullYear(),n=e.getMonth()+1;t.dispatch("getCalendar",{year:a,month:n})})).catch((function(){t.commit("CLEAR_CALENDAR_DAYS_UPDATING",[])}))}}},Te=xe;a("d81d");n["a"].use(Ee["a"]);var we="https://tranquil-shelf-80926.herokuapp.com",Se=function(t,e){var a=!0;if(null===e)return!1;var n=Object(Oe["a"])(t),o=Object(Oe["a"])(e),r=n.map((function(t){return t._id})).toString(),i=o.map((function(t){return t._id})).toString();return r===i&&(n.forEach((function(t){var e=t.day,n=t.month,r=t.year,i=t.event,s=t._id,c=o.filter((function(t){return t._id===s}));c[0].day===e&&c[0].month===n&&c[0].year===r&&c[0].event===i||(a=!1)})),a)},$e={state:function(){return{dates:[],datesLoading:!1,datesDateUpdating:[]}},mutations:{SET_DATES:function(t,e){t.dates=e},SET_DATES_LOADING:function(t,e){t.datesLoading=e},SET_DATES_DATE_UPDATING:function(t,e){var a=-1!==t.datesDateUpdating.indexOf(e);a?t.datesDateUpdating.filter((function(t){return t!==e})):t.datesDateUpdating.push(e)},CLEAR_DATES_DATE_UPDATING:function(t,e){t.datesDateUpdating=e}},actions:{getDates:function(t){t.commit("SET_DATES_LOADING",!0);var e=localStorage.getItem("dates"),a=JSON.parse(e);null!==e&&t.commit("SET_DATES",a),fetch("".concat(we,"/dates")).then((function(t){return t.json()})).then((function(e){!1===Se(e,a)&&(localStorage.setItem("dates",JSON.stringify(e)),t.commit("SET_DATES",e)),t.commit("SET_DATES_LOADING",!1),t.commit("CLEAR_DATES_DATE_UPDATING",[])})).catch((function(){t.commit("SET_DATES_LOADING",!1),t.commit("CLEAR_DATES_DATE_UPDATING",[])}))},postDate:function(t,e){fetch("".concat(we,"/date"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){return t.dispatch("getDates")}))},updateDate:function(t,e){t.commit("SET_DATES_DATE_UPDATING",e.id),fetch("".concat(we,"/date/").concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.payload)}).then((function(){return t.dispatch("getDates")})).catch((function(){t.commit("CLEAR_DATES_DATE_UPDATING",[])}))},deleteDate:function(t,e){t.commit("SET_DATES_DATE_UPDATING",e),fetch("".concat(we,"/date/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(){return t.dispatch("getDates")})).catch((function(){t.commit("CLEAR_DATES_DATE_UPDATING",[])}))}}},ke=$e;n["a"].use(Ee["a"]);var qe="https://tranquil-shelf-80926.herokuapp.com",je=function(t,e){var a=!0;if(null===e)return!1;var n=Object(Oe["a"])(t),o=Object(Oe["a"])(e),r=n.map((function(t){return t._id})).toString(),i=o.map((function(t){return t._id})).toString();return r===i&&(n.forEach((function(t){var e=t.strong,n=t.text,r=t._id,i=o.filter((function(t){return t._id===r}));i[0].strong===e&&i[0].text===n||(a=!1)})),a)},Ne={state:function(){return{quotes:[]}},mutations:{SET_QUOTES:function(t,e){t.quotes=e}},actions:{getQuotes:function(t){var e=localStorage.getItem("quotes"),a=JSON.parse(e);null!==e&&t.commit("SET_QUOTES",a),fetch("".concat(qe,"/quotes")).then((function(t){return t.json()})).then((function(e){!1===je(e,a)&&(localStorage.setItem("quotes",JSON.stringify(e)),t.commit("SET_QUOTES",e))}))},postQuote:function(t,e){fetch("".concat(qe,"/quote"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){return t.dispatch("getQuotes")}))},updateQuote:function(t,e){fetch("".concat(qe,"/quote/").concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.payload)}).then((function(){return t.dispatch("getQuotes")}))},deleteQuote:function(t,e){fetch("".concat(qe,"/quote/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(){return t.dispatch("getQuotes")}))}}},Le=Ne;n["a"].use(Ee["a"]);var Ue="https://tranquil-shelf-80926.herokuapp.com",Ie=new Ee["a"].Store({modules:{dates:ke,quotes:Le,calendar:Te},actions:{getVersion:function(){var t=localStorage.getItem("version");fetch("".concat(Ue,"/version")).then((function(t){return t.json()})).then((function(e){null!==t&&t!==e.version&&window.location.reload(),localStorage.setItem("version",e.version)}))}}}),Pe=(a("b20f"),a("9483"));Object(Pe["a"])("".concat("/Tea-Hub/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,Ie.dispatch("getVersion"),new n["a"]({router:Ce,store:Ie,render:function(t){return t(P)}}).$mount("#app")},"56ed":function(t,e,a){"use strict";a("83aa")},"5a8d":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6a12":function(t,e,a){},"70af":function(t,e,a){"use strict";a("043c")},7614:function(t,e,a){"use strict";a("a5b3")},"7c6b":function(t,e,a){},"836c":function(t,e,a){},"83aa":function(t,e,a){},8616:function(t,e,a){},8652:function(t,e,a){"use strict";a("3082")},9263:function(t,e,a){"use strict";a("836c")},"982b":function(t,e,a){"use strict";a("3491")},"9c0c":function(t,e,a){},a5b3:function(t,e,a){},b20f:function(t,e,a){},b2f6:function(t,e,a){"use strict";a("8616")},b47d:function(t,e,a){"use strict";a("138e")},b759:function(t,e,a){},c52c:function(t,e,a){"use strict";a("5a8d")},ca4c:function(t,e,a){"use strict";a("520d")},cccb:function(t,e,a){},eae9:function(t,e,a){"use strict";a("6a12")},edf4:function(t,e,a){},f444:function(t,e,a){t.exports=a.p+"img/CubeWhite.484b8b07.svg"},f520:function(t,e,a){"use strict";a("45c9")},f644:function(t,e,a){"use strict";a("edf4")},fbc9:function(t,e,a){t.exports=a.p+"img/Cube.8e46f253.svg"}});
//# sourceMappingURL=app.b57f3fa9.js.map