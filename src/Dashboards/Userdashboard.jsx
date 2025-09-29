import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlusCircle,
  FaChartBar,
  FaUsers,
  FaCalendarAlt,
  FaTools,
  FaChartPie,
  FaCog,
  FaArrowUp,
  FaExclamationTriangle
} from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mainModules = [
  { name: "Dashboard", icon: <FaChartPie className="w-5 h-5" />, route: "/dashboard" },
  { name: "Create Project", icon: <FaPlusCircle className="w-5 h-5" />, route: "/create-project" },
  { name: "View Progress", icon: <FaChartBar className="w-5 h-5" />, route: "/view-progress" },
  { name: "Manage Team", icon: <FaUsers className="w-5 h-5" />, route: "/manage-team" },
  { name: "Project Schedule", icon: <FaCalendarAlt className="w-5 h-5" />, route: "/project-schedule" },
  { name: "Tools & Resources", icon: <FaTools className="w-5 h-5" />, route: "/tools-resources" }
];

const analyticsModules = [
  { name: "Analytics", icon: <FaChartBar className="w-5 h-5" />, route: "/analytics" },
  { name: "Settings", icon: <FaCog className="w-5 h-5" />, route: "/settings" }
];

const stats = [
  {
    title: "Active Projects",
    value: "12",
    change: "+2 from last month",
    icon: FaChartPie,
    trend: "up"
  },
  {
    title: "Equipment Online",
    value: "89%",
    change: "+5% from last week",
    icon: FaTools,
    trend: "up"
  },
  {
    title: "Personnel On Site",
    value: "247",
    change: "+12 from yesterday",
    icon: FaUsers,
    trend: "up"
  },
  {
    title: "Safety Alerts",
    value: "3",
    change: "-2 from last week",
    icon: FaExclamationTriangle,
    trend: "down"
  }
];

const recentActivity = [
  {
    title: "Equipment Maintenance Completed",
    description: "Excavator EX-001 maintenance completed successfully",
    time: "2 hours ago",
    status: "success"
  },
  {
    title: "New Safety Report Filed",
    description: "Site A safety inspection report submitted",
    time: "4 hours ago",
    status: "info"
  },
  {
    title: "Project Milestone Reached",
    description: "Foundation work for Building C completed",
    time: "6 hours ago",
    status: "success"
  },
  {
    title: "Equipment Alert",
    description: "Crane CR-003 requires routine inspection",
    time: "8 hours ago",
    status: "warning"
  }
];

const UserDashboard = () => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState(0);

  const handleModuleClick = (index, route) => {
    setActiveModule(index);
    navigate(route);
  };

  return (
    <div className="min-h-screen flex w-full bg-construction-gray-light">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col min-h-screen shadow-construction">
        {/* Logo Section */}
        <div className="p-6 border-b border-sidebar-border flex items-center gap-3">
          <div className="bg-gradient-construction p-2 rounded-lg">
            <FaTools className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-sidebar-foreground">ConstructPro</h2>
            <p className="text-xs text-sidebar-foreground/60">Remote Control</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Main Modules */}
            <div className="px-4 pt-4 pb-2">
              <p className="text-xs font-semibold text-sidebar-foreground/80 uppercase tracking-wider mb-2">
                Main Modules
              </p>
              <nav className="flex flex-col gap-1">
                {mainModules.map((module, index) => (
                  <button
                    key={module.name}
                    onClick={() => handleModuleClick(index, module.route)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left font-medium sidebar-module-button ${
                      activeModule === index
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

            {/* Analytics Modules */}
            <div className="px-4 pt-6 pb-2">
              <p className="text-xs font-semibold text-sidebar-foreground/80 uppercase tracking-wider mb-2">
                Analytics
              </p>
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
        {/* Header */}
        <header className="h-16 bg-white border-b border-border flex items-center px-6 shadow-sm">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold text-foreground">
              Construction Management System
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-construction-success rounded-full"></div>
              <span className="text-sm text-muted-foreground">System Online</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 dashboard-container">
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-construction text-white p-6 rounded-lg shadow-construction welcome-card">
              <h2 className="text-2xl font-bold mb-2">Welcome to ConstructPro Dashboard</h2>
              <p className="text-white/90 mb-4">Monitor and manage your construction operations from anywhere</p>
              <Button variant="secondary" className="bg-white text-construction hover:bg-gray-100 action-button">
                View All Projects
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="shadow-card hover:shadow-construction transition-shadow stats-card hover-scale">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                      <Icon className="h-4 w-4 text-construction" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <p className={`text-xs flex items-center gap-1 mt-1 ${stat.trend === 'up' ? 'text-construction-success' : 'text-construction-danger'}`}>
                        <FaArrowUp className="h-3 w-3" />
                        {stat.change}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="shadow-card animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FaChartBar className="h-5 w-5 text-construction" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>
                    Latest updates from your construction sites
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg hover-scale">
                      <div className={`p-1 rounded-full activity-dot ${activity.status}`}>
                        <div className={`h-3 w-3 rounded-full ${
                          activity.status === 'success' ? 'bg-construction-success' :
                          activity.status === 'warning' ? 'bg-construction-warning' :
                          'bg-primary'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-card animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FaTools className="h-5 w-5 text-construction" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>
                    Frequently used operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start bg-gradient-construction hover:opacity-90 action-button"
                    onClick={() => navigate('/create-project')}
                  >
                    <FaPlusCircle className="mr-2 h-4 w-4" />
                    Create New Project
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start action-button"
                    onClick={() => navigate('/tools-resources')}
                  >
                    <FaTools className="mr-2 h-4 w-4" />
                    Schedule Equipment
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start action-button"
                    onClick={() => navigate('/manage-team')}
                  >
                    <FaUsers className="mr-2 h-4 w-4" />
                    Assign Personnel
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start action-button"
                    onClick={() => navigate('/safety')}
                  >
                    <FaExclamationTriangle className="mr-2 h-4 w-4" />
                    Report Safety Issue
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
