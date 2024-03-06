import React from "react";
import { Link } from "react-router-dom";


const AdminDashboard = () => {
  return (
    <>
    <div class="grid grid-cols-[9rem,8fr] min-h-screen min-w-screen items-center text-gray-600 overflow-hidden">
      <div class="w-64 shrink-0 -translate-x-full transform transition-transform duration-150 ease-in md:translate-x-0 md:drop-shadow-sm bg-black h-full">
      <div class="text-white text-2xl font-bold w-fit p-5">CRISPR</div>
          <div className="grid w-fit">
          <Link to="/employees" className="text-indigo-100 hover:text-white font-bold mr-4 p-4">Employees</Link>
          <Link to="/export" className="text-indigo-100 hover:text-white font-bold mr-4 p-4">Export Data</Link>
          <Link to="/complaints" className="text-indigo-100 hover:text-white font-bold mr-4 p-4">Complaints</Link>
          <Link to="/" className="text-indigo-100 hover:text-white font-bold mr-4 p-4">Logout</Link>
          </div>
          </div>
          <div className="flex min-h-screen  items-center justify-center text-gray-600">
        <div className="relative">
          <div className="hidden sm:block h-56 w-56 text-black absolute a-z-10 -left-20 -top-30">
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
                    strokeWidth="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#a)"
              />
            </svg>
          </div>
          <div className="hidden sm:block h-28 w-28 text-black absolute a-z-10 -right-20 -bottom-10">
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
                    strokeWidth="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#b)"
              />
            </svg>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4 bg-blue-100">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <img src={require("../assets/employees.png")} class="object-contain w-20 h-20"/>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/employees">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                     Employees
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="inline-block flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4 bg-blue-100">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <img src={require("../assets/export.png")} class="object-contain w-20 h-20"/>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/export">
                    <button
                      className="inline-block w-7/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Export Data
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4 bg-blue-100">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <img src={require("../assets/complaints.png")} class="object-contain w-20 h-20"/>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/complaints">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Complaints
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AdminDashboard;