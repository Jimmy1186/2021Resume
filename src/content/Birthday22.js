import React from 'react'
import gift from './../image/birthday-gift.jpg'
function Birthday22() {
    return (
        <section className="content-wapper">
        <figure>
          <img className="photo" src={gift} alt="22歲的生日禮物" />
          <figcaption>22歲的生日禮物</figcaption>
        </figure>
        <h1 className="title">22的生日，學生時代的結束</h1>
        <span className="post-date">30 May 2021</span>
        <article className="content">
          心裡好複雜喔，生日剛好跟畢業很近，而我一直以來就很期待著畢業，雖然還是會有著學生時代的遺憾，很多事都沒有體會享受到，但是這也是我所選擇的。<br></br>
          不過還是很開心能收到這些生日禮物，特別感謝我的家人一直在背後支持我，這些東西我會攜帶一輩子的。
        </article>
      </section>
    )
}

export default Birthday22
