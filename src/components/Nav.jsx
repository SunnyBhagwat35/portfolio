import { personal } from "../data.js";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          <span className="tilde">~/</span>
          {personal.handle}
        </a>
        <nav className="nav-links" aria-label="Site sections">
          {links.map((l) => (
            <a key={l.href} className="nav-link" href={l.href}>
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
