import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import { HiOutlineViewGridAdd } from "react-icons/hi";

const SellerRoutes = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <li>
        <Link
          to={"/dashboard/seller/statistics"}
          className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6 
          ${
            location.pathname === "/dashboard/seller/statistics" &&
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
          to={"/dashboard/seller/add-product"}
          className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6 
          ${
            location.pathname === "/dashboard/seller/add-product" &&
            "bg-teal-800 dark:bg-gray-600  !border-teal-300 border-l-4 dark:border-gray-800"
          }
          `}
        >
          <span className="inline-flex justify-center items-center ml-4">
            <HiOutlineViewGridAdd />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Add Product</span>
        </Link>
      </li>
      <li>
        <Link
          to={"/dashboard/seller/my-product"}
          className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6 
          ${
            location.pathname === "/dashboard/seller/my-product" &&
            "bg-teal-800 dark:bg-gray-600  !border-teal-300 border-l-4 dark:border-gray-800"
          }
          `}
        >
          <span className="inline-flex justify-center items-center ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M23.636,10.281l-1.197-2.236c-.439-.821-1.4-1.209-2.291-.92l-8.147,2.657L3.853,7.125c-.893-.29-1.852,.099-2.291,.92L.376,10.26c-.412,.685-.49,1.508-.213,2.258,.276,.75,.871,1.325,1.629,1.578l.21,.07-.006,3.621c0,1.941,1.235,3.658,3.077,4.272l4.862,1.621c.663,.221,1.359,.331,2.056,.331s1.393-.11,2.056-.331l4.866-1.622c1.843-.614,3.082-2.329,3.083-4.267v-3.625l.212-.071c.758-.253,1.353-.828,1.629-1.578,.277-.75,.199-1.573-.201-2.236ZM1.101,12.172c-.171-.464-.123-.973,.145-1.418l1.197-2.236c.164-.307,.48-.487,.813-.487,.095,0,.191,.015,.286,.046l7.719,2.517-1.972,3.635c-.387,.645-1.156,.931-1.867,.69l-5.313-1.771c-.469-.156-.836-.512-1.008-.975Zm10.384,10.816c-.419-.038-.833-.124-1.233-.258l-4.862-1.621c-1.433-.478-2.395-1.812-2.394-3.322l.005-3.288,4.104,1.368c.274,.091,.553,.135,.827,.135,.89,0,1.735-.463,2.225-1.279l1.334-2.457-.006,10.722Zm9.511-5.197c0,1.507-.965,2.84-2.399,3.317l-4.866,1.622c-.404,.135-.823,.221-1.246,.259l.006-10.758,1.362,2.51c.48,.802,1.323,1.261,2.212,1.261,.275,0,.555-.044,.829-.135l4.102-1.367v3.291Zm1.903-5.619c-.172,.463-.539,.818-1.008,.975l-5.313,1.771c-.715,.239-1.481-.047-1.856-.672l-1.982-3.653,7.719-2.517c.428-.141,.889,.048,1.1,.441l1.209,2.258c.256,.424,.304,.933,.133,1.396ZM4.759,5.851c-.193-.196-.191-.514,.006-.707L9.547,.437c.58-.582,1.532-.583,2.118,.003l1.885,1.885c.568-.508,1.515-.493,2.063,.055l2.754,2.753c.195,.195,.195,.512,0,.707-.195,.195-.512,.195-.707,0l-2.754-2.753c-.195-.195-.512-.195-.707,0l-4.349,4.27c-.098,.096-.225,.144-.351,.144-.13,0-.259-.05-.356-.149-.193-.197-.19-.514,.006-.707l3.686-3.619-1.878-1.878c-.195-.195-.512-.195-.707,0L5.466,5.856c-.098,.096-.224,.144-.351,.144-.129,0-.259-.05-.356-.149Z" />
            </svg>
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">My Products</span>
        </Link>
      </li>
      <li>
        <Link
          to={"/dashboard/seller/chat"}
          className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-teal-300 dark:hover:border-gray-800 pr-6 
          ${
            location.pathname === "/dashboard/seller/chat" &&
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

export default SellerRoutes;
