gsap.registerPlugin(ScrollTrigger);

import ProjectItem from "./ProjectItem";
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



function Projects({data}){
  const projects_container = useRef();
  let dataGeneral = data;



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


  let dataArrayElementsGeneral = dataGeneral.map((item, index)=>{
    console.log(item)
    let baseUrl = `https://arshaaq.github.io/${item.name}/`
    return (
        <ProjectItem
        key={index} 
        name={item.name} 
        pagesURL={baseUrl} 
        sourceURL={item.svn_url}
        description={item.description}
        language={item.language}
        />
        )
});

  


return(
  <>

    <div id='projects' className='content-section' ref={projects_container}>

      <div className="project-container">
        {dataArrayElementsGeneral}
      </div>

    </div>
  
  </>
)
}

export default Projects;