(function(e){function t(t){for(var a,o,i=t[0],u=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02c7":function(e,t,n){"use strict";var a=n("805f"),s=n.n(a);s.a},"034f":function(e,t,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},1355:function(e,t,n){},"423f":function(e,t,n){"use strict";var a=n("1355"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid col-2"},[n("div",[n("TheLeftMenu")],1),n("div",[n("router-view")],1)])},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"left-menu"},[n("div",{staticClass:"left-menu__items left-menu__items_margin"},e._l(e.menuItems,(function(t,a){return n("div",{key:a,staticClass:"left-menu__item left-menu__item_margin"},[n("i",{staticClass:"fa left-menu__icon left-menu__icon_margin",class:t.icon,attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(t.name)+" ")])})),0),n("div",{staticClass:"left-menu__settings left-menu__settings_padding"},[n("div",{staticClass:"left-menu__foto left-menu__foto_margin"}),n("router-link",{attrs:{to:"/settings/working-hours"}},[e._v("Settings")])],1)])},i=[],u={data:function(){return{menuItems:[{icon:"fa-tachometer",name:"Dashboard"},{icon:"fa-calendar",name:"Calendar"},{icon:"fa-address-card-o",name:"Customers"},{icon:"fa-comments-o",name:"Chats"},{icon:"fa-list-ul",name:"Tasks"},{icon:"fa-inbox",name:"Inbox"},{icon:"fa-tty",name:"Calls"},{icon:"fa-folder-open-o",name:"Leads"},{icon:"fa-users",name:"Team"}]}}},l=u,c=(n("f5a4"),n("2877")),d=Object(c["a"])(l,o,i,!1,null,"b7149d78",null),f=d.exports,m={components:{TheLeftMenu:f}},v=m,_=(n("034f"),Object(c["a"])(v,s,r,!1,null,null,null)),h=_.exports,p=(n("99af"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"settings_margin"},[n("h2",{staticClass:"settings__title settings__title_margin"},[e._v("Settings")]),n("div",{staticClass:"card"},[n("div",{staticClass:"card__header"},[n("TheTopMenu")],1),n("div",{staticClass:"card__body"},[n("router-view")],1)])])},y=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-menu top-menu_padding"},e._l(e.menuItems,(function(t,a){return n("div",{key:a,staticClass:"top-menu__item top-menu__item_padding",class:{"top-menu__active":t.to===e.$route.path}},[n("router-link",{attrs:{to:t.to}},[e._v(e._s(t.name))])],1)})),0)},w=[],k={data:function(){return{menuItems:[{name:"Profile",to:""},{name:"Notifications",to:""},{name:"Password",to:""},{name:"Working Hours",to:"/settings/working-hours"},{name:"Call settings",to:""}]}},components:{}},C=k,x=(n("56de"),Object(c["a"])(C,b,w,!1,null,"0b595ddc",null)),O=x.exports,P={components:{TheTopMenu:O}},$=P,j=(n("02c7"),Object(c["a"])($,g,y,!1,null,"0f711ca2",null)),T=j.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"working-hours working-hours_margin"},[n("div",{staticClass:"working-hours__body working-hours__body_margin"},[n("div",{staticClass:"working-hours__schedule working-hours__schedule_padding "},[n("div",{staticClass:"working-hours__day"},[e._v("Schedule")]),n("div",{staticClass:"working-hours__radio"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.schedule,expression:"schedule"}],attrs:{type:"radio",value:"fixed",id:"fixed"},domProps:{checked:e._q(e.schedule,"fixed")},on:{change:function(t){e.schedule="fixed"}}}),n("label",{attrs:{for:"fixed"}},[e._v("Fixed")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.schedule,expression:"schedule"}],attrs:{type:"radio",value:"flexible",id:"flexible"},domProps:{checked:e._q(e.schedule,"flexible")},on:{change:function(t){e.schedule="flexible"}}}),n("label",{attrs:{for:"flexible"}},[e._v("Flexible")])])]),n("div",{staticClass:"working-hours__item"},[n("div",{staticClass:"working-hours__day"},[e._v("Working hours")]),n("div",{staticClass:"working-hours__slider"},[n("div",{staticClass:"working-hours__time-inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.workingHours[0],expression:"workingHours[0]"}],attrs:{type:"time"},domProps:{value:e.workingHours[0]},on:{input:function(t){t.target.composing||e.$set(e.workingHours,0,t.target.value)}}}),e._v(" - "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.workingHours[1],expression:"workingHours[1]"}],attrs:{type:"time"},domProps:{value:e.workingHours[1]},on:{input:function(t){t.target.composing||e.$set(e.workingHours,1,t.target.value)}}})]),n("VueSlider",{attrs:{"enable-cross":!1,data:e.hours,height:8},model:{value:e.workingHours,callback:function(t){e.workingHours=t},expression:"workingHours"}})],1)]),e._l(Object.keys(e.days),(function(t){return n("div",{key:t,staticClass:"working-hours__item"},[n("div",{staticClass:"working-hours__day"},[n("div",{staticClass:"working-hours__checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.days[t].enabled,expression:"days[day].enabled"}],attrs:{type:"checkbox",id:t,checked:""},domProps:{checked:Array.isArray(e.days[t].enabled)?e._i(e.days[t].enabled,null)>-1:e.days[t].enabled},on:{change:function(n){var a=e.days[t].enabled,s=n.target,r=!!s.checked;if(Array.isArray(a)){var o=null,i=e._i(a,o);s.checked?i<0&&e.$set(e.days[t],"enabled",a.concat([o])):i>-1&&e.$set(e.days[t],"enabled",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.days[t],"enabled",r)}}}),n("label",{attrs:{for:t}},[e._v(e._s(t))])])]),e.days[t].enabled?n("div",{staticClass:"working-hours__slider"},[n("div",{staticClass:"working-hours__time-inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.days[t].value[0],expression:"days[day].value[0]"}],attrs:{type:"time"},domProps:{value:e.days[t].value[0]},on:{input:function(n){n.target.composing||e.$set(e.days[t].value,0,n.target.value)}}}),e._v(" - "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.days[t].value[1],expression:"days[day].value[1]"}],attrs:{type:"time"},domProps:{value:e.days[t].value[1]},on:{input:function(n){n.target.composing||e.$set(e.days[t].value,1,n.target.value)}}})]),n("VueSlider",{attrs:{"enable-cross":!1,data:e.hours,height:8},model:{value:e.days[t].value,callback:function(n){e.$set(e.days[t],"value",n)},expression:"days[day].value"}})],1):e._e()])}))],2),e._m(0)])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"working-hours__save"},[n("button",{staticClass:"working-hours__save-button working-hours__save-button_margin"},[e._v("Save Changes")]),n("span",{staticClass:"working-hours__cancel working-hours__cancel_margin"},[e._v("Cancel")]),e._v(" to reset changes ")])}],M=n("4971"),N=n.n(M),E=(n("d55b"),{components:{VueSlider:N.a},data:function(){return{schedule:"fixed",workingHours:["08:00","17:00"],hours:[],days:{monday:{enabled:!0,value:["08:00","17:00"]},tuesday:{enabled:!0,value:["08:00","17:00"]},wedndesday:{enabled:!0,value:["08:00","17:00"]},thursday:{enabled:!0,value:["08:00","17:00"]},friday:{enabled:!0,value:["08:00","17:00"]},saturday:{enabled:!1,value:["08:00","17:00"]},sunday:{enabled:!1,value:["08:00","17:00"]}}}},created:function(){for(var e=0;e<1440;e++)this.hours.push(e%60===0?"".concat(this.lessThan(e/60),":00"):"".concat(this.lessThan(Math.floor(e/60)),":").concat(this.lessThan(e%60)))},filter:{},methods:{lessThan:function(e){return e<10?"0".concat(e):e}}}),I=E,A=(n("423f"),Object(c["a"])(I,H,S,!1,null,"8e5ebd90",null)),L=A.exports,V=[{path:"/settings",name:"settings",component:T,children:[{path:"working-hours",name:"working-hours",component:L}]}];a["default"].use(p["a"]);var q=[].concat(V),F=new p["a"]({mode:"history",base:"/",routes:q}),J=F;a["default"].config.productionTip=!1,new a["default"]({router:J,render:function(e){return e(h)}}).$mount("#app")},"56de":function(e,t,n){"use strict";var a=n("6e4c"),s=n.n(a);s.a},"6e4c":function(e,t,n){},"805f":function(e,t,n){},"85ec":function(e,t,n){},d55b:function(e,t,n){},f1aa:function(e,t,n){},f5a4:function(e,t,n){"use strict";var a=n("f1aa"),s=n.n(a);s.a}});
//# sourceMappingURL=app.b4b1bc8c.js.map