"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="main-nav">
      <Image
        src="/images/k-logo.svg"
        alt="Kelsey Kuno logo"
        className="main-nav--logo"
        width={26}
        height={32}
        priority
      />
      <nav>
        <ul className="row">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={toggleMenu}
        className={isOpen ? "menu-btn active" : "menu-btn"}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
};

export default MainNav;
