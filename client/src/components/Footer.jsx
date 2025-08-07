import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-700 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <h1 className="font-bold text-2xl">
                <span className="text-emerald-300">Plot</span>
                <span className="text-white">Nest</span>
              </h1>
            </Link>
            <p className="text-emerald-100 text-sm">
              Your premier destination for property listings and real estate
              solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-emerald-100 hover:text-white transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-emerald-100 hover:text-white transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-emerald-100 hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-emerald-100 hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-emerald-100 hover:text-white transition"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-emerald-100 hover:text-white transition text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-emerald-100 hover:text-white transition text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-emerald-100 text-sm space-y-2">
              <p>Plot nest </p>
              <p>Real Estate City, RE 12345</p>
              <p>Email: info@plotnest.com</p>
              <p>Phone: +923235849545</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-emerald-100 text-sm mb-4">
              Subscribe to our newsletter for the latest property updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-sm text-gray-800 rounded-l focus:outline-none w-full"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-r text-sm font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-emerald-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emerald-100 text-sm">
            &copy; {currentYear} PlotNest. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-emerald-100 hover:text-white text-sm transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-emerald-100 hover:text-white text-sm transition"
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="text-emerald-100 hover:text-white text-sm transition"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
