import React, { useState } from "react";
import { html } from "../html.js";
import { CL, D, MO } from "../data.js";

export function Chart(){return html`<svg viewBox="0 0 420 240" style=${{width:"100%"}}>${[0,100,200,300,400].map(v=>html`<g key=${v}><line x1="34" x2="415" y1=${210-v*.5} y2=${210-v*.5} stroke="#2c3763"/><text x="0" y=${214-v*.5} fill="#8492c4" fontSize="11">${v}</text></g>`)}
${D.map((d,i)=>{let y=210;return html`<g key=${i}>${d.map((v,j)=>{y-=v*.5;return html`<rect key=${j} x=${40+i*31} y=${y} width="18" height=${v*.5} fill=${CL[j]}/>`})}<text x=${42+i*31} y="226" fill="#8492c4" fontSize="9">${MO[i]}</text></g>`})}</svg>`}
export function Spark({c="#7c4dff",w=false}){return html`<svg viewBox="0 0 300 100" style=${{width:"100%",display:"block"}}><path d="M0 100C30 60 50 60 80 70S110 80 130 40S160 10 190 40S230 20 260 30S290 50 300 45V100Z" fill=${c} opacity=".35"/><path d="M0 100C30 60 50 60 80 70S110 80 130 40S160 10 190 40S230 20 260 30S290 50 300 45" fill="none" stroke=${c} strokeWidth="2"/></svg>`}
