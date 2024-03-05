// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Pages from "./components/Pages";
import Categories from "./components/Categories";
import Users from "./components/Users";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div
        className="flex px-10 mt-10
       gap-10"
      >
        <SideNavbar />
        <div className="flex-1">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
