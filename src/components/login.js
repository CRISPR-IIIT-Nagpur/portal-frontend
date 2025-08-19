import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from '../config';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(config.LOGIN, { username, password });
      if (res.data && res.data.success) {
        // Save basic user info
        if (res.data.name) localStorage.setItem('userName', res.data.name);
        if (res.data.email) localStorage.setItem('email', res.data.email || username);
        if (res.data.role) localStorage.setItem('role', res.data.role);

        // Navigate based on role
        const role = res.data.role;
        if (role === 'admin') navigate('/adminDashboard');
        else if (role === 'employee') navigate('/employeeDashboard');
        else navigate('/dashboard');
      } else if (res.data && res.data.requiresProfile) {
        // partial profile: redirect to dashboard or a profile page if exists
        localStorage.setItem('userName', res.data.name || '');
        localStorage.setItem('email', res.data.email || username);
        localStorage.setItem('role', res.data.role || 'user');
        navigate('/dashboard');
      } else {
        setError(res.data.message || 'Login failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
        <div className="flex-auto p-6">
          <div className="mb-6 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
            <span className="text-3xl font-black tracking-tight opacity-100 text-center">Complaint Portal Login</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
            </div>
            {error && <div className="mb-4 text-red-600">{error}</div>}
            <div className="flex justify-center">
              <button type="submit" disabled={loading} className="w-full select-none rounded-md border border-black bg-black py-2 px-5 text-center text-sm text-white shadow hover:bg-indigo-600">
                {loading ? 'Signing in...' : 'Sign in with CRISPR-ID'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
