import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Basic(){const [a,sa]=useState(1);return html`<div class="g"><${Card} title="Alerts">${a?html`<div class="cd" style=${{background:"#1b4332",marginTop:10}}>✔ Success alert <button class="btn s" onClick=${()=>sa(0)}>x</button></div>`:html`<button class="btn s" onClick=${()=>sa(1)}>Show alert</button>`}<//><${Card} title="Badges"><${Badge}>New<//> <${Badge} c="var(--rd)">Hot<//> <${Badge} c="var(--gn)">OK<//><//><${Card} title="Avatars"><div style=${{display:"flex",gap:8}}>${"ABCD".split("").map(c=>html`<div key=${c} class="av">${c}</div>`)}</div><//><${Card} title="Buttons"><button class="btn s">Primary</button> <button class="btn s" style=${{background:"var(--rd)"}}>Danger</button><//></div>`}
