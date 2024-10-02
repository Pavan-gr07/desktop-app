import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-link">
          <h2 className="logo">My App</h2>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/zonelayout" className="nav-link">
          Zone Layout
        </Link>
        <Link to="/monitoring" className="nav-link">
          Monitoring
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
