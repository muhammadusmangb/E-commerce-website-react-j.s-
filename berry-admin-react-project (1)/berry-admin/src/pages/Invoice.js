import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Invoice(){const cols=["#", "Client", "Amount", "Status", "Date"],rows=[["INV-200", "Aslam", "$560.00", "Paid", "2026-01-01"], ["INV-201", "Sara", "$990.00", "Overdue", "2026-02-04"], ["INV-202", "Bilal", "$120.00", "Paid", "2026-03-07"], ["INV-203", "Hina", "$75.00", "Paid", "2026-04-10"], ["INV-204", "Usman", "$560.00", "Overdue", "2026-05-13"], ["INV-205", "Zain", "$120.00", "Overdue", "2026-06-16"], ["INV-206", "Ayesha", "$340.00", "Paid", "2026-07-19"], ["INV-207", "Omar", "$120.00", "Pending", "2026-08-22"], ["INV-208", "Fatima", "$990.00", "Paid", "2026-09-25"], ["INV-209", "Ali", "$340.00", "Paid", "2026-10-01"], ["INV-210", "Noor", "$75.00", "Pending", "2026-11-04"], ["INV-211", "Hamza", "$120.00", "Overdue", "2026-12-07"], ["INV-212", "Iqra", "$120.00", "Paid", "2026-01-10"], ["INV-213", "Talha", "$75.00", "Paid", "2026-02-13"]],st=[["Total Invoices", "248"], ["Paid", "$18k"], ["Pending", "$4.2k"]];
return html`<div><div class="g" style=${{marginBottom:16}}>${st.map((s,i)=>html`<${Stat} key=${i} l=${s[0]} v=${s[1]} c=${["#5500d9","#1e88e5","#2b3556"][i%3]}/>`)}</div><${DataTable} cols=${cols} rows=${rows}/></div>`}
