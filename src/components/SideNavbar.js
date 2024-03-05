// SideNavbar.js
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaFileAlt, FaList, FaUsers } from "react-icons/fa";

function SideNavbar() {
  const location = useLocation();

  return (
    <nav className="w-72 min-w-72 h-full overflow-y-auto">
      <ul className="text-white">
        <li>
          <NavLink
            to="/"
            className={`flex items-center border py-2 px-4 hover:bg-gray-700 ${
              location.pathname === "/"
                ? "bg-gray-700 text-white"
                : "text-black"
            }`}
          >
            <FaHome className="mr-2" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pages"
            className={`flex items-center border py-2 px-4 hover:bg-gray-700 ${
              location.pathname === "/pages"
                ? "bg-gray-700 text-white"
                : "text-black"
            }`}
          >
            <FaFileAlt className="mr-2" />
            Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={`flex items-center border py-2 px-4 hover:bg-gray-700 ${
              location.pathname === "/categories"
                ? "bg-gray-700 text-white"
                : "text-black"
            }`}
          >
            <FaList className="mr-2" />
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={`flex items-center border py-2 px-4 hover:bg-gray-700 ${
              location.pathname === "/users"
                ? "bg-gray-700 text-white"
                : "text-black"
            }`}
          >
            <FaUsers className="mr-2" />
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavbar;
