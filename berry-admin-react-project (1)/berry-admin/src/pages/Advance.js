import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Advance(){const [o,so]=useState(0);return html`<div class="g"><${Card} title="Dialog"><button class="btn s" onClick=${()=>so(1)}>Open dialog</button><//><${Card} title="Tooltip"><button class="btn s" title="Ye ek tooltip hai!">Hover me</button><//>${o?html`<div style=${{position:"fixed",inset:0,background:"#000a",display:"grid",placeItems:"center",zIndex:30}}><div class="cd"><h3>Dialog</h3><p>Are you sure?</p><button class="btn s" onClick=${()=>so(0)}>Close</button></div></div>`:""}</div>`}
