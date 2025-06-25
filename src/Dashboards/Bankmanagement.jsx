import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bankmanagement.css";
import Header from "../components/Header";
import { FaFileInvoiceDollar, FaMoneyCheckAlt, FaHandHoldingUsd, FaHistory } from "react-icons/fa";

const Bankmanagement = () => {
  const navigate = useNavigate();

  return (
    <div className="bank-dashboard">
      <Header />
      <h2 className="dashboard-title">Bank Management Dashboard</h2>

      <div className="dashboard-modules">
        <div className="dashboard-card" onClick={() => navigate("/view-invoices")}>
          <FaFileInvoiceDollar className="dashboard-icon" />
          <h3>View Invoices</h3>
          <p>Access and verify all submitted invoices.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/make-payments")}>
          <FaMoneyCheckAlt className="dashboard-icon" />
          <h3>Make Payments</h3>
          <p>Initiate project milestone payments securely.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/funding-requests")}>
          <FaHandHoldingUsd className="dashboard-icon" />
          <h3>Funding Requests</h3>
          <p>Review funding applications and approve funds.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/transaction-history")}>
          <FaHistory className="dashboard-icon" />
          <h3>Transaction History</h3>
          <p>Track all past financial transactions and status.</p>
        </div>
      </div>
    </div>
  );
};

export default Bankmanagement;
