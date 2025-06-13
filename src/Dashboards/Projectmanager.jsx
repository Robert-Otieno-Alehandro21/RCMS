import React from "react";
import Navbar from "../components/Navbar";
import {
  UploadCloud,
  CheckCircle,
  ClipboardList,
  FileText
} from "lucide-react";
import "./Projectmanager.css";

const Projectmanager = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard manager">
        <h2>Project Manager Dashboard</h2>
        <div className="dashboard-section">
          <button><UploadCloud size={16} /> Upload Project Photos</button>
          <button><CheckCircle size={16} /> Approve Milestones</button>
          <button><ClipboardList size={16} /> Track Project Status</button>
          <button><FileText size={16} /> View Reports</button>
        </div>
      </div>
    </>
  );
};

export default Projectmanager;
