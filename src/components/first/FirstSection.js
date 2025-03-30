import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
// import { useMediaQuery } from "react-responsive";

export default function FirstSection() {
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="first-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>
            Abdellhay is a <span className="highlight">web designer</span> and{" "}
            <span className="highlight">front-end developer</span>
          </h1>
          <p className="subtitle color-grey">
            He crafts responsive websites where technologies meet creativity
          </p>
          {!isMobile && (
            <button className="cta-button">
              <Link to="contact">Contact me!!</Link>
            </button>
          )}
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
