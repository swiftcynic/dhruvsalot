"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  useEffect(() => {
    var preInner = document.querySelector<HTMLElement>(".preloader .pre-inner");

    // Fade out .pre-inner element
    fadeOut(preInner, 800, function () {
      // Preload hide
      var preloader = document.querySelector(".preloader");
      if (preloader) {
        (preloader as HTMLElement).style.display = "none";
      }

      // Add 'loaded' class to body
      document.body.classList.add("loaded");
    });

    interface FadeCallback {
      (): void;
    }

    interface FadeElement extends HTMLElement {}

    function fadeOut(element: FadeElement | null, duration: number, callback?: FadeCallback): void {
      var opacity: number = 1;
      var interval: number = 1000 / 60; // 60 frames per second
      var step: number = opacity / (duration / interval);

      function updateOpacity(): void {
        opacity -= step;
        // cast style to any to preserve original JS behavior of assigning a number
        ((element as FadeElement).style as any).opacity = opacity;

        if (opacity <= 0) {
          clearInterval(fadeInterval);
          if (typeof callback === "function") {
            callback();
          }
        }
      }

      var fadeInterval: number = window.setInterval(updateOpacity, interval);
    }
  }, []);

  const [text, setText] = useState("loading ...");
  useEffect(() => {
    window.location.pathname.includes("rtl")
      ? setText("جار التحميل...")
      : "loading ...";
  }, []);

  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="pre-inner">
            <div className="load typing-load">
              <p>{text}</p>
            </div>
            <span className="typed-load" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
