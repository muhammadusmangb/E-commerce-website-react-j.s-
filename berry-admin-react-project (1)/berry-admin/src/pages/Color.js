import React, { useState } from "react";
import { html } from "../html.js";

export function Color(){return html`<div class="g">${["#7c4dff","#2196f3","#ffc107","#00e676","#f44336","#5500d9","#1e88e5","#202a4a"].map(c=>html`<div key=${c} class="sw" style=${{background:c}}>${c}</div>`)}</div>`}
