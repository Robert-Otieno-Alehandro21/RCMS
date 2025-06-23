import React from "react";
import "./ManageTeam.css";
import { FaUserPlus, FaEye, FaComments, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageTeam = () => {
  return (
    <div className="manage-team-container">
      <h2 className="manage-team-title">My Construction Team</h2>
      <div className="team-actions">
        <Link to="/add-worker" className="team-card">
          <FaUserPlus className="team-icon" />
          <h3>Add Trusted Worker</h3>
          <p>Add electricians, plumbers, or other specialists you trust to your project.</p>
        </Link>
        <Link to="/view-assignments" className="team-card">
          <FaEye className="team-icon" />
          <h3>View Assignments</h3>
          <p>Check which tasks are assigned to which team members.</p>
        </Link>
        <Link to="/communication-settings" className="team-card">
          <FaComments className="team-icon" />
          <h3>Communication Settings</h3>
          <p>Choose how you’d like to receive updates or give instructions.</p>
        </Link>
        <Link to="/review-team" className="team-card">
          <FaStar className="team-icon" />
          <h3>Review & Rate</h3>
          <p>Give feedback or rate the performance of your workers.</p>
        </Link>
      </div>
    </div>
  );
};

export default ManageTeam;
