import React from "react";
import Navbar from "../components/Navbar";
import {
  Plus,
  MapPin,
  CreditCard,
  BarChart2,
  Image,
  Download
} from "lucide-react";
import "./Userdashboard.css";

const Userdashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard user">
        <h2>Welcome, User</h2>
        <div className="dashboard-section">
          <button><Plus size={16} /> Create New Project</button>
          <button><MapPin size={16} /> Select Land Area</button>
          <button><CreditCard size={16} /> Make Payment</button>
          <button><BarChart2 size={16} /> Check Project Progress</button>
          <button><Image size={16} /> View Project Photos</button>
          <button><Download size={16} /> Download Reports</button>
        </div>
      </div>
    </>
  );
};

export default Userdashboard;
