import{f as Me,p as Be,h as st,i as fe,T as De,x as D}from"./chain-of-custody-client.DEyvJWv5.js";import{a as m,s as He,t as Ne,n as Fe}from"./property.5EqHb6rU.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ve=class{constructor(e){this.__litLocalizeEventHandler=i=>{i.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Gt,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Gt,this.__litLocalizeEventHandler)}};const Ie=t=>t.addController(new Ve(t)),je=Ie;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mo=()=>(t,e)=>(t.addInitializer(je),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ue=t=>(...e)=>({_$litDirective$:t,values:e});let qe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};function wo(t){return{attribute:t,type:Object,hasChanged:(e,i)=>(e==null?void 0:e.toString())!==(i==null?void 0:i.toString()),converter:{fromAttribute:e=>e&&e.length>0&&Be(e),toAttribute:e=>e&&Me(e)},reflect:!0}}function Ye(t){return`data:image/svg+xml;utf8,${Ze(t)}`}function Ze(t){return encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`)}var yo="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",Xe="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",bo="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z",xo="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z",Co="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z",Ao="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",Eo="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ke(t){return m({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t,e){return(i,o,r)=>{const n=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return Ge(i,o,{get(){return n(this)}})}}var At=st`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ge=Object.defineProperty,Je=Object.defineProperties,Qe=Object.getOwnPropertyDescriptor,ti=Object.getOwnPropertyDescriptors,Jt=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,ii=Object.prototype.propertyIsEnumerable,Ot=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Vt=t=>{throw TypeError(t)},Qt=(t,e,i)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Et=(t,e)=>{for(var i in e||(e={}))ei.call(e,i)&&Qt(t,i,e[i]);if(Jt)for(var i of Jt(e))ii.call(e,i)&&Qt(t,i,e[i]);return t},me=(t,e)=>Je(t,ti(e)),f=(t,e,i,o)=>{for(var r=o>1?void 0:o?Qe(e,i):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&ge(e,i,r),r},ve=(t,e,i)=>e.has(t)||Vt("Cannot "+i),oi=(t,e,i)=>(ve(t,e,"read from private field"),e.get(t)),ri=(t,e,i)=>e.has(t)?Vt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ni=(t,e,i,o)=>(ve(t,e,"write to private field"),e.set(t,i),i),si=function(t,e){this[0]=t,this[1]=e},_o=t=>{var e=t[Ot("asyncIterator")],i=!1,o,r={};return e==null?(e=t[Ot("iterator")](),o=n=>r[n]=s=>e[n](s)):(e=e.call(t),o=n=>r[n]=s=>{if(i){if(i=!1,n==="throw")throw s;return s}return i=!0,{done:!1,value:new si(new Promise(a=>{var l=e[n](s);l instanceof Object||Vt("Object expected"),a(l)}),1)}}),r[Ot("iterator")]=()=>r,o("next"),"throw"in e?o("throw"):r.throw=n=>{throw n},"return"in e&&o("return"),r},wt,G=class extends fe{constructor(){super(),ri(this,wt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Et({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",n=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(n=" v"+o.version),!(r&&n&&r===n)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,i){oi(this,wt)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),ni(this,wt,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};wt=new WeakMap;G.version="2.20.1";G.dependencies={};f([m()],G.prototype,"dir",2);f([m()],G.prototype,"lang",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=Ue(class extends qe{constructor(t){var e;if(super(t),t.type!==We.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(e)}const i=t.element.classList;for(const n of this.st)n in e||(i.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(s?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return De}});var Mt="";function te(t){Mt=t}function ai(t=""){if(!Mt){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)te(i.getAttribute("data-shoelace"));else{const o=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let r="";o&&(r=o.getAttribute("src")),te(r.split("/").slice(0,-1).join("/"))}}return Mt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var li={name:"default",resolver:t=>ai(`assets/icons/${t}.svg`)},ci=li,ee={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},hi={name:"system",resolver:t=>t in ee?`data:image/svg+xml,${encodeURIComponent(ee[t])}`:""},di=hi,ui=[ci,di],Bt=[];function pi(t){Bt.push(t)}function fi(t){Bt=Bt.filter(e=>e!==t)}function ie(t){return ui.find(e=>e.name===t)}var gi=st`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function pt(t,e){const i=Et({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:n}=o,s=Array.isArray(t)?t:[t];o.update=function(a){s.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),u=this[c];h!==u&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,u)}}),n.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,Lo=t=>t.strings===void 0,vi={},So=(t,e=vi)=>t._$AH=e;var ht=Symbol(),mt=Symbol(),zt,Rt=new Map,j=class extends G{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet)return this.svg=D`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?ht:mt}catch{return mt}try{const r=document.createElement("div");r.innerHTML=await o.text();const n=r.firstElementChild;if(((i=n==null?void 0:n.tagName)==null?void 0:i.toLowerCase())!=="svg")return ht;zt||(zt=new DOMParser);const a=zt.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ht}catch{return ht}}connectedCallback(){super.connectedCallback(),pi(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),fi(this)}getIconSource(){const t=ie(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?ie(this.library):void 0;if(!e){this.svg=null;return}let r=Rt.get(e);if(r||(r=this.resolveIcon(e,o),Rt.set(e,r)),!this.initialRender)return;const n=await r;if(n===mt&&Rt.delete(e),e===this.getIconSource().url){if(mi(n)){if(this.svg=n,o){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&s&&o.mutator(s)}return}switch(n){case mt:case ht:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};j.styles=[At,gi];f([Ke()],j.prototype,"svg",2);f([m({reflect:!0})],j.prototype,"name",2);f([m()],j.prototype,"src",2);f([m()],j.prototype,"label",2);f([m({reflect:!0})],j.prototype,"library",2);f([pt("label")],j.prototype,"handleLabelChange",1);f([pt(["name","src","library"])],j.prototype,"setIcon",1);j.define("sl-icon");var wi=st`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,yi=st`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Dt=new Set,ot=new Map;let J,It="ltr",jt="en";const we=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(we){const t=new MutationObserver(be);It=document.documentElement.dir||"ltr",jt=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ye(...t){t.map(e=>{const i=e.$code.toLowerCase();ot.has(i)?ot.set(i,Object.assign(Object.assign({},ot.get(i)),e)):ot.set(i,e),J||(J=e)}),be()}function be(){we&&(It=document.documentElement.dir||"ltr",jt=document.documentElement.lang||navigator.language),[...Dt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let bi=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Dt.add(this.host)}hostDisconnected(){Dt.delete(this.host)}dir(){return`${this.host.dir||It}`.toLowerCase()}lang(){return`${this.host.lang||jt}`.toLowerCase()}getTranslationData(e){var i,o;const r=new Intl.Locale(e.replace(/_/g,"-")),n=r==null?void 0:r.language.toLowerCase(),s=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",a=ot.get(`${n}-${s}`),l=ot.get(n);return{locale:r,language:n,region:s,primary:a,secondary:l}}exists(e,i){var o;const{primary:r,secondary:n}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||n&&n[e]||i.includeFallback&&J&&J[e])}term(e,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(r&&r[e])n=r[e];else if(J&&J[e])n=J[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...i):n}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var xe={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ye(xe);var xi=xe,Wt=class extends bi{};ye(xi);const Z=Math.min,P=Math.max,bt=Math.round,vt=Math.floor,H=t=>({x:t,y:t}),Ci={left:"right",right:"left",bottom:"top",top:"bottom"},Ai={start:"end",end:"start"};function Ht(t,e,i){return P(t,Z(e,i))}function at(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function lt(t){return t.split("-")[1]}function Ce(t){return t==="x"?"y":"x"}function Ut(t){return t==="y"?"height":"width"}function Q(t){return["top","bottom"].includes(X(t))?"y":"x"}function qt(t){return Ce(Q(t))}function Ei(t,e,i){i===void 0&&(i=!1);const o=lt(t),r=qt(t),n=Ut(r);let s=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=xt(s)),[s,xt(s)]}function _i(t){const e=xt(t);return[Nt(t),e,Nt(e)]}function Nt(t){return t.replace(/start|end/g,e=>Ai[e])}function Li(t,e,i){const o=["left","right"],r=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return i?e?r:o:e?o:r;case"left":case"right":return e?n:s;default:return[]}}function Si(t,e,i,o){const r=lt(t);let n=Li(X(t),i==="start",o);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(Nt)))),n}function xt(t){return t.replace(/left|right|bottom|top/g,e=>Ci[e])}function Pi(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ae(t){return typeof t!="number"?Pi(t):{top:t,right:t,bottom:t,left:t}}function Ct(t){const{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function oe(t,e,i){let{reference:o,floating:r}=t;const n=Q(e),s=qt(e),a=Ut(s),l=X(e),c=n==="y",h=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,g=o[a]/2-r[a]/2;let d;switch(l){case"top":d={x:h,y:o.y-r.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(lt(e)){case"start":d[s]-=g*(i&&c?-1:1);break;case"end":d[s]+=g*(i&&c?-1:1);break}return d}const Oi=async(t,e,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:s}=i,a=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:u}=oe(c,o,l),g=o,d={},p=0;for(let v=0;v<a.length;v++){const{name:y,fn:w}=a[v],{x:b,y:x,data:E,reset:A}=await w({x:h,y:u,initialPlacement:o,placement:g,strategy:r,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});h=b??h,u=x??u,d={...d,[y]:{...d[y],...E}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(g=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:h,y:u}=oe(c,g,l)),v=-1)}return{x:h,y:u,placement:g,strategy:r,middlewareData:d}};async function Yt(t,e){var i;e===void 0&&(e={});const{x:o,y:r,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:g=!1,padding:d=0}=at(e,t),p=Ae(d),y=a[g?u==="floating"?"reference":"floating":u],w=Ct(await n.getClippingRect({element:(i=await(n.isElement==null?void 0:n.isElement(y)))==null||i?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),b=u==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),E=await(n.isElement==null?void 0:n.isElement(x))?await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1}:{x:1,y:1},A=Ct(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:x,strategy:l}):b);return{top:(w.top-A.top+p.top)/E.y,bottom:(A.bottom-w.bottom+p.bottom)/E.y,left:(w.left-A.left+p.left)/E.x,right:(A.right-w.right+p.right)/E.x}}const zi=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:r,rects:n,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=at(t,e)||{};if(c==null)return{};const u=Ae(h),g={x:i,y:o},d=qt(r),p=Ut(d),v=await s.getDimensions(c),y=d==="y",w=y?"top":"left",b=y?"bottom":"right",x=y?"clientHeight":"clientWidth",E=n.reference[p]+n.reference[d]-g[d]-n.floating[p],A=g[d]-n.reference[d],z=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let L=z?z[x]:0;(!L||!await(s.isElement==null?void 0:s.isElement(z)))&&(L=a.floating[x]||n.floating[p]);const V=E/2-A/2,T=L/2-v[p]/2-1,R=Z(u[w],T),W=Z(u[b],T),M=R,U=L-v[p]-W,S=L/2-v[p]/2+V,it=Ht(M,S,U),I=!l.arrow&&lt(r)!=null&&S!==it&&n.reference[p]/2-(S<M?R:W)-v[p]/2<0,B=I?S<M?S-M:S-U:0;return{[d]:g[d]+B,data:{[d]:it,centerOffset:S-it-B,...I&&{alignmentOffset:B}},reset:I}}}),Ri=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:r,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:v=!0,...y}=at(t,e);if((i=n.arrow)!=null&&i.alignmentOffset)return{};const w=X(r),b=Q(a),x=X(a)===a,E=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=g||(x||!v?[xt(a)]:_i(a)),z=p!=="none";!g&&z&&A.push(...Si(a,v,p,E));const L=[a,...A],V=await Yt(e,y),T=[];let R=((o=n.flip)==null?void 0:o.overflows)||[];if(h&&T.push(V[w]),u){const S=Ei(r,s,E);T.push(V[S[0]],V[S[1]])}if(R=[...R,{placement:r,overflows:T}],!T.every(S=>S<=0)){var W,M;const S=(((W=n.flip)==null?void 0:W.index)||0)+1,it=L[S];if(it)return{data:{index:S,overflows:R},reset:{placement:it}};let I=(M=R.filter(B=>B.overflows[0]<=0).sort((B,q)=>B.overflows[1]-q.overflows[1])[0])==null?void 0:M.placement;if(!I)switch(d){case"bestFit":{var U;const B=(U=R.filter(q=>{if(z){const Y=Q(q.placement);return Y===b||Y==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(Y=>Y>0).reduce((Y,Te)=>Y+Te,0)]).sort((q,Y)=>q[1]-Y[1])[0])==null?void 0:U[0];B&&(I=B);break}case"initialPlacement":I=a;break}if(r!==I)return{reset:{placement:I}}}return{}}}};async function ki(t,e){const{placement:i,platform:o,elements:r}=t,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=X(i),a=lt(i),l=Q(i)==="y",c=["left","top"].includes(s)?-1:1,h=n&&l?-1:1,u=at(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof p=="number"&&(d=a==="end"?p*-1:p),l?{x:d*h,y:g*c}:{x:g*c,y:d*h}}const $i=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:r,y:n,placement:s,middlewareData:a}=e,l=await ki(e,t);return s===((i=a.offset)==null?void 0:i.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:s}}}}},Ti=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:r}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:w,y:b}=y;return{x:w,y:b}}},...l}=at(t,e),c={x:i,y:o},h=await Yt(e,l),u=Q(X(r)),g=Ce(u);let d=c[g],p=c[u];if(n){const y=g==="y"?"top":"left",w=g==="y"?"bottom":"right",b=d+h[y],x=d-h[w];d=Ht(b,d,x)}if(s){const y=u==="y"?"top":"left",w=u==="y"?"bottom":"right",b=p+h[y],x=p-h[w];p=Ht(b,p,x)}const v=a.fn({...e,[g]:d,[u]:p});return{...v,data:{x:v.x-i,y:v.y-o,enabled:{[g]:n,[u]:s}}}}}},Mi=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:r,rects:n,platform:s,elements:a}=e,{apply:l=()=>{},...c}=at(t,e),h=await Yt(e,c),u=X(r),g=lt(r),d=Q(r)==="y",{width:p,height:v}=n.floating;let y,w;u==="top"||u==="bottom"?(y=u,w=g===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(w=u,y=g==="end"?"top":"bottom");const b=v-h.top-h.bottom,x=p-h.left-h.right,E=Z(v-h[y],b),A=Z(p-h[w],x),z=!e.middlewareData.shift;let L=E,V=A;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(V=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=b),z&&!g){const R=P(h.left,0),W=P(h.right,0),M=P(h.top,0),U=P(h.bottom,0);d?V=p-2*(R!==0||W!==0?R+W:P(h.left,h.right)):L=v-2*(M!==0||U!==0?M+U:P(h.top,h.bottom))}await l({...e,availableWidth:V,availableHeight:L});const T=await s.getDimensions(a.floating);return p!==T.width||v!==T.height?{reset:{rects:!0}}:{}}}};function _t(){return typeof window<"u"}function ct(t){return Ee(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){var e;return(e=(Ee(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ee(t){return _t()?t instanceof Node||t instanceof O(t).Node:!1}function k(t){return _t()?t instanceof Element||t instanceof O(t).Element:!1}function N(t){return _t()?t instanceof HTMLElement||t instanceof O(t).HTMLElement:!1}function re(t){return!_t()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function ft(t){const{overflow:e,overflowX:i,overflowY:o,display:r}=$(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(r)}function Bi(t){return["table","td","th"].includes(ct(t))}function Lt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function St(t){const e=Zt(),i=k(t)?$(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>i[o]?i[o]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Di(t){let e=K(t);for(;N(e)&&!nt(e);){if(St(e))return e;if(Lt(e))return null;e=K(e)}return null}function Zt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(ct(t))}function $(t){return O(t).getComputedStyle(t)}function Pt(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function K(t){if(ct(t)==="html")return t;const e=t.assignedSlot||t.parentNode||re(t)&&t.host||F(t);return re(e)?e.host:e}function _e(t){const e=K(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&ft(e)?e:_e(e)}function dt(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=_e(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),s=O(r);if(n){const a=Ft(s);return e.concat(s,s.visualViewport||[],ft(r)?r:[],a&&i?dt(a):[])}return e.concat(r,dt(r,[],i))}function Ft(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Le(t){const e=$(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=N(t),n=r?t.offsetWidth:i,s=r?t.offsetHeight:o,a=bt(i)!==n||bt(o)!==s;return a&&(i=n,o=s),{width:i,height:o,$:a}}function Xt(t){return k(t)?t:t.contextElement}function rt(t){const e=Xt(t);if(!N(e))return H(1);const i=e.getBoundingClientRect(),{width:o,height:r,$:n}=Le(e);let s=(n?bt(i.width):i.width)/o,a=(n?bt(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Hi=H(0);function Se(t){const e=O(t);return!Zt()||!e.visualViewport?Hi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ni(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==O(t)?!1:e}function tt(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),n=Xt(t);let s=H(1);e&&(o?k(o)&&(s=rt(o)):s=rt(t));const a=Ni(n,i,o)?Se(n):H(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,h=r.width/s.x,u=r.height/s.y;if(n){const g=O(n),d=o&&k(o)?O(o):o;let p=g,v=Ft(p);for(;v&&o&&d!==p;){const y=rt(v),w=v.getBoundingClientRect(),b=$(v),x=w.left+(v.clientLeft+parseFloat(b.paddingLeft))*y.x,E=w.top+(v.clientTop+parseFloat(b.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,u*=y.y,l+=x,c+=E,p=O(v),v=Ft(p)}}return Ct({width:h,height:u,x:l,y:c})}function Kt(t,e){const i=Pt(t).scrollLeft;return e?e.left+i:tt(F(t)).left+i}function Pe(t,e,i){i===void 0&&(i=!1);const o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-(i?0:Kt(t,o)),n=o.top+e.scrollTop;return{x:r,y:n}}function Fi(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t;const n=r==="fixed",s=F(o),a=e?Lt(e.floating):!1;if(o===s||a&&n)return i;let l={scrollLeft:0,scrollTop:0},c=H(1);const h=H(0),u=N(o);if((u||!u&&!n)&&((ct(o)!=="body"||ft(s))&&(l=Pt(o)),N(o))){const d=tt(o);c=rt(o),h.x=d.x+o.clientLeft,h.y=d.y+o.clientTop}const g=s&&!u&&!n?Pe(s,l,!0):H(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x+g.x,y:i.y*c.y-l.scrollTop*c.y+h.y+g.y}}function Vi(t){return Array.from(t.getClientRects())}function Ii(t){const e=F(t),i=Pt(t),o=t.ownerDocument.body,r=P(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=P(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+Kt(t);const a=-i.scrollTop;return $(o).direction==="rtl"&&(s+=P(e.clientWidth,o.clientWidth)-r),{width:r,height:n,x:s,y:a}}function ji(t,e){const i=O(t),o=F(t),r=i.visualViewport;let n=o.clientWidth,s=o.clientHeight,a=0,l=0;if(r){n=r.width,s=r.height;const c=Zt();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:n,height:s,x:a,y:l}}function Wi(t,e){const i=tt(t,!0,e==="fixed"),o=i.top+t.clientTop,r=i.left+t.clientLeft,n=N(t)?rt(t):H(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,l=r*n.x,c=o*n.y;return{width:s,height:a,x:l,y:c}}function ne(t,e,i){let o;if(e==="viewport")o=ji(t,i);else if(e==="document")o=Ii(F(t));else if(k(e))o=Wi(e,i);else{const r=Se(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Ct(o)}function Oe(t,e){const i=K(t);return i===e||!k(i)||nt(i)?!1:$(i).position==="fixed"||Oe(i,e)}function Ui(t,e){const i=e.get(t);if(i)return i;let o=dt(t,[],!1).filter(a=>k(a)&&ct(a)!=="body"),r=null;const n=$(t).position==="fixed";let s=n?K(t):t;for(;k(s)&&!nt(s);){const a=$(s),l=St(s);!l&&a.position==="fixed"&&(r=null),(n?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ft(s)&&!l&&Oe(t,s))?o=o.filter(h=>h!==s):r=a,s=K(s)}return e.set(t,o),o}function qi(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t;const s=[...i==="clippingAncestors"?Lt(e)?[]:Ui(e,this._c):[].concat(i),o],a=s[0],l=s.reduce((c,h)=>{const u=ne(e,h,r);return c.top=P(u.top,c.top),c.right=Z(u.right,c.right),c.bottom=Z(u.bottom,c.bottom),c.left=P(u.left,c.left),c},ne(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Yi(t){const{width:e,height:i}=Le(t);return{width:e,height:i}}function Zi(t,e,i){const o=N(e),r=F(e),n=i==="fixed",s=tt(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=H(0);if(o||!o&&!n)if((ct(e)!=="body"||ft(r))&&(a=Pt(e)),o){const g=tt(e,!0,n,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else r&&(l.x=Kt(r));const c=r&&!o&&!n?Pe(r,a):H(0),h=s.left+a.scrollLeft-l.x-c.x,u=s.top+a.scrollTop-l.y-c.y;return{x:h,y:u,width:s.width,height:s.height}}function kt(t){return $(t).position==="static"}function se(t,e){if(!N(t)||$(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return F(t)===i&&(i=i.ownerDocument.body),i}function ze(t,e){const i=O(t);if(Lt(t))return i;if(!N(t)){let r=K(t);for(;r&&!nt(r);){if(k(r)&&!kt(r))return r;r=K(r)}return i}let o=se(t,e);for(;o&&Bi(o)&&kt(o);)o=se(o,e);return o&&nt(o)&&kt(o)&&!St(o)?i:o||Di(t)||i}const Xi=async function(t){const e=this.getOffsetParent||ze,i=this.getDimensions,o=await i(t.floating);return{reference:Zi(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ki(t){return $(t).direction==="rtl"}const yt={convertOffsetParentRelativeRectToViewportRelativeRect:Fi,getDocumentElement:F,getClippingRect:qi,getOffsetParent:ze,getElementRects:Xi,getClientRects:Vi,getDimensions:Yi,getScale:rt,isElement:k,isRTL:Ki};function Re(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Gi(t,e){let i=null,o;const r=F(t);function n(){var a;clearTimeout(o),(a=i)==null||a.disconnect(),i=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const c=t.getBoundingClientRect(),{left:h,top:u,width:g,height:d}=c;if(a||e(),!g||!d)return;const p=vt(u),v=vt(r.clientWidth-(h+g)),y=vt(r.clientHeight-(u+d)),w=vt(h),x={rootMargin:-p+"px "+-v+"px "+-y+"px "+-w+"px",threshold:P(0,Z(1,l))||1};let E=!0;function A(z){const L=z[0].intersectionRatio;if(L!==l){if(!E)return s();L?s(!1,L):o=setTimeout(()=>{s(!1,1e-7)},1e3)}L===1&&!Re(c,t.getBoundingClientRect())&&s(),E=!1}try{i=new IntersectionObserver(A,{...x,root:r.ownerDocument})}catch{i=new IntersectionObserver(A,x)}i.observe(t)}return s(!0),n}function Ji(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=Xt(t),h=r||n?[...c?dt(c):[],...dt(e)]:[];h.forEach(w=>{r&&w.addEventListener("scroll",i,{passive:!0}),n&&w.addEventListener("resize",i)});const u=c&&a?Gi(c,i):null;let g=-1,d=null;s&&(d=new ResizeObserver(w=>{let[b]=w;b&&b.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=d)==null||x.observe(e)})),i()}),c&&!l&&d.observe(c),d.observe(e));let p,v=l?tt(t):null;l&&y();function y(){const w=tt(t);v&&!Re(v,w)&&i(),v=w,p=requestAnimationFrame(y)}return i(),()=>{var w;h.forEach(b=>{r&&b.removeEventListener("scroll",i),n&&b.removeEventListener("resize",i)}),u==null||u(),(w=d)==null||w.disconnect(),d=null,l&&cancelAnimationFrame(p)}}const Qi=$i,to=Ti,eo=Ri,ae=Mi,io=zi,oo=(t,e,i)=>{const o=new Map,r={platform:yt,...i},n={...r.platform,_c:o};return Oi(t,e,{...r,platform:n})};function ro(t){return no(t)}function $t(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function no(t){for(let e=t;e;e=$t(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=$t(t);e;e=$t(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||St(i)||e.tagName==="BODY"))return e}return null}function so(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var C=class extends G{constructor(){super(...arguments),this.localize=new Wt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,n=0,s=0,a=0,l=0,c=0,h=0;i?t.top<e.top?(o=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(o=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(o=t.right,r=t.top,n=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(o=e.right,r=e.top,n=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||so(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Ji(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Qi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(ae({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(eo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(to({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(ae({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(io({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>yt.getOffsetParent(i,ro):yt.getOffsetParent;oo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:me(Et({},yt),{getOffsetParent:e})}).then(({x:i,y:o,middlewareData:r,placement:n})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let h="",u="",g="",d="";if(this.arrowPlacement==="start"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=s?p:"",d=s?"":p}else if(this.arrowPlacement==="end"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=s?"":p,d=s?p:"",g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(d=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(d=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:g,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return D`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Tt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Tt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?D`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[At,yi];f([ut(".popup")],C.prototype,"popup",2);f([ut(".popup__arrow")],C.prototype,"arrowEl",2);f([m()],C.prototype,"anchor",2);f([m({type:Boolean,reflect:!0})],C.prototype,"active",2);f([m({reflect:!0})],C.prototype,"placement",2);f([m({reflect:!0})],C.prototype,"strategy",2);f([m({type:Number})],C.prototype,"distance",2);f([m({type:Number})],C.prototype,"skidding",2);f([m({type:Boolean})],C.prototype,"arrow",2);f([m({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);f([m({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);f([m({type:Boolean})],C.prototype,"flip",2);f([m({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);f([m({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);f([m({type:Object})],C.prototype,"flipBoundary",2);f([m({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);f([m({type:Boolean})],C.prototype,"shift",2);f([m({type:Object})],C.prototype,"shiftBoundary",2);f([m({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);f([m({attribute:"auto-size"})],C.prototype,"autoSize",2);f([m()],C.prototype,"sync",2);f([m({type:Object})],C.prototype,"autoSizeBoundary",2);f([m({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);f([m({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var ke=new Map,ao=new WeakMap;function lo(t){return t??{keyframes:[],options:{duration:0}}}function le(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function $e(t,e){ke.set(t,lo(e))}function ce(t,e,i){const o=ao.get(t);if(o!=null&&o[e])return le(o[e],i.dir);const r=ke.get(e);return r?le(r,i.dir):{keyframes:[],options:{duration:0}}}function he(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function de(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,me(Et({},i),{duration:co()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function ue(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function co(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function pe(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}var _=class extends G{constructor(){super(),this.localize=new Wt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=ue(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=ue(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await pe(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:o}=ce(this,"tooltip.show",{dir:this.localize.dir()});await de(this.popup.popup,i,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await pe(this.body);const{keyframes:i,options:o}=ce(this,"tooltip.hide",{dir:this.localize.dir()});await de(this.popup.popup,i,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,he(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,he(this,"sl-after-hide")}render(){return D`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Tt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};_.styles=[At,wi];_.dependencies={"sl-popup":C};f([ut("slot:not([name])")],_.prototype,"defaultSlot",2);f([ut(".tooltip__body")],_.prototype,"body",2);f([ut("sl-popup")],_.prototype,"popup",2);f([m()],_.prototype,"content",2);f([m()],_.prototype,"placement",2);f([m({type:Boolean,reflect:!0})],_.prototype,"disabled",2);f([m({type:Number})],_.prototype,"distance",2);f([m({type:Boolean,reflect:!0})],_.prototype,"open",2);f([m({type:Number})],_.prototype,"skidding",2);f([m()],_.prototype,"trigger",2);f([m({type:Boolean})],_.prototype,"hoist",2);f([pt("open",{waitUntilFirstUpdate:!0})],_.prototype,"handleOpenChange",1);f([pt(["content","distance","hoist","placement","skidding"])],_.prototype,"handleOptionsChange",1);f([pt("disabled")],_.prototype,"handleDisabledChange",1);$e("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});$e("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});_.define("sl-tooltip");var gt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let et=class extends fe{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return D`
			<sl-icon
				style="color: red; height: ${this._iconSize}; width: ${this._iconSize};"
				src="${Ye(Xe)}"
			></sl-icon>
		`}renderFull(){return D` <div class="column center-content" style="flex: 1; gap: 8px">
			${this.renderIcon()}
			<div style="max-width: 500px; text-align: center" class="column">
				${this.headline?D` <span style="margin-bottom: 8px">${this.headline} </span>`:D``}
				<span class="placeholder"
					>${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
				</span>
			</div>
		</div>`}renderTooltip(){return D`
			<sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
				${this.renderIcon()}</sl-tooltip
			>
		`}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};et.styles=[He,st`
			:host {
				display: flex;
			}
		`];gt([m({attribute:"tooltip"})],et.prototype,"tooltip",void 0);gt([m()],et.prototype,"headline",void 0);gt([m()],et.prototype,"error",void 0);gt([m({attribute:"icon-size"})],et.prototype,"iconSize",void 0);et=gt([Ne("display-error")],et);var ho=st`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,uo=class extends G{constructor(){super(...arguments),this.localize=new Wt(this)}render(){return D`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};uo.styles=[At,ho];var zo=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const Ro=Fe("chain_of_custody/store");export{We as A,yo as B,Co as C,Lo as D,So as E,zo as H,Wt as L,uo as S,f as _,Xe as a,G as b,Ro as c,bo as d,xo as e,Eo as f,At as g,wo as h,Tt as i,ut as j,pt as k,mo as l,Ao as m,pe as n,ce as o,de as p,he as q,Ke as r,$e as s,_o as t,me as u,Et as v,Ye as w,j as x,Ue as y,qe as z};
