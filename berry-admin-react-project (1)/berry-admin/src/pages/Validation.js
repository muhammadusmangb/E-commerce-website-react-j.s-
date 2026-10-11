import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Validation(){const [e,se]=useState(""),[p,sp]=useState("");const ge=/^\S+@\S+\.\S+$/.test(e),gp=p.length>=6;
return html`<div class="cd" style=${{maxWidth:480}}><h3>Form Validation</h3><input class="in" placeholder="Email" value=${e} onChange=${x=>se(x.target.value)}/><div class=${ge?"up":"dn"}>${e?(ge?"✔ Valid email":"✖ Invalid email"):""}</div><input class="in" type="password" placeholder="Password (min 6)" value=${p} onChange=${x=>sp(x.target.value)}/><div class=${gp?"up":"dn"}>${p?(gp?"✔ Strong enough":"✖ Too short"):""}</div><button class="btn" disabled=${!(ge&&gp)} style=${{opacity:ge&&gp?1:.4}}>Submit</button></div>`}
