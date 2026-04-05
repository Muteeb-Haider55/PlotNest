import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-emerald-600/40 bg-emerald-800/90 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap tracking-wide">
            <span className="text-emerald-300">Plot</span>
            <span className="text-white">Nest</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-emerald-700/85 border border-emerald-500/50 px-3 py-2.5 rounded-xl flex items-center shadow-inner"
        >
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-white placeholder-emerald-200 text-sm sm:text-base"
          />
          <button>
            <FaSearch className="text-emerald-200 hover:text-white transition" />
          </button>
        </form>
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li className="hidden sm:inline text-emerald-100 hover:text-white transition font-medium">
              Home
            </li>
          </Link>
          <Link to="/all-listings">
            <li className="hidden sm:inline text-emerald-100 hover:text-white transition font-medium">
              All Listings
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-emerald-100 hover:text-white transition font-medium">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt=""
                className="rounded-full h-8 w-8 object-cover border-2 border-emerald-300 shadow-sm"
              />
            ) : (
              <li className="text-emerald-100 hover:text-white transition font-medium">
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
