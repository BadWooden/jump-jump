(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa480458"],{"6e42":function(t,e,r){},9472:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-main",[r("el-drawer",{ref:"createFormDrawer",attrs:{visible:t.createFormDrawer,direction:"rtl","before-close":t.handleCreateFormDrawerClose},on:{"update:visible":function(e){t.createFormDrawer=e}}},[r("div",{staticStyle:{width:"90%","margin-left":"15px"}},[r("h2",{staticStyle:{"margin-top":"0",color:"#606266"}},[t._v("添加短链接")]),t._v(" "),r("el-form",{ref:"createForm",attrs:{model:t.createForm,rules:t.createFormRules}},[r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:2===t.role,expression:"role === 2"}],attrs:{label:"指定 ID",prop:"id"}},[r("el-switch",{model:{value:t.createForm.specifyId,callback:function(e){t.$set(t.createForm,"specifyId",e)},expression:"createForm.specifyId"}}),t._v(" "),r("el-input",{directives:[{name:"show",rawName:"v-show",value:t.createForm.specifyId,expression:"createForm.specifyId"}],attrs:{placeholder:"示例：home"},model:{value:t.createForm.id,callback:function(e){t.$set(t.createForm,"id",e)},expression:"createForm.id"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"目标链接",prop:"url"}},[r("el-input",{attrs:{placeholder:"示例：https://github.com/jwma/jump-jump"},model:{value:t.createForm.url,callback:function(e){t.$set(t.createForm,"url",e)},expression:"createForm.url"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea",placeholder:"示例：某某帖子使用"},model:{value:t.createForm.description,callback:function(e){t.$set(t.createForm,"description",e)},expression:"createForm.description"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"启用？",prop:"is_enable"}},[r("el-switch",{model:{value:t.createForm.is_enable,callback:function(e){t.$set(t.createForm,"is_enable",e)},expression:"createForm.is_enable"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.onCreateFormSubmit}},[t._v("添加")]),t._v(" "),r("el-button",{attrs:{size:"mini"},on:{click:t.onCreateFormCancel}},[t._v("取消")])],1)],1)],1)]),t._v(" "),r("el-drawer",{ref:"editFormDrawer",attrs:{visible:t.editFormDrawer,direction:"rtl","before-close":t.handleEditFormDrawerClose},on:{"update:visible":function(e){t.editFormDrawer=e}}},[r("div",{staticStyle:{width:"90%","margin-left":"15px"}},[r("h2",{staticStyle:{"margin-top":"0",color:"#606266"}},[t._v("更新："+t._s(t.editForm.id))]),t._v(" "),r("el-form",{ref:"editForm",attrs:{model:t.editForm,rules:t.editFormRules}},[r("el-form-item",{attrs:{label:"目标链接",prop:"url"}},[r("el-input",{attrs:{placeholder:"示例：https://github.com/jwma/jump-jump"},model:{value:t.editForm.url,callback:function(e){t.$set(t.editForm,"url",e)},expression:"editForm.url"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea",placeholder:"示例：某某帖子使用"},model:{value:t.editForm.description,callback:function(e){t.$set(t.editForm,"description",e)},expression:"editForm.description"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"启用？",prop:"is_enable"}},[r("el-switch",{model:{value:t.editForm.is_enable,callback:function(e){t.$set(t.editForm,"is_enable",e)},expression:"editForm.is_enable"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"创建人"}},[r("span",{staticStyle:{color:"#909399"}},[t._v(t._s(t.editForm.created_by))])]),t._v(" "),r("el-form-item",{attrs:{label:"添加时间"}},[r("span",{staticStyle:{color:"#909399"}},[t._v(t._s(t._f("dateformat")(t.editForm.create_time)))])]),t._v(" "),r("el-form-item",{attrs:{label:"更新时间"}},[r("span",{staticStyle:{color:"#909399"}},[t._v(t._s(t._f("dateformat")(t.editForm.update_time)))])]),t._v(" "),r("el-form-item",[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.onEditFormSubmit}},[t._v("更新")]),t._v(" "),r("el-button",{attrs:{size:"mini"},on:{click:t.onEditFormCancel}},[t._v("取消")])],1)],1)],1)]),t._v(" "),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:function(e){return t.getList(1)}}},[t._v("刷新")]),t._v(" "),r("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},on:{click:function(e){t.createFormDrawer=!0}}},[t._v("添加\n  ")]),t._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"max-height":"800"}},[r("el-table-column",{attrs:{label:"短链接",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-dropdown",{attrs:{size:"small"}},[r("span",{staticClass:"el-dropdown-link"},[t._v("\n            "+t._s(e.row.id)),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.landingHosts,(function(n){return r("el-dropdown-item",[r("span",{on:{click:function(r){return t.copyShortLink(n+e.row.id,r)}}},[t._v(t._s(n+e.row.id))])])})),1)],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"url",label:"目标链接",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-link",{attrs:{type:"info",href:e.row.url,target:"_blank"}},[t._v(t._s(e.row.url))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"描述",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.description?e.row.description:"-")+"\n      ")]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"启用？",width:"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("i",{class:{"el-icon-check":t.row.is_enable,"el-icon-close":!t.row.is_enable}})]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"创建人",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.created_by)+"\n      ")]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"添加时间",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("dateformat")(e.row.create_time,"DD/MM/YY"))+"\n      ")]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"更新时间",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("dateformat")(e.row.update_time,"DD/MM/YY"))+"\n      ")]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini",circle:"",icon:"el-icon-s-data"},on:{click:function(r){return t.goto({name:"ShortLinkLatestRequestHistory",params:{id:e.row.id}})}}}),t._v(" "),r("el-button",{attrs:{size:"mini",circle:"",icon:"el-icon-edit-outline"},on:{click:function(r){return t.toEdit(e.row.id)}}}),t._v(" "),r("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete-solid",circle:""},on:{click:function(r){return t.deleteShortLink(e.row.id)}}})]}}])})],1),t._v(" "),r("div",{staticClass:"paginator-container"},[r("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total,"hide-on-single-page":!0},on:{"size-change":t.handlePageSizeChange,"current-change":t.handleCurrentPageChange}})],1)],1)},o=[],i=r("db72"),a=r("bfad"),c=r("da71"),l=r("61f7"),s=r("2b0e"),u=r("b311"),f=r.n(u);function d(){s["default"].prototype.$message({message:"复制成功",type:"success",duration:1500})}function m(){s["default"].prototype.$message({message:"复制失败",type:"error"})}function h(t,e){var r=new f.a(e.target,{text:function(){return t}});r.on("success",(function(){d(),r.off("error"),r.off("success"),r.destroy()})),r.on("error",(function(){m(),r.off("error"),r.off("success"),r.destroy()})),r.onClick(e)}var p=r("2f62"),b={name:"ShortLinkList",data:function(){var t=function(t,e,r){if(""===e)r(new Error("请输入目标链接"));else{if(!Object(l["b"])(e))return void r(new Error("这不是一个合法的目标链接"));r()}};return{landingHosts:[],list:[],total:0,currentPage:1,pageSize:20,createFormDrawer:!1,createForm:{specifyId:!1,id:"",url:"",description:"",is_enable:!1},createFormRules:{url:[{required:!0,validator:t,trigger:"blur"}]},editFormDrawer:!1,editForm:{id:"",url:"",description:"",is_enable:!1,created_by:"",create_time:"",update_time:""},editFormRules:{url:[{validator:t,trigger:"blur"}]}}},created:function(){var t=this;Object(c["a"])().then((function(e){t.landingHosts=e.data.config.landingHosts,t.getList(t.currentPage)}))},computed:Object(i["a"])({},Object(p["b"])(["role"])),methods:{goto:function(t){this.$router.push(t)},copyShortLink:function(t,e){h(t,e)},getList:function(t){var e=this;Object(a["c"])(t,this.pageSize).then((function(r){e.currentPage=t,e.total=r.data.total,e.list=r.data.shortLinks,1!==e.currentPage&&0===e.list.length&&e.total>0&&(e.currentPage=1,e.getList(1))}))},resetCreateForm:function(){this.createForm.specifyId=!1,this.createForm.id="",this.createForm.url="",this.createForm.description="",this.createForm.is_enable=!1},resetEditForm:function(){this.editForm.url="",this.editForm.description="",this.editForm.is_enable=!1,this.editForm.created_by="",this.editForm.create_time="",this.editForm.update_time=""},handlePageSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList(1)},handleCurrentPageChange:function(t){this.currentPage=t,this.getList(t)},handleCreateFormDrawerClose:function(t){this.resetCreateForm(),t()},onCreateFormSubmit:function(){var t=this;this.$refs.createForm.validate((function(e){if(!e)return!1;Object(a["a"])(t.createForm).then((function(e){t.$refs.createFormDrawer.closeDrawer(),t.$notify({title:"添加短链接成功",message:"ID："+e.data.shortLink.id,type:"success"}),t.getList(t.currentPage)}))}))},onCreateFormCancel:function(){this.resetCreateForm(),this.createFormDrawer=!1},toEdit:function(t){var e=this;Object(a["d"])(t).then((function(t){e.editFormDrawer=!0,e.editForm=t.data.shortLink}))},handleEditFormDrawerClose:function(t){this.resetEditForm(),t()},onEditFormSubmit:function(){var t=this;this.$refs.editForm.validate((function(e){if(!e)return!1;Object(a["f"])(t.editForm.id,t.editForm).then((function(e){t.$refs.editFormDrawer.closeDrawer(),t.$notify({title:"更新成功",message:"ID："+e.data.shortLink.id,type:"success"}),t.getList(t.currentPage)}))}))},onEditFormCancel:function(){this.resetEditForm(),this.editFormDrawer=!1},deleteShortLink:function(t){var e=this;this.$confirm("此操作会永久删除短链接，是否继续？","删除确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["e"])(t).then((function(r){e.$notify({title:"成功删除短链接",message:"ID：".concat(t),type:"success"}),e.getList(e.currentPage)}))}))}}},v=b,y=(r("f6e9"),r("2877")),g=Object(y["a"])(v,n,o,!1,null,"b2d44fe6",null);e["default"]=g.exports},b311:function(t,e,r){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,r){t.exports=r()})(0,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e){function r(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var r=t.hasAttribute("readonly");r||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),r||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}t.exports=r},function(t,e){function r(){}r.prototype={on:function(t,e,r){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:r}),this},once:function(t,e,r){var n=this;function o(){n.off(t,o),e.apply(r,arguments)}return o._=e,this.on(t,o,r)},emit:function(t){var e=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=r.length;for(n;n<o;n++)r[n].fn.apply(r[n].ctx,e);return this},off:function(t,e){var r=this.e||(this.e={}),n=r[t],o=[];if(n&&e)for(var i=0,a=n.length;i<a;i++)n[i].fn!==e&&n[i].fn._!==e&&o.push(n[i]);return o.length?r[t]=o:delete r[t],this}},t.exports=r,t.exports.TinyEmitter=r},function(t,e,r){var n=r(3),o=r(4);function i(t,e,r){if(!t&&!e&&!r)throw new Error("Missing required arguments");if(!n.string(e))throw new TypeError("Second argument must be a String");if(!n.fn(r))throw new TypeError("Third argument must be a Function");if(n.node(t))return a(t,e,r);if(n.nodeList(t))return c(t,e,r);if(n.string(t))return l(t,e,r);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,r){return t.addEventListener(e,r),{destroy:function(){t.removeEventListener(e,r)}}}function c(t,e,r){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,r)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,r)}))}}}function l(t,e,r){return o(document.body,t,e,r)}t.exports=i},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var r=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===r||"[object HTMLCollection]"===r)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,r){var n=r(5);function o(t,e,r,n,o){var i=a.apply(this,arguments);return t.addEventListener(r,i,o),{destroy:function(){t.removeEventListener(r,i,o)}}}function i(t,e,r,n,i){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof r?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,r,n,i)})))}function a(t,e,r,o){return function(r){r.delegateTarget=n(r.target,e),r.delegateTarget&&o.call(t,r)}}t.exports=i},function(t,e){var r=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function o(t,e){while(t&&t.nodeType!==r){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=o},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=function(){function t(e){c(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=r+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),s=l,u=r(1),f=r.n(u),d=r(2),m=r.n(d),h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function y(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var g=function(t){function e(t,r){b(this,e);var n=v(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.resolveOptions(r),n.listenClick(t),n}return y(e,t),p(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===h(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=m()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return _("action",t)}},{key:"defaultTarget",value:function(t){var e=_("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return _("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,r=!!document.queryCommandSupported;return e.forEach((function(t){r=r&&!!document.queryCommandSupported(t)})),r}}]),e}(f.a);function _(t,e){var r="data-clipboard-"+t;if(e.hasAttribute(r))return e.getAttribute(r)}e["default"]=g}])["default"]}))},bfad:function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return a})),r.d(e,"e",(function(){return c})),r.d(e,"f",(function(){return l})),r.d(e,"b",(function(){return s}));var n=r("b775");function o(t){return Object(n["a"])({url:"/v1/short-link/".concat(t),method:"get"})}function i(t,e){return Object(n["a"])({url:"/v1/short-link/?page=".concat(t,"&pageSize=").concat(e),method:"get"})}function a(t){return Object(n["a"])({url:"/v1/short-link/",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/v1/short-link/".concat(t),method:"delete"})}function l(t,e){return Object(n["a"])({url:"/v1/short-link/".concat(t),method:"patch",data:e})}function s(t){return Object(n["a"])({url:"/v1/short-link/".concat(t,"/latest-request-history"),method:"get"})}},da71:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"b",(function(){return a}));var n=r("b775");function o(){return Object(n["a"])({url:"/v1/config",method:"get"})}function i(t){return Object(n["a"])({url:"/v1/config/landing-hosts",method:"patch",data:t})}function a(t){return Object(n["a"])({url:"/v1/config/id-length",method:"patch",data:t})}},f6e9:function(t,e,r){"use strict";var n=r("6e42"),o=r.n(n);o.a}}]);