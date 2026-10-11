import React, { useState } from "react";
import { html } from "./html.js";

export function Login({on}){const [e,se]=useState("info@gmail.com"),[pw,sp]=useState("123456");
return html`<div class="login"><div class="lc"><div class="logo">🫐 BERRY</div><h2>Hi, Welcome Back</h2><p class="mu">Enter your credentials to continue</p>
<div class="acc" onClick=${()=>on(e)}><div class="av">${e[0].toUpperCase()}</div><div><b>${e}</b><div class="mu" style=${{fontSize:13}}>Tap to continue as this account</div></div></div>
<input class="in" value=${e} onChange=${x=>se(x.target.value)} placeholder="Email"/><input class="in" type="password" value=${pw} onChange=${x=>sp(x.target.value)} placeholder="Password"/>
<button class="btn" onClick=${()=>e&&on(e)}>Sign In</button></div></div>`}
