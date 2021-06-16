import React from "react";
import myRoom from "./../image/my-room.jpg";

import { Link } from "react-router-dom";

function AllContent() {
  return (
      <section className="content-wapper">
        <figure>
          <img className="photo" src={myRoom} alt="我的房間"/>
          <figcaption>我的房間</figcaption>
        </figure>
        <h1 className="title">所有文章</h1>
        <span className="post-date">May 2021</span>
        <nav className="all-content-nav">
          <ul className="All-Content-list">
            <li>
              <Link to="/NoFriend">為什麼我大學沒朋友??</Link>
            </li>
            <li>
              <Link to="/Covid19AtHome">我還以為我可以忍受的了一直待在家...三級防疫期間</Link>
            </li>
            <li>
            <Link to="/Birthday22">22的生日，學生時代的結束</Link>
            </li>
            <li>
            <Link to="/Metronome">節拍器</Link>
            </li>
            <li>
            <Link to="/WorkEx">工作經驗 || 大綜電腦</Link>
            </li>
            <li>
            <Link to="/WorkExInCainaDragon">工作經驗 || 中國龍 || 學校網站</Link>
            </li>
          </ul>
        </nav>
      </section>
  );
}

export default AllContent;
