define("magix/magix",function(){var e=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,t=/\/[^\/]*$/,n=/[#?].*$/,r="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,c=0,f="/",s="vframe",u="\n",v=window.console,m=v&&v.error,p=function(){},d={tagName:s,rootId:"magix_vf_root",progress:p,coded:1,execError:function(e){m&&v.error(e)}},h=d.hasOwnProperty,l=function(e,t){return e?h.call(e,t):e},g=function(e){return function(t,n,r){switch(arguments.length){case 0:r=e;break;case 1:r=_._o(t)?y(e,t):l(e,t)?e[t]:null;break;case 2:null===n?(delete e[t],r=n):e[t]=r=n}return r}},x=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},w=function(e,t){var n=this;return n.get?(n.c=[],n.x=e||20,n.b=n.x+(0|t||5),void 0):new w(e,t)},y=function(e,t,n){for(var r in t)n&&l(n,r)||(e[r]=t[r]);return e};y(w.prototype,{get:function(e){var t,n=this,r=n.c;return e=a+e,l(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=c++,t=t.v)),t},list:function(){return this.c},set:function(e,t,n){var r=this,i=r.c,o=a+e,f=i[o];if(!l(i,o)){if(i.length>=r.b){i.sort(x);for(var s=r.b-r.x;s--;)f=i.pop(),delete i[f.k],f.m&&E(f.m,f.o,f)}f={},i.push(f),i[o]=f}return f.o=e,f.k=o,f.v=t,f.f=1,f.t=c++,f.m=n,t},del:function(e){e=a+e;var t=this.c,n=t[e];n&&(n.f=-1e5,n.v=r,delete t[e],n.m&&(E(n.m,n.o,n),n.m=r))},has:function(e){return e=a+e,l(this.c,e)}});var b=w(60),C=w(),E=function(e,t,n,r,i,a){for(_._a(e)||(e=[e]),t&&(_._a(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){d.execError(o)}return i},_={mix:y,has:l,safeExec:E,noop:p,config:g(d),start:function(e){var t=this;y(d,e),t.use(["magix/router","magix/vom",d.iniFile],function(n,r,i){d=y(d,i,e),d["!tnc"]=d.tagName!=s,n.on("!ul",r.locChged),n.on("changed",r.locChged),r.on("progress",d.progress),t.use(d.extensions,n.start)})},keys:Object.keys||function(e){var t=[];for(var n in e)l(e,n)&&t.push(n);return t},local:g({}),path:function(i,a){var c=i+u+a,s=C.get(c);if(!s){if(o.test(a))s=a;else if(i=i.replace(n,r).replace(t,r)+f,a.charAt(0)==f){var v=o.test(i)?8:0,m=i.indexOf(f,v);s=i.substring(0,m)+a}else s=i+a;for(;e.test(s);)s=s.replace(e,"$1/");C.set(c,s)}return s},pathToObject:function(e,t){var c=e+u+t,s=b.get(c);if(!s){s={};var v={},m=r;n.test(e)?m=e.replace(n,r):~e.indexOf("=")||(m=e);var p=e.replace(m,r);if(m&&o.test(m)){var d=m.indexOf(f,8);m=~d?m.substring(d):f}p.replace(i,function(e,n,r){if(t)try{r=decodeURIComponent(r)}catch(i){}v[n]=r}),s[a]=m,s.params=v,b.set(c,s)}return s},objectToPath:function(e,t,n){var r,i=e[a],o=[],c=e.params;for(var f in c)r=c[f],(!n||r||l(n,f))&&(t&&(r=encodeURIComponent(r)),o.push(f+"="+r));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var n,r,i,a={};if(_._s(e)&&(e=e.split(",")),e&&(i=e.length))for(n=0;i>n;n++)r=e[n],a[t?r[t]:r]=t?r:1;return a},cache:w},V=Object.prototype.toString;return y(_,{use:function(e,t){e?seajs.use(e,t):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==V.call(e)},_s:function(e){return"[object String]"==V.call(e)},_n:function(e){return"[object Number]"==V.call(e)},extend:function(e,t,n,r){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,_.mix(e.prototype,n),_.mix(e,r),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e){var t,n,r,i,a=e("magix/magix"),o=e("magix/event"),c=window,f="",s="pathname",u="view",v=a.has,m=a.mix,p=a.keys,d=a.config(),h=a.cache(),l=a.cache(40),g={params:{},href:f},x=/#.*$/,w=/^[^#]*#?!?/,y="params",b=d.nativeHistory,C=d.coded,E=function(e,t,n){if(e){n=this[y],a._s(e)&&(e=e.split(","));for(var r=0;e.length>r&&!(t=v(n,e[r]));r++);}return t},_=function(){return this[s]},V=function(){return this[u]},M=function(e,t,n,r){return n=this,r=n[y],arguments.length>1?r[e]=t:r[e]},I=function(e){var t=a.pathToObject(e,C),n=t[s];return n&&i&&(t[s]=a.path(c.location[s],n)),t},k=m({viewInfo:function(e,t){var r,i;if(!n){n={rs:d.routes||{},nf:d.notFoundView};var o=d.defaultView;n.dv=o;var c=d.defaultPathname||f;r=n.rs,n.f=a._f(r),n.f||r[c]||!o||(r[c]=o),n[s]=c}return e||(e=n[s]),r=n.rs,i=n.f?r.call(d,e,t):r[e],{view:i||n.nf||n.dv,pathname:e}},start:function(){var e=k,t=c.history;r=b&&t.pushState,i=b&&!r,r?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||c.location.href;var n=k,r=h.get(e);if(!r){var i=e.replace(x,f),a=e.replace(w,f),o=I(i),v=I(a),p={};m(p,o[y]),m(p,v[y]),r={get:M,set:M,href:e,refHref:g.href,srcQuery:i,srcHash:a,query:o,hash:v,params:p},h.set(e,r)}if(t&&!r[u]){var d;d=b?r.hash[s]||r.query[s]:r.hash[s];var l=n.viewInfo(d,r);m(r,l)}return r},getChged:function(e,t){var n=e.href,r=t.href,i=n+"\n"+r,a=l.get(i);if(!a){var o,c,f;a={},a[u]=f,a[s]=f,a[y]={};var v,m,d=[s,u];for(v=1;v>=0;v--)m=d[v],c=e[m],f=t[m],c!=f&&(a[m]={from:c,to:f},o=1);var h=e[y],g=t[y];for(d=p(h).concat(p(g)),v=d.length-1;v>=0;v--)m=d[v],c=h[m],f=g[m],c!=f&&(a[y][m]={from:c,to:f},o=1);a.occur=o,a.isParam=E,a.isPathname=_,a.isView=V,l.set(i,a)}return a},route:function(){var e=k,n=e.parseQH(0,1),r=!g.get,i=e.getChged(g,n);g=n,i.occur&&(t=n,e.fire("changed",{location:n,changed:i,force:r}))},navigate:function(e,n,o){var c=k;if(!n&&a._o(e)&&(n=e,e=f),n&&(e=a.objectToPath({params:n,pathname:e},C)),e){var u=I(e),p={};if(p[y]=m({},u[y]),p[s]=u[s],p[s]){if(i){var d=t.query[y];for(var h in d)v(d,h)&&!v(p[y],h)&&(p[y][h]=f)}}else{var l=m({},t[y]);p[y]=m(l,p[y]),p[s]=t[s]}var g,x=a.objectToPath(p,C,t.query[y]);g=r?x!=t.srcQuery:x!=t.srcHash,g&&(r?(c.poped=1,history[o?"replaceState":"pushState"](f,f,x),c.route()):(m(p,t,p),p.srcHash=x,p.hash={params:p[y],pathname:p[s]},c.fire("!ul",{loc:t=p}),x="#!"+x,o?location.replace(x):location.hash=x))}}},o);return k.useState=function(){var e=k,t=location.href;$(c).on("popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())})},k.useHash=function(){$(c).on("hashchange",k.route)},k}),define("magix/body",["magix/magix"],function(e){var t,n=e("magix/magix"),r=n.has,i=n.mix,a={},o=document.body,c={},f=String.fromCharCode(26),s="mx-ei",u="mx-owner",v="addEventListener",m="removeEventListener",p=o[v],d={},h=65536,l="on",g=",",x=function(e){return e.id||(e.id="mx-e-"+h--)},w=function(e,t,n){return e&&e.setAttribute&&(n?e.setAttribute(t,n):n=e.getAttribute(t)),n},y=function(){this.returnValue=!1},b=function(){this.cancelBubble=!0},C={special:function(e){i(a,e)},process:function(e){if(e=e||window.event,e&&!e[l]){var n=e.target||e.srcElement||o;for(e[l]=1;n&&1!=n.nodeType;)n=n.parentNode;var i=n,a=e.type,c=d[a]||(d[a]=RegExp(g+a+"(?:,|$)"));if(!c.test(w(n,s))){for(var v,m,h="mx-"+a,C=[];i&&(v=w(i,h),m=w(i,s),!v&&!c.test(m));)C.push(i),i=i.parentNode;if(v){var E,_=v.split(f);if(_.length>1&&(E=_[0],v=_.pop()),E=E||w(i,u),!E)for(var V=i,M=t.all();V;){if(r(M,V.id)){w(i,u,E=V.id);break}V=V.parentNode}if(!E)throw Error("bad:"+v);var $=t.get(E),I=$&&$.view;I&&(p||(e.preventDefault=y,e.stopPropagation=b),I.pEvt({info:v,se:e,st:a,tId:x(n),cId:x(i)}))}else for(var k;C.length;)k=C.shift(),m=w(k,s)||l,c.test(m)||(m=m+g+a,w(k,s,m))}}},act:function(e,n,r){var i=c[e]||0,f=i>0?1:0,s=C.process;if(i+=n?-f:f,!i){r&&(t=r);var u=a[e];u?C.lib(o,e,n,s):p?o[n?m:v](e,s,!1):o[l+e]=n?null:s,n||(i=1)}c[e]=i}},E={focus:2,blur:2,mouseenter:2,mouseleave:2};return C.special(E),C.lib=function(e,t,n,r){var i=E[t];1==i?$(e)[n?"off":"on"](t,r):$(e)[(n?"un":"")+"delegate"]("[mx-"+t+"]",t,r)},C}),define("magix/event",["magix/magix"],function(e){var t=e("magix/magix"),n=function(e){return"~"+e},r=t.safeExec,i={fire:function(e,t,i,a){var o=n(e),c=this,f=c[o];if(f){t||(t={}),t.type||(t.type=e);for(var s,u,v=f.length,m=v-1;v--;)s=a?v:m-v,u=f[s],(u.d||u.r)&&(f.splice(s,1),m--),u.d||r(u.f,t,c)}i&&delete c[o]},on:function(e,t,r){var i=n(e),a=this[i]||(this[i]=[]),o={f:t};isNaN(r)?(o.r=r,a.push(o)):a.splice(0|r,0,o)},off:function(e,t){var r=n(e),i=this[r];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[r]},once:function(e,t){this.on(e,t,n)}};return i}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e){var t,n,r,i,a,o=e("magix/magix"),c=e("magix/event"),f=e("magix/view"),s=document,u=s.body,v=65536,m=o.safeExec,p=[],d=o.mix,h=o.config("tagName"),l=o.config("rootId"),g=o.config("!tnc"),x=o.has,w=g?"mx-vframe":"mx-defer",y=u.contains,b=g&&u.querySelectorAll,C=" "+h+"[mx-vframe]",E="alter",_="created",V=function(e){return"object"==typeof e?e:s.getElementById(e)},M=function(e,t,n){return t=V(e),t&&(n=b?s.querySelectorAll("#"+t.id+C):t.getElementsByTagName(h)),n||p},$=function(e){return e.id||(e.id="magix_vf_"+v--)},I=function(e,t,n){if(e=V(e),t=V(t),e&&t)if(e!==t)try{n=y?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},k=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=a};return d(k,{root:function(e,n,o){if(!t){r=n,i=o,a=e;var c=V(l);c||(c=s.createElement(h),c.id=l,u.appendChild(c)),t=new k(l),e.add(t)}return t}}),d(d(k.prototype,c),{mountView:function(e,t){var n=this,c=V(n.id);if(c._bak?c._chgd=1:(c._bak=1,c._tmpl=c.innerHTML),n.unmountView(),e){var s=o.pathToObject(e),u=s.pathname,v=--n.sign;o.use(u,function(e){if(v==n.sign){f.prepare(e);var o=new e({owner:n,id:n.id,$:V,path:u,vom:a,location:r});n.view=o,o.on("interact",function(e){e.tmpl||(c._chgd&&(c.innerHTML=c._tmpl),n.mountZoneVframes()),o.on("primed",function(){n.viewPrimed=1,n.fire("viewMounted")}),o.on("rendered",function(){n.mountZoneVframes()}),o.on("prerender",function(){n.unmountZoneVframes(0,1)||n.cAlter()})},0),t=t||{},o.load(d(t,s.params,t),i)}})}},unmountView:function(){var e=this,t=e.view;if(t){n||(n={}),e.unmountZoneVframes(0,1),e.cAlter(n),delete e.view,t.oust();var r=V(e.id);r&&r._bak&&(r.innerHTML=r._tmpl),delete e.viewInited,e.viewPrimed&&(delete e.viewPrimed,e.fire("viewUnmounted")),n=0}e.sign--},mountVframe:function(e,t,n){var r=this;r.fcc&&r.cAlter();var i=a.get(e);return i||(i=new k(e),i.pId=r.id,x(r.cM,e)||r.cC++,r.cM[e]=1,a.add(i)),i.mountView(t,n),i},mountZoneVframes:function(e,t){var n=this,r=e||n.id;n.unmountZoneVframes(r,1);var i=M(r),a=i.length,o={};if(a)for(var c,f,s,u,v=0;a>v;v++)if(c=i[v],f=$(c),!x(o,f)&&(s=c.getAttribute("mx-view"),u=!c.getAttribute(w),u=u!=g,u||s)){n.mountVframe(f,s,t);for(var m,p=M(c),d=0,h=p.length;h>d;d++)m=p[d],o[$(m)]=1}n.cCreated()},unmountVframe:function(e,t){var n=this;e=e||n.id;var r=a.get(e);if(r){var i=r.fcc;r.unmountView(),a.remove(e,i);var o=a.get(r.pId);o&&x(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var n,r,i=this,a=i.cM;for(r in a)e?I(r,e)&&i.unmountVframe(r,n=1):i.unmountVframe(r,n=1);return t||i.cCreated(),n},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,delete t.fca,n.fire(_,e),t.fire(_,e)),a.vfCreated();var r=t.id,i=a.get(t.pId);i&&!x(i.rM,r)&&(i.rM[r]=i.cM[r],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var n=t.fcc;if(delete t.fcc,!t.fca&&n){var r=t.view,i=t.id;r&&(t.fca=1,r.fire(E,e),t.fire(E,e));var o=a.get(t.pId);o&&x(o.rM,i)&&(o.rC--,delete o.rM[i],o.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t.sign>0){var n=t.olChanged(i),c={location:r,changed:i,prevent:function(){this.cs=p},to:function(e){e=e||p,o._s(e)&&(e=e.split(",")),this.cs=e}};n&&m(t.locationChange,c,t);for(var f,s=c.cs||o.keys(e.cM),u=0,v=s.length;v>u;u++)f=a.get(s[u]),f&&f.locChged()}}}),k}),define("magix/view",function(e){var t=e("magix/magix"),n=e("magix/event"),r=e("magix/body"),i=t.safeExec,a=t.has,o=",",c=[],f=t.noop,s=t.mix,u="~",v=function(e){return function(){var t,n=this,r=n.notifyUpdate();return r&&(t=e.apply(n,arguments)),t}},m=t.cache(40),p="<",d=">",h=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,l=String.fromCharCode(26),g={prevent:function(e){e=e||this.srcEvent,e.preventDefault()},stop:function(e){e=e||this.srcEvent,e.stopPropagation()},halt:function(e){this.prevent(e),this.stop(e)}},x=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,w=/(\w+):([^,]+)/g,y=/([$\w]+)<([\w,]+)>/,b=function(e){var t=this;s(t,e),t.sign=1,i(b.ms,[e],t)};b.ms=[],b.prepare=function(e){if(!e[u]){e[u]=1;var t,n,r,i,a,c=e.prototype,s={};for(var m in c)if(t=c[m],n=m.match(y))for(r=n[1],i=n[2],i=i.split(o),a=i.length-1;a>-1;a--)n=i[a],s[n]=1,c[r+p+n+d]=t;else"render"==m&&t!=f&&(c[m]=v(t));i&&(c.$evts=s)}},b.mixin=function(e,t){t&&b.ms.push(t),s(b.prototype,e)},s(s(b.prototype,n),{render:f,locationChange:f,init:f,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,r=e.sign,a=function(a){if(r>0&&r==e.sign){t&&(e.template=e.wrapMxEvent(a)),e.dEvts(),e.fire("interact",{tmpl:t},1),i(e.init,n,e),e.fire("inited",0,1),e.owner.viewInited=1,i(e.render,c,e);var o=!t&&!e.rendered;o&&(e.rendered=1,e.fire("primed",0,1))}};t?e.fetchTmpl(e.path,a):a()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=1),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(h,"$&"+this.id+l)},wrapAsync:function(e){var t=this,n=t.sign;return function(){n==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e){var t,n=this;n.beginUpdate(),n.sign>0&&(t=n.$(n.id),t&&(t.innerHTML=e)),n.endUpdate()},observeLocation:function(e){var n,r=this;r.$ol||(r.$ol={keys:[]}),n=r.$ol;var i=n.keys;t._o(e)&&(n.pn=e.pathname,e=e.keys),e&&(n.keys=i.concat((e+"").split(o)))},olChanged:function(e){var t=this,n=t.$ol,r=1;return n&&(r=0,n.pn&&(r=e.isPathname()),r||(r=e.isParam(n.keys))),r},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.dEvts(1)),e.sign--},pEvt:function(e){var t=this;if(t.sign>0){var n=e.info,r=e.se,a=m.get(n);a||(a=n.match(x),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(w,function(e,t,n){a.p[t]=n}),m.set(n,a));var o=a.n+p+e.st+d,c=t[o];if(c){var f=g[a.f];f&&f.call(g,r),i(c,{currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:r,halt:g.halt,prevent:g.prevent,stop:g.stop,params:a.p},t)}}},dEvts:function(e){var t=this,n=t.$evts,i=t.vom;for(var a in n)r.act(a,e,i)}});var C=("?t="+Date.now(),{});return b.prototype.fetchTmpl=function(e,t){var n=this,r="template"in n;if(r)t(n.template);else if(a(C,e))t(C[e]);else{throw Error("unsupport")}},b.extend=function(e,n,r){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),n&&i(n,arguments,this)};return o.extend=a.extend,t.extend(o,a,e,r)},b}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e){var t=e("magix/vframe"),n=e("magix/magix"),r=e("magix/event"),i=n.has,a=n.mix,o=0,c=0,f=0,s=0,u={},v={},m={},p=n.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,p.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var n=u[e];n&&(o--,t&&c--,delete u[e],p.fire("remove",{vframe:n}))},vfCreated:function(){if(!s){c++;var e=c/o;e>f&&p.fire("progress",{percent:f=e},s=1==e)}},locChged:function(e){var n,r=e.loc;if(r?n=1:r=e.location,a(v,r),!n){a(m,e.changed);var i=t.root(p,v,m);m.view?i.mountView(r.view):i.locChged()}}},r);return p}),document.createElement("vframe");