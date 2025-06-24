import React, { useState } from "react";
import "./CreateProject.css";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale);

// Component to capture map click events
const LocationSelector = ({ setLocation }) => {
  useMapEvents({
    click(e) {
      setLocation({
        latitude: e.latlng.lat.toFixed(6),
        longitude: e.latlng.lng.toFixed(6),
      });
    },
  });
  return null;
};

const CreateProject = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const navigate = useNavigate(); // For navigation

  // Bar chart data
  const barData = {
    labels: ["Budget Allocated", "Used", "Remaining"],
    datasets: [
      {
        label: "Project Budget (Ksh)",
        backgroundColor: "#90EE90",
        data: [1000000, 400000, 600000],
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: ["Foundation", "Framing", "Roofing", "Finishing"],
    datasets: [
      {
        label: "Stages (%)",
        backgroundColor: ["#228B22", "#90EE90", "#2E8B57", "#6B8E23"],
        data: [20, 30, 25, 25],
      },
    ],
  };

  return (
    <div className="create-project-container">
      {/* Header */}
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>
          &lt;
        </div>
      </header>

      {/* Page Title */}
      <h2 className="title">Create New Project</h2>

      {/* Project Form */}
      <form className="project-form">
        <input type="text" placeholder="Project Title" required />
        <textarea placeholder="Project Description" required></textarea>

        <div className="input-group">
          <label>Select Location (Click on Map)</label>
          <MapContainer
            center={[-1.2921, 36.8219]}
            zoom={6}
            scrollWheelZoom={false}
            className="map-box"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            />
            <LocationSelector setLocation={setLocation} />
            {location.latitude && location.longitude && (
              <Marker position={[location.latitude, location.longitude]} />
            )}
          </MapContainer>
        </div>

        <div className="input-group">
          <label>Latitude:</label>
          <input type="text" value={location.latitude} readOnly />
        </div>
        <div className="input-group">
          <label>Longitude:</label>
          <input type="text" value={location.longitude} readOnly />
        </div>

        <button type="submit">Submit Project</button>
      </form>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart-box">
          <h4>Budget Allocation</h4>
          <Bar data={barData} />
        </div>
        <div className="chart-box">
          <h4>Project Stages</h4>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
