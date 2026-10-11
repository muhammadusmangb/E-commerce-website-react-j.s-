import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Blog(){const [L,sl]=useState({});const t=["Getting started with React","Dark mode design tips","Admin dashboards 101","Why Vite is fast","State without Redux","CSS variables guide"],c=["#7c4dff","#2196f3","#5500d9","#1e88e5","#673ab7","#0d47a1"];
return html`<div class="g">${t.map((x,i)=>html`<div key=${i} class="cd"><div class="sw" style=${{background:c[i],marginBottom:12}}>Post ${i+1}</div><b>${x}</b><p class="mu">Short summary of the blog post goes here.</p><button class="btn s" onClick=${()=>sl({...L,[i]:!L[i]})}>${L[i]?"♥ Liked":"♡ Like"}</button></div>`)}</div>`}
