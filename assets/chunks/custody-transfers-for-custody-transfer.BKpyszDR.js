import{S as d,s as p,a as u,c as y,t as m}from"./property.5EqHb6rU.js";import{m as f,x as t,i as h}from"./chain-of-custody-client.DEyvJWv5.js";import{w as v,m as x,h as g,c as O,l as C}from"./context.CcvI55J0.js";import"./chunk.EA437WHD.CM0zb0z7.js";import"./custody-transfer-summary.BlsKQN_k.js";import"./range.BGBvaAjV.js";import"./isIterateeCall.CSISAO8W.js";import"./toFinite.RNA9cwvc.js";import"./isSymbol.1Kd0kqul.js";import"./chunk.3LWOA5DF.CNsxtnUH.js";var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,l=(r,e,a,n)=>{for(var s=n>1?void 0:n?T(e,a):e,i=r.length-1,c;i>=0;i--)(c=r[i])&&(s=(n?c(e,a,s):c(s))||s);return n&&s&&S(e,a,s),s};let o=class extends d(h){renderList(r){return r.length===0?t` <div
				class="column placeholder center-content"
				style="gap: 8px; flex: 1"
			>
				<sl-icon
					style="font-size: 64px;"
					.src=${v(x)}
				></sl-icon>
				<span style="text-align: center"
					>${f("No custody transfers found for this custody transfer.")}</span
				>
			</div>`:t`
			<div class="column" style="gap: 8px">
				${r.map(e=>t`<custody-transfer-summary
							.custodyTransferHash=${e}
						></custody-transfer-summary>`)}
			</div>
		`}render(){const r=this.chainOfCustodyStore.custodyTransfers.get(this.custodyTransferHash).custodyTransfers.get();switch(r.status){case"pending":return t`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return t`<display-error
					.headline=${f("Error fetching the custody transfers")}
					.error=${r.error}
				></display-error>`;case"completed":return this.renderList(r.value)}}};o.styles=[p];l([u(g("custody-transfer-hash"))],o.prototype,"custodyTransferHash",2);l([y({context:O,subscribe:!0})],o.prototype,"chainOfCustodyStore",2);o=l([C(),m("custody-transfers-for-custody-transfer")],o);export{o as CustodyTransfersForCustodyTransfer};
