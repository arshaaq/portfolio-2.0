
import { useRef, useState, Suspense, useEffect, useLayoutEffect } from 'react'
const About = ({reference}) => {

  useLayoutEffect(() => {
    const textElement = document.getElementById('typing-text');
    const textToType = "Yo, I'm Arshaaq. A digital artist, coder and video editor from Canada. Living life with the philosophy of always learning and always creating. Nice to meet you!";
    console.log(textElement);
    let currentIndex = 0;

    function typeText() {
      if (currentIndex < textToType.length) {
        textElement.textContent += textToType.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeText, 45); // Adjust the typing speed (milliseconds)
      }
    }

    typeText();
  }, []);

    return(
      <section id='about' className='content-section'>
        <div className="about-container">
          <div className="about-profile-picture"></div>
          <div className="about-description">
            <p id="typing-text"></p>
            </div>
        </div>
      </section>
    );
  };
  
  export default About;