import React, { useState } from "react";
import { html } from "../html.js";
import { Chart, Spark } from "../components/Chart.js";
import { CL, S } from "../data.js";

export function Dash({go}){return html`<div class="g">
<div class="k" style=${{background:"linear-gradient(135deg,#3a0ca3,#5500d9)"}}>◉ Wallet<b>$500.00</b><span style=${{opacity:.7}}>Total Earning</span></div>
<div class="k" style=${{background:"linear-gradient(135deg,#0d47a1,#1565c0)"}}>🛍 Orders<b>$961</b><span style=${{opacity:.7}}>Total Order</span></div>
<div class="k" style=${{background:"#1e88e5"}}>▦<b>$203k</b>Total Income</div>
<div class="k" style=${{background:"#2b3556"}}>🏪<b>$203k</b>Total Income</div>
<div class="cd" style=${{gridColumn:"1/-1"}}><div class="row"><div><span class="mu">Total Growth</span><h2 style=${{margin:"4px 0"}}>$2,324.00</h2></div><span class="mu">Today ▾</span></div><${Chart}/>
<div style=${{display:"flex",gap:14,flexWrap:"wrap",justifyContent:"center"}}>${["Investment","Loss","Profit","Maintenance"].map((n,i)=>html`<span key=${n}><span style=${{display:"inline-block",width:12,height:12,background:CL[i],marginRight:6}}></span>${n}</span>`)}</div></div>
<div class="cd" style=${{gridColumn:"1/-1"}}><div class="row"><h3 style=${{margin:0}}>Popular Stocks</h3><span>•••</span></div>
<div style=${{background:"#d1c4e9",color:"#5500d9",borderRadius:14,padding:14,margin:"10px 0"}}><div class="row"><b>Bajaj Finery</b><b style=${{color:"#444"}}>$1839.00</b></div><span style=${{color:"#444"}}>10% Profit</span><${Spark}/></div>
${S.map((s,i)=>html`<div key=${i} class="row" style=${{borderTop:"1px solid var(--bd)"}}><div><b>${s[0]}</b><div class=${s[2]?"up":"dn"}>10% ${s[2]?"Profit":"Loss"}</div></div><div><b>$${s[1]}.00</b> <span class=${s[2]?"up":"dn"}>${s[2]?"⌃":"⌄"}</span></div></div>`)}
<p style=${{textAlign:"center",color:"var(--bl)",cursor:"pointer"}} onClick=${()=>go("Users")}>View All ›</p></div></div>`}
