import React from 'react'
import chinaDragon from './../image/chinaDragon.jpg'
function WorkExInCainaDragon() {
    return (
        <section className="content-wapper">
        <figure>
          <img className="photo" src={chinaDragon} alt="前輩與我的合照" />
          <figcaption>在這邊的照片只有這張，因為遠端工作。</figcaption>
        </figure>
        <h1 className="title">工作經驗 || 中國龍 || 學校網站</h1>
        <span className="post-date">16 Jun 2021</span>
        <article className="content">
        這應該算我在業界寫程式的一份兼職工作吧，說這份工作前，要先從上一份硬體公司後大二下我開始修C#的課程。<br></br>
        在修這堂課我遇到讓我學習寫程式的恩師"陳一飛"老師，記得他是從執行window指令來產生執行檔教起，十分的基礎，讓我們知道所有的來龍去脈後，每次上完後會出作業，像是在會出的資料照大小排列之類的，就是希望我們自己去寫程式而不是只是聽更看。<br></br>
        剛開始的挫折感很大，總是產生很多的錯誤，我就會上網用關鍵字去查看有沒有人有類似的錯誤，幸好有stackoverflow這類型的網站，在查詢中也不斷地在學習，最大的感觸就是寫程式就是要不斷的學習，推斷錯誤的產生。<br></br>
        過程中我被介紹到學校的教學資源中心，他們希望我來更新網頁，雖然我那時候沒接觸前端方面但是我還接下了，好處就是處理完後對於前端語言有基礎的了解。<br></br>
        課程修完後，我空堂時間又變很多，我就去中國龍面試打工，最好玩的地方是面試的時候沒有過多的談話，而是給你一台筆電然後出題考試，還好他只出HTML跟CSS的排版，所以就過了，我還以為會像網站上一些人面試談說考資料結構之類的。<br></br>
        不過之後的工作內容還真的只有用到HTML跟CSS，所以在這個期間我去認識了三大框架React、Angular、Vue，再稍微撰寫React跟Vue後我選擇React，其實也沒為什麼也許只是覺得寫起來比較順。
        </article>
      </section>
    )
}

export default WorkExInCainaDragon
