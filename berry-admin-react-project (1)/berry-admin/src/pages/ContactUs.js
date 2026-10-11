import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function ContactUs(){const [f,sf]=useState({n:"",e:"",m:""}),[ok,so]=useState(0);const u=k=>e=>sf({...f,[k]:e.target.value});
return html`<div class="cd" style=${{maxWidth:520}}><h3>Contact Us</h3><input class="in" placeholder="Name" value=${f.n} onChange=${u("n")}/><input class="in" placeholder="Email" value=${f.e} onChange=${u("e")}/><input class="in" placeholder="Message" value=${f.m} onChange=${u("m")}/><button class="btn" onClick=${()=>f.n&&f.e&&so(1)}>Send</button>${ok?html`<p class="up">✔ Thanks ${f.n}, message bhej diya gaya!</p>`:""}</div>`}
