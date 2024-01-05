import { Outlet } from "react-router-dom";
import productsImg from "/images/icons/growth.png";
const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
          {/* Header */}
          <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
            <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-teal-600 dark:bg-gray-800 border-none">
              <img
                className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
                src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
              />
              {/* 
              
              USER ROLE ADMIN/ USERS/ SELLER
              
              */}
              <span className="hidden md:block">ADMIN</span>
            </div>
            <div className="flex justify-end  sticky w-full bg-teal-600 top-0 items-center h-14 dark:bg-gray-800 header-right">
              <button className="flex items-center mr-4 text-gray-200">
                <span className="inline-flex mr-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
                Logout
              </button>
            </div>
          </div>
          {/* ./Header */}
          {/* Sidebar */}
          <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-teal-600 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                      Main
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      {/* <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg> */}

                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="manage-profile"
                      >
                        <path
                          d="M14 2c-3.302 0-6 2.698-6 6s2.698 6 6 6 6-2.698 6-6-2.698-6-6-6zm0 2c2.221 0 4 1.78 4 4 0 2.221-1.779 4-4 4s-4-1.779-4-4c0-2.22 1.779-4 4-4zm-3 12c-4.969 0-9 4.031-9 9v2a1 1 0 0 0 1 1h10.848a1 1 0 1 0 0-2H4v-1c0-3.895 3.105-7 7-7h4.016a1 1 0 1 0 0-2zm11.987 0a1.001 1.001 0 0 0-.99 1.014V18.1a4.977 4.977 0 0 0-1.754.737l-.768-.768c-.236-.242-.503-.334-.756-.32-.757.04-1.385 1.027-.658 1.734l.771.772a4.975 4.975 0 0 0-.732 1.753h-1.086c-1.352-.019-1.352 2.02 0 2h1.09c.13.631.385 1.218.73 1.739l-.777.777c-.97.943.472 2.384 1.414 1.414l.776-.775a4.977 4.977 0 0 0 1.75.734v1.088c-.02 1.352 2.019 1.352 2 0V27.9a4.974 4.974 0 0 0 1.748-.732l.78.78a1 1 0 1 0 1.414-1.413l-.777-.778a4.976 4.976 0 0 0 .734-1.747h1.09a.999.999 0 1 0 0-2H27.9a4.976 4.976 0 0 0-.736-1.764l.771-.771a.996.996 0 0 0 0-1.432 1.004 1.004 0 0 0-.71-.285 1 1 0 0 0-.7.303l-.773.773A4.974 4.974 0 0 0 24 18.1v-1.086A.998.998 0 0 0 22.99 16zM23 20c1.668 0 3 1.331 3 3 0 1.668-1.332 3-3 3-1.669 0-3-1.332-3-3 0-1.669 1.331-3 3-3z"
                          color="#fff"
                          fontFamily="sans-serif"
                          fontWeight={400}
                          overflow="visible"
                          style={{
                            lineHeight: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantPosition: "normal",
                            fontVariantCaps: "normal",
                            fontVariantNumeric: "normal",
                            fontVariantAlternates: "normal",
                            fontFeatureSettings: "normal",
                            textIndent: 0,
                            textAlign: "start",
                            textDecorationLine: "none",
                            textDecorationStyle: "solid",
                            textDecorationColor: "#000",
                            textTransform: "none",
                            textOrientation: "mixed",
                            shapePadding: 0,
                            isolation: "auto",
                            mixBlendMode: "normal",
                          }}
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Users Management</span>
                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">
                      New
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <img className="w-5 h-5" src={productsImg} alt="" />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Products Management</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                      1.2k
                    </span>
                  </a>
                </li>
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center mt-5 h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                      Settings
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                  </a>
                </li>
              </ul>
              <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
            </div>
          </div>
          {/* ./Sidebar */}
          {/* 

outlet

*/}
          <div className="h-full ml-16 mt-14 mb-10 md:ml-[260px]">
            <Outlet />
          </div>
          {/* ./External resources */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
