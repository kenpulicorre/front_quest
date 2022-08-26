import React from "react";

import s from '../parallax/parallax.module.css'

export default function Parallax() {

  return (
    <div>
      <div className={s.parallax_container}>
        <div className={s.inside_text}>
          <p>strong fundations</p>
          <h2>Working process with our latest projects</h2>
        </div>
      </div>
    </div>
  )
}