

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
gsap.registerPlugin(ScrollTrigger);



//components
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


//fibre component


//component



function App() {

  const container = useRef();
  const sections = document.querySelectorAll(".content-section");
  const navItems = document.querySelectorAll(".nav-item");

  useEffect(()=>{

    let containerContext = gsap.context(()=>{
      gsap.to(".box", {
        x: 200,
        scrollTrigger: {
          trigger: "#project",
          start: "top top", // Animation starts when the top of .box reaches the vertical center of the viewport
          end: "bottom center", // Animation ends when the bottom of .box reaches the vertical center of the viewport
          scrub: true, // Causes the animation to smoothly follow the scroll position
          markers: true// Shows markers for debugging purposes
        },
      });

    },container.current);
    return () => containerContext.revert(); 
  },[]);



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
  <Projects reference={container}/>
  <Contact/>


    
  </>
  

  )
}

export default App;
