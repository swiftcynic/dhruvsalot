"use client";
import { useEffect, useState, MouseEvent } from "react";

const OnePageHeader = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>(".section_");
      const navLi = document.querySelectorAll<HTMLLIElement>(".top-menu li");
      let current: string | null = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        const anchor = li.querySelector<HTMLAnchorElement>("a");
        if (anchor && current && anchor.getAttribute("href") === `#${current}`) {
          li.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleMenuClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (document.body) {
      document.body.classList.toggle("loaded");
    }
    setToggle((prev) => !prev);
  };

  return (
      <header className={toggle ? "active" : ""}>
      <div className="head-top">
        <a href="#" className="menu-btn" onClick={handleMenuClick}>
          <span />
        </a>
        <div className="top-menu">
          <ul>
            <li className="">
              <a href="#section-resume" className="lnk">
                Resume
              </a>
            </li>
            <li className="">
              <a href="#section-works" className="lnk">
                Portfolio
              </a>
            </li>
            <li className="">
              <a href="#section-blog" className="lnk">
                Blog
              </a>
            </li>
            <li>
              <a href="#section-contacts" className="btn">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};


export default OnePageHeader;
