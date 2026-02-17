import "./admin.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
