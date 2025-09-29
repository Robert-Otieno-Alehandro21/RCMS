import React, { useEffect, useState } from "react";
import "./FetchProject.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from '../AppContext';
import { FaDownload, FaPaperPlane, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import axios from "axios";
import { API_BASE } from "../utils/api";

const FetchProject = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const { setSelectedProject } = useAppContext();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
  const res = await axios.get(`${API_BASE}/api/projects`);
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const sendToCompany = (project) => {
    setSelectedProject(project);
    alert(`✅ Project "${project.projectName}" sent to Construction Company successfully!`);
  };

  return (
    <div className="fetch-container">
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>&lt;</div>
      </header>

      <h2 className="fetch-title">Fetched User Projects</h2>

      <div className="project-grid">
        {projects.length === 0 ? (
          <p style={{ color: "#fff", textAlign: "center" }}>No projects available.</p>
        ) : (
          projects.map((project) => (
            <div className="project-card" key={project._id}>
              <h3>{project.projectName}</h3>
              <p>
                <strong>Status:</strong>{" "}
                {project.status === "Completed" ? (
                  <FaCheckCircle color="green" />
                ) : (
                  <FaHourglassHalf color="#FFD700" />
                )}{" "}
                {project.status || "Pending"}
              </p>
              <p><strong>Location:</strong> {project.location}</p>
              <p><strong>Budget:</strong> {project.budget || "N/A"}</p>
              <p><strong>Submitted:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>

              <a
                href={project.file || "#"}
                download
                className="details-btn"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaDownload /> Download Details
              </a>

              <button
                className="send-btn"
                onClick={() => sendToCompany(project)}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "0.8rem" }}
              >
                <FaPaperPlane /> Send to Construction Co.
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FetchProject;
