import { frameworks } from "../data/constants";

function FrameworkCard({ name, status }) {
  return (
    <div className="fw-card">
      <div className="fw-name">{name}</div>
      <span className={`fw-status ${status}`}>
        {status === "supported" ? "✓ Supported" : "Coming Soon"}
      </span>
    </div>
  );
}

export default function Frameworks() {
  return (
    <section id="frameworks" style={{ paddingTop: 0 }}>
      <div className="section-label">Compatibility</div>
      <h2>Works where<br /><span>you build.</span></h2>
      <p className="section-desc">
        Native support for LangGraph. Pass{" "}
        <code style={{ color: "var(--amber)" }}>system_prompt</code> and{" "}
        <code style={{ color: "var(--amber)" }}>tool_definitions</code>{" "}
        explicitly for any other framework.
      </p>
      <div className="fw-grid">
        {frameworks.map((fw) => (
          <FrameworkCard key={fw.name} {...fw} />
        ))}
      </div>
    </section>
  );
}
