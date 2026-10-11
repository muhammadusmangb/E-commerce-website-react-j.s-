import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Privacy(){return html`<div style=${{maxWidth:720}}>${["Information we collect","How we use it","Cookies","Your rights"].map((t,i)=>html`<div key=${t}><h3>${i+1}. ${t}</h3><p class="mu">This is sample policy text. Replace it with your own privacy policy content.</p></div>`)}</div>`}
