import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer"
 const Home = () => {
    return(
        <>
        <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </div>
        </>
    )
 }
 export default Home;