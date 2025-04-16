"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MainNav.module.css";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
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
      <div className={styles["nav-wrapper"]}>
        <div className={styles["logo-wrapper"]}>
          <Link href="/">
            <Image
              src="/images/kk-logo.svg"
              alt="Kelsey Kuno logo"
              className="main-nav--logo"
              width={185}
              height={85}
              layout="responsive"
              priority
            />
          </Link>
        </div>
        <nav className={styles["primary-navigation"]} id="primary-navigation">
          <ul className={styles["nav-row"]} aria-label="Primary" role="list">
            {links.map((link) => (
              <li key={link.href} className={styles["nav-link"]}>
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
    </div>
  );
};

export default MainNav;
