// src/pages/ForgotPassword.jsx
import React from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Reset Password</h2>
        <p>Please enter your email to receive a reset link.</p>
        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
