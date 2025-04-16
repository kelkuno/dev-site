import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FooterNav from "@/components/FooterNav/FooterNav";

export default function Home() {
  return (
    <main className="container">
      <section className={styles["home-content"]}>
        <h1>
          Creative Developer{" "}
          <span className={styles["white-space"]}>& Visual Designer</span>
        </h1>
        <p>
          I’m focused on building thoughtful, visually engaging websites that
          blend clean code with strong storytelling.
        </p>
        <div>
          <Link href="/projects" className="primary-btn">
            See All Projects
          </Link>
        </div>
      </section>
      <section>
        <div className={styles["drawing-wrapper"]}>
          <Image
            src="/images/work-collage-writing.jpg"
            alt="A digital drawing of Kelsey Kuno"
            width={6}
            height={4}
            className={styles["drawing-img"]}
            priority
            layout="responsive"
          />
        </div>
        <p className={styles["center-text"]}>
          Selected work across web, design, and visual art.
        </p>
      </section>
    </main>
  );
}
