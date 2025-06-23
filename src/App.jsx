// App.jsx
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

// User Dashboard Modules
import CreateProject from "./pages/CreateProject";
import ViewProgress from "./pages/ViewProgress";
import ManageTeam from "./pages/ManageTeam";
import ProjectSchedule from "./pages/ProjectSchedule";
import ToolsResources from "./pages/ToolsResources";

// Project Manager Modules 
import CreateProjectPM from "./pages/CreateProject";
import SelectLand from "./pages/SelectLand";
import UploadPhotos from "./pages/UploadPhotos";
import ApproveMilestones from "./pages/ApproveMilestones";
import ManageResources from "./pages/ManageResources";

// Construction Company Modules
import BidProjects from "./pages/BidProjects";
import RequestMaterials from "./pages/RequestMaterials";
import TrackDeliveries from "./pages/TrackDeliveries";
import Workforce from "./pages/Workforce";

// Bank Modules
import MakePayments from "./pages/MakePayments";
import ViewInvoices from "./pages/ViewInvoices";
import FundingRequests from "./pages/FundingRequests";
import TransactionHistory from "./pages/TransactionHistory";

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

      {/* User Dashboard Pages */}
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/view-progress" element={<ViewProgress />} />
      <Route path="/manage-team" element={<ManageTeam />} />
      <Route path="/project-schedule" element={<ProjectSchedule />} />
      <Route path="/tools-resources" element={<ToolsResources />} />

      {/* Project Manager Pages */}
      <Route path="/create-project-pm" element={<CreateProjectPM />} />
      <Route path="/select-land" element={<SelectLand />} />
      <Route path="/upload-photos" element={<UploadPhotos />} />
      <Route path="/approve-milestones" element={<ApproveMilestones />} />
      <Route path="/manage-resources" element={<ManageResources />} />

      {/* Construction Company Pages */}
      <Route path="/bid-projects" element={<BidProjects />} />
      <Route path="/request-materials" element={<RequestMaterials />} />
      <Route path="/track-deliveries" element={<TrackDeliveries />} />
      <Route path="/workforce" element={<Workforce />} />

      {/* Bank Management Pages */}
      <Route path="/make-payments" element={<MakePayments />} />
      <Route path="/view-invoices" element={<ViewInvoices />} />
      <Route path="/funding-requests" element={<FundingRequests />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
    </Routes>
  );
};

export default App;
