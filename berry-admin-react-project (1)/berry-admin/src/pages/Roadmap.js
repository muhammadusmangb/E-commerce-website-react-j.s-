import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Roadmap(){return html`<div>${[["Q1","Login and Dashboard","Done"],["Q2","More pages and charts","Done"],["Q3","Real API and auth","In progress"],["Q4","Mobile app","Planned"]].map(x=>html`<div key=${x[0]} class="cd" style=${{marginBottom:12,borderLeft:"4px solid var(--pr)"}}><b>${x[0]}: ${x[1]}</b><div class="mu">${x[2]}</div></div>`)}</div>`}
