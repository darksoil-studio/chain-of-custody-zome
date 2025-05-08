import{S as d,s as u,a as y,c as f,t as m}from"./property.5EqHb6rU.js";import{m as l,x as a,i as h,h as v}from"./chain-of-custody-client.DEyvJWv5.js";import{h as g,c as x,l as C}from"./context.CcvI55J0.js";import"./chunk.3LWOA5DF.CNsxtnUH.js";import"./chunk.EA437WHD.CM0zb0z7.js";import"./range.BGBvaAjV.js";import"./isIterateeCall.CSISAO8W.js";import"./toFinite.RNA9cwvc.js";import"./isSymbol.1Kd0kqul.js";var S=Object.defineProperty,$=Object.getOwnPropertyDescriptor,p=(e,t,o,n)=>{for(var r=n>1?void 0:n?$(t,o):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(r=(n?c(t,o,r):c(r))||r);return n&&r&&S(t,o,r),r};let s=class extends d(h){renderSummary(e){return a`
			<div class="column" style="gap: 16px; flex: 1;">
				<div class="column" style="gap: 8px">
					<span><strong>${l("Location")}</strong></span>
					<span style="white-space: pre-line"
						>${e.entry.location}</span
					>
				</div>

				<div class="column" style="gap: 8px">
					<span><strong>${l("Notes")}</strong></span>
					<span style="white-space: pre-line"
						>${e.entry.notes}</span
					>
				</div>
			</div>
		`}renderCustodyTransfer(){const e=this.chainOfCustodyStore.custodyTransfers.get(this.custodyTransferHash).entry.get();switch(e.status){case"pending":return a`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return a`<display-error
					.headline=${l("Error fetching the custody transfer")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderSummary(e.value)}}render(){return a`<sl-card
			style="flex: 1; cursor: grab;"
			@click=${()=>this.dispatchEvent(new CustomEvent("custody-transfer-selected",{composed:!0,bubbles:!0,detail:{custodyTransferHash:this.custodyTransferHash}}))}
		>
			${this.renderCustodyTransfer()}
		</sl-card>`}};s.styles=[u,v`
			:host {
				display: flex;
			}
		`];p([y(g("custody-transfer-hash"))],s.prototype,"custodyTransferHash",2);p([f({context:x,subscribe:!0})],s.prototype,"chainOfCustodyStore",2);s=p([C(),m("custody-transfer-summary")],s);export{s as CustodyTransferSummary};
