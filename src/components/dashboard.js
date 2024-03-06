import React from "react";
import { Link } from "react-router-dom";


const Dashboard = () => {
  return (
    <>
      <navbar className="flex flex-wrap items-center justify-between p-5 bg-black">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">CRISPR</span>
      </div>
      <div className="flex items-center">

      <Link to="/" className="text-indigo-100 hover:text-white font-bold mr-4">Logout</Link>
      </div>
      </navbar>
      <br />
      <div className="flex min-h-screen min-w-screen items-center justify-center text-gray-600 bg-gray-50">
        <div className="relative">
          <div className="hidden sm:block h-56 w-56 text-black absolute a-z-10 -left-20 -top-30">
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="a"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.6) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#a)"
              />
            </svg>
          </div>
          <div className="hidden sm:block h-28 w-28 text-black absolute a-z-10 -right-20 -bottom-10">
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="b"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.5) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#b)"
              />
            </svg>
          </div>
            <h1 className="text-black text-2xl font-bold text-center mb-20">Hi user, How you doing today?</h1>
          
          <div className="grid grid-wrap gap-12 grid-cols-3">
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex items-center justify-center overflow-hidden">
                <svg class="h-20 w-20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#000000"> <path d="m 8 1.992188 c -2.617188 0 -5.238281 0.933593 -7.195312 2.808593 l -0.496094 0.480469 c -0.3984378 0.378906 -0.410156 1.011719 -0.03125 1.410156 c 0.382812 0.398438 1.015625 0.410156 1.414062 0.027344 l 0.5 -0.476562 c 3.085938 -2.953126 8.53125 -2.953126 11.617188 0 l 0.5 0.476562 c 0.398437 0.382812 1.03125 0.371094 1.414062 -0.027344 c 0.378906 -0.398437 0.367188 -1.03125 -0.03125 -1.410156 l -0.496094 -0.480469 c -1.957031 -1.875 -4.578124 -2.808593 -7.195312 -2.808593 z m -0.03125 4.007812 c -1.570312 0.011719 -3.128906 0.628906 -4.207031 1.8125 l -0.5 0.550781 c -0.375 0.40625 -0.347657 1.042969 0.0625 1.414063 c 0.410156 0.371094 1.042969 0.339844 1.414062 -0.070313 l 0.5 -0.542969 c 1.242188 -1.363281 3.992188 -1.492187 5.398438 -0.128906 c 0.121093 -0.023437 0.242187 -0.035156 0.363281 -0.035156 c 0.53125 0 1.039062 0.210938 1.414062 0.585938 l 0.222657 0.222656 c 0.011719 -0.011719 0.023437 -0.019532 0.039062 -0.03125 c 0.40625 -0.371094 0.4375 -1.007813 0.0625 -1.414063 l -0.5 -0.550781 c -1.125 -1.230469 -2.703125 -1.824219 -4.269531 -1.8125 z m 0.03125 4 c -0.511719 0 -1.023438 0.195312 -1.414062 0.585938 c -0.78125 0.78125 -0.78125 2.046874 0 2.828124 s 2.046874 0.78125 2.828124 0 c 0.210938 -0.210937 0.359376 -0.453124 0.457032 -0.714843 l -0.285156 -0.285157 c -0.554688 -0.554687 -0.707032 -1.367187 -0.46875 -2.070312 c -0.335938 -0.226562 -0.726563 -0.34375 -1.117188 -0.34375 z m 0 0"></path> <path d="m 11 10 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 1.292969 1.292969 l -1.292969 1.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 s 1.023437 0.390625 1.414062 0 l 1.292969 -1.292969 l 1.292969 1.292969 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -1.292969 -1.292969 l 1.292969 -1.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 s -0.519531 0.105469 -0.707031 0.292969 l -1.292969 1.292969 l -1.292969 -1.292969 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 0"></path> </g> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/registerNetworkComplaint">
                    <button
                      className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Network Complaint
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <svg fill="#000000" class="h-20 w-20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.981 384.981" space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M192.491,197.204c24.125,0,80.846-29.034,80.846-98.604c0-9.705-0.236-19.079-1.036-27.938 c-1.313-17.429-4.883-32.876-13.771-44.714C247.129,9.837,227.18,0,192.491,0c-34.682,0-54.63,9.834-66.032,25.939 c-8.893,11.841-12.465,27.292-13.778,44.727c-0.8,8.857-1.036,18.231-1.036,27.934C111.645,168.17,168.366,197.204,192.491,197.204 z M218.88,36.123c-2.354,5.951-3.534,8.927-5.89,14.877c-15.209-4.297-25.791-4.297-41,0c-2.356-5.95-3.534-8.926-5.891-14.877 C185.12,30.365,199.862,30.366,218.88,36.123z M123.673,83.517c0.931,2.038,4.888,9.87,11.013,10.604 c7.041,0.845,18.728-24.935,57.805-24.998c39.076,0.063,50.764,25.843,57.805,24.998c6.125-0.735,10.082-8.567,11.013-10.604 c0.19,4.992,0.259,10.045,0.259,15.084c0,34.006-15.016,55.076-27.612,66.763c-15.872,14.727-33.494,20.072-41.465,20.072 c-7.972,0-25.593-5.345-41.465-20.072c-12.596-11.687-27.612-32.757-27.612-66.763C123.414,93.562,123.483,88.509,123.673,83.517z"></path> <path d="M342.583,298.327c-4.127-25.664-12.624-58.724-29.668-70.474c-11.639-8.024-52.247-29.72-69.588-38.984l-0.293-0.156 c-1.983-1.059-4.402-0.847-6.17,0.541c-9.083,7.131-19.034,11.937-29.574,14.284c-1.862,0.415-3.39,1.738-4.067,3.521 l-5.775,15.223h-9.915l-5.775-15.223c-0.677-1.783-2.205-3.106-4.067-3.521c-10.54-2.347-20.49-7.153-29.574-14.284 c-1.768-1.388-4.188-1.601-6.17-0.541c-17.134,9.156-58.238,31.294-69.831,39.106c-19.62,13.218-28.198,61.053-29.718,70.508 c-0.151,0.938-0.064,1.897,0.253,2.793c0.475,1.341,8.879,23.076,54.839,37.005v4.627c0,2.826,2.293,5.118,5.119,5.118 l63.313,0.052c-1.218,6.975-3.82,18.461-9.032,29.811c-0.729,1.582-0.602,3.427,0.343,4.895c0.941,1.47,2.565,2.355,4.308,2.355 h61.895c1.743,0,3.368-0.886,4.309-2.355c0.94-1.468,1.069-3.313,0.345-4.895c-5.21-11.349-7.818-22.836-9.038-29.811l63.319-0.052 c2.825,0,5.119-2.292,5.119-5.118v-4.627c45.96-13.929,54.364-35.664,54.839-37.005 C342.647,300.224,342.734,299.264,342.583,298.327z M270.889,333.688h-8.946v-1.766c0-2.613-2.119-4.733-4.733-4.733 c-2.615,0-4.732,2.119-4.732,4.733v1.766h-5.971v-1.766c0-2.613-2.117-4.733-4.732-4.733c-2.611,0-4.732,2.119-4.732,4.733v1.766 H114.088v-97.226h156.801V333.688z"></path> <path d="M172.417,291.109c-3.612,0-7.004,1.409-9.553,3.966c-3.48,3.491-4.778,8.6-3.388,13.334 c0.081,0.275,0.301,0.488,0.58,0.559c0.278,0.069,0.573-0.011,0.776-0.214l8.494-8.52c0.51,0.206,1.795,0.912,4.171,3.282 c2.425,2.417,3.116,3.703,3.31,4.148l-8.509,8.535c-0.203,0.203-0.283,0.499-0.211,0.776c0.072,0.278,0.285,0.498,0.561,0.578 c1.225,0.356,2.494,0.536,3.773,0.536c3.611,0,7.003-1.408,9.551-3.965c3.999-4.012,4.936-9.929,2.833-14.844l7.945-7.945 l3.361,3.361l-2.292,2.292c-0.498,0.499-0.773,1.161-0.773,1.866s0.275,1.368,0.773,1.866l16.189,16.189 c0.498,0.498,1.161,0.773,1.866,0.773c0.705,0,1.368-0.275,1.867-0.773l8.77-8.77c0.499-0.499,0.773-1.162,0.773-1.867 c0-0.705-0.275-1.368-0.773-1.867l-16.188-16.189c-0.5-0.498-1.163-0.773-1.868-0.773c-0.705,0-1.367,0.275-1.866,0.773 l-2.292,2.292l-3.361-3.361l10.304-10.304c1.661,0.714,3.463,1.096,5.325,1.096c3.612,0,7.004-1.408,9.553-3.965 c3.479-3.491,4.778-8.6,3.39-13.335c-0.081-0.276-0.301-0.488-0.579-0.559c-0.278-0.071-0.573,0.011-0.776,0.214l-8.496,8.522 c-0.51-0.207-1.794-0.912-4.171-3.282c-2.425-2.418-3.116-3.704-3.31-4.149l8.509-8.535c0.203-0.203,0.283-0.499,0.211-0.776 c-0.072-0.278-0.285-0.498-0.561-0.578c-1.225-0.355-2.494-0.536-3.771-0.536c-3.612,0-7.004,1.409-9.552,3.966 c-3.999,4.012-4.936,9.929-2.833,14.844l-10.31,10.31l-10.555-10.556c-0.008-0.014-0.009-0.031-0.017-0.045l-4.821-8.266 c-0.083-0.143-0.197-0.265-0.332-0.359l-8.134-5.643c-0.451-0.313-1.058-0.257-1.444,0.129l-3.623,3.623 c-0.387,0.387-0.441,0.995-0.129,1.445l5.645,8.133c0.094,0.135,0.217,0.249,0.359,0.332l8.264,4.82 c0.016,0.009,0.033,0.012,0.049,0.021l10.552,10.553l-7.939,7.939C176.081,291.491,174.279,291.109,172.417,291.109z M199.577,298.674c0.577-0.576,1.513-0.576,2.088,0.001l10.388,10.387c0.576,0.577,0.577,1.512,0,2.089 c-0.577,0.576-1.513,0.576-2.089,0l-10.387-10.387C198.999,300.186,198.999,299.251,199.577,298.674z M204.276,293.976 c0.577-0.578,1.512-0.578,2.09,0l10.386,10.386c0.577,0.576,0.577,1.512,0,2.089c-0.575,0.576-1.512,0.576-2.089-0.001 l-10.387-10.385C203.7,295.486,203.7,294.552,204.276,293.976z"></path> </g> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/registerMaintenanceComplaint">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Hostel Complaint
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <svg class="w-20 h-20 fill-black" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
                  <path d="M437.4 281.224h-21.046c16.833-34.58 28.023-67.206 28.023-92.847 0-18.316-2.624-36.425-7.802-53.82a8.05 8.05 0 0 0-15.431 4.593c4.734 15.904 7.134 32.466 7.134 49.227 0 85.29-140.794 263.973-172.277 302.857C224.517 452.35 83.723 273.668 83.723 188.377 83.723 93.383 161.006 16.1 256 16.1c65.227 0 124.115 36.151 153.686 94.345a8.052 8.052 0 0 0 14.354-7.294 189.02 189.02 0 0 0-68.164-74.526C325.981 9.9 291.444 0 256 0 157.613 0 76.615 75.82 68.334 172.096c-28.133 3.128-50.087 27.042-50.087 55.996v12.881c0 31.072 25.28 56.352 56.352 56.352h29.205c16.907 32.145 37.839 65.281 58.534 95.53h-81.3c-31.072 0-56.352 25.28-56.352 56.352v6.44C24.688 486.72 49.968 512 81.04 512h172.813c4.341 0 9.685-4.342 12.328-7.737 16.117-20.708 40.306-49.843 72.37-95.402a8.08 8.08 0 0 0 1.172.094H437.4c31.072 0 56.352-25.28 56.352-56.352v-15.027c.001-31.072-25.28-56.352-56.352-56.352zm-362.8 0c-22.195 0-40.252-18.056-40.252-40.252v-12.881c0-19.814 14.396-36.32 33.276-39.634.024 25.628 11.206 58.222 28.022 92.766H74.6zm6.44 214.675c-22.195 0-40.252-18.056-40.252-40.252v-6.44c0-22.195 18.056-40.252 40.252-40.252h92.476c26.737 37.984 51.744 69.845 65.512 86.943H81.04zm396.612-143.295c0 22.195-18.056 40.252-40.252 40.252h-87.74c20.696-30.25 41.628-63.385 58.534-95.53H437.4c22.195 0 40.252 18.056 40.252 40.252v15.026z"/>
                  <path d="M256 40.788c-81.38 0-147.589 66.209-147.589 147.589 0 13.892 1.93 27.644 5.735 40.872 1.23 4.272 5.692 6.743 9.962 5.512a8.053 8.053 0 0 0 5.512-9.962c-3.39-11.782-5.108-24.036-5.108-36.422 0-72.503 58.985-131.488 131.488-131.488s131.488 58.985 131.488 131.488S328.503 319.866 256 319.866c-48.242 0-92.539-26.357-115.604-68.783a8.048 8.048 0 0 0-10.917-3.228 8.05 8.05 0 0 0-3.228 10.917c25.884 47.615 75.602 77.194 129.749 77.194 81.38 0 147.589-66.209 147.589-147.589S337.38 40.788 256 40.788z"/>
                  <path d="M350.457 115.925H161.543a8.049 8.049 0 0 0-8.05 8.05v137.392a8.049 8.049 0 0 0 8.05 8.05h188.914a8.049 8.049 0 0 0 8.05-8.05V123.975a8.049 8.049 0 0 0-8.05-8.05zm-131.488 16.1h26.834v44.008h-26.834v-44.008zm80.503 121.292H169.593V132.025h33.275v52.059a8.049 8.049 0 0 0 8.05 8.05h42.935a8.049 8.049 0 0 0 8.05-8.05v-52.059h37.568v121.292zm42.935 0h-26.834V132.025h26.834v121.292z"/>
                  <path d="M281.761 206.088h-92.31c-4.447 0-8.05 3.603-8.05 8.05s3.603 8.05 8.05 8.05h92.31c4.447 0 8.05-3.603 8.05-8.05s-3.603-8.05-8.05-8.05zM281.761 229.702h-92.31c-4.447 0-8.05 3.603-8.05 8.05s3.603 8.05 8.05 8.05h92.31c4.447 0 8.05-3.603 8.05-8.05s-3.603-8.05-8.05-8.05z"/>
                  </svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/trackComplaint">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Track Complaints
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <svg class="w-20 h-20 fill-black"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5.636 18.364A9 9 0 1 0 18.364 5.636 9 9 0 0 0 5.636 18.364Zm2.171-.757a7.001 7.001 0 0 0 9.8-9.8l-2.779 2.779a1 1 0 0 1-1.414-1.414l2.778-2.779a7.002 7.002 0 0 0-9.799 9.8l2.779-2.779a1 1 0 0 1 1.414 1.414l-2.779 2.779Z" clip-rule="evenodd"/></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/unblock">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Unblock Website
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <svg class="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C3.44772 1 3 1.44772 3 2V22C3 22.5523 3.44772 23 4 23C4.55228 23 5 22.5523 5 22V13.5983C5.46602 13.3663 6.20273 13.0429 6.99251 12.8455C8.40911 12.4914 9.54598 12.6221 10.168 13.555C11.329 15.2964 13.5462 15.4498 15.2526 15.2798C17.0533 15.1004 18.8348 14.5107 19.7354 14.1776C20.5267 13.885 21 13.1336 21 12.3408V5.72337C21 4.17197 19.3578 3.26624 18.0489 3.85981C16.9875 4.34118 15.5774 4.87875 14.3031 5.0563C12.9699 5.24207 12.1956 4.9907 11.832 4.44544C10.5201 2.47763 8.27558 2.24466 6.66694 2.37871C6.0494 2.43018 5.47559 2.53816 5 2.65249V2C5 1.44772 4.55228 1 4 1ZM5 4.72107V11.4047C5.44083 11.2247 5.95616 11.043 6.50747 10.9052C8.09087 10.5094 10.454 10.3787 11.832 12.4455C12.3106 13.1634 13.4135 13.4531 15.0543 13.2897C16.5758 13.1381 18.1422 12.6321 19 12.3172V5.72337C19 5.67794 18.9081 5.66623 18.875 5.68126C17.7575 6.18804 16.1396 6.81972 14.5791 7.03716C13.0776 7.24639 11.2104 7.1185 10.168 5.55488C9.47989 4.52284 8.2244 4.25586 6.83304 4.3718C6.12405 4.43089 5.46427 4.58626 5 4.72107Z" fill="#000000"></path> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/reportMischief">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Report Mischief
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <svg class="w-20 h-20" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.716,4.354a8.031,8.031,0,1,0-2.7,13.138l3.58,3.581A3.164,3.164,0,0,0,21.073,16.6l-3.58-3.58A8.046,8.046,0,0,0,15.716,4.354ZM10.034,16.069A6.033,6.033,0,1,1,14.3,14.3,6,6,0,0,1,10.034,16.069Zm9.625,1.943a1.165,1.165,0,0,1-1.647,1.647l-3.186-3.186a8.214,8.214,0,0,0,.89-.757,8.214,8.214,0,0,0,.757-.89Z"></path></g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/lostandfound">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Lost and Found
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                  <svg class="w-20 h-20" fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 459.5 459.5" space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_2_"> <path id="XMLID_4_" d="M445.121,283.209h0.008V157.477c0-13.534-10.971-24.506-24.506-24.506h-43.701 c-13.534,0-24.506,10.972-24.506,24.506v61.267l11.664-9.991l27.457-38.825l-20.456,53.864l-45.11,38.639 c-7.342,6.289-8.195,17.339-1.907,24.681c6.292,7.344,17.341,8.193,24.681,1.907l48.502-41.544c2.226-1.906,3.937-4.341,4.977-7.08 l22.041-58.038l-7.105,63.71c-0.767,6.882-5.031,9.698-9.52,13.542c-5.478,4.692-43.723,37.45-48.503,41.544 c-2.209,1.892-4.594,3.445-7.091,4.666l-0.01,132.676c-0.001,11.601,9.402,21.005,21.002,21.006c0,0,0.001,0,0.002,0 c11.6,0,21.003-9.402,21.004-21.002l0.012-155.289h9.061c0,0.02-0.003,0.04-0.003,0.06l0.438,155.287 c0.032,11.58,9.43,20.944,21.003,20.944c0.02,0,0.04,0,0.061,0c11.6-0.032,20.978-9.463,20.944-21.063L445.121,283.209z"></path> <circle id="XMLID_1073_" cx="398.582" cy="81.628" r="36.277"></circle> <circle id="XMLID_1074_" cx="60.918" cy="81.628" r="36.277"></circle> <path id="XMLID_1078_" d="M133.531,262.431l-45.111-38.639l-20.456-53.864l27.457,38.826l11.664,9.991v-61.267 c0-13.534-10.972-24.506-24.506-24.506H38.877c-13.534,0-24.506,10.972-24.506,24.506v125.732h0.009l-0.439,155.228 c-0.033,11.601,9.344,21.031,20.944,21.063c0.021,0,0.04,0,0.061,0c11.572,0,20.971-9.364,21.003-20.944l0.439-155.287 c0-0.02-0.003-0.04-0.003-0.06h9.06l0.012,155.289c0.001,11.6,9.405,21.003,21.006,21.002c11.6-0.001,21.003-9.405,21.002-21.006 l-0.01-132.676c-2.497-1.221-4.882-2.773-7.09-4.666c-4.78-4.094-43.025-36.852-48.503-41.544c-4.296-3.68-8.725-6.545-9.52-13.542 l-7.105-63.709l22.04,58.037c1.04,2.739,2.752,5.174,4.977,7.08l48.503,41.544c7.349,6.292,18.395,5.43,24.681-1.907 C141.726,279.77,140.873,268.72,133.531,262.431z"></path> <path id="XMLID_1079_" d="M249.261,41.998C249.261,18.803,223.569,0,191.877,0c-31.693,0-57.385,18.803-57.385,41.998 c0,9.57,4.382,18.387,11.745,25.449l-8.844,18.436c-0.412,0.858-0.226,1.884,0.461,2.543c0.687,0.659,1.72,0.803,2.56,0.356 l21.04-11.179c8.821,4.046,19.245,6.393,30.422,6.393C223.569,83.996,249.261,65.193,249.261,41.998z"></path> <path id="XMLID_1080_" d="M317.877,121.235l8.844-18.436c0.412-0.858,0.226-1.884-0.461-2.543c-0.687-0.659-1.719-0.803-2.56-0.356 l-21.04,11.179c-8.821-4.046-19.244-6.393-30.422-6.393c-31.692,0-57.384,18.803-57.384,41.998s25.692,41.998,57.384,41.998 c31.693,0,57.384-18.803,57.384-41.998C329.622,137.115,325.241,128.298,317.877,121.235z"></path> </g> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/reportFriend">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                     Report a Friend in Distress
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <svg class="h-20 w-20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0H24V24H0z"></path> <path d="M11 2c4.068 0 7.426 3.036 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17c0 1.105-.895 2-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.244-3.305C3.657 13.631 3 11.892 3 10c0-4.418 3.582-8 8-8zm-.53 5.763c-.684-.684-1.792-.684-2.475 0-.684.683-.684 1.791 0 2.474L11 13.243l3.005-3.006c.684-.683.684-1.791 0-2.474-.683-.684-1.791-.684-2.475 0l-.53.53-.53-.53z"></path> </g> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/reportSelf">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Request mental health assistance
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <svg fill="#000000" class="w-20 h-20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M510.239,76.011L476.848,9.228C474.022,3.571,468.24,0,461.913,0s-12.109,3.571-14.935,9.228l-33.391,66.783 c-1.152,2.321-1.761,4.875-1.761,7.467v378.435c0,27.656,22.387,50.087,50.087,50.087C489.578,512,512,489.613,512,461.913V83.478 C512,80.886,511.391,78.332,510.239,76.011z M478.609,461.913c0,21.835-33.391,21.979-33.391,0v-16.696h33.391V461.913z M478.609,100.174h-33.391V87.418l16.696-33.391l16.696,33.391V100.174z"></path> </g> </g> <g> <g> <path d="M361.739,0H16.696C7.479,0,0,7.473,0,16.696v478.609C0,504.527,7.479,512,16.696,512h345.043 c9.217,0,16.696-7.473,16.696-16.696V16.696C378.435,7.473,370.956,0,361.739,0z M150.261,66.783h77.913 c9.217,0,16.696,7.473,16.696,16.696s-7.479,16.696-16.696,16.696h-77.913c-9.217,0-16.696-7.473-16.696-16.696 S141.044,66.783,150.261,66.783z M294.957,434.087H83.478c-9.217,0-16.696-7.473-16.696-16.696 c0-9.223,7.479-16.696,16.696-16.696h211.478c9.217,0,16.696,7.473,16.696,16.696 C311.652,426.614,304.174,434.087,294.957,434.087z M66.783,350.609c0-9.223,7.479-16.696,16.696-16.696h100.174 c9.217,0,16.696,7.473,16.696,16.696c0,9.223-7.479,16.696-16.696,16.696H83.478C74.261,367.304,66.783,359.831,66.783,350.609z M294.957,367.304h-44.522c-9.217,0-16.696-7.473-16.696-16.696c0-9.223,7.479-16.696,16.696-16.696h44.522 c9.217,0,16.696,7.473,16.696,16.696C311.652,359.831,304.174,367.304,294.957,367.304z M294.957,300.522H83.478 c-9.217,0-16.696-7.473-16.696-16.696c0-9.223,7.479-16.696,16.696-16.696h211.478c9.217,0,16.696,7.473,16.696,16.696 C311.652,293.049,304.174,300.522,294.957,300.522z M66.783,217.043c0-9.223,7.479-16.696,16.696-16.696h66.783 c9.217,0,16.696,7.473,16.696,16.696c0,9.223-7.479,16.696-16.696,16.696H83.478C74.261,233.739,66.783,226.266,66.783,217.043z M294.957,233.739h-77.913c-9.217,0-16.696-7.473-16.696-16.696c0-9.223,7.479-16.696,16.696-16.696h77.913 c9.217,0,16.696,7.473,16.696,16.696C311.652,226.266,304.174,233.739,294.957,233.739z M294.957,166.957H83.478 c-9.217,0-16.696-7.473-16.696-16.696s7.479-16.696,16.696-16.696h211.478c9.217,0,16.696,7.473,16.696,16.696 C311.652,159.484,304.174,166.957,294.957,166.957z"></path> </g> </g> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/contributePYQ">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Contribute PYQ
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;