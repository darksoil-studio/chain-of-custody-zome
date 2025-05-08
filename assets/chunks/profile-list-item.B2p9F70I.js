import{_ as p}from"./tslib.es6.kHcLnhpD.js";import{a as n,t as C,s as M,c as L,S}from"./property.5EqHb6rU.js";import{h as $,x as a,M as X,o as Y,i as z,f as V,m as E,T as ee}from"./chain-of-custody-client.DEyvJWv5.js";import{g as q,_ as g,b as O,i as H,x as te,r as R,k as se,h as j,j as W,l as A,y as ie,z as oe,A as re,w as ae,B as ne}from"./context.CcvI55J0.js";import{p as F}from"./context.DdgeD5sD.js";var le=$`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,B=class extends O{constructor(){super(...arguments),this.effect="none"}render(){return a`
      <div
        part="base"
        class=${H({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};B.styles=[q,le];g([n()],B.prototype,"effect",2);B.define("sl-skeleton");var he=$`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,u=class extends O{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=a`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=a``;return this.initials?e=a`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=a`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,a`
      <div
        part="base"
        class=${H({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};u.styles=[q,he];u.dependencies={"sl-icon":te};g([R()],u.prototype,"hasError",2);g([n()],u.prototype,"image",2);g([n()],u.prototype,"label",2);g([n()],u.prototype,"initials",2);g([n()],u.prototype,"loading",2);g([n({reflect:!0})],u.prototype,"shape",2);g([se("image")],u.prototype,"handleImageChange",1);u.define("sl-avatar");let P=[0],k=0;function de(t){t[0]===132&&t[1]===32&&t[2]===36?P=t.slice(3):P=t||[],k=0}function l(){return(()=>{const e=P[k];return k=(k+1)%P.length,e})()/256}function U(t){const e=Math.floor(l()*360),s=l()*60+40,i=t||(l()*100+(l()+l()+l()+l())*25)/2;return{h:e,s,l:i}}function N({h:t,s:e,l:s}){return`hsl(${t}, ${e}%, ${s}%)`}function ce(t,e,s){const i=l()*2*Math.PI,o=e*Math.cos(i),r=e*Math.sin(i),y=s.x+o,h=s.x+r,d=i+2*Math.PI*.3,b=e*Math.cos(d),_=e*Math.sin(d),m=s.x+b,I=s.x+_,w=d+2*Math.PI*.3,G=e*Math.cos(w),Z=e*Math.sin(w),J=s.x+G,Q=s.x+Z;t.beginPath(),t.moveTo(y,h),t.lineTo(m,I),t.lineTo(J,Q),t.fill()}function pe(t){const e=t.hash||[0];return de(e),{backgroundColor:t.backgroundColor||N(U()),hash:e,size:t.size||32}}function ue(t,e){if(t.hash&&!(t.hash instanceof Uint8Array))throw new Error("invalid type for opts.hash, expecting Uint8Array or null");t=pe(t||{});const{size:s,backgroundColor:i}=t;e.width=e.height=s;const o=e.getContext("2d");if(!o)return;o.fillStyle=i,o.fillRect(0,0,e.width,e.height);const r=l()<.5?3:4,y=Array.apply(null,Array(r)).map((h,d)=>{const b=d===0?5+l()*25:d===1?70+l()*25:null;return{x:l()*s,y:l()*s,radius:5+l()*s*.25,type:Math.floor(l()*3),color:N(U(b))}}).sort((h,d)=>h.radius>d.radius?-1:1);for(let h=0;h<r;h++){const d=y[h],{x:b,y:_,radius:m,type:I,color:w}=d;switch(o.fillStyle=w,I){case 0:o.beginPath(),o.arc(b,_,m,0,2*Math.PI),o.fill();break;case 1:o.fillRect(b,_,m*2,m*2);break;case 2:ce(o,m*2,{x:b});break;default:throw new Error("shape is greater than 2, this should never happen")}}return e}var f=function(t,e,s,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,s,i);else for(var h=t.length-1;h>=0;h--)(y=t[h])&&(r=(o<3?y(r):o>3?y(e,s,r):y(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};const fe=new X(t=>new Y(e=>{const s=document.createElement("canvas");return ue({hash:t,size:e},s),s}));let c=class extends z{constructor(){super(...arguments),this.size=32,this.shape="circle",this.disableTooltip=!1,this.disableCopy=!1,this.justCopiedHash=!1}async copyHash(){this.disableCopy||(await navigator.clipboard.writeText(this.strHash),this.timeout&&clearTimeout(this.timeout),this.justCopiedHash=!0,this._tooltip.show(),this.timeout=setTimeout(()=>{this._tooltip.hide(),setTimeout(()=>{this.justCopiedHash=!1},100)},2e3))}get strHash(){return V(this.hash)}updated(e){var s,i;if(super.updated(e),e.has("hash")&&e.get("hash")!==void 0&&((s=e.get("hash"))==null?void 0:s.toString())!==((i=this.hash)==null?void 0:i.toString())||e.has("size")){const o=e.get("hash")!==void 0?e.get("hash"):this.hash,r=fe.get(o).get(this.size);this._canvas.width=r.width,this._canvas.height=r.height,this._canvas.getContext("2d").drawImage(r,0,0)}}renderCanvas(){return a` <canvas
      id="canvas"
      width="1"
      height="1"
      class=${H({square:this.shape==="square",circle:this.shape==="circle"})}
    ></canvas>`}render(){return a`<div
      @click=${()=>this.copyHash()}
      style="${this.disableCopy?"":"cursor: pointer;"} flex-grow: 0"
    >
      <sl-tooltip
        id="tooltip"
        placement="top"
        .content=${this.justCopiedHash?E("Copied!"):`${this.strHash.substring(0,6)}...`}
        .trigger=${this.disableTooltip||this.justCopiedHash?"manual":"hover focus"}
        hoist
      >
        ${this.renderCanvas()}
      </sl-tooltip>
    </div>`}static get styles(){return $`
      :host {
        display: flex;
      }

      .square {
        border-radius: 0%;
      }
      .circle {
        border-radius: 50%;
      }
    `}};f([n(j("hash"))],c.prototype,"hash",void 0);f([n({type:Number})],c.prototype,"size",void 0);f([n({type:String})],c.prototype,"shape",void 0);f([n({type:Boolean,attribute:"disable-tooltip"})],c.prototype,"disableTooltip",void 0);f([n({type:Boolean,attribute:"disable-copy"})],c.prototype,"disableCopy",void 0);f([W("#canvas")],c.prototype,"_canvas",void 0);f([W("#tooltip")],c.prototype,"_tooltip",void 0);f([R()],c.prototype,"justCopiedHash",void 0);c=f([A(),C("holo-identicon")],c);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D="important",ye=" !"+D,T=ie(class extends oe{constructor(t){var e;if(super(t),t.type!==re.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const r=typeof o=="string"&&o.endsWith(ye);i.includes("-")||r?s.setProperty(i,r?o.slice(0,-11):o,r?D:""):s[i]=o}}return ee}});let v=class extends S(z){constructor(){super(...arguments),this.size=32,this.disableTooltip=!1,this.disableCopy=!1}renderIdenticon(){return this.agentPubKey?a` <div
			style=${T({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
		>
			<holo-identicon
				.disableCopy=${this.disableCopy}
				.disableTooltip=${this.disableTooltip}
				.hash=${this.agentPubKey}
				.size=${this.size}
			>
			</holo-identicon>
			<div class="badge"><slot name="badge"></slot></div>
		</div>`:a`
				<sl-icon
					style=${T({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
					.src=${ae(ne)}
				>
				</sl-icon>
			`}renderProfile(e){if(!e||!e.avatar)return this.renderIdenticon();const s=a`
			<div
				style=${T({cursor:this.disableCopy?"":"pointer",position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
			>
				<sl-avatar
					.image=${e.avatar}
					style="--size: ${this.size}px; display: flex;"
					@click=${()=>this.dispatchEvent(new CustomEvent("profile-clicked",{composed:!0,bubbles:!0,detail:{agentPubKey:this.agentPubKey}}))}
				>
				</sl-avatar>
				<div class="badge"><slot name="badge"></slot></div>
			</div>
		`;return a`
			<sl-tooltip
				id="tooltip"
				placement="top"
				.trigger=${this.disableTooltip?"manual":"hover focus"}
				hoist
				.content=${e.name}
			>
				${s}
			</sl-tooltip>
		`}render(){const e=this.profilesProvider.currentProfileForAgent.get(this.agentPubKey).get();switch(e.status){case"pending":return a`<sl-skeleton
					effect="pulse"
					style="height: ${this.size}px; width: ${this.size}px"
				></sl-skeleton>`;case"error":return a`
					<display-error
						tooltip
						.headline=${E("Error fetching the user's profile.")}
						.error=${e.error}
					></display-error>
				`;case"completed":return this.renderProfile(e.value)}}};v.styles=[M,$`
			.badge {
				position: absolute;
				right: 0;
				bottom: 0;
			}
			:host {
				height: 32px;
			}
		`];p([n(j("agent-pub-key"))],v.prototype,"agentPubKey",void 0);p([n({type:Number})],v.prototype,"size",void 0);p([n({type:Boolean,attribute:"disable-tooltip"})],v.prototype,"disableTooltip",void 0);p([n({type:Boolean,attribute:"disable-copy"})],v.prototype,"disableCopy",void 0);p([L({context:F,subscribe:!0}),n()],v.prototype,"profilesProvider",void 0);v=p([A(),C("agent-avatar")],v);let K=class extends S(z){render(){return a`<div class="row" style="align-items: center; width: 150px">
      <sl-skeleton
        effect="sheen"
        style="height: 32px; width: 32px; border-radius: 50%; margin: 8px"
      ></sl-skeleton
      ><sl-skeleton
        effect="sheen"
        style="flex: 1; margin: 8px; border-radius: 12px"
      >
      </sl-skeleton>
    </div>`}static get styles(){return[M,$`
        :host {
          display: flex;
        }
      `]}};K=p([C("profile-list-item-skeleton")],K);let x=class extends S(z){render(){var s;const e=this.profilesProvider.currentProfileForAgent.get(this.agentPubKey).get();switch(e.status){case"pending":return a`<profile-list-item-skeleton></profile-list-item-skeleton>`;case"completed":return a`
					<div class="row" style="align-items: center; gap: 8px">
						<agent-avatar .agentPubKey=${this.agentPubKey}></agent-avatar>
						<span>${(s=e.value)==null?void 0:s.name}</span>
					</div>
				`;case"error":return a`<display-error
					tooltip
					.headline=${E("Error fetching the profile.")}
					.error=${e.error}
				></display-error>`}}};x.styles=[M];p([n(j("agent-pub-key"))],x.prototype,"agentPubKey",void 0);p([L({context:F,subscribe:!0}),n()],x.prototype,"profilesProvider",void 0);x=p([A(),C("profile-list-item")],x);
