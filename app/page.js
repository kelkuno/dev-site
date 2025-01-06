import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <section className={`grid ${styles.hero}`}>
        <div>
          <h2>I am a creative developer amet, consectetuer adipiscing elit.</h2>
          <Link
            href="/kelsey-kuno-resume-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            See CV
          </Link>
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
    </main>
  );
}
