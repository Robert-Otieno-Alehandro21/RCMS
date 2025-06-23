import React from "react";
import "./Bankmanagement.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { FaMoneyCheckAlt, FaFileInvoice, FaSearchDollar, FaClipboardList, FaHistory } from "react-icons/fa";

const Bankmanagement = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Bank Management Dashboard</h2>
        <div className="dashboard-modules">
          <div className="dashboard-card" onClick={() => navigate("/make-payments")}>
            <FaMoneyCheckAlt className="dashboard-icon" />
            <h3>Make Payments</h3>
            <p>Release payments for completed milestones.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/review-invoices")}>
            <FaFileInvoice className="dashboard-icon" />
            <h3>Review Invoices</h3>
            <p>Audit submitted invoices before approval.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/fund-disbursement")}>
            <FaSearchDollar className="dashboard-icon" />
            <h3>Disbursement Requests</h3>
            <p>View and process funding requests.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/loan-applications")}>
            <FaClipboardList className="dashboard-icon" />
            <h3>Loan Applications</h3>
            <p>Manage and review project loan requests.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/transaction-history")}>
            <FaHistory className="dashboard-icon" />
            <h3>Transaction History</h3>
            <p>Track all payment and transaction records.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bankmanagement;
