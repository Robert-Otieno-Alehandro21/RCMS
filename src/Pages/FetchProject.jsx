import React from "react";
import "./FetchProject.css";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaPaperPlane, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

const FetchProject = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Baraka Estate",
      status: "Completed",
      location: "Kisumu",
      budget: "KES 2,500,000",
      date: "March 2025",
      file: "/project-details-baraka.pdf",
    },
    {
      id: 2,
      title: "Green Gardens Apartments",
      status: "Ongoing",
      location: "Nairobi",
      budget: "KES 5,000,000",
      date: "May 2025",
      file: "/project-details-greengardens.pdf",
    },
    {
      id: 3,
      title: "Newlife Church Complex",
      status: "Ongoing",
      location: "Eldoret",
      budget: "KES 3,800,000",
      date: "June 2025",
      file: "/project-details-newlife.pdf",
    },
    {
      id: 4,
      title: "Juja Plaza",
      status: "Completed",
      location: "Thika",
      budget: "KES 4,200,000",
      date: "Feb 2025",
      file: "/project-details-juja.pdf",
    },
  ];

  const sendToCompany = (title) => {
    alert(`✅ Project "${title}" sent to Construction Company successfully!`);
  };

  return (
    <div className="fetch-container">
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>&lt;</div>
      </header>

      <h2 className="fetch-title">Fetched User Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p><strong>Status:</strong> {project.status === "Completed" ? <FaCheckCircle color="green" /> : <FaHourglassHalf color="#FFD700" />} {project.status}</p>
            <p><strong>Location:</strong> {project.location}</p>
            <p><strong>Budget:</strong> {project.budget}</p>
            <p><strong>Submitted:</strong> {project.date}</p>
            
            <a
              href={project.file}
              download
              className="details-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <FaDownload /> Download Details
            </a>

            <button
              className="send-btn"
              onClick={() => sendToCompany(project.title)}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "0.8rem" }}
            >
              <FaPaperPlane /> Send to Construction Co.
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchProject;
