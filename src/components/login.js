import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showNameModal, setShowNameModal] = useState(false);
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post("http://192.168.77.84:7979/login", {
      username: username,
      password: password,
    }).then(response => {
      // Check if the response status is 206 (Partial Content - needs name)
      if (response.status === 206) {
        // Show the name input modal
        setShowNameModal(true);
      } else {
        // Normal login flow
        localStorage.setItem('userName', response.data.name);
        localStorage.setItem('email', username);
        localStorage.setItem('role', response.data.role);
        if (response.data.role === "admin") {
          Navigate("/adminDashboard");
        } else if (response.data.role === "employee") {
          Navigate("/employeeDashboard");
        } else if (response.data.role === "moderator") {
          Navigate("/moderatorDashboard");
        }
        else if (response.data.role === "student") {
          Navigate("/Dashboard");
        }
      }
    }).catch(error => {
      alert("Wrong credentials");
    });
  };

  const handleNameSubmit = () => {
    // Validate name
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    axios.post("http://localhost:7979/api/updateUserName", {
      params: {
      username: username,
      name: name
      }
    })
      .then(response => {
        localStorage.setItem('userName', name);
        localStorage.setItem('email', username);
        localStorage.setItem('role', response.data.role);

        if (response.data.role === "admin") {
          Navigate("/adminDashboard");
        } else if (response.data.role === "employee") {
          Navigate("/employeeDashboard");
        } else if (response.data.role === "moderator") {
          Navigate("/moderatorDashboard");
        }
        else if (response.data.role === "student") {
          Navigate("/Dashboard");
        }

        // Close the modal
        setShowNameModal(false);
      })
      .catch(error => {
        alert("Failed to update name. Please try again.");
        console.error("Name update error:", error);
      });
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <>
      <div className="flex min-h-screen w-screen items-center justify-center text-gray-600 bg-gray-50">
        <div className="relative">
          <div className="hidden sm:block h-56 w-56 text-black absolute a-z-10 -left-20 -top-20">
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="a"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.6) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    stroke-width="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
            </svg>
          </div>
          <div className="hidden sm:block h-28 w-28 text-black absolute a-z-10 -right-20 -bottom-20">
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="b"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.5) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    stroke-width="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" />
            </svg>
          </div>
          <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <a href="#" className="flex cursor-pointer items-center gap-2 text-black no-underline hover:text-black">
                  <span className="flex-shrink-0 text-3xl font-black tracking-tight opacity-100">Login.</span>
                </a>
              </div>

              <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">Welcome!</h4>
              <p className="mb-6 text-gray-500">Please sign-in to access your account</p>
              <form className="mb-4">
                <div className="mb-4">
                  <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email </label>
                  <input
                    type="text"
                    className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email"
                    autoFocus=""
                    onChange={handleUsername}
                  />
                </div>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700" htmlFor="password">Password</label>
                  </div>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="password"
                      id="password"
                      className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
                      name="password"
                      placeholder="············"
                      onChange={handlePassword}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <button
                    className="grid w-full cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit" onClick={handleLogin}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Name Input Modal */}
      {showNameModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="relative mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Welcome to the Portal</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500 mb-4">
                  Please enter your full name to complete your profile:
                </p>
                <input
                  type="text"
                  className="w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={handleNameChange}
                  autoFocus
                />
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={handleNameSubmit}
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 mr-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;