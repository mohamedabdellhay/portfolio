import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header>
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
            <svg
              width="16"
              height="16"
              viewBox="0 0 288 288"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M216 0H144V72H72H0V144V216V288H72H144V216H216H288V144V72V0H216ZM72 216H144V144H216V72H144V144H72V216Z"
                fill="white"
              />
            </svg>
            <span>Abdellhay</span>
          </div>
        </div>

        {isMobile ? (
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        ) : (
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="works">works</Link>
              </li>
              <li>
                <Link to="/about">about-me</Link>
              </li>
              <li>
                <Link to="/contact">contacts</Link>
              </li>
              <li>EN</li>
            </ul>
          </nav>
        )}

        {isMobile && isMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li>home</li>
              <li>works</li>
              <li>about-me</li>
              <li>contacts</li>
              <li>EN</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
