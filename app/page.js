import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="container">
      <section className={`grid ${styles.hero}`}>
        <div>
          <Image
            src="/images/website-greeting.svg"
            alt="Handwritten note saying, Hello. My name is Kelsey"
            width={180}
            height={37}
            priority
          />
          <h2>I am a creative developer amet, consectetuer adipiscing elit.</h2>
          <button className="primary-btn">Download CV</button>
        </div>
        <h1>Creative Developer</h1>
      </section>
      <section>
        <div className="row">
          <h4>Blog</h4>
          <button className="primary-btn">See all posts</button>
        </div>
        <div className="row">
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
            <a className="primary-link" href="#">
              Read More
            </a>
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
            <a className="primary-link" href="#">
              Read More
            </a>
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
            <a className="primary-link" href="#">
              Read More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
