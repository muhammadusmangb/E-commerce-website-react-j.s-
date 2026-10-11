import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Landing({go}){return html`<div style=${{textAlign:"center",padding:"30px 0"}}><h1 style=${{fontSize:40}}>Build faster with <span style=${{color:"var(--pr)"}}>Berry</span></h1><p class="mu">A modern React admin dashboard with dark and light themes.</p><button class="btn s" onClick=${()=>go("Default")}>Open Dashboard</button><div class="g" style=${{marginTop:30}}>${["Responsive","Dark Mode","Reusable Pages"].map(x=>html`<${Card} key=${x} title=${x}><p class="mu">Short feature description.</p><//>`)}</div></div>`}
