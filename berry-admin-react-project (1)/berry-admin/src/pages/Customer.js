import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Customer(){const cols=["ID", "Name", "Email", "City", "Orders"],rows=[[1000, "Aslam", "aslam@mail.com", "London", 4], [1001, "Sara", "sara@mail.com", "Lahore", 3], [1002, "Bilal", "bilal@mail.com", "Lahore", 19], [1003, "Hina", "hina@mail.com", "London", 10], [1004, "Usman", "usman@mail.com", "Karachi", 37], [1005, "Zain", "zain@mail.com", "Dubai", 36], [1006, "Ayesha", "ayesha@mail.com", "Lahore", 7], [1007, "Omar", "omar@mail.com", "Lahore", 24], [1008, "Fatima", "fatima@mail.com", "Karachi", 36], [1009, "Ali", "ali@mail.com", "Karachi", 37], [1010, "Noor", "noor@mail.com", "Karachi", 14], [1011, "Hamza", "hamza@mail.com", "London", 35], [1012, "Iqra", "iqra@mail.com", "London", 21], [1013, "Talha", "talha@mail.com", "London", 38]],st=[["Customers", "1,204"], ["New", "86"], ["Active", "912"]];
return html`<div><div class="g" style=${{marginBottom:16}}>${st.map((s,i)=>html`<${Stat} key=${i} l=${s[0]} v=${s[1]} c=${["#5500d9","#1e88e5","#2b3556"][i%3]}/>`)}</div><${DataTable} cols=${cols} rows=${rows}/></div>`}
