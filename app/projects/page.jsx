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
          <div className={`${styles["grid-container"]} grid`}></div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col">
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
            <p className="date">Development</p>
            <h5>photo.palette Project</h5>
            <div>
              <Link className="primary-link" href="/projects/photo-palette">
                See Project
              </Link>
            </div>
          </div>
          <div className="col">
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
            <div>
              <a className="primary-link" href="projects/calendar">
                See Project
              </a>
            </div>
          </div>
          <div className="col">
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
            <h5>Kinetic Typography Motion Design</h5>
            <div>
              <a className="primary-link" href="/projects/kinetic-type">
                Read More
              </a>
            </div>
          </div>
          <div className="col">
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
            <div>
              <a className="primary-link" href="/projects/homespice">
                Read More
              </a>
            </div>
          </div>
          <div className="col">
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
            <div>
              <a className="primary-link" href="/projects/does-this-age-well">
                Read More
              </a>
            </div>
          </div>
          <div className="col">
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
            <h5>Motion Design</h5>
            <div>
              <a className="primary-link" href="/projects/motion-design">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProjectPage;
