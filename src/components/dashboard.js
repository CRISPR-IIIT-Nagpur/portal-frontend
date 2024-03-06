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
                <svg class="w-20 h-20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 290.627 290.627" space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style={{fill:'#F9BA48'}} d="M79.689,159.375h131.25c2.93,0,5.508,1.369,7.228,3.473c1.35-5.634,2.147-11.484,2.147-17.536 c0-41.423-33.577-75-75-75s-75,33.577-75,75c0,6.052,0.792,11.902,2.147,17.536C74.181,160.744,76.759,159.375,79.689,159.375z"></path> <path style={{fill:"#333333"}} d="M210.938,154.688H79.689c-7.753,0-14.062,6.309-14.062,14.063v84.375 c0,7.753,6.309,14.063,14.062,14.063h32.812v14.063h-9.375v9.375h9.375h65.625h9.375v-9.375h-9.375v-14.063h32.812 c7.753,0,14.063-6.309,14.063-14.063V168.75C225.001,160.997,218.692,154.688,210.938,154.688z M168.751,281.25h-46.875v-14.063 h46.875V281.25z M215.626,253.125c0,2.583-2.1,4.688-4.688,4.688h-32.812h-65.625H79.689c-2.588,0-4.687-2.105-4.687-4.688V168.75 c0-2.583,2.1-4.688,4.687-4.688h131.25c2.588,0,4.688,2.105,4.688,4.688v84.375H215.626z"></path> <path style={{fill:"#333333"}} d="M79.689,253.125h131.25V168.75H79.689V253.125z M89.064,178.125h112.5v65.625h-112.5V178.125z"></path> <path style={{fill:"#333333"}} d="M75.001,89.063v-75C75.001,6.309,68.692,0,60.939,0H14.064C6.31,0,0.001,6.309,0.001,14.063v75 c0,7.753,6.309,14.063,14.062,14.063h46.875C68.692,103.125,75.001,96.816,75.001,89.063z M14.064,9.375h46.875 c2.588,0,4.687,2.105,4.687,4.688V75H9.376V14.063C9.376,11.48,11.476,9.375,14.064,9.375z M60.939,93.75H37.501H14.064 c-2.588,0-4.687-2.105-4.687-4.688v-4.688h28.124h28.125v4.688C65.626,91.645,63.526,93.75,60.939,93.75z"></path> <circle style={{fill:"#333333"}} cx="37.501" cy="89.063" r="4.688"></circle> <path style={{fill:"#333333"}} d="M281.251,56.25V14.063C281.251,6.309,274.942,0,267.188,0h-65.625 c-7.753,0-14.062,6.309-14.062,14.063V56.25h-9.375V75c0,5.17,4.205,9.375,9.375,9.375h93.75c5.17,0,9.375-4.205,9.375-9.375 V56.25H281.251z M196.876,14.063c0-2.583,2.1-4.688,4.688-4.688h65.625c2.587,0,4.687,2.105,4.687,4.688V56.25h-32.812v4.688 h-9.375V56.25h-32.812V14.063H196.876z M281.251,75h-93.75v-9.375h32.812v4.688h28.125v-4.688h32.812L281.251,75L281.251,75z"></path> <path style={{fill:"#333333"}} d="M37.318,113.812l-9-2.625c-3.234,11.114-4.88,22.594-4.88,34.125 c0,29.002,10.388,57.117,29.25,79.167l7.125-6.094c-17.409-20.353-27-46.308-27-73.073 C32.814,134.667,34.328,124.069,37.318,113.812z"></path> <path style={{fill:"#333333"}} d="M176.818,37.313l2.62-9c-11.114-3.234-22.594-4.875-34.125-4.875 c-22.411,0-44.33,6.141-63.38,17.761l4.88,8.002C113.434,32.962,146.598,28.519,176.818,37.313z"></path> <path style={{fill:"#333333"}} d="M246.352,95.817c7.603,15.492,11.461,32.147,11.461,49.495c0,26.766-9.591,52.72-27,73.073 l7.125,6.094c18.863-22.05,29.25-50.166,29.25-79.167c0-18.797-4.181-36.839-12.422-53.63L246.352,95.817z"></path> </g> </g> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/registerNetworkComplaint">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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
                <svg class="w-20 h-20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 360 360" space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_5_"> <polygon id="XMLID_2277_" style={{fill:"#565659"}} points="77.27,49.164 90.401,49.164 90.401,64.504 101.16,64.504 101.16,25.332 90.401,25.332 90.401,39.785 77.27,39.785 77.27,25.332 66.512,25.332 66.512,64.504 77.27,64.504 "></polygon> <path id="XMLID_2278_" style={{fill:"#565659"}} d="M113.959,58.627c1.729,1.858,3.807,3.356,6.234,4.497 c2.429,1.14,5.131,1.709,8.111,1.709c2.904,0,5.581-0.552,8.027-1.654c2.446-1.103,4.552-2.566,6.316-4.386 c1.767-1.82,3.146-3.918,4.139-6.29c0.993-2.372,1.489-4.846,1.489-7.421c0-2.5-0.469-4.945-1.407-7.337 c-0.938-2.392-2.27-4.524-3.999-6.399c-1.73-1.876-3.807-3.386-6.235-4.525c-2.427-1.139-5.13-1.711-8.109-1.711 c-2.906,0-5.583,0.543-8.027,1.629c-2.447,1.085-4.562,2.538-6.346,4.358c-1.784,1.819-3.172,3.926-4.165,6.316 c-0.993,2.392-1.49,4.874-1.49,7.449c0,2.538,0.478,5.001,1.435,7.392C110.889,54.646,112.23,56.771,113.959,58.627z M119.946,41.191c0.349-1.23,0.891-2.335,1.627-3.31c0.735-0.974,1.663-1.756,2.787-2.345c1.12-0.589,2.454-0.882,3.999-0.882 c1.508,0,2.823,0.285,3.945,0.854c1.121,0.57,2.06,1.324,2.813,2.262c0.753,0.938,1.315,2.023,1.683,3.256 c0.367,1.232,0.552,2.51,0.552,3.835c0,1.288-0.175,2.556-0.524,3.807c-0.35,1.251-0.882,2.364-1.6,3.338 c-0.718,0.976-1.646,1.765-2.786,2.373c-1.141,0.605-2.482,0.91-4.027,0.91c-1.546,0-2.879-0.295-4-0.885 c-1.123-0.587-2.051-1.359-2.786-2.315c-0.737-0.956-1.288-2.05-1.656-3.282c-0.367-1.233-0.551-2.512-0.551-3.835 C119.422,43.686,119.596,42.426,119.946,41.191z"></path> <path id="XMLID_2281_" style={{fill:"#565659"}} d="M179.863,62.296c1.415-0.955,2.556-2.234,3.421-3.835 c0.864-1.6,1.296-3.576,1.296-5.931c0-1.839-0.275-3.402-0.827-4.689c-0.552-1.287-1.343-2.381-2.373-3.283 c-1.029-0.901-2.271-1.683-3.724-2.345c-1.454-0.662-3.081-1.269-4.883-1.82c-1.141-0.367-2.161-0.681-3.061-0.938 c-0.902-0.256-1.665-0.525-2.29-0.801c-0.626-0.275-1.104-0.579-1.435-0.909c-0.332-0.332-0.496-0.755-0.496-1.27 c0-0.698,0.284-1.193,0.854-1.489c0.57-0.294,1.333-0.441,2.29-0.441c1.177,0,2.381,0.193,3.614,0.579 c1.231,0.386,2.345,0.799,3.337,1.241c1.178,0.516,2.317,1.104,3.421,1.766l4.635-8.883c-0.883-0.44-1.876-0.91-2.979-1.407 c-1.104-0.496-2.29-0.955-3.559-1.379c-1.269-0.424-2.584-0.773-3.945-1.049c-1.36-0.276-2.758-0.413-4.192-0.413 c-1.95,0-3.799,0.286-5.545,0.854c-1.748,0.571-3.302,1.407-4.662,2.511c-1.361,1.104-2.438,2.483-3.228,4.138 c-0.792,1.656-1.187,3.569-1.187,5.738c0,1.434,0.193,2.703,0.58,3.808c0.386,1.103,0.983,2.086,1.793,2.951 c0.809,0.865,1.838,1.637,3.09,2.317c1.249,0.681,2.739,1.314,4.469,1.903c1.177,0.406,2.289,0.755,3.337,1.048 c1.049,0.296,1.978,0.589,2.787,0.883c0.809,0.295,1.443,0.634,1.903,1.019c0.459,0.388,0.689,0.856,0.689,1.408 c0,0.516-0.23,0.931-0.689,1.241c-0.46,0.313-1.278,0.47-2.455,0.47c-1.545,0-3.063-0.223-4.552-0.662 c-1.49-0.441-2.824-0.938-4-1.489c-1.398-0.626-2.741-1.343-4.027-2.152l-4.635,9.434c1.177,0.699,2.455,1.324,3.834,1.876 c1.38,0.552,2.814,1.03,4.304,1.435c1.49,0.404,2.987,0.717,4.496,0.938C166.778,64.89,168.25,65,169.684,65 c1.802,0,3.595-0.213,5.38-0.635C176.847,63.942,178.447,63.254,179.863,62.296z"></path> <polygon id="XMLID_2282_" style={{fill:"#565659"}} points="200.579,64.504 211.338,64.504 211.338,34.709 222.594,34.709 222.594,25.332 189.269,25.332 189.269,34.709 200.579,34.709 "></polygon> <polygon id="XMLID_2283_" style={{fill:"#565659"}} points="257.186,55.124 240.028,55.124 240.028,48.944 254.263,48.944 254.263,40.227 240.028,40.227 240.028,34.709 256.689,34.709 256.689,25.332 229.269,25.332 229.269,64.504 257.186,64.504 "></polygon> <polygon id="XMLID_2284_" style={{fill:"#565659"}} points="293.488,55.124 275.724,55.124 275.724,25.332 264.965,25.332 264.965,64.504 293.488,64.504 "></polygon> <path id="XMLID_2285_" style={{fill:"#64C37D"}} d="M45,266.458C30.544,270.762,20,284.146,20,300c0,1.698,0.127,3.366,0.361,5H15 c-8.284,0-15,6.716-15,15s6.716,15,15,15h30V266.458z"></path> <path id="XMLID_2286_" style={{fill:"#64C37D"}} d="M345,305h-5.361c0.234-1.634,0.361-3.302,0.361-5 c0-15.854-10.544-29.238-25-33.542V335h30c8.284,0,15-6.716,15-15S353.284,305,345,305z"></path> <path id="XMLID_2287_" style={{fill:"#DEDDE0"}} d="M150,275h30V65h-10.316H45v270h75v-60H150z M135,95h30v30h-30V95z M135,155h30v30 h-30V155z M135,215h30v30h-30V215z M105,245H75v-30h30V245z M105,185H75v-30h30V185z M105,125H75V95h30V125z"></path> <path id="XMLID_2295_" style={{fill:"#CDCDD0"}} d="M315,65H180v210h30h30v60h75V65z M225,245h-30v-30h30V245z M225,185h-30v-30h30 V185z M225,125h-30V95h30V125z M255,95h30v30h-30V95z M255,155h30v30h-30V155z M255,215h30v30h-30V215z"></path> <rect id="XMLID_2303_" x="150" y="275" style={{fill:"#818085"}} width="30" height="60"></rect> <rect id="XMLID_2304_" x="180" y="275" style={{fill:"#565659"}} width="30" height="60"></rect> <rect id="XMLID_2305_" x="120" y="275" style={{fill:"#FFFFFF"}} width="30" height="60"></rect> <rect id="XMLID_2306_" x="210" y="275" style={{fill:"#FFFFFF"}} width="30" height="60"></rect> <rect id="XMLID_2307_" x="75" y="155" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2308_" x="135" y="155" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2309_" x="195" y="155" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2310_" x="255" y="155" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2311_" x="75" y="95" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2312_" x="135" y="95" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2313_" x="195" y="95" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2314_" x="255" y="95" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2315_" x="75" y="215" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2316_" x="135" y="215" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2317_" x="195" y="215" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> <rect id="XMLID_2318_" x="255" y="215" style={{fill:"#FFFFFF"}} width="30" height="30"></rect> </g> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/registerMaintenanceComplaint">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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
                <svg class="h-20 w-20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style={{fill:"#EBEBEC"}} d="M469.333,0H42.667C19.14,0,0,19.14,0,42.667v307.2c0,23.526,19.14,42.667,42.667,42.667h426.667 c23.526,0,42.667-19.14,42.667-42.667v-307.2C512,19.14,492.86,0,469.333,0z"></path> <path style={{fill:"#D7D8D9"}} d="M25.6,349.867v-307.2C25.6,19.14,44.74,0,68.267,0h-25.6C19.14,0,0,19.14,0,42.667v307.2 c0,23.526,19.14,42.667,42.667,42.667h25.6C44.74,392.533,25.6,373.393,25.6,349.867z"></path> <path style={{fill:"#6AC8B7"}} d="M324.129,476.34l-17.067-93.867c-0.737-4.058-4.272-7.007-8.396-7.007h-85.333 c-4.124,0-7.658,2.949-8.396,7.007l-17.067,93.867c-0.452,2.49,0.223,5.051,1.844,6.994c1.621,1.943,4.021,3.066,6.551,3.066 h119.467c2.53,0,4.93-1.123,6.551-3.066C323.906,481.392,324.581,478.83,324.129,476.34z"></path> <path style={{fill:"#2DB59F"}} d="M307.062,382.474c-0.737-4.058-4.272-7.007-8.396-7.007h-85.333c-4.124,0-7.658,2.949-8.396,7.007 l-4.932,27.126h111.989L307.062,382.474z"></path> <path style={{fill:"#74DBC9"}} d="M332.8,469.333H179.2c-14.115,0-25.6,11.485-25.6,25.6v8.533c0,4.713,3.821,8.533,8.533,8.533 h187.733c4.713,0,8.533-3.821,8.533-8.533v-8.533C358.4,480.818,346.915,469.333,332.8,469.333z"></path> <g> <path style={{fill:"#6AC8B7"}} d="M170.667,503.467v-8.533c0-14.115,11.485-25.6,25.6-25.6H179.2c-14.115,0-25.6,11.485-25.6,25.6 v8.533c0,4.713,3.821,8.533,8.533,8.533H179.2C174.487,512,170.667,508.179,170.667,503.467z"></path> <path style={{fill:"#6AC8B7"}} d="M512,42.667C512,19.14,492.86,0,469.333,0H42.667C19.14,0,0,19.14,0,42.667V51.2h512V42.667z"></path> <path style={{fill:"#6AC8B7"}} d="M42.667,392.533h426.667c23.526,0,42.667-19.14,42.667-42.667H0 C0,373.393,19.14,392.533,42.667,392.533z"></path> </g> <g> <path style={{fill:"#2DB59F"}} d="M68.267,0h-25.6C19.14,0,0,19.14,0,42.667V51.2h25.6v-8.533C25.6,19.14,44.74,0,68.267,0z"></path> <path style={{fill:"#2DB59F"}} d="M25.6,349.867H0c0,23.526,19.14,42.667,42.667,42.667h25.6C44.74,392.533,25.6,373.393,25.6,349.867 z"></path> </g> <path style={{fill:"#606268"}} d="M384,324.267H128c-4.713,0-8.533-3.821-8.533-8.533c0-4.713,3.821-8.533,8.533-8.533h256 c18.821,0,34.133-15.312,34.133-34.133S402.821,238.933,384,238.933H264.533c-28.231,0-51.2-22.969-51.2-51.2s22.969-51.2,51.2-51.2 h153.6c4.713,0,8.533,3.821,8.533,8.533c0,4.713-3.821,8.533-8.533,8.533h-153.6c-18.821,0-34.133,15.312-34.133,34.133 s15.312,34.133,34.133,34.133H384c28.231,0,51.2,22.969,51.2,51.2S412.232,324.267,384,324.267z"></path> <path style={{fill:"#E5563C"}} d="M128,119.467c-42.348,0-76.8,34.452-76.8,76.8c0,39.652,63.059,116.324,70.25,124.936 c1.621,1.941,4.021,3.065,6.55,3.065c2.529,0,4.929-1.123,6.55-3.065c7.19-8.611,70.25-85.283,70.25-124.936 C204.8,153.919,170.348,119.467,128,119.467z"></path> <path style={{fill:"#CF442B"}} d="M68.267,204.8c0-42.348,34.452-76.8,76.8-76.8c8.924,0,17.49,1.547,25.465,4.357 c-12.186-8.135-26.812-12.891-42.531-12.891c-42.348,0-76.8,34.452-76.8,76.8c0,39.652,63.059,116.324,70.25,124.936 c1.621,1.941,4.021,3.065,6.55,3.065c1.742,0,3.414-0.543,4.821-1.508C115.417,301.055,68.267,239.089,68.267,204.8z"></path> <circle style={{fill:"#EBEBEC"}} cx="128" cy="196.267" r="51.2"></circle> <circle style={{fill:"#D7D8D9"}} cx="128" cy="196.267" r="34.133"></circle> <path style={{fill:"#FDD042"}} d="M443.733,93.867h-51.2c-4.713,0-8.533,3.821-8.533,8.533v42.667c0,4.713,3.821,8.533,8.533,8.533 h51.2c4.713,0,8.533-3.821,8.533-8.533V102.4C452.267,97.687,448.446,93.867,443.733,93.867z"></path> <path style={{fill:"#F07B52"}} d="M426.667,110.933V97.402l14.567-14.567c3.332-3.333,3.332-8.735,0-12.068 c-3.333-3.331-8.735-3.331-12.068,0l-11.033,11.034l-11.033-11.034c-3.333-3.331-8.735-3.331-12.068,0 c-3.332,3.333-3.332,8.735,0,12.068L409.6,97.402v13.532H384V128h25.6v25.6h17.067V128h25.6v-17.067H426.667z"></path> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/trackComplaint">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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
                <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji w-20 h-20" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#AAB8C2" d="M18 0c-4.612 0-8.483 3.126-9.639 7.371l3.855 1.052A5.999 5.999 0 0 1 18 4a6 6 0 0 1 6 6v10h4V10c0-5.522-4.477-10-10-10z"></path><path fill="#FFAC33" d="M31 32a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4v12z"></path></g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/unblock">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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
                <svg class="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 14.4623H16.1909C17.6066 14.4623 18.472 12.7739 17.7261 11.4671L17.2365 10.6092C16.7547 9.76504 16.7547 8.69728 17.2365 7.85309L17.7261 6.99524C18.472 5.68842 17.6066 4 16.1909 4L6 4L6 14.4623ZM6 14.4623L6 20" stroke="#533636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.1909 14.4623C17.6066 14.4623 18.472 12.7739 17.7261 11.4671L17.2365 10.6092C16.7547 9.76504 16.7547 8.69728 17.2365 7.85309L17.7261 6.99524C18.472 5.68842 17.6066 4 16.1909 4L6 4L6 7.23116" stroke="#ff2828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/reportMischief">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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
                <svg class="w-20 h-20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 398 398" space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(9 18)"> <path style={{fill:"#F9C13C"}} d="M152.6,260.8l-98.8,98.8C41,372.4,20.6,372.4,8.2,360s-12.4-32.8,0.4-45.6l98.8-98.8"></path> <path style={{fill:"#E6AE31"}} d="M152.6,260.8l-98.8,98.8C41,372.4,20.6,372.4,8.2,360l121.6-121.6L152.6,260.8z"></path> <path style={{fill:"#B98915"}} d="M30.6,377.2c-10.8,0-20.8-4-28-11.6C-5,358-9,348-9,337.2s4.4-20.8,12-28.4l98.8-98.8l11.2,11.2 L14.2,320C9.4,324.8,7,330.8,7,337.2c0,6.4,2.4,12.4,6.8,16.8s10.4,6.8,16.8,6.8l0,0c6.4,0,12.8-2.8,17.2-7.2l98.8-98.8l11.2,11.2 l-98.4,99.2C51.8,372.8,41.8,377.2,30.6,377.2C31,377.2,30.6,377.2,30.6,377.2z"></path> <circle style={{fill:"#9CE0FF"}} cx="237" cy="136.8" r="144"></circle> <path style={{fill:"#89D6FA"}} d="M169,254.4c65.2,37.6,148.4,15.2,185.6-49.6c37.6-65.2,15.2-148.4-49.6-185.6 C366.6,136.8,304.6,220.8,169,254.4z"></path> <path style={{fill:"#61A1DD"}} d="M237,288.8c-84,0-152-68-152-152s68-152,152-152s152,68,152,152S321,288.8,237,288.8z M237,0.8 c-74.8,0-136,61.2-136,136s61.2,136,136,136s136-61.2,136-136S311.8,0.8,237,0.8z"></path> <g> <path style={{fill:"#FFFFFF"}} d="M151.8,85.6c-1.6,0-3.2-0.4-4.8-1.6c-3.6-2.8-4.4-7.6-1.6-11.2L149,68c2.8-3.6,7.6-4.4,11.2-1.6 c3.6,2.8,4.4,7.6,1.6,11.2l-3.6,4.8C156.6,84.4,154.2,85.6,151.8,85.6z"></path> <path style={{fill:"#FFFFFF"}} d="M167,221.2c-2,0-4-0.8-5.2-2C138.2,198,125,168,125,136.8c0-10,1.2-19.6,4-28.4 c1.2-4.4,5.6-6.8,10-5.6c4.4,1.2,6.8,5.6,5.6,10c-2,7.6-3.2,15.6-3.2,24c0,26.8,11.6,52.4,31.2,70.4c3.2,2.8,3.6,8,0.4,11.2 C171.4,220.4,169,221.2,167,221.2z"></path> </g> </g> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/lostandfound">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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
                  <svg class="w-20 h-20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style={{fill:"#F9DCA4"}} d="M53.562,87.202l5.427,2.444c6.787,3.066,14.469,3.508,21.55,1.254L218.412,47.08 c13.717-4.362,28.56-3.64,41.79,2.053l131.625,56.545c12.726,5.45,18.58,20.225,13.055,32.918c-0.027,0.06-0.053,0.12-0.08,0.181 c-5.308,11.962-18.987,17.816-31.337,13.343l-100.693-36.432c-7.792-2.828-16.334-2.914-24.205-0.255l-88.48,29.874 c-9.61,3.253-15.108,13.332-12.618,23.162c1.535,6.024,5.709,10.645,10.952,12.972c4.238,1.881,9.172,2.272,13.957,0.691 l77.206-25.506c10.347-3.413,21.592,1.687,25.843,11.721c2.368,5.566,2.121,11.554-0.146,16.663 c-2.201,4.959-6.317,9.086-11.845,11.129l-121.733,45.224c-0.89,0.342-1.803,0.657-2.708,0.956 c-22.38,7.426-47.009,3.383-66.506-9.91l-64.01-43.624"></path> <path style={{fill:"#F9DCA4"}} d="M436.936,467.736l-3.546-3.586c-4.432-4.491-10.373-7.18-16.656-7.554l-122.356-7.348 c-12.174-0.729-23.689-5.822-32.416-14.352l-86.846-84.798c-8.402-8.185-8.53-21.651-0.295-30.003 c0.04-0.04,0.079-0.079,0.119-0.119c7.84-7.84,20.439-8.304,28.841-1.005l68.516,59.474c5.299,4.61,12.026,7.279,19.06,7.575 l79.056,3.329c8.589,0.355,16.006-5.939,17.031-14.469c0.621-5.23-1.271-10.156-4.708-13.593c-2.777-2.777-6.56-4.591-10.825-4.797 l-68.812-3.349c-9.22-0.453-16.558-7.909-16.863-17.139c-0.177-5.122,1.841-9.781,5.191-13.13c3.25-3.251,7.761-5.26,12.755-5.191 l110.024,1.32c0.808,0,1.625,0.029,2.433,0.069c19.956,0.946,38.198,11.643,49.565,28.092l37.321,53.988"></path> </g> <path style={{fill:"#EC589B"}} d="M329.875,223.729c0-14.972,10.309-27.11,23.026-27.11c15.896,0,28.782,15.172,28.782,33.888 c0,23.395-27.723,46.266-51.809,58.58c-24.084-12.312-51.809-35.185-51.809-58.58c0-18.716,12.887-33.888,28.782-33.888 C319.566,196.619,329.875,208.756,329.875,223.729z"></path> <path d="M283.032,188.447c3.297-7.43,3.37-15.967,0.203-23.409c-5.929-13.992-21.879-21.224-36.31-16.463l-77.207,25.506 c-2.581,0.852-5.369,0.713-7.857-0.389c-3.089-1.371-5.341-4.039-6.173-7.306c-1.393-5.495,1.734-11.226,7.111-13.047l88.481-29.875 c6.037-2.039,12.642-1.969,18.606,0.196l100.689,36.431c16.452,5.959,34.883-1.896,41.931-17.78l0.148-0.331 c3.581-8.227,3.73-17.353,0.419-25.694c-3.309-8.337-9.669-14.872-17.902-18.397l-131.62-56.543 c-15.096-6.494-32.041-7.327-47.709-2.343l-43.588,13.853c-4.463,1.418-6.93,6.186-5.512,10.647 c1.418,4.463,6.187,6.932,10.647,5.512l43.59-13.853c11.782-3.748,24.521-3.122,35.874,1.762l131.633,56.548 c4.062,1.74,7.195,4.96,8.827,9.069c1.632,4.115,1.559,8.615-0.198,12.649l7.749,3.439l-7.816-3.292 c-3.495,7.879-12.586,11.751-20.702,8.809l-100.684-36.428c-9.56-3.471-20.146-3.582-29.81-0.319l-88.485,29.876 c-13.711,4.641-21.669,19.258-18.115,33.286c2.129,8.347,7.862,15.136,15.73,18.628c6.347,2.816,13.47,3.17,20.056,0.991 l77.202-25.505c6.114-2.013,12.872,1.048,15.387,6.989c1.358,3.191,1.324,6.709-0.095,9.905c-1.375,3.098-3.874,5.449-7.049,6.622 l-121.83,45.261c-0.761,0.293-1.543,0.561-2.331,0.821c-19.399,6.436-41.477,3.121-59.062-8.868L13.253,181.78 c-3.868-2.636-9.142-1.638-11.78,2.231c-2.637,3.869-1.638,9.143,2.231,11.78l64.008,43.623 c14.511,9.893,31.526,15.032,48.441,15.031c8.642,0,17.259-1.342,25.5-4.075c1.211-0.4,2.195-0.748,3.003-1.06l121.718-45.221 C273.868,201.322,279.782,195.766,283.032,188.447z"></path> <path d="M50.08,94.933l5.418,2.441c5.046,2.28,10.461,3.43,15.895,3.43c3.939,0,7.889-0.605,11.713-1.822l61.49-19.543 c4.463-1.418,6.93-6.186,5.512-10.647c-1.418-4.463-6.189-6.93-10.647-5.512L77.966,82.823c-5.101,1.626-10.602,1.304-15.496-0.905 l-5.427-2.444c-4.268-1.924-9.288-0.02-11.211,4.249C43.91,87.99,45.812,93.01,50.08,94.933z"></path> <path d="M510.496,396.33l-37.321-53.986c-13.009-18.826-33.995-30.691-56.122-31.739c-0.946-0.047-1.871-0.052-2.748-0.079 l-110.008-1.32c-7.164-0.106-13.821,2.627-18.867,7.674c-5.123,5.124-7.918,12.202-7.669,19.404 c0.448,13.538,11.393,24.662,24.925,25.328l68.812,3.348c1.977,0.096,3.839,0.921,5.242,2.325c1.743,1.742,2.575,4.146,2.286,6.586 c-0.494,4.102-4.167,7.175-8.258,7.011l-79.057-3.33c-5.102-0.214-10.02-2.167-13.859-5.506l-68.514-59.471 c-11.699-10.162-29.441-9.543-40.455,1.47c-0.015,0.015-0.088,0.088-0.102,0.103c-5.582,5.661-8.611,13.158-8.531,21.109 c0.08,7.946,3.258,15.375,8.941,20.911l38.713,37.799c3.349,3.27,8.718,3.207,11.989-0.142c3.271-3.35,3.207-8.718-0.142-11.989 l-38.72-37.806c-2.431-2.369-3.79-5.546-3.824-8.944c-0.034-3.403,1.263-6.612,3.647-9.03l-6.016-5.974l6.096,5.894 c4.687-4.687,12.28-4.948,17.288-0.597l68.509,59.467c6.72,5.848,15.34,9.274,24.269,9.649l79.061,3.33 c12.962,0.512,24.257-9.099,25.8-21.942c0.907-7.645-1.694-15.148-7.134-20.586c-4.387-4.388-10.214-6.97-16.409-7.271 l-68.806-3.348c-4.78-0.235-8.648-4.167-8.807-8.965c-0.088-2.573,0.874-5.002,2.712-6.84c1.782-1.783,4.144-2.757,6.66-2.708 l110.126,1.32c0.669,0,1.346,0.026,2.032,0.06c16.895,0.8,32.967,9.938,42.991,24.445l37.322,53.988 c1.645,2.379,4.291,3.657,6.981,3.657c1.663,0,3.343-0.488,4.813-1.505C512.195,405.462,513.158,400.181,510.496,396.33z"></path> <path d="M439.425,458.197c-5.911-5.99-13.79-9.563-22.183-10.063l-122.357-7.349c-10.145-0.607-19.732-4.852-27.001-11.954 l-27.274-26.632c-3.351-3.271-8.718-3.207-11.989,0.142s-3.207,8.718,0.142,11.989l27.272,26.63 c10.182,9.951,23.62,15.9,37.835,16.75l122.359,7.349c4.211,0.251,8.161,2.043,11.134,5.055l3.547,3.584 c1.658,1.676,3.841,2.515,6.026,2.515c2.155,0,4.31-0.816,5.962-2.451c3.329-3.293,3.358-8.661,0.066-11.989L439.425,458.197z"></path> <path d="M366.517,262.83c3.729,2.831,9.049,2.101,11.878-1.629c7.808-10.29,11.766-20.616,11.766-30.694 c0-23.361-16.715-42.366-37.26-42.366c-9.078,0-17.271,4.36-23.026,11.324c-5.755-6.963-13.948-11.324-23.026-11.324 c-20.545,0-37.26,19.005-37.26,42.366c0,13.018,6.488,26.263,19.285,39.368c9.771,10.007,22.962,19.51,37.143,26.76 c1.212,0.619,2.536,0.929,3.859,0.929c1.324,0,2.647-0.31,3.859-0.929c6.677-3.414,13.17-7.346,19.297-11.688 c3.821-2.707,4.724-7.999,2.016-11.819c-2.706-3.819-7.996-4.723-11.818-2.016c-4.211,2.983-8.764,5.836-13.353,8.373 c-21.551-11.919-43.331-31.534-43.331-48.977c0-14.011,9.109-25.41,20.304-25.41c8.022,0,14.548,8.358,14.548,18.632 c0,4.682,3.795,8.478,8.478,8.478s8.478-3.796,8.478-8.478c0-10.274,6.526-18.632,14.548-18.632 c11.195,0,20.304,11.399,20.304,25.41c0,6.292-2.799,13.17-8.317,20.444C362.056,254.682,362.786,259.999,366.517,262.83z"></path> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/reportFriend">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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
                <svg class="w-20 h-20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M37.2847 25.6154L37.1193 25.2621C36.4062 23.7381 36.1988 22.1238 36.1366 20.6919C36.1052 19.9703 36.11 19.257 36.1176 18.6014C36.1187 18.5113 36.1198 18.4225 36.1209 18.335C36.1279 17.7692 36.1342 17.2553 36.123 16.7604C36.0756 14.8106 35.4636 12.9118 34.355 11.2858C33.0921 9.71615 31.4415 8.48173 29.5544 7.70176L29.5216 7.6882L29.4893 7.67348C26.935 6.50995 24.1507 5.908 21.3318 5.91114L21.3296 5.91115C17.7824 5.91115 14.3879 7.29451 11.8909 9.74531C9.39511 12.1949 8 15.5091 8 18.9569C8 21.0012 8.59295 23.3328 9.62467 25.4904C10.6588 27.653 12.0607 29.4888 13.5372 30.6266L14.3164 31.2271V40.1425C14.6413 40.5448 15.2724 41.0416 16.219 41.4724C17.3773 41.9997 18.5419 42.2133 19.2158 42.1583L19.2971 42.1516H19.3786C21.3349 42.1516 22.2503 41.5988 22.6443 41.2626C22.7871 41.1407 22.8864 41.026 22.953 40.9356V35.4002L25.4499 36.0456L25.4511 36.0459L25.4521 36.0462L25.4534 36.0465L25.4656 36.0495C25.4811 36.0533 25.5077 36.0597 25.5448 36.0683C25.619 36.0855 25.7345 36.1111 25.8852 36.1414C26.1875 36.202 26.6274 36.2802 27.1577 36.3457C28.2343 36.4785 29.6077 36.5491 30.9339 36.3545C32.2715 36.1584 33.3862 35.7193 34.1529 34.9857C34.8668 34.3024 35.4954 33.1581 35.4954 31.0618V29.352L37.1767 29.0874L37.1781 29.0872L37.1862 29.0858C37.1922 29.0847 37.2007 29.0832 37.2118 29.0811C37.2228 29.0791 37.2362 29.0765 37.2518 29.0735C37.315 29.061 37.413 29.0403 37.5345 29.0101C37.7834 28.9483 38.1014 28.854 38.4114 28.7232C38.7332 28.5875 38.9648 28.4464 39.1013 28.3262C39.1288 28.3019 39.1481 28.2825 39.1614 28.268C39.1565 28.2144 39.1378 28.1044 39.068 27.9264C38.9588 27.6481 38.7721 27.3265 38.5331 26.9938C38.2994 26.6687 38.0509 26.3816 37.8573 26.1735C37.762 26.071 37.6837 25.9916 37.632 25.9404C37.6189 25.9274 37.6075 25.9163 37.5982 25.9072C37.5892 25.8984 37.582 25.8915 37.5767 25.8865L37.5685 25.8786L37.5674 25.8777L37.2847 25.6154ZM24.953 37.9829C24.953 37.9829 25.7548 38.1901 26.953 38.3355C30.4936 38.7652 37.4954 38.655 37.4954 31.0618C37.4954 31.0618 40.7982 30.5421 41.1327 28.6545C41.4671 26.767 38.9308 24.4144 38.9308 24.4144C38.0683 22.5713 38.0953 20.4009 38.1207 18.3634C38.1277 17.8001 38.1346 17.2469 38.1225 16.7137C38.0654 14.3491 37.3155 12.0508 35.9624 10.0936C34.4807 8.23043 32.5377 6.77069 30.3183 5.85341C27.5022 4.57059 24.4343 3.90769 21.3296 3.91115C17.2639 3.91115 13.3648 5.49632 10.4899 8.31794C7.61508 11.1396 6 14.9665 6 18.9569C6 23.7578 8.74879 29.4615 12.3164 32.2108V40.7048C13.3287 42.828 17.1475 44.3338 19.3786 44.1516C24.1168 44.1516 24.953 41.416 24.953 41.416V37.9829Z" fill="#ffee2e"></path> <path d="M26.7229 20.1457C27.4959 20.1457 27.2508 19.9188 27.8892 19.4947C28.5374 19.918 29.3023 20.1399 30.0828 20.1311L32.5622 19.2531C33.2609 18.6926 33.7405 17.9155 33.9208 17.0521C34.1012 16.1886 33.9713 15.291 33.5529 14.5096C33.1345 13.7281 32.4529 13.1103 31.6224 12.7594C31.4328 11.9234 30.9551 11.1756 30.2686 10.6402L27.8484 9.81597H27.5759C27.0375 9.05158 26.2294 8.50633 25.3049 8.28388L21.116 8C20.2535 8.06974 19.4402 8.41984 18.807 8.99394C18.5078 8.92529 18.2016 8.88971 17.8941 8.88787C17.1498 8.88936 16.4218 9.10047 15.7981 9.49572C15.1743 9.89097 14.6815 10.4535 14.379 11.1153L12.4074 12.4744C11.9169 13.1213 11.6528 13.9044 11.6541 14.7084C11.6492 15.0445 11.6951 15.3796 11.7903 15.7028C11.273 16.3559 10.9949 17.1586 11.0001 17.9832C10.9988 18.9396 11.3743 19.8601 12.0492 20.5554C12.1036 21.2401 12.3495 21.8973 12.7601 22.4558C13.1708 23.0143 13.7306 23.4529 14.379 23.7242C15.1261 24.1799 15.7587 24.7929 16.2302 25.518C16.7018 26.243 16.8964 27.0617 17 27.9138H21.116V23.9363C21.1151 23.2301 21.3176 22.5377 21.7005 21.9378C22.0834 21.3378 22.2979 20.8543 22.9489 20.5421C23.5588 20.315 24.1084 19.9569 24.5566 19.4947C25.195 19.9188 25.95 20.1457 26.7229 20.1457Z" fill="#ffee2e"></path> <path d="M34 23.5C34 24.3284 33.3284 25 32.5 25C31.6716 25 31 24.3284 31 23.5C31 22.6716 31.6716 22 32.5 22C33.3284 22 34 22.6716 34 23.5Z" fill="#ffee2e"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 32H17V30H21V32Z" fill="#ffee2e"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 36H17V34H21V36Z" fill="#ffee2e"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 40H17V38H21V40Z" fill="#ffee2e"></path> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/reportSelf">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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
                <svg class="h-2- w-20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style={{fill:"#E4EAF8"}} d="M432.552,459.035H26.483C11.857,459.035,0,447.178,0,432.552V79.449 c0-14.626,11.857-26.483,26.483-26.483h406.069c14.626,0,26.483,11.857,26.483,26.483v353.103 C459.034,447.178,447.178,459.035,432.552,459.035z"></path> <g> <path style={{fill:"#FF5050"}} d="M105.931,114.759c4.879,0,8.828-3.948,8.828-8.828c0-4.879-3.948-8.828-8.828-8.828H52.966 c-4.879,0-8.828,3.948-8.828,8.828v88.276c0,4.879,3.948,8.828,8.828,8.828h52.966c4.879,0,8.828-3.948,8.828-8.828 c0-4.879-3.948-8.828-8.828-8.828H61.793v-26.483h35.31c4.879,0,8.828-3.948,8.828-8.828c0-4.879-3.948-8.828-8.828-8.828h-35.31 v-26.483H105.931z"></path> <path style={{fill:"#FF5050"}} d="M208.552,99.035c-3.81-3.043-9.362-2.406-12.414,1.379l-28.414,35.518l-28.414-35.518 c-3.043-3.801-8.595-4.431-12.414-1.379c-3.801,3.052-4.423,8.604-1.379,12.414l30.897,38.621l-30.897,38.621 c-3.043,3.81-2.422,9.362,1.379,12.414c1.63,1.302,3.577,1.931,5.508,1.931c2.595,0,5.155-1.138,6.905-3.31l28.414-35.517 l28.414,35.517c1.75,2.182,4.31,3.31,6.905,3.31c1.931,0,3.88-0.629,5.508-1.931c3.801-3.052,4.423-8.604,1.379-12.414 l-30.897-38.621l30.897-38.621C212.974,107.638,212.353,102.087,208.552,99.035z"></path> <path style={{fill:"#FF5050"}} d="M271.629,97.104h-13.603c-10.474,0-19.577,7.457-21.638,17.741l-15.525,77.63 c-0.957,4.785,2.146,9.431,6.922,10.388c4.767,0.957,9.431-2.138,10.388-6.922l3.878-19.388h45.555l3.878,19.388 c0.836,4.199,4.526,7.095,8.647,7.095c0.569,0,1.155-0.052,1.741-0.172c4.776-0.957,7.88-5.603,6.922-10.388l-15.526-77.63 C291.207,104.561,282.103,97.104,271.629,97.104z M245.581,158.897l8.117-40.586c0.414-2.06,2.232-3.552,4.328-3.552h13.603 c2.094,0,3.914,1.492,4.328,3.552l8.117,40.586H245.581z"></path> <path style={{fill:"#FF5050"}} d="M408.561,97.466c-3.785-1.138-7.801,0.396-9.913,3.69l-32.302,50.241l-32.301-50.241 c-2.121-3.285-6.138-4.828-9.913-3.69c-3.758,1.103-6.336,4.552-6.336,8.466v88.276c0,4.879,3.948,8.828,8.828,8.828 s8.828-3.948,8.828-8.828v-58.216l23.474,36.509c3.242,5.052,11.604,5.052,14.845,0l23.474-36.509v58.216 c0,4.879,3.948,8.828,8.828,8.828c4.879,0,8.828-3.948,8.828-8.828v-88.276C414.897,102.018,412.319,98.569,408.561,97.466z"></path> <circle style={{fill:"#FF5050"}} cx="70.621" cy="256" r="17.655"></circle> <circle style={{fill:"#FF5050"}} cx="70.621" cy="326.621" r="17.655"></circle> <circle style={{fill:"#FF5050"}} cx="70.621" cy="397.242" r="17.655"></circle> </g> <path style={{fill:"#707487"}} d="M264.828,264.828H123.586c-4.879,0-8.828-3.948-8.828-8.828c0-4.879,3.948-8.828,8.828-8.828h141.241 c4.879,0,8.828,3.948,8.828,8.828C273.655,260.88,269.707,264.828,264.828,264.828z"></path> <path style={{fill:"#7F8499"}} d="M158.897,335.449h-35.31c-4.879,0-8.828-3.948-8.828-8.828c0-4.879,3.948-8.828,8.828-8.828h35.31 c4.879,0,8.828,3.948,8.828,8.828C167.724,331.501,163.776,335.449,158.897,335.449z"></path> <path style={{fill:"#707487"}} d="M211.862,406.069h-88.276c-4.879,0-8.828-3.948-8.828-8.828c0-4.879,3.948-8.828,8.828-8.828h88.276 c4.879,0,8.828,3.948,8.828,8.828C220.69,402.121,216.742,406.069,211.862,406.069z"></path> <path style={{fill:"#7F8499"}} d="M388.414,335.449H194.207c-4.879,0-8.828-3.948-8.828-8.828c0-4.879,3.948-8.828,8.828-8.828h194.207 c4.879,0,8.828,3.948,8.828,8.828C397.241,331.501,393.293,335.449,388.414,335.449z"></path> <path style={{fill:"#D5DCED"}} d="M459.034,141.242L261.043,339.232l-22.635,48.505c-2.805,6.012,3.43,12.247,9.441,9.441 l48.504-22.636l162.681-162.68V141.242z"></path> <polygon style={{fill:"#707487"}} points="353.103,317.794 282.483,317.794 264.828,335.449 335.448,335.449 "></polygon> <path style={{fill:"#FFDC64"}} d="M229.565,388.981l42.868-20.004c3.73-1.74,7.126-4.119,10.036-7.029l226.946-226.946 c3.447-3.447,3.447-9.037,0-12.484l-22.827-22.828c-3.447-3.447-9.037-3.447-12.484,0L247.157,326.635 c-2.91,2.91-5.289,6.306-7.029,10.036l-20.004,42.868C217.318,385.552,223.552,391.786,229.565,388.981z"></path> <path style={{fill:"#FFC850"}} d="M221.538,387.566c1.96,1.96,5.021,2.817,8.026,1.415l42.868-20.004 c3.73-1.741,7.126-4.119,10.036-7.03l206.707-206.707l-17.655-17.655L221.538,387.566z"></path> <path style={{fill:"#FAEBC8"}} d="M291.31,353.104L256,317.794l-8.843,8.843c-2.91,2.91-5.289,6.306-7.029,10.036l-20.004,42.867 c-2.805,6.012,3.43,12.246,9.441,9.441l42.867-20.004c3.73-1.74,7.126-4.119,10.036-7.03L291.31,353.104z"></path> <path style={{fill:"#F5DCB4"}} d="M273.655,335.449l-52.117,52.117c1.96,1.96,5.021,2.817,8.026,1.415l42.868-20.004 c3.73-1.74,7.126-4.119,10.036-7.03l8.842-8.842L273.655,335.449z"></path> <path style={{fill:"#FAEBC8"}} d="M486.589,99.689c-3.448-3.448-9.036-3.448-12.484,0l-20.241,20.241l35.31,35.31L509.415,135 c3.448-3.448,3.448-9.037,0-12.484L486.589,99.689z"></path> <path style={{fill:"#F5DCB4"}} d="M509.415,122.515l-11.413-11.413l-26.483,26.483l17.655,17.655L509.415,135 C512.862,131.552,512.862,125.962,509.415,122.515z"></path> </g></svg>
                </div>
                <div className="mb-4 flex justify-center">
                  <Link to="/contributePYQ">
                    <button
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
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