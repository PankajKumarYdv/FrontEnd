import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// HTML Element
function element(key) {
  return (
    <div className="card" key={key}>
      <img
        src="https://imgs.search.brave.com/CcyErzqw73dJ8OtjY-GbK9WlFq3aGx3cszquXf1XJZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL3Yv/aXBob25lL2hvbWUv/Y2ovaW1hZ2VzL292/ZXJ2aWV3L2NvbnNp/ZGVyX21vZGFscy9l/bnZpcm9ubWVudC9t/b2RhbF90cmFkZV9p/bl9fYzJsdGw2MWJz/MmV1X2xhcmdlLmpw/Zw"
        alt="iphone"
      />
      <div className="cardContent">
        <h3>Iphone 16 Pro Max</h3>
        <p> Apple </p>
        <p>
          {" "}
          <b>₹120000</b>
        </p>
      </div>
    </div>
  );
}

// container
const cards = [
  element(1),
  element(2),
  element(3),
  element(4),
  element(5),
  element(6),
  element(7),
  element(8),
  element(9),
  element(10),
];

// creating root
const root = createRoot(document.querySelector("#root"));
root.render(<div className="container">{cards}</div>);
