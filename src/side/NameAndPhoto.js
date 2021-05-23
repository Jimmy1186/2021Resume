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
            年源續……術作關子面物只功……司機時車地排會地；考點的爭用：只人詩自能樹對百體親了臉認國造、不是格演快、音海破海過看他一向意超家我得來生上片一理。廣得必是車神識力生已早告點要地才吃同研是過果提了長個呢心日程遊的唱是數皮；的女整全象向會間如有少。
          </p>
        </div>
      </section>
    </>
  );
}

export default NameAndPhoto;
