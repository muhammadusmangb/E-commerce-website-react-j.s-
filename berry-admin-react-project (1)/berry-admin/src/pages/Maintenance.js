import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Maintenance({name,go}){const t=/404/.test(name)?["404","Page not found"]:/Soon/.test(name)?["Soon","Coming soon, stay tuned"]:["🛠","Under maintenance"];
return html`<div style=${{textAlign:"center",padding:"40px 0"}}><h1 style=${{fontSize:72,margin:0,color:"var(--pr)"}}>${t[0]}</h1><h3>${t[1]}</h3><button class="btn s" onClick=${()=>go("Default")}>Go Home</button></div>`}
