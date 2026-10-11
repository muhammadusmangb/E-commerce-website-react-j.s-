import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Charts(){const v=[40,25,20,15],c=["#7c4dff","#2196f3","#ffc107","#00e676"];let a=0;const arc=(p)=>{const s=a;a+=p/100*2*Math.PI;const x=t=>[60+50*Math.cos(t),60+50*Math.sin(t)];const [x1,y1]=x(s),[x2,y2]=x(a);return `M60 60L${x1} ${y1}A50 50 0 ${p>50?1:0} 1 ${x2} ${y2}Z`};
return html`<div class="g"><${Card} title="Bar Chart"><${Chart}/><//><${Card} title="Pie Chart"><svg viewBox="0 0 120 120" style=${{width:200,display:"block",margin:"auto"}}>${v.map((p,i)=>html`<path key=${i} d=${arc(p)} fill=${c[i]}/>`)}</svg><//><${Card} title="Line Chart"><${Spark} c="#2196f3"/><//></div>`}
