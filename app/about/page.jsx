const AboutPage = () => {
  return (
    <div>
      <h1>This is Heading 1</h1>
      <h2>This is Heading 2</h2>
      <h3>This is Heading 3</h3>
      <h4>This is Heading 4</h4>
      <h5>This is Heading 5</h5>
      <p className="date">This is date</p>
      <p className="sml-title">This is small title</p>
      <div>
        <a className="primary-link" href="#">
          Learn more
        </a>
      </div>
      <button className="primary-btn">Download</button>
      <p>
        This is a paragraph. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Quisquam, pariatur.
      </p>
      <a href="#">A text link by itself</a>
      <ul>
        <li>This is an unordered list.</li>
        <li>Second thing.</li>
        <li>Third thing.</li>
      </ul>
      <strong>Strongly emphasized text</strong>
      <ol>
        <li>This is an ordered list.</li>
        <li>Second thing.</li>
        <li>Third thing.</li>
      </ol>
      <em>Emphasized text</em>
      <blockquote>
        <p>A paragraph inside of a blockquote, said by a famous person.</p>
      </blockquote>

      <figure>
        <img
          src="https://assets.codepen.io/296057/fem-blindfold-475.jpg"
          alt="The three men of Magenta Lime, blindfolded."
        />
        <figcaption>Magenta Lime will rock your world.</figcaption>
      </figure>
    </div>
  );
};
export default AboutPage;
