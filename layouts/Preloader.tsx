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
      // If element doesn't exist, immediately invoke callback and return to avoid runtime errors
      if (!element) {
        if (typeof callback === "function") callback();
        return;
      }

      var opacity: number = 1;
      var interval: number = 1000 / 60; // 60 frames per second
      var step: number = opacity / (duration / interval);

      var fadeInterval: number = window.setInterval(function updateOpacity(): void {
        opacity -= step;
        if (opacity < 0) opacity = 0;
        // assign a string to style.opacity to avoid type issues
        (element.style as any).opacity = String(opacity);

        if (opacity <= 0) {
          clearInterval(fadeInterval);
          if (typeof callback === "function") {
            callback();
          }
        }
      }, interval);
    }
  }, []);

  const [text, setText] = useState("loading ...");
  useEffect(() => {
    // Ensure we actually update the state depending on RTL in the pathname
    setText(window.location.pathname.includes("rtl") ? "جار التحميل..." : "loading ...");
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
