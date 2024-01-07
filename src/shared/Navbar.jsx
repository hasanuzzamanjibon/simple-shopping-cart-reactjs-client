import { useContext } from "react";
import NavItems from "../componenets/NavItems/NavItems";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, handleSignOut } = useContext(AuthContext);



  return (
    <div className="navbar bg-white shadow-xl border-b-4 border-teal-500 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
          >
            <NavItems />
          </ul>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <img className="h-8 lg:h-12" src="https://i.postimg.cc/qBbmzz0G/logo.png" alt="logo" />
          <p className="text-xl  lg:text-3xl  font-semibold bg-gradient-to-r from-teal-500 to-sky-500 text-transparent bg-clip-text">
            Fast Cart
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavItems />
        </ul>
      </div>
      <div className="navbar-end gap-3 ">
        <div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
        </div>
        {user ? (
          <div className="dropdown dropdown-end !focus:outline-0">
            <div tabIndex={0} role="button" className="btn  btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="avatar"
                  src={user.photoURL || "https://i.postimg.cc/9fKFxVjj/avatar.png"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded w-52"
            >
              <li>
                <a className="justify-between">
                  {user.displayName}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to={"/dashboard/seller/statistics"}>Dashboard</Link>
              </li>
              <li onClick={handleSignOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/log-in"} className="btn btn-sm btn-accent text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
