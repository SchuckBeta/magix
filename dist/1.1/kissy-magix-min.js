KISSY.add("magix/magix",function(e){var t=[].slice,n=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,r=/\/[^\/]*$/,i=/[#?].*$/,a="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,c="pathname",f=/^https?:\/\//i,s=0,u="/",v="vframe",d="\n",h=window.console,m=h&&h.error,l=function(){},p={tagName:v,rootId:"magix_vf_root",progress:l,coded:1,execError:function(e){m&&h.error(e)}},g=p.hasOwnProperty,x=function(e,t){return e?g.call(e,t):e},w=function(e){return function(t,n,r){switch(arguments.length){case 0:r=e;break;case 1:r=S._o(t)?C(e,t):x(e,t)?e[t]:null;break;case 2:null===n?(delete e[t],r=n):e[t]=r=n}return r}},y=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},b=function(e,t){var n=this;return n.get?(n.c=[],n.x=e||20,n.b=n.x+(0|t||5),void 0):new b(e,t)},C=function(e,t,n){for(var r in t)n&&x(n,r)||(e[r]=t[r]);return e};C(b.prototype,{get:function(e){var t,n=this,r=n.c;return e=c+e,x(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=s++,t=t.v)),t},list:function(){return this.c},set:function(e,t,n){var r=this,i=r.c,a=c+e,o=i[a];if(!x(i,a)){if(i.length>=r.b){i.sort(y);for(var f=r.b-r.x;f--;)o=i.pop(),delete i[o.k],o.m&&_(o.m,o.o,o)}o={},i.push(o),i[a]=o}return o.o=e,o.k=a,o.v=t,o.f=1,o.t=s++,o.m=n,t},del:function(e){e=c+e;var t=this.c,n=t[e];n&&(n.f=-1e5,n.v=a,delete t[e],n.m&&(_(n.m,n.o,n),n.m=a))},has:function(e){return e=c+e,x(this.c,e)}});var I=b(60),E=b(),_=function(e,t,n,r,i,a){for(S._a(e)||(e=[e]),t&&(S._a(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){p.execError(o)}return i},S={mix:C,has:x,safeExec:_,noop:l,config:w(p),start:function(e){var t=this;C(p,e),t.use(["magix/router","magix/vom",p.iniFile],function(n,r,i){p=C(p,i,e),p["!tnc"]=p.tagName!=v,n.on("!ul",r.locChged),n.on("changed",r.locChged),r.on("progress",p.progress),t.use(p.extensions,n.start)})},keys:Object.keys||function(e){var t=[];for(var n in e)x(e,n)&&t.push(n);return t},local:w({}),path:function(e,t){var o=e+d+t,c=E.get(o);if(!c){if(f.test(t))c=t;else if(e=e.replace(i,a).replace(r,a)+u,t.charAt(0)==u){var s=f.test(e)?8:0,v=e.indexOf(u,s);c=e.substring(0,v)+t}else c=e+t;for(;n.test(c);)c=c.replace(n,"$1/");E.set(o,c)}return c},pathToObject:function(e,t){var n=e+d+t,r=I.get(n);if(!r){r={};var s={},v=a;i.test(e)?v=e.replace(i,a):~e.indexOf("=")||(v=e);var h=e.replace(v,a);if(v&&f.test(v)){var m=v.indexOf(u,8);v=~m?v.substring(m):u}h.replace(o,function(e,n,r){if(t)try{r=decodeURIComponent(r)}catch(i){}s[n]=r}),r[c]=v,r.params=s,I.set(n,r)}return r},objectToPath:function(e,t,n){var r,i=e[c],a=[],o=e.params;for(var f in o)r=o[f],(!n||r||x(n,f))&&(t&&(r=encodeURIComponent(r)),a.push(f+"="+r));return a.length&&(i=i+"?"+a.join("&")),i},listToMap:function(e,t){var n,r,i,a={};if(S._s(e)&&(e=e.split(",")),e&&(i=e.length))for(n=0;i>n;n++)r=e[n],a[t?r[t]:r]=t?r:1;return a},cache:b};return C(S,{use:function(n,r){n?e.use(n+"",function(e){r&&r.apply(e,t.call(arguments,1))}):r&&r()},_a:e.isArray,_f:e.isFunction,_o:e.isObject,_s:e.isString,_n:e.isNumber})}),KISSY.add("magix/router",function(e,t,n,r){var i,a,o,c,f=window,s="",u="pathname",v="view",d=t.has,h=t.mix,m=t.keys,l=t.config(),p=t.cache(),g=t.cache(40),x={params:{},href:s},w=/#.*$/,y=/^[^#]*#?!?/,b="params",C=l.nativeHistory,I=l.coded,E=function(e,n,r){if(e){r=this[b],t._s(e)&&(e=e.split(","));for(var i=0;e.length>i&&!(n=d(r,e[i]));i++);}return n},_=function(){return this[u]},S=function(){return this[v]},V=function(e,t,n,r){return n=this,r=n[b],arguments.length>1?r[e]=t:r[e]},M=function(e){var n=t.pathToObject(e,I),r=n[u];return r&&c&&(n[u]=t.path(f.location[u],r)),n},k=h({viewInfo:function(e,n){var r,i;if(!a){a={rs:l.routes||{},nf:l.notFoundView};var o=l.defaultView;a.dv=o;var c=l.defaultPathname||s;r=a.rs,a.f=t._f(r),a.f||r[c]||!o||(r[c]=o),a[u]=c}return e||(e=a[u]),r=a.rs,i=a.f?r.call(l,e,n):r[e],{view:i||a.nf||a.dv,pathname:e}},start:function(){var e=k,t=f.history;o=C&&t.pushState,c=C&&!o,o?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||f.location.href;var n=k,r=p.get(e);if(!r){var i=e.replace(w,s),a=e.replace(y,s),o=M(i),c=M(a),d={};h(d,o[b]),h(d,c[b]),r={get:V,set:V,href:e,refHref:x.href,srcQuery:i,srcHash:a,query:o,hash:c,params:d},p.set(e,r)}if(t&&!r[v]){var m;m=C?r.hash[u]||r.query[u]:r.hash[u];var l=n.viewInfo(m,r);h(r,l)}return r},getChged:function(e,t){var n=e.href,r=t.href,i=n+"\n"+r,a=g.get(i);if(!a){var o,c,f;a={},a[v]=f,a[u]=f,a[b]={};var s,d,h=[u,v];for(s=1;s>=0;s--)d=h[s],c=e[d],f=t[d],c!=f&&(a[d]={from:c,to:f},o=1);var l=e[b],p=t[b];for(h=m(l).concat(m(p)),s=h.length-1;s>=0;s--)d=h[s],c=l[d],f=p[d],c!=f&&(a[b][d]={from:c,to:f},o=1);a.occur=o,a.isParam=E,a.isPathname=_,a.isView=S,g.set(i,a)}return a},route:function(){var e=k,t=e.parseQH(0,1),n=!x.get,r=e.getChged(x,t);x=t,r.occur&&(i=t,e.fire("changed",{location:t,changed:r,force:n}))},navigate:function(e,n,r){var a=k;if(!n&&t._o(e)&&(n=e,e=s),n&&(e=t.objectToPath({params:n,pathname:e},I)),e){var f=M(e),v={};if(v[b]=h({},f[b]),v[u]=f[u],v[u]){if(c){var m=i.query[b];for(var l in m)d(m,l)&&!d(v[b],l)&&(v[b][l]=s)}}else{var p=h({},i[b]);v[b]=h(p,v[b]),v[u]=i[u]}var g,x=t.objectToPath(v,I,i.query[b]);g=o?x!=i.srcQuery:x!=i.srcHash,g&&(o?(a.poped=1,history[r?"replaceState":"pushState"](s,s,x),a.route()):(h(v,i,v),v.srcHash=x,v.hash={params:v[b],pathname:v[u]},a.fire("!ul",{loc:i=v}),x="#!"+x,r?location.replace(x):location.hash=x))}}},n);return k.useState=function(){var e=k,t=location.href;r.on(f,"popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())})},k.useHash=function(){r.on(f,"hashchange",k.route)},k},{requires:["magix/magix","magix/event","event"]}),KISSY.add("magix/body",function(e,t){var n,r=t.has,i=t.mix,a={},o=document.body,c={},f=String.fromCharCode(26),s="mx-ei",u="mx-owner",v="addEventListener",d="removeEventListener",h=o[v],m={},l=65536,p="on",g=",",x=function(e){return e.id||(e.id="mx-e-"+l--)},w=function(e,t,n){return e&&e.setAttribute&&(n?e.setAttribute(t,n):n=e.getAttribute(t)),n},y=function(){this.returnValue=!1},b=function(){this.cancelBubble=!0},C={special:function(e){i(a,e)},process:function(e){if(e=e||window.event,e&&!e[p]){var t=e.target||e.srcElement||o;for(e[p]=1;t&&1!=t.nodeType;)t=t.parentNode;var i=t,a=e.type,c=m[a]||(m[a]=RegExp(g+a+"(?:,|$)"));if(!c.test(w(t,s))){for(var v,d,l="mx-"+a,C=[];i&&(v=w(i,l),d=w(i,s),!v&&!c.test(d));)C.push(i),i=i.parentNode;if(v){var I,E=v.split(f);if(E.length>1&&(I=E[0],v=E.pop()),I=I||w(i,u),!I)for(var _=i,S=n.all();_;){if(r(S,_.id)){w(i,u,I=_.id);break}_=_.parentNode}if(!I)throw Error("bad:"+v);var V=n.get(I),M=V&&V.view;M&&(h||(e.preventDefault=y,e.stopPropagation=b),M.pEvt({info:v,se:e,st:a,tId:x(t),cId:x(i)}))}else for(var k;C.length;)k=C.shift(),d=w(k,s)||p,c.test(d)||(d=d+g+a,w(k,s,d))}}},act:function(e,t,r){var i=c[e]||0,f=i>0?1:0,s=C.process;if(i+=t?-f:f,!i){r&&(n=r);var u=a[e];u?C.lib(o,e,t,s):h?o[t?d:v](e,s,!1):o[p+e]=t?null:s,t||(i=1)}c[e]=i}},I={change:1,submit:1,focusin:1,focusout:1,mouseenter:2,mouseleave:2,mousewheel:1};return C.special(I),C.lib=function(t,n,r,i){e.use("event",function(e,a){var o=I[n];1==o?(o=r?"detach":"on",a[o](t,n,i)):(o=(r?"un":"")+"delegate",a[o](t,n,"[mx-"+n+"]",i))})},C},{requires:["magix/magix"]}),KISSY.add("magix/event",function(e,t){var n=function(e){return"~"+e},r=t.safeExec,i={fire:function(e,t,i,a){var o=n(e),c=this,f=c[o];if(f){t||(t={}),t.type||(t.type=e);for(var s,u,v=f.length,d=v-1;v--;)s=a?v:d-v,u=f[s],(u.d||u.r)&&(f.splice(s,1),d--),u.d||r(u.f,t,c)}i&&delete c[o]},on:function(e,t,r){var i=n(e),a=this[i]||(this[i]=[]),o={f:t};isNaN(r)?(o.r=r,a.push(o)):a.splice(0|r,0,o)},off:function(e,t){var r=n(e),i=this[r];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[r]},once:function(e,t){this.on(e,t,n)}};return i},{requires:["magix/magix"]}),KISSY.add("magix/vframe",function(e,t,n,r){var i,a,o,c,f,s=document,u=s.body,v=65536,d=t.safeExec,h=[],m=t.mix,l=t.config("tagName"),p=t.config("rootId"),g=t.config("!tnc"),x=t.has,w=g?"mx-vframe":"mx-defer",y=u.contains,b=g&&u.querySelectorAll,C=" "+l+"[mx-vframe]",I="alter",E="created",_=function(e){return"object"==typeof e?e:s.getElementById(e)},S=function(e,t,n){return t=_(e),t&&(n=b?s.querySelectorAll("#"+t.id+C):t.getElementsByTagName(l)),n||h},V=function(e){return e.id||(e.id="magix_vf_"+v--)},M=function(e,t,n){if(e=_(e),t=_(t),e&&t)if(e!==t)try{n=y?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},k=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=f};return m(k,{root:function(e,t,n){if(!i){o=t,c=n,f=e;var r=_(p);r||(r=s.createElement(l),r.id=p,u.appendChild(r)),i=new k(p),e.add(i)}return i}}),m(m(k.prototype,n),{mountView:function(e,n){var i=this,a=_(i.id);if(a._bak?a._chgd=1:(a._bak=1,a._tmpl=a.innerHTML),i.unmountView(),e){var s=t.pathToObject(e),u=s.pathname,v=--i.sign;t.use(u,function(e){if(v==i.sign){r.prepare(e);var t=new e({owner:i,id:i.id,$:_,path:u,vom:f,location:o});i.view=t,t.on("interact",function(e){e.tmpl||(a._chgd&&(a.innerHTML=a._tmpl),i.mountZoneVframes()),t.on("primed",function(){i.viewPrimed=1,i.fire("viewMounted")}),t.on("rendered",function(){i.mountZoneVframes()}),t.on("prerender",function(){i.unmountZoneVframes(0,1)||i.cAlter()})},0),n=n||{},t.load(m(n,s.params,n),c)}})}},unmountView:function(){var e=this,t=e.view;if(t){a||(a={}),e.unmountZoneVframes(0,1),e.cAlter(a),delete e.view,t.oust();var n=_(e.id);n&&n._bak&&(n.innerHTML=n._tmpl),delete e.viewInited,e.viewPrimed&&(delete e.viewPrimed,e.fire("viewUnmounted")),a=0}e.sign--},mountVframe:function(e,t,n){var r=this;r.fcc&&r.cAlter();var i=f.get(e);return i||(i=new k(e),i.pId=r.id,x(r.cM,e)||r.cC++,r.cM[e]=1,f.add(i)),i.mountView(t,n),i},mountZoneVframes:function(e,t){var n=this,r=e||n.id;n.unmountZoneVframes(r,1);var i=S(r),a=i.length,o={};if(a)for(var c,f,s,u,v=0;a>v;v++)if(c=i[v],f=V(c),!x(o,f)&&(s=c.getAttribute("mx-view"),u=!c.getAttribute(w),u=u!=g,u||s)){n.mountVframe(f,s,t);for(var d,h=S(c),m=0,l=h.length;l>m;m++)d=h[m],o[V(d)]=1}n.cCreated()},unmountVframe:function(e,t){var n=this;e=e||n.id;var r=f.get(e);if(r){var i=r.fcc;r.unmountView(),f.remove(e,i);var a=f.get(r.pId);a&&x(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var n,r,i=this,a=i.cM;for(r in a)e?M(r,e)&&i.unmountVframe(r,n=1):i.unmountVframe(r,n=1);return t||i.cCreated(),n},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,delete t.fca,n.fire(E,e),t.fire(E,e)),f.vfCreated();var r=t.id,i=f.get(t.pId);i&&!x(i.rM,r)&&(i.rM[r]=i.cM[r],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var n=t.fcc;if(delete t.fcc,!t.fca&&n){var r=t.view,i=t.id;r&&(t.fca=1,r.fire(I,e),t.fire(I,e));var a=f.get(t.pId);a&&x(a.rM,i)&&(a.rC--,delete a.rM[i],a.cAlter(e))}},locChged:function(){var e=this,n=e.view;if(e.viewInited&&n.sign>0){var r=n.olChanged(c),i={location:o,changed:c,prevent:function(){this.cs=h},to:function(e){e=e||h,t._s(e)&&(e=e.split(",")),this.cs=e}};r&&d(n.locationChange,i,n);for(var a,s=i.cs||t.keys(e.cM),u=0,v=s.length;v>u;u++)a=f.get(s[u]),a&&a.locChged()}}}),k},{requires:["magix/magix","magix/event","magix/view"]}),KISSY.add("magix/view",function(e,t,n,r,i){var a=t.safeExec,o=t.has,c=",",f=[],s=t.noop,u=t.mix,v="~",d=function(e){return function(){var t,n=this,r=n.notifyUpdate();return r&&(t=e.apply(n,arguments)),t}},h=t.cache(40),m="<",l=">",p=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,g=String.fromCharCode(26),x={prevent:function(e){e=e||this.srcEvent,e.preventDefault()},stop:function(e){e=e||this.srcEvent,e.stopPropagation()},halt:function(e){this.prevent(e),this.stop(e)}},w=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,y=/(\w+):([^,]+)/g,b=/([$\w]+)<([\w,]+)>/,C=function(e){var t=this;u(t,e),t.sign=1,a(C.ms,[e],t)};C.ms=[],C.prepare=function(e){if(!e[v]){e[v]=1;var t,n,r,i,a,o=e.prototype,f={};for(var u in o)if(t=o[u],n=u.match(b))for(r=n[1],i=n[2],i=i.split(c),a=i.length-1;a>-1;a--)n=i[a],f[n]=1,o[r+m+n+l]=t;else"render"==u&&t!=s&&(o[u]=d(t));i&&(o.$evts=f)}},C.mixin=function(e,t){t&&C.ms.push(t),u(C.prototype,e)},u(u(C.prototype,n),{render:s,locationChange:s,init:s,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,r=e.sign,i=function(i){if(r>0&&r==e.sign){t&&(e.template=e.wrapMxEvent(i)),e.dEvts(),e.fire("interact",{tmpl:t},1),a(e.init,n,e),e.fire("inited",0,1),e.owner.viewInited=1,a(e.render,f,e);var o=!t&&!e.rendered;o&&(e.rendered=1,e.fire("primed",0,1))}};t?e.fetchTmpl(e.path,i):i()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=1),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(p,"$&"+this.id+g)},wrapAsync:function(e){var t=this,n=t.sign;return function(){n==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e){var t,n=this;n.beginUpdate(),n.sign>0&&(t=n.$(n.id),t&&(t.innerHTML=e)),n.endUpdate()},observeLocation:function(e){var n,r=this;r.$ol||(r.$ol={keys:[]}),n=r.$ol;var i=n.keys;t._o(e)&&(n.pn=e.pathname,e=e.keys),e&&(n.keys=i.concat((e+"").split(c)))},olChanged:function(e){var t=this,n=t.$ol,r=1;return n&&(r=0,n.pn&&(r=e.isPathname()),r||(r=e.isParam(n.keys))),r},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.dEvts(1)),e.sign--},pEvt:function(e){var t=this;if(t.sign>0){var n=e.info,r=e.se,i=h.get(n);i||(i=n.match(w),i={n:i[1],f:i[2],i:i[3],p:{}},i.i&&i.i.replace(y,function(e,t,n){i.p[t]=n}),h.set(n,i));var o=i.n+m+e.st+l,c=t[o];if(c){var f=x[i.f];f&&f.call(x,r),a(c,{currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:r,halt:x.halt,prevent:x.prevent,stop:x.stop,params:i.p},t)}}},dEvts:function(e){var t=this,n=t.$evts,i=t.vom;for(var a in n)r.act(a,e,i)}});var I="?t="+e.now(),E=e.Env.mods,_={},S={};return C.prototype.fetchTmpl=function(e,t){var n=this,r="template"in n;if(r)t(n.template);else if(o(_,e))t(_[e]);else{var c,f=E[e];f&&(c=f.uri||f.fullpath,c=c.slice(0,c.indexOf(e)+e.length));var s=c+".html",u=S[s],v=function(n){t(_[e]=n)};u?u.push(v):(u=S[s]=[v],i({url:s+I,complete:function(e,t){a(u,e||t),delete S[s]}}))}},C.extend=function(t,n,r){var i=this,o=function(){o.superclass.constructor.apply(this,arguments),n&&a(n,arguments,this)};return o.extend=i.extend,e.extend(o,i,t,r)},C},{requires:["magix/magix","magix/event","magix/body","ajax"]}),KISSY.add("magix/vom",function(e,t,n,r){var i=n.has,a=n.mix,o=0,c=0,f=0,s=0,u={},v={},d={},h=n.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,h.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var n=u[e];n&&(o--,t&&c--,delete u[e],h.fire("remove",{vframe:n}))},vfCreated:function(){if(!s){c++;var e=c/o;e>f&&h.fire("progress",{percent:f=e},s=1==e)}},locChged:function(e){var n,r=e.loc;if(r?n=1:r=e.location,a(v,r),!n){a(d,e.changed);var i=t.root(h,v,d);d.view?i.mountView(r.view):i.locChged()}}},r);return h},{requires:["magix/vframe","magix/magix","magix/event"]}),document.createElement("vframe");