import SectionHeader from "../SectionHeader";
import "./style.css";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="container">
      <div style={{ margin: "100px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            marginBottom: "20px",
          }}
        >
          <div>
            <SectionHeader title="Projects" />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href="/projects">view all</a>
          </div>
        </div>

        {/*  */}
        <div className="projects">
          <Project
            img="./images/Rectangle 22.jpg"
            title="ChertNodes"
            description="Minecraft servers hosting platform"
            tags={["Server", "Test"]}
            links={["Server", "cached"]}
          />

          <Project
            img="./images/Rectangle 22.jpg"
            title="ChertNodes"
            description="Minecraft servers hosting platform"
            tags={["Server", "Test"]}
            links={["Server", "cached"]}
          />

          <Project
            img="./images/Rectangle 22.jpg"
            title="ChertNodes"
            description="Minecraft servers hosting platform"
            tags={["Server", "Test"]}
            links={["Server", "cached"]}
          />
        </div>
      </div>
    </section>
  );
}
