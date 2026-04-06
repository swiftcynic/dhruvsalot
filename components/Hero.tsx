"use client";
import { useEffect } from "react";
import Typed from "typed.js";

type HeroProps = {
  mouse?: boolean;
};

const Hero = ({ mouse }: HeroProps) => {
  useEffect(() => {
    // Create the timeout here
    const timerId = setTimeout(() => {
      // Perform action after the delay
      new Typed(".typed-subtitle", {
        strings: ["Based in Sydney.", "Masters in Data Science @ UNSW.", "Bachelors in Computer Science @ DJ Sanghvi."],
        loop: true,
        typeSpeed: 60,
        backSpeed: 30,
      });
      console.log("Timeout executed!");
    }, 500); // 3-second delay

    return () => clearTimeout(timerId);
  }, []);
  
  return (
    <div className="section started" style={{ height: "90vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text="I'm Dhruv Salot">
              I'm <span>Dhruv Salot</span>
            </div>
            <span className="typed-subtitle" />
          </div>
        </div>
      </div>
      {mouse && (
        <a href="#" className="mouse_btn">
          <span className="ion ion-mouse"></span>
        </a>
      )}
    </div>
  );
};
export default Hero;
