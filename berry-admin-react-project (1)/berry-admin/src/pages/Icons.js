import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Icons(){const [c,sc]=useState("");return html`<div><p class="mu">Click to copy: ${c}</p><div class="g" style=${{gridTemplateColumns:"repeat(auto-fill,minmax(70px,1fr))"}}>${"★ ☀ ☁ ☎ ✉ ✂ ✈ ♥ ♫ ⚙ ⚑ ⚡ ✎ ✔ ✖ ☺ ⌂ ⌕ ⏰ ☰".split(" ").map(i=>html`<div key=${i} class="cd" style=${{textAlign:"center",fontSize:24,cursor:"pointer"}} onClick=${()=>{sc(i);navigator.clipboard&&navigator.clipboard.writeText(i)}}>${i}</div>`)}</div></div>`}
