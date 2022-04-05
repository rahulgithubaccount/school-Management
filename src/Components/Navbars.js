import React from "react";

import {  Link,  Outlet } from "react-router-dom";
function Navbars() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            SCHOOL MANAGEMENT SYSTEM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
            <li className="nav-item navbar-nav">
              <Link
                className="nav-link border border-2 rounded px-3"
                to="/login"
              >
                Admin
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
export default Navbars;
