import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import ModeratorDashboard from './components/moderatorDashboard';

// Protected Route Component
const ProtectedRoute = ({ element, allowedRoles }) => {
  const userName = localStorage.getItem('userName');
  const userRole = localStorage.getItem('role');
  if (!userName) {
    return <Navigate to="/" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }
  return element;
};

const App = () => {
  return (
    <Router basename="/ComplaintPortal">
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes with role-based access */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} allowedRoles={['student']}/>} />
        <Route path="/registerNetworkComplaint" element={<ProtectedRoute element={<RegisterNetworkComplaint />} allowedRoles={['student']}/>} />
        <Route path="/trackComplaint" element={<ProtectedRoute element={<TrackComplaint />} allowedRoles={['student']}/>} />
        <Route path="/unblock" element={<ProtectedRoute element={<Unblock />} />} />

        {/* Admin only routes */}
        <Route path="/adminDashboard" element={<ProtectedRoute element={<AdminDashboard />} allowedRoles={['admin']} />} />
        <Route path="/export" element={<ProtectedRoute element={<Export />} allowedRoles={['admin']} />} />
        <Route path="/employees" element={<ProtectedRoute element={<Employees />} allowedRoles={['admin']} />} />
        <Route path="/complaints" element={<ProtectedRoute element={<Complaints />} allowedRoles={['admin']} />} />

        {/* Employee only routes */}
        <Route path="/employeeDashboard" element={<ProtectedRoute element={<EmployeeDashboard />} allowedRoles={['employee']} />} />

        {/* Moderator only routes */}
        <Route path="/moderatorDashboard" element={<ProtectedRoute element={<ModeratorDashboard />} allowedRoles={['moderator']} />} />

        {/* Other routes - customize based on your requirements */}
        <Route path="/registerMaintenanceComplaint" element={<ProtectedRoute element={<RegisterMaintenanceComplaint />} />} />
        <Route path="/reportMischief" element={<ProtectedRoute element={<ReportMischief />} />} />
        <Route path="/lostAndFound" element={<ProtectedRoute element={<LostAndFound />} />} />
        <Route path="/reportFriend" element={<ProtectedRoute element={<ReportFriend />} />} />
        <Route path="/reportSelf" element={<ProtectedRoute element={<ReportSelf />} />} />
        <Route path="/contributePYQ" element={<ProtectedRoute element={<ContributePYQ />} />} />
      </Routes>
    </Router>
  );
};

export default App;
