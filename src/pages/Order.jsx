import { useContext } from "react";
import { Store } from "../context/StoreContext";

const Orders = () => {
  const { orders } = useContext(Store);

  return (
    <div style={{ padding: 20 }}>
      <h2>Orders</h2>

      {orders.map((o) => (
        <div key={o.id}>
          Order #{o.id}
          <p>{o.address}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
