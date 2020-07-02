import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h3>Unit Conversion Application</h3>
      <ul className="nav-links">
        <Link className="link" to="/length">
          <li>Length</li>
        </Link>
        <Link className="link" to="/weight">
          <li>Weight</li>
        </Link>
        <Link className="link" to="/temperature">
          <li>Temperature</li>
        </Link>

        <Link className="link" to="/time">
          <li>Time</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
