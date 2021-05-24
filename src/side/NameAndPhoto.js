import React from "react";
import Handsite from './../image/hand.jpg'

function NameAndPhoto() {
  return (
    <>
      <section className="side">
        <h3 className="photoName">
          <p>Jimmy Hung</p>
        </h3>
        <div className="photoSticker">
          <img src={Handsite} alt="me" />
        </div>
        <div className="intro">
          <p>
          大學四年沒有朋友可憐邊緣人，喜歡打生存遊戲、自由潛水、破爛公園跟安靜的地方。<br />這邊放一些我平常不敢發在社群軟體上的廢文哈哈。
          </p>
        </div>
      </section>
    </>
  );
}

export default NameAndPhoto;
