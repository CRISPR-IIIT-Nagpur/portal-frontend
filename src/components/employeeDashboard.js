import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const EmployeeDashboard = () => {
    const [data, setData] = useState([]);
    const name = localStorage.getItem("userName");
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [complaintToResolve, setComplaintToResolve] = useState(null);

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const response = await axios.get("http://192.168.77.84:7979/api/network/employeeComplaint", {
                    params: { name }
                });
                setData(response.data['result']);
                console.log(response.data['result']);
            } catch (error) {
                console.error("Error fetching complaints:", error);
            }
        };
        fetchComplaints();
    }, [name]);

    const openConfirmationModal = (complaintId) => {
        setComplaintToResolve(complaintId);
        setIsConfirmModalOpen(true);
    };

    const handleResolveComplaint = async () => {
        try {
            await axios.post("http://192.168.77.84:7979/api/network/resolveComplaint", {
                complaintId: complaintToResolve,
                employeeName: name

            });

            const response = await axios.get("http://192.168.77.84:7979/api/network/employeeComplaint", {
                params: { name }
            });
            setData(response.data['result']);

            setIsConfirmModalOpen(false);
            setComplaintToResolve(null);
        } catch (error) {
            console.error("Error resolving complaint:", error);
        }
    };

    return (
        <>
            <div className="grid grid-cols-[minmax(20%,20%)_auto] h-screen overflow-y-hidden">
                <div className="top-0 left-0 m-0 flex flex-col bg-black text-white shadow-lg w-16 h-lvh">
                    <Link to="/employeeDashboard">
                        <div className="group grid">
                            <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/crispr.png')} className="h-10 w-10" alt="logo" /></div>
                            <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Home</span>
                        </div>
                    </Link>
                    <Link to="/" className="mt-auto" onClick={() => localStorage.clear()}>
                        <div className="group grid">
                            <div className="relative flex items-center justify-center h-12 w-12  mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/logout.png')} className="h-6 w-6" alt="logo" /></div>
                            <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Log Out</span>
                        </div>
                    </Link>
                </div>
                <div className="h-screen ml-4">
                    <p className="text-3xl text-center font-bold mt-10 mb-5">Complaints</p>
                    <div className="overflow-y-auto h-5/6 mr-10 rounded-xl no-scrollbar">
                        <table className="min-w-full divide-y divide-slate-300">
                            <thead className="bg-black sticky top-0">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Floor Number</th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Room Number</th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Type</th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Description</th>
                                    <th scope="col" className="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Date</th>
                                    <th scope="col" className="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Status</th>
                                    <th scope="col" className="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Mark as Resolved</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white items-center justify-items-center">
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td className="pl-4 pr-3 py-3 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.floor}</td>
                                        <td className="pl-4 pr-3 py-3 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.roomNo}</td>
                                        <td className="pl-4 pr-3 py-3.5 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.network_type.toUpperCase()}</td>
                                        <td className="pl-4 pr-3 py-3.5 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.description.charAt(0).toUpperCase() + item.description.slice(1).toLowerCase()}</td>
                                        <td className="pr-4 py-3.5 text-left text-sm font-medium text-gray-900 sm:pr-6">{new Date(item.reported_at).toLocaleString('en-US', {
                                            weekday: 'short',
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                            hour12: true
                                        })}</td>
                                        <td className="pr-4 py-3.5 text-sm text-left font-medium text-gray-900 sm:pr-6">{item.status}</td>
                                        <td className="pr-4 py-3.5 pl-4 text-sm text-left font-medium sm:pr-6">
                                            {item.status !== "Completed" ?
                                                <button
                                                    className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                                    onClick={() => openConfirmationModal(item.id)}
                                                >
                                                    Resolved
                                                </button>
                                                : <span className="py-3.5 text-left text-sm font-medium text-gray-900 sm:pl-6"></span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {isConfirmModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
                    <div className="relative mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Confirm Resolution</h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500 mb-4">
                                    Are you sure you want to mark this complaint as resolved? This action cannot be undone.
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    onClick={handleResolveComplaint}
                                    className="px-4 py-2 mr-2 rounded-md text-white bg-black hover:bg-gray-700"
                                >
                                    Yes, Mark as Resolved
                                </button>
                                <button
                                    onClick={() => {
                                        setIsConfirmModalOpen(false);
                                        setComplaintToResolve(null);
                                    }}
                                    className="px-4 py-2 bg-gray-300 rounded-md text-black hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EmployeeDashboard;