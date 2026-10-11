import React,{useState} from "react";
import {html} from "../html.js";
export const Badge=({c="var(--bl)",children})=>html`<span class="bdg" style=${{background:c,margin:0}}>${children}</span>`;
export const Card=({title,children,style})=>html`<div class="cd" style=${style}>${title&&html`<b>${title}</b>`}${children}</div>`;
export const Stat=({l,v,c})=>html`<div class="k" style=${{background:c||"#1e88e5"}}>${l}<b>${v}</b></div>`;
export function DataTable({cols,rows}){const [q,sq]=useState(""),[s,ss]=useState(-1),[pg,sp]=useState(0);
let r=rows.filter(x=>x.join(" ").toLowerCase().includes(q.toLowerCase()));
if(s>=0)r=[...r].sort((a,b)=>String(a[s]).localeCompare(String(b[s]),undefined,{numeric:true}));
const pages=Math.max(1,Math.ceil(r.length/6)),v=r.slice(pg*6,pg*6+6);
return html`<div class="cd"><input class="in" placeholder="Search..." value=${q} onChange=${e=>{sq(e.target.value);sp(0)}}/>
<div style=${{overflowX:"auto"}}><table class="tb"><thead><tr>${cols.map((c,i)=>html`<th key=${c} style=${{cursor:"pointer"}} onClick=${()=>ss(i)}>${c}${s==i?" ▾":""}</th>`)}</tr></thead>
<tbody>${v.map((x,i)=>html`<tr key=${i}>${x.map((y,j)=>html`<td key=${j}>${y}</td>`)}</tr>`)}</tbody></table></div>
<div class="row"><span class="mu">${r.length} rows</span><span><button class="btn s" onClick=${()=>sp(Math.max(0,pg-1))}>‹</button> ${pg+1}/${pages} <button class="btn s" onClick=${()=>sp(Math.min(pages-1,pg+1))}>›</button></span></div></div>`}
