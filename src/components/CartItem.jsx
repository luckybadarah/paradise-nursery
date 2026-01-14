// Repository: e-plantShopping
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Checkout functionality coming soon!"); // Placeholder
  };

  const handleContinueShopping = () => {
    navigate("/"); // Go back to landing / product list
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
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleDecrement(item)}>-</button>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleRemove(item.id)}>Delete</button>
        </div>
      ))}

      <h3>Grand Total: ${totalCart}</h3>

      {cartItems.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={handleCheckout} style={{ marginRight: "10px" }}>
            Checkout
          </button>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
