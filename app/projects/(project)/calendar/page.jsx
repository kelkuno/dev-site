import projectStyles from "../project.module.css";
import Image from "next/image";
import Link from "next/link";
const Calendar = () => {
  return (
    <div>
      <div className="container">
        <main>
          <section className={`${projectStyles["hero-wrapper"]} `}>
            <div className={projectStyles["hero-container"]}>
              <h1>Painting Calendar</h1>
              <p className="lg-title">An artisian calendar for the new year.</p>
              <div className={projectStyles["skill-wrapper"]}>
                <p className={projectStyles["project-skill"]}>Layout Design</p>
                <p className={projectStyles["project-skill"]}>Image Editing</p>
                <p className={projectStyles["project-skill"]}>Typography</p>
                <p className={projectStyles["project-skill"]}>Marketing</p>
                <p className={projectStyles["project-skill"]}>Branding</p>

                <p className={projectStyles["project-skill"]}>
                  Print Production
                </p>
              </div>
              <div
                className={`${projectStyles["project-row"]} ${projectStyles["three-col"]}`}
              >
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/calendar-1.png"
                    alt="The month of May from Kelsey Kuno Designs Art Calendar"
                    width={11}
                    height={14}
                    layout="responsive"
                  />
                </div>
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/calendar-2.png"
                    alt="The month of June from Kelsey Kuno Designs Art Calendar"
                    width={11}
                    height={14}
                    layout="responsive"
                  />
                </div>
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/calendar-3.png"
                    alt="The month of July from Kelsey Kuno Designs Art Calendar"
                    width={11}
                    height={14}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className={projectStyles["main-wrapper"]}>
            <div className={`${projectStyles["tech-section"]}`}>
              <h5>Technology and Software</h5>
              <ul className={projectStyles["tech-list"]}>
                <li>
                  <span className={projectStyles["tech-title"]}>Figma</span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    Adobe Photoshop
                  </span>
                </li>
                <li>
                  <span className={projectStyles["tech-title"]}>
                    Adobe Lightroom
                  </span>
                </li>
              </ul>
            </div>
            <div className={projectStyles["project-content-wrapper"]}>
              <p className={projectStyles["project-copy"]}>
                I designed a printed calendar that featured an assortment of my
                original oil paintings. I used this as marketing content for my
                artwork. I had a lot of fun with the design itself and also
                being creative with the{" "}
                <a
                  href="https://www.instagram.com/p/DED1s5-s3JH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-link"
                >
                  social media messaging
                </a>
                .
              </p>
              <p className={projectStyles["project-copy"]}>
                I recently relocated to Brooklyn, NY and I wanted to include
                shots of New York in the promotional photos.
              </p>
              <div
                className={`${projectStyles["project-row"]} ${projectStyles["two-col"]}`}
              >
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/ny-calendar-1.jpg"
                    alt="Kelsey Kuno and her promotional calendar in the NY subway"
                    width={3}
                    height={2}
                    layout="responsive"
                  />
                </div>
                <div className={projectStyles["project-col"]}>
                  <Image
                    src="/images/ny-calendar-2.jpg"
                    alt="Kelsey Kuno and her promotional calendar in the NY subway"
                    width={3}
                    height={2}
                    layout="responsive"
                  />
                </div>
              </div>
              <p className={projectStyles["project-copy"]}>
                One key design takeaway I learned from this project is the power
                of restraint. While the final calendar layout is simple and
                features ample negative space, this wasn't the case in my early
                drafts. I initially experimented with more complex type systems
                and grid layouts, but I found these designs to be distracting.
                Through many iterations, I realized that a minimalist approach
                allowed the artwork to shine. The breathing room in the layout
                creates balance and anchors the paintings as the true focal
                point.
              </p>
              <p className={projectStyles["project-copy"]}>
                Figma is undoubtedly an awesome tool for digital projects but
                does it hold up for printed projects? I chose to use Figma over
                InDesign here to see how well Figma would do with the latter.
                The results? Figma passed the test! (With the help of a Figma
                pro plugin.)
              </p>
              <div className={`${projectStyles["project-copy"]} mb-1 mt-2`}>
                <a
                  className="primary-link"
                  href="https://www.figma.com/design/awq3xHbmsTbGPGqBIfJnNw/2025-calendar?node-id=0-1&t=KAoQxLgCvfXGXzAR-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Figma File
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
export default Calendar;
