import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles["about-wrapper"]}>
      <section className="container section-gap">
        <div className={styles["hero-container"]}>
          <div className={styles.hero__title}>
            <h1>Here is something about me.</h1>
          </div>
          <div className={styles["hero-img-wrapper"]}>
            <Image
              src="/images/placeholder.png"
              alt="Handwritten note saying, Hello. My name is Kelsey"
              className={styles["hero__img"]}
              width={800}
              height={200}
              priority
            />
            <div className={styles["hero__link"]}>
              <a className="primary-link" href="#">
                Read More
              </a>
            </div>
          </div>
          <div className={`${styles["about-grid"]} grid`}></div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className={styles["about-content"]}>
            <h5>
              My career journey has been all over the place but at the same
              time, right on time.
            </h5>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean ligula
              aliquam tincidunt nulla convallis mi nisi nunc. Phasellus lobortis
              egestas suscipit lacus lectus fusce dictum. Velit malesuada
              viverra nostra at rhoncus suscipit in. Mollis arcu elit mus,
              vehicula neque blandit neque? Sodales blandit leo viverra taciti
              mus. Pharetra finibus vehicula interdum feugiat vestibulum.
              Sodales mattis natoque etiam potenti amet nec quam.
            </p>
            <p>
              Metus quisque non consequat aliquam placerat. Mattis risus
              facilisis aliquet lorem turpis hendrerit. Enim morbi etiam; odio
              viverra rhoncus bibendum nulla. Condimentum rutrum nam non laoreet
              magnis elementum; molestie ac? Montes magnis enim massa;
              scelerisque suscipit congue pretium. Class volutpat luctus
              penatibus magnis dignissim habitant ad curabitur. Risus quam
              taciti inceptos quis vehicula ullamcorper.
            </p>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean ligula
              aliquam tincidunt nulla convallis mi nisi nunc. Phasellus lobortis
              egestas suscipit lacus lectus fusce dictum. Velit malesuada
              viverra nostra at rhoncus suscipit in. Mollis arcu elit mus,
              vehicula neque blandit neque? Sodales blandit leo viverra taciti
              mus. Pharetra finibus vehicula interdum feugiat vestibulum.
              Sodales mattis natoque etiam potenti amet nec quam.
            </p>
            <p>
              Metus quisque non consequat aliquam placerat. Mattis risus
              facilisis aliquet lorem turpis hendrerit. Enim morbi etiam; odio
              viverra rhoncus bibendum nulla. Condimentum rutrum nam non laoreet
              magnis elementum; molestie ac? Montes magnis enim massa;
              scelerisque suscipit congue pretium. Class volutpat luctus
              penatibus magnis dignissim habitant ad curabitur. Risus quam
              taciti inceptos quis vehicula ullamcorper.
            </p>
          </div>
          <div className={styles["about-skills"]}>
            <ul>
              <li>UX Design</li>
              <li>UX Design</li>
              <li>UX Design</li>
              <li>UX Design</li>
              <li>UX Design</li>
              <li>UX Design</li>
              <li>UX Design</li>
              <li>UX Design</li>
              <li>UX Design</li>
              <li>UX Design</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;
