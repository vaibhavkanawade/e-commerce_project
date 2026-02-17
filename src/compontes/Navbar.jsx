import React, { useContext } from "react";
import "./Navbar.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Store } from "../context/StoreContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { search, setSearch, category, setCategory } = useContext(Store);
const { cart } = useContext(Store);
  return (
    <nav className="navbar">
      <div className="logo">MyShop</div>

      {/* Category */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option>Electronics</option>
        <option>Clothes</option>
      </select>

      {/* Search */}
      <div className="search">
        <input
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="actions">
        <button className="btn">
          <Link to="/login" >
    <FaUser />
    <span>Login</span>
  </Link>
        </button>

        <Link to="/cart" className="btn cart-btn">
          <FaShoppingCart />
          <span>Cart</span>

          {/* optional count */}
          {cart.length > 0 && (
            <div className="badge">{cart.length}</div>
          )}
        </Link>
        </div>
    </nav>
  );
};

export default Navbar;
