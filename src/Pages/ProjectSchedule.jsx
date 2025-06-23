import React from "react";
import "./ProjectSchedule.css";
import { Pie } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const ProjectSchedule = () => {
  const pieData = {
    labels: ["Foundation", "Framing", "Roofing", "Finishing", "Inspection"],
    datasets: [
      {
        data: [20, 25, 15, 30, 10],
        backgroundColor: [
          "#006400",
          "#228B22",
          "#32CD32",
          "#7CFC00",
          "#ADFF2F"
        ],
        hoverOffset: 8,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <div className="schedule-container">
      <h2>Project Schedule Overview</h2>

      <div className="pie-chart-box">
        <Pie data={pieData} options={pieOptions} />
      </div>

      <div className="phase-details">
        {[
          { phase: "Foundation", status: "Completed" },
          { phase: "Framing", status: "In Progress" },
          { phase: "Roofing", status: "Upcoming" },
          { phase: "Finishing", status: "Upcoming" },
          { phase: "Inspection", status: "Pending Approval" },
        ].map((item, i) => (
          <div className="phase-card" key={i}>
            <h4>{item.phase}</h4>
            <p>Status: {item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSchedule;
