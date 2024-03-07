import React, { useState } from "react";
import { Link } from "react-router-dom";

const Export = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [sortConfig, setSortConfig] = useState(null);

    const data = [
        {
            floorNumber: 1,
            roomNumber: 101,
            name: "John Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "Jane Doe",
        },
        {
            floorNumber: 2,
            roomNumber: 202,
            name: "Jane Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "John Doe",
        },
        {
            floorNumber: 6,
            roomNumber: 603,
            name: "John Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "Jane Doe",
        },
        {
            floorNumber: 1,
            roomNumber: 104,
            name: "Jane Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "John Doe",
        },
        {
            floorNumber: 1,
            roomNumber: 105,
            name: "John Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "Jane Doe",
        },
        {
            floorNumber: 1,
            roomNumber: 106,
            name: "Jane Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "John Doe",
        },
        {
            floorNumber: 1,
            roomNumber: 107,
            name: "John Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "Jane Doe",
        },
        {
            floorNumber: 1,
            roomNumber: 108,
            name: "Jane Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "John Doe",
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
        <p className="text-3xl text-center font-bold mt-10 mb-5">Export</p>
        <div className="grid grid-cols-2 w-fit">
          <button className="bg-black text-white rounded-md p-2 m-2 w-fit">Export as CSV</button>
          <button className="bg-black text-white rounded-md p-2 m-2 w-fit">Export as PDF</button>
        </div>
        <div className="overflow-y-auto h-5/6 mr-10 rounded-xl no-scrollbar"> 
        <table class="min-w-full divide-y divide-slate-300">
                  <thead class="bg-black sticky top-0">
                    <tr>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Floor Number</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Room Number</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Name</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Type</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Description</th>
                      <th scope="col" class="py-3.5 pr-4 text-right text-sm font-semibold text-white sm:pr-6">Date</th>
                      <th scope="col" class="py-3.5 pr-4 text-right text-sm font-semibold text-white sm:pr-6">Status</th>
                      <th scope="col" class="py-3.5 pr-4 text-right text-sm font-semibold text-white sm:pr-6">Personel Assigned</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 bg-white">
                      {data.map((item, index) => (
                          <tr key={index}>
                          <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.floorNumber}</td>
                          <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.roomNumber}</td>
                          <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.name}</td>
                          <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.complaintType}</td>
                          <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.complaintDescription}</td>
                          <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">{item.date}</td>
                          <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">{item.status}</td>
                          <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">{item.personelAssigned}</td>
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

export default Export;