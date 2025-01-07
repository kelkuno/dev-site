import styles from "./photo-palette.module.css";
import projectStyles from "../project.module.css";
import Image from "next/image";
const PhotoPalette = () => {
  return (
    <div>
      <div className="container">
        <main>
          <section className={projectStyles["hero-wrapper"]}>
            <div className={projectStyles["hero-container"]}>
              <h1 className={projectStyles["project-title"]}>photo.palette</h1>
              <p className="lg-title">
                A full CRUD web application (Student Solo Project)
              </p>
              <div className={projectStyles["skill-wrapper"]}>
                <p className={projectStyles["project-skill"]}>
                  Web Development
                </p>
                <p className={projectStyles["project-skill"]}>Typography</p>
                <p className={projectStyles["project-skill"]}>Web Design</p>
                <p className={projectStyles["project-skill"]}>SEO</p>
                <p className={projectStyles["project-skill"]}>Branding</p>
                <p className={projectStyles["project-skill"]}>Graphic Design</p>
              </div>
              <div className={projectStyles["project-img"]}>
                <Image
                  src="/images/placeholder.png"
                  alt="Handwritten note saying, Hello. My name is Kelsey"
                  className={styles["hero__img"]}
                  width={800}
                  height={200}
                  priority
                />
              </div>
            </div>
          </section>
          <section className={projectStyles["main-wrapper"]}>
            <div className={`${projectStyles["tech-section"]}`}>
              <h5>Technology and Software</h5>
              <ul>
                <li>
                  <span className={projectStyles["tech-title"]}>React</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>React</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>React</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>React</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>React</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>React</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>React</span>
                </li>
              </ul>
            </div>
            <div className={projectStyles["project-content-wrapper"]}>
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
              <div className={`${projectStyles["project-copy"]} mb-1`}>
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
              <div className={projectStyles["project-img"]}>
                <Image
                  src="/images/placeholder.png"
                  alt="Handwritten note saying, Hello. My name is Kelsey"
                  className={styles["hero__img"]}
                  width={800}
                  height={200}
                  priority
                />
              </div>
              <div className={projectStyles["pull-quote"]}>
                <h3>
                  We're constantly surrounded by fascinating color combinations,
                  but without recording them, we can't recall them when
                  inspiration strikes.
                </h3>
              </div>
              <div className="row">
                <div className="col">
                  <Image
                    src="/images/photo-palette-1.webp"
                    alt="A video clip of a user scrolling through their photo.palette home page"
                    className={styles["photo-palette-img"]}
                    width={480}
                    height={404}
                  />
                </div>
                <div className="col">
                  <Image
                    src="/images/photo-palette-2.webp"
                    alt="A video clip of a user generating a color palette on photo.palette"
                    className={styles["photo-palette-img"]}
                    width={480}
                    height={404}
                  />
                </div>
                <div className="col">
                  <Image
                    src="/images/photo-palette-3.webp"
                    alt="A video clip of a user editing one of their saved color palettes on photo.palette"
                    className={styles["photo-palette-img"]}
                    width={480}
                    height={404}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Image
                    src="/images/placeholder.png"
                    alt="A video clip of a user scrolling through their photo.palette home page"
                    className={projectStyles["project-img"]}
                    width={480}
                    height={404}
                  />
                </div>
                <div className="col">
                  <Image
                    src="/images/placeholder.png"
                    alt="A video clip of a user generating a color palette on photo.palette"
                    className={projectStyles["project-img"]}
                    width={480}
                    height={404}
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2>photo.palette Application</h2>
            <h3>project page</h3>
            <h4>project page</h4>
            <h5>project page</h5>
            <h6>project page</h6>
            <p>Photo Palette</p>

            <p>
              I built the Photo.Palette app while I was still in software
              engineering bootcamp. The projection duration was 2 weeks and the
              project scope was to build a full CRUD application. The theme was
              open to our own interests. As a painter, I naturally gravitated
              towards a tool I can use in my paintings.
            </p>
            <p>
              My app allows artists and designers to create, customize and save
              image generated color palettes for later use. In short, I wanted a
              way for creatives to archive color combinations they find
              inspiring.
            </p>
            <p>
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
              before executing the code. Creating the wireframes and application
              flow was incredibly important.
            </p>
            <p>
              Curious to give it a try? I deployed the application on Heroku.{" "}
            </p>
            <div>
              <a
                className="primary-link"
                href="https://peaceful-meadow-98495.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Deployed App
              </a>
            </div>
            <div>
              <a
                className="primary-link"
                href="https://github.com/kelkuno/photo-palette/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See GitHub Repo
              </a>
            </div>
          </section>
          <section>
            <h4>Software and tools</h4>
            <ul>
              <li className="skill">Node</li>
              <li className="skill">Express</li>
              <li className="skill">React</li>
              <li className="skill">Redux</li>
              <li className="skill">Redux-Saga</li>
              <li className="skill">React-color-extractor</li>
              <li className="skill">React-colorful</li>
              <li className="skill">SQL</li>
              <li className="skill">Postgresql</li>
              <li className="skill">Heroku</li>
              <li className="skill">CSS</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};
export default PhotoPalette;
