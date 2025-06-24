import React, { useState } from "react";
import "./UploadPhotos.css";
import { useNavigate } from "react-router-dom";
import { FaUpload, FaImages, FaBox, FaFileAlt } from "react-icons/fa";

const UploadPhotos = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState({});

  const handleFileChange = (e, category) => {
    setFiles({ ...files, [category]: e.target.files[0] });
    alert(`${category} file selected.`);
  };

  const handleUpload = (category) => {
    if (files[category]) {
      alert(`📤 ${category} uploaded successfully!`);
    } else {
      alert(`❌ No file selected for ${category}`);
    }
  };

  return (
    <div className="upload-container">
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>&lt;</div>
      </header>

      <h2 className="upload-title">Upload Project Files</h2>

      <div className="upload-grid">
        <div className="upload-card">
          <FaImages className="upload-icon" />
          <h3>Construction Progress</h3>
          <input type="file" onChange={(e) => handleFileChange(e, "Progress")} />
          <button onClick={() => handleUpload("Progress")}>Upload</button>
        </div>

        <div className="upload-card">
          <FaBox className="upload-icon" />
          <h3>Materials Received</h3>
          <input type="file" onChange={(e) => handleFileChange(e, "Materials")} />
          <button onClick={() => handleUpload("Materials")}>Upload</button>
        </div>

        <div className="upload-card">
          <FaFileAlt className="upload-icon" />
          <h3>Inspection Documents</h3>
          <input type="file" onChange={(e) => handleFileChange(e, "Inspection")} />
          <button onClick={() => handleUpload("Inspection")}>Upload</button>
        </div>

        <div className="upload-card">
          <FaImages className="upload-icon" />
          <h3>Site Overview</h3>
          <input type="file" onChange={(e) => handleFileChange(e, "Site Overview")} />
          <button onClick={() => handleUpload("Site Overview")}>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotos;
