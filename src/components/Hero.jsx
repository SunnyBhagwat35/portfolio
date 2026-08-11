import { personal, socials } from "../data.js";

function resolveResumeUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  const base = import.meta.env.BASE_URL || "/";
  return base.replace(/\/$/, "") + "/" + url.replace(/^\//, "");
}

export default function Hero() {
  const resumeHref = resolveResumeUrl(personal.resumeUrl);
  return (
    <section className="hero container" id="top">
      {personal.availability && (
        <span className="hero-status">
          <span className="dot" aria-hidden="true" />
          {personal.availability}
        </span>
      )}

      <h1 className="hero-name">{personal.name}</h1>
      <p className="hero-role">
        {personal.role}
        {personal.location ? ` · ${personal.location}` : ""}
      </p>
      <p className="hero-tagline">{personal.tagline}</p>

      <div className="hero-actions" style={{ flexDirection: 'column', alignItems: 'flex-start',}}>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${personal.email}`}>
            Get in touch
          </a>
          {resumeHref && (
            <a
              className="btn btn-ghost"
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          )}
        </div>
        <div className="hero-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
