import './App.css'
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import Navigation from '../navigation/navigation'
import HeaderSection from '../header-section/header-section'
import Skills from '../Skills/skills'
import MyProject from '../my-projects/my-projects'
import Contact from '../contact/contact'
import Footer from '../footer/footer'

function App() {
   useEffect(() => {
      ScrollReveal().reveal('.home-content, .heading ', {
      duration: 2000,
      origin: 'top',
      distance: '80px',
      delay: 200
    });
     ScrollReveal().reveal('.home-img,  .services-container, .portfolio-box, .contact form, .skills-container',  {
      duration: 2000,
      origin: 'bottom',
      distance: '80px',
      delay: 200
    });
      ScrollReveal().reveal('.home-content p, .about-content', {
      duration: 2000,
      origin: 'right',
      distance: '80px',
      delay: 200
    });
     ScrollReveal().reveal('.home-content h1, .about-img', {
      duration: 2000,
      origin: 'left',
      distance: '80px',
      delay: 200
    });
  }, []);
  return (
    <>
    <Navigation />
    <HeaderSection />
    <Skills />
    <MyProject />
    <Contact />
    <Footer />
    </>
  )
}

export default App
