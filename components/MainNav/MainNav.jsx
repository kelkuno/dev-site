"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MainNav.module.css";

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
  };
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={
        isOpen
          ? `${styles["main-nav"]} ${styles.active}`
          : `${styles["main-nav"]}`
      }
    >
      <Image
        src="/images/k-logo.svg"
        alt="Kelsey Kuno logo"
        className="main-nav--logo"
        width={26}
        height={32}
        priority
      />
      <nav className="primary-navigation" id="primary-navigation">
        <ul className={styles.row} aria-label="Primary" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <Link onClick={closeNav} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={toggleMenu}
        className={styles["menu-btn"]}
        aria-controls="primary-navigation"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </div>
  );
};

export default MainNav;
