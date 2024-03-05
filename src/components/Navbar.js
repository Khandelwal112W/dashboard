import React from "react";
import { Navbar as FlowbiteNavbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <FlowbiteNavbar fluid className="bg-gray-800">
      <FlowbiteNavbar.Brand as={Link} to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          DCX CMX
        </span>
      </FlowbiteNavbar.Brand>
      <FlowbiteNavbar.Toggle />
      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link as={NavLink} to="/" className="text-white text-lg">
          Dashboard
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link
          as={NavLink}
          to="/pages"
          className="text-white text-lg"
        >
          Pages
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link
          as={NavLink}
          to="/categories"
          className="text-white text-lg"
        >
          Categories
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link
          as={NavLink}
          to="/users"
          className="text-white text-lg"
        >
          Users
        </FlowbiteNavbar.Link>
        {/* Search bar */}
        <form className="ml-auto flex items-center">
          <input
            type="text"
            className="rounded bg-gray-100 border border-gray-300 py-1 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 text-white py-1 px-3 rounded"
          >
            Search
          </button>
        </form>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
}

export default Navbar;
