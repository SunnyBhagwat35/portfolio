import { personal, socials } from "../data.js";
import useReveal from "./useReveal.js";

export default function Footer() {
  const ref = useReveal();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container reveal" ref={ref}>
        <h2>Let's build something.</h2>
        <p>
          I'm open to interesting projects, collaborations, and full-time
          roles. The fastest way to reach me is email.
        </p>
        <a className="btn btn-primary" href={`mailto:${personal.email}`}>
          {personal.email}
        </a>

        <div className="footer-bottom">
          <span>
            © {year} {personal.name}
          </span>
          <span>
            {socials.map((s, i) => (
              <span key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
                {i < socials.length - 1 ? "  ·  " : ""}
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
