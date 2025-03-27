import SectionHeader from "../SectionHeader";
import "./style.css";

export default function Skills() {
  return (
    <section className="container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          margin: "0 0 20px",
        }}
      >
        <SectionHeader title="Skills" />
        <div></div>
        <div></div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 70px 2fr" }}>
        <div>
          <img
            src="./images/Group 36.png"
            alt="i"
            style={{ width: "100%", display: "block" }}
          />
        </div>
        <div></div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <div className="color-grey border-grey">
                <div
                  className="padding-10"
                  style={{ borderBottom: "1px solid" }}
                >
                  <h4>Languages</h4>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  className="padding-10"
                >
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>Java</span>
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="color-grey border-grey">
                <div
                  className="padding-10"
                  style={{ borderBottom: "1px solid" }}
                >
                  <h4>Languages</h4>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  className="padding-10"
                >
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>Java</span>
                </div>
              </div>
              <div className="color-grey border-grey">
                <div
                  className="padding-10"
                  style={{ borderBottom: "1px solid" }}
                >
                  <h4>Languages</h4>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  className="padding-10"
                >
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>Java</span>
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="color-grey border-grey">
                <div
                  className="padding-10"
                  style={{ borderBottom: "1px solid" }}
                >
                  <h4>Languages</h4>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  className="padding-10"
                >
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>Java</span>
                </div>
              </div>
              <div className="color-grey border-grey">
                <div
                  className="padding-10"
                  style={{ borderBottom: "1px solid" }}
                >
                  <h4>Languages</h4>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  className="padding-10"
                >
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>Java</span>
                </div>
              </div>
              <div className="color-grey border-grey">
                <div
                  className="padding-10"
                  style={{ borderBottom: "1px solid" }}
                >
                  <h4>Languages</h4>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  className="padding-10"
                >
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>Java</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
