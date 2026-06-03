const plans = [
  {
    icon: "🔌",
    tag: "Frameworks",
    title: "Broader framework support",
    desc: "Native integrations for other frameworks like CrewAI, Google ADK, and LlamaIndex. No more manual prompt and tool passing. Drop in your agent and go.",
    status: "Coming soon",
  },
  {
    icon: "🏛️",
    tag: "Compliance",
    title: "Deeper compliance checks",
    desc: "Expanded rule sets for HIPAA, SOC2, OWASP, and PII regulations, with detailed remediation guidance for any violations.",
    status: "In research",
  },
  {
    icon: "⚔️",
    tag: "Testing",
    title: "Stronger stress testing",
    desc: "Deeper adversarial testing with multi-turn attack chains, jailbreak simulations, and domain-specific threat modelling.",
    status: "In Progress",
  },
];

const statusColors = {
  "Coming soon": {
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.3)",
    text: "#22c55e",
  },
  "In research": {
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.3)",
    text: "#60a5fa",
  },
  "In Progress": {
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.3)",
    text: "#f59e0b",
  },
};

export default function FuturePlans() {
  return (
    <section id="plans" style={{ paddingTop: 0 }}>
      <div className="section-label">Roadmap</div>
      <h2>
        What's coming
        <br />
        <span>next.</span>
      </h2>
      <p className="section-desc">
        Agent Sentinel is actively evolving. Here's what we're building toward.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5px",
          background: "var(--border)",
        }}
      >
        {plans.map((plan) => {
          const color = statusColors[plan.status];
          return (
            <div key={plan.title} className="op-card">
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {plan.icon}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <div className="op-name">{plan.tag}</div>
                <span
                  style={{
                    fontSize: "0.68rem",
                    padding: "0.2rem 0.6rem",
                    background: color.bg,
                    border: `1px solid ${color.border}`,
                    color: color.text,
                    letterSpacing: "0.06em",
                  }}
                >
                  {plan.status}
                </span>
              </div>
              <div className="op-title">{plan.title}</div>
              <p className="op-desc">{plan.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
