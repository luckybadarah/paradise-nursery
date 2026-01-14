// src/components/ProductList.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

// Sample products
const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 25,
    image: "https://via.placeholder.com/150",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="product-list"
      style={{ display: "flex", gap: "20px", padding: "20px" }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%" }}
          />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
