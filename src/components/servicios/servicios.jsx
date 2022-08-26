import React from "react";

import { FaLaptop } from 'react-icons/fa'
import { TbBorderAll, TbBolt } from 'react-icons/tb'

import s from '../servicios/servicios.module.css'

export default function Services() {

  return (
    <div>
      <div className={s.container}>
        <div className={s.services_description}>
          <h2>Our great service</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, illo neque! Magnam, eius fugit. Dolore unde provident assumenda officia laudantium minus necessitatibus sequi doloribus? Mollitia commodi qui perspiciatis totam laudantium?
            ...
          </p>
        </div>

        <div className={s.all_services}>

          <div className={s.service_one}>
            <div className={s.icon_service}>
              <FaLaptop className={s.pc} />

            </div>
            <div className={s.detail_service}>
              <h4>Unique</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus deserunt nisi...</p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className={s.service_two}>
            <div className={s.icon_service}>
              <TbBorderAll className={s.table} />
            </div>
            <div className={s.detail_service}>
              <h4>Responsive</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus deserunt nisi...</p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className={s.service_three}>
            <div className={s.icon_service}>
              <TbBolt className={s.light} />
            </div>
            <div className={s.detail_service}>
              <h4>Technology</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus deserunt nisi...</p>
              <a href="#">read more</a>
            </div>
          </div>


        </div>


      </div>
      <div className={s.pagination}>
        <button className={s.button_pagination}><div></div></button>
        <button className={s.button_pagination}><div></div></button>
      </div>
    </div>
  )
}