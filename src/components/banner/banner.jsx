import React from "react";

import bannerPrincipal from '../../assets/BannerPrincipal.png'

import s from '../banner/banner.module.css'

export default function Banner() {

  return (
    <div className={s.banner_container}>
      <img src={bannerPrincipal} alt="banner-principal" />
      <div className={s.text_container}>
        <p className={s.simple_text}>welcome to inbuild</p>
        <p className={s.text_border}>global standart</p>
        <p className={s.simple_text}>build all the unique patters</p>
      </div>
    </div>

  )
}