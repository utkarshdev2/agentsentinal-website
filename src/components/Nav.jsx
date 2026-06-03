import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link className="logo" to="/">
        <span className="logo-bracket">[</span>
        Agent Sentinel
        <span className="logo-bracket">]</span>
      </Link>

      <div className="nav-links">
        <a href="#how-it-works">How it works</a>
        <a href="#risks">Risk Categories</a>
        <a href="#frameworks">Frameworks</a>
        <a href="#install">Quick Start</a>
        <Link to="/docs" style={{ color: "var(--amber)" }}>Docs</Link>
      </div>

      <a
        href="https://github.com/nitin3150/agentsentinel"
        className="nav-cta"
        target="_blank"
        rel="noreferrer"
      >
        GitHub →
      </a>
    </nav>
  );
}
