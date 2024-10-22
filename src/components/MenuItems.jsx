import React from "react";
import { NavLink } from "react-router-dom";

const MenuItems = ({ to, children }) => {
  return (
    <li>
      <NavLink className="nav-item" to={to}>
        {children}
      </NavLink>
    </li>
  );
};

export default MenuItems;
