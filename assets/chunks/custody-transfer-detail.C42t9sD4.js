import"./show-image.BEFs5eJU.js";import"./profile-list-item.B2p9F70I.js";import{a as e,S as u,s as g,c as v,t as f}from"./property.5EqHb6rU.js";import{x as o,k as $,m as n,i as w,h as x}from"./chain-of-custody-client.DEyvJWv5.js";import{_ as s,b as _,L as S,w as h,d as b,e as C,f as D,h as P,c as O,l as z}from"./context.CcvI55J0.js";import"./chunk.EZCUSG7Q.D6l5KE0v.js";import"./chunk.7E4JTYWU.C6DEpj_c.js";import"./chunk.3LWOA5DF.CNsxtnUH.js";import"./chunk.EA437WHD.CM0zb0z7.js";import"./tslib.es6.kHcLnhpD.js";import"./reactive-element.ChgaCBqn.js";import"./context.DdgeD5sD.js";import"./range.BGBvaAjV.js";import"./isIterateeCall.CSISAO8W.js";import"./toFinite.RNA9cwvc.js";import"./isSymbol.1Kd0kqul.js";import"./static.DMzrB20W.js";var r=class extends _{constructor(){super(...arguments),this.localize=new S(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),i=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return o`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:i})}
      </time>
    `}};s([e()],r.prototype,"date",2);s([e()],r.prototype,"weekday",2);s([e()],r.prototype,"era",2);s([e()],r.prototype,"year",2);s([e()],r.prototype,"month",2);s([e()],r.prototype,"day",2);s([e()],r.prototype,"hour",2);s([e()],r.prototype,"minute",2);s([e()],r.prototype,"second",2);s([e({attribute:"time-zone-name"})],r.prototype,"timeZoneName",2);s([e({attribute:"time-zone"})],r.prototype,"timeZone",2);s([e({attribute:"hour-format"})],r.prototype,"hourFormat",2);r.define("sl-format-date");var N=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,y=(t,i,m,p)=>{for(var a=p>1?void 0:p?Z(i,m):i,c=t.length-1,d;c>=0;c--)(d=t[c])&&(a=(p?d(i,m,a):d(a))||a);return p&&a&&N(i,m,a),a};let l=class extends u(w){renderDetail(t){return o`
			<div class="column" style="gap: 16px;">
				<div class="row" style="gap: 8px; align-items: center">
					<profile-list-item
						.agentPubKey=${$(t)}
					>
					</profile-list-item>
					<sl-icon .src=${h(b)}> </sl-icon>
					<profile-list-item
						.agentPubKey=${t.entry.current_custodian}
					>
					</profile-list-item>
				</div>

				<div class="column" style="gap: 8px;">
					<div class="row" style="gap: 8px;">
						<sl-icon .src=${h(C)}> </sl-icon>
						<strong>${n("Date")}</strong>
					</div>
					<sl-format-date
						.date=${t.action.timestamp}
						month="long"
						day="numeric"
						year="numeric"
						hour="numeric"
						minute="numeric"
					>
					</sl-format-date>
				</div>

				<div class="column" style="gap: 8px;">
					<div class="row" style="gap: 8px;">
						<sl-icon .src=${h(D)}> </sl-icon>
						<strong>${n("Location")}</strong>
					</div>
					${t.entry.location?o`
								<span style="white-space: pre-line"
									>${t.entry.location}</span
								>
							`:o`<span class="placeholder">${n("No location.")}</span>`}
				</div>

				${t.entry.notes?o`
							<div class="column" style="gap: 8px;">
								<strong>${n("Notes")}</strong>
								<span style="white-space: pre-line"
									>${t.entry.notes}</span
								>
							</div>
						`:o``}
				${t.entry.images_hashes.length>0?o`
							<div class="column" style="gap: 8px">
								<strong>${n("Images")}</strong>
								<div class="row" style="gap: 8px">
									${t.entry.images_hashes.map(i=>o`<show-image
												style="width: 200px; height: 200px"
												.imageHash=${i}
											></show-image>`)}
								</div>
							</div>
						`:o``}
			</div>
		`}render(){const t=this.chainOfCustodyStore.custodyTransfers.get(this.custodyTransferHash).entry.get();switch(t.status){case"pending":return o`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return o`<display-error
					.headline=${n("Error fetching the custody transfer")}
					.error=${t.error}
				></display-error>`;case"completed":return this.renderDetail(t.value)}}};l.styles=[g,x`
			:host {
				display: flex;
			}
		`];y([e(P("custody-transfer-hash"))],l.prototype,"custodyTransferHash",2);y([v({context:O,subscribe:!0})],l.prototype,"chainOfCustodyStore",2);l=y([z(),f("custody-transfer-detail")],l);export{l as CustodyTransferDetail};
