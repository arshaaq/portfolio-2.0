import './styles/index.css'


import { useRef, useState } from 'react'
import { useEffect } from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three";

import gsap from 'gsap';

//components
import NavLink from './components/NavLink';


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
      <boxGeometry attach='geometry' args={[3,3,3]}/>
      <meshStandardMaterial attach='material' color="lightblue" />
    </mesh>
  );
};


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>


    <Canvas>
    <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
      <ambientLight intensity={1}/>
      <pointLight position={[10, 10, 10]} intensity={3}/>
      <Threefibre />
    </Canvas>
      
     

      <header>
        <nav>
        <p><a href='./about'>about</a></p>
        <p><a href='./projects'>projects</a></p>
        <p><a href='./contact'>contact</a></p>  
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

export default Home;
