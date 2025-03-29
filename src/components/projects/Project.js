import "./style.css";
export default function Project({ img, title, description, tags, links }) {
  return (
    <div className="project border-grey">
      <div>
        <img src={img} alt="test" style={{ width: "100%", display: "block" }} />
      </div>
      <div className="border-grey padding-10">
        <div
          style={{
            fontSize: "20px",
            fontWeight: "300",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            color: "grey",
          }}
        >
          {tags.map((tag, index) => (
            <span key={`${index}-${tag}`}>
              <p className="color-grey">{tag}</p>
            </span>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h3
            style={{
              fontWeight: "400",
              fontSize: "24px",
              marginBottom: "15px",
              padding: "15px 0 0 15px",
            }}
          >
            {title}
          </h3>
        </div>
        <div style={{ margin: "15px 15px" }}>
          <p className="color-grey">{description}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "30px 15px",
          }}
        >
          {links.map((link, index) => (
            <div key={`${index}-${link}`}>
              <a className="color-grey border-grey padding-10" href="/link">
                {link}
              </a>
            </div>
          ))}
          {/* <span className="color-grey">Server</span> */}
        </div>
      </div>
    </div>
  );
}
