

import './styles/index.css'


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef, useState, Suspense, useEffect, useLayoutEffect } from 'react'
import { useSpring, animated, config, easings } from '@react-spring/three';
import {Canvas, useFrame, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three";

//gsap

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';




//components
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


//fibre component


//component



function App() {
  const full_container = useRef();


  const sections = document.querySelectorAll(".content-section");
  const navItems = document.querySelectorAll(".nav-item");



  useEffect(()=>{

    let aboutSection = document.getElementById("about");
    let aboutNav = document.getElementById("about-nav");
  
    let contactSection = document.getElementById("contact");
    let contactNav = document.getElementById("contact-nav");
  
    let projectsSection = document.getElementById("projects");
    let projectsNav = document.getElementById("projects-nav");

    aboutNav.addEventListener("click", () => {

      aboutNav.classList.add("selectedNav");
      contactNav.classList.remove("selectedNav");
      projectsNav.classList.remove("selectedNav")

      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    contactNav.addEventListener("click", () => {

      contactNav.classList.add("selectedNav");
      aboutNav.classList.remove("selectedNav");
      projectsNav.classList.remove("selectedNav")

      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    projectsNav.addEventListener("click", () => {

      projectsNav.classList.add("selectedNav")
      contactNav.classList.remove("selectedNav");
      aboutNav.classList.remove("selectedNav");
     

      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

//--------------------------------------------GSAP-------------------------------------------------------//

    let fullContainerContext = gsap.context(()=>{
    const scrollTrigger = ScrollTrigger.create({
          trigger: full_container.current,
          start: "top center",
          end: "bottom center", 
          markers: true,
          onUpdate: (self) => {
            const progress = self.progress;
            console.log('ScrollTrigger progress:', progress);
          },
      });
  
    },full_container.current);

    


    //cleans up the animation
    return () => fullContainerContext.revert(); 
    
  },[])




  return (
  <>
  
  <header> 
      <nav className='home-navigation'>
        <p className='nav-item selectedNav' id='about-nav' data-index="0">about</p> 
        <p className='nav-item' id='projects-nav' data-index="1">projects</p>
        <p className='nav-item' id='contact-nav' data-index="2">contact</p>
      </nav>
  </header>

  <div ref={full_container}>
  <About/>
  <Projects/>
  <Contact/>
  </div>

    
  </>
  

  )
}

export default App;
