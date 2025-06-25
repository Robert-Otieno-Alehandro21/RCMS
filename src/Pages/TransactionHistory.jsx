import React from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionHistory.css";
import { FaMoneyBillWave, FaCheckCircle, FaTimesCircle, FaDownload, FaPaperPlane } from "react-icons/fa";

const TransactionHistory = () => {
  const navigate = useNavigate();

  const transactions = [
    {
      id: 1,
      project: "Housing Project A",
      amount: "Ksh 2,000,000",
      status: "Success",
      date: "2025-06-21",
    },
    {
      id: 2,
      project: "School Renovation",
      amount: "Ksh 850,000",
      status: "Success",
      date: "2025-06-18",
    },
    {
      id: 3,
      project: "Hospital Expansion",
      amount: "Ksh 3,500,000",
      status: "Failed",
      date: "2025-06-15",
    },
    {
      id: 4,
      project: "Bridge Construction",
      amount: "Ksh 4,800,000",
      status: "Success",
      date: "2025-06-12",
    },
    {
      id: 5,
      project: "Market Upgrade",
      amount: "Ksh 1,200,000",
      status: "Pending",
      date: "2025-06-11",
    }
  ];

  const handleDownload = (txn) => {
    const data = `
      Project: ${txn.project}
      Amount: ${txn.amount}
      Date: ${txn.date}
      Status: ${txn.status}
    `;
    const blob = new Blob([data], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${txn.project.replace(/\s+/g, '_')}_Transaction.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSendToUser = (txn) => {
    alert(`Transaction details for "${txn.project}" sent to the user successfully!`);
  };

  return (
    <div className="transaction-history-container">
      <header className="module-header">
        <div className="module-logo">RCMS</div>
        <div className="module-back" onClick={() => navigate(-1)}>&lt;</div>
      </header>

      <h2 className="module-title">Transaction History</h2>

      <div className="transactions-list">
        {transactions.map((txn) => (
          <div className="transaction-card" key={txn.id}>
            <FaMoneyBillWave className="txn-icon" />
            <div className="txn-details">
              <h4>{txn.project}</h4>
              <p><strong>Amount:</strong> {txn.amount}</p>
              <p><strong>Date:</strong> {txn.date}</p>
              <p className={`txn-status ${txn.status.toLowerCase()}`}>
                {txn.status === "Success" && <FaCheckCircle />}
                {txn.status === "Failed" && <FaTimesCircle />}
                {txn.status}
              </p>
              <div className="txn-actions">
                <button className="action-btn download-btn" onClick={() => handleDownload(txn)}>
                  <FaDownload /> Download
                </button>
                <button className="action-btn send-btn" onClick={() => handleSendToUser(txn)}>
                  <FaPaperPlane /> Send to User
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
