import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function CRM(){const S=["New","Contacted","Won"];const [l,sl]=useState([["Acme Corp",0],["Globex",0],["Initech",1],["Umbrella",2],["Hooli",1]]);
return html`<div class="kb">${S.map((s,si)=>html`<div key=${s}><b>${s} (${l.filter(x=>x[1]==si).length})</b>${l.map((x,i)=>x[1]==si&&html`<div key=${i} class="kc" style=${{cursor:"pointer"}} onClick=${()=>sl(l.map((y,j)=>j==i?[y[0],(y[1]+1)%3]:y))}>${x[0]}<div class="mu" style=${{fontSize:12}}>Tap to move →</div></div>`)}</div>`)}</div>`}
