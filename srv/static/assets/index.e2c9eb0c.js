const Kt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};Kt();const ee={},zt=(t,e)=>t===e,Qt=Symbol("solid-track"),ge={equals:zt};let Yt=$t;const J={},G=1,we=2,Et={owned:null,cleanups:null,context:null,owner:null};var b=null;let ne=null,v=null,re=null,R=null,D=null,Fe=0;function ve(t,e){const r=v,n=b,s=t.length===0?Et:{owned:null,cleanups:null,context:null,owner:e||n};b=s,v=null;try{return je(()=>t(()=>Me(s)),!0)}finally{v=r,b=n}}function qe(t,e){e=e?Object.assign({},ge,e):ge;const r={value:t,observers:null,observerSlots:null,pending:J,comparator:e.equals||void 0},n=s=>(typeof s=="function"&&(s=s(r.pending!==J?r.pending:r.value)),Ie(r,s));return[bt.bind(r),n]}function I(t,e,r){const n=Rt(t,e,!1,G);Se(n)}function Gt(t,e,r){r=r?Object.assign({},ge,r):ge;const n=Rt(t,e,!0,0);return n.pending=J,n.observers=null,n.observerSlots=null,n.comparator=r.equals||void 0,Se(n),bt.bind(n)}function Zt(t){if(re)return t();let e;const r=re=[];try{e=t()}finally{re=null}return je(()=>{for(let n=0;n<r.length;n+=1){const s=r[n];if(s.pending!==J){const i=s.pending;s.pending=J,Ie(s,i)}}},!1),e}function Ue(t){let e,r=v;return v=null,e=t(),v=r,e}function er(t){return b===null||(b.cleanups===null?b.cleanups=[t]:b.cleanups.push(t)),t}function bt(){const t=ne;if(this.sources&&(this.state||t)){const e=R;R=null,this.state===G||t?Se(this):Ee(this),R=e}if(v){const e=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(e)):(v.sources=[this],v.sourceSlots=[e]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function Ie(t,e,r){if(re)return t.pending===J&&re.push(t),t.pending=e,e;if(t.comparator&&t.comparator(t.value,e))return e;let n=!1;return t.value=e,t.observers&&t.observers.length&&je(()=>{for(let s=0;s<t.observers.length;s+=1){const i=t.observers[s];n&&ne.disposed.has(i),(n&&!i.tState||!n&&!i.state)&&(i.pure?R.push(i):D.push(i),i.observers&&xt(i)),n||(i.state=G)}if(R.length>1e6)throw R=[],new Error},!1),e}function Se(t){if(!t.fn)return;Me(t);const e=b,r=v,n=Fe;v=b=t,tr(t,t.value,n),v=r,b=e}function tr(t,e,r){let n;try{n=t.fn(e)}catch(s){At(s)}(!t.updatedAt||t.updatedAt<=r)&&(t.observers&&t.observers.length?Ie(t,n):t.value=n,t.updatedAt=r)}function Rt(t,e,r,n=G,s){const i={fn:t,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:b,context:null,pure:r};return b===null||b!==Et&&(b.owned?b.owned.push(i):b.owned=[i]),i}function St(t){const e=ne;if(t.state===0||e)return;if(t.state===we||e)return Ee(t);if(t.suspense&&Ue(t.suspense.inFallback))return t.suspense.effects.push(t);const r=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<Fe);)(t.state||e)&&r.push(t);for(let n=r.length-1;n>=0;n--)if(t=r[n],t.state===G||e)Se(t);else if(t.state===we||e){const s=R;R=null,Ee(t,r[0]),R=s}}function je(t,e){if(R)return t();let r=!1;e||(R=[]),D?r=!0:D=[],Fe++;try{const n=t();return rr(r),n}catch(n){At(n)}finally{R=null,r||(D=null)}}function rr(t){R&&($t(R),R=null),!t&&(D.length?Zt(()=>{Yt(D),D=null}):D=null)}function $t(t){for(let e=0;e<t.length;e++)St(t[e])}function Ee(t,e){const r=ne;t.state=0;for(let n=0;n<t.sources.length;n+=1){const s=t.sources[n];s.sources&&(s.state===G||r?s!==e&&St(s):(s.state===we||r)&&Ee(s,e))}}function xt(t){const e=ne;for(let r=0;r<t.observers.length;r+=1){const n=t.observers[r];(!n.state||e)&&(n.state=we,n.pure?R.push(n):D.push(n),n.observers&&xt(n))}}function Me(t){let e;if(t.sources)for(;t.sources.length;){const r=t.sources.pop(),n=t.sourceSlots.pop(),s=r.observers;if(s&&s.length){const i=s.pop(),o=r.observerSlots.pop();n<s.length&&(i.sourceSlots[o]=n,s[n]=i,r.observerSlots[n]=o)}}if(t.owned){for(e=0;e<t.owned.length;e++)Me(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function At(t){throw t}const nr=Symbol("fallback");function ot(t){for(let e=0;e<t.length;e++)t[e]()}function sr(t,e,r={}){let n=[],s=[],i=[],o=0,u=e.length>1?[]:null;return er(()=>ot(i)),()=>{let l=t()||[],f,a;return l[Qt],Ue(()=>{let d=l.length,p,O,B,L,E,g,m,x,_;if(d===0)o!==0&&(ot(i),i=[],n=[],s=[],o=0,u&&(u=[])),r.fallback&&(n=[nr],s[0]=ve(Xt=>(i[0]=Xt,r.fallback())),o=1);else if(o===0){for(s=new Array(d),a=0;a<d;a++)n[a]=l[a],s[a]=ve(c);o=d}else{for(B=new Array(d),L=new Array(d),u&&(E=new Array(d)),g=0,m=Math.min(o,d);g<m&&n[g]===l[g];g++);for(m=o-1,x=d-1;m>=g&&x>=g&&n[m]===l[x];m--,x--)B[x]=s[m],L[x]=i[m],u&&(E[x]=u[m]);for(p=new Map,O=new Array(x+1),a=x;a>=g;a--)_=l[a],f=p.get(_),O[a]=f===void 0?-1:f,p.set(_,a);for(f=g;f<=m;f++)_=n[f],a=p.get(_),a!==void 0&&a!==-1?(B[a]=s[f],L[a]=i[f],u&&(E[a]=u[f]),a=O[a],p.set(_,a)):i[f]();for(a=g;a<d;a++)a in B?(s[a]=B[a],i[a]=L[a],u&&(u[a]=E[a],u[a](a))):s[a]=ve(c);s=s.slice(0,o=d),n=l.slice(0)}return s});function c(d){if(i[a]=d,u){const[p,O]=qe(a);return u[a]=O,e(l[a],p)}return e(l[a])}}}function P(t,e){return Ue(()=>t(e||{}))}function ke(t){const e="fallback"in t&&{fallback:()=>t.fallback};return Gt(sr(()=>t.each,t.children,e||void 0))}function ir(t,e,r){let n=r.length,s=e.length,i=n,o=0,u=0,l=e[s-1].nextSibling,f=null;for(;o<s||u<i;){if(e[o]===r[u]){o++,u++;continue}for(;e[s-1]===r[i-1];)s--,i--;if(s===o){const a=i<n?u?r[u-1].nextSibling:r[i-u]:l;for(;u<i;)t.insertBefore(r[u++],a)}else if(i===u)for(;o<s;)(!f||!f.has(e[o]))&&e[o].remove(),o++;else if(e[o]===r[i-1]&&r[u]===e[s-1]){const a=e[--s].nextSibling;t.insertBefore(r[u++],e[o++].nextSibling),t.insertBefore(r[--i],a),e[s]=r[i]}else{if(!f){f=new Map;let c=u;for(;c<i;)f.set(r[c],c++)}const a=f.get(e[o]);if(a!=null)if(u<a&&a<i){let c=o,d=1,p;for(;++c<s&&c<i&&!((p=f.get(e[c]))==null||p!==a+d);)d++;if(d>a-u){const O=e[o];for(;u<a;)t.insertBefore(r[u++],O)}else t.replaceChild(r[u++],e[o++])}else o++;else e[o++].remove()}}}function or(t,e,r){let n;return ve(s=>{n=s,e===document?t():j(e,t(),e.firstChild?null:void 0,r)}),()=>{n(),e.textContent=""}}function se(t,e,r){const n=document.createElement("template");n.innerHTML=t;let s=n.content.firstChild;return r&&(s=s.firstChild),s}function X(t,e){e==null?t.removeAttribute("class"):t.className=e}function We(t,e,r={}){const n=t.style,s=typeof r=="string";if(e==null&&s||typeof e=="string")return n.cssText=e;s&&(n.cssText=void 0,r={}),e||(e={});let i,o;for(o in r)e[o]==null&&n.removeProperty(o),delete r[o];for(o in e)i=e[o],i!==r[o]&&(n.setProperty(o,i),r[o]=i);return r}function j(t,e,r,n){if(r!==void 0&&!n&&(n=[]),typeof e!="function")return be(t,e,n,r);I(s=>be(t,e(),s,r),n)}function be(t,e,r,n,s){for(ee.context&&!r&&(r=[...t.childNodes]);typeof r=="function";)r=r();if(e===r)return r;const i=typeof e,o=n!==void 0;if(t=o&&r[0]&&r[0].parentNode||t,i==="string"||i==="number"){if(ee.context)return r;if(i==="number"&&(e=e.toString()),o){let u=r[0];u&&u.nodeType===3?u.data=e:u=document.createTextNode(e),r=W(t,r,n,u)}else r!==""&&typeof r=="string"?r=t.firstChild.data=e:r=t.textContent=e}else if(e==null||i==="boolean"){if(ee.context)return r;r=W(t,r,n)}else{if(i==="function")return I(()=>{let u=e();for(;typeof u=="function";)u=u();r=be(t,u,r,n)}),()=>r;if(Array.isArray(e)){const u=[];if(Te(u,e,s))return I(()=>r=be(t,u,r,n,!0)),()=>r;if(ee.context){for(let l=0;l<u.length;l++)if(u[l].parentNode)return r=u}if(u.length===0){if(r=W(t,r,n),o)return r}else Array.isArray(r)?r.length===0?at(t,u,n):ir(t,r,u):(r&&W(t),at(t,u));r=u}else if(e instanceof Node){if(ee.context&&e.parentNode)return r=o?[e]:e;if(Array.isArray(r)){if(o)return r=W(t,r,n,e);W(t,r,null,e)}else r==null||r===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);r=e}}return r}function Te(t,e,r){let n=!1;for(let s=0,i=e.length;s<i;s++){let o=e[s],u;if(o instanceof Node)t.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))n=Te(t,o)||n;else if((u=typeof o)=="string")t.push(document.createTextNode(o));else if(u==="function")if(r){for(;typeof o=="function";)o=o();n=Te(t,Array.isArray(o)?o:[o])||n}else t.push(o),n=!0;else t.push(document.createTextNode(o.toString()))}return n}function at(t,e,r){for(let n=0,s=e.length;n<s;n++)t.insertBefore(e[n],r)}function W(t,e,r,n){if(r===void 0)return t.textContent="";const s=n||document.createTextNode("");if(e.length){let i=!1;for(let o=e.length-1;o>=0;o--){const u=e[o];if(s!==u){const l=u.parentNode===t;!i&&!o?l?t.replaceChild(s,u):t.insertBefore(s,r):l&&u.remove()}else i=!0}}else t.insertBefore(s,r);return[s]}var Ot={exports:{}},_t=function(e,r){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(r,s)}},ar=_t,He=Object.prototype.toString,Ve=function(t){return function(e){var r=He.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function M(t){return t=t.toLowerCase(),function(r){return Ve(r)===t}}function Je(t){return Array.isArray(t)}function Re(t){return typeof t>"u"}function ur(t){return t!==null&&!Re(t)&&t.constructor!==null&&!Re(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Ct=M("ArrayBuffer");function lr(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ct(t.buffer),e}function fr(t){return typeof t=="string"}function cr(t){return typeof t=="number"}function Pt(t){return t!==null&&typeof t=="object"}function me(t){if(Ve(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var dr=M("Date"),hr=M("File"),pr=M("Blob"),vr=M("FileList");function Xe(t){return He.call(t)==="[object Function]"}function mr(t){return Pt(t)&&Xe(t.pipe)}function yr(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||He.call(t)===e||Xe(t.toString)&&t.toString()===e)}var gr=M("URLSearchParams");function wr(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Er(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Ke(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),Je(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function De(){var t={};function e(s,i){me(t[i])&&me(s)?t[i]=De(t[i],s):me(s)?t[i]=De({},s):Je(s)?t[i]=s.slice():t[i]=s}for(var r=0,n=arguments.length;r<n;r++)Ke(arguments[r],e);return t}function br(t,e,r){return Ke(e,function(s,i){r&&typeof s=="function"?t[i]=ar(s,r):t[i]=s}),t}function Rr(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function Sr(t,e,r,n){t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function $r(t,e,r){var n,s,i,o={};e=e||{};do{for(n=Object.getOwnPropertyNames(t),s=n.length;s-- >0;)i=n[s],o[i]||(e[i]=t[i],o[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function xr(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var n=t.indexOf(e,r);return n!==-1&&n===r}function Ar(t){if(!t)return null;var e=t.length;if(Re(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var Or=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),w={isArray:Je,isArrayBuffer:Ct,isBuffer:ur,isFormData:yr,isArrayBufferView:lr,isString:fr,isNumber:cr,isObject:Pt,isPlainObject:me,isUndefined:Re,isDate:dr,isFile:hr,isBlob:pr,isFunction:Xe,isStream:mr,isURLSearchParams:gr,isStandardBrowserEnv:Er,forEach:Ke,merge:De,extend:br,trim:wr,stripBOM:Rr,inherits:Sr,toFlatObject:$r,kindOf:Ve,kindOfTest:M,endsWith:xr,toArray:Ar,isTypedArray:Or,isFileList:vr},H=w;function ut(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Nt=function(e,r,n){if(!r)return e;var s;if(n)s=n(r);else if(H.isURLSearchParams(r))s=r.toString();else{var i=[];H.forEach(r,function(l,f){l===null||typeof l>"u"||(H.isArray(l)?f=f+"[]":l=[l],H.forEach(l,function(c){H.isDate(c)?c=c.toISOString():H.isObject(c)&&(c=JSON.stringify(c)),i.push(ut(f)+"="+ut(c))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},_r=w;function $e(){this.handlers=[]}$e.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};$e.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};$e.prototype.forEach=function(e){_r.forEach(this.handlers,function(n){n!==null&&e(n)})};var Cr=$e,Pr=w,Nr=function(e,r){Pr.forEach(e,function(s,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(e[r]=s,delete e[i])})},Tt=w;function K(t,e,r,n,s){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}Tt.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Dt=K.prototype,Bt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Bt[t]={value:t}});Object.defineProperties(K,Bt);Object.defineProperty(Dt,"isAxiosError",{value:!0});K.from=function(t,e,r,n,s,i){var o=Object.create(Dt);return Tt.toFlatObject(t,o,function(l){return l!==Error.prototype}),K.call(o,t.message,e,r,n,s),o.name=t.name,i&&Object.assign(o,i),o};var Z=K,Lt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},A=w;function Tr(t,e){e=e||new FormData;var r=[];function n(i){return i===null?"":A.isDate(i)?i.toISOString():A.isArrayBuffer(i)||A.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function s(i,o){if(A.isPlainObject(i)||A.isArray(i)){if(r.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);r.push(i),A.forEach(i,function(l,f){if(!A.isUndefined(l)){var a=o?o+"."+f:f,c;if(l&&!o&&typeof l=="object"){if(A.endsWith(f,"{}"))l=JSON.stringify(l);else if(A.endsWith(f,"[]")&&(c=A.toArray(l))){c.forEach(function(d){!A.isUndefined(d)&&e.append(a,n(d))});return}}s(l,a)}}),r.pop()}else e.append(o,n(i))}return s(t),e}var Ft=Tr,_e=Z,Dr=function(e,r,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):r(new _e("Request failed with status code "+n.status,[_e.ERR_BAD_REQUEST,_e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},ie=w,Br=ie.isStandardBrowserEnv()?function(){return{write:function(r,n,s,i,o,u){var l=[];l.push(r+"="+encodeURIComponent(n)),ie.isNumber(s)&&l.push("expires="+new Date(s).toGMTString()),ie.isString(i)&&l.push("path="+i),ie.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Lr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Fr=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},qr=Lr,Ur=Fr,qt=function(e,r){return e&&!qr(r)?Ur(e,r):r},Ce=w,Ir=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],jr=function(e){var r={},n,s,i;return e&&Ce.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),n=Ce.trim(u.substr(0,i)).toLowerCase(),s=Ce.trim(u.substr(i+1)),n){if(r[n]&&Ir.indexOf(n)>=0)return;n==="set-cookie"?r[n]=(r[n]?r[n]:[]).concat([s]):r[n]=r[n]?r[n]+", "+s:s}}),r},lt=w,Mr=lt.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function s(i){var o=i;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(o){var u=lt.isString(o)?s(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),Be=Z,kr=w;function Ut(t){Be.call(this,t??"canceled",Be.ERR_CANCELED),this.name="CanceledError"}kr.inherits(Ut,Be,{__CANCEL__:!0});var xe=Ut,Wr=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""},te=w,Hr=Dr,Vr=Br,Jr=Nt,Xr=qt,Kr=jr,zr=Mr,Qr=Lt,N=Z,Yr=xe,Gr=Wr,ft=function(e){return new Promise(function(n,s){var i=e.data,o=e.headers,u=e.responseType,l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}te.isFormData(i)&&te.isStandardBrowserEnv()&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(c+":"+d)}var p=Xr(e.baseURL,e.url);a.open(e.method.toUpperCase(),Jr(p,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function O(){if(!!a){var E="getAllResponseHeaders"in a?Kr(a.getAllResponseHeaders()):null,g=!u||u==="text"||u==="json"?a.responseText:a.response,m={data:g,status:a.status,statusText:a.statusText,headers:E,config:e,request:a};Hr(function(_){n(_),f()},function(_){s(_),f()},m),a=null}}if("onloadend"in a?a.onloadend=O:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(O)},a.onabort=function(){!a||(s(new N("Request aborted",N.ECONNABORTED,e,a)),a=null)},a.onerror=function(){s(new N("Network Error",N.ERR_NETWORK,e,a,a)),a=null},a.ontimeout=function(){var g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",m=e.transitional||Qr;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),s(new N(g,m.clarifyTimeoutError?N.ETIMEDOUT:N.ECONNABORTED,e,a)),a=null},te.isStandardBrowserEnv()){var B=(e.withCredentials||zr(p))&&e.xsrfCookieName?Vr.read(e.xsrfCookieName):void 0;B&&(o[e.xsrfHeaderName]=B)}"setRequestHeader"in a&&te.forEach(o,function(g,m){typeof i>"u"&&m.toLowerCase()==="content-type"?delete o[m]:a.setRequestHeader(m,g)}),te.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),u&&u!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(E){!a||(s(!E||E&&E.type?new Yr:E),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),i||(i=null);var L=Gr(p);if(L&&["http","https","file"].indexOf(L)===-1){s(new N("Unsupported protocol "+L+":",N.ERR_BAD_REQUEST,e));return}a.send(i)})},Zr=null,y=w,ct=Nr,dt=Z,en=Lt,tn=Ft,rn={"Content-Type":"application/x-www-form-urlencoded"};function ht(t,e){!y.isUndefined(t)&&y.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function nn(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=ft),t}function sn(t,e,r){if(y.isString(t))try{return(e||JSON.parse)(t),y.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var Ae={transitional:en,adapter:nn(),transformRequest:[function(e,r){if(ct(r,"Accept"),ct(r,"Content-Type"),y.isFormData(e)||y.isArrayBuffer(e)||y.isBuffer(e)||y.isStream(e)||y.isFile(e)||y.isBlob(e))return e;if(y.isArrayBufferView(e))return e.buffer;if(y.isURLSearchParams(e))return ht(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n=y.isObject(e),s=r&&r["Content-Type"],i;if((i=y.isFileList(e))||n&&s==="multipart/form-data"){var o=this.env&&this.env.FormData;return tn(i?{"files[]":e}:e,o&&new o)}else if(n||s==="application/json")return ht(r,"application/json"),sn(e);return e}],transformResponse:[function(e){var r=this.transitional||Ae.transitional,n=r&&r.silentJSONParsing,s=r&&r.forcedJSONParsing,i=!n&&this.responseType==="json";if(i||s&&y.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?dt.from(o,dt.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};y.forEach(["delete","get","head"],function(e){Ae.headers[e]={}});y.forEach(["post","put","patch"],function(e){Ae.headers[e]=y.merge(rn)});var ze=Ae,on=w,an=ze,un=function(e,r,n){var s=this||an;return on.forEach(n,function(o){e=o.call(s,e,r)}),e},It=function(e){return!!(e&&e.__CANCEL__)},pt=w,Pe=un,ln=It,fn=ze,cn=xe;function Ne(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new cn}var dn=function(e){Ne(e),e.headers=e.headers||{},e.data=Pe.call(e,e.data,e.headers,e.transformRequest),e.headers=pt.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),pt.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var r=e.adapter||fn.adapter;return r(e).then(function(s){return Ne(e),s.data=Pe.call(e,s.data,s.headers,e.transformResponse),s},function(s){return ln(s)||(Ne(e),s&&s.response&&(s.response.data=Pe.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},$=w,jt=function(e,r){r=r||{};var n={};function s(a,c){return $.isPlainObject(a)&&$.isPlainObject(c)?$.merge(a,c):$.isPlainObject(c)?$.merge({},c):$.isArray(c)?c.slice():c}function i(a){if($.isUndefined(r[a])){if(!$.isUndefined(e[a]))return s(void 0,e[a])}else return s(e[a],r[a])}function o(a){if(!$.isUndefined(r[a]))return s(void 0,r[a])}function u(a){if($.isUndefined(r[a])){if(!$.isUndefined(e[a]))return s(void 0,e[a])}else return s(void 0,r[a])}function l(a){if(a in r)return s(e[a],r[a]);if(a in e)return s(void 0,e[a])}var f={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return $.forEach(Object.keys(e).concat(Object.keys(r)),function(c){var d=f[c]||i,p=d(c);$.isUndefined(p)&&d!==l||(n[c]=p)}),n},Mt={version:"0.27.2"},hn=Mt.version,F=Z,Qe={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Qe[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var vt={};Qe.transitional=function(e,r,n){function s(i,o){return"[Axios v"+hn+"] Transitional option '"+i+"'"+o+(n?". "+n:"")}return function(i,o,u){if(e===!1)throw new F(s(o," has been removed"+(r?" in "+r:"")),F.ERR_DEPRECATED);return r&&!vt[o]&&(vt[o]=!0,console.warn(s(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(i,o,u):!0}};function pn(t,e,r){if(typeof t!="object")throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(t),s=n.length;s-- >0;){var i=n[s],o=e[i];if(o){var u=t[i],l=u===void 0||o(u,i,t);if(l!==!0)throw new F("option "+i+" must be "+l,F.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new F("Unknown option "+i,F.ERR_BAD_OPTION)}}var vn={assertOptions:pn,validators:Qe},kt=w,mn=Nt,mt=Cr,yt=dn,Oe=jt,yn=qt,Wt=vn,V=Wt.validators;function z(t){this.defaults=t,this.interceptors={request:new mt,response:new mt}}z.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=Oe(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var n=r.transitional;n!==void 0&&Wt.assertOptions(n,{silentJSONParsing:V.transitional(V.boolean),forcedJSONParsing:V.transitional(V.boolean),clarifyTimeoutError:V.transitional(V.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(i=i&&p.synchronous,s.unshift(p.fulfilled,p.rejected))});var o=[];this.interceptors.response.forEach(function(p){o.push(p.fulfilled,p.rejected)});var u;if(!i){var l=[yt,void 0];for(Array.prototype.unshift.apply(l,s),l=l.concat(o),u=Promise.resolve(r);l.length;)u=u.then(l.shift(),l.shift());return u}for(var f=r;s.length;){var a=s.shift(),c=s.shift();try{f=a(f)}catch(d){c(d);break}}try{u=yt(f)}catch(d){return Promise.reject(d)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};z.prototype.getUri=function(e){e=Oe(this.defaults,e);var r=yn(e.baseURL,e.url);return mn(r,e.params,e.paramsSerializer)};kt.forEach(["delete","get","head","options"],function(e){z.prototype[e]=function(r,n){return this.request(Oe(n||{},{method:e,url:r,data:(n||{}).data}))}});kt.forEach(["post","put","patch"],function(e){function r(n){return function(i,o,u){return this.request(Oe(u||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}z.prototype[e]=r(),z.prototype[e+"Form"]=r(!0)});var gn=z,wn=xe;function Q(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var r=this;this.promise.then(function(n){if(!!r._listeners){var s,i=r._listeners.length;for(s=0;s<i;s++)r._listeners[s](n);r._listeners=null}}),this.promise.then=function(n){var s,i=new Promise(function(o){r.subscribe(o),s=o}).then(n);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s){r.reason||(r.reason=new wn(s),e(r.reason))})}Q.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Q.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};Q.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};Q.source=function(){var e,r=new Q(function(s){e=s});return{token:r,cancel:e}};var En=Q,bn=function(e){return function(n){return e.apply(null,n)}},Rn=w,Sn=function(e){return Rn.isObject(e)&&e.isAxiosError===!0},gt=w,$n=_t,ye=gn,xn=jt,An=ze;function Ht(t){var e=new ye(t),r=$n(ye.prototype.request,e);return gt.extend(r,ye.prototype,e),gt.extend(r,e),r.create=function(s){return Ht(xn(t,s))},r}var S=Ht(An);S.Axios=ye;S.CanceledError=xe;S.CancelToken=En;S.isCancel=It;S.VERSION=Mt.version;S.toFormData=Ft;S.AxiosError=Z;S.Cancel=S.CanceledError;S.all=function(e){return Promise.all(e)};S.spread=bn;S.isAxiosError=Sn;Ot.exports=S;Ot.exports.default=S;class T{constructor(e,r){this.x=e,this.y=r}add=e=>new T(this.x+e.x,this.y+e.y);equals=e=>this.x==e.x&&this.y==e.y}class h{color="#FFFFFF";constructor(e,r,n){this.relative=new T(e,r),this.color=n}getRelative=()=>this.relative;getColor=()=>this.color}const On=t=>(_n(t),Cn(t),t),_n=t=>{for(let e=0;e<t.length;e++)for(let r=e;r<t[0].length;r++){let n=t[e][r];t[e][r]=t[r][e],t[r][e]=n}return t},Cn=t=>{for(let e=0;e<t.length;e++)t[e].reverse();return t},Pn=t=>{for(var e=[],r=0;r<t;r++){e[r]=[];for(var n=0;n<t;n++)e[r][n]=null}return{fillWithData:s=>(s.forEach(i=>e[i.getRelative().x-1][i.getRelative().y-1]=i),e)}},Nn=t=>{let e=[],r=null;for(let n=0;n<t.length;n++)for(let s=0;s<t[n].length;s++)(r=t[n][s])&&e.push(new h(n+1,s+1,r?.getColor()));return e},Tn=(t,e)=>Nn(On(Pn(t).fillWithData(e)));class k{dimension=3;position=new T(3,0);body=[];constructor(e){e&&(this.dimension=e.getDimension(),this.position=new T(e.getPos().x,e.getPos().y),this.body=e.render())}moveBottom=e=>this.copyWith(this,r=>{for(let n=e.bounds().top;n<=e.bounds().bottom+3;n++)if(!r.fitsInHeight(e,n))return r.setYPos(n-1),r;return r});moveDown=()=>this.copyWith(this,e=>(e.setYPos(e.getPos().y+1),e));moveLeft=()=>this.copyWith(this,e=>(e.setXPos(e.getPos().x-1),e));moveRight=()=>this.copyWith(this,e=>(e.setXPos(e.getPos().x+1),e));rotate=()=>this.copyWith(this,e=>(e.setBody(Tn(e.getDimension(),e.render())),e));getPos=()=>this.position;getDimension=()=>this.dimension;render=()=>this.body;setYPos=e=>this.position=new T(this.getPos().x,e);setXPos=e=>this.position=new T(e,this.getPos().y);fitsIn=e=>!this.body.some(r=>!e.inBounds(this.getPos().add(r.getRelative())))&&!this.body.some(r=>e.onSquare(r.getRelative().add(this.getPos())));fitsInHeight=(e,r)=>!this.body.some(n=>!e.inBounds(new T(this.getPos().x,r).add(n.getRelative())))&&!this.body.some(n=>e.onSquare(n.getRelative().add(new T(this.getPos().x,r))));setBody=e=>this.body=e;setDimension=e=>this.dimension=e}const oe="#FFFFFF";class Ye extends k{constructor(e){super(e),e||this.setBody([new h(1,2,oe),new h(2,2,oe),new h(3,2,oe),new h(3,3,oe)])}copyWith=(e,r)=>r(new Ye(e))}const ae="#FFFF00";class Ge extends k{constructor(e){super(e),e||this.setBody([new h(1,2,ae),new h(2,2,ae),new h(3,2,ae),new h(3,1,ae)])}copyWith=(e,r)=>r(new Ge(e))}const ue="#0000FF";class Ze extends k{constructor(e){super(e),e||(this.setBody([new h(1,1,ue),new h(1,2,ue),new h(2,1,ue),new h(2,2,ue)]),this.setDimension(2))}copyWith=(e,r)=>r(new Ze(e))}const le="#00FFFF";class et extends k{constructor(e){super(e),e||this.setBody([new h(3,1,le),new h(2,1,le),new h(2,2,le),new h(1,2,le)])}copyWith=(e,r)=>r(new et(e))}const fe="#00FF00";class tt extends k{constructor(e){super(e),e||(this.setBody([new h(1,2,fe),new h(2,2,fe),new h(3,2,fe),new h(4,2,fe)]),this.setDimension(4))}copyWith=(e,r)=>r(new tt(e))}const ce="#FF0000";class rt extends k{constructor(e){super(e),e||this.setBody([new h(2,2,ce),new h(3,3,ce),new h(3,2,ce),new h(3,1,ce)])}copyWith=(e,r)=>r(new rt(e))}const de="#FF00FF";class nt extends k{constructor(e){super(e),e||this.setBody([new h(1,1,de),new h(2,1,de),new h(2,2,de),new h(3,2,de)])}copyWith=(e,r)=>r(new nt(e))}const st=()=>{switch(Math.floor(Math.random()*10)){case 2:return new Ze;case 3:return new et;case 4:return new nt;case 5:return new tt;case 6:return new rt;case 7:return new Ye;case 8:return new Ge;default:return st()}},wt=38.3,C={top:0,bottom:22,left:0,right:10};class Vt{squares=[];constructor(e){e&&(this.squares=e.getSquares())}collapseLines=e=>(e.reverse().forEach(r=>{let n=this.squares.filter(s=>s.getRelative().y<r);this.squares=this.squares.filter(s=>s.getRelative().y>r),n.map(s=>new h(s.getRelative().x,s.getRelative().y+1,s.getColor())).forEach(s=>this.squares.push(s))}),this);checkLines=()=>{let e=[];for(let r=C.bottom;r>=C.top;r--)this.squares.filter(n=>n.getRelative().y==r).length==C.right&&(this.squares=this.squares.filter(n=>n.getRelative().y!=r),e.push(r));return e};addSquares=e=>(e.render().forEach(r=>{let n=e.getPos().add(r.getRelative());this.squares.push(new h(n.x,n.y,r.getColor()))}),this);inBounds=e=>e.x>C.left&&e.x<=C.right&&e.y>=C.top&&e.y<=C.bottom;onSquare=e=>this.squares.some(r=>r.getRelative().equals(e));getWidth=()=>C.right*wt;getHeight=()=>C.bottom*wt;bounds=()=>C;getSquares=()=>this.squares}const Dn="_BoardView_1ch90_1",Bn="_Board_1ch90_1",Ln="_Debris_1ch90_37",Fn="_Shape_1ch90_53",qn="_Square_1ch90_69";var Y={BoardView:Dn,Board:Bn,Debris:Ln,Shape:Fn,Square:qn};const Un=se("<div></div>");function it(t){return(()=>{const e=Un.cloneNode(!0);return I(r=>{const n=t.square.getRelative().x,s=t.square.getRelative().y,i=t.color||t.square.getColor(),o=Y.Square;return n!==r._v$&&e.style.setProperty("grid-column",r._v$=n),s!==r._v$2&&e.style.setProperty("grid-row",r._v$2=s),i!==r._v$3&&e.style.setProperty("background-color",r._v$3=i),o!==r._v$4&&X(e,r._v$4=o),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})()}const In=se("<div></div>"),jn=t=>({width:`${t.getWidth()}px`,height:`${t.getHeight()}px`,"grid-template-columns":`repeat(${t.bounds().right}, 1fr)`,"grid-template-rows":`repeat(${t.bounds().bottom}, 1fr)`});function Mn(t){return(()=>{const e=In.cloneNode(!0);return j(e,P(ke,{get each(){return t.board.getSquares()},children:r=>P(it,{color:void 0,square:r})})),I(r=>{const n=Y.Debris,s=jn(t.board);return n!==r._v$&&X(e,r._v$=n),r._v$2=We(e,s,r._v$2),r},{_v$:void 0,_v$2:void 0}),e})()}const kn=se("<div></div>"),he=38.3,Wn=4,Hn="rgba(255, 255, 255, 0.5)",Vn=(t,e)=>{for(let r=t.bounds().top;r<=t.bounds().bottom;r++)if(!e.fitsInHeight(t,r))return r-1;return 0},Jn=(t,e)=>({width:`${e.getDimension()*he}px`,height:`${e.getDimension()*he}px`,"grid-template-columns":`repeat(${e.getDimension()}, 1fr)`,"grid-template-rows":`repeat(${e.getDimension()}, 1fr)`,left:`${Wn+e.getPos().x*he}px`,top:`${Vn(t,e)*he}px`});function Xn(t){return(()=>{const e=kn.cloneNode(!0);return j(e,P(ke,{get each(){return t.shape.render()},children:r=>P(it,{color:Hn,square:r})})),I(r=>{const n=Y.Shape,s=Jn(t.board,t.shape);return n!==r._v$&&X(e,r._v$=n),r._v$2=We(e,s,r._v$2),r},{_v$:void 0,_v$2:void 0}),e})()}const Kn=se("<div></div>"),pe=38.3,zn=4,Qn=t=>({width:`${t.getDimension()*pe}px`,height:`${t.getDimension()*pe}px`,"grid-template-columns":`repeat(${t.getDimension()}, 1fr)`,"grid-template-rows":`repeat(${t.getDimension()}, 1fr)`,left:`${zn+t.getPos().x*pe}px`,top:`${t.getPos().y*pe}px`});function Yn(t){return(()=>{const e=Kn.cloneNode(!0);return j(e,P(ke,{get each(){return t.shape.render()},children:r=>P(it,{color:void 0,square:r})})),I(r=>{const n=Y.Shape,s=Qn(t.shape);return n!==r._v$&&X(e,r._v$=n),r._v$2=We(e,s,r._v$2),r},{_v$:void 0,_v$2:void 0}),e})()}const Gn=se("<div><div></div></div>"),[q,Le]=qe(st()),[U,Zn]=qe(new Vt),es=500,ts=()=>{let t=Jt("s");if(t?.fitsIn(U()))Le(t);else{let e=new Vt(U()).addSquares(q());Zn(e.collapseLines(e.checkLines())),Le(st())}},Jt=t=>{switch(t){case"a":return q().moveLeft();case"d":return q().moveRight();case"w":return q().rotate();case"s":return q().moveDown();case" ":return q().moveBottom(U());default:return null}},rs=t=>{let e=Jt(t.key);e?.fitsIn(U())&&Le(e)},ns=()=>{document.addEventListener("keypress",rs,!1),setInterval(ts,es)},ss=()=>(ns(),(()=>{const t=Gn.cloneNode(!0),e=t.firstChild;return j(e,P(Xn,{get board(){return U()},get shape(){return q()}}),null),j(e,P(Yn,{get shape(){return q()}}),null),j(e,P(Mn,{get board(){return U()}}),null),I(r=>{const n=Y.BoardView,s=Y.Board,i=`${U().getWidth()}px`,o=`${U().getHeight()}px`;return n!==r._v$&&X(t,r._v$=n),s!==r._v$2&&X(e,r._v$2=s),i!==r._v$3&&e.style.setProperty("width",r._v$3=i),o!==r._v$4&&e.style.setProperty("height",r._v$4=o),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})());or(()=>P(ss,{}),document.getElementById("root"));