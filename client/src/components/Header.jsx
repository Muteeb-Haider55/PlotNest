import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-emerald-200 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-emerald-500">Plot</span>
            <span className="text-emerald-700">Nest</span>
          </h1>
        </Link>
        <form className="bg-emerald-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search.."
            className=" bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-emerald-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-emerald-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-emerald-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt=""
                className="rounded-full h-7 w-7 object-cover"
              />
            ) : (
              <li className=" text-emerald-700 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
      {/* emerald-600 */}
    </header>
  );
};

export default Header;
