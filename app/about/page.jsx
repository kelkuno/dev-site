import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="container">
      <div className={styles["about-wrapper"]}>
        <div className={styles["about-content"]}>
          <h1>About</h1>
          <div className={styles["about-img"]}>
            <Image
              src="/images/kelsey-headshot-edited.jpg"
              alt="Kelsey Kuno on top of Brooklyn Bridge."
              width={1}
              height={1}
              layout="responsive"
              className={styles["profile-img"]}
            />
          </div>
          <h2>Creative Developer & Visual Designer</h2>
          <p className={styles["bio-line-text"]}>
            A curious creative who embraces complexity.
          </p>
          <h2> Hi, I'm Kelsey.</h2>
          <p>
            I'm a visual artist and web developer, recently relocated to
            Brooklyn. I thrive as a bridge between creative and digital teams,
            translating ideas across disciplines that often speak different
            languages. With a deep understanding and genuine interest in both
            design and development, I bring unique value to digital projects.
          </p>
          <h2>My Artistic Side</h2>
          <p>
            I hold a Master's in Graphic Arts and Web Design from the
            Minneapolis College of Art & Design. As a design generalist, I'm
            passionate about various creative forms, with a particular
            fascination for motion design. Since 2019, I've operated a creative
            business offering services ranging from abstract painting to graphic
            and motion design, as well as website and email development.
          </p>
          <h2>My Technical Side</h2>
          <p>
            My journey into web development began during art school, where I
            took my first course and was immediately drawn to the possibilities
            it offered for bringing creative digital projects to life. In 2022,
            I deepened my technical skills by completing a full-stack software
            engineering bootcamp. Since then, I've gained practical experience
            working as a web developer on a small digital production team at an
            advertising agency in Minnesota. Currently, I freelance in web
            design and development, helping clients bring their digital projects
            to life with creative and functional solutions.
          </p>
          <div>
            <a
              href="/kelsey-kuno-resume-styled.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              See CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
