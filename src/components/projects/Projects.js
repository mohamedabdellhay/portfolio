import SectionHeader from "../SectionHeader";
import "./style.css";
import Project from "./Project";

export default function Projects() {
  const projects = [
    {
      img: "./images/Rectangle 22.jpg",
      title: "ChertNodes",
      description: "Minecraft servers hosting platform",
      tags: ["HTML", "SCSS", "Python", "Flask"],
      links: ["Live <~>", "Cached >= "],
    },
    {
      img: "./images/Rectangle 22.jpg",
      title: "ProtectX",
      description: "Application for increasing privacy and security",
      tags: ["React", "Express", "MongoDB", "Node.js"],
      links: ["Live <~>", "Cached >= "],
    },
    {
      img: "./images/Rectangle 22.jpg",
      title: "Kahoot Answers",
      description: "Get answers to your kahoot quiz",
      tags: ["Vue", "CSS", "JavaScript"],
      links: ["Live <~>", "Cached >= "],
    },
  ];

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
        </div>
      </div>
    </section>
  );
}
