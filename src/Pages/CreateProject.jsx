import React, { useState } from "react";
import "./CreateProject.css";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../utils/api";
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !location.latitude || !location.longitude) {
      alert("Please fill in all fields and select a location.");
      return;
    }

    const newProject = {
      title,
      description,
      latitude: location.latitude,
      longitude: location.longitude,
    };

    try {
      const result = await apiFetch('/api/projects/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });
      // assume success when result contains an _id or similar
      if (result && (result._id || result.id)) {
        alert('✅ Project created successfully!');
        setTitle('');
        setDescription('');
        setLocation({ latitude: '', longitude: '' });
        navigate('/user-dashboard');
      } else {
        alert('❌ Failed to create project.');
      }
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('Server error occurred.');
    }
  };

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
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>
          &lt;
        </div>
      </header>

      <h2 className="title">Create New Project</h2>

      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

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
