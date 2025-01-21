import projectStyles from "../project.module.css";
import Image from "next/image";
import Link from "next/link";

const DoesThisAgeWell = () => {
  return (
    <div>
      <div className="container">
        <main>
          <section className={`${projectStyles["hero-wrapper"]} `}>
            <div className={projectStyles["hero-container"]}>
              <h1>Does This Age Well?</h1>
              <p className="lg-title">
                Playful podcast branding for a witty comedian podcast.
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
                  src="/images/podcast-media.jpeg"
                  alt="Does this Age Well? branding shown across a poster and tee shirt design."
                  width={1500}
                  height={782}
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
                I created branding for local comedians’ podcast called, “Does
                this age well?”. The podcast featured three local comedians who
                would humorously discuss how different types of media—old
                movies, books, music—have aged.
              </p>
              <p className={projectStyles["project-copy"]}>
                I knew these designs had to have unapologetic character to
                reflect the tenor of the show. Here’s my mood board that guided
                the design:
              </p>
              <div className={`${projectStyles["project-img"]} mt-4 mb-4`}>
                <Image
                  src="/images/podcast-mood-board.jpeg"
                  alt="Podcast Mood Board"
                  width={1500}
                  height={883}
                  layout="responsive"
                  priority
                />
              </div>
              <p className={projectStyles["project-copy"]}>
                I decided to draw the hosts because their personalities make the
                show quite unique. For the logo, I aimed for boldness to mirror
                the hosts' comedic riffs and I incorporated a nod to the passage
                of time with the angled ‘age’ and its trailing black shadow.
              </p>
              <div className={`${projectStyles["project-img"]} mt-4 mb-4`}>
                <Image
                  src="/images/podcast-illustrations.jpeg"
                  alt="Illustrated faces of podcast hosts."
                  width={1500}
                  height={623}
                  layout="responsive"
                  priority
                />
              </div>
              <p className={projectStyles["project-copy"]}>
                Here are some of my formal branding decisions. I wanted the
                typography to be bold and loud like the comedians. I set the
                color palette to be warm and friendly like the tone of the show.
              </p>
              <div className={`${projectStyles["project-img"]} mt-4 mb-4`}>
                <Image
                  src="/images/podcast-type.jpeg"
                  alt="Podcast typography system"
                  width={1500}
                  height={686}
                  layout="responsive"
                  priority
                />
              </div>
              <p className={projectStyles["project-copy"]}>
                And from there, I designed how I wanted the podcast to look
                across a variety of mediums.
              </p>
              <div className={`${projectStyles["project-img"]} mt-4 mb-4`}>
                <Image
                  src="/images/podcast-socials.jpeg"
                  alt="Podcast social media branding"
                  width={1500}
                  height={556}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={`${projectStyles["project-img"]} mt-4 mb-4`}>
                <Image
                  src="/images/podcast-socials-2.jpeg"
                  alt="Podcast Mood Board"
                  width={1500}
                  height={727}
                  layout="responsive"
                  priority
                />
              </div>

              <p className={projectStyles["project-copy"]}>
                Lastly, I created an opening animation for this podcast. Check
                it out below.
              </p>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/367620294?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Does this Age Well podcast intro"
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
export default DoesThisAgeWell;
