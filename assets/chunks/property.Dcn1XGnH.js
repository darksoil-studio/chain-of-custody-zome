var b=Object.defineProperty;var p=(e,t,s)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var l=(e,t,s)=>p(e,typeof t!="symbol"?t+"":t,s);import{S as u,h as f,n as x,u as m}from"./chain-of-custody-client.BqnHCiTp.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=class extends Event{constructor(t,s,c,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=s,this.callback=c,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e){return e}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d{constructor(t,s,c,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,a)),this.unsubscribe=a},this.host=t,s.context!==void 0){const r=s;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=s,this.callback=c,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new v(this.context,this.host,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q({context:e,subscribe:t}){return(s,c)=>{typeof c=="object"?c.addInitializer(function(){new d(this,{context:e,callback:i=>{s.set.call(this,i)},subscribe:t})}):s.constructor.addInitializer(i=>{new d(i,{context:e,callback:r=>{i[c]=r},subscribe:t})})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(e){class t extends e{constructor(){super(...arguments);l(this,"__dispose");l(this,"w",new u.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const i=this.__dispose,r=new u.Computed(()=>{super.performUpdate()});this.w.watch(r),this.__dispose=()=>{this.w.unwatch(r)},r.get(),i==null||i()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.__dispose)==null||i.call(this)}}return t}const _=[f`
		.row {
			display: flex;
			flex-direction: row;
		}
		.column {
			display: flex;
			flex-direction: column;
		}
		.small-margin {
			margin-top: 6px;
		}
		.big-margin {
			margin-top: 23px;
		}

		.fill {
			flex: 1;
			height: 100%;
		}

		.title {
			font-size: 20px;
		}

		.center-content {
			align-items: center;
			justify-content: center;
		}

		.placeholder {
			color: var(--sl-color-gray-700);
		}

		.flex-scrollable-parent {
			position: relative;
			display: flex;
			flex: 1;
		}

		.flex-scrollable-container {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		.flex-scrollable-x {
			max-width: 100%;
			overflow-x: auto;
		}
		.flex-scrollable-y {
			max-height: 100%;
			overflow-y: auto;
		}
		:host {
			color: var(--sl-color-neutral-1000);
		}

		sl-card {
			display: flex;
		}
		sl-card::part(base) {
			flex: 1;
		}
		sl-card::part(body) {
			display: flex;
			flex: 1;
			height: 100%;
		}
		sl-drawer::part(body) {
			display: flex;
		}
	`];/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends Event{constructor(t){super(h.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}h.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:x},w=(e=g,t,s)=>{const{kind:c,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),c==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(s.name,e),c==="accessor"){const{name:a}=s;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(a,n,e)},init(o){return o!==void 0&&this.C(a,void 0,e,o),o}}}if(c==="setter"){const{name:a}=s;return function(o){const n=this[a];t.call(this,o),this.requestUpdate(a,n,e)}}throw Error("Unsupported decorator location: "+c)};function P(e){return(t,s)=>typeof s=="object"?w(e,t,s):((c,i,r)=>{const a=i.hasOwnProperty(r);return i.constructor.createProperty(r,c),a?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,s)}export{S,P as a,v as b,q as c,U as n,_ as s,E as t};
