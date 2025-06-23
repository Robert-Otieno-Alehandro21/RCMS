import React from "react";
import "./Userdashboard.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import {
  FaPlusCircle,
  FaChartBar,
  FaUsers,
  FaCalendarAlt,
  FaTools
} from "react-icons/fa";

const Userdashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h2 className="dashboard-title">User Dashboard</h2>
        <div className="dashboard-modules">
          <div className="dashboard-card" onClick={() => navigate("/create-project")}>
            <FaPlusCircle className="dashboard-icon" />
            <h3>Create Project</h3>
            <p>Initiate a new construction project.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/view-progress")}>
            <FaChartBar className="dashboard-icon" />
            <h3>View Progress</h3>
            <p>Monitor the ongoing construction progress.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/manage-team")}>
            <FaUsers className="dashboard-icon" />
            <h3>Manage Team</h3>
            <p>Assign and manage your construction team.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/project-schedule")}>
            <FaCalendarAlt className="dashboard-icon" />
            <h3>Project Schedule</h3>
            <p>View and edit the construction schedule.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/tools-resources")}>
            <FaTools className="dashboard-icon" />
            <h3>Tools & Resources</h3>
            <p>Access needed tools and materials.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
