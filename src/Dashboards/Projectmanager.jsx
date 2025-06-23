import React from "react";
import "./Projectmanager.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { FaProjectDiagram, FaMapMarkedAlt, FaImages, FaClipboardCheck, FaTools } from "react-icons/fa";

const Projectmanager = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Project Manager Dashboard</h2>
        <div className="dashboard-modules">
          <div className="dashboard-card" onClick={() => navigate("/create-project")}>
            <FaProjectDiagram className="dashboard-icon" />
            <h3>Create Project</h3>
            <p>Start new construction projects efficiently.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/select-land")}>
            <FaMapMarkedAlt className="dashboard-icon" />
            <h3>Select Land</h3>
            <p>Choose areas using map coordinates.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/upload-photos")}>
            <FaImages className="dashboard-icon" />
            <h3>Upload Photos</h3>
            <p>Document the progress of your projects.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/approve-milestones")}>
            <FaClipboardCheck className="dashboard-icon" />
            <h3>Approve Milestones</h3>
            <p>Sign off project milestones for review.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/manage-resources")}>
            <FaTools className="dashboard-icon" />
            <h3>Manage Resources</h3>
            <p>Track and allocate tools and labor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectmanager;
