import { projects } from "../data.js";
import useReveal from "./useReveal.js";

export default function Projects() {
  const ref = useReveal();

  return (
    <section className="section" id="projects">
      <div className="container reveal" ref={ref}>
        <div className="section-heading">
          <span className="hash" aria-hidden="true">
            02
          </span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <h3>{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live ↗
                  </a>
                )}
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
