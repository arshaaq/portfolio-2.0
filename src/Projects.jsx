import gsap from 'gsap';
import ProjectItem from "./components/ProjectItem";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const tl = gsap.timeline();




function Projects(){

  

  // Define the animation
  useEffect(()=>{
    tl.fromTo(
      ".project-item",
      { opacity: 0, y: 50,  },
      { opacity: 1, y: 0, duration: 1, stagger: 0.5},
      0.2 // Stagger interval in seconds
    );
  },[])


return(
  <>
    <p><Link to="#" className="back-link">Back</Link></p>
    <div className="project-container">
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
      </div>
    </>
)
}

export default Projects;