import React from "react";
import "./ViewInvoices.css";
import { FaFilePdf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const invoices = [
  {
    id: "INV001",
    project: "Affordable Housing Nairobi",
    amount: "KES 2,000,000",
    date: "2025-06-01",
    status: "Paid",
    approved: true,
  },
  {
    id: "INV002",
    project: "Health Clinic Kisumu",
    amount: "KES 1,200,000",
    date: "2025-06-10",
    status: "Unpaid",
    approved: false,
  },
  {
    id: "INV003",
    project: "School Renovation Eldoret",
    amount: "KES 900,000",
    date: "2025-06-15",
    status: "Unpaid",
    approved: true,
  },
  {
    id: "INV004",
    project: "Water Project Machakos",
    amount: "KES 1,750,000",
    date: "2025-06-18",
    status: "Paid",
    approved: true,
  },
  {
    id: "INV005",
    project: "Market Upgrade Mombasa",
    amount: "KES 2,300,000",
    date: "2025-06-20",
    status: "Unpaid",
    approved: false,
  },
];

const ViewInvoices = () => {
  const navigate = useNavigate();

  const handleDownload = (id) => {
    alert(`Invoice ${id} downloaded!`);
  };

  return (
    <div className="view-invoices-container">
      {/* Standard Header */}
      <header className="project-header">
        <div className="logo">RCMS</div>
        <div className="back-button" onClick={() => navigate(-1)}>&lt;</div>
      </header>

      <h2 className="invoices-title">View Invoices</h2>

      <div className="invoice-grid">
        {invoices.map((inv) => (
          <div key={inv.id} className="invoice-card">
            <div className="invoice-id">{inv.id}</div>
            <div className="invoice-info">
              <p><strong>Project:</strong> {inv.project}</p>
              <p><strong>Amount:</strong> {inv.amount}</p>
              <p><strong>Date:</strong> {inv.date}</p>
              <p><strong>Status:</strong>
                <span className={`status ${inv.status.toLowerCase()}`}>{inv.status}</span>
              </p>
              <p><strong>Approved:</strong>
                <span className={`approval ${inv.approved ? "yes" : "no"}`}>
                  {inv.approved ? "✔ Approved" : "✖ Not Approved"}
                </span>
              </p>
            </div>
            <button className="download-btn" onClick={() => handleDownload(inv.id)}>
              <FaFilePdf /> Download Invoice
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewInvoices;
