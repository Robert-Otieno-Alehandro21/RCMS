import React from "react";
import "./Bankmanagement.css";
import { FaMoneyCheckAlt, FaFileInvoice, FaSearchDollar, FaClipboardList, FaHistory } from "react-icons/fa";

const Bankmanagement = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Bank Management Dashboard</h2>
      <div className="dashboard-modules">
        <div className="dashboard-card">
          <FaMoneyCheckAlt className="dashboard-icon" />
          <h3>Approve Payments</h3>
          <p>Authorize payments for completed milestones.</p>
        </div>
        <div className="dashboard-card">
          <FaFileInvoice className="dashboard-icon" />
          <h3>View Invoices</h3>
          <p>Review and archive project invoices.</p>
        </div>
        <div className="dashboard-card">
          <FaSearchDollar className="dashboard-icon" />
          <h3>Payment Tracking</h3>
          <p>Monitor disbursed and pending transactions.</p>
        </div>
        <div className="dashboard-card">
          <FaClipboardList className="dashboard-icon" />
          <h3>Reports</h3>
          <p>Generate reports on payments and approvals.</p>
        </div>
        <div className="dashboard-card">
          <FaHistory className="dashboard-icon" />
          <h3>Transaction History</h3>
          <p>Access complete records of all transactions.</p>
        </div>
      </div>
    </div>
  );
};

export default Bankmanagement;
