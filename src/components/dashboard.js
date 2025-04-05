import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { logout} = useAuth0();
  return (
    <>
      <div className="grid grid-cols-[minmax(20%,20%)_auto] h-screen overflow-y-hidden">
        <div className="top-0 left-0 m-0 flex flex-col bg-black text-white shadow-lg w-16 h-lvh">
          <Link to="/dashboard">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/crispr.png')} className="h-10 w-10" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Home</span>
            </div>
          </Link>
          <Link to="/registerNetworkComplaint">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/network.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Register Network Complaint</span>
            </div>
          </Link>
          {/* <Link to="/registerMaintenanceComplaint">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/hostel.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Hostel Complaints</span>
            </div>
          </Link> */}
          <Link to="/trackComplaint">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/track.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Track Complaints</span>
            </div>
          </Link>
          <Link to="/unblock">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/unblock.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Unblock Website</span>
            </div>
          </Link>
          {/* 
      <Link to="/reportMischief">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/report.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Report Mischief</span>
      </div>
      </Link>
      <Link to="/lostAndFound">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/lost.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Lost and Found</span>
      </div>
      </Link>
      <Link to="/reportFriend">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/help.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Report a Friend in Distress</span>
      </div>
      </Link>
      <Link to="/reportSelf">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/mental.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Request Mental Health Assistance</span>
      </div>
      </Link>
      <Link to="/contributePYQ">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/pyq.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Contribute PYQ</span>
      </div>
      </Link>
      <Link to="/" className="mt-auto">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-12 w-12  mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/logout.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Log Out</span>
      </div>
      </Link>
            */}
          <Link to="/" className="mt-auto"
          onClick={() => {
            localStorage.clear();
            logout({ logoutParams: {returnTo: `${window.location.origin}/ComplaintPortal/`
            }});
          }}
          >
            <div className="group grid">
              <div className="relative flex items-center justify-center h-12 w-12  mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/logout.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Log Out</span>
            </div>
          </Link>

        </div>
        <div className="h-screen ml-4 overflow-y-auto no-scrollbar">
          <br />
          <div className="flex min-h-screen min-w-screen items-center justify-center text-gray-600">
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

                <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                  <div className="flex-auto p-6">
                    <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                      <img src={require("../assets/network.png")} class="object-contain w-20 h-20" />
                    </div>
                    <div className="mb-4 flex justify-center">
                      <Link to="/registerNetworkComplaint">
                        <button
                          className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                          type="submit"
                        >
                          Network Complaints
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                  <div className="flex-auto p-6">
                    <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                      <img src={require("../assets/hostel.png")} class="object-contain w-20 h-20" />
                    </div>
                    <div className="mb-4 flex justify-center">
                      <Link to="/registerMaintenanceComplaint">
                        <button
                          className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                          type="submit"
                        >
                          Hostel Complaints
                        </button>
                      </Link>
                    </div>
                  </div>
                </div> */}
                <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                  <div className="flex-auto p-6">
                    <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                      <img src={require("../assets/track.png")} class="object-contain w-20 h-20" />
                    </div>
                    <div className="mb-4 flex justify-center">
                      <Link to="/trackComplaint">
                        <button
                          className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                          type="submit"
                        >
                          Track Complaints
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                  <div className="flex-auto p-6">
                    <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                      <img src={require("../assets/unblock.png")} class="object-contain w-20 h-20" />
                    </div>
                    <div className="mb-4 flex justify-center">
                      <Link to="/unblock">
                        <button
                          className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                          type="submit"
                        >
                          Unblock Website
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* 
                <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                  <div className="flex-auto p-6">
                    <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                      <img src={require("../assets/report.png")} class="object-contain w-20 h-20" />
                    </div>
                    <div className="mb-4 flex justify-center">
                      <Link to="/reportMischief">
                        <button
                          className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                          type="submit"
                        >
                          Report Mischief
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
               <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <img src={require("../assets/lost.png")} class="object-contain w-20 h-20"/>
              </div>
              <div className="mb-4 flex justify-center">
                <Link to="/lostAndFound">
                  <button
                    className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Lost and Found
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <img src={require("../assets/help.png")} class="object-contain w-20 h-20"/>
              </div>
              <div className="mb-4 flex justify-center">
                <Link to="/reportFriend">
                  <button
                    className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Report a Friend in Distress
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <img src={require("../assets/mental.png")} class="object-contain w-20 h-20"/>
              </div>
              <div className="mb-4 flex justify-center">
                <Link to="/reportSelf">
                  <button
                    className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Request Mental Health Assistance
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <img src={require("../assets/pyq.png")} class="object-contain w-20 h-20"/>
              </div>
              <div className="mb-4 flex justify-center">
                <Link to="/contributePYQ">
                  <button
                    className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Contribute PYQ
                  </button>
                </Link>
              </div>
            </div>
          </div>
           */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-white bg-black text-center mt-auto flex items-center justify-center space-x-2">
        <p className="text-sm">Powered by</p>
        <img src={require("../assets/crispr_alt.png")} className="h-24 w-24" alt="logo" />
      </footer>

    </>
  );
}

export default Dashboard;