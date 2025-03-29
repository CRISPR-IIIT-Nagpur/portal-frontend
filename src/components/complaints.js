import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Complaints = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComplaintId, setSelectedComplaintId] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://localhost:4500/api/network/admin/complaints");
        setData(response.data['result']);
        console.log(response.data['result']);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };
    fetchComplaints();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:4500/api/network/admin/employees");
      setEmployees(response.data['result']);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const openAssignModal = (complaintId) => {
    setSelectedComplaintId(complaintId);
    fetchEmployees();
    setIsModalOpen(true);
  };

  const handleAssign = async () => {
    if (!selectedEmployee) return;

    try {
      await axios.post("http://localhost:4500/api/network/admin/assignComplaint", {
        complaintId: selectedComplaintId,
        employeeId: selectedEmployee
      });

      // Refresh complaints data
      const response = await axios.get("http://localhost:4500/api/network/admin/complaints");
      setData(response.data['result']);

      // Close modal and reset selection
      setIsModalOpen(false);
      setSelectedComplaintId(null);
      setSelectedEmployee(null);
    } catch (error) {
      console.error("Error assigning complaint:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-[minmax(20%,20%)_auto] h-screen overflow-y-hidden">
        <div className="top-0 left-0 m-0 flex flex-col bg-black text-white shadow-lg w-16 h-lvh">
          <Link to="/adminDashboard">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/crispr.png')} className="h-10 w-10" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Home</span>
            </div>
          </Link>
          <Link to="/employees">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/employees.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Employees</span>
            </div>
          </Link>
          <Link to="/complaints">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/complaints.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Complaints</span>
            </div>
          </Link>
          <Link to="/export">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/export.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Export Data</span>
            </div>
          </Link>
          <Link to="/" className="mt-auto">
            <div className="group grid">
              <div className="relative flex items-center justify-center h-12 w-12  mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/logout.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Log Out</span>
            </div>
          </Link>
        </div>
        <div className="h-screen ml-4">
          <p className="text-3xl text-center font-bold mt-10 mb-5">Complaints</p>
          <div className="overflow-y-auto h-5/6 mr-10 rounded-xl no-scrollbar">
            <table class="min-w-full divide-y divide-slate-300">
              <thead class="bg-black sticky top-0">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Floor No.</th>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Room No.</th>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Name</th>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Type</th>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Description</th>
                  <th scope="col" class="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Date</th>
                  <th scope="col" class="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Status</th>
                  <th scope="col" class="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Assigned Personel</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 bg-white items-center justify-items-center">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td class="pl-4 pr-3 py-3.5 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.floor}</td>
                    <td class="pl-4 pr-3 py-3.5 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.roomNo}</td>
                    <td class="pl-4 pr-3 py-3.5 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.name}</td>
                    <td class="pl-4 pr-3 py-3.5 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.network_type.toUpperCase()}</td>
                    <td class="pl-4 pr-3 py-3.5 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.description.charAt(0).toUpperCase() + item.description.slice(1).toLowerCase()}</td>
                    <td class="pr-4 py-3.5 text-left text-sm font-medium text-gray-900 sm:pr-6">{new Date(item.reported_at).toLocaleString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: true // Ensures AM/PM format
                    })}</td>
                    <td class="pr-4 py-3.5 text-sm text-left font-medium text-gray-900 sm:pr-6">{item.status}</td>

                    <td class="pr-4 py-3.5 pl-4 text-sm text-left font-medium  sm:pr-6">
                      {item.status === "Pending" ?

                        <button
                          className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                          type="submit" onClick={() => openAssignModal(item.id)}
                        >
                          Assign
                        </button>
                        : <span className="py-3.5 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.assigned_to}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      {/* Employee Assignment Modal */}
      {
        isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
            <div className="relative mx-auto p-5 border w-[600px] shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Assign Complaint</h3>
                <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-gray-500 mb-4">
                    Select an employee to handle this complaint:
                  </p>
                  <div className="max-h-60 overflow-y-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50 sticky top-0">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white bg-black uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white bg-black uppercase tracking-wider">
                            Post
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white bg-black uppercase tracking-wider">
                            Ongoing
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {employees.map((employee) => (
                          <tr
                            key={employee.id}
                            onClick={() => setSelectedEmployee(employee.id)}
                            className={`hover:bg-gray-100 cursor-pointer ${selectedEmployee === employee._id ? 'bg-blue-100' : ''}`}
                          >
                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              {employee.name}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                              {employee.post}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                              {employee.ongoing}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    onClick={handleAssign}
                    disabled={!selectedEmployee}
                    className={`px-4 py-2 mr-2 rounded-md text-white ${!selectedEmployee ? 'bg-gray-400' : 'bg-black hover:bg-gray-700'
                      }`}
                  >
                    Assign
                  </button>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedComplaintId(null);
                      setSelectedEmployee(null);
                    }}
                    className="px-4 py-2 bg-gray-300 rounded-md text-black hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Complaints;