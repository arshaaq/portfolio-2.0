

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


  const sections = document.querySelectorAll(".content-section");
  const navItems = document.querySelectorAll(".nav-item");




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
  <Contact/>


    
  </>
  

  )
}

export default App;
