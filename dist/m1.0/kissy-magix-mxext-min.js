KISSY.add("magix/magix",function(e){var t=[].slice,r=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,n=/\/[^\/]*$/,i=/[#?].*$/,a="",o=/([^=&?\/#]+)=([^&=#?]*)/g,s="pathname",c=/^https?:\/\//i,u={},f=0,v="/",l="vframe",h={iniFile:"app/ini",appName:"app",appHome:"./",tagName:l,rootId:"magix_vf_root"},d=u.hasOwnProperty,m=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=M.isObject(t)?x(e,t):y(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},p=function(e){var t=this;t.c=[],t.x=e||5,t.b=t.x+3},g=function(e){return new p(e)},y=function(e,t){return e?d.call(e,t):0},x=function(e,t,r){for(var n in t)r&&y(r,n)||(e[n]=t[n]);return e};x(p.prototype,{get:function(e){var t,r=this,n=r.c;return e=s+e,y(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},set:function(e,t){var r=this,n=r.c;e=s+e;var i=n[e];if(!y(n,e)){if(n.length>=r.b){n.sort(function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f});for(var a=r.b-r.x;a--;)i=n.pop(),delete n[i.k]}i={},n.push(i),n[e]=i}return i.k=e,i.v=t,i.f=1,i.t=f++,i},del:function(e){e=s+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=a,delete t[e])},has:function(e){return e=s+e,y(this.c,e)}});var w=g(20),b=g(),$=function(e,t,r,n,i,a){for(M.isArray(e)||(e=[e]),t&&(M.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=M.isFunction(a)&&a.apply(r,t)}catch(o){}return i},C=function(){},M={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:x,has:y,safeExec:$,noop:C,config:m(h),start:function(e){var t=this;e=x(h,e),t.libEnv(e),e.ready&&($(e.ready),delete e.ready),t.libRequire(e.iniFile,function(r){h=x(e,r,e),h.tagNameChanged=h.tagName!=l;var n=e.progress;t.libRequire(["magix/router","magix/vom"],function(r,i){r.on("!ul",i.locChged),r.on("changed",i.locChged),n&&i.on("progress",n),t.libRequire(e.extensions,r.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)y(e,r)&&t.push(r);return t},local:m({}),path:function(e,t){var o=e+"\n"+t,s=b.get(o);if(!s){if(c.test(t))s=t;else if(e=e.replace(i,a).replace(n,a)+v,t.charAt(0)==v){var u=c.test(e)?8:0,f=e.indexOf(v,u);s=e.substring(0,f)+t}else s=e+t;for(;r.test(s);)s=s.replace(r,"$1/");b.set(o,s)}return s},pathToObject:function(e,t){var r=w.get(e);if(!r){r={};var n={},u=a;if(i.test(e)?u=e.replace(i,a):~e.indexOf("=")||(u=e),u&&c.test(u)){var f=u.indexOf(v,8);u=-1==f?v:u.substring(f)}e.replace(o,function(e,r,i){if(t)try{i=decodeURIComponent(i)}catch(a){}n[r]=i}),r[s]=u,r.params=n,w.set(e,r)}return r},objectToPath:function(e,t){var r,n=e[s],i=[],a=e.params;for(var o in a)r=a[o],t&&encodeURIComponent(r),i.push(o+"="+r);return i.length&&(n=n+"?"+i.join("&")),n},tmpl:function(e,t){return 1==arguments.length?{v:u[e],h:y(u,e)}:(u[e]=t,t)},listToMap:function(e,t){var r,n,i,a={};if(M.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:g};return x(M,{libRequire:function(r,n){r?e.use(r+"",function(e){n&&n.apply(e,t.call(arguments,1))}):n&&n()},libEnv:function(t){var r=this,n=t.appHome,i=location;i.protocol;var o=t.appName;n=r.path(i.href,n+v),t.appHome=n;var s=t.debug;s&&(s=0==n.indexOf(i.protocol+v+v+i.host+v));var c=a;c=s?e.now():t.appTag,c&&(c+=".js"),e.config({packages:[{name:o,path:n,debug:t.debug=s,combine:t.appCombine,tag:c}]})},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isObject,isRegExp:e.isRegExp,isString:e.isString,isNumber:e.isNumber})}),KISSY.add("magix/router",function(e,t,r,n){var i,a,o,s,c,u=window,f="",v="pathname",l=t.has,h=t.mix,d=document,m=/^UTF-8$/i.test(d.charset||d.characterSet||"UTF-8"),p=t.config(),g=t.cache(),y=t.cache(),x=/#.*$/,w=/^[^#]*#?!?/,b="params",$=p.nativeHistory,C=function(e,r,n){if(e){n=this[b],t.isArray(e)||(e=e.split(","));for(var i=0;e.length>i&&!(r=l(n,e[i]));i++);}return r},M=function(){return l(this,v)},E=function(){return l(this,"view")},S=function(){var e=this,t=e.hash,r=e.query;return t[v]!=r[v]},T=function(e){var t=this,r=t.hash,n=t.query;return r[b][e]!=n[b][e]},O=function(e){var t=this,r=t.hash;return l(r[b],e)},I=function(e){var t=this,r=t.query;return l(r[b],e)},A=function(e){var t=this,r=t[b];return r[e]},P=function(e){var r=t.pathToObject(e,m),n=r[v];return n&&c&&(r[v]=t.path(u.location[v],n)),r},V=h({getView:function(e){if(!o){o={rs:p.routes||{},nf:p.notFoundView};var r=p.defaultView;if(!r)throw Error("unset defaultView");o.home=r;var n=p.defaultPathname||f;o.rs[n]=r,o[v]=n}var i;e||(e=o[v]);var a=o.rs;return i=t.isFunction(a)?a.call(p,e):a[e],{view:i?i:o.nf||o.home,pathname:i||$?e:o.nf?e:o[v]}},start:function(){var e=V,t=u.history;s=$&&t.pushState,c=$&&!s,s?e.useState():e.useHash(),e.route()},parseQH:function(e){e=e||u.location.href;var t=V,r=g.get(e);if(!r){var n=e.replace(x,f),i=e.replace(w,f),a=P(n),o=P(i),s={};h(s,a[b]),h(s,o[b]),r={pathnameDiff:S,paramDiff:T,hashOwn:O,queryOwn:I,get:A,href:e,srcQuery:n,srcHash:i,query:a,hash:o,params:s},g.set(e,r)}if(!r.view){var c;c=$?r.hash[v]||r.query[v]:r.hash[v];var l=t.getView(c);h(r,l)}return r},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=y.get(i);if(a||(i=n+"\n"+i,a=y.get(i)),!a){var o;a={params:{}},e[v]!=t[v]&&(a[v]=1,o=1),e.view!=t.view&&(a.view=1,o=1);var s,c=e[b],u=t[b];for(s in c)c[s]!=u[s]&&(o=1,a[b][s]=1);for(s in u)c[s]!=u[s]&&(o=1,a[b][s]=1);a.occur=o,a.isParam=C,a.isPathname=M,a.isView=E,y.set(i,a)}return a},route:function(){var e=V,t=e.parseQH(),r=a||{params:{},href:"~"},n=!a;a=t;var o=e.getChged(r,t);o.occur&&(i=t,e.fire("changed",{location:t,changed:o,force:n}))},navigate:function(e,r,n){var a=V;if(!r&&t.isObject(e)&&(r=e,e=f),r&&(e=t.objectToPath({params:r,pathname:e},m)),e){var o=P(e),u={};if(u[b]=h({},o[b]),u[v]=o[v],u[v]){if(c){var d=i.query;if(d&&(d=d[b]))for(var p in d)l(d,p)&&!l(u[b],p)&&(u[b][p]=f)}}else{var g=h({},i[b]);u[b]=h(g,u[b]),u[v]=i[v]}var y,x=t.objectToPath(u);y=s?x!=i.srcQuery:x!=i.srcHash,y&&(s?(a.poped=1,history[n?"replaceState":"pushState"](null,null,x),a.route()):(h(u,i,u),u.srcHash=x,u.hash={params:u[b],pathname:u[v]},a.fire("!ul",{loc:i=u}),x="#!"+x,n?location.replace(x):location.hash=x))}}},r);return V.useState=function(){var e=V,t=location.href;n.on(u,"popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},V.useHash=function(){n.on(u,"hashchange",V.route)},V},{requires:["magix/magix","magix/event","event"]}),KISSY.add("magix/body",function(e,t,r){var n,i=t.has,a=t.listToMap(""),o=document.body,s={},c=String.fromCharCode(26),u="mx-owner",f="mx-ie",v={},l=65536,h=function(e){return e.id||(e.id="mx-e-"+l--)},d=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},m={process:function(e){for(var t=e.target||e.srcElement;t&&1!=t.nodeType;)t=t.parentNode;var r=t,a=e.type,s=v[a]||(v[a]=RegExp("(?:^|,)"+a+"(?:,|$)"));if(!s.test(d(t,f))){for(var l,m,p="mx-"+a,g=[];r&&r!=o&&(l=d(r,p),m=d(r,f),!l&&!s.test(m));)g.push(r),r=r.parentNode;if(l){var y,x=l.indexOf(c);x>-1&&(y=l.slice(0,x),l=l.slice(x));var w=d(r,u)||y;if(!w)for(var b=r,$=n.all();b&&b!=o;){if(i($,b.id)){d(r,u,w=b.id);break}b=b.parentNode}if(!w)throw Error("miss "+u+":"+l);var C=n.get(w),M=C&&C.view;M&&M.processEvent({info:l,se:e,tId:h(t),cId:h(r)})}else for(var E;g.length;)E=g.shift(),m=d(E,f),s.test(m)||(m=m?m+","+a:a,d(E,f,m))}},on:function(e,t){var r=this;if(s[e])s[e]++;else{n=t,s[e]=1;var i=a[e];i?r.unbubble(0,o,e):o["on"+e]=function(e){e=e||window.event,e&&r.process(e)}}},un:function(e){var t=this,r=s[e];if(r>0){if(r--,!r){var n=a[e];n?t.unbubble(1,o,e):o["on"+e]=null}s[e]=r}}};return m.unbubble=function(e,t,n){var i=e?r.undelegate:r.delegate;i.call(r,t,n,"[mx-"+n+"]",m.process)},m},{requires:["magix/magix","event","sizzle"]}),KISSY.add("magix/event",function(e,t){var r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var u,f,v=c.length,l=v-1;v--;)u=a?v:l-v,f=c[u],(f.d||f.r)&&(c.splice(u,1),l--),f.d||n(f.f,t,s)}i&&delete s[o]},on:function(e,n,i){var a=r(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},un:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]}};return i},{requires:["magix/magix"]}),KISSY.add("magix/vframe",function(e,t,r,n){var i,a,o,s=document,c=65536,u=t.safeExec,f=[].slice,v=t.mix,l=t.config("tagName"),h=t.config("rootId"),d=!t.config("tagNameChanged"),m=t.has,p="mx-view",g=d?"mx-defer":"mx-vframe",y="alter",x="created",w=function(e){return"object"==typeof e?e:s.getElementById(e)},b=function(e,t,r){return r=w(e),r?r.getElementsByTagName(t):[]},$=function(e){return s.createElement(e)},C=function(e){return e.id||(e.id="magix_vf_"+c--)},M=function(e,t,r){if(e=w(e),t=w(t),e&&t)if(e!==t)try{r=t.contains?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},E=/<script[^>]*>[\s\S]*?<\/script>/gi,S=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={}};return v(S,{root:function(e,t){if(!i){o=t;var r=w(h);r||(r=$(l),r.id=h,s.body.insertBefore(r,s.body.firstChild)),i=new S(h),e.add(i)}return i}}),v(v(S.prototype,r),{mountView:function(e,r,i){var a=this,s=w(a.id);if(s._bak?s._chgd=1:(s._bak=1,s._tmpl=s.innerHTML.replace(E,"")),a.unmountView(),e){var c=t.pathToObject(e),f=c.pathname,l=--a.sign;t.libRequire(f,function(e){if(l==a.sign){var t=a.owner;n.prepare(e);var h=new e({owner:a,id:a.id,$:w,path:f,vom:t,location:o});a.view=h,h.on("interact",function(e){e.tmpl||(s._chgd&&(s.innerHTML=s._tmpl),a.mountZoneVframes(0,0,1)),h.on("rendered",function(){a.mountZoneVframes(0,0,1)}),h.on("prerender",function(){a.unmountZoneVframes(0,1)||a.cAlter()}),h.on("inited",function(){a.viewInited=1,a.fire("viewInited",{view:h}),i&&u(i,h,a)})},0),r=r||{},h.load(v(r,c.params,r))}})}},unmountView:function(){var e=this;if(e.view){a||(a={}),e.unmountZoneVframes(0,1),e.cAlter(a),e.view.destroy();var t=w(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,a=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r){var n=this,i=n.owner,a=i.get(e);return a||(a=new S(e),a.pId=n.id,m(n.cM,e)||n.cC++,n.cM[e]=1,i.add(a)),a.mountView(t,r),a},mountZoneVframes:function(e,t){var r=this,n=e||r.id;r.unmountZoneVframes(n,1);var i=b(n,l),a=i.length,o={};if(a)for(var s,c,u,f,v=0;a>v;v++)if(s=i[v],c=C(s),!m(o,c)&&(u=s.getAttribute(p),f=!s.getAttribute(g),f=f==d,f||u)){r.mountVframe(c,u,t);for(var h,y=b(s,l),x=0,w=y.length;w>x;x++)h=y[x],u=h.getAttribute(p),f=!h.getAttribute(g),f=f==d,f||u||(o[C(h)]=1)}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=r.owner,i=n.get(e);if(i){var a=i.fcc;i.unmountView(),n.remove(e,a),r.fire("destroy");var o=n.get(i.pId);o&&m(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i,a=this;if(e){var o=a.cM,s={};for(i in o)M(i,e)&&(s[i]=1);r=s}else r=a.cM;for(i in r)n=1,a.unmountVframe(i,1);return t||a.cCreated(),n},invokeView:function(e){var t,r=this,n=r.view,i=f.call(arguments,1);return r.viewInited&&n[e]&&(t=u(n[e],i,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(x,e),t.fire(x,e));var n=t.owner;n.vfCreated();var i=t.id,a=n.get(t.pId);a&&!m(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(y,e),t.fire(y,e));var i=t.owner,a=i.get(t.pId);a&&m(a.rM,n)&&(a.rC--,delete a.rM[n],a.cAlter(e))}},locChged:function(e,r){var n=this,i=n.view;if(i&&i.sign&&i.rendered){var a=i.olChanged(r),o={location:e,changed:r,prevent:function(){this.cs=[]},toChildren:function(e){e=e||[],t.isString(e)&&(e=e.split(",")),this.cs=e}};a&&u(i.locationChange,o,i);for(var s,c=o.cs||t.keys(n.cM),f=0,v=c.length,l=n.owner;v>f;f++)s=l.get(c[f]),s&&s.locChged(e,r)}}}),S},{requires:["magix/magix","magix/event","magix/view"]}),KISSY.add("magix/view",function(e,t,r,n,i){var a=t.safeExec,o=t.has,s=",",c=[],u=t.mix,f=["render","renderUI"],v="~",l=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},h=t.cache(40),d=/\smx-(?!view|defer|owner)[a-z]+\s*=\s*['"]/g,m=String.fromCharCode(26),p={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},g=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,y=/(\w+):([^,]+)/g,x=function(e){var t=this;u(t,e),t.sign=1};u(x,{wrapUpdate:function(){var e=this;if(!e[v]){e[v]=1;for(var r,n,i=e.prototype,a=f.length-1;a>-1;a--)n=f[a],r=i[n],t.isFunction(r)&&r!=t.noop&&(i[n]=l(r))}}}),u(u(x.prototype,r),{render:t.noop,locationChange:t.noop,init:t.noop,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,i=o(e,"template"),s=function(o){if(n==e.sign){i||(e.template=e.wrapMxEvent(o)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),a(e.init,r,e),e.fire("inited",0,1),a(e.render,c,e);var s=!t&&!e.rendered;s&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!i?e.fetchTmpl(s):s()},beginUpdate:function(){var e=this;e.sign&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(d,"$&"+this.id+m)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(s)))},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},destroy:function(){var e=this;e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1),e.sign=0},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign){var r=e.info,n=e.se,i=h.get(r);i||(i=r.match(g),i={n:i[1],f:i[2],i:i[3],p:{}},i.i&&i.i.replace(y,function(e,t,r){i.p[t]=r}),h.set(r,i));var o=t.events;if(o){var s=o[n.type],c=p[i.f];c&&c.call(p,n),c=s&&s[i.n],c&&a(c,u({view:t,currentId:e.cId,targetId:e.tId,domEvent:n,events:o,params:i.p},p),s)}}},delegateEvents:function(e){var t=this,r=t.events,i=e?n.un:n.on,a=t.vom;for(var o in r)i.call(n,o,a)}});var w=t.config("appHome"),b=t.config("debug")?"?t="+e.now():"",$=function(t,r,n){for(var i in r)e.isObject(r[i])?(o(t,i)||(t[i]={}),$(t[i],r[i],1)):n&&(t[i]=r[i])};return x.prototype.fetchTmpl=function(e){var r=this,n="template"in r;if(n)e(tmpl);else{var o=t.tmpl(r.path);if(o.h)e(o.v);else{var s=w+r.path+".html",c=$[s],u=function(n){e(t.tmpl(r.path,n))};c?c.push(u):(c=$[s]=[u],i({url:s+b,success:function(e){a(c,e),delete $[s]},error:function(e,t){a(c,t),delete $[s]}}))}}},x.extend=function(t,r,n){var i=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&a(r,arguments,this)};return o.extend=i.extend,e.extend(o,i,t,n)},x.prepare=function(e){var t=this;if(!e.wrapUpdate){e.wrapUpdate=t.wrapUpdate,e.extend=t.extend;for(var r,n=e.prototype,i=e.superclass;i;)r=i.constructor,$(n,r.prototype),i=r.superclass}e.wrapUpdate()},x},{requires:["magix/magix","magix/event","magix/body","ajax"]}),KISSY.add("magix/vom",function(e,t,r,n){var i=r.has,a=r.mix,o=0,s=0,c=0,u=0,f={},v={},l=r.mix({all:function(){return f},add:function(e){i(f,e.id)||(o++,f[e.id]=e,e.owner=l,l.fire("add",{vframe:e}))},get:function(e){return f[e]},remove:function(e,t){var r=f[e];r&&(o--,t&&s--,delete f[e],l.fire("remove",{vframe:r}))},vfCreated:function(){if(!u){s++;var e=s/o;e>c&&l.fire("progress",{percent:c=e},u=1==e)}},root:function(){return t.root(l,v)},locChged:function(e){var t,r=e.loc;if(r?t=1:r=e.location,a(v,r),!t){var n=l.root(),i=e.changed;i.isView()?n.mountView(r.view):n.locChged(r,i)}}},n);return l},{requires:["magix/vframe","magix/magix","magix/event"]}),KISSY.add("mxext/mmanager",function(e,t,r){var n=t.has,i=t.safeExec,a=t.mix,o=function(e){var r=this;r.$mClass=e,r.$mCache=t.cache(),r.$mCacheKeys={},r.$mMetas={}},s=[].slice,c={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,before:1,after:1},u=function(e,t,r){return function(){return e.apply(t,[t,r].concat(s.call(arguments)))}},f=function(e,t){if(t)for(var r=e.length-1;r>-1;r--)f(e[r]);else{var n=e.$mm;!e.fromCache&&n.used>0&&(e.fromCache=!0),n.used++}};a(o,{create:function(e){if(!e)throw Error("MManager.create:modelClass ungiven");return new o(e)}});var v={ALL:1,ONE:2,ORDER:4},l=Date.now||function(){return+new Date},h=function(e){this.$host=e,this.$doTask=!1,this.$reqModels={}},d="_before",m="_after";return a(h.prototype,{send:function(e,r,a,o){var s=this;if(s.$doTask)return s.next(function(t){t.send(e,r,a,o)}),s;s.$doTask=!0;var c=s.$host,h=c.$mCache,d=c.$mCacheKeys,m=s.$reqModels;t.isArray(e)||(e=[e]);var p,g,y=e.length,x=0,w=Array(y),b=[],$={},C=[],M=t.isArray(r);M&&(b=Array(r.length));for(var E,S=function(e,t,o,u){if(!s.$destroy){x++,delete m[e.id];var E=e.$mm,S=E.cacheKey;if(w[t]=e,u)g=!0,p=u,$[t]=o;else if(!S||S&&!h.has(S)){S&&h.set(S,e),E.doneAt=l();var T=E.after,O=E.meta;T&&i(T,[e,O]),c.fireAfter(O.name,[e])}if(a==v.ONE){var I=M?r[t]:r;I&&(f(e),b[t]=i(I,[e,g?{msg:p}:null,g?$:null],s))}else if(a==v.ORDER){C[t]={m:e,e:g,s:p};for(var A,P,V=C.i||0;A=C[V];V++)P=M?r[V]:r,f(A.m),b[V]=i(P,[A.m,A.e?{msg:A.s}:null,C.e?$:null,b],s),A.e&&($[V]=A.s,C.e=1);C.i=V}if(x>=y){$.msg=p;var k=g?$:null;a==v.ALL?(f(w,1),w.push(k),b[0]=i(r,w,s),b[1]=k):b.push(k),s.$ntId=setTimeout(function(){s.doNext(b)},30)}if(S&&n(d,S)){var q=d[S].q;delete d[S],i(q,[o,u],e)}}},T=0;e.length>T;T++){if(E=e[T],!E)throw Error("miss attrs:"+e);var O,I=c.getModel(E,o),A=I.cacheKey;O=I.entity;var P=u(S,O,T);A&&n(d,A)?d[A].q.push(P):I.needUpdate?(m[O.id]=O,A&&(d[A]={q:[],e:O}),O.request(P)):P()}return s},fetchAll:function(e,t){return this.send(e,t,v.ALL)},saveAll:function(e,t){return this.send(e,t,v.ALL,1)},fetchOrder:function(e,t){var r=s.call(arguments,1);return this.send(e,r.length>1?r:t,v.ORDER)},saveOrder:function(e,t){var r=s.call(arguments,1);return this.send(e,r.length>1?r:t,v.ORDER,1)},saveOne:function(e,t){var r=s.call(arguments,1);return this.send(e,r.length>1?r:t,v.ONE,1)},fetchOne:function(e,t){var r=s.call(arguments,1);return this.send(e,r.length>1?r:t,v.ONE)},abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqModels,a=t.$mCacheKeys;if(r)for(var o in r){var s=r[o],c=s.$mm.cacheKey;if(c&&n(a,c)){var u=a[c];delete a[c],i(u,[!0,s,"aborted"],s)}s.abort()}e.$reqModels={},e.$queue=[],e.$doTask=!1},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$doTask){var r=t.$latest||[];t.doNext.apply(t,[t].concat(r))}return t},doNext:function(e){var t=this;t.$doTask=!1;var r=t.$queue;if(r){var n=r.shift();n&&i(n,[t].concat(e),t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=!0,e.abort()}}),a(o.prototype,{registerModels:function(e){var r=this,n=r.$mMetas;t.isArray(e)||(e=[e]);for(var i,a,o=0;e.length>o;o++){if(i=e[o],a=i.name,i&&!a)throw Error("miss name attribute");if(n[a])throw Error("already exist:"+a);n[a]=i}},registerMethods:function(e){var t=this;a(t,e)},createModel:function(e){var r=this,n=r.getModelMeta(e),a=new r.$mClass;a.set(n,c),a.$mm={used:0};var o=e.before||n.before;r.fireBefore(n.name,[a]),t.isFunction(o)&&i(o,[a,n,e]);var s=e.after||n.after;a.$mm.after=s;var u=e.cacheKey||n.cacheKey;return t.isFunction(u)&&(u=i(u,[n,e])),a.$mm.cacheKey=u,a.$mm.meta=n,a.set(e,c),a.setUrlParams(n.urlParams),a.setPostParams(n.postParams),a.setUrlParams(e.urlParams),a.setPostParams(e.postParams),a},getModelMeta:function(e){var r,n=this,i=n.$mMetas;r=t.isString(e)?e:e.name;var a=i[r];if(!a)throw Error("Not found:"+e.name);return a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=!0,r=i.createModel(e)),{entity:r,cacheKey:r.$mm.cacheKey,needUpdate:n}},saveAll:function(e,t){return new h(this).saveAll(e,t)},fetchAll:function(e,t){return new h(this).fetchAll(e,t)},saveOrder:function(){var e=new h(this);return e.saveOrder.apply(e,arguments)},fetchOrder:function(){var e=new h(this);return e.fetchOrder.apply(e,arguments)},saveOne:function(){var e=new h(this);return e.saveOne.apply(e,arguments)},fetchOne:function(){var e=new h(this);return e.fetchOne.apply(e,arguments)},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.cacheKey)}}},getModelUrl:function(e){var t=this,r=t.getModelMeta(e);return r.url?r.url:void 0},listenBefore:function(e,t){r.on.call(this,e+d,t)},listenAfter:function(e,t){r.on.call(this,e+m,t)},unlistenBefore:function(e,t){r.un.call(this,e+d,t)},unlistenAfter:function(e,t){r.un.call(this,e+m,t)},fireBefore:function(e,t){r.fire.call(this,e+d,t)},fireAfter:function(e,t){r.fire.call(this,e+m,t)},getCachedModel:function(e){var r,n,a=this,o=a.$mCache,s=null;if(t.isString(e)?r=e:(n=a.getModelMeta(e),r=e.cacheKey||n.cacheKey,t.isFunction(r)&&(r=i(r,[n,e]))),r){var c=a.$mCacheKeys,u=c[r];if(u)s=u.e;else if(s=o.get(r)){n||(n=s.$mm.meta);var f=e.cacheTime||n.cacheTime||0;t.isFunction(f)&&(f=i(f,[n,e])),f>0&&l()-s.$mm.doneAt>f&&(a.clearCacheByKey(r),s=null)}}return s}}),o},{requires:["magix/magix","magix/event"]}),KISSY.add("mxext/model",function(e,t){var r=function(r,i){var a=function(){a.superclass.constructor.apply(this,arguments),i&&t.safeExec(i,[],this)};return t.mix(a,this,{prototype:!0}),n(r,this.prototype),e.extend(a,this,r)},n=function(e,r,i){for(var a in r)t.isObject(r[a])?(t.has(e,a)||(e[a]={}),n(e[a],r[a],!0)):i&&(e[a]=r[a])},i=+new Date,a=function(e){e&&this.set(e),this.id="m"+i--},o=encodeURIComponent;return t.mix(a,{GET:"GET",POST:"POST",extend:r}),t.mix(a.prototype,{sync:t.noop,parse:function(e){return e},getPostParams:function(){return this.getParams(a.POST)},getUrlParams:function(){return this.getParams(a.GET)},getParams:function(e){var r=this;e=e?e.toUpperCase():a.GET;var n,i="$"+e,s=r[i],c=[];if(s)for(var u in s)if(n=s[u],t.isArray(n))for(var f=0;n.length>f;f++)c.push(u+"="+o(n[f]));else c.push(u+"="+o(n));return c.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,a.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,a.POST,!0)},setParams:function(e,r,n,i){n=n?n.toUpperCase():a.GET;var o=this;o.$types||(o.$types={}),o.$types[n]=!0;var s="$"+n;if(o[s]||(o[s]={}),t.isObject(e))for(var c in e)i&&o[s][c]||(o[s][c]=e[c]);else e&&(i&&o[s][e]||(o[s][e]=r))},setPostParams:function(e,t){var r=this;r.setParams(e,t,a.POST)},setUrlParams:function(e,t){this.setParams(e,t,a.GET)},reset:function(){var e=this,r=e.$types;if(r){for(var n in r)t.has(r,n)&&delete e["$"+n];delete e.$types}var i=e.$keys,a=e.$attrs;if(i){for(var o=0;i.length>o;o++)delete a[i[o]];delete e.$keys}},get:function(e){var t=this,r=!arguments.length,n=t.$attrs;return n?r?n:n[e]:null},set:function(e,r,n){var i=this;if(i.$attrs||(i.$attrs={}),n&&!i.$keys&&(i.$keys=[]),t.isObject(e)){t.isObject(r)||(r={});for(var a in e)n&&i.$keys.push(a),t.has(r,a)||(i.$attrs[a]=e[a])}else e&&(n&&i.$keys.push(e),i.$attrs[e]=r)},request:function(e,r){e||(e=function(){});var n=t.isFunction(e),i=e.success,a=e.error,o=this;o.$abort=!1;var s=function(s,c){if(!o.$abort)if(c)n&&e(s,c,r),a&&a.call(o,c);else{if(s){var u=o.parse(s);t.isObject(u)||(u={data:u}),o.set(u,null,!0)}n&&e(s,c,r),i&&i.call(o,s)}};o.$trans=o.sync(s,r)},abort:function(){var e=this;e.$trans&&e.$trans.abort&&e.$trans.abort(),delete e.$trans,e.$abort=!0},isAborted:function(){return this.$abort},rollbackTransaction:function(){var e=this,t=e.$bakAttrs;t&&(e.$attrs=t,delete e.$bakAttrs)},endTransaction:function(){delete this.$bakAttrs}}),a.prototype.beginTransaction=function(){var t=this;t.$bakAttrs=e.clone(t.$attrs)},a},{requires:["magix/magix"]}),KISSY.add("mxext/view",function(e,t,r,n){var i=window,a=function(e){i.clearTimeout(e),i.clearInterval(e)},o=function(e){c(e.destroy,[],e)},s=0,c=t.safeExec,u=t.has,f=r.extend({mxViewCtor:t.noop,navigate:function(){n.navigate.apply(n,arguments)},manage:function(e,r){var n=this,i=arguments,c=!0;1==i.length&&(r=e,e="res_"+s++,c=!1),n.$res||(n.$res={});var u;t.isNumber(r)?u=a:r&&r.destroy&&(u=o);var f={hasKey:c,res:r,destroy:u};return n.$res[e]=f,r},getManaged:function(e){var t=this,r=t.$res;if(t.sign,r&&u(r,e)){var n=r[e],i=n.res;return i}return null},removeManaged:function(e){var t=this,r=null,n=t.$res;if(n)if(u(n,e))r=n[e].res,delete n[e];else for(var i in n)if(n[i].res===e){r=n[i].res,delete n[i];break}return r},destroyManaged:function(e){var t=this,r=t.$res;if(r){for(var n in r){var i=r[n],a=i.res,o=i.destroy,s=!1;o&&(o(a),s=!0),i.hasKey||delete r[n],t.fire("destroyManaged",{resource:a,processed:s})}"destroy"==e.type&&delete t.$res}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)}),e.mxViewCtor()});return f},{requires:["magix/magix","magix/view","magix/router"]}),function(e){document.createElement("vframe");var t=function(){};e.console||(e.console={log:t,info:t,warn:t});var r,n={};e.Magix||(e.Magix={config:function(e){for(var t in e)n[t]=e[t]},start:function(e){r=e}},KISSY.use("magix/magix",function(t,i){e.Magix=i,i.config(n),r&&i.start(r)}))}(this);