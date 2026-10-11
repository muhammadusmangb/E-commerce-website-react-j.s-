import React, { useState } from "react";
import { html } from "./html.js";
import { Login } from "./Login.js";
import { Page } from "./Page.js";
import { M } from "./data.js";

export function App(){const [u,su]=useState(null),[p,sp]=useState("Default"),[h,sh]=useState(innerWidth<900),[o,so]=useState({}),[dd,sd]=useState(0),[th,sth]=useState(0),[dnd,sdnd]=useState(1),[nt,snt]=useState(0),[q,sq]=useState(0);
React.useEffect(()=>{document.documentElement.dataset.theme=th?"light":"dark"},[th]);
if(!u)return html`<${Login} on=${su}/>`;
const go=x=>{sp(x);sd(0);if(innerWidth<900)sh(true);scrollTo(0,0)};
const It=(a,pre)=>{const [n,ic,ch,b]=a,id=pre?pre+"/"+n:n;
return html`<div key=${id}><div class=${"it"+(p==id||p.startsWith(id+"/")?" a":"")+(n=="Disabled Menu"?" d":"")} onClick=${()=>ch?so({...o,[id]:!o[id]}):go(id)}><span class="i">${ic}</span>${n}${b&&html`<span class="bdg">${b}</span>`}${ch&&html`<span class="c">${o[id]?"⌃":"⌄"}</span>`}</div>${ch&&o[id]&&html`<div class="sub">${ch.map(c=>html`<div key=${c} class=${"it"+(p==id+"/"+c?" a":"")} onClick=${()=>go(id+"/"+c)}>${c}</div>`)}</div>`}</div>`};
return html`<div class="app">${!h&&html`<div class="ov" onClick=${()=>sh(true)}/>`}
<aside class=${"sb"+(h?" h":"")}><div class="logo">🫐 BERRY</div>${M.map(g=>html`<div key=${g[0]}><div class="gt">${g[0]}</div>${g[1].map(a=>It(a,g[0]=="Dashboard"?"":""))}</div>`)}</aside>
<div class="main"><div class="hd"><button class="ib" style=${{color:"var(--pr)"}} onClick=${()=>sh(!h)}>☰</button><button class="ib" style=${{color:"var(--pr)"}} onClick=${()=>sq(!q)}>⌕</button>${q?html`<input class="in" style=${{margin:0}} placeholder="Search..." autoFocus/>`:""}<span class="sp"/><button class="ib" style=${{color:"var(--yl)"}}>🔔</button>
<button class="pill" onClick=${()=>sd(!dd)}><div class="av">${u[0].toUpperCase()}</div><span style=${{color:"var(--bl)"}}>⚙</span></button></div>
${dd?html`<div class="dd"><b style=${{fontSize:18}}>Good Morning, ${u.split("@")[0]}</b><div class="mu">Project Admin</div>
<div class="cd" style=${{background:"var(--card2)",margin:"12px 0"}}><b>Upgrade your plan</b><p class="mu">70% discount for 1 years subscriptions.</p><button class="btn s" style=${{background:"var(--yl)",color:"#000"}}>Go Premium</button></div>
<div class="row">Start DND Mode<button class=${"tg"+(dnd?" on":"")} onClick=${()=>sdnd(!dnd)}/></div><div class="row">Allow Notifications<button class=${"tg"+(nt?" on":"")} onClick=${()=>snt(!nt)}/></div>
<div class="it" onClick=${()=>go("Account settings")}>⚙ Account settings</div><div class="it" onClick=${()=>go("Social Profile")}>☺ Social Profile<span class="bdg" style=${{background:"var(--yl)",color:"#000"}}>02</span></div><div class="it" onClick=${()=>{su(null);sd(0)}}>⏻ Logout</div></div>`:""}
<div class="ct"><h2 style=${{marginTop:0}}>${p.split("/").pop()}</h2><div class="mu" style=${{marginBottom:16}}>Home / ${p.split("/").join(" / ")}</div><${Page} p=${p} go=${go}/></div>
<div class="mu" style=${{padding:"0 20px 20px"}}>© All rights reserved <span style=${{color:"var(--pr)"}}>CodedThemes</span></div></div>
<button class="fab" onClick=${()=>sth(!th)} title="Toggle theme">⚙</button></div>`}
export default App;
