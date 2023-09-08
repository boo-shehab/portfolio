import React from 'react';
import { AiOutlineLink } from "react-icons/ai";
import { FiGithub } from "react-icons/fi"
import MealApp from '../images/Meal-App.PNG';
import dolingoDashboard from '../images/duolingo-dashboard.PNG';
import driveWise from '../images/DriveWise.PNG';
import hygieneAmbassadors from '../images/hygiene-ambassadors.PNG';
import SpaceHub from '../images/Space-Hub.PNG';

const Projects = () => {
  return (
    <div className="projects__content grid filters__active" data-content id="projects">
      <article className="projects__card">
        <img src={MealApp} alt="" className="projects__img" />
        <div className="projects__modal">
          <div>
            <h3 className="projects__title">Meal App</h3>
            <p className="projects__subtitle">It's web for delicious recipes </p>
            <a href="https://shisui6.github.io/meal-app/" target="_blank" className="projects__button button button__small" rel="noreferrer"><AiOutlineLink /></a>
            <a href="https://github.com/boo-shehab/meal-app" target="_blank" className="projects__button button button__small" rel="noreferrer"><FiGithub /></a>
          </div>
        </div>
      </article>
      <article className="projects__card">
        <img src={dolingoDashboard} alt="" className="projects__img" />
        <div className="projects__modal">
          <div>
            <h3 className="projects__title">dolingo Dashboard</h3>
            <p className="projects__subtitle">a dashboard for dolingo app</p>
            <a href="https://boo-shehab.github.io/duolingo-dashboard/" target="_blank" className="projects__button button button__small" rel="noreferrer"><AiOutlineLink /></a>
            <a href="https://github.com/boo-shehab/duolingo-dashboard" target="_blank" className="projects__button button button__small" rel="noreferrer"><FiGithub /></a>
          </div>
        </div>
      </article>
      <article className="projects__card">
        <img src={driveWise} alt="" className="projects__img" />
        <div className="projects__modal">
          <div>
            <h3 className="projects__title">DriveWise</h3>
            <p className="projects__subtitle">website for renting cars</p>
            <a href="https://drivewise.onrender.com/" target="_blank" className="projects__button button button__small" rel="noreferrer"><AiOutlineLink /></a>
            <a href="https://github.com/boo-shehab/drivewise-frontend" target="_blank" className="projects__button button button__small" rel="noreferrer"><FiGithub /></a>
          </div>
        </div>
      </article>
      <article className="projects__card">
        <img src={hygieneAmbassadors} alt="" className="projects__img" />
        <div className="projects__modal">
          <div>
            <h3 className="projects__title">Hygiene Ambassadors</h3>
            <p className="projects__subtitle">A youth campaign to clean the banks of rivers throughout Iraq</p>
            <a href="https://boo-shehab.github.io/capstone-project-1/" target="_blank" className="projects__button button button__small" rel="noreferrer"><AiOutlineLink /></a>
            <a href="https://github.com/boo-shehab/capstone-project-1/" target="_blank" className="projects__button button button__small" rel="noreferrer"><FiGithub /></a>
          </div>
        </div>
      </article>
      <article className="projects__card">
        <img src={SpaceHub} alt="" className="projects__img" />
        <div className="projects__modal">
          <div>
            <h3 className="projects__title">Space Travelers‘ Hub</h3>
            <p className="projects__subtitle">Book a rocket and a mission to space</p>
            <a href="https://space-hub-zeta.vercel.app/" target="_blank" className="projects__button button button__small" rel="noreferrer"><AiOutlineLink /></a>
            <a href="https://github.com/boo-shehab/Space-hub" target="_blank" className="projects__button button button__small" rel="noreferrer"><FiGithub /></a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Projects;
