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
  return (
    <div className="container">
      <div className="row align-items-center">
        <Image
          src="/images/k-logo.svg"
          alt="Kelsey Kuno logo"
          className="main-nav--logo"
          width={26}
          height={32}
          priority
        />
        <nav className="main-nav">
          <ul className="row">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hamburger">Hamburger</button>
      </div>
    </div>
  );
};

export default MainNav;
