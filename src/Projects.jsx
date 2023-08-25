import gsap from 'gsap';
import ProjectItem from "./components/ProjectItem";
import { useEffect } from 'react';
const tl = gsap.timeline();




function Projects(){

  

  // Define the animation
  // useEffect(()=>{
  //   tl.to(
  //     ".project-item",
  //     { opacity: 1, y: 0, duration: 1, stagger: 0.5, lazy: false},
  //     0.2 // Stagger interval in seconds
  //   );
  // },[])

return(
  <>

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