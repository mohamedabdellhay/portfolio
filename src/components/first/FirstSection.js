import "./style.css";
// import { useMediaQuery } from "react-responsive";

export default function FirstSection() {
  // const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="first-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>
            Elias is a <span className="highlight">web designer</span> and{" "}
            <span className="highlight">front-end developer</span>
          </h1>
          <p className="subtitle">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="cta-button">Contact me!!</button>
        </div>

        <div className="image-wrapper">
          <div className="logo-decoration">
            <img
              src="/images/first/Logo.png"
              alt="Decoration logo"
              loading="lazy"
            />
          </div>
          <div className="main-image">
            <img
              src="/images/first/Image.png"
              alt="Elias portfolio"
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="dots-decoration">
            <img
              src="/images/first/Dots.png"
              alt="Decoration dots"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
