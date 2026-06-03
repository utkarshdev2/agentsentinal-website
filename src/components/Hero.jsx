function Terminal() {
  return (
    <div className="terminal">
      <div className="term-header">
        <div className="term-dot" style={{ background: "#EF4444" }} />
        <div className="term-dot" style={{ background: "#F59E0B" }} />
        <div className="term-dot" style={{ background: "#22C55E" }} />
        <span style={{ marginLeft: "0.5rem", fontSize: "0.7rem", color: "var(--muted)" }}>
          sentinel — inspection
        </span>
      </div>
      <div className="term-body">
        <span className="term-line"><span className="t-prompt">$</span> <span className="t-cmd">sentinel inspect ./my_agent.py</span></span>
        <span className="term-line"><span className="t-comment">  Detecting framework... LangGraph ✓</span></span>
        <span className="term-line"><span className="t-comment">  Extracting profile... done</span></span>
        <span className="term-line"><span className="t-comment">  Running 6 analyzers in parallel...</span></span>
        <span className="term-line"> </span>
        <span className="term-line"><span className="t-key">  overall_risk</span>   <span className="t-risk-high">■ HIGH</span></span>
        <span className="term-line"><span className="t-key">  risk_flags</span>    <span className="t-val">4 issues found</span></span>
        <span className="term-line"> </span>
        <span className="term-line"><span className="t-risk-high">  ✗ INJECTION_VULNERABLE</span></span>
        <span className="term-line"><span className="t-risk-high">  ✗ PERSONA_DRIFT</span></span>
        <span className="term-line"><span className="t-risk-med">  ⚠ CONSTRAINT_MISSING</span></span>
        <span className="term-line"><span className="t-risk-med">  ⚠ HALLUCINATION_PRONE</span></span>
        <span className="term-line"> </span>
        <span className="term-line"><span className="t-comment">  Run `sentinel improve` to fix all flags →</span></span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <div className="hero-tag fade-up">Production Readiness Platform</div>
        <h1 className="fade-up delay-1">
          Ship AI agents<br />
          <span>without fear.</span>
        </h1>
        <p className="hero-desc fade-up delay-2">
          Agent Sentinel inspects, hardens, and stress-tests your AI agents before they go live.
          Static analysis, DSPy-powered prompt rewriting, and adversarial stress-testing: in one pipeline.
        </p>
        <div className="hero-actions fade-up delay-3">
          <a
            href="https://github.com/nitin3150/agentsentinel"
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Get Started
          </a>
          <a href="#how-it-works" className="btn-secondary">
            See how it works
          </a>
        </div>
      </div>

      <Terminal />
    </div>
  );
}
