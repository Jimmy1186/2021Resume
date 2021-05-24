import React from "react";
import { Link } from "react-router-dom";

function Routers() {
  return (
    <nav>
      <ul className="list">
        <li>
          <Link to="/HomePage">主頁</Link>
        </li>
        <li>
          <Link to="/AboutMe">關於我</Link>
        </li>
        <li>
          <Link to="/Allcontent">所有文章</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Routers;
