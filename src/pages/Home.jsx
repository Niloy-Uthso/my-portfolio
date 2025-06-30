import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import { useLocation } from 'react-router';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {

     const location = useLocation();
      const contactRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToSkills) {
      const timer = setTimeout(() => {
        const section = document.getElementById('skills');
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay to let the DOM render
      return () => clearTimeout(timer);
    }
  }, [location]);

  useEffect(() => {
  if (location.state?.scrollToProjects) {
    const timer = setTimeout(() => {
      const section = document.getElementById('projects');
      section?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // small delay to ensure DOM is ready
    return () => clearTimeout(timer);
  }
}, [location]);
 useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // slight delay to ensure render
    }
  }, [location]);

  useEffect(() => {
  if (location.state?.scrollTo) {
    const target = document.getElementById(location.state.scrollTo);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100); // give time to load the DOM
    }
  }
}, [location.state]);

    return (
        <>
             <Hero></Hero>  
             <Skills></Skills> 
             <Education></Education>
             <Projects></Projects>
             <Contact ref={contactRef}></Contact>
        </>
    );
};

export default Home;