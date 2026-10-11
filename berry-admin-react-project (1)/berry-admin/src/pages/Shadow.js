import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Shadow(){return html`<div class="g">${[0,1,2,3,4,5].map(i=>html`<div key=${i} class="cd" style=${{boxShadow:`0 ${i*3}px ${i*8}px #0008`,height:90}}>Shadow ${i}</div>`)}</div>`}
