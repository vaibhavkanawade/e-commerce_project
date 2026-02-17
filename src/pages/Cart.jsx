import { useContext } from "react";
import { Store } from "../context/StoreContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(Store);

  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} x {item.qty}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <Link to="/checkout">Go to Checkout</Link>
    </div>
  );
};

export default Cart;
