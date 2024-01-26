import React, { useState } from "react";
import { Link } from "react-router-dom";

const Unblock = () => {
    const[url, setUrl] = useState("");
    const[purpose, setPurpose] = useState("");
    const[submitted, setSubmitted] = useState(false);
    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const handlePurposeChange = (e) => {
        setPurpose(e.target.value);
    }
    

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
                <Link to="/registerComplaint" className="text-indigo-100 hover:text-white font-bold mr-4">Register Complaints</Link>
                <Link to="/trackComplaint" className="text-indigo-100 hover:text-white font-bold mr-4">Track Complaints</Link>
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
                                <span className="mr-4">Submit Request</span>
                                <span className="inline-block rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">
                                    Quick Response
                                </span>
                            </h3>
                            <p className="text-gray-600">Submit request to unblock website below</p>
                        </div>
                        <div className="p-4 sm:p-8">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Website URL</label>
                                    <input
                                        type="text"
                                        className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none"
                                        placeholder="https://example.com"
                                        onChange={handleUrlChange}
                                        value={url}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Purpose of Website</label>
                                    <input
                                        type="text"
                                        className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none"
                                        placeholder="Purpose"
                                        onChange={handlePurposeChange}
                                        value={purpose}
                                        required
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="inline-block w-40 cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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

export default Unblock;