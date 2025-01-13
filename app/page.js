import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <section className={`grid ${styles.hero}`}>
        <div>
          <h2>I am a creative developer amet, consectetuer adipiscing elit.</h2>
          <Link
            href="/kelsey-kuno-resume-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            See CV
          </Link>
        </div>
        <h1>Creative Developer</h1>
      </section>
    </main>
  );
}
