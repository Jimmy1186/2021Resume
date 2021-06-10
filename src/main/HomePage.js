import React from "react";
import team from "./../image/gunguys.jpg";

function HomePage() {
  return (
      <section className="content-wapper">
        <figure>
          <img className="photo" src={team} alt="槍隊合照" />
          <figcaption>槍隊合照(我在最左邊~~)</figcaption>
        </figure>
        <h1 className="title">關於我</h1>
        <span className="post-date">21 May 2021</span>
        <article className="content">
          這個網站目前會持續更新，我會把以前做過的東西放到這裡(學校專題或突然想做的project)，按"所有文章"就看到了，不過需要一點時間，因為之前都用Vanilla JS，放到React就要改寫一下，不然現在也不知道能幹嘛，還要等當兵又卡個疫情，好無聊都不能出門。 :\
        </article>
      </section>
  );
}

export default HomePage;
