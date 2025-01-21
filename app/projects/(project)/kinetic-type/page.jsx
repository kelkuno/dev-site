import projectStyles from "../project.module.css";
import Image from "next/image";
import Link from "next/link";

const kineticType = () => {
  return (
    <div>
      <div className="container">
        <main>
          <section className={`${projectStyles["hero-wrapper"]} `}>
            <div className={projectStyles["hero-container"]}>
              <h1>Kinetic Typography</h1>
              <p className="lg-title">
                An expressive take on animating the past.
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
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/363163439?h=f8091b371e"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Moving Type"
                  className={projectStyles["project-video"]}
                ></iframe>
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
                This motion design project focused on the concept of Kinetic
                Typography—animating type in an expressive way. Using audio from
                a vintage 1940s radio soap opera, I aimed to capture its moody,
                melodramatic, and time-warped quality. To achieve this, I turned
                to a space theme coupled with trippy illusions for my visual
                effects.
              </p>
              <div className={`${projectStyles["project-img"]} mt-4`}>
                <Image
                  src="/images/kt-mood-board.jpeg"
                  alt="Kinetic Type Motion Design Mood Board."
                  width={2420}
                  height={1459}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={`${projectStyles["project-img"]} mt-4 mb-4`}>
                <Image
                  src="/images/kt-storyboard.jpeg"
                  alt="Kinetic Type Motion Design Storyboard."
                  width={2383}
                  height={1248}
                  layout="responsive"
                  priority
                />
              </div>
              <p className={projectStyles["project-copy"]}>
                One design element I am particularly proud of is the grainy film
                texture threaded throughout the animation. I achieved this
                effect by overlaying scanned Super 8 film footage.
              </p>
              <div className={`${projectStyles["project-img"]} mt-4 mb-4`}>
                <Image
                  src="/images/kt-super-8-footage.jpg"
                  alt="A still of the super 8 footage used in the animation sequence."
                  width={2288}
                  height={1724}
                  layout="responsive"
                  priority
                />
              </div>
              <p className={projectStyles["project-copy"]}>
                Adding the black and white film footage adds a visual noise that
                echoes the audio’s static quality.
              </p>
              <div
                className={`${projectStyles["project-row"]} ${projectStyles["two-col"]}`}
              >
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/kt-shadows.gif"
                    alt="video clip of Kelsey Kuno kinetic type animated sequence"
                    width={16}
                    height={9}
                    layout="responsive"
                    unoptimized
                  />
                </div>
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/kt-the-past.gif"
                    alt="video clip of Kelsey Kuno kinetic type animated sequence"
                    width={16}
                    height={9}
                    layout="responsive"
                    unoptimized
                  />
                </div>
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
export default kineticType;
