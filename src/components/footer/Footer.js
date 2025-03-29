import "./style.css";
import { Logo, Github, Email, LinkedIn } from "../icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-divider"></div>

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="footer-contact">
                <div className="footer-brand">
                  <Logo />
                  <span>Abdellhay</span>
                </div>
                <a
                  href="mailto:mohamedabdellhay1@gmail.com"
                  className="footer-email"
                >
                  mohamedabdellhay1@gmail.com
                </a>
              </div>
              <p className="footer-description">
                Web designer and front-end developer
              </p>
            </div>

            <div className="footer-media">
              <div>
                <h3 className="media-title">Media</h3>
                <div className="media-icons">
                  <a
                    href="https://github.com/mohamedabdellhay"
                    aria-label="GitHub"
                  >
                    <Github />
                  </a>
                  <a
                    href="mailto:mohamedabdellhay1@gmail.com"
                    aria-label="Email"
                  >
                    <Email />
                  </a>
                  <a
                    href="https://linkedin.com/in/mohamedabdellhay"
                    aria-label="LinkedIn"
                  >
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <div>© Copyright {currentYear}. Made by Abdellhay</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
