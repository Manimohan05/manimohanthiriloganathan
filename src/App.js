import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/project';
import Contacts from './components/Contacts/contacts';
import Footer from './components/footer/footer';


const App = ()=> {
  return(
    <>
    <Header />

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contacts/>
    </main>

    
    <Footer/>
    </>
  )
}
export default App
