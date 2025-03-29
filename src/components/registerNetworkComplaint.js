import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterNetworkComplaint = () => {
  const [place, setPlace] = useState("hostel");
  const [floor, setFloor] = useState("G");
  const [networkType, setNetworkType] = useState("WiFi");
  const [issue, setIssue] = useState("Speed Issue");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [roomNo, setRoomNo] = useState("");

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
    setFloor("G");
  };

  const handleNetworkTypeChange = (e) => {
    setNetworkType(e.target.value);
    setIssue("Speed Issue");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://192.168.77.84:7979/api/network/registerComplaint', {
        place,
        floor,
        networkType,
        issue,
        description,
        name: localStorage.getItem('userName'),
        email: localStorage.getItem('email'),
        roomNo,
      });
      console.log('Complaint submitted successfully:', response.data);
      setSubmitted(true);
      setLoading(false);

    } catch (err) {

      console.error('Error submitting complaint:', err);
      setError('Failed to submit complaint. Please try again later.');
      setLoading(false);
      setSubmitted(false);
    }
  };

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
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/report.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Report Mischief</span>
            </div>
          </Link>
          <Link to="/lostAndFound">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/lost.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Lost and Found</span>
            </div>
          </Link>
          <Link to="/reportFriend">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/help.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Report a Friend in Distress</span>
            </div>
          </Link>
          <Link to="/reportSelf">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/mental.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Request Mental Health Assistance</span>
            </div>
          </Link>
          <Link to="/contributePYQ">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/pyq.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Contribute PYQ</span>
            </div> 
          </Link>*/}
          <Link to="/" className="mt-auto"
            onClick={() => {
              localStorage.clear();
            }}
          >
            <div className="group grid">
              <div className="relative flex items-center justify-center h-12 w-12  mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/logout.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Log Out</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col w-full h-full overflow-y-auto no-scrollbar">
          <div className="bg-white text-gray-800 h-full py-10">
            <div className="bg-white-100 mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
              <div className="max-w-2xl px-4 lg:pr-24">
                <p className="mb-2 text-blue-600">Hostel Complaint Resolution</p>
                <h3 className="mb-5 text-3xl font-semibold">
                  Submit Your Complaint
                </h3>
                <p className="mb-16 text-md text-gray-600">
                  Please use the form on the right to register your complaint
                  regarding the internet connection in the hostel. We strive to
                  provide the best services possible and appreciate your feedback.
                </p>
                <div className="mb-5 flex font-medium">
                  <div className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-7 w-7 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="mb-2">Swift Compliance Resolution</p>
                    <span className="font-normal text-gray-600">
                      Our team is committed to addressing your complaints promptly
                      and efficiently. Upon receiving your complaint, our dedicated
                      support staff will work diligently to investigate and resolve
                      the issue at the earliest convenience.
                    </span>
                  </div>
                </div>
                <div className="mb-5 flex font-medium">
                  <div className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-7 w-7 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="mb-2">Privacy Guaranteed</p>
                    <span className="font-normal text-gray-600">
                      Your privacy is of utmost importance to us. Your personal
                      details and complaint information will be kept strictly
                      confidential and will only be used for the purpose of
                      resolving your complaint.
                    </span>
                  </div>
                </div>
                <div className="mb-5 flex font-medium">
                  <div className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-7 w-7 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="mb-2">Easy Communication</p>
                    <span className="font-normal text-gray-600">
                      Effortless communication is enabled, offering a seamless and
                      easily accessible avenue for expressing and resolving concerns
                      within the hostel community.
                    </span>
                  </div>
                </div>
              </div>
              <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
                <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
                  <h3 className="mb-1 inline-block text-3xl font-medium">
                    <span className="mr-4">Submit Complaint</span>
                  </h3>
                  <p className="text-gray-600">Lodge your complaints below</p>
                </div>
                <div className="p-4 sm:p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Place
                      </label>
                      <select
                        name="place"
                        id="place"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-black"
                        value={place}
                        onChange={handlePlaceChange}
                      >
                        <option value="hostel">Hostel</option>
                        <option value="academic">Academic</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Floor
                      </label>
                      <select
                        name="floor"
                        id="floor"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-black"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                      >
                        {place === "hostel" ? (
                          <>
                            <option value="G">G</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </>
                        ) : (
                          <>
                            <option value="G">G</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Room No
                      </label>
                      <input
                        type="text"
                        name="roomNo"
                        id="roomNo"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-black"
                        value={roomNo}
                        onChange={(e) => setRoomNo(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Network Type
                      </label>
                      <select
                        name="networkType"
                        id="networkType"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-black"
                        value={networkType}
                        onChange={handleNetworkTypeChange}
                      >
                        <option value="wifi">WiFi</option>
                        <option value="lan">LAN</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Issue
                      </label>
                      <select
                        name="issue"
                        id="issue"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-black"
                        value={issue}
                        onChange={(e) => setIssue(e.target.value)}
                      >
                        {networkType === "WiFi" ? (
                          <>
                            <option value="speed">Speed Issue</option>
                            <option value="connection">Connection Issue</option>
                            <option value="forgotPassword">Forgot Password</option>
                          </>
                        ) : (
                          <>
                            <option value="speed">Speed Issue</option>
                            <option value="portDamage">Port Damage</option>
                            <option value="connection">Connection Issue</option>
                            <option value="forgotPassword">Forgot Password</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Description
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        rows="4"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-black"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    {error && (
                      <div className="mb-4 text-red-500">
                        {error}
                      </div>
                    )}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </form>
                  {submitted && (
                    <div className="mt-4 text-green-500 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Complaint submitted</span>
                    </div>
                  )}
                </div>
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
};

export default RegisterNetworkComplaint;
