// Repository: e-plantShopping
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

// Plant data grouped by category
const plantCategories = [
  {
    category: "Indoor Plants",
    plants: [
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
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      {
        id: 4,
        name: "Ficus",
        price: 30,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 28,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 6,
        name: "Money Plant",
        price: 18,
        image: "https://via.placeholder.com/150",
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Track which items are added
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => [...prev, plant.id]);
  };

  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="product-list" style={{ padding: "20px" }}>
      <h3>Total Items in Cart: {cartQuantity}</h3>

      {plantCategories.map((category) => (
        <div key={category.category} style={{ marginBottom: "30px" }}>
          <h2>{category.category}</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {category.plants.map((plant) => {
              const isAdded = addedItems.includes(plant.id);

              return (
                <div
                  key={plant.id}
                  className="product-card"
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAdded}
                  >
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
