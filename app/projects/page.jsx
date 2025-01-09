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
            <Image
              src="/images/placeholder.png"
              alt="Handwritten note saying, Hello. My name is Kelsey"
              width={400}
              height={200}
              priority
            />
            <p className="date">October 27, 2024</p>
            <h5>The secret to designing logos and other wordly secrets.</h5>
            <div>
              <a className="primary-link" href="#">
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
        </div>
      </section>
    </div>
  );
};
export default ProjectPage;
