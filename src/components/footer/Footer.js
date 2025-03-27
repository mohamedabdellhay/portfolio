import "./style.css";
// import Logo from "../logo";
import { Logo, Github, Email, LinkedIn } from "../icon";

export default function Footer() {
  return (
    <footer className="margin-top-20">
      <div className="line"></div>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div style={{ display: "flex", gap: "30px" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span>
                        <Logo />
                      </span>
                      <span>Abdellhay</span>
                    </div>
                    <div>
                      <a
                        href="mailto:mohamedabdellhay1@gmail.com"
                        className="color-grey"
                      >
                        mohamedabdellhay1@gmail.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <p>Web designer and front-end developer</p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div>
                  <h3>Media</h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <Github />
                    </span>
                    <span>
                      <Email />
                    </span>
                    <span>
                      <LinkedIn />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            © Copyright {new Date().getFullYear()}. Made by Abdellhay
          </div>
        </div>
      </div>
    </footer>
  );
}
