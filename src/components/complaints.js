import React, { useState } from "react";
import { Link } from "react-router-dom";

const Complaints = () => {
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
        <div class="flex min-h-screen flex-row">
  <div class="w-64 shrink-0 -translate-x-full transform transition-transform duration-150 ease-in md:translate-x-0 md:drop-shadow-sm bg-black">
  <div class="text-white text-2xl font-bold w-fit p-5">CRISPR</div>
          <div className="grid w-fit">
          <Link to="/employees" className="text-indigo-100 hover:text-white font-bold mr-4 p-4">Employees</Link>
          <Link to="/export" className="text-indigo-100 hover:text-white font-bold mr-4 p-4">Export Data</Link>
          <Link to="/complaints" className="text-indigo-100 hover:text-white font-bold mr-4 p-4">Complaints</Link>
          <Link to="/" className="text-indigo-100 hover:text-white font-bold mr-4 p-4">Logout</Link>
          </div>
  </div>

  <main role="main" class="-ml-64 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
    <div class="flex flex-grow flex-col bg-slate-100 p-4">
      <div class="rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6 lg:p-8">
          <div class="mb-5 justify-between sm:flex sm:items-center font-bold text-3xl">
            Complaints
          </div>
          <div class="mt-8 flex flex-col">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table class="min-w-full divide-y divide-slate-300">
                    <thead class="bg-black">
                      <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Name</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Type</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Ongoing</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Resolved</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Total</th>
                        <th scope="col" class="relative py-3.5 pr-4 text-right text-sm font-semibold text-white sm:pr-6">Assign Complaints</th>
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
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
      </>
    );
};

export default Complaints;