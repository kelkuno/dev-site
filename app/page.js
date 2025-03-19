import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FooterNav from "@/components/FooterNav/FooterNav";

export default function Home() {
  return (
    <main className="container">
      <section>
        <div className={styles["home-content"]}>
          <h1>Creative Technologist</h1>
        </div>
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
      </section>
    </main>
  );
}
