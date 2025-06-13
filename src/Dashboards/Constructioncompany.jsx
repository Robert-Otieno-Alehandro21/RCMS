import React from "react";
import Navbar from "../components/Navbar";
import {
  Gavel,
  PackagePlus,
  Home,
  ShieldCheck
} from "lucide-react";
import "./Constructioncompany.css";

const Constructioncompany = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard company">
        <h2>Construction Company Dashboard</h2>
        <div className="dashboard-section">
          <button><Gavel size={16} /> Bid for Projects</button>
          <button><PackagePlus size={16} /> Request Materials</button>
          <button><Home size={16} /> Upload House Designs</button>
          <button><ShieldCheck size={16} /> Submit Company Credentials</button>
        </div>
      </div>
    </>
  );
};

export default Constructioncompany;

