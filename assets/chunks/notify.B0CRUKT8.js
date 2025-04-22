import{m as a,w as i,a as c}from"./context.CzT3nprN.js";function s(n){const t=document.createElement("div");return t.textContent=n,t.innerHTML}function l(n,t="primary",r=a,o=3e3){const e=Object.assign(document.createElement("sl-alert"),{variant:t,closable:!0,duration:o,innerHTML:`
        <sl-icon src="${i(r)}" slot="icon"></sl-icon>
        ${s(n)}
      `});return document.body.append(e),e.toast()}function u(n){return l(n,"danger",c)}export{l as a,u as n};
