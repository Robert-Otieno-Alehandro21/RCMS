import React from "react";
import "./Projectmanager.css";
import { FaProjectDiagram, FaMapMarkedAlt, FaImages, FaClipboardCheck, FaTools } from "react-icons/fa";

const Projectmanager = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Project Manager Dashboard</h2>
      <div className="dashboard-modules">
        <div className="dashboard-card">
          <FaProjectDiagram className="dashboard-icon" />
          <h3>Create Project</h3>
          <p>Start new construction projects efficiently.</p>
        </div>
        <div className="dashboard-card">
          <FaMapMarkedAlt className="dashboard-icon" />
          <h3>Select Land</h3>
          <p>Choose areas using map coordinates.</p>
        </div>
        <div className="dashboard-card">
          <FaImages className="dashboard-icon" />
          <h3>Upload Photos</h3>
          <p>Document the progress of your projects.</p>
        </div>
        <div className="dashboard-card">
          <FaClipboardCheck className="dashboard-icon" />
          <h3>Approve Milestones</h3>
          <p>Sign off project milestones for review.</p>
        </div>
        <div className="dashboard-card">
          <FaTools className="dashboard-icon" />
          <h3>Manage Resources</h3>
          <p>Track and allocate tools and labor.</p>
        </div>
      </div>
    </div>
  );
};

export default Projectmanager;
