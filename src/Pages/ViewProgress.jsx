import React from "react";
import "./ViewProgress.css";
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
  const barData = {
    labels: ["Foundation", "Walls", "Roofing", "Painting", "Finishing"],
    datasets: [
      {
        label: "Progress (%)",
        data: [100, 80, 60, 40, 20],
        backgroundColor: "#2e8b57",
        borderRadius: 5,
      },
    ],
  };

  const pieData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: ["#006400", "#90ee90", "#d3d3d3"],
      },
    ],
  };

  return (
    <div className="view-progress-container">
      <h2>Project Progress Overview</h2>

      <div className="charts">
        <div className="chart-box">
          <h4>Milestone Progress</h4>
          <Bar data={barData} />
        </div>
        <div className="chart-box">
          <h4>Status Distribution</h4>
          <Pie data={pieData} />
        </div>
      </div>

      <div className="milestone-section">
        <h3>Milestones</h3>
        <ul className="milestone-list">
          <li className="milestone completed">✔ Foundation - Completed</li>
          <li className="milestone in-progress">🔧 Walls - In Progress</li>
          <li className="milestone in-progress">🔨 Roofing - In Progress</li>
          <li className="milestone pending">⏳ Painting - Pending</li>
          <li className="milestone pending">⏳ Finishing - Pending</li>
        </ul>
      </div>
    </div>
  );
};

export default ViewProgress;
