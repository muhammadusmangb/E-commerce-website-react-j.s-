import React, { useState } from "react";
import { html } from "../html.js";

export function Kanban(){const c={"To Do":["Design login","Setup API"],"In Progress":["Dashboard UI","Sidebar menu"],"Done":["Project setup","Theme colors"]};return html`<div class="kb">${Object.keys(c).map(k=>html`<div key=${k}><b>${k}</b>${c[k].map(x=>html`<div key=${x} class="kc">${x}</div>`)}</div>`)}</div>`}
