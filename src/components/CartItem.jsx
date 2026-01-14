// src/components/CartItem.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCart = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  return (
    <div className="cart-container" style={{ padding: "20px" }}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="cart-item"
          style={{
            borderBottom: "1px solid #ccc",
            marginBottom: "15px",
            paddingBottom: "10px",
          }}
        >
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          {/* Display individual item total */}
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleDecrement(item)}>-</button>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}

      <h3>Grand Total: ${totalCart}</h3>
    </div>
  );
};

export default CartItem;
