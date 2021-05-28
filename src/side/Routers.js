import React from "react";
import { Link } from "react-router-dom";

function Routers({show,setshow}) {
  const showlist=show ? 'liAmin':''
  const changeShow=()=>setshow(!show)
  return (
    <nav>
      <ul className="list">
        <li className={showlist} onClick={changeShow}>
          <Link to="/HomePage">主頁</Link>
        </li>
        <li className={showlist} onClick={changeShow}>
          <Link to="/AboutMe">關於我</Link>
        </li>
        <li className={showlist} onClick={changeShow}>
          <Link to="/Allcontent">所有文章</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Routers;
