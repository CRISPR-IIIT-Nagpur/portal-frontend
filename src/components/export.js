import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const Export = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://192.168.77.84:7979/api/network/admin/complaints");
        setData(response.data['result']);
        console.log(response.data['result']);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    }
    fetchComplaints();
  }, []);

  // Function to export data as CSV
  const exportToCSV = () => {
    if (data.length === 0) return;

    // Define column headers
    const headers = [
      'Floor No.',
      'Room No.',
      'Name',
      'Type',
      'Description',
      'Date',
      'Status',
      'Assigned Personnel'
    ];

    // Create CSV content
    let csvContent = headers.join(',') + '\n';

    // Add data rows
    data.forEach(item => {
      // Format date for CSV
      const date = new Date(item.reported_at).toLocaleString('en-US');

      // Escape fields that might contain commas
      const escapedDescription = `"${item.description.replace(/"/g, '""')}"`;
      const escapedName = `"${item.name.replace(/"/g, '""')}"`;

      const row = [
        item.floor,
        item.roomNo,
        escapedName,
        item.network_type.toUpperCase(),
        escapedDescription,
        `"${date}"`,
        item.status,
        item.assigned_to || 'Not Assigned'
      ];

      csvContent += row.join(',') + '\n';
    });

    // Create a blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `complaints_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to export data as PDF
  const exportToPDF = () => {
    if (data.length === 0) return;

    // Create new PDF document - note the updated syntax
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Complaints Report", 14, 22);
    doc.setFontSize(11);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);

    // Define table columns
    const columns = [
      { header: "Floor", dataKey: "floor" },
      { header: "Room No.", dataKey: "room" },
      { header: "Name", dataKey: "name" },
      { header: "Type", dataKey: "type" },
      { header: "Description", dataKey: "description" },
      { header: "Date", dataKey: "date" },
      { header: "Status", dataKey: "status" },
      { header: "Assigned To", dataKey: "assigned" }
    ];

    // Prepare table data
    const tableData = data.map(item => {
      return {
        floor: item.floor,
        room: item.roomNo,
        name: item.name,
        type: item.network_type.toUpperCase(),
        description: item.description.charAt(0).toUpperCase() + item.description.slice(1).toLowerCase(),
        date: new Date(item.reported_at).toLocaleDateString('en-US'),
        status: item.status,
        assigned: item.assigned_to || 'Not Assigned'
      };
    });

    autoTable(doc, {
      head: [columns.map(col => col.header)],
      body: tableData.map(row =>
        columns.map(col => row[col.dataKey])
      ),
      startY: 40,
      styles: {
        fontSize: 9,
        cellPadding: 3
      },
      headStyles: {
        fillColor: [0, 0, 0],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      margin: { top: 40 }
    });

    // Save PDF
    doc.save(`complaints_report_${new Date().toISOString().split('T')[0]}.pdf`);
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
          <Link to="/" className="mt-auto"
            onClick={() => {
              localStorage.clear();
            }}
          >
            <div className="group grid">
              <div className="relative flex items-center justify-center h-12 w-12  mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/logout.png')} className="h-6 w-6" alt="logo" /></div>
              <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Log Out</span>
            </div>
          </Link>
        </div>
        <div className="h-screen ml-4">
          <p className="text-3xl text-center font-bold mt-10 mb-5">Export</p>
          <div className="grid grid-cols-2 w-fit">
            <button
              className="bg-black text-white rounded-md p-2 m-2 w-fit"
              onClick={exportToCSV}
            >
              Export as CSV
            </button>
            <button
              className="bg-black text-white rounded-md p-2 m-2 w-fit"
              onClick={exportToPDF}
            >
              Export as PDF
            </button>
          </div>
          <div className="overflow-y-auto h-5/6 mr-10 rounded-xl no-scrollbar">
            <table className="min-w-full divide-y divide-slate-300">
              <thead className="bg-black sticky top-0">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Floor Number</th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Room Number</th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Name</th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Type</th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Description</th>
                  <th scope="col" className="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Date</th>
                  <th scope="col" className="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Status</th>
                  <th scope="col" className="py-3.5 pr-4 text-left text-sm font-semibold text-white sm:pr-6">Assigned Personel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="pl-4 pr-3 py-3 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.floor}</td>
                    <td className="pl-4 pr-3 py-3 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.roomNo}</td>
                    <td className="pl-4 pr-3 py-3 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.name}</td>
                    <td className="pl-4 pr-3 py-3 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.network_type.toUpperCase()}</td>
                    <td className="pl-4 pr-3 py-3 text-left text-sm font-medium text-gray-900 sm:pl-6">{item.description.charAt(0).toUpperCase() + item.description.slice(1).toLowerCase()}</td>
                    <td className="pr-4 py-3 text-left text-sm font-medium text-gray-900 sm:pr-6">{new Date(item.reported_at).toLocaleString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: true // Ensures AM/PM format
                    })}</td>
                    <td className="pr-4 py-3 text-left text-sm font-medium text-gray-900 sm:pr-6">{item.status}</td>
                    <td className="pr-4 py-3 text-left text-sm font-medium text-gray-900 sm:pr-6">{item.assigned_to}</td>
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