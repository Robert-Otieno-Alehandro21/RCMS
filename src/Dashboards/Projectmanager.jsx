import React from "react";
import "./Projectmanager.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import {
  FaProjectDiagram,
  FaBalanceScale,
  FaImages,
  FaClipboardCheck,
  FaTools,
} from "react-icons/fa";

const Projectmanager = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Project Manager Dashboard</h2>
        <div className="dashboard-modules">
          <div className="dashboard-card" onClick={() => navigate("/fetch-project")}>
            <FaProjectDiagram className="dashboard-icon" />
            <h3>Fetch Project</h3>
            <p>Access submitted project details from users.</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/budget-allocation")}>
            <FaBalanceScale className="dashboard-icon" />
            <h3>Budget Allocation</h3>
            <p>Plan and allocate funds for each milestone.</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/upload-photos")}>
            <FaImages className="dashboard-icon" />
            <h3>Upload Photos</h3>
            <p>Document the progress of your projects.</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/approve-milestones")}>
            <FaClipboardCheck className="dashboard-icon" />
            <h3>Approve Milestones</h3>
            <p>Review and approve project milestones.</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/manage-resources")}>
            <FaTools className="dashboard-icon" />
            <h3>Manage Resources</h3>
            <p>Track and assign construction resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectmanager;
