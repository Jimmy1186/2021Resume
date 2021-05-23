import React from "react";
import { Link } from "react-router-dom";

function Routers() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/HomePage">Home</Link>
        </li>
        <li>
          <Link to="/Upstream">Upstream</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Routers;
