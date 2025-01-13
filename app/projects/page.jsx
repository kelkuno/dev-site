import styles from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <div className={styles["project-page-wrapper"]}>
      <section className="container">
        <div className={styles["hero-container"]}>
          <div className={styles["hero-text"]}>
            <p className="sml-title">Design & Development</p>
            <h1>Project Work</h1>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className={`col ${styles["projects-col"]}`}>
            <Link href="/projects/photo-palette">
              <Image
                src="/images/photo-palette-2.png"
                alt="Four palettes from the photo.palette app"
                width={1}
                height={1}
                priority
                layout="responsive"
              />
            </Link>
            <p className="date">Design</p>
            <Link className="project-link" href="/projects/photo-palette">
              <h5>photo.palette Project</h5>
            </Link>
            <h6>A full CRUD web application (Student Solo Project)</h6>
            <Link className="primary-link" href="/projects/photo-palette">
              Read More
            </Link>
          </div>
          <div className={`col ${styles["projects-col"]}`}>
            <Link href="/projects/calendar">
              <Image
                src="/images/cal-cover.png"
                alt="Kelsey Kuno Painting Calendar cover"
                width={1}
                height={1}
                priority
                layout="responsive"
              />
            </Link>
            <p className="date">Design</p>
            <h5>Painting Calendar</h5>
            <h6>An artisian calendar for the new year</h6>
            <Link className="primary-link" href="/projects/calendar">
              Read More
            </Link>
          </div>
          <div className={`col ${styles["projects-col"]}`}>
            <Link href="/projects/kinetic-type">
              {" "}
              <Image
                src="/images/kt-cover.png"
                alt="A still from a kinetic typography motion design by Kelsey Kuno"
                width={1}
                height={1}
                priority
                layout="responsive"
              />
            </Link>
            <p className="date">Design</p>
            <h5>Typography Motion Design</h5>
            <h6>An expressive take on animating the past</h6>
            <Link className="primary-link" href="/projects/kinetic-type">
              Read More
            </Link>
          </div>
          <div className={`col ${styles["projects-col"]}`}>
            <Link href="/projects/homespice">
              <Image
                src="/images/hs-project-cover.png"
                alt="Home Spice cover Art: A cook's hands chopping a red pepper."
                width={1}
                height={1}
                priority
                layout="responsive"
              />
            </Link>
            <p className="date">Design</p>
            <h5>Home Spice</h5>
            <h6>
              A cooking show celebrating new recipes with love and a dash of
              imperfection
            </h6>
            <Link className="primary-link" href="/projects/homespice">
              Read More
            </Link>
          </div>
          <div className={`col ${styles["projects-col"]}`}>
            <Link href="/projects/does-this-age-well">
              <Image
                src="/images/podcast-cover.png"
                alt="Does this age well?"
                width={1}
                height={1}
                priority
                layout="responsive"
              />
            </Link>
            <p className="date">Design</p>
            <h5>Does This Age Well?</h5>
            <h6>Playful podcast branding for a witty comedian podcast</h6>
            <Link className="primary-link" href="/projects/does-this-age-well">
              Read More
            </Link>
          </div>
          <div className={`col ${styles["projects-col"]}`}>
            <Link href="/projects/motion-design">
              <Image
                src="/images/animation-cover.png"
                alt="An illustrated self portrait of Kelsey Kuno"
                width={1}
                height={1}
                priority
                layout="responsive"
              />
            </Link>
            <p className="date">Design</p>
            <h5>Animation</h5>
            <h6>A collection of my animation experiments across the years</h6>
            <Link className="primary-link" href="/projects/motion-design">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProjectPage;
