import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/project';
import Contacts from './components/Contacts/contacts';
import EducationExperience from './components/education&experience/education&experience';
import WhatsAppIcon from './components/header/contact';

const App = () => {
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const text = "Crafting Intelligence"; // Text to be displayed

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">
          {text.split("").map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <EducationExperience />
        <Skills />
        <Project />
        <Contacts />
        <WhatsAppIcon/>
      </main>
    </>
  );
};

export default App;
