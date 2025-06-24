import React from "react";
import "./ViewProgress.css";
import { useNavigate } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ViewProgress = () => {
  const navigate = useNavigate();

  const progressPercentage = 85;

  const projectStages = [
    { name: "Foundation", status: "Completed", date: "2025-05-01" },
    { name: "Walls", status: "Completed", date: "2025-05-15" },
    { name: "Roofing", status: "In Progress", date: "Expected: 2025-06-25" },
    { name: "Finishing", status: "Pending", date: "Expected: 2025-07-10" },
  ];

  const pieData = {
    labels: projectStages.map((stage) => stage.name),
    datasets: [
      {
        label: "Project Stages",
        data: [25, 35, 20, 20],
        backgroundColor: ["#006400", "#228B22", "#90EE90", "#2E8B57"],
      },
    ],
  };

  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Progress (%)",
        data: [20, 40, 60, progressPercentage],
        backgroundColor: "#00a859",
      },
    ],
  };

  return (
    <div className="view-progress-container">
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>&lt;</div>
      </header>

      <h2 className="title">Project Progress Overview</h2>

      <div className="progress-details">
        <p>🛠️ <strong>Current Stage:</strong> Roofing</p>
        <p>📊 <strong>Estimated Completion:</strong> {progressPercentage}%</p>
        <p>📅 <strong>Next Stage:</strong> Finishing</p>
        <p>🔍 <strong>Expected Completion Time:</strong> 2 weeks remaining</p>
      </div>

      <div className="stage-boxes">
        {projectStages.map((stage, index) => (
          <div key={index} className={`stage-card ${stage.status.toLowerCase()}`}>
            <h3>{stage.name}</h3>
            <p>Status: <strong>{stage.status}</strong></p>
            <p>{stage.date}</p>
          </div>
        ))}
      </div>

      <div className="charts">
        <div className="chart-box">
          <h4>Stage Breakdown</h4>
          <Pie data={pieData} />
        </div>
        <div className="chart-box">
          <h4>Weekly Progress</h4>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default ViewProgress;
