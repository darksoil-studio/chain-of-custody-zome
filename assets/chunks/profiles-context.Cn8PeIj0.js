import{_ as t}from"./tslib.es6.kHcLnhpD.js";import{p as i}from"./context.B7iCgc2V.js";import{e as r,a as s}from"./context.CS9zXtus.js";import{n,S as p,a as o,c as l,t as c}from"./property.Dcn1XGnH.js";import{a,b as f,x as m,i as x,h}from"./chain-of-custody-client.BqnHCiTp.js";import"./range.BGBvaAjV.js";import"./isIterateeCall.CSISAO8W.js";import"./toFinite.RNA9cwvc.js";import"./isSymbol.1Kd0kqul.js";const d=n("hc_zome_profiles/store");let e=class extends p(x){constructor(){super(...arguments),this.zome="profiles"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<profiles-context> must have a role="YOUR_DNA_ROLE" property, eg: <profiles-context role="role1">');if(!this.client)throw new Error(`<profiles-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <profiles-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <profiles-context .store=\${store}>)`);this.store=new a(new f(this.client,this.role,this.zome))}}render(){return m`<slot></slot>`}};e.styles=h`
		:host {
			display: contents;
		}
	`;t([r({context:d}),r({context:i}),o({type:Object})],e.prototype,"store",void 0);t([l({context:s,subscribe:!0})],e.prototype,"client",void 0);t([o()],e.prototype,"role",void 0);t([o()],e.prototype,"zome",void 0);e=t([c("profiles-context")],e);export{e as ProfilesContext};
