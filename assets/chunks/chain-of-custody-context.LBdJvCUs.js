import"./show-image.BEFs5eJU.js";import"./profile-list-item.B2p9F70I.js";import{a as D,e as L}from"./context.Da-0ExcG.js";import{a as p,S as z,s as N,c as R,t as P}from"./property.5EqHb6rU.js";import{h as T,x as l,c as W,e as q,m as r,i as H}from"./chain-of-custody-client.DEyvJWv5.js";import{t as K,g as I,_ as u,j as _,k as M,s as b,b as U,H as j,L as B,o as m,p as g,n as v,q as k,i as Y,w as V,f as X,c as G,r as J}from"./context.CcvI55J0.js";import{S as Q,b as Z,o as E}from"./chunk.7E4JTYWU.C6DEpj_c.js";import{n as ee}from"./notify.cmi76FH7.js";import"./tslib.es6.kHcLnhpD.js";import"./reactive-element.ChgaCBqn.js";import"./context.DdgeD5sD.js";import"./range.BGBvaAjV.js";import"./isIterateeCall.CSISAO8W.js";import"./toFinite.RNA9cwvc.js";import"./isSymbol.1Kd0kqul.js";import"./static.DMzrB20W.js";function*C(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*K(C(e.shadowRoot.activeElement))))}function te(){return[...C()].pop()}var $=new WeakMap;function O(e){let t=$.get(e);return t||(t=window.getComputedStyle(e,null),$.set(e,t)),t}function oe(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=O(e);return t.visibility!=="hidden"&&t.display!=="none"}function ie(e){const t=O(e),{overflowY:o,overflowX:s}=t;return o==="scroll"||s==="scroll"?!0:o!=="auto"||s!=="auto"?!1:e.scrollHeight>e.clientHeight&&o==="auto"||e.scrollWidth>e.clientWidth&&s==="auto"}function se(e){const t=e.tagName.toLowerCase(),o=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const a=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute("name")}"]`,d=a.querySelector(`${n}:checked`);return d?d===e:a.querySelector(n)===e}return oe(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:ie(e):!1}function ae(e,t){var o;return((o=e.getRootNode({composed:!0}))==null?void 0:o.host)!==t}function A(e){const t=new WeakMap,o=[];function s(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!o.includes(i)&&se(i)&&o.push(i),i instanceof HTMLSlotElement&&ae(i,e)&&i.assignedElements({flatten:!0}).forEach(a=>{s(a)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&s(i.shadowRoot)}for(const a of i.children)s(a)}return s(e),o.sort((i,a)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-n})}var y=[],ne=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var o;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=te();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=A(this.element);let a=i.findIndex(d=>d===s);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){a+n>=i.length?a=0:a+n<0?a=i.length-1:a+=n,this.previousFocus=this.currentFocus;const d=i[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||d&&this.possiblyHasTabbableChildren(d))return;t.preventDefault(),this.currentFocus=d,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const w=[...C()];if(w.includes(this.currentFocus)||!w.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){y.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){y=y.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return y[y.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=A(this.element);if(!this.element.matches(":focus-within")){const t=e[0],o=e[e.length-1],s=this.tabDirection==="forward"?t:o;typeof(s==null?void 0:s.focus)=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},x=new Set;function re(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function le(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function S(e){if(x.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=re()+le();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),t<2&&(o=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function F(e){x.delete(e),x.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var ce=T`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,c=class extends U{constructor(){super(...arguments),this.hasSlotController=new j(this,"footer"),this.localize=new B(this),this.modal=new ne(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),S(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),F(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const o=m(this,"dialog.denyClose",{dir:this.localize.dir()});g(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),S(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([v(this.dialog),v(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=m(this,"dialog.show",{dir:this.localize.dir()}),o=m(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([g(this.panel,t.keyframes,t.options),g(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{Z(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([v(this.dialog),v(this.overlay)]);const e=m(this,"dialog.hide",{dir:this.localize.dir()}),t=m(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([g(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),g(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,F(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,k(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,k(this,"sl-after-hide")}render(){return l`
      <div
        part="base"
        class=${Y({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${E(this.noHeader?this.label:void 0)}
          aria-labelledby=${E(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":l`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};c.styles=[I,ce];c.dependencies={"sl-icon-button":Q};u([_(".dialog")],c.prototype,"dialog",2);u([_(".dialog__panel")],c.prototype,"panel",2);u([_(".dialog__overlay")],c.prototype,"overlay",2);u([p({type:Boolean,reflect:!0})],c.prototype,"open",2);u([p({reflect:!0})],c.prototype,"label",2);u([p({attribute:"no-header",type:Boolean,reflect:!0})],c.prototype,"noHeader",2);u([M("open",{waitUntilFirstUpdate:!0})],c.prototype,"handleOpenChange",1);b("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});b("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});b("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});b("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});b("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});c.define("sl-dialog");var de=Object.defineProperty,he=Object.getOwnPropertyDescriptor,f=(e,t,o,s)=>{for(var i=s>1?void 0:s?he(t,o):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(s?n(t,o,i):n(i))||i);return s&&i&&de(t,o,i),i};let h=class extends z(H){constructor(){super(...arguments),this.zome="chain_of_custody"}connectedCallback(){if(super.connectedCallback(),this.store)return;if(!this.role)throw new Error('<chain-of-custody-context> must have a role="YOUR_DNA_ROLE" property, eg: <chain-of-custody-context role="role1">');if(!this.client)throw new Error(`<chain-of-custody-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <chain-of-custody-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <chain-of-custody-context .store=\${store}>)
      `);const e=new W(this.client,this.role,this.zome);this.store=new q(e),e.onSignal(t=>{t.type==="NewCustodyTransferRequest"&&(this.requestedCustodyTransfer=t.custody_transfer)})}renderDialog(e){return l`
			<sl-dialog
				open
				.label=${r("Custody Transfer Request")}
				@sl-hide=${()=>{this.requestedCustodyTransfer=void 0}}
			>
				<div class="column" style="gap: 16px">
					<span>${r("You have received a custody request from:")} </span>

					<profile-list-item
						.agentPubKey=${e.current_custodian}
					>
					</profile-list-item>

					<div class="column" style="gap: 8px;">
						<div class="row" style="gap: 8px;">
							<sl-icon .src=${V(X)}> </sl-icon>
							<strong>${r("Location")}</strong>
						</div>
						${e.location?l`
									<span style="white-space: pre-line"
										>${e.location}</span
									>
								`:l`<span class="placeholder">${r("No location.")}</span>`}
					</div>

					<div class="column" style="gap: 8px;">
						<strong>${r("Notes")}</strong>
						${e.notes?l`
									<span style="white-space: pre-line"
										>${e.notes}</span
									>
								`:l`<span class="placeholder">${r("No notes.")}</span>`}
					</div>

					<div class="column" style="gap: 8px">
						<strong>${r("Images")}</strong>
						<div class="row" style="gap: 8px">
							${e.images_hashes.length>0?e.images_hashes.map(t=>l`<show-image
												style="width: 200px; height: 200px"
												.imageHash=${t}
											></show-image>`):l`<span class="placeholder">${r("No images.")}</span>`}
						</div>
					</div>
				</div>

				<sl-button
					slot="footer"
					@click=${()=>{this.requestedCustodyTransfer=void 0}}
					>${r("Cancel")}
				</sl-button>

				<sl-button
					slot="footer"
					variant="primary"
					@click=${async t=>{const o=t.target;o.loading=!0;try{await this.store.client.attemptCreateCustodyTransfer(e),this.requestedCustodyTransfer=void 0}catch(s){console.error(s),ee(r("Failed to create custody transfer."))}o.loading=!1}}
					>${r("Transfer Custody")}
				</sl-button>
			</sl-dialog>
		`}render(){return l`<slot></slot>
			${this.requestedCustodyTransfer?this.renderDialog(this.requestedCustodyTransfer):l``} `}};h.styles=[T`
			:host {
				display: contents;
			}
		`,N];f([R({context:D})],h.prototype,"client",2);f([L({context:G}),p({type:Object})],h.prototype,"store",2);f([p()],h.prototype,"role",2);f([p()],h.prototype,"zome",2);f([J()],h.prototype,"requestedCustodyTransfer",2);h=f([P("chain-of-custody-context")],h);export{h as ChainOfCustodyContext};
