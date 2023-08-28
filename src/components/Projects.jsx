import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import ProjectItem from "./ProjectItem";
import { useEffect, useState, useRef } from 'react';


function Projects(){
  const container = useRef();
  const box = useRef();

  useEffect(()=>{

    let containerContext = gsap.context(()=>{
      gsap.to(".box", {
        x: 200,
        scrollTrigger: {
          trigger: "#projects",
          start: "top top",
          end: "bottom center", 
          scrub: true, 
          markers: true
        },
      });
  
    },container.current);
    return () => containerContext.revert(); 
  },[]);
  
  const [dataArray, setDataArray] = useState([]);

return(
  <>

    <div id='projects' className='content-section' ref={container}>

      <div className='box'>

      </div>
      {/* <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/> */}
    </div>
  
  </>
)
}

export default Projects;