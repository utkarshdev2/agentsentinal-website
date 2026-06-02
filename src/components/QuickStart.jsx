import { installCommands } from "../data/constants";

export default function QuickStart() {
  return (
    <section id="install" style={{ paddingTop: 0 }}>
      <div className="section-label">Quick Start</div>
      <h2>Up and running<br /><span>in minutes.</span></h2>
      <p className="section-desc">
        Clone, install, configure your API keys, and run the pipeline.
      </p>

      <div className="install-block">
        {installCommands.map((cmd, i) => (
          <div key={i} className="install-line">
            <span className="install-prompt">$</span>
            <span>{cmd}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="https://github.com/nitin3150/agentsentinel"
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
        <a
          href="https://github.com/nitin3150/agentsentinel/blob/main/README.md"
          className="btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          Read the Docs
        </a>
      </div>
    </section>
  );
}
