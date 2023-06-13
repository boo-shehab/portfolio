import React from 'react';
import { SiLeetcode } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import profileImage from '../images/profile_image.jpg';

const Profile = () => {
  return (
    <div className="profile__data">
      <div className="profile__border">
        <div className="profile__perfil">
          <img src={profileImage} alt="profile" />
        </div>
      </div>
      <h2 className="profile__name">Ahmed abas</h2>
      <h3 className="profile__profession">web developer</h3>
      <ul className="profile__social">
        <a href="https://leetcode.com/bfhetyrhyr12/" className="profile__social-link"> <SiLeetcode /></a>
        <a href="https://www.linkedin.com/in/boo-shehab/" className="profile__social-link"><BsLinkedin /></a>
        <a href="https://github.com/boo-shehab" className="profile__social-link"><BsGithub /></a>
      </ul>
    </div>
  );
};

export default Profile;
