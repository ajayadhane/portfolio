import React from "react";
import logo from "../assets/images/portfolio_logo.gif";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="container-fluid" id="Navbar">
      <div className="row">
        <div className="col-12">
          <nav>
            <div className="forLogo">
              <img src={logo} alt="Logo.." className="img-fluid forLogoStyle" />
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Experience</Link>
              </li>
              <li>
                <Link to="/">Skills</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
