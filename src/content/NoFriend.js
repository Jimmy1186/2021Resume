import React from "react";
import withTeacher from "./../image/I-and-my-teacher.jpg";

function NoFriend() {
  return (
      <section className="content-wapper">
        <figure>
          <img className="photo" src={withTeacher} alt="教授與我的合照" />
          <figcaption>教授與我的合照</figcaption>
        </figure>
        <h1 className="title">為什麼我大學沒朋友??</h1>
        <span className="post-date">21 May 2021</span>
        <article className="content">
          我大致分三個原因，其實這跟個性也有大的關係。<br></br>
          <ol>
            <li>
              <strong>幾乎沒有人對於寫程式有興趣或著相關經驗：</strong>
              <br></br>
              雖然我不是強求所有讀資管的人都要會寫程式或著有興趣，但是我們班上只有一個人會寫程式，而剛好那個人又太過於文靜讓人感的害怕，雖然嘗試跟他聊天當朋友但是還是失敗告終
            </li>
            <li>
              <strong>跟我的興趣差太多：</strong>
              <br></br>
              我們班大概分三個族群，電玩派、夜衝夜唱派、邊緣人(就是我)，其實我對於戶外運動比較有興趣(爬山潛水拉)，所以我大學交的朋友都是校外人士
            </li>
            <li>
              <strong>工作</strong>：<br></br>
              大學大部分時間因為課餘時間多，我就去工作，跟學校人的接觸也少
            </li>
          </ol>
          至少我跟學校的教授和賣飯的阿姨們都還不錯，在課業和吃飯都方便很多
          ¯\_(ツ)_/¯
        </article>
      </section>
  );
}

export default NoFriend;
