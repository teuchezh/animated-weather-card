const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:o,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,g=globalThis,u=g.trustedTypes,f=u?u.emptyScript:"",w=g.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!o(t,e),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);n?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const a=n.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const a=this.constructor;if(!1===s&&(n=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??v)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[m("elementProperties")]=new Map,$[m("finalized")]=new Map,w?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.1.2");const b=globalThis,_=t=>t,A=b.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+M,P=`<${E}>`,k=document,T=()=>k.createComment(""),F=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,D="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,U=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,W=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),j=new WeakMap,q=k.createTreeWalker(k,129);function G(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,s=[];let n,a=2===e?"<svg>":3===e?"<math>":"",r=O;for(let e=0;e<i;e++){const i=t[e];let o,h,c=-1,l=0;for(;l<i.length&&(r.lastIndex=l,h=r.exec(i),null!==h);)l=r.lastIndex,r===O?"!--"===h[1]?r=H:void 0!==h[1]?r=R:void 0!==h[2]?(I.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=U):void 0!==h[3]&&(r=U):r===U?">"===h[0]?(r=n??O,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,o=h[1],r=void 0===h[3]?U:'"'===h[3]?W:N):r===W||r===N?r=U:r===H||r===R?r=O:(r=U,n=void 0);const d=r===U&&t[e+1].startsWith("/>")?" ":"";a+=r===O?i+P:c>=0?(s.push(o),i.slice(0,c)+C+i.slice(c)+M+d):i+M+(-2===c?e:d)}return[G(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const r=t.length-1,o=this.parts,[h,c]=X(t,e);if(this.el=Y.createElement(h,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[a++],i=s.getAttribute(t).split(M),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:Q}),s.removeAttribute(t)}else t.startsWith(M)&&(o.push({type:6,index:n}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(M),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),q.nextNode(),o.push({type:2,index:++n});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===E)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(M,t+1));)o.push({type:7,index:n}),t+=M.length-1}n++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===B)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const a=F(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);q.currentNode=s;let n=q.nextNode(),a=0,r=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new Z(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new st(n,this,t)),this._$AV.push(e),o=i[++r]}a!==o?.index&&(n=q.nextNode(),a++)}return q.currentNode=k,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),F(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new K(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new Y(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Z(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=_(t).nextSibling;_(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(void 0===n)t=J(this,t,e,0),a=!F(t)||t!==this._$AH&&t!==B,a&&(this._$AH=t);else{const s=t;let r,o;for(t=n[0],r=0;r<n.length-1;r++)o=J(this,s[i+r],e,r),o===B&&(o=this._$AH[r]),a||=!F(o)||o!==this._$AH[r],o===V?t=V:t!==V&&(t+=(o??"")+n[r+1]),this._$AH[r]=o}a&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends Q{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??V)===B)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const nt=b.litHtmlPolyfillSupport;nt?.(Y,Z),(b.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;class rt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Z(e.insertBefore(T(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,at.litElementHydrateSupport?.({LitElement:rt});const ot=at.litElementPolyfillSupport;ot?.({LitElement:rt}),(at.litElementVersions??=[]).push("4.2.2");const ht={sunny:"☀️",clear:"☀️","clear-night":"🌙",partlycloudy:"⛅",cloudy:"☁️",rainy:"🌧️",pouring:"🌧️",lightning:"⚡","lightning-rainy":"⛈️",snowy:"❄️","snowy-rainy":"🌨️",foggy:"🌫️",hail:"🌨️",windy:"💨","windy-variant":"💨"},ct={sunny:"Солнечно",clear:"Ясно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь"},lt={"humidity-icon.svg":"💧","wind-icon.svg":"💨","wind-gust-icon.svg":"🌪️","wind-n.svg":"⬆️","wind-ne.svg":"↗️","wind-e.svg":"➡️","wind-se.svg":"↘️","wind-s.svg":"⬇️","wind-sw.svg":"↙️","wind-w.svg":"⬅️","wind-nw.svg":"↖️"},dt=["wind-n.svg","wind-ne.svg","wind-e.svg","wind-se.svg","wind-s.svg","wind-sw.svg","wind-w.svg","wind-nw.svg"],pt=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"],gt=360,ut=480,ft=1080,wt=1200,mt=null;function yt(t){return lt[t]||""}function vt(){const t=new Date,e=60*t.getHours()+t.getMinutes();if(e>=gt&&e<ut){return{type:"sunrise",progress:(e-gt)/120}}if(e>=ut&&e<ft){return{type:"day",progress:(e-ut)/600}}if(e>=ft&&e<wt){return{type:"sunset",progress:(e-ft)/120}}return{type:"night",progress:0}}class xt{constructor(t){this.ctx=t}drawCloud(t,e,i,s){const n=this.ctx.shadowBlur,a=this.ctx.shadowColor,r=this.ctx.globalAlpha;this.ctx.shadowBlur=.25*i,this.ctx.shadowColor=`rgba(255, 255, 255, ${.4*s})`,this.ctx.globalAlpha=.85*s,this.ctx.fillStyle="rgba(255, 255, 255, 1)";[{x:t,y:e,r:.4*i},{x:t+.35*i,y:e,r:.5*i},{x:t+.65*i,y:e,r:.48*i},{x:t+.92*i,y:e,r:.38*i},{x:t+.18*i,y:e-.28*i,r:.38*i},{x:t+.52*i,y:e-.32*i,r:.42*i},{x:t+.78*i,y:e-.28*i,r:.38*i},{x:t+.32*i,y:e-.42*i,r:.32*i},{x:t+.62*i,y:e-.48*i,r:.36*i},{x:t+.82*i,y:e-.42*i,r:.32*i}].forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.r,0,2*Math.PI),this.ctx.fill()}),this.ctx.shadowBlur=n,this.ctx.shadowColor=a,this.ctx.globalAlpha=r}drawClouds(t,e,i,s=.5){const n=Math.max(2,Math.floor(e/150*s));for(let s=0;s<n;s++){const n=(3*t+150*s)%(e+200)-100,a=i*(.2+s%3*.15)+8*Math.sin(.2*t+s),r=40+s%3*15,o=.6+s%2*.2;this.drawCloud(n,a,r,o)}}}class $t extends xt{draw(t,e,i){const s=.001*Date.now(),n=function(t,e,i){if("sunrise"===t.type){const s=t.progress;return{x:e*(.3+.4*s),y:i*(.85-.55*s)}}if("sunset"===t.type){const s=t.progress;return{x:e*(.5+.3*s),y:i*(.3+.55*s)}}if("day"===t.type){const s=t.progress*Math.PI;return{x:e*(.5+.25*Math.sin(s)),y:i*(.25-.1*Math.sin(s))}}return{x:.75*e,y:.3*i}}(t,e,i),a=n.x,r=n.y;"day"===t.type||"sunrise"===t.type||"sunset"===t.type?(this.drawSun(a,r,s),"sunrise"!==t.type&&"sunset"!==t.type||this.drawHorizonReflection(a,r,i,s)):"night"===t.type&&this.drawNightSky(e,i,s),this.drawClouds(s,e,i,.3)}drawSun(t,e,i){const s=48+1.5*Math.sin(.15*i),n=this.ctx.createRadialGradient(t,e,.3*s,t,e,3.5*s);n.addColorStop(0,"rgba(255, 248, 230, 0.25)"),n.addColorStop(.15,"rgba(255, 240, 200, 0.2)"),n.addColorStop(.3,"rgba(255, 230, 170, 0.15)"),n.addColorStop(.5,"rgba(255, 220, 140, 0.1)"),n.addColorStop(.7,"rgba(255, 210, 120, 0.06)"),n.addColorStop(.85,"rgba(255, 200, 100, 0.03)"),n.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=n,this.ctx.beginPath(),this.ctx.arc(t,e,3.5*s,0,2*Math.PI),this.ctx.fill();const a=this.ctx.createRadialGradient(t,e,.5*s,t,e,2.2*s);a.addColorStop(0,"rgba(255, 250, 220, 0.35)"),a.addColorStop(.3,"rgba(255, 240, 190, 0.25)"),a.addColorStop(.6,"rgba(255, 230, 160, 0.15)"),a.addColorStop(.85,"rgba(255, 220, 140, 0.08)"),a.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(t,e,2.2*s,0,2*Math.PI),this.ctx.fill();const r=this.ctx.createRadialGradient(t,e,.6*s,t,e,1.6*s);r.addColorStop(0,"rgba(255, 252, 240, 0.5)"),r.addColorStop(.4,"rgba(255, 245, 210, 0.35)"),r.addColorStop(.7,"rgba(255, 235, 180, 0.2)"),r.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(t,e,1.6*s,0,2*Math.PI),this.ctx.fill();const o=this.ctx.createRadialGradient(t-.1*s,e-.1*s,0,t,e,s);o.addColorStop(0,"#FFFEF5"),o.addColorStop(.15,"#FFF9E6"),o.addColorStop(.3,"#FFF4D6"),o.addColorStop(.5,"#FFEDC0"),o.addColorStop(.7,"#FFE4A8"),o.addColorStop(.85,"#FFDC95"),o.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(t,e,s,0,2*Math.PI),this.ctx.fill()}drawHorizonReflection(t,e,i,s){const n=48+1.5*Math.sin(.15*s),a=.85*i;if(e>=a-50){const i=.3*Math.max(0,(a-e)/50);this.ctx.fillStyle=`rgba(255, 140, 0, ${i})`,this.ctx.beginPath(),this.ctx.ellipse(t,a,1.5*n,.5*n,0,0,2*Math.PI),this.ctx.fill()}}drawNightSky(t,e,i){this.ctx.fillStyle="#FFFFFF";for(let s=0;s<20;s++){const n=(.2*t+47*s)%t,a=(.2*e+23*s)%(.6*e),r=.5*Math.sin(.8*i+s)+.5;this.ctx.globalAlpha=.8*r,this.ctx.beginPath(),this.ctx.arc(n,a,1.5,0,2*Math.PI),this.ctx.fill()}const s=.75*t,n=.3*e;this.ctx.globalAlpha=.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(s,n,25,0,2*Math.PI),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(s-8,n-5,22,0,2*Math.PI),this.ctx.fill(),this.ctx.globalAlpha=1}}class bt extends xt{constructor(t){super(t),this.rainDrops=[]}draw(t,e,i,s=!1){const n=.001*Date.now();this.drawClouds(n,e,i,s?1:.8),this.drawRain(e,i,s)}drawRain(t,e,i){const s=i?130:90;if(this.rainDrops.length!==s){this.rainDrops=[];for(let n=0;n<s;n++)this.rainDrops.push({startX:Math.random()*t,startY:Math.random()*(e+200)-100,speed:i?80+100*Math.random():60+80*Math.random(),windOffset:30*(Math.random()-.5),width:i?1.2+1*Math.random():.8+.7*Math.random(),length:i?8+10*Math.random():6+8*Math.random(),alpha:i?.75+.15*Math.random():.65+.2*Math.random(),phase:Math.random()*Math.PI*2})}const n=.0015*Date.now();for(let i=0;i<this.rainDrops.length;i++){const s=this.rainDrops[i],a=(s.startY+n*s.speed)%(e+200);a>e+50&&(s.startY=-50-50*Math.random(),s.startX=Math.random()*t);const r=s.windOffset*(1+.2*Math.sin(.5*n+s.phase)),o=(s.startX+r+15*n%t)%t;o<-10?s.startX=t+10:o>t+10&&(s.startX=-10),this.drawRainDrop(o,a,s)}}drawRainDrop(t,e,i){this.ctx.save(),this.ctx.globalAlpha=i.alpha;const s=e-.5*i.length,n=e+.5*i.length;this.ctx.fillStyle=`rgba(220, 240, 255, ${i.alpha})`,this.ctx.strokeStyle=`rgba(240, 250, 255, ${.5*i.alpha})`,this.ctx.lineWidth=.4,this.ctx.beginPath();const a=i.width;this.ctx.arc(t,s,a,0,2*Math.PI,!1),this.ctx.moveTo(t-a,s),this.ctx.quadraticCurveTo(t-.5*a,e,t-.15*a,n-.5*i.width),this.ctx.lineTo(t,n),this.ctx.lineTo(t+.15*a,n-.5*i.width),this.ctx.quadraticCurveTo(t+.5*a,e,t+a,s),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class _t extends xt{draw(t,e,i){const s=.001*Date.now();this.drawClouds(s,e,i,.7),this.drawSnowflakes(e,i,s)}drawSnowflakes(t,e,i){this.ctx.lineWidth=1,this.ctx.lineCap="round";for(let s=0;s<40;s++){const n=(.15*t+22*s+15*Math.sin(.15*i+s))%t,a=(60*i+25*s)%(e+60)-30,r=1.5+s%4*.8,o=.7+s%2*.2,h=.25*i+.3*s;this.drawSnowflake(n,a,r,o,h)}}drawSnowflake(t,e,i,s,n){this.ctx.save(),this.ctx.translate(t,e),this.ctx.rotate(n),this.ctx.strokeStyle=`rgba(255, 255, 255, ${s})`;for(let t=0;t<6;t++)this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(0,2.5*i),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(.5*i,1.5*i),this.ctx.lineTo(1.2*i,1.8*i),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(.5*-i,1.5*i),this.ctx.lineTo(1.2*-i,1.8*i),this.ctx.stroke(),this.ctx.rotate(Math.PI/3);this.ctx.restore()}}class At extends xt{draw(t,e,i){const s=.001*Date.now();this.drawClouds(s,e,i,.7)}}class St extends xt{draw(t,e,i){const s=3e-4*Date.now();this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let t=0;t<3;t++){const n=i*(.4+.2*t),a=20*Math.sin(s+t);this.ctx.beginPath(),this.ctx.moveTo(0,n);for(let i=0;i<=e;i+=5){const r=15*Math.sin((i/e+s)*Math.PI*4+t);this.ctx.lineTo(i,n+r+a)}this.ctx.lineTo(e,i),this.ctx.lineTo(0,i),this.ctx.closePath(),this.ctx.fill()}}}class Ct extends xt{constructor(t){super(t),this.hailStones=[]}draw(t,e,i){const s=.001*Date.now();this.drawClouds(s,e,i,1),this.drawHailStones(e,i)}drawHailStones(t,e){if(60!==this.hailStones.length){this.hailStones=[];for(let i=0;i<60;i++)this.hailStones.push({startX:Math.random()*t,startY:Math.random()*(e+150)-75,speed:120+80*Math.random(),windOffset:20*(Math.random()-.5),size:2+3*Math.random(),alpha:.8+.15*Math.random(),phase:Math.random()*Math.PI*2})}const i=.002*Date.now();this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=.5;for(let s=0;s<this.hailStones.length;s++){const n=this.hailStones[s],a=(n.startY+i*n.speed)%(e+150);a>e+30&&(n.startY=-30-30*Math.random(),n.startX=Math.random()*t);const r=n.windOffset*(1+.15*Math.sin(.6*i+n.phase)),o=(n.startX+r+20*i%t)%t;o<-5?n.startX=t+5:o>t+5&&(n.startX=-5),this.drawHailStone(o,a,n)}}drawHailStone(t,e,i){this.ctx.save(),this.ctx.globalAlpha=i.alpha,this.ctx.beginPath(),this.ctx.ellipse(t,e,i.size,.9*i.size,0,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(t-.3*i.size,e-.3*i.size,.3*i.size,.25*i.size,0,0,2*Math.PI),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class Mt extends xt{constructor(t){super(t),this.rainyAnimation=new bt(t)}draw(t,e,i,s=!0){const n=.001*Date.now();this.drawClouds(n,e,i,1),s&&this.rainyAnimation.draw(t,e,i,!1),this.drawLightning(e,i,n)}drawLightning(t,e,i){const s=Math.sin(2.5*i)*Math.sin(5.3*i)*Math.sin(7.1*i),n=Math.max(0,s);if(n>.4){const i=(n-.4)/.6,s=.6*i,a=Math.min(s,.6*Math.sin(i*Math.PI));this.ctx.fillStyle=`rgba(255, 255, 255, ${a})`,this.ctx.fillRect(0,0,t,e)}}}const Et=a`
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
    align-items: flex-end;
    gap: 12px;
  }

  .condition {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.9;
  }

  .extra-info-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    font-size: 14px;
    opacity: 0.85;
  }

  .extra-info {
    font-size: 14px;
    opacity: 0.8;
    text-align: right;
  }

  .extra-info div {
    margin-top: 4px;
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

  .info-row {
    font-size: 14px;
    opacity: 0.85;
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
  }

  .details .info-row {
    font-size: 14px;
  }

  .info-icon {
    font-size: 18px;
    line-height: 1;
    display: inline-block;
    flex-shrink: 0;
    opacity: 0.9;
    width: 18px;
    text-align: center;
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
`;class Pt extends rt{static get properties(){return{hass:{type:Object},config:{type:Object}}}static get styles(){return Et}constructor(){super(),this.config={},this.animationFrame=null,this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.animations={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{this.setupCanvas(),this.canvas&&this.ctx&&(this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver())},100)})}disconnectedCallback(){super.disconnectedCallback(),this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}updated(t){super.updated(t),(t.has("hass")||t.has("config"))&&this.canvas&&this.ctx&&this.resizeCanvas()}initializeAnimations(){this.animations={sunny:new $t(this.ctx),rainy:new bt(this.ctx),snowy:new _t(this.ctx),cloudy:new At(this.ctx),foggy:new St(this.ctx),hail:new Ct(this.ctx),thunderstorm:new Mt(this.ctx)}}setupResizeObserver(){if(!this.shadowRoot)return;const t=this.shadowRoot.querySelector(".canvas-container");t&&(this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(t))}resizeCanvas(){if(!this.canvas)return;const t=this.shadowRoot.querySelector(".canvas-container");if(!t)return;const e=t.getBoundingClientRect();if(0===e.width||0===e.height)return;const i=window.devicePixelRatio||2;this.canvas.width=e.width*i,this.canvas.height=e.height*i,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx.scale(i,i),this.canvasWidth=e.width,this.canvasHeight=e.height,this.initializeAnimations()}setupCanvas(){const t=this.shadowRoot.querySelector(".canvas-container");if(!t)return;const e=t.querySelector("canvas");e&&e.remove(),this.canvas=document.createElement("canvas"),t.appendChild(this.canvas),this.resizeCanvas()}getState(t){if(!this.hass||!t)return null;const e=this.hass.states[t];return e?e.state:null}getAttributes(t){if(!this.hass||!t)return{};const e=this.hass.states[t];return e?e.attributes:{}}getWeatherData(){const t=this.config.entity||"weather.home",e=this.getAttributes(t);return{condition:e.condition||"sunny",temperature:e.temperature||this.getState(t)||20,apparentTemperature:e.apparent_temperature||e.temperature||null,humidity:e.humidity||50,windSpeed:e.wind_speed||0,windGust:e.wind_gust_speed||e.wind_gust||null,windBearing:e.wind_bearing||null,windDirection:e.wind_direction||null,pressure:e.pressure||1013,forecast:e.forecast||[],friendlyName:e.friendly_name||"Weather",templow:e.templow||(e.forecast&&e.forecast[0]?e.forecast[0].templow:null)}}getTodayForecast(){if(!this.hass||!this.config)return[];const t=this.getWeatherData();if(!t.forecast||0===t.forecast.length)return[];const e=new Date,i=new Date(e.getFullYear(),e.getMonth(),e.getDate());return t.forecast.filter(t=>{if(!t.datetime)return!1;const s=new Date(t.datetime);return new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime()===i.getTime()&&s.getTime()>e.getTime()}).sort((t,e)=>new Date(t.datetime)-new Date(e.datetime)).slice(0,8)}startAnimation(){const t=()=>{this.draw(),this.animationFrame=requestAnimationFrame(t)};t()}draw(){if(!this.ctx||!this.canvas)return;if(!(this.canvasWidth&&this.canvasHeight||(this.resizeCanvas(),this.canvasWidth&&this.canvasHeight)))return;const t=this.canvasWidth,e=this.canvasHeight;this.ctx.clearRect(0,0,t,e);const i=this.getWeatherData(),s=vt();switch(i.condition.toLowerCase()){case"sunny":case"clear":this.animations.sunny.draw(s,t,e);break;case"clear-night":this.animations.sunny.draw({type:"night",progress:0},t,e);break;case"rainy":case"rain":this.animations.rainy.draw(s,t,e,!1);break;case"pouring":this.animations.rainy.draw(s,t,e,!0);break;case"snowy":case"snow":this.animations.snowy.draw(s,t,e);break;case"snowy-rainy":this.animations.rainy.draw(s,t,e,!1),this.animations.snowy.draw(s,t,e);break;case"hail":this.animations.hail.draw(s,t,e);break;case"foggy":case"fog":this.animations.foggy.draw(s,t,e);break;case"lightning":this.animations.thunderstorm.draw(s,t,e,!1);break;case"lightning-rainy":this.animations.thunderstorm.draw(s,t,e,!0);break;default:this.animations.cloudy.draw(s,t,e)}}renderTodayForecast(){const t=this.getTodayForecast();return 0===t.length?L`<div style="opacity: 0.6; font-size: 14px;">Прогноз недоступен</div>`:L`
      <div class="forecast-scroll">
        ${t.map(t=>{return L`
          <div class="forecast-item">
            <div class="forecast-time">${i=t.datetime,i?`${new Date(i).getHours().toString().padStart(2,"0")}:00`:""}</div>
            <div class="forecast-icon">${e=t.condition,e&&ht[e.toLowerCase()]||"🌤️"}</div>
            <div class="forecast-temp">${Math.round(t.temperature||t.temp||0)}°</div>
          </div>
        `;var e,i})}
      </div>
    `}getConditionName(t){return ct[t.toLowerCase()]||t}render(){if(!this.hass)return L`<div>No Home Assistant connection</div>`;const t=this.getWeatherData(),e=vt(),i=`weather-card ${e.type}`;let s=this.config.height?`${this.config.height}px`:"200px";const n=function(t){if("sunrise"===t.type){const e=t.progress,i={r:26,g:26,b:46},s={r:255,g:160,b:122},n={r:255,g:215,b:0};return{start:{r:Math.round(i.r+(s.r-i.r)*e),g:Math.round(i.g+(s.g-i.g)*e),b:Math.round(i.b+(s.b-i.b)*e)},end:{r:Math.round(i.r+(n.r-i.r)*e),g:Math.round(i.g+(n.g-i.g)*e),b:Math.round(i.b+(n.b-i.b)*e)}}}if("sunset"===t.type){const e=t.progress,i={r:255,g:107,b:107},s={r:255,g:160,b:122},n={r:26,g:26,b:46};return{start:{r:Math.round(i.r+(n.r-i.r)*e),g:Math.round(i.g+(n.g-i.g)*e),b:Math.round(i.b+(n.b-i.b)*e)},end:{r:Math.round(s.r+(n.r-s.r)*e),g:Math.round(s.g+(n.g-s.g)*e),b:Math.round(s.b+(n.b-s.b)*e)}}}return null}(e),a=n?`background: linear-gradient(135deg, rgb(${n.start.r}, ${n.start.g}, ${n.start.b}), rgb(${n.end.r}, ${n.end.g}, ${n.end.b}));`:"";return L`
      <ha-card>
        <div class="${i}" style="min-height: ${s}; ${a}">
          <div class="canvas-container"></div>
          <div class="content">
            <div class="header">
              <div class="location">${this.getConditionName(t.condition)}</div>
            </div>
            <div>
              <div class="temperature">${Math.round(t.temperature)}°</div>
              ${this.config.showMinTemp&&t.templow?L`
                <div class="temp-range">
                  <span class="temp-min">↓ ${Math.round(t.templow)}°</span>
                </div>
              `:""}
              ${this.config.showFeelsLike&&t.apparentTemperature?L`
                <div class="feels-like">Ощущается как ${Math.round(t.apparentTemperature)}°</div>
              `:""}
            </div>
            <div class="details">
              <div class="extra-info-right">
                ${this.config.showHumidity?L`
                  <div class="info-row">
                    <span class="info-icon">${yt("humidity-icon.svg")}</span>
                    <span>${t.humidity}%</span>
                  </div>
                `:""}
                ${this.config.showWind?L`
                  ${this.config.showWindDirection&&null!==t.windBearing?L`
                    <div class="info-row">
                      <span class="info-icon">${yt(function(t){if(null==t)return"wind-icon.svg";const e=(t%360+360)%360,i=Math.round(e/45)%8;return dt[i]||"wind-icon.svg"}(t.windBearing))}</span>
                      <span>${function(t){if(null==t)return null;const e=Math.round(t/45)%8;return pt[e]}(t.windBearing)} ${t.windSpeed} km/h</span>
                    </div>
                  `:L`
                    <div class="info-row">
                      <span class="info-icon">${yt("wind-icon.svg")}</span>
                      <span>${t.windSpeed} km/h</span>
                    </div>
                  `}
                  ${this.config.showWindGust&&t.windGust?L`
                    <div class="info-row">
                      <span class="info-icon">${yt("wind-gust-icon.svg")}</span>
                      <span>Порывы: ${t.windGust} km/h</span>
                    </div>
                  `:""}
                `:""}
              </div>
            </div>
            ${this.config.showForecast?L`
              <div class="forecast-container">
                <div class="forecast-title">Прогноз на сегодня</div>
                ${this.renderTodayForecast()}
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}setConfig(t){if(!t.entity)throw new Error("Please define a weather entity");this.config={entity:t.entity,icons_path:t.icons_path,name:t.name,height:t.height||mt,showFeelsLike:!1!==t.show_feels_like,showWind:!1!==t.show_wind,showWindGust:!1!==t.show_wind_gust,showWindDirection:!1!==t.show_wind_direction,showHumidity:!1!==t.show_humidity,showMinTemp:!1!==t.show_min_temp,showForecast:!0===t.show_forecast}}getCardSize(){return 1}static getConfigElement(){return document.createElement("animated-weather-card-editor")}}class kt extends rt{static get properties(){return{hass:{type:Object},config:{type:Object}}}static get styles(){return a`
      .card-config {
        padding: 16px;
      }
      .option {
        padding: 4px 0;
      }
      label {
        display: flex;
        align-items: center;
        padding: 4px 0;
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
    `}setConfig(t){this.config=t||{}}render(){return this.hass?L`
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
      </div>
    `:L``}_valueChanged(t){if(!this.config)return;const e=t.target;if(e.configValue){const t=void 0!==e.checked?e.checked:e.value;""===t||null===t?delete this.config[e.configValue]:"height"===e.configValue?this.config[e.configValue]=parseInt(t)||null:this.config[e.configValue]=t}const i=new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0});this.dispatchEvent(i)}}try{customElements.define("animated-weather-card-editor",kt),customElements.define("animated-weather-card",Pt),console.log("%cAnimated Weather Card %c1.0.0","color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;","\nКрасивая анимированная карточка погоды в стиле iOS"),window.customCards=window.customCards||[],window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"Красивая анимированная карточка погоды в стиле iOS",preview:!0,documentationURL:"https://github.com/your-repo/animated-weather-card"}),console.log("✅ Animated Weather Card зарегистрирована успешно!")}catch(t){console.error("❌ Ошибка при регистрации Animated Weather Card:",t)}
