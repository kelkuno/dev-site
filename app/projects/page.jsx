import styles from "./projects.module.css";
import Image from "next/image";

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
            <Image
              src="/images/placeholder.png"
              alt="Handwritten note saying, Hello. My name is Kelsey"
              width={400}
              height={200}
              priority
            />
            <p className="date">Development</p>
            <h5>Photo Palette Project</h5>
            <div>
              <a className="primary-link" href="/projects/photo-palette">
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
        </div>
      </section>
    </div>
  );
};
export default ProjectPage;
