// src/pages/CreateProject.jsx
import React from "react";
import Header from "../components/Header";
import "./CreateProject.css";

const CreateProject = () => {
  return (
    <div>
      <Header />
      <div className="page-container">
        <h2 className="page-title">Create New Project</h2>
        <form className="form-container">
          <input type="text" placeholder="Project Name" required />
          <input type="text" placeholder="Location" required />
          <textarea placeholder="Project Description" required></textarea>
          <button type="submit">Submit Project</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
