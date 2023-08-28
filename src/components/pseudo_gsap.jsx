useEffect(()=>{

    let contactSection = document.getElementById("contact");
    let contactNav = document.getElementById("contact-nav");
   
  
    contactNav.addEventListener("click", () => {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    let aboutSection = document.getElementById("about");
    let aboutNav = document.getElementById("about-nav");

    aboutNav.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    let projectsSection = document.getElementById("projects");
    let projectsNav = document.getElementById("projects-nav");

    projectsNav.addEventListener("click", () => {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    
  },[])