import React, { useEffect, useState } from "react";
import "./ViewProgress.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE } from '../utils/api';
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
  const [projectStages, setProjectStages] = useState([]);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
  const response = await axios.get(`${API_BASE}/api/progress/PROJECT_ID`);
        const data = response.data;
        setProjectStages(data.stages);
        const completed = data.stages.filter(s => s.status === "Completed").length;
        setProgressPercentage(Math.round((completed / data.stages.length) * 100));
      } catch (error) {
        console.error("Error fetching progress data:", error);
      }
    };
    fetchProgress();
  }, []);

  const handleMarkComplete = async (stageId) => {
    try {
  await axios.put(`${API_BASE}/api/progress/stage/${stageId}`, {
        status: "Completed",
      });
      setProjectStages(prev =>
        prev.map(stage => stage._id === stageId ? { ...stage, status: "Completed" } : stage)
      );
    } catch (err) {
      console.error("Error updating stage:", err);
    }
  };

  const handleDeleteStage = async (stageId) => {
    try {
  await axios.delete(`${API_BASE}/api/progress/stage/${stageId}`);
      setProjectStages(prev => prev.filter(stage => stage._id !== stageId));
    } catch (err) {
      console.error("Error deleting stage:", err);
    }
  };

  const pieData = {
    labels: projectStages.map((stage) => stage.name),
    datasets: [
      {
        label: "Project Stages",
        data: projectStages.map(() => 25), // placeholder values
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
        <p>🛠️ <strong>Progress:</strong> {progressPercentage}% Completed</p>
      </div>

      <div className="stage-boxes">
        {projectStages.map((stage, index) => (
          <div key={index} className={`stage-card ${stage.status.toLowerCase()}`}>
            <div className="stage-header">
              <h3>{stage.name}</h3>
              <span className="delete-button" onClick={() => handleDeleteStage(stage._id)}>✖</span>
            </div>
            <p>Status: <strong>{stage.status}</strong></p>
            <p>{stage.date}</p>
            {stage.status !== "Completed" && (
              <div className="stage-actions">
                <button onClick={() => handleMarkComplete(stage._id)}>✅ Mark as Complete</button>
              </div>
            )}
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
