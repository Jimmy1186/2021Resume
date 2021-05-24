import React from "react";
import myRoom from "./../image/my-room.jpg";

function AllContent() {
  return (
    <>
      <picture>
        <img className="photo" src={myRoom} alt="我的房間" />
        <p>我的房間</p>
      </picture>
      <h1 className="title">所有文章</h1>
      <article className="content">
        大學四年沒有朋友可憐邊緣人，喜歡打生存遊戲、自由潛水、破爛公園跟安靜的地方。
        <br />
        這邊放一些我平常不敢發在社群軟體上的廢文哈哈。
      </article>
    </>
  );
}

export default AllContent;
