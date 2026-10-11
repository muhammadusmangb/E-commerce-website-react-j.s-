import React, { useState } from "react";
import { html } from "../html.js";

export function Cal(){const n=new Date(),f=new Date(n.getFullYear(),n.getMonth(),1).getDay(),dm=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();
return html`<div><h3>${n.toLocaleString("en",{month:"long",year:"numeric"})}</h3><div class="cal">${"SMTWTFS".split("").map((d,i)=>html`<b key=${"h"+i}>${d}</b>`)}${Array(f).fill(0).map((_,i)=>html`<span key=${"e"+i}/>`)}${Array.from({length:dm},(_,i)=>html`<div key=${i} class=${i+1==n.getDate()?"t":""}>${i+1}</div>`)}</div></div>`}
