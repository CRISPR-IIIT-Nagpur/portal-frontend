import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import RegisterComplaint from './components/registerComplaint';
import TrackComplaint from './components/trackComplaint';
import Unblock from './components/unblock';
import AdminDashboard from './components/adminDashboard';
import Export from './components/export';
import Employees from './components/employees';
import Complaints from './components/complaints';
import RootDashboard from './components/rootDashboard';
import EmployeesRoot from './components/employeesRoot';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registerComplaint" element={<RegisterComplaint />} />
        <Route path="/trackComplaint" element={<TrackComplaint />} />
        <Route path="/unblock" element={<Unblock />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/export" element={<Export />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/rootDashboard" element={<RootDashboard />} />
        <Route path="/employeesRoot" element={<EmployeesRoot />} />
      </Routes>
    </Router>
  );
};

export default App;