import React from 'react'
import colleague from './../image/work-colleague.jpg'
import officeCoffee from './../image/office-coffee.jpg'
import oldNew from './../image/old-and-new.jpg'
import allColleague from './../image/all-colleague.jpg'

function WorkEx() {
    return (
        <section className="content-wapper">
        <figure>
          <img className="photo" src={colleague} alt="修出單機的同事" />
          <figcaption>永遠修不完的出單機，還有我的同事 XD。</figcaption>
        </figure>
        <h1 className="title">工作經驗 || 大綜電腦</h1>
        <span className="post-date">16 Jun 2021</span>
        <article className="content" style={{paddingBottom:0}}>
          我第一份正式職的工作室在專門維修及處裡硬體的公司，有這份機遇是在2018年的暑假，一位高中同學介紹我去這邊一起打工(圖片中那位但眼鏡的老兄)，那時候閒著也是閒著，就果果斷答應應了，在衣櫃找了套襯衫和黑長褲就去面試了。<br></br>
          經過簡單的面試之後，我分派於富邦電腦定期保養，每天主管開完會後，便會發一疊疊粉色與黃色層疊的工作單，每次完成後要寫上工作明細與客戶的簽名，接著跟著前輩騎機車去各個富邦。<br></br>
          過了一個月後，過程十分的無聊，因為熟了後就是機械化操作，最大的樂趣其實是觀察富邦職員辦公桌，每個人的辦公桌可以擺上自己的私人物品，有人就在上面放一堆花草，又或著一箱箱鞋盒變小型鞋櫃，問他們放的內容物都可以聊很久，實在很好玩。<br></br>
        </article>
        <figure>
          <img className="photo" src={officeCoffee} alt="辦公桌上的咖啡機" />
          <figcaption>咖啡廳?? 不，這是辦公桌。</figcaption>
        </figure>
        <article className="content"  style={{paddingBottom:0}}>
          之後開學後我挑槽到維修王品集團的電腦以及營業設備，不過要會開車，因為地區包括宜蘭到桃園，那時候我沒駕照，所以我只好每天早上6點去駕訓班，早上上課，下午上班到晚上10:30，不過這應該是我在這裡最開心的時刻。<br></br>
          工作的內容是接到不同店家電腦問題來判斷問題出在哪、是否能遠端連線或著電話請店員操作來解決、去現場需要帶那些機器和工具維修、依照店家距離遠近來判斷先去哪家再去哪家效率比較高，這邊的問題處理能力、口語表達和開車技術真的會變好，而且去不同地區前輩會推薦好吃的東西。
        </article>
        <figure>
          <img className="photo" src={oldNew} alt="新舊機器比較" />
          <figcaption>在廚房的電子設備很容易因為油垢、熱、潮濕損壞，處理得好店長懷會請喝飲料\（^∀^）メ（^∀^）ノ</figcaption>
        </figure>
        <article className="content"  style={{paddingBottom:0}}>
          最後的最後，我離職後，大家也因為總總因素相繼離職，不過大家的感情依就很好，真的很感謝他們在公司對我照顧。
        </article>
        <figure>
          <img className="photo" src={allColleague} alt="大家的合照" />
          <figcaption>我們還是會每年約出來聚餐</figcaption>
        </figure>
      </section>
    )
}

export default WorkEx
