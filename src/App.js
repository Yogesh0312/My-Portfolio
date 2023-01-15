import React from 'react'
import './App.css';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/home/Home';
import Qualification from './Components/qualification/Qualification';
import ScrollUp from './Components/scrollup/ScrollUp';
import Services from './Components/services/Services';
import Skills from './Components/skills/Skills';
import Work from './Components/work/Work';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
       <Work/>
        <Contact/>
        
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
