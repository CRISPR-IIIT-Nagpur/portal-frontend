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
            <navbar className="flex flex-wrap items-center justify-between p-5 bg-indigo-500">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Internet</span>
                </div>
                <div className="flex items-center">
                    <Link to="/export" className="text-indigo-100 hover:text-white font-bold mr-4">
                        Export
                    </Link>
                    <Link to="/complaints" className="text-indigo-100 hover:text-white font-bold mr-4">
                        Complaints
                    </Link>
                    <Link to="/" className="text-indigo-100 hover:text-white font-bold mr-4">
                        Logout
                    </Link>
                </div>
            </navbar>
            <h1 className="text-center text-3xl text-indigo-500 font-bold mt-10">Employees</h1>
            <div className="flex flex-wrap justify-center mt-10">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mt-10 ml-10">
               Export As CSV
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mt-10 ml-10">
                Export As PDF
            </button>
            </div>
            <div className="flex min-h-screen min-w-screen items-center justify-center text-gray-600 bg-gray-50">                       
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse w-full">
                            <thead>
                                <tr>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Name
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Type
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Ongoing
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Resolved
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Total
                                    </th>
                                    <th className="font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 p-3">
                                        Assign Complaint
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.name}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.type}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.ongoing}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.resolved}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.total}
                                        </td>
                                        <td className=" bg-gray-200 text-gray-600 border border-gray-300 ">
                                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-3 ml-10 rounded-full">
                                                Assign
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
  
        </>
    );
};

export default Employees;