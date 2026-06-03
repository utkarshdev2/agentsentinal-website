export default function Nav() {
  return (
    <nav>
      <a className="logo" href="#">
        <span className="logo-bracket">[</span>
        Agent Sentinel
        <span className="logo-bracket">]</span>
      </a>

      <div className="nav-links">
        <a href="#how-it-works">How it works</a>
        <a href="#risks">Risk Categories</a>
        <a href="#frameworks">Frameworks</a>
        <a href="#install">Quick Start</a>
        <a href="#future">Roadmap</a>
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
