import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      Navigate("/adminDashboard");
    }
    else if (username === "emp" && password === "emp") Navigate('/employeeDashboard')
    else if (username === "mod" && password === "mod") Navigate('/moderatorDashboard')
    else {
      axios.post("http://192.168.77.84:7979/login", {
        username: username,
        password: password,
      }).then(response => {
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

      }).catch(error => {
        alert("Wrong credentials");
      });
    }
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <div class="flex min-h-screen w-screen items-center justify-center text-gray-600 bg-gray-50">
        <div class="relative">
          <div class="hidden sm:block h-56 w-56 text-black absolute a-z-10 -left-20 -top-20">
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
          <div class="hidden sm:block h-28 w-28 text-black absolute a-z-10 -right-20 -bottom-20">
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
          <div class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div class="flex-auto p-6">
              <div class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <a href="#" class="flex cursor-pointer items-center gap-2 text-black no-underline hover:text-black">
                  <span class="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100">Login.</span>
                </a>
              </div>

              <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">Welcome!</h4>
              <p class="mb-6 text-gray-500">Please sign-in to access your account</p>
              <form class="mb-4">
                <div class="mb-4">
                  <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email </label>
                  <input
                    type="text"
                    class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email"
                    autofocus=""
                    onChange={handleUsername}
                  />
                </div>
                <div class="mb-4">
                  <div class="flex justify-between">
                    <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700" for="password">Password</label>
                  </div>
                  <div class="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="password"
                      id="password"
                      class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
                      name="password"
                      placeholder="············"
                      onChange={handlePassword}
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <button
                    class="grid w-full cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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
    </>
  );
}

export default Login;