import React from "react";
import { createRoot } from "react-dom/client";

const name = "Pankaj Kumar";
const heading = <h1> Hello {name} </h1>;

const root = createRoot(document.querySelector("#root"));
root.render(heading);
