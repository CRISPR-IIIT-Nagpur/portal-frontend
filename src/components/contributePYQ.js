import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContributePYQ = () => {
  const [courseCode, setCourseCode] = useState("");
  const [year, setYear] = useState("");
  const [examType, setExamType] = useState("S1");
  const [semester, setSemester] = useState("1");
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCourseCodeChange = (e) => {
    setCourseCode(e.target.value);
  }

  const handleYearChange = (e) => {
    setYear(e.target.value);
  }

  const handleExamTypeChange = (e) => {
    setExamType(e.target.value);
  }

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  }

  return (
    <>
      <navbar className="flex flex-wrap items-center justify-between p-5 bg-black">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">CRISPR</span>
        </div>
        <div className="flex items-center">
          <Link
            to="/registerNetworkComplaint"
            className="text-indigo-100 hover:text-white font-bold mr-4"
          >
            Register Complaints
          </Link>
          <Link
            to="/trackComplaint"
            className="text-indigo-100 hover:text-white font-bold mr-4"
          >
            Track Complaints
          </Link>
          <Link
            to="/"
            className="text-indigo-100 hover:text-white font-bold mr-4"
          >
            Logout
          </Link>
        </div>
      </navbar>
      <section className="bg-gray-100 py-12 text-gray-800 sm:py-24 h-full">
        <div className="bg-gray-100 mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
          <div className="max-w-2xl px-4 lg:pr-24">
            <p className="mb-2 text-blue-600">Hostel Complaint Resolution</p>
            <h3 className="mb-5 text-3xl font-semibold">Unblock website</h3>
            <p className="text-[18px] mb-10 text-md text-gray-600">
              The "Unblock Website" section on our website facilitates requests
              for the removal of firewall restrictions on specific websites.
              Users can provide details such as the URL and reason for
              unblocking, streamlining the process. Our team diligently reviews
              each request to balance user needs with network security.
              Additionally, the section serves as an educational resource,
              promoting responsible internet usage. Overall, it reflects our
              commitment to user-centric solutions and proactive risk
              management.
            </p>
            <div className="mb-5 flex font-medium">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <div className="">
                <p className="mb-2">Rapid Review</p>
                <span className="font-normal text-gray-600">
                  We understand the importance of your request and are committed
                  to reviewing it promptly. We appreciate your patience.
                </span>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
            <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
              <h3 className="mb-1 inline-block text-3xl font-medium">
                <span className="mr-4">Submit Request</span>
                <span className="inline-block rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">
                  Quick Response
                </span>
              </h3>
              <p className="text-gray-600">
                Submit a PYQ (Previous Year Question) paper to help your peers and juniors. Please make sure the uploaded PYQ is not already present on the server.
              </p>
            </div>
            <div className="p-4 sm:p-8">
              <form onSubmit={handleSubmit}>
              <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Course Code
                  </label>
                  <input
                    type="text"
                    value={courseCode}
                    onChange={handleCourseCodeChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Course Code"
                    required/>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Year
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={handleYearChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Year"
                    required/>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Exam Type
                  </label>
                  <select
                    value={examType}
                    onChange={handleExamTypeChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="S1">Sessional 1</option>
                    <option value="S2">Sessional 2</option>
                    <option value="ES">End Sem</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Semester
                  </label>
                  <select
                    value={semester}
                    onChange={handleSemesterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                    <option value="3">Semester 3</option>
                    <option value="4">Semester 4</option>
                    <option value="5">Semester 5</option>
                    <option value="6">Semester 6</option>
                    <option value="7">Semester 7</option>
                    <option value="8">Semester 8</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Upload PDF
                  </label>
                  <input type="file" accept=".pdf"/>
                </div>
                <div className="flex justify-center">
                  <button
                    className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {submitted && (
                <div className="mt-4 text-green-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Request submitted</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContributePYQ;
