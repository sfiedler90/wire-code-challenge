import "./Navbar.css";
import { NavLink } from "react-router-dom";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Search Package</NavLink>
        </li>
        <li>
          <NavLink to="/create">Creating Packages</NavLink>
        </li>
        <li>
          <NavLink to="/api">Api</NavLink>
        </li>
      </ul>
    </nav>
  );
};
