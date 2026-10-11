import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function FormsComp(){const [r,sr]=useState(30),[c,sc]=useState(true);return html`<div class="g"><${Card} title="Inputs"><input class="in" placeholder="Text"/><select class="in"><option>Option 1</option><option>Option 2</option></select><//><${Card} title="Controls"><label><input type="checkbox" checked=${c} onChange=${()=>sc(!c)}/> Checkbox</label><br/><label><input type="radio" name="r"/> Radio A</label> <label><input type="radio" name="r"/> Radio B</label><p>Slider: ${r}</p><input type="range" value=${r} onChange=${e=>sr(e.target.value)}/><//></div>`}
