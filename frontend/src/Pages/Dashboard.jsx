import React from "react";
import Sidebar from "../Components/DashboardPage/Sidebar";
import Navbar from "../Components/DashboardPage/Navbar"; // Optional
import Overview from "../Components/DashboardPage/Overview";
import SearchBar from "../Components/DashboardPage/SearchBar";
import ApplicationsTable from "../Components/DashboardPage/ApplicationsTable";
import StatsCards from "../Components/DashboardPage/StatsCards";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar (if you want a top bar) */}
        <Navbar />

        {/* Main body */}
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          <Overview />
          <StatsCards/>
          <SearchBar />
          <ApplicationsTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
//The changes done 16-07-2025/06:34pm