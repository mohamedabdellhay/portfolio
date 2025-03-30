import SectionHeader from "../SectionHeader";
import "./style.css";
import Project from "./Project";
import { projectsData } from "../../data";

function Projects({ limit }) {
  const projects = projectsData.slice(0, limit);
  return (
    <>
      {projects.map((project, index) => (
        <Project
          key={index}
          img={project.img}
          title={project.title}
          description={project.description}
          tags={project.tags}
          links={project.links}
        />
      ))}
    </>
  );
}

function RenderProjects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <SectionHeader title="Projects" />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href="/projects" className="view-all">
              View all ~~&gt;
            </a>
          </div>
        </div>

        <div className="projects-grid">
          <Projects limit={3} />
        </div>
      </div>
    </section>
  );
}

export { Projects, RenderProjects };
