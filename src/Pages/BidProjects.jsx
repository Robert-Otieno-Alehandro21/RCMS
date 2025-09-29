import React, { useState, useEffect } from "react";
import { useAppContext } from '../AppContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE } from '../utils/api';
import "./BidProjects.css";
import {
  FaBriefcase,
  FaFileUpload,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

const BidProjects = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const { user } = useAppContext();
  const [bidData, setBidData] = useState({
    projectName: "",
    proposedBudget: "",
    estimatedTime: "",
    description: "",
  });
  const [credentialsFile, setCredentialsFile] = useState(null);


  useEffect(() => {
    axios
      .get(`${API_BASE}/api/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const handleChange = (e) => {
    setBidData({ ...bidData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCredentialsFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("projectName", bidData.projectName);
      formData.append("proposedBudget", bidData.proposedBudget);
      formData.append("estimatedTime", bidData.estimatedTime);
      formData.append("description", bidData.description);
      formData.append("companyId", user?.companyId || "");
      if (credentialsFile) {
        formData.append("credentialsFile", credentialsFile);
      }

      await axios.post(`${API_BASE}/api/bids/submit`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Bid submitted successfully!");
      setBidData({
        projectName: "",
        proposedBudget: "",
        estimatedTime: "",
        description: "",
      });
      setCredentialsFile(null);
    } catch (error) {
      console.error("❌ Error submitting bid:", error);
      alert("❌ Failed to submit bid.");
    }
  };

  return (
    <div className="bid-projects-container">
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </div>
      </header>

      <h2 className="bid-title">Bid for Available Projects</h2>

      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h3>{project.name}</h3>
            <p><strong>Location:</strong> {project.location}</p>
            <p><strong>Budget:</strong> Ksh {project.budget}</p>
            <p><strong>Duration:</strong> {project.duration}</p>
            <button className="download-btn">Download Project Details</button>
          </div>
        ))}
      </div>

      <div className="credentials-section">
        <h3><FaBriefcase className="icon" /> Submit Certified Company Credentials</h3>
        <input type="file" className="upload-input" onChange={handleFileChange} />
        <button className="submit-btn"><FaFileUpload /> Upload Credentials</button>
      </div>

      <div className="bid-form-section">
        <h3><FaCheckCircle className="icon" /> Submit Your Bid</h3>
        <form className="bid-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={bidData.projectName}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="proposedBudget"
            placeholder="Proposed Budget (Ksh)"
            value={bidData.proposedBudget}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="estimatedTime"
            placeholder="Estimated Completion Time"
            value={bidData.estimatedTime}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Bid Description"
            rows="4"
            value={bidData.description}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">Submit Bid</button>
        </form>
      </div>
    </div>
  );
};

export default BidProjects;
