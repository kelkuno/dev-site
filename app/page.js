import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FooterNav from "@/components/FooterNav/FooterNav";
import SkillsList from "@/components/SkillsList/SkillsList";

export default function Home() {
  return (
    <main className="container">
      <section>
        <div className={styles["drawing-wrapper"]}>
          <Image
            src="/images/kk-profile-drawing.png"
            alt="A digital drawing of Kelsey Kuno"
            width={6}
            height={4}
            className={styles["drawing-img"]}
            priority
            layout="responsive"
          />
        </div>
        <div className={styles["home-content"]}>
          <h1>
            Creative<br></br> Technologist
          </h1>
          <SkillsList />
        </div>
      </section>
    </main>
  );
}
