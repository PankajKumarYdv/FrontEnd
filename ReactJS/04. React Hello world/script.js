// React
const h2 = React.createElement("h2",{className : "heading"}, "Hello, Pankaj");
const paragraph = React.createElement("p",{className : "paragraph"},"This is the sample Paragraph you may like it. "); 

// ReactDOM
const root = ReactDOM.createRoot(document.querySelector(".root"));
// Rendering that element
root.render(h2);