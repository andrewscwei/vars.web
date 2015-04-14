!function(e,t){var i=t;"undefined"!=typeof module&&module.exports?module.exports=i:(i.utils.namespace("io").variante=i,e.vars=i)}("undefined"!=typeof window?window:this,function(){var e,t,i;return function(n){function r(e,t){return E.call(e,t)}function s(e,t){var i,n,r,s,o,a,u,l,d,p,h,c=t&&t.split("/"),f=b.map,g=f&&f["*"]||{};if(e&&"."===e.charAt(0))if(t){for(c=c.slice(0,c.length-1),e=e.split("/"),o=e.length-1,b.nodeIdCompat&&w.test(e[o])&&(e[o]=e[o].replace(w,"")),e=c.concat(e),d=0;d<e.length;d+=1)if(h=e[d],"."===h)e.splice(d,1),d-=1;else if(".."===h){if(1===d&&(".."===e[2]||".."===e[0]))break;d>0&&(e.splice(d-1,2),d-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((c||g)&&f){for(i=e.split("/"),d=i.length;d>0;d-=1){if(n=i.slice(0,d).join("/"),c)for(p=c.length;p>0;p-=1)if(r=f[c.slice(0,p).join("/")],r&&(r=r[n])){s=r,a=d;break}if(s)break;!u&&g&&g[n]&&(u=g[n],l=d)}!s&&u&&(s=u,a=l),s&&(i.splice(0,a,s),e=i.join("/"))}return e}function o(e,t){return function(){var i=O.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),c.apply(n,i.concat([e,t]))}}function a(e){return function(t){return s(t,e)}}function u(e){return function(t){m[e]=t}}function l(e){if(r(y,e)){var t=y[e];delete y[e],v[e]=!0,h.apply(n,t)}if(!r(m,e)&&!r(v,e))throw new Error("No "+e);return m[e]}function d(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function p(e){return function(){return b&&b.config&&b.config[e]||{}}}var h,c,f,g,m={},y={},b={},v={},E=Object.prototype.hasOwnProperty,O=[].slice,w=/\.js$/;f=function(e,t){var i,n=d(e),r=n[0];return e=n[1],r&&(r=s(r,t),i=l(r)),r?e=i&&i.normalize?i.normalize(e,a(t)):s(e,t):(e=s(e,t),n=d(e),r=n[0],e=n[1],r&&(i=l(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:i}},g={require:function(e){return o(e)},exports:function(e){var t=m[e];return"undefined"!=typeof t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:p(e)}}},h=function(e,t,i,s){var a,d,p,h,c,b,E=[],O=typeof i;if(s=s||e,"undefined"===O||"function"===O){for(t=!t.length&&i.length?["require","exports","module"]:t,c=0;c<t.length;c+=1)if(h=f(t[c],s),d=h.f,"require"===d)E[c]=g.require(e);else if("exports"===d)E[c]=g.exports(e),b=!0;else if("module"===d)a=E[c]=g.module(e);else if(r(m,d)||r(y,d)||r(v,d))E[c]=l(d);else{if(!h.p)throw new Error(e+" missing "+d);h.p.load(h.n,o(s,!0),u(d),{}),E[c]=m[d]}p=i?i.apply(m[e],E):void 0,e&&(a&&a.exports!==n&&a.exports!==m[e]?m[e]=a.exports:p===n&&b||(m[e]=p))}else e&&(m[e]=i)},e=t=c=function(e,t,i,r,s){if("string"==typeof e)return g[e]?g[e](t):l(f(e,t).f);if(!e.splice){if(b=e,b.deps&&c(b.deps,b.callback),!t)return;t.splice?(e=t,t=i,i=null):e=n}return t=t||function(){},"function"==typeof i&&(i=r,r=s),r?h(n,e,t,i):setTimeout(function(){h(n,e,t,i)},4),c},c.config=function(e){return c(e)},e._defined=m,i=function(e,t,i){t.splice||(i=t,t=[]),r(m,e)||r(y,e)||(y[e]=[e,t,i])},i.amd={jQuery:!0}}(),i("almond",function(){}),i("enums/dirtytype",{NONE:0,POSITION:1,SIZE:2,LAYOUT:4,STATE:8,DATA:16,LOCALE:32,DEPTH:64,CONFIG:128,STYLE:256,CUSTOM:512,ALL:4294967295}),i("enums",["enums/dirtytype"],function(e){var t=function(e){return e};return Object.defineProperty(t,"DirtyType",{value:e,writable:!1,enumerable:!0}),t}),i("utils/assert",[],function(){function e(e,t){if(!e&&window&&window.vars.debug)throw t||"[vars]: Assertion failed."}return e}),i("utils/log",[],function(){function e(){window&&window.vars.debug&&window.console&&console.log&&Function.apply.call(console.log,console,arguments)}return e}),i("events/eventdispatcher",["utils/assert","utils/log"],function(e,t){function i(e){this.debug&&t("[EventDispatcher]::new(",e,")")}return Object.defineProperty(i.prototype,"debug",{get:function(){return this._debug},set:function(e){Object.defineProperty(this,"_debug",{value:e,writable:!0}),this.updateDelegate.debug=e}}),i.prototype.addEventListener=function(i,n){e(i,"Event type must be specified."),e(n,"Listener must be specified."),i&&n&&(this.debug&&t("[EventDispatcher]::addEventListener("+i+")"),this._listenerMap||Object.defineProperty(this,"_listenerMap",{value:{},writable:!0}),this._listenerMap[i]||(this._listenerMap[i]=[]),this._listenerMap[i].push(n))},i.prototype.removeEventListener=function(i,n){if(e(i,"Event type must be specified."),e(this._listenerMap,"Listener map is null."),e(this._listenerMap[i],"There are no listeners registered for event type: "+i),i&&this._listenerMap&&this._listenerMap[i])if(this.debug&&t("[EventDispatcher]::removeEventListener("+i+")"),n){var r=this._listenerMap[i].indexOf(n);r>-1&&this._listenerMap[i].splice(r,1)}else delete this._listenerMap[i]},i.prototype.hasEventListener=function(t,i){if(e(t,"Event type must be specified."),e(this._listenerMap,"Listener map is null."),e(this._listenerMap[t],"There are no listeners registered for event type: "+t),!t)return!1;if(!this._listenerMap)return!1;if(!this._listenerMap[t])return!1;if(i){var n=this._listenerMap[t].indexOf(i);return n>-1}return!0},i.prototype.dispatchEvent=function(i){if(e(i,"Event must be specified."),e(this._listenerMap,"Listener map is null."),i){if(!this._listenerMap)return!1;if(!this._listenerMap[i.type])return!1;this.debug&&t("[EventDispatcher]::dispatchEvent("+i.type+")"),i.target=this,i.currentTarget=this,i.customTarget=this;for(var n=this._listenerMap[i.type].length,r=0;n>r;r++){var s=this._listenerMap[i.type][r];s.call(this,i)}}},i}),i("events/eventtype",{MOUSE:{CLICK:"click",CONTEXT_MENU:"contextmenu",DOUBLE_CLICK:"dblclick",MOUSE_DOWN:"mousedown",MOUSE_ENTER:"mouseenter",MOUSE_LEAVE:"mouseleave",MOUSE_MOVE:"mousemove",MOUSE_OVER:"mouseover",MOUSE_OUT:"mouseout",MOUSE_UP:"mouseup"},KEYBOARD:{KEY_DOWN:"keydown",KEY_PRESS:"keypress",KEY_UP:"keyup"},OBJECT:{ABORT:"abort",BEFORE_UNLOAD:"beforeunload",ERROR:"error",HASH_CHANGE:"hashchange",LOAD:"load",PAGE_SHOW:"pageshow",PAGE_HIDE:"pagehide",RESIZE:"resize",SCROLL:"scroll",UNLOAD:"unload",PROGRESS:"progress"},FORM:{BLUR:"blur",CHANGE:"change",FOCUS:"focus",FOCUS_IN:"focusin",FOCUS_OUT:"focusout",INPUT:"input",INVALID:"invalid",RESET:"reset",SEARCH:"search",SELECT:"select",SUBMIT:"submit"},DRAG:{DRAG:"drag",DRAG_END:"dragend",DRAG_ENTER:"dragenter",DRAG_LEAVE:"dragleave",DRAG_OVER:"dragover",DRAG_START:"dragstart",DROP:"drop"},CLIPBOARD:{COPY:"copy",CUT:"cut",PASTE:"paste"},PRINT:{AFTER_PRINT:"afterprint",BEFORE_PRINT:"beforeprint"},MEDIA:{ABORT:"abort",CAN_PLAY:"canplay",CAN_PLAY_THROUGH:"canplaythrough",DURATION_CHANGE:"durationchange",EMPTIED:"emptied",ENDED:"ended",ERROR:"error",LOADED_DATA:"loadeddata",LOADED_METADATA:"loadedmetadata",LOAD_START:"loadstart",PAUSE:"pause",PLAY:"play",PLAYING:"playing",PROGRESS:"progress",RATE_CHANGE:"ratechange",SEEKED:"seeked",SEEKING:"seeking",STALLED:"stalled",SUSPEND:"suspend",TIME_UPDATE:"timeupdate",VOLUME_CHANGE:"volumechange",WAITING:"waiting"},ANIMATION:{ANIMATION_END:"animationend",ANIMATION_ITERATION:"animationiteration",ANIMATION_START:"animationstart"},TRANSITION:{TRANSITION_END:"transitionend"},SERVER_SENT:{ERROR:"error",MESSAGE:"message",OPEN:"open"},MISC:{MESSAGE:"message",ONLINE:"online",OFFLINE:"offline",POP_STATE:"popstate",SHOW:"show",STORAGE:"storage",TOGGLE:"toggle",WHEEL:"wheel"},TOUCH:{TOUCH_CANCEL:"touchcancel",TOUCH_END:"touchend",TOUCH_MOVE:"touchmove",TOUCH_START:"touchstart"}}),i("events",["events/eventdispatcher","events/eventtype"],function(e,t){var i=function(e){return e};return Object.defineProperty(i,"EventDispatcher",{value:e,writable:!1,enumerable:!0}),Object.defineProperty(i,"EventType",{value:t,writable:!1,enumerable:!0}),i}),i("ui/translate",["utils/assert"],function(e){function t(t,i,n){if(i){e(!i.top||!isNaN(i.top),"Top property must be a number."),e(!i.right||!isNaN(i.right),"Right property must be a number."),e(!i.bottom||!isNaN(i.bottom),"Bottom property must be a number."),e(!i.left||!isNaN(i.left),"Left property must be a number.");var r=i.units||"px";n&&(e(!n.top||!isNaN(n.top),"Top constraint must be a number."),e(!n.right||!isNaN(n.right),"Right constraint must be a number."),e(!n.bottom||!isNaN(n.bottom),"Bottom constraint must be a number."),e(!n.left||!isNaN(n.left),"Left constraint must be a number."));var s=n&&n.top?Math.min(i.top,n.top):i.top,o=n&&n.right?Math.min(i.right,n.right):i.right,a=n&&n.bottom?Math.min(i.bottom,n.bottom):i.bottom,u=n&&n.left?Math.min(i.left,n.left):i.left;return t&&(t.style?(t.style.top=String(s)+r,t.style.right=String(o)+r,t.style.bottom=String(a)+r,t.style.left=String(u)+r):t.css&&(t.css({top:String(s)+r}),t.css({right:String(o)+r}),t.css({bottom:String(a)+r}),t.css({left:String(u)+r}))),{top:s,right:o,bottom:a,left:u}}return t&&(t.style?(t.style.top="initial",t.style.right="initial",t.style.bottom="initial",t.style.left="initial"):t.css&&(t.css({top:"initial"}),t.css({right:"initial"}),t.css({bottom:"initial"}),t.css({left:"initial"}))),{top:"initial",right:"initial",bottom:"initial",left:"initial"}}return t}),i("ui/translate3d",["utils/assert"],function(e){function t(t,i,n){if(i){e(!i.x||!isNaN(i.x),"X property must be a number."),e(!i.y||!isNaN(i.y),"Y property must be a number."),e(!i.z||!isNaN(i.z),"Z property must be a number.");var r=i.units||"px";n&&(e(!n.x||!isNaN(n.x),"X constraint must be a number."),e(!n.y||!isNaN(n.y),"Y constraint must be a number."),e(!n.z||!isNaN(n.z),"Z constraint must be a number."));var s=n&&n.x?Math.min(i.x,n.x):i.x,o=n&&n.y?Math.min(i.y,n.y):i.y,a=n&&n.z?Math.min(i.z,n.z):i.z;if(t){var u=i.x?"translateX("+s+r+")":null,l=i.y?"translateY("+o+r+")":null,d=i.z?"translateZ("+a+r+")":null,p="";u&&(p+=""===p?u:" "+u),l&&(p+=""===p?l:" "+l),d&&(p+=""===p?d:" "+d),t.style?t.style.transform=p:t.css&&t.css("transform",p)}return{x:s,y:o,z:a}}return t&&(t.style?t.style.transform="translateX(0) translateY(0) translateZ(0)":t.css&&t.css({transform:"translateX(0) translateY(0) translateZ(0)"})),{x:0,y:0,z:0}}return t}),i("ui/transform",["utils/assert"],function(e){function t(t,i,n){if(i){e(!i.width||!isNaN(i.width),"Width property must be a number."),e(!i.height||!isNaN(i.height),"Height property must be a number."),e(!i.aspectRatio||!isNaN(i.aspectRatio),"Aspect ratio property must be a number.");var r=i.units||"px",s=i.aspectRatio?Number(i.aspectRatio):i.width/i.height,o=i.width,a=i.height,u=i.width,l=i.height,d="contain";n&&(e(!n.width||!isNaN(n.width),"Width constraint must be a number."),e(!n.height||!isNaN(n.height),"Height constraint must be a number."),n.type&&"cover"===n.type?(d="cover",n.width&&(u=Math.min(n.width,u)),n.width&&(l=Math.min(n.height,l))):(n.width&&(o=Math.min(n.width,o)),n.height&&(a=Math.min(n.height,a))));var p,h;return"contain"===d?(p=o>a?a*s:o,h=o>a?a:o/s,p>o?(p=o,h=p/s):h>a&&(h=a,p=h*s)):(p=u>l?l*s:u,h=u>l?l:u/s,u>p?(p=u,h=p/s):l>h&&(h=l,p=h*s)),t&&(t.style?(i.width&&(t.style.width=String(p)+r),i.height&&(t.style.height=String(h)+r)):t.css&&(i.width&&t.css({width:String(p)+r}),i.height&&t.css({height:String(h)+r}))),{width:p,height:h}}return t&&(t.style?(t.style.width="initial",t.style.height="initial"):t.css&&(t.css({width:"initial"}),t.css({height:"initial"}))),{width:"initial",height:"initial"}}return t}),i("ui/getviewportrect",["utils/assert"],function(e){function t(){if(e(window&&document,"Window or document undefined."),!window||!document)return null;var t={};return t.width=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t.height=Math.max(document.documentElement.clientHeight,window.innerHeight||0),t.top=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,t.left=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t.bottom=t.top+t.height,t.right=t.left+t.width,t}return t}),i("ui/getrect",["utils/assert","ui/getviewportrect"],function(e,t){function i(i){if(e(i,"Invalid element specified."),e(window&&document,"Window or document undefined."),!i||!window||!document)return null;if(i===window)return t();var n=t(),r={};return r.width=i.outerWidth?i.outerWidth():i.getBoundingClientRect().width,r.height=i.outerHeight?i.outerHeight():i.getBoundingClientRect().height,r.top=i.offset?i.offset().top:i.getBoundingClientRect().top-n.y,r.left=i.offset?i.offset().left:i.getBoundingClientRect().left-n.x,r.bottom=r.top+r.height,r.right=r.left+r.width,r}return i}),i("ui/getintersectrect",["utils/assert","ui/getrect"],function(e,t){function i(i,n){if(e(i||n,"Invalid elements specified."),e(window&&document,"Window or document undefined."),!i&&!n||!window||!document)return null;var r=t(i||window),s=t(n||window);if(!r||!s)return null;var o={};return o.width=Math.max(0,Math.min(r.right,s.right)-Math.max(r.left,s.left)),o.height=Math.max(0,Math.min(r.bottom,s.bottom)-Math.max(r.top,s.top)),o.top=Math.max(r.top,s.top),o.left=Math.max(r.left,s.left),o.bottom=o.top+o.height,o.right=o.left+o.width,o.width*o.height===0&&(o.width=0,o.height=0,o.top=0,o.left=0,o.bottom=0,o.right=0),o}return i}),i("ui/elementupdatedelegate",["utils/assert","utils/log","enums/dirtytype"],function(e,t,i){function n(e){this.debug&&t("[ElementUpdateDelegate]::new(",e,")");var n=0;this.element=e,this.setDirty=function(e,s){if(this.debug&&t("[ElementUpdateDelegate]::setDirty(",e,s,")"),!this.isDirty(e)||s){switch(e){case i.NONE:case i.ALL:n=e;break;default:n|=e}s?this.update():r(this.update.bind(this))}},this.isDirty=function(e){switch(this.debug&&t("[ElementUpdateDelegate]::isDirty(",e,n,")"),e){case i.NONE:case i.ALL:return n==e;default:return 0!==(e&n)}},this.init=function(){this.debug&&t("[ElementUpdateDelegate]::init()"),window&&(window.addEventListener("resize",s.bind(this)),window.addEventListener("orientationchange",s.bind(this)),window.addEventListener("scroll",o.bind(this))),this.setDirty(i.ALL)},this.destroy=function(){this.debug&&t("[ElementUpdateDelegate]::destroy()"),this.onUpdate=null},this.update=function(e){e&&"function"==typeof e?this._updateCallback?this._updateCallback=value:Object.defineProperty(this,"_updateCallback",{value:e,writable:!0}):(this.debug&&t("[ElementUpdateDelegate]::update()"),this._updateCallback&&this._updateCallback.call(null,n),this.setDirty(0))};var r=window&&window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){this.debug&&t("[ElementUpdateDelegate]::_requestAnimationFrame(",e,")"),window&&window.setTimeout(e,10)},s=function(){this.responsive&&this.setDirty(i.SIZE)},o=function(){this.responsive&&this.setDirty(i.POSITION)}}return Object.defineProperty(n.prototype,"debug",{value:!1,writable:!0}),Object.defineProperty(n.prototype,"element",{value:null,writable:!0}),Object.defineProperty(n.prototype,"responsive",{value:!1,writable:!0}),n}),i("ui/element",["utils/assert","utils/log","enums/dirtytype","ui/elementupdatedelegate"],function(e,t,i,n){function r(e){this.debug&&t("[Element]::new(",e,")"),this.element=e,this.init()}return Object.defineProperty(r.prototype,"element",{get:function(){return this._element||Object.defineProperty(this,"_element",{value:this.factory(),writable:!0}),this._element},set:function(t){e(!this._element,"Element cannot be overwritten."),Object.defineProperty(this,"_element",{value:t,writable:!0}),this.updateDelegate.element=t}}),Object.defineProperty(r.prototype,"id",{get:function(){return this.element.id},set:function(e){this.element.setAttribute("id",e)}}),Object.defineProperty(r.prototype,"class",{get:function(){return this.element.className},set:function(e){this.element.className=e}}),Object.defineProperty(r.prototype,"debug",{get:function(){return this._debug},set:function(e){Object.defineProperty(this,"_debug",{value:e,writable:!0}),this.updateDelegate.debug=e}}),Object.defineProperty(r.prototype,"data",{get:function(){return this._data},set:function(e){Object.defineProperty(this,"_data",{value:e,writable:!0}),this.updateDelegate.setDirty(i.DATA)}}),Object.defineProperty(r.prototype,"updateDelegate",{get:function(){return this._updateDelegate||(Object.defineProperty(this,"_updateDelegate",{value:new n(this.element),writable:!1}),this._updateDelegate.update(this.update.bind(this))),this._updateDelegate}}),Object.defineProperty(r.prototype,"responsive",{get:function(){return this.updateDelegate.responsive},set:function(e){this.updateDelegate.responsive=e}}),Object.defineProperty(r.prototype,"isDirty",{get:function(){return this.updateDelegate.isDirty}}),r.prototype.init=function(){this.debug&&t("[Element]::init()"),this.updateDelegate.init()},r.prototype.destroy=function(){this.debug&&t("[Element]::destroy()"),this.updateDelegate.destroy()},r.prototype.update=function(){this.debug&&t("[Element]::update()")},r.prototype.factory=function(){return document.createElement("div")},r.prototype.toString=function(){return"[Element{"+this.name+"}]"},r}),i("utils/inherit",[],function(){function e(e,t){return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,t}return e}),i("ui/video",["utils/assert","utils/log","utils/inherit","enums/dirtytype","ui/element"],function(e,t,i,n,r){function s(i){r.call(this,i),this.debug&&t("[Video]::new(",i,")"),e(!i||i instanceof HTMLVideoElement,"Invalid element type specified. Must be an instance of HTMLVideoElement.")}var o=i(s,r);return s.PRELOAD={AUTO:"auto",METADATA:"metada",NONE:"none"},Object.defineProperty(s.prototype,"autoplay",{get:function(){return this.element.autoplay},set:function(e){this.element.autoplay=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(s.prototype,"controls",{get:function(){return this.element.controls},set:function(e){this.element.controls=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(s.prototype,"loop",{get:function(){return this.element.loop},set:function(e){this.element.loop=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(s.prototype,"muted",{get:function(){return this.element.muted},set:function(e){this.element.muted=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(s.prototype,"poster",{get:function(){return this.element.poster},set:function(e){this.element.poster=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(s.prototype,"preload",{get:function(){return this.element.preload},set:function(e){this.element.preload=e,this.updateDelegate.setDirty(n.CUSTOM)}}),Object.defineProperty(s.prototype,"source",{get:function(){return this._source},set:function(e){Object.defineProperty(this,"_source",{value:e,writable:!0}),this.updateDelegate.setDirty(n.DATA)}}),s.prototype.update=function(e){this.debug&&t("[Video]::update()"),this.isDirty(n.DATA)&&this._updateSource(),this.isDirty(n.CUSTOM),o.prototype.update.call(this,e)},s.prototype.factory=function(){return document.createElement("video")},s.prototype._updateSource=function(){var e,t,i=this.element.getElementsByTagName("source");for(t=i.length,e=0;t>e;e++){var n=i[e];this.element.removeChild(n)}if(this.source)for(t=this.source.length,e=0;t>e;e++){var r=document.createElement("source"),s=this.source[e].src,o=this.source[e].type,a=s.split(".").pop();r.setAttribute("src",s),r.setAttribute("type",o||"video/"+a),this.element.appendChild(r)}},s}),i("ui",["ui/translate","ui/translate3d","ui/transform","ui/getviewportrect","ui/getrect","ui/getintersectrect","ui/element","ui/video","ui/elementupdatedelegate"],function(e,t,i,n,r,s,o,a,u){var l=function(e){return e};return Object.defineProperty(l,"translate",{value:e,writable:!1,enumerable:!0}),Object.defineProperty(l,"translate3d",{value:t,writable:!1,enumerable:!0}),Object.defineProperty(l,"transform",{value:i,writable:!1,enumerable:!0}),Object.defineProperty(l,"getViewportRect",{value:n,writable:!1,enumerable:!0}),Object.defineProperty(l,"getRect",{value:r,writable:!1,enumerable:!0}),Object.defineProperty(l,"getIntersectRect",{value:s,writable:!1,enumerable:!0}),Object.defineProperty(l,"Element",{value:o,writable:!1,enumerable:!0}),Object.defineProperty(l,"Video",{value:a,writable:!1,enumerable:!0}),Object.defineProperty(l,"ElementUpdateDelegate",{value:u,writable:!1,enumerable:!0}),l}),i("utils/namespace",["utils/assert"],function(e){function t(t,i){e("string"==typeof t,"Invalid identifiers specified."),e("undefined"==typeof i||"object"==typeof i,"Invalid scope specified.");for(var n=t.split("."),r=void 0===i||null===i?window:i,s=0;s<n.length;s++)r=r[n[s]]||(r[n[s]]={});return r}return t}),i("utils/sizeof",[],function(){function e(e){if(void 0!==e.length)return e.length;var t=0;switch(typeof e){case"object":if(null!==e&&void 0!==e)for(var i in e)t++;break;case"number":t=(""+e).length;break;default:t=0}return t}return e}),i("utils/isnull",[],function(){function e(e){return void 0===e||null===e?!0:!1}return e}),i("utils/assetloader",["utils/assert","utils/log","utils/inherit","events/eventtype","events/eventdispatcher"],function(e,t,i,n,r){function s(){r.call(this),this.debug&&t("[AssetLoader]::new()")}{var o=["jpg","png","svg","jpeg","gif"],a=["mp4","mpeg","ogg","ogv","mov","avi","flv"],u=["mp3","mp4","mpeg","flac","wav","ogg"],l={IMAGE:{jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",png:"image/png",svg:"image/svg"},VIDEO:{mp4:"video/mp4",mov:"video/quicktime",mpeg:"video/mpeg",ogg:"video/ogg",ogv:"video/ogg",avi:"video/avi",flv:"video/x-flv"},AUDIO:{mp3:"audio/mpeg",mpeg:"audio/mpeg",mp4:"audio/mp4",flac:"audio/flac",ogg:"audio/ogg",wav:"audio/vnd.wave"}};i(s,r)}return s.STATE={IDLE:0,IN_PROGRESS:1,COMPLETED:2,FAILED:3,ABORTED:4},s.TYPE={IMAGE:"image",VIDEO:"video",AUDIO:"audio"},Object.defineProperty(s.prototype,"debug",{value:!1,writable:!0}),Object.defineProperty(s.prototype,"state",{get:function(){return this._state||Object.defineProperty(this,"_state",{value:s.STATE.IDLE,writable:!0}),this._state}}),Object.defineProperty(s.prototype,"queue",{get:function(){return this._queue||Object.defineProperty(this,"_queue",{value:[],writable:!0}),this._queue}}),Object.defineProperty(s.prototype,"assets",{get:function(){return this._assets||Object.defineProperty(this,"_assets",{value:{},writable:!0}),this._assets}}),Object.defineProperty(s.prototype,"async",{get:function(){return void 0===this._async?!0:this._async},set:function(t){e(this.state!==s.STATE.IN_PROGRESS,"Cannot change the async mode while it is in progress."),this.state!==s.STATE.IN_PROGRESS&&Object.defineProperty(this,"_async",{value:t,writable:!0})}}),Object.defineProperty(s.prototype,"bytesLoaded",{get:function(){if(this._bytesLoaded){for(var e=0,t=this._bytesLoaded.length,i=0;t>i;i++)e+=this._bytesLoaded[i];return e}return 0}}),Object.defineProperty(s.prototype,"bytesTotal",{get:function(){if(this._bytesTotal){for(var e=0,t=this._bytesTotal.length,i=0;t>i;i++)e+=this._bytesTotal[i];return e}return 0}}),Object.defineProperty(s.prototype,"progress",{get:function(){if(!this._bytesTotal||!this._bytesLoaded)return 0;if(this._bytesTotal.length!==this._bytesLoaded.length)return 0;for(var e=this._bytesTotal.length,t=0,i=0;e>i;i++){var n=this._bytesLoaded[i],r=this._bytesTotal[i];r>0&&(t+=n/r)}return t/e}}),s.prototype.init=function(){if(!(this.queue.length<1)){this.debug&&t("[AssetLoader]::init()");var e=this.queue.length;this._xhrs=[],this._pending=e;for(var i=0;e>i;i++){var n=this.queue[i];this.debug&&t("[AssetLoader]::Started loading: "+n.path);var r=this.getXHR({id:i,path:n.path,type:n.type});r.send(),this._xhrs.push(r)}}},s.prototype.destroy=function(){if(this._xhrs){for(var e=this._xhrs.length,t=0;e>t;t++){var i=this._xhrs[t];i.abort(),this._xhrs[t]=null}this._queue=null,this._assets=null,this._bytesLoaded=null,this._bytesTotal=null}this._state=s.STATE.IDLE},s.prototype.enqueue=function(){if(e(arguments&&arguments.length>0,"There are no arguments specified."),e(this.state!==s.STATE.IN_PROGRESS,"Enqueueing is prohibited when the state is in progress."),arguments&&!(arguments.length<=0)&&this.state!==s.STATE.IN_PROGRESS){this.debug&&t("[AssetLoader]::enqueue("+arguments+")");for(var i=arguments.length,n=0;i>n;n++){var r=arguments[n];e("string"==typeof r||"object"==typeof r,'Each item to be enqueued must be a string of the target path or an object containing a "path" key and/or a "type" key'),e("string"==typeof r||"string"==typeof r.path,"Invalid path specified: "+r.path+".");var l="string"==typeof r?r:r.path,d=r.type;if(!d){var p=l.split(".").pop().toLowerCase();if(o.indexOf(p)>-1)d=s.TYPE.IMAGE;else if(a.indexOf(p)>-1)d=s.TYPE.VIDEO;else{if(!(u.indexOf(p)>-1))throw"[AssetLoader]::Unsupported asset format: "+l;d=s.TYPE.AUDIO}}d&&(this.queue.push({path:l,type:d}),this._bytesLoaded||(this._bytesLoaded=[]),this._bytesTotal||(this._bytesTotal=[]),this._bytesLoaded.push(0),this._bytesTotal.push(0))}}},s.prototype.dequeue=function(){if(e(arguments&&arguments.length>0,"There are no arguments specified."),e(this.state!==s.STATE.IN_PROGRESS,"Dequeueing is prohibited when the state is in progress."),arguments&&!(arguments.length<=0)&&this.state!==s.STATE.IN_PROGRESS)for(var t=arguments.length,i=0;t>i;i++){var n=arguments[i];e("string"==typeof n,"Expecting path to be a string.");for(var r=this.queue.length,o=0;r>o;o++){var a=this.queue[o];if(a.path===n){this.queue.splice(o,1),this.bytesLoaded.splice(o,1),this.bytesTotal.splice(o,1);break}}}},s.prototype.getXHR=function(e){var t=e.path.split(".").pop().toLowerCase(),i=l[e.type.toUpperCase()][t];if(!i)throw"[AssetLoader]:: Unsupported asset format: "+e.path;var n=new XMLHttpRequest;return n.addEventListener("progress",this._onXHRProgress.bind(this),!1),n.addEventListener("load",this._onXHRLoadComplete.bind(this),!1),n.addEventListener("error",this._onXHRLoadError.bind(this),!1),n.addEventListener("abort",this._onXHRAbort.bind(this),!1),n.open("GET",e.path,this.async),n.overrideMimeType(i),n.data=e,n},s.prototype._onXHRProgress=function(e){if(e.lengthComputable){var i=e.currentTarget,r=i.data.id,s=i.data.path,o=i.data.type,a=e.loaded,u=e.total;i.data.bytesLoaded=a,i.data.bytesTotal=u,this._bytesLoaded[r]=a,this._bytesTotal[r]=u,this._bytesLoaded||(this._bytesLoaded=[]),this.debug&&t('[AssetLoader]::_onXHRProgress("'+s+'":'+a+"/"+u+")");var l=document.createEvent("CustomEvent");l.initCustomEvent(n.OBJECT.PROGRESS,!0,!0,{id:r,path:s,type:o,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(l)}},s.prototype._onXHRLoadComplete=function(e){var i=e.currentTarget,r=i.data.id,s=i.data.path,o=i.data.type;this.debug&&t('[AssetLoader]::_onXHRLoadComplete("'+s+'"")'),this._pending--;var a=document.createEvent("CustomEvent");a.initCustomEvent(n.OBJECT.LOAD,!0,!0,{id:r,path:s,type:o,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(a)},s.prototype._onXHRLoadError=function(e){var i=e.currentTarget,r=i.data.id,s=i.data.path,o=i.data.type;this.debug&&t('[AssetLoader]::_onXHRLoadError("'+s+'"")'),this._pending--;var a=document.createEvent("CustomEvent");if(a.initCustomEvent(n.OBJECT.ERROR,!0,!0,{id:r,path:s,type:o,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(a),0===this._pending){var u=document.createEvent("CustomEvent");u.initCustomEvent(n.OBJECT.LOAD,!0,!0,{id:r,path:s,type:o,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(u)}},s.prototype._onXHRAbort=function(e){var i=e.currentTarget,r=i.data.id,s=i.data.path,o=i.data.type;this.debug&&t('[AssetLoader]::_onXHRLoadError("'+s+'"")'),this._pending--;var a=document.createEvent("CustomEvent");if(a.initCustomEvent(n.OBJECT.ABORT,!0,!0,{id:r,path:s,type:o,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(a),0===this._pending){var u=document.createEvent("CustomEvent");u.initCustomEvent(n.OBJECT.LOAD,!0,!0,{id:r,path:s,type:o,pending:this._pending,loaded:this.bytesLoaded,total:this.bytesTotal}),this.dispatchEvent(u)}},s}),i("utils",["utils/assert","utils/log","utils/namespace","utils/inherit","utils/sizeof","utils/isnull","utils/assetloader"],function(e,t,i,n,r,s,o){var a=function(e){return e};return Object.defineProperty(a,"assert",{value:e,writable:!1,enumerable:!0}),Object.defineProperty(a,"log",{value:t,writable:!1,enumerable:!0}),Object.defineProperty(a,"namespace",{value:i,writable:!1,enumerable:!0}),Object.defineProperty(a,"inherit",{value:n,writable:!1,enumerable:!0}),Object.defineProperty(a,"sizeOf",{value:r,writable:!1,enumerable:!0}),Object.defineProperty(a,"isNull",{value:s,writable:!1,enumerable:!0}),Object.defineProperty(a,"AssetLoader",{value:o,writable:!1,enumerable:!0}),a}),i("vars",["enums","events","ui","utils"],function(e,t,i,n){function r(e,t){Object.defineProperty(s,e,{value:t,writable:!1});for(var i in t)t.hasOwnProperty(i)&&Object.defineProperty(s,i,{value:t[i],writable:!1})}var s=function(e){return e};return Object.defineProperty(s,"version",{value:"0.2.0",writable:!1}),Object.defineProperty(s,"debug",{value:!1,writable:!0}),r("enums",e),r("events",t),r("ui",i),r("utils",n),s}),t("vars")}());