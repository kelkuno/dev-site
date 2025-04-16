"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./FooterNav.module.css";

const FooterNav = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  const socialLinks = [
    {
      iconSrc: "/images/linkedin.svg",
      href: "https://www.linkedin.com/in/kelsey-kuno/",
      alt: "LinkedIn Icon",
      width: "30",
      height: "30",
      label: "linkedIn",
    },
    {
      iconSrc: "/images/github.svg",
      href: "https://github.com/kelkuno",
      alt: "GitHub icon",
      width: "30",
      height: "30",
      label: "GitHub",
    },
    {
      iconSrc: "/images/instagram.svg",
      href: "https://www.instagram.com/kelseykunodesigns/",
      alt: "Instagram icon",
      width: "30",
      height: "30",
      label: "Instagram",
    },
    {
      iconSrc: "/images/palette.svg",
      href: "https://www.kelseykuno.com/",
      alt: "Palette icon",
      width: "30",
      height: "30",
      label: "Painting portfolio",
    },
  ];

  return (
    <div className={styles["footer-nav-wrapper"]}>
      <div
        className={`${styles["footer-col-wrapper"]} ${styles["primary-content"]}`}
      >
        <div className={styles["footer-socials"]}>
          {socialLinks.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.label} profile`}
            >
              <Image
                src={social.iconSrc}
                width={social.width}
                height={social.height}
                alt={social.alt}
              />
            </Link>
          ))}
        </div>
        <Link href="mailto:kelsey.kuno@gmail.com">kelsey.kuno@gmail.com</Link>
      </div>
      <div
        className={`${styles["footer-col-wrapper"]} ${styles["secondary-content"]}`}
      >
        <Image
          src="/images/kk-logo-black.svg"
          width="93"
          height="43"
          alt="K Logo"
        />
        <p className={styles["copyright"]}>© Kelsey Kuno Designs</p>
      </div>
    </div>
  );
};

export default FooterNav;
