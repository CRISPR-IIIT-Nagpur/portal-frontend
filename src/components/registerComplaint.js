import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterComplaint = () => {
    const [place, setPlace] = useState("hostel");
    const [floor, setFloor] = useState("G");
    const [networkType, setNetworkType] = useState("wifi");
    const [issue, setIssue] = useState("");
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handlePlaceChange = (e) => {
        setPlace(e.target.value);
        setFloor("G");
    };

    const handleNetworkTypeChange = (e) => {
        setNetworkType(e.target.value);
        setIssue("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
        <navbar className="flex flex-wrap items-center justify-between p-5 bg-indigo-500">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Internet</span>
        </div>
        <div className="flex items-center">
        <Link to="/trackComplaint" className="text-indigo-100 hover:text-white font-bold mr-4">Track Complaints</Link>
        <Link to="/unblock" className="text-indigo-100 hover:text-white font-bold mr-4">Unblock Websites</Link>
        <Link to="/" className="text-indigo-100 hover:text-white font-bold mr-4">Logout</Link>
        </div>
        </navbar>
            <section className="bg-gray-100 py-12 text-gray-800 sm:py-24 h-full">
                <div className="bg-gray-100 mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="max-w-2xl px-4 lg:pr-24">
                        <p className="mb-2 text-blue-600">Hostel Grievance Redressal</p>
                        <h3 className="mb-5 text-3xl font-semibold">Submit Your Grievance</h3>
                        <p className="mb-16 text-md text-gray-600">
                            Hostel Grievance Redressal ensures a swift and confidential resolution of student concerns. We guarantee a
                            quick response to submitted complaints, fostering a secure and comfortable living environment for all hostel
                            residents.
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
                                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                                    />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Swift Grievance Resolution</p>
                                <span className="font-normal text-gray-600">
                                    Swift grievance resolution prioritizes timely and effective solutions, ensuring students' concerns are
                                    promptly addressed and resolved.
                                </span>
                            </div>
                        </div>
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
                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                    />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Confidentiality Assured</p>
                                <span className="font-normal text-gray-600">
                                    Your grievances are handled with utmost confidentiality, ensuring privacy and trust throughout the hostel
                                    grievance redressal process.
                                </span>
                            </div>
                        </div>
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
                                <p className="mb-2">Easy Communication</p>
                                <span className="font-normal text-gray-600">
                                    Effortless communication is facilitated, providing a smooth and accessible channel for expressing and
                                    resolving grievances within the hostel community.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
                        <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
                            <h3 className="mb-1 inline-block text-3xl font-medium">
                                <span className="mr-4">Submit Complaint</span>
                                <span className="inline-block rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">
                                    Quick Response
                                </span>
                            </h3>
                            <p className="text-gray-600">Lodge your complaints below</p>
                        </div>
                        <div className="p-4 sm:p-8">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Place</label>
                                    <select
                                        name="place"
                                        id="place"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                        value={place}
                                        onChange={handlePlaceChange}
                                    >
                                        <option value="hostel">Hostel</option>
                                        <option value="academic">Academic</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Floor</label>
                                    <select
                                        name="floor"
                                        id="floor"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                        value={floor}
                                        onChange={(e) => setFloor(e.target.value)}
                                    >
                                        {place === "hostel" ? (
                                            <>
                                                <option value="G">G</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="G">G</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </>
                                        )}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Network Type</label>
                                    <select
                                        name="networkType"
                                        id="networkType"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                        value={networkType}
                                        onChange={handleNetworkTypeChange}
                                    >
                                        <option value="wifi">WiFi</option>
                                        <option value="lan">LAN</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Issue</label>
                                    <select
                                        name="issue"
                                        id="issue"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                        value={issue}
                                        onChange={(e) => setIssue(e.target.value)}
                                    >
                                        {networkType === "wifi" ? (
                                            <>
                                                <option value="speed">Speed Issue</option>
                                                <option value="connection">Connection Issue</option>
                                                <option value="forgotPassword">Forgot Password</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="speed">Speed Issue</option>
                                                <option value="portDamage">Port Damage</option>
                                                <option value="connection">Connection Issue</option>
                                                <option value="forgotPassword">Forgot Password</option>
                                            </>
                                        )}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Description</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        rows="4"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
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
                                    <span>Complaint submitted</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RegisterComplaint;