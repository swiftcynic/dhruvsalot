"use client";
import { useEffect } from "react";
import Typed from "typed.js";

const Hero = ({ mouse }) => {
  useEffect(() => {
    // Create the timeout here
    const timerId = setTimeout(() => {
      // Perform action after the delay
      new Typed(".typed-subtitle", {
        strings: ["UX/UI Designer and Front-end Director.", "Based in Kyiv."],
        loop: true,
        typeSpeed: 60,
        backSpeed: 30,
      });
      console.log("Timeout executed!");
    }, 500); // 3-second delay

    return () => clearTimeout(timerId);
  }, []);
  
  return (
    <div className="section started" style={{ height: "96vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text="I'm John Doe">
              I'm <span>John Doe</span>
            </div>
            <span className="typed-subtitle" />
          </div>
        </div>
      </div>
      {mouse && (
        <a href="#" className="mouse_btn">
          <span class="ion ion-mouse"></span>
        </a>
      )}
    </div>
  );
};
export default Hero;
