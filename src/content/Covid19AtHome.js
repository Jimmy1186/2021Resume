import React from 'react'
import record from './../image/youtube-watching-time-recording.jpg'
function Covid19AtHome() {
    return (
        <section className="content-wapper">
        <figure>
          <img className="photo" src={record} alt="youtube觀看總時數" />
          <figcaption>Youtube每天平均看6小時，眼睛的疲勞感真的重</figcaption>
        </figure>
        <h1 className="title">我還以為我可以忍受的了一直待在家...三級防疫期間</h1>
        <span className="post-date">29 May 2021</span>
        <article className="content">
          剛開始我還滿樂觀的，家裡的食物充沛口罩充足，再加上學校停課，我本來以為有台電腦我可以撐個1個月之類的。
          但在一個禮拜之後，我覺得不對勁，我好想出去。
          仔細想想之前1~7在家都沒問題，但是不對阿我隔兩天會去健身房，而且六日還有槍隊和潛水的活動，覺得崩潰拜託一前趕快過去。
        </article>
      </section>
    )
}

export default Covid19AtHome
