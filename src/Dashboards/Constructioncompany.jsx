import React from "react";
import "./Constructioncompany.css";
import { FaHardHat, FaTools, FaTruck, FaUserFriends, FaBriefcase } from "react-icons/fa";

const Constructioncompany = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Construction Company Dashboard</h2>
      <div className="dashboard-modules">
        <div className="dashboard-card">
          <FaHardHat className="dashboard-icon" />
          <h3>Assign Workers</h3>
          <p>Allocate workforce to various project sites.</p>
        </div>
        <div className="dashboard-card">
          <FaTools className="dashboard-icon" />
          <h3>Request Materials</h3>
          <p>Send material requirements to suppliers.</p>
        </div>
        <div className="dashboard-card">
          <FaTruck className="dashboard-icon" />
          <h3>Logistics</h3>
          <p>Track equipment and delivery schedules.</p>
        </div>
        <div className="dashboard-card">
          <FaUserFriends className="dashboard-icon" />
          <h3>Team Management</h3>
          <p>Organize and monitor team performance.</p>
        </div>
        <div className="dashboard-card">
          <FaBriefcase className="dashboard-icon" />
          <h3>Bid for Projects</h3>
          <p>Participate in upcoming project tenders.</p>
        </div>
      </div>
    </div>
  );
};

export default Constructioncompany;
