import React from "react";
import "./Constructioncompany.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaHandshake, FaWarehouse, FaChartLine, FaTools } from "react-icons/fa";

const Constructioncompany = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Construction Company Dashboard</h2>
        <div className="dashboard-modules">
          <div className="dashboard-card" onClick={() => navigate("/bid-projects")}>
            <FaBriefcase className="dashboard-icon" />
            <h3>Bid Projects</h3>
            <p>Submit proposals for available projects.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/track-progress")}>
            <FaChartLine className="dashboard-icon" />
            <h3>Track Progress</h3>
            <p>Monitor ongoing construction activities.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/resource-requests")}>
            <FaTools className="dashboard-icon" />
            <h3>Request Materials</h3>
            <p>Request tools and raw materials.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/partnerships")}>
            <FaHandshake className="dashboard-icon" />
            <h3>Partnerships</h3>
            <p>Connect with suppliers and partners.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/storage-facilities")}>
            <FaWarehouse className="dashboard-icon" />
            <h3>Storage Facilities</h3>
            <p>Manage material stockpiles and inventory.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constructioncompany;
