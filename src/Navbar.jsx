import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/chips">
        Chippies
      </NavLink>
      <NavLink exact to="/worms">
        Gummies
      </NavLink>
      <NavLink exact to="/fourloko">
        Want to get crazy?
      </NavLink>
    </nav>
  );
};

export default Navbar;
