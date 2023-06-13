import React from 'react';
import profileImage from '../images/profile_image.jpg'
import { BsMoon, BsSun, BsGithub, BsWhatsapp, BsTelegram, BsDownload } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si"
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
          Skilled software developer experienced in JavaScript, Ruby, React, Next.js, Ruby on Rails, and Three.js. I create efficient, scalable, user-friendly solutions for real-world challenges. Committed to exceptional results, I transform ideas into reality. Explore my portfolio for innovative software development. Let's bring your ideas to life!
          </div>
        </div>
        <div className="profile__buttons">
          <a download="" href="../PDF/Ahmed_Abas_CV.pdf" className="button">download CV <BsDownload /></a>
          <div className="profile_buttons-small">
            <a href="https://wa.me/9647809629386" target="_blank" className="button button__small button_gray" rel="noreferrer"><BsWhatsapp /></a>
            <a href="https://telegram.me/boo_shehab" target="_blank" className="button button__small button_gray" rel="noreferrer"><BsTelegram /></a>
            <a href={`mailto:bfhetyrhyr12@gmail.com`} target="_blank" className="button button__small button_gray" rel="noopener noreferrer"><BsTelegram /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
