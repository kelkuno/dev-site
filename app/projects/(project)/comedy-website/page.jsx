import projectStyles from "../project.module.css";
import Image from "next/image";
import Link from "next/link";
const comedyWebsite = () => {
  return (
    <div>
      <div className="container">
        <main>
          <section className={`${projectStyles["hero-wrapper"]} `}>
            <div className={projectStyles["hero-container"]}>
              <h1>Comedy Website</h1>
              <p className="lg-title">
                One Month of Ali Sultan Comedy: Design, Development & a Lot of
                Learning.
              </p>
              <div className={projectStyles["skill-wrapper"]}>
                <p className={projectStyles["project-skill"]}>
                  Web Design & Art Direction
                </p>
                <p className={projectStyles["project-skill"]}>
                  Custom WordPress Development
                </p>
                <p className={projectStyles["project-skill"]}>
                  Responsive Design
                </p>
                <p className={projectStyles["project-skill"]}>
                  Mailchimp Integration
                </p>
                <p className={projectStyles["project-skill"]}>
                  Deployment & Hosting
                </p>
                <p className={projectStyles["project-skill"]}>
                  SEO Optimizationn
                </p>
              </div>
              <div className={`${projectStyles["project-img"]} mt-4 mt-b`}>
                <Image
                  src="/images/ali-website-intro-cover.jpg"
                  alt="A screenshot of Ali Sultan comedy branding colors and image"
                  width={1218}
                  height={429}
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
                    JavaScript (Vanilla)
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>PHP</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    WordPress Core Development
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    Mailchimp API
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>Git</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>Figma</span>
                </li>
              </ul>
            </div>
            <div className={projectStyles["project-content-wrapper"]}>
              <p className={projectStyles["project-copy"]}>
                In just one month, I designed and built a fully custom WordPress
                site for Ali Sultan, a comedian with 14 years of experience and
                a distinct voice. The project was a great example of how my
                artist self and developer self intertwine to build something
                special—functional, expressive, and visually cool.
              </p>
              <p className={projectStyles["project-copy"]}>
                <span className={projectStyles["important-text"]}>
                  From the design side
                </span>
                , I wanted to modernize his site while letting his personality
                shine through. I chose a warm, inviting palette with a bold
                purple accent—quirky and creative, like Ali himself. One of my
                favorite parts of the project was designing a layout that
                showcases Ali’s soulful, expressive headshots. These photos are
                more than promotional—they tell a story about his style,
                presence, and depth as a performer. I designed the layout to
                give those images breathing room and a sense of emotional
                impact.
              </p>
              <p className={projectStyles["project-copy"]}>
                <span className={projectStyles["important-text"]}>
                  On the development side
                </span>
                , I dove deep into WordPress core development. I created custom
                templates, built a custom Mailchimp integration, and deployed
                the site to a live server. I also worked on SEO
                fundamentals—improving performance, optimizing structure, and
                refining content for search visibility.
              </p>
              <p className={projectStyles["project-copy"]}>
                This project reminded me how much I can learn in a short time
                when I'm all in. From Figma wireframes to final deployment, I
                took full ownership—and grew a lot in the process.
              </p>
              <h5 className={projectStyles["project-important-copy"]}>
                Check out the transformation
              </h5>
              <p className={projectStyles["project-copy"]}>
                This project wasn’t just a build—
                <em>it was a redesign with purpose</em>. Want to see the
                difference? Check out the side-by-side comparison below to see
                how Ali’s site evolved from a basic presence to a bold,
                personality-driven platform.
              </p>
              <div className={`${projectStyles["project-img"]} mt-4 mb-4`}>
                <Image
                  src="/images/ali-site-compare.jpg"
                  alt="A side by side comparison of Ali's old site to Ali's new site."
                  width={4}
                  height={3}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={`${projectStyles["project-copy"]} mb-1 mt-2`}>
                <a
                  className="primary-link"
                  href="https://www.alisultancomedy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Ali's Live site!
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
export default comedyWebsite;
