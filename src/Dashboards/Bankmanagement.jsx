import React from "react";
import Navbar from "../components/Navbar";
import {
  Banknote,
  BarChart,
  FileDown
} from "lucide-react";
import "./Bankmanagement.css";

const Bankmanagement = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard bank">
        <h2>Bank Management Dashboard</h2>
        <div className="dashboard-section">
          <button><Banknote size={16} /> View Transactions</button>
          <button><BarChart size={16} /> Generate Reports</button>
          <button><FileDown size={16} /> Download User Reports</button>
        </div>
      </div>
    </>
  );
};

export default Bankmanagement;

