import React, { useState } from "react";
import "./CreateProject.css";
import { Bar, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register components and plugin
Chart.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

const CreateProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    latitude: "",
    longitude: "",
    landSize: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProject", JSON.stringify(formData));
    alert("Project submitted successfully!");
  };

  const barData = {
    labels: ["Budget Allocated", "Used", "Remaining"],
    datasets: [
      {
        label: "Project Budget (Ksh)",
        backgroundColor: "#228B22",
        data: [1000000, 400000, 600000],
      },
    ],
  };

  const pieData = {
    labels: ["Foundation", "Framing", "Roofing", "Finishing"],
    datasets: [
      {
        label: "Project Stages",
        backgroundColor: ["#228B22", "#90EE90", "#2E8B57", "#6B8E23"],
        data: [20, 30, 25, 25],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      datalabels: {
        color: "#fff",
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
  };

  return (
    <div className="create-project-container">
      <h2>Create New Project</h2>
      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="latitude"
          placeholder="Latitude (e.g. -1.2921)"
          value={formData.latitude}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="longitude"
          placeholder="Longitude (e.g. 36.8219)"
          value={formData.longitude}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="landSize"
          placeholder="Land Size (in acres)"
          value={formData.landSize}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Project</button>
      </form>

      <div className="charts-section">
        <div className="chart-box">
          <h4>Budget Allocation</h4>
          <Bar data={barData} />
        </div>
        <div className="chart-box">
          <h4>Project Stages</h4>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
