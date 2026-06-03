import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV = [
  { id: "quickstart",    label: "Quick Start" },
  { id: "configuration", label: "Configuration" },
  { id: "inspect",       label: "inspect()" },
  { id: "optimize",      label: "optimize()" },
  { id: "stress-test",   label: "stress_test()" },
  { id: "audit",         label: "audit()" },
  { id: "risk-cats",     label: "Risk Categories" },
  { id: "compliance",    label: "Compliance Standards" },
  { id: "frameworks",    label: "Supported Frameworks" },
  { id: "rate-limits",   label: "Rate Limits & Errors" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Section({ id, label, children }) {
  return (
    <div className="docs-section" id={id}>
      <div className="docs-section-label">{label}</div>
      {children}
    </div>
  );
}

function Code({ children, lang = "python" }) {
  return (
    <div className="docs-code-block">
      <div className="docs-code-header">{lang}</div>
      <pre>{children}</pre>
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead>
          <tr>{headers.map(h => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Param({ name, type, required, desc }) {
  return (
    <div className="docs-param">
      <div className="docs-param-head">
        <span className="docs-param-name">{name}</span>
        <span className="docs-param-type">{type}</span>
        {required && <span className="docs-param-req">required</span>}
      </div>
      <div className="docs-param-desc">{desc}</div>
    </div>
  );
}

export default function DocsPage() {
  const [active, setActive] = useState("quickstart");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="grid-bg" />
      <div className="docs-layout">
        {/* ── Top nav ── */}
        <nav>
          <Link className="logo" to="/">
            <span className="logo-bracket">[</span>Agent Sentinel<span className="logo-bracket">]</span>
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <a href="#quickstart" onClick={() => scrollTo("quickstart")}>Quick Start</a>
            <a href="#inspect" onClick={() => scrollTo("inspect")}>API</a>
          </div>
          <a href="https://github.com/nitin3150/agentsentinel" className="nav-cta" target="_blank" rel="noreferrer">
            GitHub →
          </a>
        </nav>

        <div className="docs-body">
          {/* ── Sidebar ── */}
          <aside className="docs-sidebar">
            <div className="docs-sidebar-title">Documentation</div>
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                className={`docs-sidebar-link ${active === id ? "active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </aside>

          {/* ── Content ── */}
          <main className="docs-content">

            {/* QUICK START */}
            <Section id="quickstart" label="Quick Start">
              <h2>Get up and running<br /><span>in minutes.</span></h2>
              <p className="docs-prose">Clone the repo, install dependencies, set two environment variables, and run.</p>
              <Code lang="bash">{`git clone https://github.com/nitin3150/agentsentinel.git
cd agentsentinal
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env`}</Code>
              <Code lang="python">{`from agentsentinel.sentinel import AgentSentinel

sentinel = AgentSentinel()
profile  = sentinel.inspect(your_agent)

print(profile.overall_risk)    # low / medium / high
print(profile.risk_flags)`}</Code>
            </Section>

            {/* CONFIGURATION */}
            <Section id="configuration" label="Configuration">
              <h2>Environment<br /><span>Variables.</span></h2>
              <p className="docs-prose">
                Agent Sentinel is <strong>LLM-provider agnostic</strong>. All calls go through{" "}
                <a href="https://docs.litellm.ai" target="_blank" rel="noreferrer" className="docs-link">LiteLLM</a>.
                Set the model string and key — the provider prefix routes automatically.
              </p>
              <Code lang="bash">{`# Required
LLM_MODEL=groq/llama-3.3-70b-versatile
LLM_API_KEY=your_api_key_here

# Timeouts (optional, seconds)
LLM_TIMEOUT=30
POLICY_TIMEOUT=30
SEMANTIC_TIMEOUT=30
COMPLIANCE_TIMEOUT=30

# Behaviour flags (optional)
AGENTSENTINEL_LOG_PROMPTS=false  # log full prompts (off by default)
AGENTSENTINEL_SAFE_MODE=true     # disable dynamic imports in prod`}</Code>
              <p className="docs-prose" style={{ marginTop: "1.5rem" }}>Supported providers:</p>
              <Table
                headers={["Provider", "LLM_MODEL value", "Key env var"]}
                rows={[
                  ["Groq",          "groq/llama-3.3-70b-versatile",           "LLM_API_KEY or GROQ_API_KEY"],
                  ["OpenAI",        "openai/gpt-4o",                          "LLM_API_KEY or OPENAI_API_KEY"],
                  ["Anthropic",     "anthropic/claude-sonnet-4-6",            "LLM_API_KEY or ANTHROPIC_API_KEY"],
                  ["OpenRouter",    "openrouter/anthropic/claude-3-5-sonnet", "LLM_API_KEY or OPENROUTER_API_KEY"],
                  ["Ollama (local)","ollama/llama3",                          "(no key needed)"],
                ]}
              />
              <p className="docs-prose" style={{ marginTop: "1.5rem" }}>
                Pass a custom LLM with fallbacks at construction time:
              </p>
              <Code lang="python">{`sentinel = AgentSentinel(providers=[
    {"model": "openai/gpt-4o",              "api_key": "sk-..."},
    {"model": "groq/llama-3.3-70b-versatile","api_key": "gsk_..."},  # fallback
])`}</Code>
            </Section>

            {/* INSPECT */}
            <Section id="inspect" label="API — inspect()">
              <h2><span>inspect()</span><br />Risk analysis.</h2>
              <p className="docs-prose">
                Extracts the agent's system prompt and tools, runs four static analyzers, then fires three
                LLM-powered analyzers concurrently. Returns an <code>InspectedAgentProfile</code>.
              </p>
              <Code lang="python">{`profile = sentinel.inspect(
    agent,                           # live agent object or None
    source="path/to/agent.py",       # source file (alternative to live object)
    system_prompt="...",             # optional override
    tools=[{"name": "..."}],         # optional explicit tool definitions
    policies="policy.pdf",           # optional policy PDF path
    compliance=["hipaa", "soc2"],    # optional — or ["All"]
    source_code="...",               # optional raw source string
)`}</Code>
              <div className="docs-params-label">Parameters</div>
              <Param name="agent"        type="Any"        required={false} desc="Live agent object (LangGraph compiled graph, CrewAI crew, etc.)." />
              <Param name="source"       type="str | Path" required={false} desc="Path to agent source file. Alternative to live object." />
              <Param name="system_prompt"type="str"        required={false} desc="Override the extracted system prompt." />
              <Param name="tools"        type="list[dict]" required={false} desc="Explicit tool definitions. Overrides auto-extracted tools." />
              <Param name="policies"     type="str"        required={false} desc="Path to a policy PDF. Enables policy compliance analysis." />
              <Param name="compliance"   type="list[str]"  required={false} desc='Standards to check. One or more of: "hipaa", "soc2", "owasp", "pii", or ["All"].' />
              <Param name="source_code"  type="str"        required={false} desc="Raw source code string for static analysis." />
              <div className="docs-params-label" style={{ marginTop: "1.5rem" }}>Analyzers run</div>
              <Table
                headers={["Analyzer", "Type", "What it checks"]}
                rows={[
                  ["prompt",      "static",     "Ambiguous phrases, missing constraints, injection surface"],
                  ["tools",       "static",     "Quality score per tool, missing fields"],
                  ["memory",      "static",     "Memory backend type, TTL, scope, data-leak risks"],
                  ["framework",   "static",     "Graph depth, loops, conditional edges, human-in-loop"],
                  ["semantic",    "LLM",        "Persona clarity, scope definition, tone, hallucination risk"],
                  ["policy",      "LLM",        "Violations against the supplied policy PDF"],
                  ["compliance",  "LLM + rules","HIPAA / SOC2 / OWASP LLM Top 10 / PII rules"],
                ]}
              />
              <Code lang="python">{`print(profile.overall_risk)         # "low" | "medium" | "high"
print(profile.risk_flags)           # list[RiskFlag]
print(profile.estimated_baseline_score)
print(profile.compliance_results)   # per-standard PASS/FAIL + violations
print(profile.policy_violations)    # list[PolicyViolation]`}</Code>
            </Section>

            {/* OPTIMIZE */}
            <Section id="optimize" label="API — optimize()">
              <h2><span>optimize()</span><br />Prompt rewriting.</h2>
              <p className="docs-prose">
                Rewrites the system prompt and tool definitions to fix every flagged risk using
                DSPy <code>ChainOfThought</code> signatures. Sequential fixes run first (injection → persona),
                then remaining fixes run in parallel and are merged.
              </p>
              <Code lang="python">{`result = sentinel.optimize(
    profile,                      # InspectedAgentProfile from inspect()
    policies="policy.pdf",        # optional — used to ground constraint fixes
)

print(result.improved_prompt)
print(result.improved_tool_definitions)
print(result.change_log)          # list of ChangeLogEntry
print(result.policy_violations)   # any remaining violations after rewrite
print(result.diff)                # unified diff of original vs improved`}</Code>
              <div className="docs-params-label" style={{ marginTop: "1.5rem" }}>Risk categories fixed</div>
              <Table
                headers={["Category", "Fix applied"]}
                rows={[
                  ["INJECTION_VULNERABLE",   "Adds input-validation guardrails"],
                  ["PERSONA_DRIFT",          "Anchors role and persona"],
                  ["CONSTRAINT_MISSING",     "Adds policy- and regulation-grounded constraints"],
                  ["AMBIGUOUS_INSTRUCTIONS", "Rewrites vague phrases"],
                  ["SCOPE_OVERFLOW",         "Narrows agent boundaries"],
                  ["HALLUCINATION_PRONE",    "Adds grounding and abstention rules"],
                  ["MEMORY_RISK",            "Adds memory-handling constraints"],
                  ["POLICY_VIOLATION",       "Resolves detected policy violations"],
                  ["TOOL_QUALITY_LOW",       "Rewrites low-scoring tool descriptions and parameters"],
                ]}
              />
            </Section>

            {/* STRESS TEST */}
            <Section id="stress-test" label="API — stress_test()">
              <h2><span>stress_test()</span><br />Adversarial testing.</h2>
              <p className="docs-prose">
                Three-step adversarial pipeline. Generates attack prompts, runs them against the live agent,
                and evaluates each response. Rate limit errors are caught — partial results are reported
                rather than crashing.
              </p>
              <Code lang="python">{`report = sentinel.stress_test(
    agent,
    profile,                      # optional — inspects automatically if omitted
    policies="policy.pdf",        # optional
    output_dir="./reports",       # optional — saves JSON + MD report
)

s = report["summary"]
print(s["pass_rate_pct"])         # e.g. 85.0
print(s["passed"], s["failed"], s["skipped"], s["total"])`}</Code>
              <div className="docs-params-label" style={{ marginTop: "1.5rem" }}>Attack categories generated</div>
              <Table
                headers={["Category", "What it tests"]}
                rows={[
                  ["prompt_injection",            "Override system prompt via user message"],
                  ["tool_manipulation",           "Abuse or misuse tool calls"],
                  ["data_exfiltration",           "Extract sensitive information"],
                  ["jailbreak",                   "Bypass content policy"],
                  ["hallucination_induction",     "Force fabricated output"],
                  ["policy_bypass",               "Circumvent company policy constraints"],
                  ["confusion_induction",         "Cause contradictory or incoherent responses"],
                  ["multi_turn_exploitation",     "Exploit state across conversation turns"],
                  ["citation_manipulation",       "Force false citations or references"],
                  ["chain_of_thought_exploitation","Hijack reasoning steps"],
                ]}
              />
              <p className="docs-prose" style={{ marginTop: "1.5rem" }}>
                Output files saved to <code>output_dir</code> when provided:
              </p>
              <Code lang="bash">{`reports/
├── adversarial_prompts.json
├── agent_responses.json
├── audit_report.json
└── audit_report.md`}</Code>
            </Section>

            {/* AUDIT */}
            <Section id="audit" label="API — audit()">
              <h2><span>audit()</span><br />Full automated loop.</h2>
              <p className="docs-prose">
                Runs the complete pipeline with an optimization loop. If the stress test pass rate is below
                <code> pass_threshold</code>, it rewrites the prompt, re-inspects, and tests again —
                up to <code>max_iterations</code> times.
              </p>
              <Code lang="python">{`result = sentinel.audit(
    agent,
    domain="",                       # optional domain hint
    system_prompt="",                # optional system prompt override
    tools=None,                      # optional tool definitions
    policies="policy.pdf",           # optional
    compliance=["hipaa", "soc2"],    # optional — or ["All"]
    pass_threshold=85.0,             # % pass rate to stop iterating (default: 80)
    max_iterations=3,                # max optimize → re-test cycles (default: 3)
)

print(result["profile"])             # final InspectedAgentProfile
print(result["report"]["summary"])   # final stress test report
print(result["iteration"])           # number of optimization cycles run`}</Code>
              <div className="docs-params-label" style={{ marginTop: "1.5rem" }}>Loop behaviour</div>
              <p className="docs-prose">
                The loop runs: <strong>inspect → stress test → (if below threshold) optimize → re-inspect → stress test → …</strong>
                It stops when pass rate meets <code>pass_threshold</code> or <code>max_iterations</code> is reached.
                The final profile always reflects the last optimization cycle.
              </p>
            </Section>

            {/* RISK CATEGORIES */}
            <Section id="risk-cats" label="Risk Categories">
              <h2>Risk<br /><span>Categories.</span></h2>
              <p className="docs-prose">
                Every risk flag has a <code>category</code>, <code>severity</code> (low / medium / high),
                <code> description</code>, and actionable <code>suggestion</code>.
              </p>
              <Table
                headers={["Category", "Description"]}
                rows={[
                  ["injection_vulnerable",   "System prompt can be overridden by user input"],
                  ["constraint_missing",     "No explicit do/don't boundaries defined"],
                  ["ambiguous_instructions", "Vague phrasing that allows misinterpretation"],
                  ["scope_overflow",         "Agent can act beyond its intended domain"],
                  ["tool_quality_low",       "Tools lack descriptions, typed params, or error handling"],
                  ["persona_drift",          "Persona not anchored — model can be role-played out of it"],
                  ["memory_risk",            "Memory pattern may leak data across sessions"],
                  ["hallucination_prone",    "No grounding or abstention requirements"],
                  ["policy_violation",       "Prompt or tools conflict with the supplied policy document"],
                  ["compliance_violation",   "Prompt violates a regulatory compliance rule"],
                ]}
              />
            </Section>

            {/* COMPLIANCE */}
            <Section id="compliance" label="Compliance Standards">
              <h2>Compliance<br /><span>Standards.</span></h2>
              <p className="docs-prose">
                Rule-based checks run first. Ambiguous cases are escalated to LLM for confirmation.
                All standards are checked concurrently.
              </p>
              <Table
                headers={["Standard", "Rules", "What it checks"]}
                rows={[
                  ["hipaa", "5 rules", "PHI handling, minimum necessary access, encryption, audit trails"],
                  ["soc2",  "5 rules", "Data security, access control, audit logging, availability"],
                  ["owasp", "5 rules", "LLM Top 10 2025 — prompt injection, insecure output, data leakage"],
                  ["pii",   "5 rules", "Consent, retention policy, encryption, scope of collection"],
                ]}
              />
              <Code lang="python">{`# Check specific standards
profile = sentinel.inspect(agent, compliance=["hipaa", "soc2"])

# Check all standards at once
profile = sentinel.inspect(agent, compliance=["All"])

# Access results
for std, result in profile.compliance_results.results.items():
    print(std, "PASS" if result.compliant else "FAIL")
    for v in result.violations:
        print(" -", v.rule_id, v.description)`}</Code>
            </Section>

            {/* FRAMEWORKS */}
            <Section id="frameworks" label="Supported Frameworks">
              <h2>Supported<br /><span>Frameworks.</span></h2>
              <Table
                headers={["Framework", "Status", "Notes"]}
                rows={[
                  ["LangGraph",  "Full support",  "Live object + source file detection"],
                  ["LangChain",  "Partial",        "Pass system_prompt and tool_definitions explicitly"],
                  ["CrewAI",     "Demo available", "demo/crewai_agent.py"],
                  ["Google ADK", "Demo available", "demo/google_adk_agent.py"],
                  ["LlamaIndex", "Demo available", "demo/llamaindex_agent.py"],
                ]}
              />
              <p className="docs-prose" style={{ marginTop: "1.5rem" }}>
                For unsupported frameworks, pass <code>system_prompt</code>, <code>tool_definitions</code>,
                and optionally <code>source_code</code> directly to <code>inspect()</code>:
              </p>
              <Code lang="python">{`profile = sentinel.inspect(
    agent=None,
    system_prompt=your_prompt,
    tools=your_tool_defs,
    source_code=your_source,
)`}</Code>
            </Section>

            {/* RATE LIMITS */}
            <Section id="rate-limits" label="Rate Limits & Errors">
              <h2>Rate Limits<br /><span>& Error Handling.</span></h2>
              <p className="docs-prose">
                All LLM calls are wrapped with graceful error handling — rate limits and failures are
                logged as warnings and the pipeline continues with partial results rather than crashing.
              </p>
              <Table
                headers={["Component", "On rate limit / error"]}
                rows={[
                  ["Adversarial prompt generator", "Skips category, stops after 3 consecutive failures"],
                  ["Response evaluator",            "Marks response as skipped (passed=null), stops after 3 consecutive"],
                  ["Semantic / policy / compliance","Returns empty analysis, logs warning"],
                ]}
              />
              <p className="docs-prose" style={{ marginTop: "1.5rem" }}>
                Skipped evaluations appear in the report summary under <code>skipped</code> and are
                excluded from the pass rate calculation:
              </p>
              <Code lang="python">{`s = report["summary"]
# s["skipped"] — evaluations skipped due to LLM errors
# s["pass_rate_pct"] — calculated over (total - skipped) only`}</Code>
            </Section>

          </main>
        </div>
      </div>
    </>
  );
}
