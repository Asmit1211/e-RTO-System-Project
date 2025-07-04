// App.jsx
import React from 'react';
import Sidebar from './Components/Sidebar';
import Overview from './Components/Overview';
import StatsCards from './Components/StatsCards';
import SearchBar from './Components/SearchBar';
import ApplicationsTable from './Components/ApplicationsTable';

const App = () => {
  return (
    <div className="flex min-h-screen font-['Lexend_Deca'] bg-gray-100 text-gray-800 overflow-x-hidden">
      <Sidebar />
      <main className="flex-grow p-5">
        <Overview />
        <StatsCards />
        <SearchBar />
        <ApplicationsTable />
      </main>
    </div>
  );
};

export default App;
