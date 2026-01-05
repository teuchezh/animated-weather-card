const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:r,defineProperty:o,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:l,getPrototypeOf:d}=Object,p=globalThis,u=p.trustedTypes,g=u?u.emptyScript:"",f=p.reactiveElementPolyfillSupport,w=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!r(t,e),v={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&o(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const a=i?.call(this);n?.call(this,e),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...c(t),...l(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i;const a=n.fromAttribute(e,t.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const a=this.constructor;if(!1===i&&(n=this[t]),s??=a.getPropertyOptions(t),!((s.hasChanged??y)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[w("elementProperties")]=new Map,$[w("finalized")]=new Map,f?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,b=t=>t,_=x.trustedTypes,S=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+C,E=`<${M}>`,P=document,k=()=>P.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,F="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,O=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,N=/"/g,W=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),L=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),B=new WeakMap,j=P.createTreeWalker(P,129);function q(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let n,a=2===e?"<svg>":3===e?"<math>":"",r=z;for(let e=0;e<s;e++){const s=t[e];let o,h,c=-1,l=0;for(;l<s.length&&(r.lastIndex=l,h=r.exec(s),null!==h);)l=r.lastIndex,r===z?"!--"===h[1]?r=H:void 0!==h[1]?r=R:void 0!==h[2]?(W.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=O):void 0!==h[3]&&(r=O):r===O?">"===h[0]?(r=n??z,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,o=h[1],r=void 0===h[3]?O:'"'===h[3]?N:U):r===N||r===U?r=O:r===H||r===R?r=z:(r=O,n=void 0);const d=r===O&&t[e+1].startsWith("/>")?" ":"";a+=r===z?s+E:c>=0?(i.push(o),s.slice(0,c)+A+s.slice(c)+C+d):s+C+(-2===c?e:d)}return[q(t,a+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,a=0;const r=t.length-1,o=this.parts,[h,c]=G(t,e);if(this.el=X.createElement(h,s),j.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=j.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(A)){const e=c[a++],s=i.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?Q:"?"===r[1]?tt:"@"===r[1]?et:Z}),i.removeAttribute(t)}else t.startsWith(C)&&(o.push({type:6,index:n}),i.removeAttribute(t));if(W.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=_?_.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],k()),j.nextNode(),o.push({type:2,index:++n});i.append(t[e],k())}}}else if(8===i.nodeType)if(i.data===M)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)o.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===L)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const a=D(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);j.currentNode=i;let n=j.nextNode(),a=0,r=0,o=s[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new K(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new st(n,this,t)),this._$AV.push(e),o=s[++r]}a!==o?.index&&(n=j.nextNode(),a++)}return j.currentNode=P,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),D(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(q(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new J(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new X(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new K(this.O(k()),this.O(k()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=b(t).nextSibling;b(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,i){const n=this.strings;let a=!1;if(void 0===n)t=Y(this,t,e,0),a=!D(t)||t!==this._$AH&&t!==L,a&&(this._$AH=t);else{const i=t;let r,o;for(t=n[0],r=0;r<n.length-1;r++)o=Y(this,i[s+r],e,r),o===L&&(o=this._$AH[r]),a||=!D(o)||o!==this._$AH[r],o===V?t=V:t!==V&&(t+=(o??"")+n[r+1]),this._$AH[r]=o}a&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class tt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class et extends Z{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??V)===L)return;const s=this._$AH,i=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const it=x.litHtmlPolyfillSupport;it?.(X,K),(x.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class at extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new K(e.insertBefore(k(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const rt=nt.litElementPolyfillSupport;rt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const ot={sunny:"☀️",clear:"☀️","clear-night":"🌙",partlycloudy:"⛅",cloudy:"☁️",rainy:"🌧️",pouring:"🌧️",lightning:"⚡","lightning-rainy":"⛈️",snowy:"❄️","snowy-rainy":"🌨️",foggy:"🌫️",hail:"🌨️",windy:"💨","windy-variant":"💨"},ht={sunny:"Солнечно",clear:"Ясно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь"},ct={"humidity-icon.svg":"💧","wind-icon.svg":"💨","wind-gust-icon.svg":"🌪️","wind-n.svg":"⬆️","wind-ne.svg":"↗️","wind-e.svg":"➡️","wind-se.svg":"↘️","wind-s.svg":"⬇️","wind-sw.svg":"↙️","wind-w.svg":"⬅️","wind-nw.svg":"↖️"},lt=["wind-n.svg","wind-ne.svg","wind-e.svg","wind-se.svg","wind-s.svg","wind-sw.svg","wind-w.svg","wind-nw.svg"],dt=360,pt=480,ut=1080,gt=1200,ft=null;function wt(t){return ct[t]||""}function mt(t){if(!t)return"";const e="string"==typeof t?new Date(t):t,s=e.getHours(),i=e.getMinutes();return`${s.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}function yt(t){if(!t||!t.attributes)return{sunrise:null,sunset:null,hasSunData:!1};const e=t.attributes;let s=null,i=null;return(e.forecast_sunrise||e.sunrise)&&(s=new Date(e.forecast_sunrise||e.sunrise)),(e.forecast_sunset||e.sunset)&&(i=new Date(e.forecast_sunset||e.sunset)),{sunrise:s,sunset:i,hasSunData:!(!s||!i)}}function vt(t){const e=new Date;if(t.hasSunData&&t.sunrise&&t.sunset){const s=e.getTime(),i=t.sunrise.getTime(),n=t.sunset.getTime(),a=i-36e5,r=i+36e5,o=n-36e5,h=n+36e5;if(s>=a&&s<r){return{type:"sunrise",progress:(s-a)/(r-a)}}if(s>=r&&s<o){return{type:"day",progress:(s-r)/(o-r)}}if(s>=o&&s<h){return{type:"sunset",progress:(s-o)/(h-o)}}return{type:"night",progress:0}}return function(){const t=new Date,e=60*t.getHours()+t.getMinutes();if(e>=dt&&e<pt)return{type:"sunrise",progress:(e-dt)/120};if(e>=pt&&e<ut)return{type:"day",progress:(e-pt)/600};if(e>=ut&&e<gt)return{type:"sunset",progress:(e-ut)/120};return{type:"night",progress:0}}()}class $t{constructor(t){this.ctx=t}drawCloud(t,e,s,i){const n=this.ctx.shadowBlur,a=this.ctx.shadowColor,r=this.ctx.globalAlpha;this.ctx.shadowBlur=.25*s,this.ctx.shadowColor=`rgba(255, 255, 255, ${.4*i})`,this.ctx.globalAlpha=.85*i,this.ctx.fillStyle="rgba(255, 255, 255, 1)";[{x:t,y:e,r:.4*s},{x:t+.35*s,y:e,r:.5*s},{x:t+.65*s,y:e,r:.48*s},{x:t+.92*s,y:e,r:.38*s},{x:t+.18*s,y:e-.28*s,r:.38*s},{x:t+.52*s,y:e-.32*s,r:.42*s},{x:t+.78*s,y:e-.28*s,r:.38*s},{x:t+.32*s,y:e-.42*s,r:.32*s},{x:t+.62*s,y:e-.48*s,r:.36*s},{x:t+.82*s,y:e-.42*s,r:.32*s}].forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.r,0,2*Math.PI),this.ctx.fill()}),this.ctx.shadowBlur=n,this.ctx.shadowColor=a,this.ctx.globalAlpha=r}drawClouds(t,e,s,i=.5){const n=Math.max(2,Math.floor(e/150*i));for(let i=0;i<n;i++){const n=(3*t+150*i)%(e+200)-100,a=s*(.2+i%3*.15)+8*Math.sin(.2*t+i),r=40+i%3*15,o=.6+i%2*.2;this.drawCloud(n,a,r,o)}}}class xt extends $t{draw(t,e,s){const i=.001*Date.now(),n=function(t,e,s){if("sunrise"===t.type){const i=t.progress;return{x:e*(.3+.4*i),y:s*(.85-.55*i)}}if("sunset"===t.type){const i=t.progress;return{x:e*(.5+.3*i),y:s*(.3+.55*i)}}if("day"===t.type){const i=t.progress*Math.PI;return{x:e*(.5+.25*Math.sin(i)),y:s*(.25-.1*Math.sin(i))}}return{x:.75*e,y:.3*s}}(t,e,s),a=n.x,r=n.y;"day"===t.type||"sunrise"===t.type||"sunset"===t.type?(this.drawSun(a,r,i),"sunrise"!==t.type&&"sunset"!==t.type||this.drawHorizonReflection(a,r,s,i)):"night"===t.type&&this.drawNightSky(e,s,i),this.drawClouds(i,e,s,.3)}drawSun(t,e,s){const i=48+1.5*Math.sin(.15*s),n=this.ctx.createRadialGradient(t,e,.3*i,t,e,3.5*i);n.addColorStop(0,"rgba(255, 248, 230, 0.25)"),n.addColorStop(.15,"rgba(255, 240, 200, 0.2)"),n.addColorStop(.3,"rgba(255, 230, 170, 0.15)"),n.addColorStop(.5,"rgba(255, 220, 140, 0.1)"),n.addColorStop(.7,"rgba(255, 210, 120, 0.06)"),n.addColorStop(.85,"rgba(255, 200, 100, 0.03)"),n.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=n,this.ctx.beginPath(),this.ctx.arc(t,e,3.5*i,0,2*Math.PI),this.ctx.fill();const a=this.ctx.createRadialGradient(t,e,.5*i,t,e,2.2*i);a.addColorStop(0,"rgba(255, 250, 220, 0.35)"),a.addColorStop(.3,"rgba(255, 240, 190, 0.25)"),a.addColorStop(.6,"rgba(255, 230, 160, 0.15)"),a.addColorStop(.85,"rgba(255, 220, 140, 0.08)"),a.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(t,e,2.2*i,0,2*Math.PI),this.ctx.fill();const r=this.ctx.createRadialGradient(t,e,.6*i,t,e,1.6*i);r.addColorStop(0,"rgba(255, 252, 240, 0.5)"),r.addColorStop(.4,"rgba(255, 245, 210, 0.35)"),r.addColorStop(.7,"rgba(255, 235, 180, 0.2)"),r.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(t,e,1.6*i,0,2*Math.PI),this.ctx.fill();const o=this.ctx.createRadialGradient(t-.1*i,e-.1*i,0,t,e,i);o.addColorStop(0,"#FFFEF5"),o.addColorStop(.15,"#FFF9E6"),o.addColorStop(.3,"#FFF4D6"),o.addColorStop(.5,"#FFEDC0"),o.addColorStop(.7,"#FFE4A8"),o.addColorStop(.85,"#FFDC95"),o.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(t,e,i,0,2*Math.PI),this.ctx.fill()}drawHorizonReflection(t,e,s,i){const n=48+1.5*Math.sin(.15*i),a=.85*s;if(e>=a-50){const s=.3*Math.max(0,(a-e)/50);this.ctx.fillStyle=`rgba(255, 140, 0, ${s})`,this.ctx.beginPath(),this.ctx.ellipse(t,a,1.5*n,.5*n,0,0,2*Math.PI),this.ctx.fill()}}drawNightSky(t,e,s){this.ctx.fillStyle="#FFFFFF";for(let i=0;i<20;i++){const n=(.2*t+47*i)%t,a=(.2*e+23*i)%(.6*e),r=.5*Math.sin(.8*s+i)+.5;this.ctx.globalAlpha=.8*r,this.ctx.beginPath(),this.ctx.arc(n,a,1.5,0,2*Math.PI),this.ctx.fill()}const i=.75*t,n=.3*e;this.ctx.globalAlpha=.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(i,n,25,0,2*Math.PI),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(i-8,n-5,22,0,2*Math.PI),this.ctx.fill(),this.ctx.globalAlpha=1}}class bt extends $t{constructor(t){super(t),this.rainDrops=[]}draw(t,e,s,i=!1){const n=.001*Date.now();this.drawClouds(n,e,s,i?1:.8),this.drawRain(e,s,i)}drawRain(t,e,s){const i=s?130:90;if(this.rainDrops.length!==i){this.rainDrops=[];for(let n=0;n<i;n++)this.rainDrops.push({startX:Math.random()*t,startY:Math.random()*(e+200)-100,speed:s?80+100*Math.random():60+80*Math.random(),windOffset:30*(Math.random()-.5),width:s?1.2+1*Math.random():.8+.7*Math.random(),length:s?8+10*Math.random():6+8*Math.random(),alpha:s?.75+.15*Math.random():.65+.2*Math.random(),phase:Math.random()*Math.PI*2})}const n=.0015*Date.now();for(let s=0;s<this.rainDrops.length;s++){const i=this.rainDrops[s],a=(i.startY+n*i.speed)%(e+200);a>e+50&&(i.startY=-50-50*Math.random(),i.startX=Math.random()*t);const r=i.windOffset*(1+.2*Math.sin(.5*n+i.phase)),o=(i.startX+r+15*n%t)%t;o<-10?i.startX=t+10:o>t+10&&(i.startX=-10),this.drawRainDrop(o,a,i)}}drawRainDrop(t,e,s){this.ctx.save(),this.ctx.globalAlpha=s.alpha;const i=e-.5*s.length,n=e+.5*s.length;this.ctx.fillStyle=`rgba(220, 240, 255, ${s.alpha})`,this.ctx.strokeStyle=`rgba(240, 250, 255, ${.5*s.alpha})`,this.ctx.lineWidth=.4,this.ctx.beginPath();const a=s.width;this.ctx.arc(t,i,a,0,2*Math.PI,!1),this.ctx.moveTo(t-a,i),this.ctx.quadraticCurveTo(t-.5*a,e,t-.15*a,n-.5*s.width),this.ctx.lineTo(t,n),this.ctx.lineTo(t+.15*a,n-.5*s.width),this.ctx.quadraticCurveTo(t+.5*a,e,t+a,i),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class _t extends $t{draw(t,e,s){const i=.001*Date.now();this.drawClouds(i,e,s,.7),this.drawSnowflakes(e,s,i)}drawSnowflakes(t,e,s){this.ctx.lineWidth=1,this.ctx.lineCap="round";for(let i=0;i<40;i++){const n=(.15*t+22*i+15*Math.sin(.15*s+i))%t,a=(60*s+25*i)%(e+60)-30,r=1.5+i%4*.8,o=.7+i%2*.2,h=.25*s+.3*i;this.drawSnowflake(n,a,r,o,h)}}drawSnowflake(t,e,s,i,n){this.ctx.save(),this.ctx.translate(t,e),this.ctx.rotate(n),this.ctx.strokeStyle=`rgba(255, 255, 255, ${i})`;for(let t=0;t<6;t++)this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(0,2.5*s),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(.5*s,1.5*s),this.ctx.lineTo(1.2*s,1.8*s),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(.5*-s,1.5*s),this.ctx.lineTo(1.2*-s,1.8*s),this.ctx.stroke(),this.ctx.rotate(Math.PI/3);this.ctx.restore()}}class St extends $t{draw(t,e,s){const i=.001*Date.now();this.drawClouds(i,e,s,.7)}}class At extends $t{draw(t,e,s){const i=3e-4*Date.now();this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let t=0;t<3;t++){const n=s*(.4+.2*t),a=20*Math.sin(i+t);this.ctx.beginPath(),this.ctx.moveTo(0,n);for(let s=0;s<=e;s+=5){const r=15*Math.sin((s/e+i)*Math.PI*4+t);this.ctx.lineTo(s,n+r+a)}this.ctx.lineTo(e,s),this.ctx.lineTo(0,s),this.ctx.closePath(),this.ctx.fill()}}}class Ct extends $t{constructor(t){super(t),this.hailStones=[]}draw(t,e,s){const i=.001*Date.now();this.drawClouds(i,e,s,1),this.drawHailStones(e,s)}drawHailStones(t,e){if(60!==this.hailStones.length){this.hailStones=[];for(let s=0;s<60;s++)this.hailStones.push({startX:Math.random()*t,startY:Math.random()*(e+150)-75,speed:120+80*Math.random(),windOffset:20*(Math.random()-.5),size:2+3*Math.random(),alpha:.8+.15*Math.random(),phase:Math.random()*Math.PI*2})}const s=.002*Date.now();this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=.5;for(let i=0;i<this.hailStones.length;i++){const n=this.hailStones[i],a=(n.startY+s*n.speed)%(e+150);a>e+30&&(n.startY=-30-30*Math.random(),n.startX=Math.random()*t);const r=n.windOffset*(1+.15*Math.sin(.6*s+n.phase)),o=(n.startX+r+20*s%t)%t;o<-5?n.startX=t+5:o>t+5&&(n.startX=-5),this.drawHailStone(o,a,n)}}drawHailStone(t,e,s){this.ctx.save(),this.ctx.globalAlpha=s.alpha,this.ctx.beginPath(),this.ctx.ellipse(t,e,s.size,.9*s.size,0,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(t-.3*s.size,e-.3*s.size,.3*s.size,.25*s.size,0,0,2*Math.PI),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class Mt extends $t{constructor(t){super(t),this.rainyAnimation=new bt(t)}draw(t,e,s,i=!0){const n=.001*Date.now();this.drawClouds(n,e,s,1),i&&this.rainyAnimation.draw(t,e,s,!1),this.drawLightning(e,s,n)}drawLightning(t,e,s){const i=Math.sin(2.5*s)*Math.sin(5.3*s)*Math.sin(7.1*s),n=Math.max(0,i);if(n>.4){const s=(n-.4)/.6,i=.6*s,a=Math.min(i,.6*Math.sin(s*Math.PI));this.ctx.fillStyle=`rgba(255, 255, 255, ${a})`,this.ctx.fillRect(0,0,t,e)}}}const Et=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(i,t,s)})`
  :host {
    display: block;
    --card-width: 100%;
    --card-height: 200px;
    --primary-color: #007AFF;
    --day-gradient-start: #87CEEB;
    --day-gradient-end: #E0F6FF;
    --night-gradient-start: #1a1a2e;
    --night-gradient-end: #16213e;
    --sunset-gradient-start: #FF6B6B;
    --sunset-gradient-end: #FFA07A;
    --sunrise-gradient-start: #FFA07A;
    --sunrise-gradient-end: #FFD700;
  }

  ha-card {
    overflow: hidden;
    background: transparent;
    box-shadow: none;
  }

  .weather-card {
    position: relative;
    width: var(--card-width);
    min-height: var(--card-height, 200px);
    border-radius: 16px;
    overflow: visible;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, var(--day-gradient-start), var(--day-gradient-end));
    transition: background 2s ease-in-out, min-height 0.3s ease;
  }

  .weather-card.night {
    background: linear-gradient(135deg, var(--night-gradient-start), var(--night-gradient-end));
  }

  .weather-card.sunset {
    background: linear-gradient(135deg, var(--sunset-gradient-start), var(--sunset-gradient-end));
  }

  .weather-card.sunrise {
    background: linear-gradient(135deg, var(--sunrise-gradient-start), var(--sunrise-gradient-end));
  }

  .canvas-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    pointer-events: none;
  }

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  .content {
    position: relative;
    z-index: 10;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .location {
    font-size: 18px;
    font-weight: 500;
    opacity: 0.9;
  }

  .temperature {
    font-size: 64px;
    font-weight: 100;
    line-height: 1;
    margin: 0;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .condition {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.9;
  }

  .feels-like {
    font-size: 16px;
    opacity: 0.85;
    margin-top: 8px;
  }

  .temp-range {
    font-size: 18px;
    opacity: 0.9;
    margin-top: 8px;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .temp-min {
    font-size: 14px;
    opacity: 0.7;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 12px;
    font-size: 13px;
    opacity: 0.9;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .info-icon {
    font-size: 16px;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .forecast-container {
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
  }

  .forecast-title {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .forecast-scroll {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 8px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .forecast-scroll::-webkit-scrollbar {
    display: none;
  }

  .forecast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    min-width: 60px;
  }

  .forecast-time {
    font-size: 12px;
    opacity: 0.7;
    font-weight: 400;
  }

  .forecast-icon {
    font-size: 24px;
    line-height: 1;
  }

  .forecast-temp {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.9;
  }
`;class Pt extends at{static get properties(){return{hass:{type:Object},config:{type:Object}}}static get styles(){return Et}constructor(){super(),this.config={},this.animationFrame=null,this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.animations={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{this.setupCanvas(),this.canvas&&this.ctx&&(this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver())},100)})}disconnectedCallback(){super.disconnectedCallback(),this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}updated(t){super.updated(t),(t.has("hass")||t.has("config"))&&this.canvas&&this.ctx&&this.resizeCanvas()}initializeAnimations(){this.animations={sunny:new xt(this.ctx),rainy:new bt(this.ctx),snowy:new _t(this.ctx),cloudy:new St(this.ctx),foggy:new At(this.ctx),hail:new Ct(this.ctx),thunderstorm:new Mt(this.ctx)}}setupResizeObserver(){if(!this.shadowRoot)return;const t=this.shadowRoot.querySelector(".canvas-container");t&&(this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(t))}resizeCanvas(){if(!this.canvas)return;const t=this.shadowRoot.querySelector(".canvas-container");if(!t)return;const e=t.getBoundingClientRect();if(0===e.width||0===e.height)return;const s=window.devicePixelRatio||2;this.canvas.width=e.width*s,this.canvas.height=e.height*s,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx.scale(s,s),this.canvasWidth=e.width,this.canvasHeight=e.height,this.initializeAnimations()}setupCanvas(){const t=this.shadowRoot.querySelector(".canvas-container");if(!t)return;const e=t.querySelector("canvas");e&&e.remove(),this.canvas=document.createElement("canvas"),t.appendChild(this.canvas),this.resizeCanvas()}getState(t){if(!this.hass||!t)return null;const e=this.hass.states[t];return e?e.state:null}getAttributes(t){if(!this.hass||!t)return{};const e=this.hass.states[t];return e?e.attributes:{}}getWeatherData(){const t=this.config.entity||"weather.home",e=this.getAttributes(t);return{condition:e.condition||"sunny",temperature:e.temperature||this.getState(t)||20,apparentTemperature:e.apparent_temperature||e.temperature||null,humidity:e.humidity||50,windSpeed:e.wind_speed||0,windGust:e.wind_gust_speed||e.wind_gust||null,windBearing:e.wind_bearing||null,windDirection:e.wind_direction||null,pressure:e.pressure||1013,forecast:e.forecast||[],friendlyName:e.friendly_name||"Weather",templow:e.templow||(e.forecast&&e.forecast[0]?e.forecast[0].templow:null)}}getTodayForecast(){if(!this.hass||!this.config)return[];const t=this.getWeatherData();if(!t.forecast||0===t.forecast.length)return[];const e=new Date,s=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=new Date(s);i.setDate(i.getDate()+1);return t.forecast.filter(t=>{if(!t.datetime)return!1;const n=new Date(t.datetime),a=new Date(n.getFullYear(),n.getMonth(),n.getDate());return a.getTime()===s.getTime()||a.getTime()===i.getTime()&&n.getHours()<=e.getHours()}).sort((t,e)=>new Date(t.datetime)-new Date(e.datetime)).slice(0,8)}startAnimation(){const t=()=>{this.draw(),this.animationFrame=requestAnimationFrame(t)};t()}draw(){if(!this.ctx||!this.canvas)return;if(!(this.canvasWidth&&this.canvasHeight||(this.resizeCanvas(),this.canvasWidth&&this.canvasHeight)))return;const t=this.canvasWidth,e=this.canvasHeight;this.ctx.clearRect(0,0,t,e);const s=this.getWeatherData(),i=this.hass?.states[this.config.entity],n=vt(yt(i));switch(s.condition.toLowerCase()){case"sunny":case"clear":this.animations.sunny.draw(n,t,e);break;case"clear-night":this.animations.sunny.draw({type:"night",progress:0},t,e);break;case"rainy":case"rain":this.animations.rainy.draw(n,t,e,!1);break;case"pouring":this.animations.rainy.draw(n,t,e,!0);break;case"snowy":case"snow":this.animations.snowy.draw(n,t,e);break;case"snowy-rainy":this.animations.rainy.draw(n,t,e,!1),this.animations.snowy.draw(n,t,e);break;case"hail":this.animations.hail.draw(n,t,e);break;case"foggy":case"fog":this.animations.foggy.draw(n,t,e);break;case"lightning":this.animations.thunderstorm.draw(n,t,e,!1);break;case"lightning-rainy":this.animations.thunderstorm.draw(n,t,e,!0);break;default:this.animations.cloudy.draw(n,t,e)}}renderTodayForecast(){const t=this.getTodayForecast();return 0===t.length?I`<div style="opacity: 0.6; font-size: 14px;">Прогноз недоступен</div>`:I`
      <div class="forecast-scroll">
        ${t.map(t=>{return I`
          <div class="forecast-item">
            <div class="forecast-time">${s=t.datetime,s?`${new Date(s).getHours().toString().padStart(2,"0")}:00`:""}</div>
            <div class="forecast-icon">${e=t.condition,e&&ot[e.toLowerCase()]||"🌤️"}</div>
            <div class="forecast-temp">${Math.round(t.temperature||t.temp||0)}°</div>
          </div>
        `;var e,s})}
      </div>
    `}getConditionName(t){return ht[t.toLowerCase()]||t}render(){if(!this.hass)return I`<div>No Home Assistant connection</div>`;const t=this.getWeatherData(),e=yt(this.hass.states[this.config.entity]),s=vt(e),i=`weather-card ${s.type}`;let n=this.config.height?`${this.config.height}px`:"200px";const a=function(t){if("sunrise"===t.type){const e=t.progress,s={r:26,g:26,b:46},i={r:255,g:160,b:122},n={r:255,g:215,b:0};return{start:{r:Math.round(s.r+(i.r-s.r)*e),g:Math.round(s.g+(i.g-s.g)*e),b:Math.round(s.b+(i.b-s.b)*e)},end:{r:Math.round(s.r+(n.r-s.r)*e),g:Math.round(s.g+(n.g-s.g)*e),b:Math.round(s.b+(n.b-s.b)*e)}}}if("sunset"===t.type){const e=t.progress,s={r:255,g:107,b:107},i={r:255,g:160,b:122},n={r:26,g:26,b:46};return{start:{r:Math.round(s.r+(n.r-s.r)*e),g:Math.round(s.g+(n.g-s.g)*e),b:Math.round(s.b+(n.b-s.b)*e)},end:{r:Math.round(i.r+(n.r-i.r)*e),g:Math.round(i.g+(n.g-i.g)*e),b:Math.round(i.b+(n.b-i.b)*e)}}}return null}(s),r=a?`background: linear-gradient(135deg, rgb(${a.start.r}, ${a.start.g}, ${a.start.b}), rgb(${a.end.r}, ${a.end.g}, ${a.end.b}));`:"";return I`
      <ha-card>
        <div class="${i}" style="min-height: ${n}; ${r}">
          <div class="canvas-container"></div>
          <div class="content">
            <div class="header">
              <div class="location">${this.getConditionName(t.condition)}</div>
            </div>
            <div>
              <div class="temperature">${Math.round(t.temperature)}°</div>
              ${this.config.showMinTemp&&t.templow?I`
                <div class="temp-range">
                  <span class="temp-min">↓ ${Math.round(t.templow)}°</span>
                </div>
              `:""}
              ${this.config.showFeelsLike&&t.apparentTemperature?I`
                <div class="feels-like">Ощущается как ${Math.round(t.apparentTemperature)}°</div>
              `:""}
            </div>
            <div class="details">
              <div class="info-grid">
                ${this.config.showHumidity?I`
                  <div class="info-item">
                    <span class="info-icon">${wt("humidity-icon.svg")}</span>
                    <span>${t.humidity} %</span>
                  </div>
                `:""}
                ${this.config.showSunriseSunset&&e.hasSunData?I`
                  <div class="info-item">
                    <span class="info-icon">🌅</span>
                    <span>${mt(e.sunrise)}</span>
                  </div>
                `:""}
                ${this.config.showWind?I`
                  ${this.config.showWindDirection&&null!==t.windBearing?I`
                    <div class="info-item">
                      <span class="info-icon">${wt(function(t){if(null==t)return"wind-icon.svg";const e=(t%360+360)%360,s=Math.round(e/45)%8;return lt[s]||"wind-icon.svg"}(t.windBearing))}</span>
                      <span>${t.windSpeed} м/с${this.config.showWindGust&&t.windGust?` / ${t.windGust} м/с`:""}</span>
                    </div>
                  `:I`
                    <div class="info-item">
                      <span class="info-icon">${wt("wind-icon.svg")}</span>
                      <span>${t.windSpeed} м/с${this.config.showWindGust&&t.windGust?` / ${t.windGust} м/с`:""}</span>
                    </div>
                  `}
                `:""}
                ${this.config.showSunriseSunset&&e.hasSunData?I`
                  <div class="info-item">
                    <span class="info-icon">🌇</span>
                    <span>${mt(e.sunset)}</span>
                  </div>
                `:""}
              </div>
            </div>
            ${this.config.showForecast?I`
              <div class="forecast-container">
                <div class="forecast-title">Прогноз на сегодня</div>
                ${this.renderTodayForecast()}
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}setConfig(t){if(!t.entity)throw new Error("Please define a weather entity");this.config={entity:t.entity,icons_path:t.icons_path,name:t.name,height:t.height||ft,showFeelsLike:!1!==t.show_feels_like,showWind:!1!==t.show_wind,showWindGust:!1!==t.show_wind_gust,showWindDirection:!1!==t.show_wind_direction,showHumidity:!1!==t.show_humidity,showMinTemp:!1!==t.show_min_temp,showForecast:!0===t.show_forecast,showSunriseSunset:!1!==t.show_sunrise_sunset}}getCardSize(){return 1}static getConfigElement(){return document.createElement("animated-weather-card-editor")}}class kt extends at{static get properties(){return{hass:{type:Object},config:{type:Object}}}createRenderRoot(){return this}setConfig(t){this.config=t||{}}render(){return this.hass?I`
      <style>
        .card-config {
          padding: 16px;
        }
        .option {
          padding: 8px 0;
        }
        label {
          display: flex;
          align-items: center;
          padding: 8px 0;
        }
        .label {
          flex: 1;
          margin-right: 8px;
        }
        ha-entity-picker,
        ha-textfield {
          width: 100%;
        }
        ha-switch {
          margin-left: auto;
        }
      </style>
      <div class="card-config">
        <div class="option">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this.config.entity}
            .configValue=${"entity"}
            .label=${"Weather Entity"}
            .includeDomains=${["weather"]}
            @value-changed=${this._valueChanged}
          ></ha-entity-picker>
        </div>

        <div class="option">
          <ha-textfield
            .label=${"Name (optional)"}
            .value=${this.config.name||""}
            .configValue=${"name"}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="option">
          <ha-textfield
            .label=${"Height in pixels (optional, default: 200)"}
            .value=${this.config.height||""}
            .configValue=${"height"}
            type="number"
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="option">
          <label>
            <span class="label">Show "Feels Like" temperature</span>
            <ha-switch
              .checked=${!1!==this.config.show_feels_like}
              .configValue=${"show_feels_like"}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Minimum Temperature</span>
            <ha-switch
              .checked=${!1!==this.config.show_min_temp}
              .configValue=${"show_min_temp"}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Humidity</span>
            <ha-switch
              .checked=${!1!==this.config.show_humidity}
              .configValue=${"show_humidity"}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Wind Speed</span>
            <ha-switch
              .checked=${!1!==this.config.show_wind}
              .configValue=${"show_wind"}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Wind Direction</span>
            <ha-switch
              .checked=${!1!==this.config.show_wind_direction}
              .configValue=${"show_wind_direction"}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Wind Gust</span>
            <ha-switch
              .checked=${!1!==this.config.show_wind_gust}
              .configValue=${"show_wind_gust"}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Today Forecast</span>
            <ha-switch
              .checked=${!0===this.config.show_forecast}
              .configValue=${"show_forecast"}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Sunrise/Sunset</span>
            <ha-switch
              .checked=${!1!==this.config.show_sunrise_sunset}
              .configValue=${"show_sunrise_sunset"}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>
      </div>
    `:I``}_valueChanged(t){if(!this.config)return;const e=t.target;if(e.configValue){const t=void 0!==e.checked?e.checked:e.value;""===t||null===t?delete this.config[e.configValue]:"height"===e.configValue?this.config[e.configValue]=parseInt(t)||null:this.config[e.configValue]=t}const s=new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0});this.dispatchEvent(s)}}try{customElements.define("dynamic-weather-card-editor",kt),customElements.define("dynamic-weather-card",Pt),console.log("%cDynamic Weather Card %c0.0.1","color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;","\nДинамическая карточка погоды"),window.customCards=window.customCards||[],window.customCards.push({type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"})}catch(t){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",t)}
