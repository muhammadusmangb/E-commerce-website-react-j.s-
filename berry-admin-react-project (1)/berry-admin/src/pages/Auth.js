import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Auth({name}){const reg=/Register/.test(name);return html`<div class="cd" style=${{maxWidth:420,margin:"0 auto"}}><h3>${reg?"Sign up":"Login"}</h3>${reg&&html`<input class="in" placeholder="Full name"/>`}<input class="in" placeholder="Email"/><input class="in" type="password" placeholder="Password"/><button class="btn">${reg?"Create account":"Sign In"}</button></div>`}
