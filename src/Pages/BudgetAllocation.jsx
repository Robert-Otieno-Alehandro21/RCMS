import React, { useState } from "react";
import "./BudgetAllocation.css";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaUpload, FaCheckCircle } from "react-icons/fa";

const BudgetAllocation = () => {
  const navigate = useNavigate();
  const [ApprovedFile, setApprovedFile] = useState(null);

  const handleUpload = (e) => {
    setApprovedFile(e.target.files[0]);
    alert("📤 Approved budget uploaded successfully!");
  };

  const handleApproval = () => {
    alert("✅ Budget Approved and Sent to User!");
  };

  return (
    <div className="budget-container">
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>&lt;</div>
      </header>

      <h2 className="budget-title">Budget Allocation Review</h2>

      <div className="budget-sections">
        <div className="budget-card user">
          <h3>User Proposed Budget</h3>
          <ul>
            <li>Foundation: KES 500,000</li>
            <li>Framing: KES 300,000</li>
            <li>Roofing: KES 400,000</li>
            <li>Finishing: KES 800,000</li>
          </ul>
          <p>Total: <strong>KES 2,000,000</strong></p>
          <a href="/user-budget.pdf" download className="budget-btn">
            <FaDownload /> Download Proposal
          </a>
        </div>

        <div className="budget-card contractor">
          <h3>Contractor Proposed Budget</h3>
          <ul>
            <li>Foundation: KES 550,000</li>
            <li>Framing: KES 350,000</li>
            <li>Roofing: KES 420,000</li>
            <li>Finishing: KES 780,000</li>
          </ul>
          <p>Total: <strong>KES 2,100,000</strong></p>

          <input type="file" className="upload-field" onChange={handleUpload} />
          <button className="budget-btn upload" onClick={handleApproval}>
            <FaCheckCircle /> Approve & Send to User
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetAllocation;
