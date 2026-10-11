import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Orders(){const cols=["Order", "Customer", "Total", "Status", "Date"],rows=[["#5000", "Aslam", "$320", "Processing", "2026-03-07"], ["#5001", "Hina", "$150", "Shipped", "2026-04-10"], ["#5002", "Ayesha", "$89", "Shipped", "2026-05-13"], ["#5003", "Ali", "$49", "Processing", "2026-06-16"], ["#5004", "Iqra", "$320", "Processing", "2026-07-19"], ["#5005", "Daniel", "$320", "Processing", "2026-08-22"], ["#5006", "Bilal", "$49", "Delivered", "2026-09-25"], ["#5007", "Zain", "$320", "Shipped", "2026-10-01"], ["#5008", "Fatima", "$150", "Shipped", "2026-11-04"], ["#5009", "Hamza", "$320", "Cancelled", "2026-12-07"], ["#5010", "Maryam", "$49", "Delivered", "2026-01-10"], ["#5011", "Sara", "$150", "Processing", "2026-02-13"], ["#5012", "Usman", "$150", "Cancelled", "2026-03-16"], ["#5013", "Omar", "$320", "Delivered", "2026-04-19"]],st=[["Orders", "961"], ["Delivered", "742"], ["Returns", "21"]];
return html`<div><div class="g" style=${{marginBottom:16}}>${st.map((s,i)=>html`<${Stat} key=${i} l=${s[0]} v=${s[1]} c=${["#5500d9","#1e88e5","#2b3556"][i%3]}/>`)}</div><${DataTable} cols=${cols} rows=${rows}/></div>`}
