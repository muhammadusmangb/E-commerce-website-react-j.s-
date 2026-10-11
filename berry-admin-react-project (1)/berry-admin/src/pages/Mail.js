import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Mail(){const M=[["Sara","Meeting kal 10 baje","Hi, kal 10 baje office mein meeting hai."],["GitHub","New login detected","A new login was detected on your account."],["Vercel","Deployment ready","Your project has been deployed successfully."],["Bilal","Invoice #204","Please find the invoice attached."]];const [o,so]=useState(0);
return html`<div class="g"><div class="cd">${M.map((m,i)=>html`<div key=${i} class=${"it"+(o==i?" a":"")} onClick=${()=>so(i)}><div class="av">${m[0][0]}</div><div><b>${m[0]}</b><div class="mu" style=${{fontSize:13}}>${m[1]}</div></div></div>`)}</div><div class="cd"><h3>${M[o][1]}</h3><p class="mu">From: ${M[o][0]}</p><p>${M[o][2]}</p><button class="btn s">Reply</button></div></div>`}
