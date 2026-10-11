import React, { useState } from "react";
import { html } from "../html.js";

export function Typo(){return html`<div>${[32,26,22,18,15].map((s,i)=>html`<div key=${s} style=${{fontSize:s,fontWeight:600,margin:"10px 0"}}>Heading h${i+1} — Berry Admin</div>`)}<p class="mu">Body text example. Roboto font, muted color.</p></div>`}
