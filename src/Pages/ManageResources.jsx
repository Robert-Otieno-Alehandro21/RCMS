import React from "react";
import "./ManageResources.css";
import { useNavigate } from "react-router-dom";
import { FaTools, FaUserFriends, FaChartBar, FaClipboardList } from "react-icons/fa";

const ManageResources = () => {
  const navigate = useNavigate();

  return (
    <div className="resources-container">
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>&lt;</div>
      </header>

      <h2 className="resources-title">Manage Resources</h2>

      <div className="resources-grid">
        <div className="resource-card">
          <FaTools className="resource-icon" />
          <h3>Available Equipment</h3>
          <p>View all equipment currently in stock and usable on sites.</p>
          <button className="resource-btn">View Equipment</button>
        </div>

        <div className="resource-card">
          <FaUserFriends className="resource-icon" />
          <h3>Allocate Resources</h3>
          <p>Assign labor or tools to active projects based on site needs.</p>
          <button className="resource-btn">Allocate Now</button>
        </div>

        <div className="resource-card">
          <FaChartBar className="resource-icon" />
          <h3>Usage Analytics</h3>
          <p>Monitor how resources are utilized over time.</p>
          <button className="resource-btn">View Usage</button>
        </div>

        <div className="resource-card">
          <FaClipboardList className="resource-icon" />
          <h3>Requests</h3>
          <p>Review incoming requests for new materials or manpower.</p>
          <button className="resource-btn">View Requests</button>
        </div>
      </div>
    </div>
  );
};

export default ManageResources;
