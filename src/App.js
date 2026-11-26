import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';

import AboutMe from './About_me';
import Main from './Main';
import Skills from './Skills';
import WhyHireMe from './WhyHireMe';
import Projects from './projects';
import ContactForm from './ContactForm';
import { notify } from './notify';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // visit notification (runs once when the site opens)
  useEffect(() => {
    notify('visit');
  }, []);

  return (
      <div>
        {isLoading ? (
          <div className="loading-wave">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
        ) : (
          <div className="App">
            <Navbar />
            <Main id="mainy" />
            <AboutMe id="aboutMey" />
            <WhyHireMe />
            <Skills id="skills" />
            <Projects id="project" />
            <ContactForm id="contact" />
          </div>
        )}
      </div>
  );
}

export default App;