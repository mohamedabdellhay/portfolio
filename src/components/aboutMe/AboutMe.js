import SectionHeader from "../SectionHeader";
import "./style.css";

export default function AboutMe() {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me-header">
        <SectionHeader title="about-me" />
      </div>

      <div className="about-me-content">
        <div className="about-me-text">
          <p className="color-grey">Hello, i'm Abdellhay!</p>
          <p className="color-grey">
            I'm a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p className="color-grey">
            I am a software engineer with a passion for web development and a
            love for learning. I am a self-taught developer with a background in
            computer science and a passion for learning new technologies. I have
            experience working with JavaScript, React, Node.js, and MongoDB. I
            am always looking for new challenges and opportunities to grow as a
            developer.
          </p>
          <p className="color-grey">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <div className="read-more-link">
            <a href="about-me">Read More {"->"}</a>
          </div>
        </div>

        <div className="about-me-image">
          <img src="./images/Group 50.png" alt="Abdellhay" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
