import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const TrackComplaint = () => {
    const { logout } = useAuth0();
    const [complaints, setComplaints] = useState([]);
    const email = localStorage.getItem('email');

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const response = await axios.get("/ComplaintPortal/api/network/trackComplaint", {
                    params: { email }
                });
                setComplaints(response.data['result']);
            } catch (error) {
                console.error("Error fetching complaints:", error);
            }
        };

        fetchComplaints();
    }, [email]);


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
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/hostel.png')} className="h-6 w-6" alt="logo"/></div>
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
                    {/* <Link to="/reportMischief">
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
      </Link> */}
                    <Link to="/" className="mt-auto"
                        onClick={() => {
                            localStorage.clear();
                            logout({
                                logoutParams: {
                                    returnTo: window.location.origin
                                }
                            });
                        }
                        }
                    >
                        <div className="group grid">
                            <div className="relative flex items-center justify-center h-12 w-12  mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/logout.png')} className="h-6 w-6" alt="logo" /></div>
                            <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Log Out</span>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col w-full h-full overflow-y-auto no-scrollbar">
                    <div className="bg-white h-screen mr-10 ml-10">
                        <h1 className="text-2xl font-bold mt-20 mb-8">Complaints</h1>
                        {complaints.length === 0 ? (
                            <p className="ml-4 mt-2 text-gray-600 text-xl">
                                No complaints registered yet.
                            </p>
                        ) : (
                            <div className="container mx-auto grid gap-8 md:grid-cols-3 sm:grid-cols-5">
                                {complaints.map((complaint) => (
                                    <div key={complaint.id} className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
                                        <div className="text-lg mb-2 font-semibold text-black sm:mb-1.5 sm:text-2xl">
                                            {complaint.network_type.toUpperCase()} - {complaint.issue.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\b\w/g, c => c.toUpperCase())}
                                        </div>
                                        <div className="flex items-center">
                                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#6366f1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h18m-4 4.001L7 13m3.333 4H7M7 3v2m10-2v2M6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.52 3 7.08 3 8.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21Z" /></svg>
                                            <p className="text-sm p-2">{new Date(complaint.reported_at).toLocaleString('en-US', {
                                                weekday: 'short',
                                                year: 'numeric',
                                                month: 'short',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                hour12: true // Ensures AM/PM format
                                            })}</p>
                                        </div>
                                        <p className="text-sm mt-2">{complaint.description.charAt(0).toUpperCase() + complaint.description.slice(1).toLowerCase()}
                                        </p>
                                        <div className="mt-auto">
                                            <div className="h-1 bg-gray-200 rounded-full mt-2">
                                                <div className={`h-full ${complaint.status === "Pending" ? "bg-indigo-600" : complaint.status === "Assigned" ? "bg-yellow-500" : "bg-green-500"} rounded-full`} style={{ width: `${complaint.status === "Pending" ? "33%" : complaint.status === "Assigned" ? "66%" : "100%"}` }}></div>
                                            </div>

                                            <p className="text-sm font-semibold mt-2">
                                                Status: {complaint.status}
                                            </p>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrackComplaint;