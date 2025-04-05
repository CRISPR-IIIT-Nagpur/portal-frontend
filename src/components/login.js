import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [authInProgress, setAuthInProgress] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      setAuthInProgress(true);
      localStorage.setItem('userName', user.name);
      localStorage.setItem('email', user.email);

      axios.get('/ComplaintPortal/api/getUserRole', {
        params: {
          username: user.email,
        },
      })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem('role', res.data.role);
            if (res.data.role === 'admin') {
              navigate("/adminDashboard");
            } else if (res.data.role === 'employee') {
              navigate("/employeeDashboard");
            } else {
              navigate("/dashboard");
            }
          } else {
            console.error("Error fetching user role:", res.data.message);
            setAuthInProgress(false);
          }
        }).catch((error) => {
          console.error("Error fetching user role:", error);
          setAuthInProgress(false);
        });
    }
  }, [isAuthenticated, user, navigate]);

  // Show loading indicator when Auth0 is loading or our auth process is in progress
  if (isLoading || authInProgress) {
    return (
      <div className="flex min-h-screen w-screen items-center justify-center text-gray-600 bg-gray-50">
        <div className="text-xl font-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-screen items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
        <div className="flex-auto p-6">
          <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
            <span className="text-3xl font-black tracking-tight opacity-100 text-center">Welcome to Complaint Portal</span>
          </div>

          <button
            className="w-full cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center text-sm text-white shadow hover:bg-indigo-600"
            onClick={() => loginWithRedirect()}
          >
            Sign in with CRISPR-ID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
