import "./Navbar.css";
import { Link } from "react-router-dom";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="active">
          <Link to="/">Search Package</Link>
        </li>
        <li>
          <Link to="/create">Creating Packages</Link>
        </li>
        <li>
          <Link to="/api">Api</Link>
        </li>
      </ul>
    </nav>
  );
};
