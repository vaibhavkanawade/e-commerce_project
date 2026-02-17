import { createContext, useState } from "react";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // 🔥 NEW GLOBAL FILTER STATES
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      if (exist) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const placeOrder = (address) => {
    setOrders([...orders, { id: Date.now(), items: cart, address }]);
    setCart([]);
  };

  return (
    <Store.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        orders,
        placeOrder,

        // 🔥 expose filters
        search,
        setSearch,
        category,
        setCategory,
      }}
    >
      {children}
    </Store.Provider>
  );
};
