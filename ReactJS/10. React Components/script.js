import { createRoot } from "react-dom/client";
import "./style.css";
import React from "react";

// Card Function
function Card(props) {
  const { title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

// Element
const root = createRoot(document.getElementById("root"));

// Fetching data from API
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            // using the above method
            <Card
              key={product.id} // to assign varibale we use {}
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
            />
          );
        })}
      </div>,
    );
  });
