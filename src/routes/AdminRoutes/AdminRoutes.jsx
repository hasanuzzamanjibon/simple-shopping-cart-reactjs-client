import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";

const AdminRoutes = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <li>
        <Link
          to={"/dashboard/admin/statistics"}
          className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6 
          ${
            location.pathname === "/dashboard/admin/statistics" &&
            "bg-teal-800 dark:bg-gray-600  !border-teal-300 border-l-4 dark:border-gray-800"
          }
          `}
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
          <span className="ml-2 text-sm tracking-wide truncate">Statistics</span>
        </Link>
      </li>
      <li>
        <Link
          to={"/dashboard/admin/user-management"}
          className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6 
          ${
            location.pathname === "/dashboard/admin/user-management" &&
            "bg-teal-800 dark:bg-gray-600  !border-teal-300 border-l-4 dark:border-gray-800"
          }
          `}
        >
          <span className="inline-flex justify-center items-center ml-4">
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
        </Link>
      </li>
      <li>
        <Link
          to={"/dashboard/admin/products-management"}
          className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6 
          ${
            location.pathname === "/dashboard/admin/products-management" &&
            "bg-teal-800 dark:bg-gray-600  !border-teal-300 border-l-4 dark:border-gray-800"
          }
          `}
        >
          <span className="inline-flex justify-center items-center ml-4">
            <svg
              fill="#ffffff"
              height="64px"
              width="64px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 372.37 372.37"
              xmlSpace="preserve"
              stroke="#ffffff"
              transform="rotate(0)"
              className="w-5 h-5"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="17.873856"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M368.712,219.925c-5.042-8.951-14.563-14.511-24.848-14.511c-4.858,0-9.682,1.27-13.948,3.672l-83.024,46.756 c-1.084,0.61-1.866,1.642-2.163,2.85c-1.448,5.911-4.857,14.164-12.865,19.911c-8.864,6.361-20.855,7.686-35.466,3.939 c-0.088-0.022-0.175-0.047-0.252-0.071L148.252,267.6c-2.896-0.899-4.52-3.987-3.621-6.882c0.72-2.316,2.83-3.872,5.251-3.872 c0.55,0,1.101,0.084,1.634,0.249l47.645,14.794c0.076,0.023,0.154,0.045,0.232,0.065c11.236,2.836,20.011,2.047,26.056-2.288 c7.637-5.48,8.982-15.113,9.141-16.528c0.006-0.045,0.011-0.09,0.014-0.136c0.003-0.023,0.004-0.036,0.005-0.039 c0.001-0.015,0.002-0.03,0.003-0.044c0.001-0.01,0.001-0.019,0.002-0.029c0.909-11.878-6.756-22.846-18.24-26.089l-0.211-0.064 c-0.35-0.114-35.596-11.626-58.053-18.034c-2.495-0.711-9.37-2.366-19.313-2.366c-13.906,0-34.651,3.295-54.549,19.025 L1.67,292.159c-1.889,1.527-2.224,4.278-0.758,6.215l44.712,59.06c0.725,0.956,1.801,1.584,2.99,1.744 c0.199,0.027,0.398,0.04,0.598,0.04c0.987,0,1.954-0.325,2.745-0.935l57.592-44.345c1.294-0.995,3.029-1.37,4.619-0.995 l93.02,21.982c6.898,1.63,14.353,0.578,20.523-2.9l130.16-73.304C371.555,251.012,376.418,233.61,368.712,219.925z" />{" "}
                  <path d="M316.981,13.155h-170c-5.522,0-10,4.477-10,10v45.504c0,5.523,4.478,10,10,10h3.735v96.623c0,5.523,4.477,10,10,10h142.526 c5.523,0,10-4.477,10-10V78.658h3.738c5.522,0,10-4.477,10-10V23.155C326.981,17.632,322.503,13.155,316.981,13.155z M253.016,102.417h-42.072c-4.411,0-8-3.589-8-8c0-4.411,3.589-8,8-8h42.072c4.411,0,8,3.589,8,8 C261.016,98.828,257.427,102.417,253.016,102.417z M306.981,58.658h-3.738H160.716h-3.735V33.155h150V58.658z" />{" "}
                </g>{" "}
              </g>
            </svg>
            {/* <img className="w-5 h-5" src={productsImg} alt="" /> */}
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Products Management</span>
        </Link>
      </li>
      <li>
        <Link
          to={"/dashboard/admin/chat"}
          className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6 
          ${
            location.pathname === "/dashboard/admin/chat" &&
            "bg-teal-800 dark:bg-gray-600  !border-teal-300 border-l-4 dark:border-gray-800"
          }
          `}
        >
          <span className="inline-flex justify-center items-center ml-4">
            <IoChatboxOutline />
            {/* <img className="w-5 h-5" src={productsImg} alt="" /> */}
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Chat</span>
        </Link>
      </li>
    </React.Fragment>
  );
};

export default AdminRoutes;
