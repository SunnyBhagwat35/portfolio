import { experience } from "../data.js";
import useReveal from "./useReveal.js";

/**
 * Derives a stable, fake 7-char "commit hash" from a string so each
 * entry gets a consistent hash without storing one in data.js.
 */
function fakeHash(input) {
  let h = 0;
  const str = String(input || "");
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h.toString(16).padStart(7, "0").slice(0, 7);
}

export default function Experience() {
  const ref = useReveal();

  return (
    <section className="section" id="experience">
      <div className="container reveal" ref={ref}>
        <div className="section-heading">
          <span className="hash" aria-hidden="true">
            03
          </span>
          <h2>Experience</h2>
        </div>

        <div className="gitlog">
          {experience.map((job) => (
            <div className="commit" key={`${job.company}-${job.period}`}>
              <div className="commit-meta">
                <span className="commit-hash">
                  {fakeHash(job.role + job.company)}
                </span>
                <span>{job.period}</span>
              </div>
              <h3 className="commit-role">{job.role}</h3>
              <p className="commit-company">{job.company}</p>
              <ul className="commit-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
