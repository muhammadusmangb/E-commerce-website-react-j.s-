import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Pricing(){const P=[["Starter","$9",["1 Project","Basic support"]],["Pro","$29",["10 Projects","Priority support","Analytics"]],["Enterprise","$99",["Unlimited","24/7 support","Custom domain"]]];const [k,sk]=useState(1);
return html`<div class="g">${P.map((p,i)=>html`<div key=${i} class="cd" style=${{border:k==i?"2px solid var(--pr)":"2px solid transparent"}}><h3>${p[0]}</h3><h1>${p[1]}<small class="mu">/mo</small></h1>${p[2].map(f=>html`<div key=${f} class="row">✔ ${f}</div>`)}<button class="btn" onClick=${()=>sk(i)}>${k==i?"Selected":"Choose"}</button></div>`)}</div>`}
