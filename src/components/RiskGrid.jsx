import { risks } from "../data/constants";

function RiskCard({ icon, name, desc }) {
  return (
    <div className="risk-card">
      <div className="risk-icon">{icon}</div>
      <div className="risk-name">{name}</div>
      <div className="risk-desc">{desc}</div>
    </div>
  );
}

export default function RiskGrid() {
  return (
    <section id="risks">
      <div className="section-label">Risk Model</div>
      <h2>9 risk categories.<br /><span>All covered.</span></h2>
      <p className="section-desc">
        Every flag is caught, explained, and fixed. From injection surfaces to policy violations.
      </p>
      <div className="risk-grid">
        {risks.map((r) => (
          <RiskCard key={r.name} {...r} />
        ))}
      </div>
    </section>
  );
}
