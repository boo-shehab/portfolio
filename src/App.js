import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal';
import EmailForm from './components/EmailForm';

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selected-theme') || 'light');
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });
  
    sr.reveal('.profile__border');
    sr.reveal('.profile__name', { delay: 500 });
    sr.reveal('.profile__profession', { delay: 600 });
    sr.reveal('.profile__social', { delay: 700 });
    sr.reveal('.profile__info-group', { interval: 100, delay: 700 });
    sr.reveal('.profile__buttons', { delay: 800 });
    sr.reveal('.profile__content', { delay: 900 });
    sr.reveal('.filters', { delay: 1000 });
  }, []);
  
  useEffect(() => {
    document.body.classList.toggle('dark-theme', selectedTheme === 'dark');
  }, [selectedTheme]);

  const themeChange = () => {
    
    localStorage.setItem('selected-theme', selectedTheme === 'dark' ? 'light' : 'dark')
    setSelectedTheme(selectedTheme === 'dark' ? 'light' : 'dark');
  };

  const handleTab = (e) => {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');

    tabContents.forEach(tc => {
      tc.classList.remove('filters__active');
    });

    const target = document.querySelector(e.target.dataset.target);
    target.classList.add('filters__active');

    tabs.forEach(t => {
      t.classList.remove('filter-tab-active');
    });

    e.target.classList.add('filter-tab-active');
  };

  return (
    <div>
      <Header themeChange={themeChange} selectedTheme={selectedTheme} />
      {/* <Profile /> */}
      <main className="main">
        <section className="filters container">
          <ul className="filters__content">
            <button className="filters__button filter-tab-active" data-target="#projects" onClick={handleTab}>Projects</button>
            <button className="filters__button" data-target="#skills" onClick={handleTab}>Skills</button>
          </ul>
          <div className="filters__sections">
            <Projects />
            <Skills />
          </div>
        </section>
        <EmailForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
