import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>
      {items.map((i) => (
        <div key={i.id}>
          <h3>{i.name}</h3>
          <input
            type="number"
            value={i.quantity}
            min="1"
            onChange={(e) =>
              dispatch(
                updateQuantity({ id: i.id, quantity: Number(e.target.value) })
              )
            }
          />
          <button onClick={() => dispatch(removeItem(i.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CartItem;
