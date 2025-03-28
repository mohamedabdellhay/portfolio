import SectionHeader from "../SectionHeader";
import "./style.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "Java", "C#", "PHP"],
    },
    {
      title: "Frameworks",
      skills: ["React", "Vue", "Angular", "Node.js", "Express", "Django"],
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Webpack", "Figma", "Postman", "Jest"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      title: "Cloud",
      skills: ["AWS", "Azure", "GCP", "Heroku", "Netlify"],
    },
    {
      title: "Other",
      skills: ["GraphQL", "REST", "CI/CD", "Agile", "Scrum"],
    },
  ];

  return (
    <div className="container">
      <section className="skills-section">
        <div className="skills-header">
          <SectionHeader title="Skills" />
        </div>

        <div className="skills-container">
          <div className="skills-graphic">
            <img
              src="./images/Group 36.png"
              alt="Skills visualization"
              loading="lazy"
            />
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
