import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";

import Userdashboard from "./Dashboards/Userdashboard";
import Projectmanager from "./Dashboards/Projectmanager";
import Constructioncompany from "./Dashboards/Constructioncompany";
import Bankmanagement from "./Dashboards/Bankmanagement";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard Routes */}
      <Route path="/user-dashboard" element={<Userdashboard />} />
      <Route path="/project-manager" element={<Projectmanager />} />
      <Route path="/construction-company" element={<Constructioncompany />} />
      <Route path="/bank-management" element={<Bankmanagement />} />
    


    </Routes>
  );
};

export default App;
