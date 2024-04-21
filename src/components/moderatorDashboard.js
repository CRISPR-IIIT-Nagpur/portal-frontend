import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModeratorDashboard = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortConfig, setSortConfig] = useState(null);

    const data = [
        {
            courseCode: "ABC101",
            year: 2022,
            examType: "Midterm",
            semester: "1",
            pdf: "example.pdf",
            uploadedBy: "John Doe",
        },
        {
            courseCode: "DEF202",
            year: 2022,
            examType: "Final",
            semester: "2",
            pdf: "example.pdf",
            uploadedBy: "Jane Doe",
        },
        {
            courseCode: "GHI303",
            year: 2022,
            examType: "Midterm",
            semester: "4",
            pdf: "example.pdf",
            uploadedBy: "John Doe",
        },
        {
            courseCode: "JKL404",
            year: 2022,
            examType: "Final",
            semester: "6",
            pdf: "example.pdf",
            uploadedBy: "Jane Doe",
        },
        {
            courseCode: "MNO505",
            year: 2022,
            examType: "Midterm",
            semester: "8",
            pdf: "example.pdf",
            uploadedBy: "John Doe",
        },
        
    ];

    return (
<>
      <div className="grid grid-cols-[minmax(20%,20%)_auto] h-screen overflow-y-hidden">
      <div className="top-0 left-0 m-0 flex flex-col bg-black text-white shadow-lg w-16 h-lvh">
        <Link to="/employeeDashboard">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/crispr.png')} className="h-10 w-10" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Home</span>
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
        <p className="text-3xl text-center font-bold mt-10 mb-5">Files</p>
        <div className="overflow-y-auto h-5/6 mr-10 rounded-xl no-scrollbar">
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search by course code"
                    className="w-1/2 p-2 border border-black rounded-lg mb-3"
                    onChange={(e) => {
                        const searchValue = e.target.value;
                        const filteredData = data.filter((entry) => {
                            return entry.courseCode.toLowerCase().includes(searchValue.toLowerCase());
                        });
                        setFilteredData(filteredData);
                    }}
                />
            </div>

        <table class="min-w-full divide-y divide-slate-300">
                  <thead class="bg-black sticky top-0">
                    <tr>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Course Code</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Year</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Exam Type</th>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Semester</th>
                      <th scope="col" class="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">PDF</th>
                      <th scope="col" class="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Uploaded By</th>
                      <th scope="col" class="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 bg-white items-center justify-items-center">
                      {data.map((item, index) => (
                          <tr key={index}>
                          <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.courseCode}</td>
                          <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.year}</td>
                          <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.examType}</td>
                          <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">{item.semester}</td>
                          <td class="pr-4 py-3 text-left text-sm font-medium text-gray-900 sm:pr-6">{item.pdf}</td>
                          <td class="pr-4 py-3 text-left text-sm font-medium text-gray-900 sm:pr-6">{item.uploadedBy}</td>
                          <Link to="/assignComplaints" className="self-center">

                                <button
                                    className="inline-block cursor-pointer select-none rounded-md border border-black bg-green-500 py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none mt-1"
                                    type="submit"
                                >
                                    ✔
                                </button>
                                &nbsp;
                                </Link>
                            <Link to="/assignComplaints" className="self-center">
                                <button
                                    className="inline-block cursor-pointer select-none rounded-md border border-black bg-red-500 py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none mt-1"
                                    type="submit"
                                >
                                    ✖
                                </button>
                                </Link>
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

export default ModeratorDashboard;