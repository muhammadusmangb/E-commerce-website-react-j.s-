import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Wizard(){const [s,ss]=useState(0);const T=["Account","Profile","Finish"];
return html`<div class="cd" style=${{maxWidth:520}}><div class="row">${T.map((t,i)=>html`<b key=${t} style=${{color:i<=s?"var(--pr)":"var(--mu)"}}>${i+1}. ${t}</b>`)}</div><div style=${{minHeight:120}}>${s==0&&html`<input class="in" placeholder="Email"/>`}${s==1&&html`<input class="in" placeholder="Full name"/>`}${s==2&&html`<h3 class="up">🎉 Sab ho gaya!</h3>`}</div><div class="row"><button class="btn s" onClick=${()=>ss(Math.max(0,s-1))}>Back</button><button class="btn s" onClick=${()=>ss(Math.min(2,s+1))}>Next</button></div></div>`}
