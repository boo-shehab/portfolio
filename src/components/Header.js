import React from 'react';
import profileImage from '../images/profile_image.jpg'
import { BsMoon, BsSun, BsGithub, BsWhatsapp, BsTelegram, BsDownload } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si"
import { BsMoon, BsSun, BsWhatsapp, BsTelegram, BsDownload } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai'
import PDF_CV from '../Ahmed_Abas_CV.pdf'
import Profile from './Profile';

const Header = ({ selectedTheme, themeChange }) => {
  return (
    <header className="profile container">
      <i className="change-theme" id="theme-button" onClick={themeChange}>
        {selectedTheme === 'dark' ? <BsSun /> : <BsMoon />}
      </i>
      <div className="profile__container grid">
        <Profile />
        <div className="container">
          <div className="profile__info-group">
            a web developer who transforms ideas into clean, functional, and visually appealing digital experiences. I focus on front-end development, blending logic with design to bring interfaces to life using React, Vue, JavaScript, and Tailwind CSS.
            <br /><br />
            From building dashboards and templating systems to creating full websites for real organizations, I aim to write code that’s simple, scalable, and enjoyable to use. I’m constantly exploring new technologies, and my current challenge is mastering the backend with Node.js to become fully full-stack.
          </div>
        </div>
        <div className="profile__buttons">
          <a download="Ahmed_Abas_CV" href={PDF_CV} className="button">download CV <BsDownload /></a>
          <div className="profile_buttons-small">
            <a href="https://wa.me/9647809629386" target="_blank" className="button button__small button_gray" rel="noreferrer"><BsWhatsapp /></a>
            <a href="https://telegram.me/boo_shehab" target="_blank" className="button button__small button_gray" rel="noreferrer"><BsTelegram /></a>
            <a href={`mailto:bfhetyrhyr12@gmail.com`} target="_blank" className="button button__small button_gray" rel="noopener noreferrer"><MdOutlineMail /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
