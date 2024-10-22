import React, { useState } from "react";
import "../Portfolio.css";
import profile_logo from "../assets/images/profile_logo.jpg";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (e) => {
    if (e.target.tagName === "A") {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav onClick={closeMenu}>
        <div className="logo">
          <Link to="/">
            <img className="image" src={profile_logo} alt="Profile Logo" />
          </Link>
        </div>
        <ul id="menuList" className={menuOpen ? "open" : ""}>
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/about">About</MenuItems>
          <MenuItems to="/skills">Skills</MenuItems>
          <MenuItems to="/projects">Projects</MenuItems>
          <MenuItems to="/contact">Contact</MenuItems>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
