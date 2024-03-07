import React, { useState } from "react";
import { Link } from "react-router-dom";
const Employees = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [sortConfig, setSortConfig] = useState(null);
    const data = [
        {
            id: 1,
            name: "John Doe",
            type: "Manager",
            ongoing: 5,
            resolved: 10,
            total: 15,
        },
        {
            id: 2,
            name: "Jane Smith",
            type: "Supervisor",
            ongoing: 3,
            resolved: 7,
            total: 10,
        },
        {
            id: 3,
            name: "Michael Johnson",
            type: "Maintenance",
            ongoing: 2,
            resolved: 8,
            total: 10,
        },
        {
            id: 4,
            name: "Emily Davis",
            type: "Housekeeping",
            ongoing: 4,
            resolved: 6,
            total: 10,
        },
        {
            id: 5,
            name: "David Wilson",
            type: "Security",
            ongoing: 6,
            resolved: 4,
            total: 10,
        },
        {
            id: 6,
            name: "Sarah Thompson",
            type: "Front Desk",
            ongoing: 3,
            resolved: 7,
            total: 10,
        },
        {
            id: 7,
            name: "Daniel Anderson",
            type: "Catering",
            ongoing: 2,
            resolved: 8,
            total: 10,
        },
        {
            id: 8,
            name: "Olivia Martinez",
            type: "Laundry",
            ongoing: 4,
            resolved: 6,
            total: 10,
        },
        {
            id: 9,
            name: "James Taylor",
            type: "Maintenance",
            ongoing: 5,
            resolved: 5,
            total: 10,
        },
        {
            id: 10,
            name: "Sophia Clark",
            type: "Housekeeping",
            ongoing: 6,
            resolved: 4,
            total: 10,
        },
    ];

    return (
        <>
        <div className="grid grid-cols-[minmax(20%,20%)_auto] h-screen overflow-y-hidden">
        <div className="top-0 left-0 m-0 flex flex-col bg-black text-white shadow-lg w-16 h-lvh">
          <Link to="/adminDashboard">
          <div className="group grid">
          <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/crispr.png')} className="h-10 w-10" alt="logo"/></div>
          <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Home</span>
          </div>
          </Link>
          <Link to="/employees">
          <div className="group grid">
          <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/employees.png')} className="h-6 w-6" alt="logo"/></div>
          <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Employees</span>
          </div>
          </Link>
          <Link to="/complaints">
          <div className="group grid">
          <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/complaints.png')} className="h-6 w-6" alt="logo"/></div>
          <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Complaints</span>
          </div>
          </Link>
          <Link to="/export">
          <div className="group grid">
          <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/export.png')} className="h-6 w-6" alt="logo"/></div>
          <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Export Data</span>
          </div>
          </Link>
          <Link to="/" className="mt-auto">
          <div className="group grid">
          <div className="relative flex items-center justify-center h-12 w-12  mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/logout.png')} className="h-6 w-6" alt="logo"/></div>
          <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Log Out</span>
          </div>
          </Link>
        </div>
        <div className="h-screen ml-4">
          <p className="text-3xl text-center font-bold mt-10 mb-5">Employees</p>
          <div className="overflow-y-auto h-5/6 mr-10 rounded-xl no-scrollbar"> 
          <table class="min-w-full divide-y divide-slate-300">
                    <thead class="bg-black sticky top-0">
                      <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Name</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Type</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Ongoing</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Resolved</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Total</th>
                        <th scope="col" class="py-3.5 pr-4 text-right text-sm font-semibold text-white sm:pr-6">Assign Complaints</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 bg-white">
                        {data.map((item, index) => (
                            <tr key={index}>
                            <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.name}</td>
                            <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.type}</td>
                            <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.ongoing}</td>
                            <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.resolved}</td>
                            <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.total}</td>
                            <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">
                                <Link to="/assignComplaints">
                                <button
                                    className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                    type="submit"
                                >
                                    Assign
                                </button>
                                </Link>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                  </table>
          </div>
        </div>
        </div>
      </>
    );
};

export default Employees;