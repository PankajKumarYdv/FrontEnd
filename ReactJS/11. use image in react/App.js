import React from "react";

const leftArrow = new URL("./assets/images/left-arrow.jpg", import.meta.url).href;
const rightArrow = new URL("./assets/images/right-arrow.jpg", import.meta.url).href;

export default function App() {
  return (
    <div>
      <img src={leftArrow} alt="Left Arrow" />
      <img src={rightArrow} alt="Right Arrow" />
    </div>
  );
}