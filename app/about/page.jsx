import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <div className={styles["about-page-wrapper"]}>
        <div className={styles["image-container"]}>
          <Image
            src="/images/kelsey-headshot-building.jpg"
            alt="Kelsey Kuno on top of Brooklyn Bridge."
            width={1}
            height={1}
            layout="responsive"
            className={styles["profile-img"]}
          />
          <h2>
            Creative Developer;<br></br> Digital Designer.
          </h2>
        </div>
        <div className={styles["about-content"]}>
          <p>Hi, my name is Kelsey. Thanks for stopping by!</p>
          <p>
            I am a visual artist and a web developer, who is a recent Brooklyn
            transplant. I thrive on being a bridge between creative and digital
            teams, helping translate ideas and goals across disciplines that
            don’t always speak the same language. With a deep understanding and
            genuine interest in both design and development, I bring unique
            value to digital projects.
          </p>
          <h5>My Art side:</h5>
          <p>
            I am a visual artist with a passion for creativity in various forms.
            Holding a Masters in Graphic Arts and Web Design from the
            Minneapolis College of Art & Design, I consider myself a design
            generalist with a wide range of interests across different
            disciplines. Motion design holds a special fascination for me, as
            showcased in some of my earlier{" "}
            <Link
              href="/projects/motion-design"
              target="_blank"
              rel="noopener noreferrer"
              className="copy-link"
            >
              animation experiments
            </Link>
            . Since 2019, I have operated a creative business offering services
            that span from{" "}
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="copy-link"
            >
              abstract painting
            </Link>{" "}
            to graphic and motion design, as well as website and email
            development.
          </p>
          <h5>My Technical Side:</h5>
          <p>
            I took my first web development course during art school and I knew
            I wanted to learn more. Web development drew me in because I wanted
            more tools to be able to build out creative digital projects exactly
            how I envisioned them. In 2022 I deepened my technical education
            through completing a full stack software engineer bootcamp. Since
            then, I gained practical experience working as a web developer on a
            small digital production team at an advertising agency in Minnesota.
            I am currently freelancing in web design and development, helping
            clients bring their digital projects to life with creative and
            functional solutions.
          </p>
          <div>
            <a
              href="/kelsey-kuno-resume-2024.pdf"
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
