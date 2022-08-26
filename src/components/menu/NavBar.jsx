import React from "react";

import { FaSearch } from 'react-icons/fa'

import s from '../menu/NavBar.module.css';

export default function NavBar() {

  return (
    <div className={s.container}>
      <p className={s.logo_text}> <span>i</span> nbuild</p>
      <nav className={s.nav_bar}>
        <ul>
          <li>Home
            <ul>
              <a href="#"><li>Action</li></a>
              <a href="#"><li>Another Action</li></a>
              <a href="#"><li>Something else here</li></a>
            </ul>
          </li>

          <li>pages
            <ul>
              <a href="#"><li>Action</li></a>
              <a href="#"><li>Another Action</li></a>
              <a href="#"><li>Something else here</li></a>
            </ul>
          </li>

          <li>blogs
            <ul>
              <a href="#"><li>Action</li></a>
              <a href="#"><li>Another Action</li></a>
              <a href="#"><li>Something else here</li></a>
            </ul>
          </li>

          <li>portafolio
            <ul>
              <a href="#"><li>Action</li></a>
              <a href="#"><li>Another Action</li></a>
              <a href="#"><li>Something else here</li></a>
            </ul>
          </li>

          <li>element
            <ul>
              <a href="#"><li>Action</li></a>
              <a href="#"><li>Another Action</li></a>
              <a href="#"><li>Something else here</li></a>
            </ul>
          </li>
          <li>demo
            <ul>
              <a href="#"><li>Action</li></a>
              <a href="#"><li>Another Action</li></a>
              <a href="#"><li>Something else here</li></a>
            </ul>
          </li>
        </ul>

        <div className={s.right_menu}>
          <label for="menu" className={s.button_menu}> <FaSearch /></label>
          <input type="checkbox" id="menu" className={s.button_menu_input} />

          <div className={s.navMenu}>
            <input type="text" placeholder="Search" />
          </div>

          <button className={s.button_buy}>Buy Now!</button>
        </div>
      </nav>

    </div>
  )
}