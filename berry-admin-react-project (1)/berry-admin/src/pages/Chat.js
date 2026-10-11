import React, { useState } from "react";
import { html } from "../html.js";

export function Chat(){const [m,sm]=useState([["Hi! Welcome to Berry chat 👋",0],["Hello, kya haal hai?",1]]);const [t,st]=useState("");
const send=()=>{if(!t.trim())return;sm([...m,[t,1],["Message mil gaya ✔",0]]);st("")};
return html`<div>${m.map((x,i)=>html`<div key=${i} class=${"msg"+(x[1]?" me":"")}>${x[0]}</div>`)}<div style=${{display:"flex",gap:8}}><input class="in" value=${t} onChange=${e=>st(e.target.value)} onKeyDown=${e=>e.key=="Enter"&&send()} placeholder="Type a message"/><button class="btn s" onClick=${send}>Send</button></div></div>`}
