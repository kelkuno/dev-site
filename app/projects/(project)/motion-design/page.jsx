import projectStyles from "../project.module.css";
import Image from "next/image";
import Link from "next/link";

const MotionDesign = () => {
  return (
    <div>
      <div className="container">
        <main>
          <section className={`${projectStyles["hero-wrapper"]} `}>
            <div className={projectStyles["hero-container"]}>
              <h1>Motion Design</h1>
              <p className="lg-title">
                A collection of my animation experiments across the years.
              </p>
              <div className={projectStyles["skill-wrapper"]}>
                <p className={projectStyles["project-skill"]}>
                  Creative Direction
                </p>
                <p className={projectStyles["project-skill"]}>Illustration</p>
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
                  src="https://player.vimeo.com/video/123790586?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Drifting"
                  className={projectStyles["project-video"]}
                ></iframe>
              </div>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/364649087?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Crazy 8"
                  className={projectStyles["project-video"]}
                ></iframe>
              </div>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/358668565?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Moonlight Tea Party"
                  className={projectStyles["project-video"]}
                ></iframe>
              </div>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/238877067?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="NBA15_Mar15_1080"
                  className={projectStyles["project-video"]}
                ></iframe>
              </div>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/81027547?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Louise"
                  className={projectStyles["project-video"]}
                ></iframe>
              </div>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/264355947?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Animation Experiments"
                  className={projectStyles["project-video"]}
                ></iframe>
              </div>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/101801055?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Transcendent Talent Act 1 Scene 2"
                  className={projectStyles["project-video"]}
                ></iframe>
              </div>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/100529777?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="SweePea Rough Sketches"
                  className={projectStyles["project-video"]}
                ></iframe>
              </div>
              <div
                className={`${projectStyles["project-video-block"]} mb-4 mt-4`}
              >
                <iframe
                  src="https://player.vimeo.com/video/125425690?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Ideas that flow."
                  className={projectStyles["project-video"]}
                ></iframe>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default MotionDesign;
