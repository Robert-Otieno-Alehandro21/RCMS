import React from "react";
import "./Userdashboard.css";
import { FaPlus, FaEye, FaChartLine, FaCalendarAlt, FaTasks } from "react-icons/fa";

const Userdashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">User Dashboard</h2>
      <div className="dashboard-modules">
        <div className="dashboard-card">
          <FaPlus className="dashboard-icon" />
          <h3>Create New Project</h3>
          <p>Initiate a new construction project with ease.</p>
        </div>
        <div className="dashboard-card">
          <FaEye className="dashboard-icon" />
          <h3>View My Projects</h3>
          <p>Keep track of all your ongoing projects.</p>
        </div>
        <div className="dashboard-card">
          <FaChartLine className="dashboard-icon" />
          <h3>Track Progress</h3>
          <p>Monitor real-time updates on your construction.</p>
        </div>
        <div className="dashboard-card">
          <FaCalendarAlt className="dashboard-icon" />
          <h3>Project Schedule</h3>
          <p>Review timelines and set important deadlines.</p>
        </div>
        <div className="dashboard-card">
          <FaTasks className="dashboard-icon" />
          <h3>Manage Tasks</h3>
          <p>Assign and follow up on construction tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
