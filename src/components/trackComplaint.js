import React, { useState} from 'react';
import { Link } from "react-router-dom";
const TrackComplaint = () => {
        const [complaints, setComplaints] = useState([
                {
                    id: 1,
                    title: "Slow WiFi Speed",
                    description: "Experiencing slow internet speed on WiFi connection.",
                    status: "In Progress",
                    date: "2022-01-01",
                    name: "John Doe",
                    contact: "john.doe@example.com"
                },
                {
                    id: 2,
                    title: "Lan Speed",
                    description: "Experiencing slow internet speed on Lan connection.",
                    status: "Acknowledged",
                    date: "2022-01-02",
                    name: "Jane Smith",
                    contact: "jane.smith@example.com"
                },
                {
                    id: 3,
                    title: "Lan port not working",
                    description: "Lan port not working in my room.",
                    status: "Resolved",
                    date: "2022-01-03",
                    name: "Robert Johnson",
                    contact: "robert.johnson@example.com"
                },
                {
                    id: 4,
                    title: "No Internet Connection",
                    description: "Unable to connect to the internet.",
                    status: "Acknowledged",
                    date: "2022-01-04",
                    name: "Demo User",
                    contact: "demo.user@example.com"
                }
        ]);

        return (
                <>
                    <navbar className="flex flex-wrap items-center justify-between p-5 bg-indigo-500">
                        <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">Internet</span>
                        </div>
                        <div className="flex items-center">
                        <Link to="/registerComplaint" className="text-indigo-100 hover:text-white font-bold mr-4">Register Complaints</Link>
                        <Link to="/unblock" className="text-indigo-100 hover:text-white font-bold mr-4">Unblock Websites</Link>
                        <Link to="/" className="text-indigo-100 hover:text-white font-bold mr-4">Logout</Link>
                        </div>
                    </navbar>
                <div className="bg-gray-100 p-4 sm:p-8 md:p-10 h-screen">
    <h1 className="text-2xl font-bold mt-20 mb-8">Complaints</h1>
    {complaints.length === 0 ? (
        <p className="ml-4 mt-2 text-gray-600 text-xl">
            No complaints registered yet.
        </p>
    ) : (
        <div className="container mx-auto grid gap-8 md:grid-cols-3 sm:grid-cols-5">
            {complaints.map((complaint) => (
                <div key={complaint.id} className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
                    <div className="text-lg mb-2 font-semibold text-indigo-500 sm:mb-1.5 sm:text-2xl">
                        {complaint.title}
                    </div>
                    <div className="flex items-center">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#6366f1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h18m-4 4.001L7 13m3.333 4H7M7 3v2m10-2v2M6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.52 3 7.08 3 8.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21Z"/></svg>
                        <p className="text-sm p-2">{complaint.date}</p>
                    </div>
                    <p className="text-sm mt-2">{complaint.description}</p>
                    <div className="mt-auto">
                        <div className="h-1 bg-gray-200 rounded-full mt-2">
                            <div className={`h-full ${complaint.status === "Acknowledged" ? "bg-indigo-500" : complaint.status === "In Progress" ? "bg-yellow-500" : "bg-green-500"} rounded-full`} style={{ width: `${complaint.status === "Acknowledged" ? "33%" : complaint.status === "In Progress" ? "66%" : "100%"}` }}></div>
                        </div>
                        
                        <p className="text-sm font-semibold mt-2">
                            Status: {complaint.status}
                        </p>
                        
                        <button className="text-sm font-semibold text-indigo-500 mt-2 hover:underline focus:outline-none"onClick={
                            () => {
                                alert(`Name: ${complaint.name}\nContact: ${complaint.contact}`);
                            }
                        
                        }> Still not resolved?</button>

                </div>
                </div>
            ))}
        </div>
    )}
</div>
                </>
        );
};

export default TrackComplaint;