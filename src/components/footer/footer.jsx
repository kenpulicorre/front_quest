import React from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobeAmericas,
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import s from "../footer/footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={s.container}>
        <div className={s.header_footer}>
          <p className={s.title_footer}>
            <span>i</span>nbuild
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ratione eius iusto dolores totam? Ducimus iure blanditiis quod ...
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            fugiat voluptatibus ...
          </p>
        </div>

        <div className={s.menu_link}>
          <h2>useful links</h2>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={s.arrows}>
          <ul>
            <li>›</li>
            <li>›</li>
            <li>›</li>
            <li>›</li>
          </ul>
        </div>

        <div className={s.contact}>
          <h2>Our contacts</h2>
          <div className={s.directions_container}>
            <div className={s.directions}>
              <div className={s.icon}>
                <FaMapMarkerAlt />
              </div>
              <div className={s.directions_p}>
                <p>1023 California, US,</p>
                <p>34/5 Leavenworth Street, US</p>
              </div>
            </div>

            <div className={s.numbers}>
              <div className={s.icon}>
                <FaPhoneAlt />
              </div>
              <div className={s.numbers_p}>
                <p>+1 246 912 5491</p>
                <p>+1 246 912 5492</p>
              </div>
            </div>

            <div className={s.email}>
              <div className={s.icon}>
                <FaGlobeAmericas />
              </div>
              <div className={s.emails_p}>
                <p>support@inbuild.com</p>
                <p>www.yourcompany.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.suscribe}>
          <h2>subscribe</h2>
          <div className={s.subscribe_description}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
          </div>

          <div className={s.input_message}>
            <input type="text" placeholder="Enter Your E-Mail" />
            <div className={s.icon_message}>
              <button>
                <FaTelegramPlane />
              </button>
            </div>
          </div>

          <div className={s.social_media}>
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaGoogle />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.final_footer}>
        <p>© 2022 All Rights Reserved By Kenneth</p>
        <div className={s.policy}>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">Our Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
