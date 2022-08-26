import React from "react";

import s from '../news/news.module.css'

export default function News() {

  return (
    <div className={s.cotainer}>
      <div className={s.header}>
        <h2>Latest News</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis magnam velit voluptatibus quia ...</p>
      </div>

      <div className={s.news_container}>
        <div className={s.new_one}>
          <div className={s.header_info}>
            <p>Events</p>
            <p>18 October 2022</p>
          </div>

          <div className={s.info_news}>
            <h2>Exclusive New Product</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>

        <div className={s.new_two}>
          <div className={s.info_news_two}>
            <h2>Exclusive New Product</h2>
            <p>Benefit program design</p>
          </div>
        </div>

        <div className={s.new_one}>
          <div className={s.header_info}>
            <p>Programming</p>
            <p>07 October 2022</p>
          </div>

          <div className={s.info_news}>
            <h2>Content creation for team</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>
  )
}