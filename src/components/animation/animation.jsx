import React from "react";

import work from '../../assets/work.jpeg'
import work2 from '../../assets/work2.jpg'

import s from '../animation/animation.module.css'

export default function Animation() {

  return (
    <div className={s.container}>
      <div className={s.container_work_first}>
        <img src={work} alt="work" />
        <div className={s.info}>
          <h1>With all package services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae distinctio repudiandae aspernatur perferendis enim non minima, dignissimos dicta incidunt ipsum aliquid ratione suscipit at iure ab qui sapiente! Voluptatibus ...</p>
          <button>Read More</button>
        </div>

      </div>
      <div className={s.container_work_second}>
        <img src={work2} alt="work2" />
        <div className={s.info}>
          <h1>Innovative solutions from great experts</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae distinctio repudiandae aspernatur perferendis enim non minima, dignissimos dicta incidunt ipsum aliquid ratione suscipit at iure ab qui sapiente! Voluptatibus ...</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  )
}