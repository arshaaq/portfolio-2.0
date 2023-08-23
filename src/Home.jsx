import './styles/index.css'


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef, useState, Suspense, useEffect } from 'react'
import { useSpring, animated, config, easings } from '@react-spring/three';

import {Canvas, useFrame, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three";

import gsap from 'gsap';

//components
import NavLink from './components/NavLink';


//fibre component
function Cube(){
  const cube = useRef();
  const [active, setActive] = useState(false);
  const {position} = useSpring({

    config: {
      mass:1,
      tension: 100
    },
    position: active ? [0,0,3]: [0,0,0]

  })


  return(
    <animated.mesh 
    ref={cube}
    onClick={()=>setActive(!active)}
    position={position}
    rotation={[1,1,1]}

    >
    <PerspectiveCamera />
    <boxGeometry args={[1.5,1.5,1.5]}/>
    <meshPhongMaterial color={active ? "purple" : "blue"} />
    </animated.mesh>
  )

}

function Home() {
  const [count, setCount] = useState(0)
  const gltf = useLoader(GLTFLoader, './3D_Models/scene.gltf');

  return (
    <>


    <Canvas>
      <directionalLight/>
      <ambientLight intensity={0.5}/>
      <pointLight position={[10, 10, 10]} intensity={3}/>
      <Cube/>

      {/* <Suspense>
        <primitive 
        position={[1,0,3]}
        onClick={(e)=> console.log('click')}
        scale={[0.25, 0.25, 0.25]} 
        object={gltf.scene} />
        <pointLight color="#f6f3ea" position={[10, 5, 10]} intensity={2} />
      </Suspense> */}

      
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
