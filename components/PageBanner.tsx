"use client";
import Link from "next/link";
import { useEffect } from "react";

export interface PageBannerProps {
  pageName: string;
  pageLink: string;
  scrollFallback?: React.ReactNode;
}

const PageBanner = ({ pageName, pageLink, scrollFallback }: PageBannerProps) => {
  useEffect(() => {
    var sections = document.querySelectorAll(".section");
    sections.forEach(function (section) {
      console.log(section);
      section.addEventListener("click", function (event: Event) {
        const target = event.target as Element | null;
        if (target?.classList.contains("mouse")) {
          const height = window.innerHeight;
          const scrollOptions: ScrollToOptions = {
            top: height - 150,
            behavior: "smooth", // For smooth scrolling (modern browsers)
          };

          if ("scrollBehavior" in document.documentElement.style) {
            // If smooth scrolling is supported
            window.scrollTo(scrollOptions);
          } else {
            // Fallback for browsers that don't support smooth scrolling
            window.scrollTo(0, scrollOptions.top as number);
          }
        }
      });
    });
  }, []);

  return (
    <div className="section started" style={{ height: "96vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text={pageName}>
              {pageName}
            </div>
            <div className="h-subtitle typing-bread">
              <p>
                <Link href={`/`}>Home</Link> /{" "}
                <Link href={pageLink}>{pageName}</Link>
              </p>
            </div>
            <span className="typed-bread" />

            {/* if a custom scrollFallback is provided, render it here slightly below the title */}
            {scrollFallback ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 40,
                }}
              >
                {scrollFallback}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* render default scroll-downs only when no scrollFallback was provided */}
      {!scrollFallback && (
        <div className="scroll-downs">
          <a href="#next-section" className="mouse_btn">
            <span className="ion ion-mouse mouse" />
          </a>
        </div>
      )}
    </div>
  );
};
export default PageBanner;
