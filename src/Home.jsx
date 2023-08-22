import './styles/index.css'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef, useState, Suspense } from 'react'
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
  const gltf = useLoader(GLTFLoader, './3D_Models/scene.gltf');

  return (
    <>


    <Canvas>
      <Suspense>
        <primitive 
        scale={[0.25, 0.25, 0.25]} 
        object={gltf.scene} />
        <pointLight color="#f6f3ea" position={[10, 5, 10]} intensity={2} />
      </Suspense>
      <directionalLight/>
      <ambientLight intensity={1}/>
      <pointLight position={[10, 10, 10]} intensity={3}/>
      {/* <Threefibre /> */}
    </Canvas>
      
     

      <header>
        <nav className='home-navigation'>
        <p><a href='./about'>about</a></p>
        <p><a href='./projects'>projects</a></p>
        <p><a href='./contact'>contact</a></p>  
        </nav>
      </header>

      <section className='home-content'>
      <h1>Arshaaq Jiffry</h1>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>

        </p> 

      </section>

    </>
  )
}

export default Home;
