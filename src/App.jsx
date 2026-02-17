import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../src/compontes/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";  
import Checkout from "./pages/Checkout";
import Orders from "../src/pages/Order";
import './App.css'




import AdminDashboard from "./admin/AdminDashboard";
import DashboardHome from "./admin/DashboardHome";
import Products from "./admin/Products";
import OrderManagement from "./admin/OrderManagement";

import Users from "./admin/Users";
import Register from "./pages/Register";
function App() {
  return (
    <BrowserRouter>
      {/* visible on all pages */}
      <Navbar />

      {/* page changing area */}
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
       <Routes>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<Products />} />
          <Route path="ordermanagement" element={<OrderManagement />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
