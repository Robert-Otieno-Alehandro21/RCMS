import React from "react";
import "./ToolsResources.css";
import { FaFileDownload, FaUpload, FaBookOpen, FaInfoCircle } from "react-icons/fa";

const ToolsResources = () => {
  return (
    <div className="tools-resources-container">
      {/* Header */}
      <header className="tools-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => window.history.back()}>&lt;</div>
      </header>

      <h2 className="tools-title">Tools & Resources</h2>

      <div className="tools-grid">
        {/* Download Reports */}
        <div className="tool-card">
          <FaFileDownload className="tool-icon" />
          <h3>Download Reports</h3>
          <select className="report-select">
            <option>Select a Report</option>
            <option value="progress">Progress Report</option>
            <option value="schedule">Schedule Summary</option>
            <option value="finance">Financial Breakdown</option>
          </select>
          <button className="tool-btn">Download</button>
        </div>

        {/* Upload Documents */}
        <div className="tool-card">
          <FaUpload className="tool-icon" />
          <h3>Upload Documents</h3>
          <input type="file" className="upload-input" />
          <button className="tool-btn">Upload</button>
        </div>

        {/* Guides & Manuals */}
        <div className="tool-card">
          <FaBookOpen className="tool-icon" />
          <h3>Guides & Manuals</h3>
          <p>Access construction guides and safety manuals.</p>
          <button className="tool-btn">View Guides</button>
        </div>

        {/* FAQs & Help */}
        <div className="tool-card">
          <FaInfoCircle className="tool-icon" />
          <h3>FAQs & Help</h3>
          <p>Get answers to frequently asked questions.</p>
          <button className="tool-btn">View FAQs</button>
        </div>
      </div>
    </div>
  );
};

export default ToolsResources;
