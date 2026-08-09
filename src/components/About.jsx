import { about } from "../data.js";
import useReveal from "./useReveal.js";

export default function About() {
  const ref = useReveal();

  return (
    <section className="section" id="about">
      <div className="container reveal" ref={ref}>
        <div className="section-heading">
          <span className="hash" aria-hidden="true">
            01
          </span>
          <h2>About</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div>
            {about.skills.map((group) => (
              <div className="skill-group" key={group.group}>
                <h3>{group.group}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
