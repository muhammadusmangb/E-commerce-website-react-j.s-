import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { html } from "./html.js";

ReactDOM.createRoot(document.getElementById("root")).render(html`<${App}/>`);
