import{i as P}from"./reactive-element.ChgaCBqn.js";import{j as S,i as y,t as x,e as C,T as v,x as L,n as f,A as g}from"./property.BxkfmjrS.js";import{_ as m}from"./tslib.es6.kHcLnhpD.js";const oe=P`
  :host {
    display: block;
    text-align: left;
    box-sizing: border-box;
    max-width: 800px;
    min-width: 360px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
    border: 1px solid var(--ave-border-color);
    border-radius: var(--ave-border-radius);

    --ave-primary-color: #01579b;
    --ave-secondary-color: rgba(0, 0, 0, 0.54);
    --ave-accent-color: #d63200;
    --ave-border-color: rgba(0, 0, 0, 0.12);
    --ave-border-radius: 4px;
    --ave-header-color: #fff;
    --ave-item-color: rgba(0, 0, 0, 0.87);
    --ave-label-color: #424242;
    --ave-link-color: #01579b;
    --ave-link-hover-color: #d63200;
    --ave-tab-indicator-size: 2px;
    --ave-tab-color: rgba(0, 0, 0, 0.54);
    --ave-tag-background-color: #e2e3e5;
    --ave-tag-border-color: #d6d8db;
    --ave-tag-color: #383d41;
    --ave-monospace-font: Menlo, 'DejaVu Sans Mono', 'Liberation Mono', Consolas,
      'Courier New', monospace;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background: var(--ave-header-background, var(--ave-primary-color));
    border-top-left-radius: var(--ave-border-radius);
    border-top-right-radius: var(--ave-border-radius);
  }

  nav {
    display: flex;
    align-items: center;
  }

  [part='header-title'] {
    color: var(--ave-header-color);
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  [part='select-label'] {
    margin-left: 0.5rem;
  }

  [part='warning'] {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    header {
      flex-direction: column;
    }

    nav {
      margin-top: 0.5rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    :host {
      background: #fff;
      color: #000;
    }
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:N}=S,I=t=>t===null||typeof t!="object"&&typeof t!="function",ie=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,ne=t=>{var e;return((e=t==null?void 0:t._$litType$)===null||e===void 0?void 0:e.h)!=null},j=t=>t.strings===void 0,$=()=>document.createComment(""),re=(t,e,s)=>{var o;const i=t._$AA.parentNode,a=t._$AB;if(s===void 0){const c=i.insertBefore($(),a),n=i.insertBefore($(),a);s=new N(c,n,t,t.options)}else{const c=s._$AB.nextSibling,n=s._$AM,d=n!==t;if(d){let l;(o=s._$AQ)===null||o===void 0||o.call(s,t),s._$AM=t,s._$AP!==void 0&&(l=t._$AU)!==n._$AU&&s._$AP(l)}if(c!==a||d){let l=s._$AA;for(;l!==c;){const r=l.nextSibling;i.insertBefore(l,a),l=r}}}return s},H={},ae=(t,e=H)=>t._$AH=e,le=t=>t._$AH,ce=t=>{t._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(t,e)=>{var s,o;const i=t._$AN;if(i===void 0)return!1;for(const a of i)(o=(s=a)._$AO)===null||o===void 0||o.call(s,e,!1),u(a,e);return!0},p=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},k=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),F(e)}};function z(t){this._$AN!==void 0?(p(this),this._$AM=t,k(this)):this._$AM=t}function q(t,e=!1,s=0){const o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(o))for(let a=s;a<o.length;a++)u(o[a],!1),p(o[a]);else o!=null&&(u(o,!1),p(o));else u(this,t)}const F=t=>{var e,s,o,i;t.type==x.CHILD&&((e=(o=t)._$AP)!==null&&e!==void 0||(o._$AP=q),(s=(i=t)._$AQ)!==null&&s!==void 0||(i._$AQ=z))};let D=class extends y{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,o){super._$AT(e,s,o),k(this),this.isConnected=e._$AU}_$AO(e,s=!0){var o,i;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)===null||o===void 0||o.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),s&&(u(this,e),p(this))}setValue(e){if(j(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class U{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class B{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!==null&&e!==void 0||(this.Y=new Promise(s=>this.Z=s))}resume(){var e;(e=this.Z)===null||e===void 0||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=t=>!I(t)&&typeof t.then=="function",w=1073741823;class V extends D{constructor(){super(...arguments),this._$C_t=w,this._$Cwt=[],this._$Cq=new U(this),this._$CK=new B}render(...e){var s;return(s=e.find(o=>!A(o)))!==null&&s!==void 0?s:v}update(e,s){const o=this._$Cwt;let i=o.length;this._$Cwt=s;const a=this._$Cq,c=this._$CK;this.isConnected||this.disconnected();for(let n=0;n<s.length&&!(n>this._$C_t);n++){const d=s[n];if(!A(d))return this._$C_t=n,d;n<i&&d===o[n]||(this._$C_t=w,i=0,Promise.resolve(d).then(async l=>{for(;c.get();)await c.get();const r=a.deref();if(r!==void 0){const h=r._$Cwt.indexOf(d);h>-1&&h<r._$C_t&&(r._$C_t=h,r.setValue(l))}}))}return v}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const he=C(V);function E(t){return!!t&&Array.isArray(t.modules)&&t.modules.some(e=>{var s,o;return((s=e.exports)==null?void 0:s.some(i=>i.kind==="custom-element-definition"))||((o=e.declarations)==null?void 0:o.some(i=>i.customElement))})}const O=t=>t.kind==="custom-element-definition",Y=t=>t.customElement,T=t=>!(t.privacy==="private"||t.privacy==="protected");async function G(t){try{const s=await(await fetch(t)).json();if(E(s))return s;throw new Error(`No element definitions found at ${t}`)}catch(e){return console.error(e),null}}function ue(t,e){const s=(t.modules??[]).flatMap(o=>{var i;return((i=o.exports)==null?void 0:i.filter(O))??[]});return e?s.filter(o=>e.includes(o.name)):s}const fe=(t,e,s)=>{var d,l;const o=s?e.findIndex(r=>(r==null?void 0:r.name)===s):0,i=e[o];if(!i)return null;const{name:a,module:c}=i.declaration,n=c?(l=(d=t.modules.find(r=>r.path===c.replace(/^\//,"")))==null?void 0:d.declarations)==null?void 0:l.find(r=>r.name===a):t.modules.flatMap(r=>r.declarations).find(r=>(r==null?void 0:r.name)===a);if(!n||!Y(n))throw new Error(`Could not find declaration for ${s}`);return{customElement:!0,name:i.name,description:n==null?void 0:n.description,slots:n.slots??[],attributes:n.attributes??[],members:n.members??[],events:n.events??[],cssParts:n.cssParts??[],cssProperties:[...n.cssProperties??[]].sort((r,h)=>r.name>h.name?1:-1)}},me=(t=[])=>t.filter(e=>e.kind==="field"&&T(e)),pe=(t=[])=>t.filter(e=>e.kind==="method"&&T(e)),ve=L`
  <div part="warning">No custom elements found in the JSON file.</div>
`,be=t=>{class e extends t{constructor(){super(...arguments),this.jsonFetched=Promise.resolve(null)}willUpdate(){const{src:o}=this;this.manifest?E(this.manifest)?(this.lastSrc=void 0,this.jsonFetched=Promise.resolve(this.manifest)):console.error("No custom elements found in the `manifest` object."):o&&this.lastSrc!==o&&(this.lastSrc=o,this.jsonFetched=G(o))}}return m([f()],e.prototype,"src",void 0),m([f({attribute:!1})],e.prototype,"manifest",void 0),m([f({reflect:!0,converter:{fromAttribute:s=>s.split(","),toAttribute:s=>s.join(",")}})],e.prototype,"only",void 0),m([f()],e.prototype,"selected",void 0),e},_e=t=>typeof t=="string"&&t.startsWith("'")&&t.endsWith("'")?t.slice(1,t.length-1):t;function _(t,...e){const s=document.createElement("template");return s.innerHTML=e.reduce((o,i,a)=>o+i+t[a+1],t[0]),s}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class b extends y{constructor(e){if(super(e),this.et=g,e.type!==x.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this.ft=void 0,this.et=e;if(e===v)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const s=[e];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}b.directiveName="unsafeHTML",b.resultType=1;const ge=C(b);let K=0;const Z=_`
  <style>
    :host {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      box-sizing: border-box;
      position: relative;
      max-width: 150px;
      overflow: hidden;
      min-height: 3rem;
      padding: 0 1rem;
      color: var(--ave-tab-color);
      font-size: 0.875rem;
      line-height: 1.2;
      font-weight: 500;
      text-transform: uppercase;
      outline: none;
      cursor: pointer;
      -webkit-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--ave-tab-indicator-size);
      background-color: var(--ave-primary-color);
      opacity: 0;
    }

    :host([selected]) {
      color: var(--ave-tab-selected-color, var(--ave-primary-color));
    }

    :host([selected])::before {
      opacity: 1;
    }

    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--ave-primary-color);
      opacity: 0;
      transition: opacity 0.1s linear;
    }

    :host(:hover)::after {
      opacity: 0.08;
    }

    :host([focus-ring])::after {
      opacity: 0.12;
    }

    :host([active])::after {
      opacity: 0.16;
    }

    @media (max-width: 600px) {
      :host {
        justify-content: center;
        text-align: center;
      }

      :host::before {
        top: auto;
        right: 0;
        width: 100%;
        height: var(--ave-tab-indicator-size);
      }
    }
  </style>
  <slot></slot>
`;class M extends HTMLElement{get selected(){return this._selected}set selected(e){this._selected=e,this.setAttribute("aria-selected",String(e)),this.setAttribute("tabindex",e?"0":"-1"),this.toggleAttribute("selected",e)}constructor(){super(),this._mousedown=!1,this._selected=!1,this.attachShadow({mode:"open"}).appendChild(Z.content.cloneNode(!0)),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>{this._setFocused(!1),this._setActive(!1)},!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const s=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",s)};document.addEventListener("mouseup",s)})}connectedCallback(){this.setAttribute("role","tab"),this.id||(this.id=`api-viewer-tab-${K++}`)}_setActive(e){this.toggleAttribute("active",e)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&!this._mousedown)}}customElements.define("api-viewer-tab",M);let Q=0;const R=_`
  <style>
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
    }

    :host([hidden]) {
      display: none !important;
    }
  </style>
  <slot></slot>
`;class W extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(R.content.cloneNode(!0))}connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id=`api-viewer-panel-${Q++}`)}}customElements.define("api-viewer-panel",W);const J=_`
  <style>
    :host {
      display: flex;
      border-bottom-left-radius: var(--ave-border-radius);
      overflow: hidden;
    }

    @media (max-width: 600px) {
      :host {
        flex-direction: column;
      }

      .tabs {
        display: flex;
        flex-grow: 1;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  </style>
  <div class="tabs">
    <slot name="tab"></slot>
  </div>
  <slot name="panel"></slot>
`;class X extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(J.content.cloneNode(!0));const s=e.querySelectorAll("slot");s[0].addEventListener("slotchange",()=>this._linkPanels()),s[1].addEventListener("slotchange",()=>this._linkPanels()),this.addEventListener("keydown",this.handleEvent),this.addEventListener("click",this.handleEvent)}connectedCallback(){this.setAttribute("role","tablist"),requestAnimationFrame(()=>{this._linkPanels()})}_linkPanels(){const{tabs:e}=this;e.forEach(o=>{const i=o.nextElementSibling;o.setAttribute("aria-controls",i.id),i.setAttribute("aria-labelledby",o.id)});const s=e.find(o=>o.selected)||e[0];this._selectTab(s)}get tabs(){return Array.from(this.querySelectorAll("api-viewer-tab"))}_getAvailableIndex(e,s){const{tabs:o}=this,i=o.length;for(let a=0;typeof e=="number"&&a<i;a++,e+=s||1)if(e<0?e=i-1:e>=i&&(e=0),!o[e].hasAttribute("hidden"))return e;return-1}_prevTab(e){const s=this._getAvailableIndex(e.findIndex(o=>o.selected)-1,-1);return e[(s+e.length)%e.length]}_nextTab(e){const s=this._getAvailableIndex(e.findIndex(o=>o.selected)+1,1);return e[s%e.length]}reset(){this.tabs.forEach(e=>{e.selected=!1}),this.querySelectorAll("api-viewer-panel").forEach(e=>{e.hidden=!0})}selectFirst(){const e=this._getAvailableIndex(0,1);this._selectTab(this.tabs[e%this.tabs.length])}_selectTab(e){this.reset();const s=e.getAttribute("aria-controls"),o=this.querySelector(`#${s}`);o&&(e.selected=!0,o.hidden=!1)}handleEvent(e){const{target:s}=e;if(s&&s instanceof M){let o;if(e.type==="keydown"){const{tabs:i}=this;switch(e.key){case"ArrowLeft":case"ArrowUp":o=this._prevTab(i);break;case"ArrowDown":case"ArrowRight":o=this._nextTab(i);break;case"Home":o=i[0];break;case"End":o=i[i.length-1];break;default:return}e.preventDefault()}else o=s;this._selectTab(o),o.focus()}}}customElements.define("api-viewer-tabs",X);export{be as M,fe as a,me as b,pe as c,le as d,ve as e,ae as f,ue as g,E as h,re as i,ce as j,he as m,ge as o,oe as s,ie as t,_e as u,ne as v};
