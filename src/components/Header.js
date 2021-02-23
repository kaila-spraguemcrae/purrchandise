import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <>
    <div className="custom-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
        <p className="navbar-brand title-nav"> Help Queue</p>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
}

export default Header;