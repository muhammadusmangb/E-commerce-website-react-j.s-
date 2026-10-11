import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Settings({name}){const [t,st]=useState({a:1,b:0,c:1}),[ok,so]=useState(0);const L=[["Email alerts","a"],["SMS alerts","b"],["Public profile","c"]];
return html`<div class="cd" style=${{maxWidth:520}}><h3>${name}</h3><input class="in" defaultValue="JWT User"/><input class="in" defaultValue="info@gmail.com"/>${L.map(x=>html`<div key=${x[1]} class="row">${x[0]}<button class=${"tg"+(t[x[1]]?" on":"")} onClick=${()=>st({...t,[x[1]]:!t[x[1]]})}/></div>`)}<button class="btn" onClick=${()=>so(1)}>Save</button>${ok?html`<p class="up">✔ Saved</p>`:""}</div>`}
