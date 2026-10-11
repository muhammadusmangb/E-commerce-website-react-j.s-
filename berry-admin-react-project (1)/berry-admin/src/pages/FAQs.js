import React, { useState } from "react";
import { html } from "../html.js";

export function Faq(){const [o,so]=useState(0);return html`<div>${["Berry kya hai?","Login kaise karein?","Theme kaise badlein?"].map((q,i)=>html`<div key=${i} class="cd" style=${{marginBottom:10,cursor:"pointer"}} onClick=${()=>so(o==i?-1:i)}><b>${q}</b>${o==i&&html`<p class="mu">Ye ek demo answer hai — yahan apna content daalein.</p>`}</div>`)}</div>`}
