import projectStyles from "../project.module.css";
import Image from "next/image";
import Link from "next/link";

const HomeSpice = () => {
  return (
    <div>
      <div className="container">
        <main>
          <section className={`${projectStyles["hero-wrapper"]} `}>
            <div className={projectStyles["hero-container"]}>
              <h1>Home Spice</h1>
              <p className="lg-title">
                A cooking show celebrating new recipes with love and a dash of
                imperfection.
              </p>
              <div className={projectStyles["skill-wrapper"]}>
                <p className={projectStyles["project-skill"]}>
                  Creative Direction
                </p>
                <p className={projectStyles["project-skill"]}>
                  Visual Branding & Identity
                </p>
                <p className={projectStyles["project-skill"]}>Motion Design</p>
                <p className={projectStyles["project-skill"]}>Typography</p>
                <p className={projectStyles["project-skill"]}>Storytelling</p>
                <p className={projectStyles["project-skill"]}>
                  Video Production & Editing
                </p>
              </div>
              <div className={`${projectStyles["project-img"]} mt-4 mt-b`}>
                <Image
                  src="/images/hs-red-pepper.png"
                  alt="Two cooks' hands near a cutting board."
                  width={16}
                  height={9}
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
                  <span className={projectStyles["tech-title"]}>
                    Adobe Premiere
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    Adobe AfterEffects
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    Adobe InDesign
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    Adobe Photoshop
                  </span>
                </li>
              </ul>
            </div>
            <div className={projectStyles["project-content-wrapper"]}>
              <p className={projectStyles["project-copy"]}>
                For my capstone project, I co-created Home Spice with my
                partner, Ali Sultan, to challenge the perfectionism often seen
                in cooking shows. We wanted to showcase the mess and the
                process, making cooking more approachable and fun for beginners.
                My deliverables for my capstone were to film and edit a{" "}
                <a
                  href="https://vimeo.com/474526782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-link"
                >
                  pilot episode
                </a>{" "}
                and a{" "}
                <a
                  href="https://vimeo.com/484970509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-link"
                >
                  recipe instruction video
                </a>
                . Additionally, I created the show’s visual identity and
                branding.
              </p>
              <p className={projectStyles["project-copy"]}>
                The heart of the project was inspired by this old recipe card of
                my grandma’s chicken supreme recipe. The card was written by my
                mom decades ago.
              </p>
              <div className={`${projectStyles["project-img"]} mt-4 mb-4`}>
                <Image
                  src="/images/hs-recipe-card-2.jpg"
                  alt="A hand-written family recipe card."
                  width={4}
                  height={3}
                  layout="responsive"
                  priority
                />
              </div>
              <p className={projectStyles["project-copy"]}>
                In each episode, Ali (the host) learns a new recipe from a
                guest, and the episode ends with them sharing the meal and
                conversation. Here’s a taste of the first episode—check out the
                Home Spice trailer below!
              </p>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/541643877?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="home-spice_title-sequence"
                  className={projectStyles["project-video"]}
                ></iframe>
              </div>
              <h5 className={projectStyles["project-important-copy"]}>
                Motion Design & Branding Concepts
              </h5>
              <p className={projectStyles["project-copy"]}>
                I designed the opening animation sequence to set the visual
                tone, guided by words like warm, messy, creative, and energetic.
              </p>
              <div
                className={`${projectStyles["project-row"]} ${projectStyles["two-col"]}`}
              >
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/hs-paint-logo.png"
                    alt="Home Spice logo mixed with painting artwork"
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                </div>
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/hs-painting-process.png"
                    alt="A process shot of the painting splotches"
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                </div>
              </div>
              <p className={projectStyles["project-copy"]}>
                As an abstract painter, I saw parallels between art and
                cooking—both are subjective, unique, and messy. Inspired by
                this, I connected paint splatters with cutting food, using
                watercolor to evoke juicy splatters.
              </p>
              <div className={`${projectStyles["project-img"]} mt-4 mt-b`}>
                <Image
                  src="/images/hs-color-palette.png"
                  alt="The color palette used in Home Spice Branding"
                  width={2500}
                  height={1229}
                  layout="responsive"
                  priority
                />
              </div>
              <p className={projectStyles["project-copy"]}>
                The bright color palette was inspired by food ingredients, and I
                kept cooking at the forefront when designing the logo.
              </p>

              <p className={projectStyles["project-copy"]}>
                Watch the final title sequence, featuring the food splatters and
                logo in motion.
              </p>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/479583592?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="home-spice_title-sequence"
                  className={projectStyles["project-video"]}
                ></iframe>
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
export default HomeSpice;
