const Ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Ie();const T={},Te=(t,e)=>t===e,We=Symbol("solid-track"),ee={equals:Te};let Me=Fe;const D={},O=1,te=2,Ae={owned:null,cleanups:null,context:null,owner:null};var g=null;let M=null,d=null,W=null,w=null,_=null,le=0;function z(t,e){const n=d,s=g,i=t.length===0?Ae:{owned:null,cleanups:null,context:null,owner:e||s};g=i,d=null;try{return de(()=>t(()=>ae(i)),!0)}finally{d=n,g=s}}function ue(t,e){e=e?Object.assign({},ee,e):ee;const n={value:t,observers:null,observerSlots:null,pending:D,comparator:e.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==D?n.pending:n.value)),fe(n,i));return[Be.bind(n),s]}function A(t,e,n){const s=Pe(t,e,!1,O);ie(s)}function ke(t,e,n){n=n?Object.assign({},ee,n):ee;const s=Pe(t,e,!0,0);return s.pending=D,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,ie(s),Be.bind(s)}function Ue(t){if(W)return t();let e;const n=W=[];try{e=t()}finally{W=null}return de(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==D){const o=i.pending;i.pending=D,fe(i,o)}}},!1),e}function ce(t){let e,n=d;return d=null,e=t(),d=n,e}function He(t){return g===null||(g.cleanups===null?g.cleanups=[t]:g.cleanups.push(t)),t}function Be(){const t=M;if(this.sources&&(this.state||t)){const e=w;w=null,this.state===O||t?ie(this):ne(this),w=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function fe(t,e,n){if(W)return t.pending===D&&W.push(t),t.pending=e,e;if(t.comparator&&t.comparator(t.value,e))return e;let s=!1;return t.value=e,t.observers&&t.observers.length&&de(()=>{for(let i=0;i<t.observers.length;i+=1){const o=t.observers[i];s&&M.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?w.push(o):_.push(o),o.observers&&Re(o)),s||(o.state=O)}if(w.length>1e6)throw w=[],new Error},!1),e}function ie(t){if(!t.fn)return;ae(t);const e=g,n=d,s=le;d=g=t,Ke(t,t.value,s),d=n,g=e}function Ke(t,e,n){let s;try{s=t.fn(e)}catch(i){De(i)}(!t.updatedAt||t.updatedAt<=n)&&(t.observers&&t.observers.length?fe(t,s):t.value=s,t.updatedAt=n)}function Pe(t,e,n,s=O,i){const o={fn:t,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:g,context:null,pure:n};return g===null||g!==Ae&&(g.owned?g.owned.push(o):g.owned=[o]),o}function Ee(t){const e=M;if(t.state===0||e)return;if(t.state===te||e)return ne(t);if(t.suspense&&ce(t.suspense.inFallback))return t.suspense.effects.push(t);const n=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<le);)(t.state||e)&&n.push(t);for(let s=n.length-1;s>=0;s--)if(t=n[s],t.state===O||e)ie(t);else if(t.state===te||e){const i=w;w=null,ne(t,n[0]),w=i}}function de(t,e){if(w)return t();let n=!1;e||(w=[]),_?n=!0:_=[],le++;try{const s=t();return Ve(n),s}catch(s){De(s)}finally{w=null,n||(_=null)}}function Ve(t){w&&(Fe(w),w=null),!t&&(_.length?Ue(()=>{Me(_),_=null}):_=null)}function Fe(t){for(let e=0;e<t.length;e++)Ee(t[e])}function ne(t,e){const n=M;t.state=0;for(let s=0;s<t.sources.length;s+=1){const i=t.sources[s];i.sources&&(i.state===O||n?i!==e&&Ee(i):(i.state===te||n)&&ne(i,e))}}function Re(t){const e=M;for(let n=0;n<t.observers.length;n+=1){const s=t.observers[n];(!s.state||e)&&(s.state=te,s.pure?w.push(s):_.push(s),s.observers&&Re(s))}}function ae(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),s=t.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),r=n.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,n.observerSlots[s]=r)}}if(t.owned){for(e=0;e<t.owned.length;e++)ae(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function De(t){throw t}const je=Symbol("fallback");function _e(t){for(let e=0;e<t.length;e++)t[e]()}function Ge(t,e,n={}){let s=[],i=[],o=[],r=0,l=e.length>1?[]:null;return He(()=>_e(o)),()=>{let a=t()||[],f,u;return a[We],ce(()=>{let h=a.length,v,B,I,U,H,p,m,S,F;if(h===0)r!==0&&(_e(o),o=[],s=[],i=[],r=0,l&&(l=[])),n.fallback&&(s=[je],i[0]=z(Oe=>(o[0]=Oe,n.fallback())),r=1);else if(r===0){for(i=new Array(h),u=0;u<h;u++)s[u]=a[u],i[u]=z(y);r=h}else{for(I=new Array(h),U=new Array(h),l&&(H=new Array(h)),p=0,m=Math.min(r,h);p<m&&s[p]===a[p];p++);for(m=r-1,S=h-1;m>=p&&S>=p&&s[m]===a[S];m--,S--)I[S]=i[m],U[S]=o[m],l&&(H[S]=l[m]);for(v=new Map,B=new Array(S+1),u=S;u>=p;u--)F=a[u],f=v.get(F),B[u]=f===void 0?-1:f,v.set(F,u);for(f=p;f<=m;f++)F=s[f],u=v.get(F),u!==void 0&&u!==-1?(I[u]=i[f],U[u]=o[f],l&&(H[u]=l[f]),u=B[u],v.set(F,u)):o[f]();for(u=p;u<h;u++)u in I?(i[u]=I[u],o[u]=U[u],l&&(l[u]=H[u],l[u](u))):i[u]=z(y);i=i.slice(0,r=h),s=a.slice(0)}return i});function y(h){if(o[u]=h,l){const[v,B]=ue(u);return l[u]=B,e(a[u],v)}return e(a[u])}}}function b(t,e){return ce(()=>t(e||{}))}function he(t){const e="fallback"in t&&{fallback:()=>t.fallback};return ke(Ge(()=>t.each,t.children,e||void 0))}function Qe(t,e,n){let s=n.length,i=e.length,o=s,r=0,l=0,a=e[i-1].nextSibling,f=null;for(;r<i||l<o;){if(e[r]===n[l]){r++,l++;continue}for(;e[i-1]===n[o-1];)i--,o--;if(i===r){const u=o<s?l?n[l-1].nextSibling:n[o-l]:a;for(;l<o;)t.insertBefore(n[l++],u)}else if(o===l)for(;r<i;)(!f||!f.has(e[r]))&&e[r].remove(),r++;else if(e[r]===n[o-1]&&n[l]===e[i-1]){const u=e[--i].nextSibling;t.insertBefore(n[l++],e[r++].nextSibling),t.insertBefore(n[--o],u),e[i]=n[o]}else{if(!f){f=new Map;let y=l;for(;y<o;)f.set(n[y],y++)}const u=f.get(e[r]);if(u!=null)if(l<u&&u<o){let y=r,h=1,v;for(;++y<i&&y<o&&!((v=f.get(e[y]))==null||v!==u+h);)h++;if(h>u-l){const B=e[r];for(;l<u;)t.insertBefore(n[l++],B)}else t.replaceChild(n[l++],e[r++])}else r++;else e[r++].remove()}}}function Ye(t,e,n){let s;return z(i=>{s=i,e===document?t():P(e,t(),e.firstChild?null:void 0,n)}),()=>{s(),e.textContent=""}}function k(t,e,n){const s=document.createElement("template");s.innerHTML=t;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function N(t,e){e==null?t.removeAttribute("class"):t.className=e}function ge(t,e,n={}){const s=t.style,i=typeof n=="string";if(e==null&&i||typeof e=="string")return s.cssText=e;i&&(s.cssText=void 0,n={}),e||(e={});let o,r;for(r in n)e[r]==null&&s.removeProperty(r),delete n[r];for(r in e)o=e[r],o!==n[r]&&(s.setProperty(r,o),n[r]=o);return n}function P(t,e,n,s){if(n!==void 0&&!s&&(s=[]),typeof e!="function")return se(t,e,s,n);A(i=>se(t,e(),i,n),s)}function se(t,e,n,s,i){for(T.context&&!n&&(n=[...t.childNodes]);typeof n=="function";)n=n();if(e===n)return n;const o=typeof e,r=s!==void 0;if(t=r&&n[0]&&n[0].parentNode||t,o==="string"||o==="number"){if(T.context)return n;if(o==="number"&&(e=e.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=e:l=document.createTextNode(e),n=R(t,n,s,l)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||o==="boolean"){if(T.context)return n;n=R(t,n,s)}else{if(o==="function")return A(()=>{let l=e();for(;typeof l=="function";)l=l();n=se(t,l,n,s)}),()=>n;if(Array.isArray(e)){const l=[];if(oe(l,e,i))return A(()=>n=se(t,l,n,s,!0)),()=>n;if(T.context){for(let a=0;a<l.length;a++)if(l[a].parentNode)return n=l}if(l.length===0){if(n=R(t,n,s),r)return n}else Array.isArray(n)?n.length===0?qe(t,l,s):Qe(t,n,l):(n&&R(t),qe(t,l));n=l}else if(e instanceof Node){if(T.context&&e.parentNode)return n=r?[e]:e;if(Array.isArray(n)){if(r)return n=R(t,n,s,e);R(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function oe(t,e,n){let s=!1;for(let i=0,o=e.length;i<o;i++){let r=e[i],l;if(r instanceof Node)t.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=oe(t,r)||s;else if((l=typeof r)=="string")t.push(document.createTextNode(r));else if(l==="function")if(n){for(;typeof r=="function";)r=r();s=oe(t,Array.isArray(r)?r:[r])||s}else t.push(r),s=!0;else t.push(document.createTextNode(r.toString()))}return s}function qe(t,e,n){for(let s=0,i=e.length;s<i;s++)t.insertBefore(e[s],n)}function R(t,e,n,s){if(n===void 0)return t.textContent="";const i=s||document.createTextNode("");if(e.length){let o=!1;for(let r=e.length-1;r>=0;r--){const l=e[r];if(i!==l){const a=l.parentNode===t;!o&&!r?a?t.replaceChild(i,l):t.insertBefore(i,n):a&&l.remove()}else o=!0}}else t.insertBefore(i,n);return[i]}class x{constructor(e,n){this.x=e,this.y=n}add=e=>new x(this.x+e.x,this.y+e.y);equals=e=>this.x==e.x&&this.y==e.y}class c{color="#FFFFFF";constructor(e,n,s){this.relative=new x(e,n),this.color=s}getRelative=()=>this.relative;getColor=()=>this.color}const Xe=t=>(Ze(t),Je(t),t),Ze=t=>{for(let e=0;e<t.length;e++)for(let n=e;n<t[0].length;n++){let s=t[e][n];t[e][n]=t[n][e],t[n][e]=s}return t},Je=t=>{for(let e=0;e<t.length;e++)t[e].reverse();return t},ze=t=>{for(var e=[],n=0;n<t;n++){e[n]=[];for(var s=0;s<t;s++)e[n][s]=null}return{fillWithData:i=>(i.forEach(o=>e[o.getRelative().x-1][o.getRelative().y-1]=o),e)}},et=t=>{let e=[],n=null;for(let s=0;s<t.length;s++)for(let i=0;i<t[s].length;i++)(n=t[s][i])&&e.push(new c(s+1,i+1,n?.getColor()));return e},tt=(t,e)=>et(Xe(ze(t).fillWithData(e)));class E{dimension=3;position=new x(3,0);body=[];constructor(e){e&&(this.dimension=e.getDimension(),this.position=new x(e.getPos().x,e.getPos().y),this.body=e.render())}moveBottom=e=>this.copyWith(this,n=>{for(let s=e.bounds().top;s<=e.bounds().bottom+3;s++)if(!n.fitsInHeight(e,s))return n.setYPos(s-1),n;return n});moveDown=()=>this.copyWith(this,e=>(e.setYPos(e.getPos().y+1),e));moveLeft=()=>this.copyWith(this,e=>(e.setXPos(e.getPos().x-1),e));moveRight=()=>this.copyWith(this,e=>(e.setXPos(e.getPos().x+1),e));rotate=()=>this.copyWith(this,e=>(e.setBody(tt(e.getDimension(),e.render())),e));getPos=()=>this.position;getDimension=()=>this.dimension;render=()=>this.body;setYPos=e=>this.position=new x(this.getPos().x,e);setXPos=e=>this.position=new x(e,this.getPos().y);fitsIn=e=>!this.body.some(n=>!e.inBounds(this.getPos().add(n.getRelative())))&&!this.body.some(n=>e.onSquare(n.getRelative().add(this.getPos())));fitsInHeight=(e,n)=>!this.body.some(s=>!e.inBounds(new x(this.getPos().x,n).add(s.getRelative())))&&!this.body.some(s=>e.onSquare(s.getRelative().add(new x(this.getPos().x,n))));setBody=e=>this.body=e;setDimension=e=>this.dimension=e}const K="#FFFFFF";class we extends E{constructor(e){super(e),e||this.setBody([new c(1,2,K),new c(2,2,K),new c(3,2,K),new c(3,3,K)])}copyWith=(e,n)=>n(new we(e))}const V="#FFFF00";class ye extends E{constructor(e){super(e),e||this.setBody([new c(1,2,V),new c(2,2,V),new c(3,2,V),new c(3,1,V)])}copyWith=(e,n)=>n(new ye(e))}const j="#0000FF";class ve extends E{constructor(e){super(e),e||(this.setBody([new c(1,1,j),new c(1,2,j),new c(2,1,j),new c(2,2,j)]),this.setDimension(2))}copyWith=(e,n)=>n(new ve(e))}const G="#00FFFF";class pe extends E{constructor(e){super(e),e||this.setBody([new c(3,1,G),new c(2,1,G),new c(2,2,G),new c(1,2,G)])}copyWith=(e,n)=>n(new pe(e))}const Q="#00FF00";class me extends E{constructor(e){super(e),e||(this.setBody([new c(1,2,Q),new c(2,2,Q),new c(3,2,Q),new c(4,2,Q)]),this.setDimension(4))}copyWith=(e,n)=>n(new me(e))}const Y="#FF0000";class $e extends E{constructor(e){super(e),e||this.setBody([new c(2,2,Y),new c(3,3,Y),new c(3,2,Y),new c(3,1,Y)])}copyWith=(e,n)=>n(new $e(e))}const X="#FF00FF";class be extends E{constructor(e){super(e),e||this.setBody([new c(1,1,X),new c(2,1,X),new c(2,2,X),new c(3,2,X)])}copyWith=(e,n)=>n(new be(e))}const Se=()=>{switch(Math.floor(Math.random()*10)){case 2:return new ve;case 3:return new pe;case 4:return new be;case 5:return new me;case 6:return new $e;case 7:return new we;case 8:return new ye;default:return Se()}},Ce=38.3,$={top:0,bottom:22,left:0,right:10};class Ne{squares=[];constructor(e){e&&(this.squares=e.getSquares())}collapseLines=e=>(e.reverse().forEach(n=>{let s=this.squares.filter(i=>i.getRelative().y<n);this.squares=this.squares.filter(i=>i.getRelative().y>n),s.map(i=>new c(i.getRelative().x,i.getRelative().y+1,i.getColor())).forEach(i=>this.squares.push(i))}),this);checkLines=()=>{let e=[];for(let n=$.bottom;n>=$.top;n--)this.squares.filter(s=>s.getRelative().y==n).length==$.right&&(this.squares=this.squares.filter(s=>s.getRelative().y!=n),e.push(n));return e};addSquares=e=>(e.render().forEach(n=>{let s=e.getPos().add(n.getRelative());this.squares.push(new c(s.x,s.y,n.getColor()))}),this);inBounds=e=>e.x>$.left&&e.x<=$.right&&e.y>=$.top&&e.y<=$.bottom;onSquare=e=>this.squares.some(n=>n.getRelative().equals(e));getWidth=()=>$.right*Ce;getHeight=()=>$.bottom*Ce;bounds=()=>$;getSquares=()=>this.squares}const nt="_BoardView_1ch90_1",st="_Board_1ch90_1",it="_Debris_1ch90_37",ot="_Shape_1ch90_53",rt="_Square_1ch90_69";var L={BoardView:nt,Board:st,Debris:it,Shape:ot,Square:rt};const lt=k("<div></div>");function xe(t){return(()=>{const e=lt.cloneNode(!0);return A(n=>{const s=t.square.getRelative().x,i=t.square.getRelative().y,o=t.color||t.square.getColor(),r=L.Square;return s!==n._v$&&e.style.setProperty("grid-column",n._v$=s),i!==n._v$2&&e.style.setProperty("grid-row",n._v$2=i),o!==n._v$3&&e.style.setProperty("background-color",n._v$3=o),r!==n._v$4&&N(e,n._v$4=r),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})()}const ut=k("<div></div>"),ct=t=>({width:`${t.getWidth()}px`,height:`${t.getHeight()}px`,"grid-template-columns":`repeat(${t.bounds().right}, 1fr)`,"grid-template-rows":`repeat(${t.bounds().bottom}, 1fr)`});function ft(t){return(()=>{const e=ut.cloneNode(!0);return P(e,b(he,{get each(){return t.board.getSquares()},children:n=>b(xe,{color:void 0,square:n})})),A(n=>{const s=L.Debris,i=ct(t.board);return s!==n._v$&&N(e,n._v$=s),n._v$2=ge(e,i,n._v$2),n},{_v$:void 0,_v$2:void 0}),e})()}const dt=k("<div></div>"),Z=38.3,at=4,ht="rgba(255, 255, 255, 0.5)",gt=(t,e)=>{for(let n=t.bounds().top;n<=t.bounds().bottom;n++)if(!e.fitsInHeight(t,n))return n-1;return 0},wt=(t,e)=>({width:`${e.getDimension()*Z}px`,height:`${e.getDimension()*Z}px`,"grid-template-columns":`repeat(${e.getDimension()}, 1fr)`,"grid-template-rows":`repeat(${e.getDimension()}, 1fr)`,left:`${at+e.getPos().x*Z}px`,top:`${gt(t,e)*Z}px`});function yt(t){return(()=>{const e=dt.cloneNode(!0);return P(e,b(he,{get each(){return t.shape.render()},children:n=>b(xe,{color:ht,square:n})})),A(n=>{const s=L.Shape,i=wt(t.board,t.shape);return s!==n._v$&&N(e,n._v$=s),n._v$2=ge(e,i,n._v$2),n},{_v$:void 0,_v$2:void 0}),e})()}const vt=k("<div></div>"),J=38.3,pt=4,mt=t=>({width:`${t.getDimension()*J}px`,height:`${t.getDimension()*J}px`,"grid-template-columns":`repeat(${t.getDimension()}, 1fr)`,"grid-template-rows":`repeat(${t.getDimension()}, 1fr)`,left:`${pt+t.getPos().x*J}px`,top:`${t.getPos().y*J}px`});function $t(t){return(()=>{const e=vt.cloneNode(!0);return P(e,b(he,{get each(){return t.shape.render()},children:n=>b(xe,{color:void 0,square:n})})),A(n=>{const s=L.Shape,i=mt(t.shape);return s!==n._v$&&N(e,n._v$=s),n._v$2=ge(e,i,n._v$2),n},{_v$:void 0,_v$2:void 0}),e})()}const bt=k("<div><div></div></div>"),[q,re]=ue(Se()),[C,St]=ue(new Ne),xt=500,_t=()=>{let t=Le("s");if(t?.fitsIn(C()))re(t);else{let e=new Ne(C()).addSquares(q());St(e.collapseLines(e.checkLines())),re(Se())}},Le=t=>{switch(t){case"a":return q().moveLeft();case"d":return q().moveRight();case"w":return q().rotate();case"s":return q().moveDown();case" ":return q().moveBottom(C());default:return null}},qt=t=>{let e=Le(t.key);e?.fitsIn(C())&&re(e)},Ct=()=>{document.addEventListener("keypress",qt,!1),setInterval(_t,xt)},At=()=>(Ct(),(()=>{const t=bt.cloneNode(!0),e=t.firstChild;return P(e,b(yt,{get board(){return C()},get shape(){return q()}}),null),P(e,b($t,{get shape(){return q()}}),null),P(e,b(ft,{get board(){return C()}}),null),A(n=>{const s=L.BoardView,i=L.Board,o=`${C().getWidth()}px`,r=`${C().getHeight()}px`;return s!==n._v$&&N(t,n._v$=s),i!==n._v$2&&N(e,n._v$2=i),o!==n._v$3&&e.style.setProperty("width",n._v$3=o),r!==n._v$4&&e.style.setProperty("height",n._v$4=r),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})());Ye(()=>b(At,{}),document.getElementById("root"));
