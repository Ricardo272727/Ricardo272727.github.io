import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import WOW from 'wowjs';
import HeaderSection from './components/HeaderSection/HeaderSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import '../node_modules/animate.css/animate.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactButtonParallax from './components/ContactButtonParallax/ContactButtonParallax';

function App() {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  });
  
  useEffect(() => {
    let loading = document.getElementById('loading');
    if(loading){
      loading.style.display = 'none';
    }
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Element name="header">
        <HeaderSection/>
      </Element>
      <ContactButtonParallax/>
      <Element name="about">
        <AboutSection/>
      </Element>
      <Element name="projects">
        <ProjectsSection />
      </Element>
      <Footer/>
    </div>
  );
}

export default App;
