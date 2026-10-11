import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Analytics(){return html`<div><div class="g" style=${{marginBottom:16}}><${Stat} l="Page Views" v="84k" c="#5500d9"/><${Stat} l="Sessions" v="31k"/><${Stat} l="Conversion" v="4.8%" c="#2b3556"/></div><${Card} title="Yearly Growth"><${Chart}/><//></div>`}
