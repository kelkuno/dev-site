import projectStyles from "../project.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioWebsite = () => {
  return (
    <div>
      <div className="container">
        <main>
          <section className={`${projectStyles["hero-wrapper"]} `}>
            <div className={projectStyles["hero-container"]}>
              <h1>Portfolio Website</h1>
              <p className="lg-title">
                A portfolio redesign & build using modern dev tools
              </p>
              <div className={projectStyles["skill-wrapper"]}>
                <p className={projectStyles["project-skill"]}>
                  Frontend Development
                </p>
                <p className={projectStyles["project-skill"]}>UI/UX Design</p>
                <p className={projectStyles["project-skill"]}>
                  Responsive Design
                </p>
                <p className={projectStyles["project-skill"]}>
                  Backend Development
                </p>
                <p className={projectStyles["project-skill"]}>
                  Database Management
                </p>
                <p className={projectStyles["project-skill"]}>RESTful APIs</p>
              </div>
              <div className={`${projectStyles["project-img"]} mt-4 mt-b`}>
                <Image
                  src="/images/portfolio-home-cover.png"
                  alt="A screenshot Kelsey kuno portfolio"
                  width={1878}
                  height={745}
                  layout="responsive"
                  priority
                />
              </div>
            </div>
          </section>
          <section className={projectStyles["main-wrapper"]}>
            <div className={`${projectStyles["tech-section"]}`}>
              <h5>Technology and Software</h5>
              <ul className={projectStyles["tech-list"]}>
                <li>
                  <span className={projectStyles["tech-title"]}>Node</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>Express</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>React</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    Redux-Saga
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    React-color-extractor
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    React-colorful
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>SQL</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    Postgresql
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>Heroku</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>CSS</span>
                </li>
              </ul>
            </div>
            <div className={projectStyles["project-content-wrapper"]}>
              <h5 className={projectStyles["project-important-copy"]}>
                We're constantly surrounded by fascinating color combinations,
                but without recording them, we can't recall them when
                inspiration strikes.
              </h5>
              <p className={projectStyles["project-copy"]}>
                I built the Photo.Palette app while I was still in software
                engineering bootcamp. The projection duration was 2 weeks and
                the project scope was to build a full CRUD application. The
                theme was open to our own interests. As a painter, I naturally
                gravitated towards a tool I can use in my paintings.
              </p>
              <p className={projectStyles["project-copy"]}>
                My app allows artists and designers to create, customize and
                save image generated color palettes for later use. In short, I
                wanted a way for creatives to archive color combinations they
                find inspiring.
              </p>
              <div
                className={`${projectStyles["project-row"]} ${projectStyles["three-col"]}`}
              >
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/photo-palette-1.webp"
                    alt="A video clip of a user scrolling through their photo.palette home page"
                    width={480}
                    height={404}
                    layout="responsive"
                    unoptimized
                  />
                </div>
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/photo-palette-2.webp"
                    alt="A video clip of a user generating a color palette on photo.palette"
                    width={480}
                    height={404}
                    layout="responsive"
                    unoptimized
                  />
                </div>
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/photo-palette-3.webp"
                    alt="A video clip of a user editing one of their saved color palettes on photo.palette"
                    width={480}
                    height={404}
                    layout="responsive"
                    unoptimized
                  />
                </div>
              </div>

              <p className={projectStyles["project-copy"]}>
                We learned the art of planning by making a detail{" "}
                <a
                  href="https://docs.google.com/document/d/137iK_bsOJbLLuM_st7pHMUAebAm-2pgH2rqp3srLdJ0/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-link"
                >
                  {" "}
                  project scope
                </a>{" "}
                before executing the code. Creating the wireframes and
                application flow was incredibly important.
              </p>
              <p className={projectStyles["project-copy"]}>
                Curious to give it a try? I deployed the application on Heroku.
              </p>
              <div className={`${projectStyles["project-copy"]} mb-1 mt-2`}>
                <a
                  className="primary-link"
                  href="https://peaceful-meadow-98495.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Deployed App
                </a>
              </div>
              <div className={`${projectStyles["project-copy"]} mb-1`}>
                <a
                  className="primary-link"
                  href="https://github.com/kelkuno/photo-palette/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See GitHub Repo
                </a>
              </div>
              <div className={projectStyles["text-center"]}>
                <Link href="/projects" className="primary-btn">
                  See All Projects
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default PortfolioWebsite;
