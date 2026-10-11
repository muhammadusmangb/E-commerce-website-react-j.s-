import React, { useState } from "react";
import { html } from "../html.js";

export function Users({name}){const r=[["Aslam","aslam@mail.com","Admin"],["Sara","sara@mail.com","Editor"],["Bilal","bilal@mail.com","Viewer"],["Hina","hina@mail.com","Editor"]];
return html`<table class="tb"><thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead><tbody>${r.map(x=>html`<tr key=${x[0]}><td>${x[0]}</td><td class="mu">${x[1]}</td><td><span class="bdg" style=${{margin:0}}>${x[2]}</span></td></tr>`)}</tbody></table>`}
