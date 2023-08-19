import { useState } from 'react'
import { useEffect } from 'react';
import svgTest from './assets/Lucky.svg'
import './App.css'

import gsap from 'gsap';

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
        // Use GSAP to create animations
        gsap.to(".path", {
          duration: 1,
          x: 100,
          opacity: 0.5,
          ease: 'power2.out',
        });
  },[]);




  return (
    <>

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
