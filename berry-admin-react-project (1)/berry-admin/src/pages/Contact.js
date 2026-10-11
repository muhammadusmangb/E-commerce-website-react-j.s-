import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Contact(){const n=["Aslam","Sara","Bilal","Hina","Usman","Zain"];return html`<div class="g">${n.map((x,i)=>html`<div key=${x} class="cd" style=${{textAlign:"center"}}><div class="av" style=${{margin:"0 auto 10px",width:60,height:60}}>${x[0]}</div><b>${x}</b><div class="mu">${x.toLowerCase()}@mail.com</div><button class="btn s" style=${{marginTop:10}}>Message</button></div>`)}</div>`}
