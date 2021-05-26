import React from "react";
import myRoom from "./../image/my-room.jpg";

import { Link } from "react-router-dom";

function AllContent() {
  return (
    <>
      <section className="content-wapper">
        <figure>
          <img className="photo" src={myRoom} alt="我的房間" />
          <figcaption>我的房間</figcaption>
        </figure>
        <h1 className="title">所有文章</h1>
        <nav>
          <ul>
            <li>
              <Link to="/NoFriend">為什麼我大學沒朋友??</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default AllContent;
