import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFormUrl = urlParams.get("searchTerm");
    if (searchTermFormUrl) {
      setSearchTerm(searchTermFormUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-emerald-700 shadow-md fixed top-0 left-0 right-0 z-50 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-emerald-300">Plot</span>
            <span className="text-white">Nest</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-emerald-600 p-3 rounded-lg flex items-center"
        >
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-white placeholder-emerald-200"
          />
          <button>
            <FaSearch className="text-emerald-200 hover:text-white transition" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-emerald-100 hover:text-white transition">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-emerald-100 hover:text-white transition">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt=""
                className="rounded-full h-7 w-7 object-cover border-2 border-emerald-300"
              />
            ) : (
              <li className="text-emerald-100 hover:text-white transition">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
