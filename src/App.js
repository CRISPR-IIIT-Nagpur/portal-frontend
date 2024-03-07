import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import RegisterNetworkComplaint from './components/registerNetworkComplaint';
import TrackComplaint from './components/trackComplaint';
import Unblock from './components/unblock';
import AdminDashboard from './components/adminDashboard';
import Export from './components/export';
import Employees from './components/employees';
import Complaints from './components/complaints';
import RegisterMaintenanceComplaint from './components/registerMaintenanceComplaint';
import ReportMischief from './components/reportMischief';
import LostAndFound from './components/lostAndFound';
import ReportFriend from './components/reportFriend';
import ReportSelf from './components/reportSelf';
import ContributePYQ from './components/contributePYQ';
import EmployeeDashboard from './components/employeeDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registerNetworkComplaint" element={<RegisterNetworkComplaint />} />
        <Route path="/trackComplaint" element={<TrackComplaint />} />
        <Route path="/unblock" element={<Unblock />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/export" element={<Export />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/registerMaintenanceComplaint" element={<RegisterMaintenanceComplaint />} />
        <Route path="/reportMischief" element={<ReportMischief />} />
        <Route path="/lostAndFound" element={<LostAndFound />} />
        <Route path="/reportFriend" element={<ReportFriend />} />
        <Route path="/reportSelf" element={<ReportSelf />} />
        <Route path="/contributePYQ" element={<ContributePYQ />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;