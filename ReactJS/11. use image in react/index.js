import React from "react";
import { createRoot } from "react-dom/client";
import './style.css'


// importing component 
import App from './App'

// importing HTML
const root = createRoot(document.querySelector("#root"));


root.render(<App />);
