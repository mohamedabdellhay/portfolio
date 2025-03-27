import "./style.css";

export default function FirstSection() {
  return (
    <div className="first-section container">
      <div>
        <h2 style={{ fontSize: "2.5rem" }}>
          Elias is a <span className="primary-color">web designer</span> and{" "}
          <span className="primary-color">front-end developer</span>
        </h2>
        <p>He crafts responsive websites where technologies meet creativity</p>
        <a href="contact-me">Contact me!!</a>
      </div>
      <div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            <img src="/images/first/Logo.png" alt="logo" />
          </div>
          <div style={{ position: "relative" }}>
            <img
              src="/images/first/Image.png"
              alt="imag"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ position: "absolute", bottom: "0px", right: "0" }}>
            <img src="/images/first/Dots.png" alt="Dots" />
          </div>
        </div>
      </div>
    </div>
  );
}
