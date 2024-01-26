import React from "react";
import { Link } from "react-router-dom";


const Dashboard = () => {
  return (
    <>
      <navbar className="flex flex-wrap items-center justify-between p-5 bg-indigo-500">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">Internet</span>
      </div>
      <div className="flex items-center">

      <Link to="/" className="text-indigo-100 hover:text-white font-bold mr-4">Logout</Link>
      </div>
      </navbar>
      <div className="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
        <div className="relative">
          <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
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
          <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
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
          
            <h1 className="text-indigo-500 text-2xl font-bold text-center mb-20">Hi user, How you doing today?</h1>
          
          <div className="flex flex-wrap gap-8">
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <svg class= "w-20 h-20 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 310 310"><path d="m300.606 159.727-45.333-45.333c-5.857-5.858-15.355-5.858-21.213 0l-9.06 9.06V15c0-8.284-6.716-15-15-15H20C11.716 0 5 6.716 5 15v240.002c0 8.284 6.716 15 15 15h85V295c0 8.284 6.716 15 15 15h45.333a15 15 0 0 0 10.607-4.394l124.667-124.667c5.858-5.858 5.858-15.354-.001-21.212zM35 30h160v123.454l-85.606 85.605c-.302.301-.581.619-.854.942H35V30zm124.12 250H135v-24.121l109.667-109.666 24.12 24.12L159.12 280z"/></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/registerComplaint">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Register Complaint
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <svg class="w-20 h-20 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
                  <path d="M437.4 281.224h-21.046c16.833-34.58 28.023-67.206 28.023-92.847 0-18.316-2.624-36.425-7.802-53.82a8.05 8.05 0 0 0-15.431 4.593c4.734 15.904 7.134 32.466 7.134 49.227 0 85.29-140.794 263.973-172.277 302.857C224.517 452.35 83.723 273.668 83.723 188.377 83.723 93.383 161.006 16.1 256 16.1c65.227 0 124.115 36.151 153.686 94.345a8.052 8.052 0 0 0 14.354-7.294 189.02 189.02 0 0 0-68.164-74.526C325.981 9.9 291.444 0 256 0 157.613 0 76.615 75.82 68.334 172.096c-28.133 3.128-50.087 27.042-50.087 55.996v12.881c0 31.072 25.28 56.352 56.352 56.352h29.205c16.907 32.145 37.839 65.281 58.534 95.53h-81.3c-31.072 0-56.352 25.28-56.352 56.352v6.44C24.688 486.72 49.968 512 81.04 512h172.813c4.341 0 9.685-4.342 12.328-7.737 16.117-20.708 40.306-49.843 72.37-95.402a8.08 8.08 0 0 0 1.172.094H437.4c31.072 0 56.352-25.28 56.352-56.352v-15.027c.001-31.072-25.28-56.352-56.352-56.352zm-362.8 0c-22.195 0-40.252-18.056-40.252-40.252v-12.881c0-19.814 14.396-36.32 33.276-39.634.024 25.628 11.206 58.222 28.022 92.766H74.6zm6.44 214.675c-22.195 0-40.252-18.056-40.252-40.252v-6.44c0-22.195 18.056-40.252 40.252-40.252h92.476c26.737 37.984 51.744 69.845 65.512 86.943H81.04zm396.612-143.295c0 22.195-18.056 40.252-40.252 40.252h-87.74c20.696-30.25 41.628-63.385 58.534-95.53H437.4c22.195 0 40.252 18.056 40.252 40.252v15.026z"/>
                  <path d="M256 40.788c-81.38 0-147.589 66.209-147.589 147.589 0 13.892 1.93 27.644 5.735 40.872 1.23 4.272 5.692 6.743 9.962 5.512a8.053 8.053 0 0 0 5.512-9.962c-3.39-11.782-5.108-24.036-5.108-36.422 0-72.503 58.985-131.488 131.488-131.488s131.488 58.985 131.488 131.488S328.503 319.866 256 319.866c-48.242 0-92.539-26.357-115.604-68.783a8.048 8.048 0 0 0-10.917-3.228 8.05 8.05 0 0 0-3.228 10.917c25.884 47.615 75.602 77.194 129.749 77.194 81.38 0 147.589-66.209 147.589-147.589S337.38 40.788 256 40.788z"/>
                  <path d="M350.457 115.925H161.543a8.049 8.049 0 0 0-8.05 8.05v137.392a8.049 8.049 0 0 0 8.05 8.05h188.914a8.049 8.049 0 0 0 8.05-8.05V123.975a8.049 8.049 0 0 0-8.05-8.05zm-131.488 16.1h26.834v44.008h-26.834v-44.008zm80.503 121.292H169.593V132.025h33.275v52.059a8.049 8.049 0 0 0 8.05 8.05h42.935a8.049 8.049 0 0 0 8.05-8.05v-52.059h37.568v121.292zm42.935 0h-26.834V132.025h26.834v121.292z"/>
                  <path d="M281.761 206.088h-92.31c-4.447 0-8.05 3.603-8.05 8.05s3.603 8.05 8.05 8.05h92.31c4.447 0 8.05-3.603 8.05-8.05s-3.603-8.05-8.05-8.05zM281.761 229.702h-92.31c-4.447 0-8.05 3.603-8.05 8.05s3.603 8.05 8.05 8.05h92.31c4.447 0 8.05-3.603 8.05-8.05s-3.603-8.05-8.05-8.05z"/>
                  </svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/trackComplaint">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Track Complaint
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <svg class="w-20 h-20 fill-indigo-500"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5.636 18.364A9 9 0 1 0 18.364 5.636 9 9 0 0 0 5.636 18.364Zm2.171-.757a7.001 7.001 0 0 0 9.8-9.8l-2.779 2.779a1 1 0 0 1-1.414-1.414l2.778-2.779a7.002 7.002 0 0 0-9.799 9.8l2.779-2.779a1 1 0 0 1 1.414 1.414l-2.779 2.779Z" clip-rule="evenodd"/></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/unblock">
                    <button
                      className="inline-block w-40 cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      type="submit"
                    >
                      Unblock Website
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