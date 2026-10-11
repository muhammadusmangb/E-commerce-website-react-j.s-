import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Docs(){return html`<div>${[["Install","Run npm install."],["Start","Run npm run dev."],["Build","Run npm run build for the dist folder."],["Deploy","Push to GitHub and import in Vercel."]].map((x,i)=>html`<${Card} key=${i} title=${(i+1)+". "+x[0]} style=${{marginBottom:12}}><p class="mu">${x[1]}</p><//>`)}</div>`}
