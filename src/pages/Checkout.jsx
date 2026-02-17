import { useState, useContext } from "react";
import { Store } from "../context/StoreContext";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const { placeOrder } = useContext(Store);

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>

      <textarea
        placeholder="Shipping address"
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={() => placeOrder(address)}>Place Order</button>
    </div>
  );
};

export default Checkout;
