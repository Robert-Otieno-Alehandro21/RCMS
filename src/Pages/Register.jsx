import React from "react";
import { Mail, Lock, User, Phone, ChevronDown } from "lucide-react";
import "./Register.css";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="form-box">
        <h2>Create Account</h2>
        <form className="auth-form">
          <div className="input-group">
            <User className="icon" />
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <Phone className="icon" />
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="input-group">
            <Mail className="icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <Lock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <Lock className="icon" />
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <div className="input-group select-group">
            <User className="icon" />
            <select className="role-select" required>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="projectManager">Project Manager</option>
              <option value="constructionCompany">Construction Company</option>
              <option value="bank">Bank Management</option>
            </select>
            <ChevronDown className="dropdown-icon" />
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
