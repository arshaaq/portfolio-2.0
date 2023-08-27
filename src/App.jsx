

import './styles/index.css'


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef, useState, Suspense, useEffect } from 'react'
import { useSpring, animated, config, easings } from '@react-spring/three';
import {Canvas, useFrame, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three";

//gsap
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';



//components



//fibre component


//component
function About(){

  return(
    <section id='about' className='content-section'>
        <div>lol</div>
    </section>
  )
}

function Projects(){

  return(
    <section id='projects' className='content-section'>
        <div>lol</div>
    </section>
  )
}

function Contact(){

  return(
    <section id='contact' className='content-section poop'>
        <div>lol</div>
    </section>
  )
}


function App() {
  const container = useRef();

  useEffect(()=>{

    let contactSection = document.getElementById("contact");
    let contactNav = document.getElementById("contact-nav");
  
    contactNav.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    let aboutSection = document.getElementById("about");
    let aboutNav = document.getElementById("about-nav");

    aboutNav.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    let projectsSection = document.getElementById("projects");
    let projectsNav = document.getElementById("projects-nav");

    projectsNav.addEventListener("click", () => {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  
  },[])
  




  return (
  <>
  <header>
      <nav className='home-navigation'>
        <p className='nav-item' id='about-nav' data-index="0">about</p> 
        <p className='nav-item' id='projects-nav' data-index="1">projects</p>
        <p className='nav-item' id='contact-nav' data-index="2">contact</p>
      </nav>
  </header>

  <About/>
  <Projects/>
  <Contact />


    
  </>
  

  )
}

export default App;
