(function(t){function a(a){for(var e,n,r=a[0],o=a[1],c=a[2],d=0,m=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);u&&u(a);while(m.length)m.shift()();return l.push.apply(l,c||[]),s()}function s(){for(var t,a=0;a<l.length;a++){for(var s=l[a],e=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(e=!1)}e&&(l.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},i={app:0},l=[];function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/vuejs-sandbox/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var u=o;l.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"3cf8":function(t,a,s){t.exports=s.p+"img/r2d2-white.62a6b0f9.svg"},"560b":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("SideNav"),s("Banner"),s("div",{staticClass:"container pt-5 mt-5 pb-5"},[s("router-view")],1),s("Footer")],1)},l=[],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"offcanvas offcanvas-start",attrs:{tabindex:"-1",id:"SideNav","aria-labelledby":"SideNavLabel"}},[t._m(0),s("div",{staticClass:"offcanvas-body pt-0"},[s("div",{staticClass:"d-flex justify-content-center align-items-center flex-column text-center fs-5 fw-light"},[s("div",{staticClass:"p-2"},[s("router-link",{attrs:{to:{name:"Grid"},"data-bs-dismiss":"offcanvas"}},[t._v("Grid Stuff")])],1),s("div",{staticClass:"p-2"},[s("router-link",{attrs:{to:{name:"BgBlend"},"data-bs-dismiss":"offcanvas"}},[t._v("Background Blending")])],1),s("div",{staticClass:"p-2"},[s("router-link",{attrs:{to:{name:"Posts"},"data-bs-dismiss":"offcanvas"}},[t._v("Dynamic Routes")])],1),s("div",{staticClass:"p-2"},[s("router-link",{attrs:{to:{name:"About"},"data-bs-dismiss":"offcanvas"}},[t._v("About Us")])],1)])])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"offcanvas-header"},[s("button",{staticClass:"btn-close text-reset",attrs:{type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"}})])}],o={name:"SideNav"},c=o,u=s("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null),m=d.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"nav"}},[e("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark fixed-top"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:s("3cf8"),height:"30px",alt:""}})])],1),t._m(0),t._m(1)])]),e("ContactFormModal")],1)},p=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"navbarNavDropdown"}},[s("ul",{staticClass:"navbar-nav mx-auto"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#","data-bs-toggle":"offcanvas","data-bs-target":"#SideNav","aria-controls":"SideNav"}},[t._v("Side Nav")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#","data-bs-toggle":"modal","data-bs-target":"#contactformModal"}},[t._v("Contact Us")])])])])}],f=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"contactformModal",tabindex:"-1","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("ContactForm")],1)])])])},g=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Contact Us")]),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],h=(s("159b"),s("a630"),s("3ca3"),s("3e48"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("form",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),s("div",{staticClass:"col-6 mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"regarding"}},[t._v("Regarding")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-select",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected=a.target.multiple?s:s[0]}}},t._l(t.regarding,(function(a){return s("option",{key:a.id,domProps:{value:a.value}},[t._v(" "+t._s(a.text)+" ")])})),0)]),s("div",{staticClass:"col-6 mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("Email Address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),s("div",{staticClass:"col-6 mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"phone"}},[t._v("Phone")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"tel",id:"phone"},domProps:{value:t.phone},on:{input:function(a){a.target.composing||(t.phone=a.target.value)}}})]),s("div",{staticClass:"col-12 mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"message"}},[t._v("Message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control w-100",attrs:{id:"message",rows:"4"},domProps:{value:t.message},on:{input:function(a){a.target.composing||(t.message=a.target.value)}}})]),t._m(0)])])])}),b=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pt-4"},[s("div",{staticClass:"small fw-light pb-3"},[t._v("Please allow a couple of business days for us to properly address your message and respond to you.")]),s("div",[s("button",{staticClass:"btn btn-success btn-lg w-100"},[t._v("Send Message")])])])}],_={name:"ContactForm",data:function(){return{name:null,email:null,phone:null,message:null,selected:"",regarding:[{id:0,text:"",value:""},{id:1,text:"Something",value:"something"},{id:2,text:"Another Thing",value:"another thing"},{id:3,text:"Some Other Thing",value:"some other thing"}]}}},C=_,y=Object(u["a"])(C,h,b,!1,null,null,null),x=y.exports,w=s("b681"),S={components:{ContactForm:x},mounted:function(){Array.from(document.querySelectorAll('button[data-bs-toggle="modal"]')).forEach((function(t){return new w["a"](t)}))}},q=S,j=Object(u["a"])(q,f,g,!1,null,null,null),E=j.exports,P={name:"Banner",components:{ContactFormModal:E}},O=P,M=Object(u["a"])(O,v,p,!1,null,null,null),$=M.exports,k=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row bg-dark px-4 py-4 text-white fw-lighter text-center"},[s("div",{staticClass:"col-12 col-md-4 py-3"},[s("div",[t._v("123 Main Street East")]),s("div",[t._v("Toronto ON, L4L 4L4")]),s("div",[t._v("416-555-2468")])]),s("div",{staticClass:"col-12 col-md-4 py-3"},[s("div",{staticClass:"d-flex justify-content-center align-items-start flex-nowrap"},[s("div",{staticClass:"p-2"},[s("i",{staticClass:"fab fa-twitter fa-lg"}),s("div",{staticClass:"text-uppercase small"},[t._v("Twitter")])]),s("div",{staticClass:"p-2"},[s("i",{staticClass:"fab fa-instagram fa-lg"}),s("div",{staticClass:"text-uppercase small"},[t._v("Instagram")])]),s("div",{staticClass:"p-2"},[s("i",{staticClass:"fab fa-facebook fa-lg"}),s("div",{staticClass:"text-uppercase small"},[t._v("Facebook")])]),s("div",{staticClass:"p-2"},[s("i",{staticClass:"fab fa-youtube fa-lg"}),s("div",{staticClass:"text-uppercase small"},[t._v("YouTube")])])])]),s("div",{staticClass:"col-12 col-md-4 py-3"},[s("i",{staticClass:"fab fa-vuejs fa-4x"})])])}],N={name:"Footer"},T=N,A=Object(u["a"])(T,k,D,!1,null,null,null),B=A.exports,L={components:{SideNav:m,Banner:$,Footer:B}},F=L,I=Object(u["a"])(F,i,l,!1,null,null,null),R=I.exports,H=s("8c4f"),U=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("HelloWorld",{attrs:{msg:"Vue.js Sandbox"}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[t._v("Here's some regular body text...")]),s("div",{staticClass:"col"},[s("div",{staticClass:"card shadow"},[s("img",{staticClass:"card-img-top",staticStyle:{"clip-path":"polygon(0 0, 100% 0, 100% 100%, 0% 70%)"},attrs:{src:"https://picsum.photos/350/80?random=1",alt:"..."}}),s("div",{staticClass:"card-body px-4 pb-4 pt-0"},[s("h4",[t._v("Send us a message")]),s("ContactForm")],1)])])])],1)},z=[],G=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v(t._s(t.msg))])])},V=[],J={name:"HelloWorld",props:{msg:String}},W=J,Y=Object(u["a"])(W,G,V,!1,null,null,null),K=Y.exports,Q={name:"Home",components:{HelloWorld:K,ContactForm:x}},X=Q,Z=Object(u["a"])(X,U,z,!1,null,null,null),tt=Z.exports,at=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v("This is an about page")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-7"},[s("div",[s("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sollicitudin ante. Aliquam aliquam nisi et felis ornare vestibulum. Donec ultricies elit eu eleifend commodo. Vestibulum aliquam efficitur erat, a accumsan sem mollis ut. Maecenas mollis lorem vel sapien elementum, pharetra bibendum enim vehicula. Cras a condimentum diam, et commodo libero. Donec eleifend ex at lacus tristique, faucibus vestibulum ipsum pellentesque. Mauris ut commodo justo, ornare sagittis velit. In lobortis lorem risus, ac ornare odio posuere at. Donec accumsan, lectus et scelerisque scelerisque, nisl massa tincidunt ipsum, eu vehicula quam dui vitae dui. Cras vestibulum blandit neque vitae varius. Proin convallis dui vel nulla ultricies, a faucibus purus tincidunt. Integer lacinia imperdiet quam nec placerat. Pellentesque in ipsum ac augue iaculis faucibus id et lorem. Fusce vehicula lectus nec nisi tempor pulvinar. ")]),s("div",{staticClass:"py-3 d-flex justify-content-center"},[s("div",{staticClass:"p-1"},[s("img",{staticClass:"img-thumbnail rounded-circle shadow",attrs:{src:"https://picsum.photos/100/100?random=5",alt:"..."}})]),s("div",{staticClass:"p-1"},[s("img",{staticClass:"img-thumbnail rounded-circle shadow",attrs:{src:"https://picsum.photos/100/100?random=6",alt:"..."}})]),s("div",{staticClass:"p-1"},[s("img",{staticClass:"img-thumbnail rounded-circle shadow glass",attrs:{src:"https://picsum.photos/100/100?random=7",alt:"..."}})]),s("div",{staticClass:"p-1"},[s("img",{staticClass:"img-thumbnail rounded-circle shadow glass",attrs:{src:"https://picsum.photos/100/100?random=8",alt:"..."}})])]),s("p",[t._v(" Curabitur ac ipsum ullamcorper, porttitor lectus ac, elementum purus. Nullam eu elit non urna faucibus rhoncus. Sed viverra at dolor vel rutrum. Sed sagittis arcu nisi, non suscipit eros tincidunt id. Mauris vel orci in purus viverra scelerisque. Nunc non aliquet nunc, vehicula scelerisque mauris. In hac habitasse platea dictumst. ")]),s("p",[t._v(" Proin pulvinar nulla ac blandit lacinia. Maecenas pretium ante vitae varius tincidunt. Curabitur eleifend lectus quis malesuada dignissim. Donec venenatis orci vitae tellus vestibulum pretium. Donec sed egestas mi. Nullam congue varius risus, vel blandit eros dapibus at. Proin sed hendrerit ligula, in pulvinar tortor. Fusce tincidunt leo augue, quis tincidunt nisl malesuada dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ")]),s("div",{staticClass:"py-3"},[s("figure",{staticClass:"figure"},[s("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:"https://picsum.photos/800/150?random=4",alt:"..."}}),s("figcaption",{staticClass:"figure-caption text-end"},[t._v("Just FYI... this is an image.")])])]),s("p",[t._v(" Donec sit amet nulla vel urna suscipit tristique. Morbi leo arcu, molestie id mollis sit amet, dictum in risus. Suspendisse nulla diam, hendrerit vel mauris eget, pharetra tempus ex. Phasellus felis ligula, pulvinar et odio sit amet, congue porta libero. Morbi auctor at ante nec porttitor. Vivamus consequat a velit vel pulvinar. Donec quis elit a libero facilisis scelerisque vel eu nulla. Integer tellus turpis, tincidunt vel volutpat vel, porta quis lorem. Mauris vel semper neque, eget dignissim nunc. Pellentesque in diam porttitor, lacinia enim ac, volutpat diam. Nulla aliquet orci et lectus elementum viverra. Vestibulum at tincidunt sem. Mauris odio nunc, egestas eget urna et, eleifend cursus elit. Pellentesque rhoncus arcu sit amet nunc imperdiet, sed tristique sapien aliquam. Donec vel magna semper diam posuere lobortis vitae sed nibh. Duis sodales urna quis ex eleifend, sit amet venenatis arcu interdum. ")]),s("p",[t._v(" Nam sit amet porttitor enim. Duis facilisis feugiat nunc aliquam tempor. Quisque aliquet a tellus eu mollis. Integer eget ligula lobortis, semper ex ut, ornare orci. Pellentesque est purus, mattis et ultrices ut, gravida sit amet eros. Donec nec dui vulputate, suscipit leo eget, interdum neque. Praesent eu lacinia magna. Suspendisse potenti. Sed nibh enim, ultricies in lorem fringilla, vestibulum vehicula nibh. Aliquam erat volutpat. Proin porttitor, lacus non sagittis semper, arcu enim placerat leo, a convallis augue elit ornare eros. Pellentesque accumsan, lorem at congue congue, metus velit consectetur libero, tincidunt egestas neque ligula quis massa. Integer commodo porta eleifend. Morbi vitae quam fringilla, tempor lectus id, tempor metus. Nam lacinia felis a ipsum lacinia, ac ornare tellus auctor. Phasellus fermentum orci neque, a consequat turpis accumsan quis. ")])])]),s("div",{staticClass:"col offset-md-1"},[s("div",{staticClass:"card shadow-sm mb-4"},[s("img",{staticClass:"card-img-top",staticStyle:{"clip-path":"polygon(0 0, 100% 0, 100% 100%, 0% 70%)"},attrs:{src:"https://picsum.photos/350/100?random=1",alt:"..."}}),s("div",{staticClass:"card-body"},[s("h5",[t._v("Something Cool")]),s("div",{staticClass:"fw-light small"},[t._v(" Curabitur ac ipsum ullamcorper, porttitor lectus ac, elementum purus. Nullam eu elit non urna faucibus rhoncus. Sed viverra at dolor vel rutrum. Sed sagittis arcu nisi, non suscipit eros tincidunt id. Mauris vel orci in purus viverra scelerisque. Nunc non aliquet nunc, vehicula scelerisque mauris. In hac habitasse platea dictumst. ")])])]),s("div",{staticClass:"card shadow-sm mb-4"},[s("img",{staticClass:"card-img-top",staticStyle:{"clip-path":"polygon(0 0, 100% 0, 100% 60%, 0% 100%)"},attrs:{src:"https://picsum.photos/350/100?random=2",alt:"..."}}),s("div",{staticClass:"card-body"},[s("h5",[t._v("Another Cool Thing")]),s("div",{staticClass:"fw-light small"},[t._v(" Mauris pulvinar malesuada consequat. Etiam malesuada enim non rhoncus dapibus. Donec ut posuere dui. Phasellus viverra urna eget turpis dignissim molestie. Morbi laoreet ex eget lectus imperdiet fermentum. Praesent eget massa at tortor mattis sagittis non eu sapien. In ac nisl eros. ")])])]),s("div",{staticClass:"card shadow-sm mb-4"},[s("img",{staticClass:"card-img-top",staticStyle:{"clip-path":"polygon(0 0, 100% 0, 100% 100%, 0% 80%)"},attrs:{src:"https://picsum.photos/350/100?random=3",alt:"..."}}),s("div",{staticClass:"card-body"},[s("h5",[t._v("A Regular Thing")]),s("div",{staticClass:"fw-light small"},[t._v(" Curabitur ac ipsum ullamcorper, porttitor lectus ac, elementum purus. Nullam eu elit non urna faucibus rhoncus. Sed viverra at dolor vel rutrum. Sed sagittis arcu nisi, non suscipit eros tincidunt id. Mauris vel orci in purus viverra scelerisque. Nunc non aliquet nunc, vehicula scelerisque mauris. In hac habitasse platea dictumst. ")])])])])])])}],et=(s("e76e"),{}),it=Object(u["a"])(et,at,st,!1,null,null,null),lt=it.exports,nt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v("Contact Us with this page")])])}],ot={},ct=Object(u["a"])(ot,nt,rt,!1,null,null,null),ut=ct.exports,dt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"d-flex justify-content-between"},[t._m(0),s("div",[s("PopoverTest")],1),s("div",{staticClass:"ps-2"},[s("ModalTest")],1)]),s("ClassList",{attrs:{title:"Data API Testing",brand:"primary",cat1:"Dance",cat2:"Recreational",cat3:"Kiddazzled"}})],1)},mt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pb-3"},[s("h1",{staticClass:"text-primary"},[t._v("Sample List Page")]),s("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere magni molestiae modi accusamus pariatur ratione odit, iure praesentium officia voluptates natus vitae deserunt, quas ducimus aliquam voluptatem! Corrupti, dolor cumque.")])])}],vt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row row-cols-1 row-cols-lg-2"},[s("div",[s("h3",{staticClass:"mb-4",class:"text-"+t.brand},[t._v(t._s(t.title))])]),t._m(0)]),t.classesloaded?t._e():s("div",{staticClass:"p-4 text-center fw-light"},[t._v("Loading class data...")]),t.classesloaded?s("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4"},t._l(t.classes,(function(a,e){return s("div",{key:e,staticClass:"col"},[s("div",{staticClass:"card shadow-sm h-100"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"h6 fw-bold"},[t._v(t._s(a.name))]),s("div",{staticClass:"d-flex justify-content-around flex-wrap"},[s("div",[t._v(t._s(a.start_time)+" - "+t._s(a.end_time))]),s("div",[t._v("Age "+t._s(a.min_age)+" - "+t._s(a.max_age))]),t._l(a.meeting_days.daylist,(function(a,e){return s("div",{key:e},[t._v(" "+t._s(a)+" ")])}))],2)]),s("div",{staticClass:"d-flex justify-content-center align-items-center p-1"},[s("div",{staticClass:"p-1"},[t._v(t._s(a.tuition.fee)+" "),s("span",{staticClass:"small"},[t._v("/month")])]),s("div",{staticClass:"p-1"},[s("button",{staticClass:"btn btn-sm text-white px-4",class:"btn-"+t.brand,attrs:{type:"button"}},[t._v("Register")])])])])])})),0):t._e(),s("table",{staticClass:"table table-hover"},[t._m(1),s("tbody",t._l(t.classes,(function(a,e){return s("tr",{key:e},[s("td",[s("div",[t._v(t._s(a.name))]),s("div",{staticClass:"small fw-light"},[t._v(t._s(a.category1)+" | "+t._s(a.category2)+" | "+t._s(a.category3))])]),s("td",{staticClass:"text-end"},[s("a",{staticClass:"btn btn-sm text-white",class:"btn-"+t.brand,attrs:{href:a.online_reg_link,role:"button",target:"_blank"}},[t._v("Register")])])])})),0)])])},pt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("select",{staticClass:"form-select",attrs:{"aria-label":"Default select example"}},[s("option",{attrs:{selected:""}},[t._v("Open this select menu")]),s("option",{attrs:{value:"1"}},[t._v("One")]),s("option",{attrs:{value:"2"}},[t._v("Two")]),s("option",{attrs:{value:"3"}},[t._v("Three")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",{staticClass:"table-dark"},[s("th",[t._v("Class Registration")]),s("th")])])}],ft=(s("ac1f"),s("466d"),s("d3b7"),s("25f0"),s("fb6a"),s("a15b"),s("5319"),s("bc3a")),gt=s.n(ft),ht={name:"ClassList",props:{title:String,brand:String,cat1:String,cat2:String,cat3:String},data:function(){return{classes:null,classesloaded:Boolean}},methods:{getClassData:function(){var t=this;this.classesloaded=!1,gt.a.get("https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJSON",{headers:{"Content-Type":void 0},params:{OrgId:"520628",Status:"Active",Cat1:this.cat1,Cat2:this.cat2,Cat3:this.cat3}}).then((function(a){var s=a.data.rows;s.forEach((function(a){a.start_time=t.convertTime24to12(a.start_time),a.end_time=t.convertTime24to12(a.end_time),a.min_age&&(a.min_age=t.convertAgeString(a.min_age)),a.max_age&&(a.max_age=t.convertAgeString(a.max_age));var s=new Array;for(var e in a.meeting_days){var i=a.meeting_days[e];i&&s.push(e)}a.meeting_days.daylist=s,a.online_reg_link=a.online_reg_link.replaceAll("&amp;","&")})),t.classes=a.data.rows,t.classesloaded=!0,console.log(t.classes)}))},convertTime24to12:function(t){return t=t.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[t],t.length>1&&(t=t.slice(1),t[5]=+t[0]<12?" AM":" PM",t[0]=+t[0]%12||12),t.join("")},convertAgeString:function(t){t=t.substr(1);for(var a=t.match(/.{1,3}/g),s=0;s<a.length;s++)a[s]=a[s].substring(0,a[s].length-1),a[s]=a[s].replace(/^0+/,"");var e=1*a[0]+a[1]/12;return e}},mounted:function(){this.getClassData()}},bt=ht,_t=Object(u["a"])(bt,vt,pt,!1,null,null,null),Ct=_t.exports,yt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{className:"container p-5"}},[s("button",{staticClass:"btn btn-success btn-sm text-white text-nowrap",attrs:{type:"button","data-bs-toggle":"popover","data-bs-placement":"bottom","data-bs-trigger":"focus","data-bs-content":"Here's a flippin' sweet sample of a popover using Bootstrap 5",title:"Sweet Popover!"}},[t._v(" Popover Test ")])])}],wt={mounted:function(){Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]')).forEach((function(t){return new w["b"](t)}))}},St=wt,qt=Object(u["a"])(St,yt,xt,!1,null,null,null),jt=qt.exports,Et=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Pt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{className:"container p-5"}},[s("button",{staticClass:"btn btn-danger btn-sm text-nowrap",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}},[t._v(" Modal Test ")]),s("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Modal title")]),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),s("div",{staticClass:"modal-body"},[t._v("...")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])])])}],Ot={mounted:function(){Array.from(document.querySelectorAll('button[data-bs-toggle="modal"]')).forEach((function(t){return new w["a"](t)}))}},Mt=Ot,$t=Object(u["a"])(Mt,Et,Pt,!1,null,null,null),kt=$t.exports,Dt={name:"Classes",components:{ClassList:Ct,PopoverTest:jt,ModalTest:kt}},Nt=Dt,Tt=Object(u["a"])(Nt,dt,mt,!1,null,null,null),At=Tt.exports,Bt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v("Grid Stuff")]),t.dataloaded?t._e():s("div",{staticClass:"p-4 text-center fw-light"},[t._v("Loading data...")]),t.dataloaded?s("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-5 pb-5"},t._l(t.data,(function(a,e){return s("div",{key:e,staticClass:"col"},[s("div",{staticClass:"card shadow h-100",staticStyle:{"border-top-right-radius":"4rem","border-bottom-left-radius":"2rem",overflow:"hidden"}},[s("img",{staticClass:"card-img-top",style:"clip-path: polygon(0 0, 100% 0, 100% 100%, 0% "+Math.floor(40*Math.random()+50)+"%)",attrs:{src:"https://picsum.photos/350/200?random="+a.id,alt:"..."}}),s("div",{staticClass:"card-body"},[s("div",{staticClass:"fw-light small"},[s("h5",{staticClass:"text-capitalize"},[t._v(t._s(a.name))]),s("div",[t._v("Username: "+t._s(a.username))])])])])])})),0):t._e()])},Lt=[],Ft={name:"Grid",data:function(){return{data:null,dataloaded:Boolean}},methods:{getData:function(){var t=this;this.dataloaded=!1,gt.a.get("https://jsonplaceholder.typicode.com/users",{}).then((function(a){var s=a.data;t.dataloaded=!0,t.data=s,console.log(t.data)}))}},mounted:function(){this.getData()}},It=Ft,Rt=Object(u["a"])(It,Bt,Lt,!1,null,null,null),Ht=Rt.exports,Ut=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},zt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v("Background Blend Modes")]),s("div",{staticClass:"bg-blending"},[s("div",{staticClass:"bgblend-1"}),s("div",{staticClass:"bgblend-2"}),s("div",{staticClass:"bgblend-3"})])])}],Gt={name:"BgBlend",data:function(){return{}},methods:{}},Vt=Gt,Jt=Object(u["a"])(Vt,Ut,zt,!1,null,null,null),Wt=Jt.exports,Yt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Kt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample"}},[t._v("Button with data-bs-target")]),s("div",{staticClass:"offcanvas offcanvas-start",attrs:{tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel"}},[s("div",{staticClass:"offcanvas-header"},[s("h3",{staticClass:"offcanvas-title fw-light",attrs:{id:"offcanvasExampleLabel"}},[t._v("Choose Stuff")]),s("button",{staticClass:"btn-close text-reset",attrs:{type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"}})]),s("div",{staticClass:"offcanvas-body"},[s("div",{staticClass:"row row-cols-3 gx-2 gy-5 text-center fw-bold small text-uppercase"},[s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=1",alt:"..."}}),s("div",[t._v("Something")])]),s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=2",alt:"..."}}),s("div",[t._v("Another Thing")])]),s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=3",alt:"..."}}),s("div",[t._v("Some Stuff")])]),s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=4",alt:"..."}}),s("div",[t._v("Many Things")])]),s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=5",alt:"..."}}),s("div",[t._v("Lots of Things")])]),s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=6",alt:"..."}}),s("div",[t._v("Lots of Stuff")])]),s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=7",alt:"..."}}),s("div",[t._v("Other Items")])]),s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=8",alt:"..."}}),s("div",[t._v("Many Others")])]),s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=9",alt:"..."}}),s("div",[t._v("Things")])]),s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=10",alt:"..."}}),s("div",[t._v("Items & More")])]),s("div",{staticClass:"col"},[s("img",{staticClass:"img-fluid",staticStyle:{"clip-path":"circle()"},attrs:{src:"https://picsum.photos/350/200?random=11",alt:"..."}}),s("div",[t._v("The Rest")])])])])])])}],Qt={},Xt=Object(u["a"])(Qt,Yt,Kt,!1,null,null,null),Zt=Xt.exports,ta=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v("Dynamic Routes")]),s("table",{staticClass:"table table-sm table-striped"},[s("thead",[s("tr",[s("th",[t._v(" Posts "),s("span",{staticClass:"fw-light small ps-3"},[t._v("("+t._s(t.data.length)+" posts found)")])]),s("th")])]),s("tbody",t._l(t.data,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"text-capitalize"},[t._v(t._s(a.title))]),s("td",{staticClass:"text-end"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"PostDetail",params:{id:a.id}}}},[t._v("Details...")])],1)])})),0)])])},aa=[],sa={name:"DynamicRoutes",data:function(){return{data:null,dataloaded:Boolean}},methods:{getData:function(){var t=this;this.dataloaded=!1,gt.a.get("https://jsonplaceholder.typicode.com/posts",{}).then((function(a){var s=a.data;t.dataloaded=!0,t.data=s,console.log(t.data)}))}},mounted:function(){this.getData()}},ea=sa,ia=Object(u["a"])(ea,ta,aa,!1,null,null,null),la=ia.exports,na=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pb-5"},[s("div",{staticClass:"d-flex justify-content-start align-items-center mb-4"},[s("div",{staticClass:"pe-3"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"Posts"}}},[s("i",{staticClass:"fas fa-chevron-left me-2"}),t._v("Back")])],1),s("h1",{staticClass:"mb-0"},[t._v("Post Details")])]),s("h4",{staticClass:"text-capitalize"},[t._v(t._s(t.post.title))]),s("div",{staticClass:"pb-5"},[t._v(t._s(t.post.body))]),s("h5",[t._v(" Comments "),s("span",{staticClass:"fw-light small ps-3"},[t._v("("+t._s(t.comments.length)+" comments found)")])]),s("table",{staticClass:"table table-striped"},[t._m(0),s("tbody",t._l(t.comments,(function(a,e){return s("tr",{key:e},[s("td",[t._v(t._s(a.email))]),s("td",[t._v(t._s(a.name))]),s("td",[t._v(t._s(a.body))])])})),0)])])},ra=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",[t._v("Posted by")]),s("th",[t._v("Comment Title")]),s("th",[t._v("Comment")])])])}],oa={props:["id"],data:function(){return{post:null,comments:null,postreturned:!1,commentsreturned:!1}},methods:{getPost:function(){var t=this;this.postreturned=!1,gt.a.get("https://jsonplaceholder.typicode.com/posts/"+this.id,{}).then((function(a){var s=a.data;t.postreturned=!0,t.post=s,console.log(t.post)}))},getComments:function(){var t=this;this.postreturned=!1,gt.a.get("https://jsonplaceholder.typicode.com/posts/"+this.id+"/comments",{}).then((function(a){var s=a.data;t.commentsreturned=!0,t.comments=s,console.log(t.comments)}))}},mounted:function(){this.getComments(),this.getPost()}},ca=oa,ua=Object(u["a"])(ca,na,ra,!1,null,null,null),da=ua.exports;e["a"].use(H["a"]);var ma=[{path:"/",name:"Home",component:tt},{path:"/about",name:"About",component:lt},{path:"/contactus",name:"Contact Us",component:ut},{path:"/classes",name:"ClassList",component:At},{path:"/grid",name:"Grid",component:Ht},{path:"/bgblend",name:"BgBlend",component:Wt},{path:"/offcanvas",name:"OffCanvas",component:Zt},{path:"/posts",name:"Posts",component:la},{path:"/posts/:id",name:"PostDetail",component:da,props:!0}],va=new H["a"]({mode:"history",base:"/vuejs-sandbox/",routes:ma}),pa=va;s("4989"),s("de80"),s("b634"),s("38fd"),s("5ed1"),s("560b");e["a"].config.productionTip=!1,new e["a"]({router:pa,render:function(t){return t(R)}}).$mount("#app")},"91aa":function(t,a,s){},e76e:function(t,a,s){"use strict";s("91aa")}});
//# sourceMappingURL=app.98ce7869.js.map