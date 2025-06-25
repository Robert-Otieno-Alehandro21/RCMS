import React from "react";
import "./Constructioncompany.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaTools, FaTruck, FaUsers } from "react-icons/fa";

const Constructioncompany = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <Header />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Construction Company Dashboard</h2>
        <div className="dashboard-modules">

          <div className="dashboard-card" onClick={() => navigate("/bid-projects")}>
            <FaBriefcase className="dashboard-icon" />
            <h3>Bid Projects</h3>
            <p>Submit proposals for available projects.</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/request-materials")}>
            <FaTools className="dashboard-icon" />
            <h3>Request Materials</h3>
            <p>Request tools and raw materials.</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/track-deliveries")}>
            <FaTruck className="dashboard-icon" />
            <h3>Track Deliveries</h3>
            <p>Monitor deliveries of requested items.</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/workforce")}>
            <FaUsers className="dashboard-icon" />
            <h3>Workforce</h3>
            <p>Manage and monitor labor force.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Constructioncompany;
