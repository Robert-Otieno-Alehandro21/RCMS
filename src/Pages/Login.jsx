// src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form className="auth-form">
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
