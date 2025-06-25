import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FundingRequests.css";
import { FaMoneyCheckAlt, FaCheckCircle } from "react-icons/fa";

const FundingRequests = () => {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([
    {
      id: 1,
      project: "Housing Project A",
      amount: "Ksh 2,000,000",
      status: "Pending",
      reason: "Foundation construction",
    },
    {
      id: 2,
      project: "School Renovation",
      amount: "Ksh 850,000",
      status: "Approved",
      reason: "Roofing repairs",
    },
    {
      id: 3,
      project: "Hospital Expansion",
      amount: "Ksh 3,500,000",
      status: "Pending",
      reason: "New emergency wing",
    },
    {
      id: 4,
      project: "Market Upgrade",
      amount: "Ksh 1,200,000",
      status: "Pending",
      reason: "Stall roofing and drainage",
    },
    {
      id: 5,
      project: "Youth Training Center",
      amount: "Ksh 950,000",
      status: "Approved",
      reason: "Interior furnishing",
    },
    {
      id: 6,
      project: "Bridge Construction",
      amount: "Ksh 4,800,000",
      status: "Pending",
      reason: "Structural materials and labor",
    },
    {
      id: 7,
      project: "Water Supply System",
      amount: "Ksh 2,750,000",
      status: "Pending",
      reason: "Piping and tank installation",
    },
  ]);

  const handleApprove = (id) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: "Approved" } : req
    );
    setRequests(updated);
  };

  return (
    <div className="funding-requests-container">
      <header className="module-header">
        <div className="module-logo">RCMS</div>
        <div className="module-back" onClick={() => navigate(-1)}>&lt;</div>
      </header>

      <h2 className="module-title">Funding Requests</h2>

      <div className="requests-grid">
        {requests.map((req) => (
          <div className="request-card" key={req.id}>
            <FaMoneyCheckAlt className="request-icon" />
            <h3>{req.project}</h3>
            <p><strong>Amount:</strong> {req.amount}</p>
            <p><strong>Reason:</strong> {req.reason}</p>
            <p className={`status ${req.status.toLowerCase()}`}>Status: {req.status}</p>
            {req.status === "Pending" && (
              <button onClick={() => handleApprove(req.id)} className="approve-btn">
                <FaCheckCircle /> Approve
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundingRequests;
