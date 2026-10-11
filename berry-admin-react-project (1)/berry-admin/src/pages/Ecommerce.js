import React,{useState} from "react";
import {html} from "../html.js";
import {Badge,Card,Stat,DataTable} from "../components/UI.js";
import {Chart,Spark} from "../components/Chart.js";

export function Ecommerce(){const cols=["SKU", "Product", "Price", "Stock", "Category"],rows=[["P-300", "Sneakers 1", "$99", 60, "Sports"], ["P-301", "Keyboard 2", "$29", 7, "Sports"], ["P-302", "Keyboard 3", "$99", 82, "Sports"], ["P-303", "Keyboard 4", "$199", 36, "Sports"], ["P-304", "Backpack 5", "$99", 2, "Tech"], ["P-305", "Headphones 6", "$59", 78, "Fashion"], ["P-306", "Backpack 7", "$29", 27, "Tech"], ["P-307", "Watch 8", "$59", 50, "Tech"], ["P-308", "Backpack 9", "$29", 21, "Tech"], ["P-309", "Backpack 10", "$99", 113, "Fashion"], ["P-310", "Backpack 11", "$99", 90, "Tech"], ["P-311", "Headphones 12", "$199", 29, "Fashion"], ["P-312", "Sneakers 13", "$59", 19, "Fashion"], ["P-313", "Keyboard 14", "$59", 1, "Tech"]],st=[["Products", "312"], ["Low Stock", "14"], ["Revenue", "$52k"]];
return html`<div><div class="g" style=${{marginBottom:16}}>${st.map((s,i)=>html`<${Stat} key=${i} l=${s[0]} v=${s[1]} c=${["#5500d9","#1e88e5","#2b3556"][i%3]}/>`)}</div><${DataTable} cols=${cols} rows=${rows}/></div>`}
