import React, { useState } from "react";
import { html } from "../html.js";
import { Spark } from "../components/Chart.js";

export function Generic({name}){return html`<div class="g">${["Total","Active","Pending"].map((l,i)=>html`<div key=${l} class="cd"><span class="mu">${l} ${name}</span><h2>${[248,132,16][i]}</h2></div>`)}<div class="cd" style=${{gridColumn:"1/-1"}}><b>${name} overview</b><${Spark} c="#2196f3"/></div></div>`}
