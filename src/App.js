import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import RegisterComplaint from './components/registerComplaint';
import TrackComplaint from './components/trackComplaint';
import Unblock from './components/unblock';
import AdminDashboard from './components/adminDashboard';

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
      </Routes>
    </Router>
  );
};

export default App;