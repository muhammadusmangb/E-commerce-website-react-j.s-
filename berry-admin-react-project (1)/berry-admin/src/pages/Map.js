import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Map(){const p=[["Karachi",60,150],["Lahore",120,60],["Islamabad",110,35],["Dubai",30,110]];const [s,ss]=useState(p[0][0]);
return html`<div class="cd"><svg viewBox="0 0 180 190" style=${{width:"100%",maxWidth:420,background:"var(--card2)",borderRadius:12}}>${p.map(x=>html`<g key=${x[0]} onClick=${()=>ss(x[0])} style=${{cursor:"pointer"}}><circle cx=${x[1]} cy=${x[2]} r=${s==x[0]?9:6} fill="#7c4dff"/><text x=${x[1]+10} y=${x[2]+4} fontSize="9" fill="#8492c4">${x[0]}</text></g>`)}</svg><p>Selected: <b>${s}</b></p></div>`}
