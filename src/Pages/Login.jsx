import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import './Login.css';
import axios from 'axios';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SuccessPopup from '../components/SuccessPopup';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAppContext();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('❌ Please enter both email and password');
      return;
    }

    try {
      const res = await axios.post('/api/auth/login', formData);
      const { user } = res.data;
      setUser(user); // Store user info in context
      setShowSuccess(true);

      setTimeout(() => {
        if (user.role === 'user') navigate('/user-dashboard');
        else if (user.role === 'project_manager') navigate('/projectmanager');
        else if (user.role === 'construction_company') navigate('/constructioncompany');
        else if (user.role === 'bank') navigate('/bankmanagement');
        else navigate('/');
      }, 2500);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || '❌ Login failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Login</button>

          {/* ✅ Forgot Password Link */}
          <p style={{ textAlign: 'right', marginTop: '0.5rem' }}>
            <a href="/forgot-password" style={{ color: '#006400', fontSize: '0.8rem', textDecoration: 'underline' }}>
              Forgot Password? update the login.jsx 
            </a>
          </p>
        </form>
      </div>

      {showSuccess && (
        <SuccessPopup 
          message="✅ Logged In Successfully!"
          onClose={() => {}}
        />
      )}
    </div>
  );
};

export default Login;
