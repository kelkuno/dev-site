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
                <p className={projectStyles["project-skill"]}>Web Design</p>
                <p className={projectStyles["project-skill"]}>UI/UX Design</p>
                <p className={projectStyles["project-skill"]}>Typography</p>
                <p className={projectStyles["project-skill"]}>
                  Web Development
                </p>
                <p className={projectStyles["project-skill"]}>
                  Backend Integration
                </p>
                <p className={projectStyles["project-skill"]}>Data Modeling</p>
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
                  <span className={projectStyles["tech-title"]}>HTML</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>CSS</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    JavaScript (JSX)
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>Node.js</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>React</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>Next.js</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    Contentful
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>GraphQL</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>Git</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>Vercel</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>Figma</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    Adobe Suite
                  </span>
                </li>
              </ul>
            </div>
            <div className={projectStyles["project-content-wrapper"]}>
              <h4 className={projectStyles["project-important-copy"]}>
                The more knowledge you have, the more freedom you have to create
                what you want.
              </h4>
              <p className={projectStyles["project-copy"]}>
                I am deeply driven by the above sentence. And setting goals are
                key to driving my learning and growth. For this redesign and
                build, I focused on two main objectives:
              </p>
              <ol className={`${projectStyles["project-lists"]} mb-4`}>
                <li>
                  <span className={projectStyles["important-text"]}>
                    1.) Expand my skills
                  </span>{" "}
                  and deepen my understanding of web applications.
                </li>
                <li>
                  <span className={projectStyles["important-text"]}>
                    2.) Explore typography
                  </span>{" "}
                  and learn how classic typography principles translate to web
                  design.
                </li>
              </ol>
              <h5 className={projectStyles["project-important-copy"]}>
                1.) Technical Challenge:
              </h5>
              <p className={projectStyles["project-copy"]}>
                In my previous role, I primarily developed emails, which, as any
                developer knows, is far from modern web development. For this
                project, I aimed to push myself by working with modern
                frameworks and build tools.
              </p>
              <p className={projectStyles["project-copy"]}>
                I chose Next.js as my framework to refresh my React knowledge
                and explore server components, which I hadn’t worked with
                before. I also revisited my CSS skills, writing all the styles
                from scratch using CSS modules.
              </p>
              <p className={projectStyles["project-copy"]}>
                Additionally, I gained new experience deploying the Next.js app
                on Vercel and integrating a headless CMS into the site. While
                the CMS integration is still in progress, I’m excited to expand
                on this feature in the future.
              </p>
              <h5 className={projectStyles["project-important-copy"]}>
                2.) Design Challenge:
              </h5>
              <p className={projectStyles["project-copy"]}>
                I aimed to showcase my varied skills and projects cohesively,
                with an open and sophisticated feel that also highlighted the
                artistic process. To achieve this, I incorporated hand-drawn
                text and art elements inside refined page layouts.
              </p>
              <p className={projectStyles["project-copy"]}>
                I started with a{" "}
                <a
                  href="https://www.figma.com/design/JTXLZrJdyqzVz4tprzLSpO/Kelsey-Kuno-Digital-Website?node-id=0-1&p=f&t=ucT6wViMKpyYNfkP-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-link"
                >
                  {" "}
                  site map
                </a>{" "}
                and wireframes to plan the site’s functionality. This project
                was also an opportunity to deepen my understanding of web
                typography, so I researched type systems, baseline grids,
                spacing, and type scales. Along the way, I discovered a{" "}
                <a
                  href="https://typescale.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-link"
                >
                  {" "}
                  new tool
                </a>{" "}
                to set the type scale, which I now love and will be using in
                future projects.
              </p>
              <div
                className={`${projectStyles["project-row"]} ${projectStyles["two-col"]}`}
              >
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/portfolio-type-system.png"
                    alt="Screen shots of Kelsey Kuno's type rules for portfolio site"
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                </div>
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/portfolio-wireframes-square.png"
                    alt="Screen shots of Kelsey's portfolio wire frame pages."
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                </div>
              </div>
              <h5 className={projectStyles["project-important-copy"]}>
                Web Accessibility
              </h5>
              <p className={projectStyles["project-copy"]}>
                I have a strong interest in web accessibility from both design
                and development perspectives. To ensure an inclusive experience,
                I used tools like{" "}
                <a
                  href="https://www.tpgi.com/color-contrast-checker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-link"
                >
                  {" "}
                  Colour Contrast Analyser
                </a>{" "}
                to verify sufficient color contrast in the design. I also
                incorporated appropriate alt text for images and aria-labels
                where necessary to improve usability for assistive technologies.
              </p>
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
