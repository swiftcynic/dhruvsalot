"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  
  interface AnchorClickHandler {
    (e: React.MouseEvent<HTMLAnchorElement>): void;
  }

  const onClick: AnchorClickHandler = (e): void => {
    e.preventDefault();
    setToggle((prev: boolean) => !prev);
  };

  const [pathname, setPathname] = useState("home");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <header className={toggle ? "active" : ""}>
      <div className="head-top">
        <a href="#" className="menu-btn" onClick={(e) => onClick(e)}>
          <span />
        </a>
        <div className="logo">
          <Link href="/">
            <Image src={`/images/logo.svg`} alt="logo" width={3600} height={2200}/>
          </Link>
        </div>
        <div className="top-menu">
          <ul>
            <li className={pathname.includes("home") || pathname == '/' || pathname == '/dhruvsalot/' ? "active" : ""}>
              <Link href={`/`} className={`lnk`}>
                Home
              </Link>
            </li>
            <li className={pathname.includes("portfolio") ? "active" : ""}>
              <Link href={`portfolio`} className="lnk">
                Portfolio
              </Link>
            </li>
            {/* <li className={pathname.includes("blog") ? "active" : ""}>
              <Link href={`blog`} className="lnk">
                Blog
              </Link>
            </li> */}
            <li className={pathname.includes("resume") ? "active" : ""}>
              <Link href={`resume`} className={`lnk`}>
                Resume
              </Link>
            </li>
            <li className={pathname.includes("contacts") ? "active" : ""}>
              <Link href={`contacts`} className="btn">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
