import React, { useState } from "react";
import "./MakePayments.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MakePayments = () => {
  const navigate = useNavigate();

  const [project, setProject] = useState("");
  const [milestone, setMilestone] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Bank Transfer");
  const [userApproved, setUserApproved] = useState(false);
  const [managerApproved, setManagerApproved] = useState(false);

  const handlePayment = () => {
    if (userApproved && managerApproved) {
      alert(`✅ Payment of Ksh ${amount} released for "${milestone}"`);
      // TODO: Send notification to user
    } else {
      alert("⚠️ Approval required from both user and project manager.");
    }
  };

  const sendApprovalReminder = () => {
    alert("🔔 Reminder sent to User & Project Manager to approve the milestone.");
    // TODO: Trigger backend notification
  };

  return (
    <div className="make-payments-container">
      <header className="module-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </div>
      </header>

      <h2 className="payments-title">Make Payments</h2>

      <div className="payment-form">
        <div className="form-group">
          <label>Project</label>
          <select value={project} onChange={(e) => setProject(e.target.value)}>
            <option value="">Select Project</option>
            <option value="Project A">Project A</option>
            <option value="Project B">Project B</option>
          </select>
        </div>

        <div className="form-group">
          <label>Milestone</label>
          <select value={milestone} onChange={(e) => setMilestone(e.target.value)}>
            <option value="">Select Milestone</option>
            <option value="Foundation Complete">Foundation Complete</option>
            <option value="Roofing Done">Roofing Done</option>
          </select>
        </div>

        <div className="form-group">
          <label>Payment Amount (Ksh)</label>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option>Bank Transfer</option>
            <option>Stripe</option>
            <option>Cheque</option>
          </select>
        </div>

        <div className="approval-status">
          <div className={`status-box ${userApproved ? "approved" : "not-approved"}`}>
            User Approval: {userApproved ? "Approved ✅" : "Not Approved ❌"}
          </div>
          <div className={`status-box ${managerApproved ? "approved" : "not-approved"}`}>
            Project Manager Approval: {managerApproved ? "Approved ✅" : "Not Approved ❌"}
          </div>
        </div>

        <div className="approval-controls">
          <label>
            <input
              type="checkbox"
              checked={userApproved}
              onChange={() => setUserApproved(!userApproved)}
            />
            User Approval Confirmed
          </label>
          <label>
            <input
              type="checkbox"
              checked={managerApproved}
              onChange={() => setManagerApproved(!managerApproved)}
            />
            Project Manager Approval Confirmed
          </label>
        </div>

        <div className="buttons-row">
          <button className="notify-btn" onClick={sendApprovalReminder}>
            🔔 Send Approval Request
          </button>
          <button className="submit-btn" onClick={handlePayment}>
            💰 Release Payment
          </button>
        </div>
      </div>

      <div className="payment-summary">
        <h3>Previous Payments</h3>
        <ul>
          <li>Project A - Foundation Complete - Ksh 400,000 - ✅ Paid</li>
          <li>Project B - Roofing Done - Ksh 200,000 - ⏳ Awaiting Approval</li>
        </ul>
      </div>
    </div>
  );
};

export default MakePayments;
