import React from "react";
import river from "./../image/riverguys.jpg";
function Aboutme() {
  return (
    <section className="content-wapper">
      <figure>
        <img className="photo" src={river} alt="我與朋友溯溪" />
        <figcaption>我與朋友溯溪</figcaption>
        </figure>
      <h1 className="title">關於我</h1>
      <span className="post-date">21 May 2021</span>
      <article className="content">
        大學四年沒有朋友可憐邊緣人，喜歡打生存遊戲、自由潛水、破爛公園跟安靜的地方。
        <br />
        這邊放一些我平常不敢發在社群軟體上的廢文哈哈。
      </article>
    </section>
  );
}

export default Aboutme;
