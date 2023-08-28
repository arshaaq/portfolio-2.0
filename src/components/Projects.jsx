import gsap from 'gsap';
import ProjectItem from "./ProjectItem";
import { useEffect, useState } from 'react';
const tl = gsap.timeline();




function Projects({reference}){
  const [dataArray, setDataArray] = useState([]);

return(
  <>

    <div id='projects' className='content-section' ref={reference}>

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