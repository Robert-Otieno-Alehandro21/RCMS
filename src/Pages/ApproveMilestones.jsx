import React, { useState } from "react";
import "./ApproveMilestones.css";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaInfoCircle, FaUserCheck } from "react-icons/fa";

const milestoneData = [
  { id: 1, title: "Foundation Completed", status: "Awaiting Approval" },
  { id: 2, title: "Walls Constructed", status: "In Progress" },
  { id: 3, title: "Roof Installed", status: "Completed" },
  { id: 4, title: "Finishing Touches", status: "In Progress" },
];

const ApproveMilestones = () => {
  const navigate = useNavigate();
  const [milestones, setMilestones] = useState(milestoneData);

  const handleUserClearance = (id) => {
    alert(`📨 User has been requested to confirm milestone #${id} satisfaction.`);
  };

  const handleApprove = (id) => {
    alert(`✅ Milestone #${id} Approved. Proceed to payment.`);
    setMilestones((prev) =>
      prev.map((milestone) =>
        milestone.id === id ? { ...milestone, status: "Approved" } : milestone
      )
    );
  };

  return (
    <div className="milestone-container">
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>&lt;</div>
      </header>

      <h2 className="milestone-title">Approve Project Milestones</h2>

      <div className="milestone-grid">
        {milestones.map((item) => (
          <div className="milestone-card" key={item.id}>
            <h3>{item.title}</h3>
            <p>Status: <span className={`status ${item.status.replace(" ", "").toLowerCase()}`}>{item.status}</span></p>
            <div className="milestone-actions">
              <button className="view-btn">
                <FaInfoCircle /> View Details
              </button>
              <button className="clearance-btn" onClick={() => handleUserClearance(item.id)}>
                <FaUserCheck /> Request Clearance
              </button>
              <button className="approve-btn" onClick={() => handleApprove(item.id)}>
                <FaCheckCircle /> Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproveMilestones;
