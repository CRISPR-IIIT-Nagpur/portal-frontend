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
             <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[200px] overflow-y-auto text-center bg-black">
  <div class="text-white text-2xl font-bold">CRISPR</div>
  <div class="flex flex-col justify-center text-left py-10">
    <Link to="/export" class="text-indigo-100 hover:text-white font-medium mr-4 py-2">
    <svg class="w-6 h-6 stroke-indigo-900 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="1.5"><path d="M12 20a8 8 0 0 1-8-8m16 0a7.985 7.985 0 0 1-3 6.245"/><path stroke-linejoin="round" d="M12 14V4m0 0 3 3m-3-3L9 7"/></g></svg>
    Export Data
    </Link>
    <Link to="/employees" class="text-indigo-100 hover:text-white font-medium mr-4 py-2">
    <svg class="w-6 h-6 fill-indigo-900 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M73.8 29.7H26.3a6 6 0 0 0-6 6v28.6a6 6 0 0 0 6 6h47.4a6 6 0 0 0 6-6V35.7a6.13 6.13 0 0 0-5.9-6Zm-34.9 5.4a7.6 7.6 0 1 1-7.6 7.6 7.66 7.66 0 0 1 7.6-7.6Zm9.8 28.3H29.2c-1.7 0-2-1.1-2-1.6a11.45 11.45 0 0 1 11.4-9.9h.4a11.45 11.45 0 0 1 11.4 9.9c.3.5 0 1.6-1.7 1.6Zm23.1-6.9a2 2 0 0 1-2 2H61a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h8.8a2 2 0 0 1 2 2Zm0-11a2 2 0 0 1-2 2H55a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h14.8a2 2 0 0 1 2 2Z"/></svg>
      Employees
    </Link>
    <Link to="/complaints" class="text-indigo-100 hover:text-white font-medium mr-4 py-2">
    <svg className="w-6 h-6 fill-indigo-900 inline" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 386.187 386.187">
                  <path d="M48.626 131.93a8.986 8.986 0 0 0 10.686 8.082c6.549 36.481 38.521 64.251 76.858 64.251s70.31-27.77 76.858-64.251a8.995 8.995 0 0 0 10.685-8.081l1.171-13.919c.416-4.953-3.262-9.307-8.214-9.724a8.965 8.965 0 0 0-4.319.703c-3.458-15.338-11.44-28.979-22.469-39.443a9.029 9.029 0 0 0-1.183-1.099c-13.88-12.643-32.32-20.358-52.529-20.358-37.154 0-68.331 26.084-76.181 60.901a9.002 9.002 0 0 0-12.533 9.02l1.17 13.918zm87.544-65.84a59.727 59.727 0 0 1 32.381 9.491c-9.601 6.155-20.789 9.466-32.381 9.466a60.281 60.281 0 0 1-15.876-2.119c-4.79-1.311-9.743 1.517-11.053 6.313-1.309 4.795 1.518 9.743 6.313 11.053a78.305 78.305 0 0 0 20.616 2.754c16.78 0 32.907-5.337 46.26-15.176 8.633 10.406 13.826 23.759 13.826 38.305 0 33.132-26.954 60.087-60.086 60.087s-60.086-26.955-60.086-60.087S103.039 66.09 136.17 66.09zm8.389 57.91a9 9 0 0 1 9-9h10.001c4.971 0 9 4.029 9 9s-4.029 9-9 9h-10.001a9 9 0 0 1-9-9zm-10.888 27h4.998c4.971 0 9 4.029 9 9s-4.029 9-9 9h-4.998a9 9 0 0 1 0-18zm-33.408-27a9 9 0 0 1 9-9h10c4.971 0 9 4.029 9 9s-4.029 9-9 9h-10a9 9 0 0 1-9-9zm191.624-31.222c.04 4.971-3.956 9.222-8.927 9.222h-.075c-4.937 0-8.958-4.13-8.998-9.076-.079-9.746 7.034-15.867 12.749-20.666 4.485-3.767 7.426-6.417 7.426-8.842 0-4.91-3.993-8.904-8.902-8.904-4.913 0-8.906 3.994-8.906 8.904 0 4.971-4.029 9-9 9s-9-4.029-9-9c0-14.835 12.068-26.904 26.902-26.904 14.838 0 26.906 12.069 26.906 26.904 0 10.997-8.006 17.719-13.852 22.627-2.212 1.859-6.334 5.468-6.323 6.735zm-31.263 283.514a8.907 8.907 0 0 1-1.354 5.847c-.002.003-.004-.014-.007-.01-1.071 1.676-2.695 2.961-4.69 3.635-.291.099-.587.103-.89.171-.765.176-1.533.064-2.278.064h-75.252c-4.971 0-9-4.029-9-9s4.029-9 9-9h64.078l-23.773-97.646c-3.654-15.023-22.957-27.718-43.359-29.327-6.951 11.05-21.069 18.31-36.688 18.31s-29.736-7.32-36.688-18.37c-20.402 1.609-39.705 14.374-43.357 29.397L32.591 368h64.076c4.971 0 9 4.029 9 9s-4.029 9-9 9h-75.25c-.09 0-.179.164-.27.164-.663 0-1.336.085-2.01-.068a8.964 8.964 0 0 1-5.559-3.891 8.937 8.937 0 0 1-1.386-5.85c.05-.466.136-.905.254-1.346l26.428-108.676C44.791 241.999 73.396 223 103.997 223h1.237c3.845 0 7.265 2.395 8.513 6.032 2.119 6.173 10.584 12.376 22.664 12.376s20.545-6.218 22.664-12.391c1.248-3.637 4.668-6.017 8.513-6.017h1.236c30.6 0 59.205 18.999 65.124 43.332l26.428 108.65c.114.427.197.861.248 1.31zm31.367-257.552c0 4.971-4.029 9.035-9 9.035s-8.943-3.995-8.943-8.966v-.069c0-4.971 3.972-9 8.943-9s9 4.03 9 9zm82.057-79.688v86.867c0 21.275-17.757 39.081-39.032 39.081H251.8l-26.912 35.664c-1.768 2.358-4.472 3.37-7.208 3.37-1.879 0-3.773-.555-5.392-1.769a8.925 8.925 0 0 1-1.803-12.537l29.612-39.375c1.7-2.268 4.368-3.353 7.201-3.353h87.717c11.35 0 21.032-9.731 21.032-21.081V39.052c0-11.35-9.683-21.052-21.032-21.052h-104.82c-11.351 0-20.585 9.41-20.585 20.759 0 4.971-4.029 9.175-9 9.175s-9-4.146-9-9.117C191.611 17.542 208.92 0 230.196 0h104.82c21.275 0 39.032 17.776 39.032 39.052z"/>
                  </svg>
      Complaints
    </Link>
    <Link to="/" class="text-indigo-100 hover:text-white font-bold mr-4 py-2">
    <svg className="stroke-indigo-900 w-6 h-6 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 15 3-3m0 0-3-3m3 3H4m5-4.751V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C10.52 4 11.08 4 12.2 4h4.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2.002 2.002 0 0 1-.875.874c-.427.218-.986.218-2.104.218h-4.606c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C9 18.48 9 17.92 9 16.8v-.05"/></svg>
      Logout
    </Link>
  </div>
      </div>
            <h1 className="text-center text-3xl text-black font-bold mt-10">Employees</h1>
            <div className="flex flex-wrap justify-center mt-10">
            <button className="bg-black hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mt-10 ml-10">
               Export As CSV
            </button>
            <button className="bg-black hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mt-10 ml-10">
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
                                            <button className="bg-black hover:bg-indigo-700 text-white px-3 ml-10 rounded-full">
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