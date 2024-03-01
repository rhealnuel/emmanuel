import React from 'react'
import About from "../component/About";
import Project from "../component/Project";
import Hero from "../component/Hero";
import Icons from "../component/Icon";
import Navbar from "../component/Navbar";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

function Home() {
  return (
    <div>
     <Navbar />
      <Hero />
      <Icons />
      <About />
      <Project />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home