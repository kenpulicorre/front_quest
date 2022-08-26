import React from "react";

import watchApple from '../../assets/watchApple.png'

import s from '../branding/branding.module.css'

export default function Branding() {

  return (
    <div>
      <div className={s.header}>
        <h2>Branding Projects</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia blanditiis voluptatum sequi ...</p>
      </div>

      <div className={s.branding_container}>
        <div className={s.item}>
          <img src={watchApple} alt="product" />
          <p>Watches</p>
          <h3>Apple Watch</h3>
        </div>

        <div className={s.item}>
          <img src={watchApple} alt="product" />
          <p>Business</p>
          <h3>Creative Website</h3>
        </div>

        <div className={s.item}>
          <img src={watchApple} alt="product" />
          <p>technologies</p>
          <h3>Tesla Motors</h3>
        </div>

        <div className={s.item}>
          <img src={watchApple} alt="product" />
          <p>cosmetics</p>
          <h3>Beauty Salon</h3>
        </div>

        <div className={s.item}>
          <img src={watchApple} alt="product" />
          <p>communicate</p>
          <h3>Twillio API</h3>
        </div>

        <div className={s.item}>
          <img src={watchApple} alt="product" />
          <p>planning</p>
          <h3>Time Art</h3>
        </div>
      </div>
    </div>
  )
}