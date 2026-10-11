import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Statistics(){const s=[["Visitors","12.4k","#7c4dff"],["Sales","$8.2k","#2196f3"],["Signups","640","#00e676"],["Bounce","32%","#ffc107"]];
return html`<div class="g">${s.map(x=>html`<div key=${x[0]} class="cd"><span class="mu">${x[0]}</span><h2 style=${{margin:"6px 0"}}>${x[1]}</h2><${Spark} c=${x[2]}/></div>`)}</div>`}
