

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
gsap.registerPlugin(ScrollToPlugin);
import ScrollToPlugin from 'gsap/ScrollToPlugin';




//components
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


//fibre component


//component



function App() {
  const full_container = useRef();
  const [dataArray, setDataArray] = useState([]);


  const sections = document.querySelectorAll(".content-section");
  const navItems = document.querySelectorAll(".nav-item");



  useEffect(()=>{

    //--------------------------------------------GSAP-------------------------------------------------------//

    let fullContainerContext = gsap.context(()=>{
      const scrollTrigger = ScrollTrigger.create({
            trigger: full_container.current,
            start: "top center",
            end: "bottom center", 
            onUpdate: (self) => {
              const progress = self.progress;

              if(progress > 0 && progress <0.35){
  
                aboutNav.classList.add("selectedNav");
                contactNav.classList.remove("selectedNav");
                projectsNav.classList.remove("selectedNav")
  
              } else if(progress >= 0.35 && progress < 0.71){
  
                projectsNav.classList.add("selectedNav")
                contactNav.classList.remove("selectedNav");
                aboutNav.classList.remove("selectedNav");
  
              } else if(progress >= 0.71 && progress < 0.8){
                
                contactNav.classList.add("selectedNav");
                aboutNav.classList.remove("selectedNav");
                projectsNav.classList.remove("selectedNav")
  
              }
            },
        });
    
      },full_container.current);
  
    let aboutSection = document.getElementById("about");
    let aboutNav = document.getElementById("about-nav");
  
    let contactSection = document.getElementById("contact");
    let contactNav = document.getElementById("contact-nav");
  
    let projectsSection = document.getElementById("projects");
    let projectsNav = document.getElementById("projects-nav");

    //for about navigation
    aboutNav.addEventListener("click", () => {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: aboutSection,
      });   
    });

    //for contact navigation
    contactNav.addEventListener("click", () => {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: contactSection,
      });   
    });

    //for projects navigation
    projectsNav.addEventListener("click", () => {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: projectsSection,
      });   
    });


      //cleans up the animation
      return () => fullContainerContext.revert(); 
      
  },[])

  useLayoutEffect(()=>{
    
// Define the API URL for the user data
const apiUrl = `https://api.github.com/users/arshaaq/repos`;
const token = `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`;

// Make the API request with the access token
fetch(apiUrl, {
  headers: {
    Authorization: `token ${token}`,
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((userData) => {
    // Handle and use the user data
    console.log(userData);
    setDataArray[userData];
  })
  .catch((error) => {
    console.error('Error fetching GitHub user data:', error);
  });
  },[]);


  return (
  <>
  
  <header> 
      <nav className='home-navigation'>
        <p className='nav-item selectedNav' id='about-nav' data-index="0">about</p> 
        <p className='nav-item' id='projects-nav' data-index="1">projects</p>
        <p className='nav-item' id='contact-nav' data-index="2">contact</p>
      </nav>
  </header>

  <div className="full_container" ref={full_container}>
  <About/>
  <Projects data={dataArray}/>
  <Contact/>
  </div>

    
  </>
  

  )
}

export default App;
