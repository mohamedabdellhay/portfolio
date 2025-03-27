import SectionHeader from "../SectionHeader";
import "./style.css";

export default function AboutMe() {
  return (
    <section id="about-me" className="margin-top-20 container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <SectionHeader title="about-me" />
        <div></div>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
        className="margin-top-20"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontSize: "1.2rem",
            fontWeight: "400",
            lineHeight: "26px",
          }}
        >
          <p className="color-grey">Hello, i’m Abdellhay!</p>
          <p className="color-grey">
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
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
          <p
            className="padding-10 border-primary "
            style={{ display: "inline", width: "fit-content" }}
          >
            <a href="about-me">Read More {"->"}</a>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            src="./images/Group 50.png"
            alt="mg"
            style={{ maxHeight: "500px", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
