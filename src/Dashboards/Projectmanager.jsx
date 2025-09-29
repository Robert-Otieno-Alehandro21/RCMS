
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaProjectDiagram, FaBalanceScale, FaImages, FaClipboardCheck, FaTools, FaChartPie, FaCog, FaArrowUp, FaChartBar } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mainModules = [
  { name: "Fetch Project", icon: <FaProjectDiagram className="w-5 h-5 mr-3" />, route: "/fetch-project" },
  { name: "Budget Allocation", icon: <FaBalanceScale className="w-5 h-5 mr-3" />, route: "/budget-allocation" },
  { name: "Upload Photos", icon: <FaImages className="w-5 h-5 mr-3" />, route: "/upload-photos" },
  { name: "Approve Milestones", icon: <FaClipboardCheck className="w-5 h-5 mr-3" />, route: "/approve-milestones" },
  { name: "Manage Resources", icon: <FaTools className="w-5 h-5 mr-3" />, route: "/manage-resources" }
];
const analyticsModules = [
  { name: "Analytics", icon: <FaChartPie className="w-5 h-5 mr-3" />, route: "/analytics" },
  { name: "Settings", icon: <FaCog className="w-5 h-5 mr-3" />, route: "/settings" }
];

const stats = [
  { title: "Open Projects", value: 8, change: "+1 this week", trend: "up" },
  { title: "Pending Approvals", value: 3, change: "-1 from yesterday", trend: "down" },
  { title: "Photos Uploaded", value: 124, change: "+20 today", trend: "up" },
  { title: "Resources Assigned", value: 46, change: "+4 since last update", trend: "up" }
];

const Projectmanager = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen flex w-full bg-construction-gray-light">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col min-h-screen shadow-construction">
        <div className="p-6 border-b border-sidebar-border flex items-center gap-3">
          <div className="bg-gradient-construction p-2 rounded-lg">
            <FaTools className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-sidebar-foreground">RCMS</h2>
            <p className="text-xs text-sidebar-foreground/60">Project Manager</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="px-4 pt-4 pb-2">
              <p className="text-xs font-semibold text-sidebar-foreground/80 uppercase tracking-wider mb-2">Main Modules</p>
              <nav className="flex flex-col gap-1">
                {mainModules.map((module, index) => (
                  <button
                    key={module.name}
                    onClick={() => { setActive(index); navigate(module.route); }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left font-medium sidebar-module-button ${
                      active === index
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    {module.icon}
                    <span>{module.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="px-4 pt-6 pb-2">
              <p className="text-xs font-semibold text-sidebar-foreground/80 uppercase tracking-wider mb-2">Analytics</p>
              <nav className="flex flex-col gap-1">
                {analyticsModules.map((module) => (
                  <button
                    key={module.name}
                    onClick={() => navigate(module.route)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground sidebar-module-button"
                  >
                    {module.icon}
                    <span>{module.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-border flex items-center px-6 shadow-sm">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold text-foreground">Project Manager Dashboard</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-construction-success rounded-full"></div>
              <span className="text-sm text-muted-foreground">System Online</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 dashboard-container">
          <div className="space-y-6">
            <div className="bg-gradient-construction text-white p-6 rounded-lg shadow-construction welcome-card">
              <h2 className="text-2xl font-bold mb-2">Welcome, Project Manager</h2>
              <p className="text-white/90 mb-4">Manage projects, allocate budgets and approve milestones.</p>
              <Button variant="secondary" className="bg-white text-construction hover:bg-gray-100 action-button">View Projects</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="shadow-card hover:shadow-construction transition-shadow stats-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                    <FaChartBar className="h-4 w-4 text-construction" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <p className={`text-xs flex items-center gap-1 mt-1 ${stat.trend === 'up' ? 'text-construction-success' : 'text-construction-danger'}`}>
                      <FaArrowUp className="h-3 w-3" />
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projectmanager;
