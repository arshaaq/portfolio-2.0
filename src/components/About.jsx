
import { useRef, useState, Suspense, useEffect, useLayoutEffect } from 'react'
const About = ({reference}) => {

  useLayoutEffect(() => {
    const textElement = document.getElementById('typing-text');
    const textToType = "lol this is a typing sentence";
    console.log(textElement);
    let currentIndex = 0;

    function typeText() {
      if (currentIndex < textToType.length) {
        textElement.textContent += textToType.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeText, 50); // Adjust the typing speed (milliseconds)
      }
    }

    typeText();
  }, []);

    return(
      <section id='about' className='content-section'>
        <div className="about-container">
          <div className="about-profile-picture">lol</div>
          <div className="about-description">
            <p id="typing-text"></p>
            </div>
        </div>
      </section>
    );
  };
  
  export default About;