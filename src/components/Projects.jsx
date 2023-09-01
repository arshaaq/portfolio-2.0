gsap.registerPlugin(ScrollTrigger);

import ProjectItem from "./ProjectItem";
import { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Projects(){
  const projects_container = useRef();

  useEffect(()=>{

    let containerContext = gsap.context(()=>{
      gsap.to(".project-item", {
        y: -100,
        opacity: 1,
        scrollTrigger: {
          trigger: projects_container.current,
          start: "top center",
          end: "bottom center", 
        },
        stagger: 0.25,
      });
  
    },projects_container.current);
    //cleans up the animation
    return () => containerContext.revert(); 
  },[]);
  
  const [dataArray, setDataArray] = useState([]);

return(
  <>

    <div id='projects' className='content-section' ref={projects_container}>

      <div className="project-container">
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/> 
      </div>

    </div>
  
  </>
)
}

export default Projects;