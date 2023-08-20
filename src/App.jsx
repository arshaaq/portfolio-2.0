import { useRef, useState } from 'react'
import { useEffect } from 'react';
//import {Mesh} from "three";
import svgTest from './assets/looool.svg'
import './App.css'

import {Canvas, useFrame} from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three";
//fibre component
function Threefibre(){

  const cubeRef = useRef();


  // //for animation
  useFrame(()=>{
    if(!cubeRef.current){
      return;
    }

    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <PerspectiveCamera />
      <boxGeometry args={[3,3,3]}/>
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};


import gsap from 'gsap';



function App() {
  const [count, setCount] = useState(0)

  // useEffect(()=>{
  //       // Use GSAP to create animations
  //       gsap.to(".path", {
  //         duration: 1,
  //         x: 100,
  //         opacity: 0.5,
  //         ease: 'power2.out',
  //       });
  // },[]);

  return (
    <>
    <Canvas>
      <ambientLight intensity={1}/>
      <pointLight position={[10, 10, 10]} />
      <Threefibre />
    </Canvas>
      
      <header>
        <nav>
        <p>about</p>
        <p>projects</p>
        <p>content</p>
        <img className="path" src={svgTest}></img>
        
        </nav>
      </header>
        <h1>Arshaaq Jiffry</h1>

      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>

        </p>
    </>
  )
}

export default App
