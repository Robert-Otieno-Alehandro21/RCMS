import React from "react";
import { useNavigate } from "react-router-dom";
import "./BidProjects.css";
import { FaBriefcase, FaFileUpload, FaCheckCircle, FaArrowLeft } from "react-icons/fa";

const BidProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="bid-projects-container">
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}><FaArrowLeft /></div>
      </header>

      <h2 className="bid-title">Bid for Available Projects</h2>

      <div className="project-list">
        <div className="project-card">
          <h3>Community Health Center</h3>
          <p><strong>Location:</strong> Kisumu</p>
          <p><strong>Budget:</strong> Ksh 5,000,000</p>
          <p><strong>Duration:</strong> 8 Months</p>
          <button className="download-btn">Download Project Details</button>
        </div>

        <div className="project-card">
          <h3>Primary School Block</h3>
          <p><strong>Location:</strong> Nakuru</p>
          <p><strong>Budget:</strong> Ksh 3,200,000</p>
          <p><strong>Duration:</strong> 6 Months</p>
          <button className="download-btn">Download Project Details</button>
        </div>
      </div>

      <div className="credentials-section">
        <h3><FaBriefcase className="icon" /> Submit Certified Company Credentials</h3>
        <input type="file" className="upload-input" />
        <button className="submit-btn"><FaFileUpload /> Upload Credentials</button>
      </div>

      <div className="bid-form-section">
        <h3><FaCheckCircle className="icon" /> Submit Your Bid</h3>
        <form className="bid-form">
          <input type="text" placeholder="Project Name" required />
          <input type="number" placeholder="Proposed Budget (Ksh)" required />
          <input type="text" placeholder="Estimated Completion Time" required />
          <textarea placeholder="Bid Description" rows="4" required></textarea>
          <button type="submit" className="submit-btn">Submit Bid</button>
        </form>
      </div>
    </div>
  );
};

export default BidProjects;
