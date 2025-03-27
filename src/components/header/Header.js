import "./style.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 288 288"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M216 0H144V72H72H0V144V216V288H72H144V216H216H288V144V72V0H216ZM72 216H144V144H216V72H144V144H72V216Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>Abdellhay</span>
            </div>
          </div>
          <div>
            <ul>
              <li>home</li>
              <li>works</li>
              <li>about-me</li>
              <li>contacts</li>
              <li>EN</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
