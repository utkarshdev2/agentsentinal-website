export const risks = [
  {
    icon: "💉",
    name: "injection_vulnerable",
    desc: "System prompt can be overridden by crafted user input",
  },
  {
    icon: "🚧",
    name: "constraint_missing",
    desc: "No explicit do/don't boundaries defined for the agent",
  },
  {
    icon: "🌫️",
    name: "ambiguous_instructions",
    desc: "Vague phrasing that allows dangerous misinterpretation",
  },
  {
    icon: "🌐",
    name: "scope_overflow",
    desc: "Agent can act beyond its intended operational domain",
  },
  {
    icon: "🔧",
    name: "tool_quality_low",
    desc: "Tools lack descriptions, typed params, or error handling",
  },
  {
    icon: "🎭",
    name: "persona_drift",
    desc: "Persona not anchored — model can be role-played out of it",
  },
  {
    icon: "🧠",
    name: "memory_risk",
    desc: "Memory pattern may leak sensitive data across sessions",
  },
  {
    icon: "🌀",
    name: "hallucination_prone",
    desc: "No grounding or citation requirements in place",
  },
  {
    icon: "📋",
    name: "policy_violation",
    desc: "Prompt or tools conflict with your supplied policy doc",
  },
];

export const frameworks = [
  { name: "LangGraph/LangChain", status: "supported" },
  { name: "CrewAI", status: "coming-soon" },
  { name: "Google ADK", status: "coming-soon" },
  { name: "LlamaIndex", status: "coming-soon" },
];

export const flowNodes = [
  { icon: "🤖", title: "Your Agent", sub: "Any framework\nraw or compiled" },
  {
    icon: "🔍",
    title: "AgentIntake",
    sub: "Framework detection\nprofile extraction",
  },
  {
    icon: "🧪",
    title: "InspectorAgent",
    sub: "6 parallel analyzers\nrisk scoring",
  },
  { icon: "✍️", title: "Optimizer", sub: "DSPy rewrites\nevery flagged risk" },
  {
    icon: "⚔️",
    title: "TestAgent",
    sub: "Adversarial campaigns\nmultithreaded",
  },
  { icon: "📄", title: "Audit Report", sub: "audit_report.json\n+ .md" },
];

export const operations = [
  {
    num: "01",
    title: "Inspect",
    desc: "Extracts system prompt, tools, memory, and framework structure. Six analyzers run in parallel — static checks, semantic analysis, and policy compliance.",
    tags: [],
  },
  {
    num: "02",
    title: "Optimize",
    desc: "Takes the risk profile and rewrites system prompt + tool definitions. Sequential fixes for injection and persona drift run first; the rest run in parallel.",
    tags: [],
  },
  {
    num: "03",
    title: "Test",
    desc: "Generates adversarial prompts targeting every risk flag, fires them against the live agent multithreaded, and scores each response for policy compliance.",
    tags: [],
  },
];

export const stats = [
  { num: "6", label: "Parallel Analyzers" },
  { num: "9", label: "Risk Categories" },
  { num: "5", label: "Frameworks" },
  { num: "3", label: "Pipeline Stages" },
];

export const installCommands = [
  "git clone https://github.com/nitin3150/agentsentinel.git",
  "cd agentsentinel",
  "python -m venv .venv && source .venv/bin/activate",
  "pip install -r requirements.txt",
  "cp .env.example .env   # set GROQ_API_KEY + OPENROUTER_API_KEY",
];

export const codeSamples = {
  inspect: `<span class="cm"># Inspect your agent for risk flags</span>
<span class="kw">from</span> agentsentinel.sentinel <span class="kw">import</span> AgentSentinel

sentinel = <span class="fn">AgentSentinel</span>()
profile = sentinel.<span class="fn">inspect</span>(
    agent,                          <span class="cm"># compiled LangGraph graph</span>
    system_prompt=<span class="str">"..."</span>,
    policies=<span class="str">"sample_policies.pdf"</span>,
)

<span class="fn">print</span>(profile.overall_risk)     <span class="cm"># low / medium / high</span>
<span class="fn">print</span>(profile.risk_flags)        <span class="cm"># list of RiskFlag objects</span>`,

  improve: `<span class="cm"># Rewrite the prompt to fix every flagged risk</span>
result = sentinel.<span class="fn">improve</span>(
    profile,
    policies=<span class="str">"sample_policies.pdf"</span>
)

<span class="fn">print</span>(result.improved_prompt)   <span class="cm"># hardened system prompt</span>
<span class="fn">print</span>(result.change_log)         <span class="cm"># what changed and why</span>`,

  test: `<span class="cm"># Adversarial stress test</span>
<span class="kw">from</span> agentsentinel.core.agents.tester.tester <span class="kw">import</span> TestAgent

tester = <span class="fn">TestAgent</span>()
report = tester.<span class="fn">test</span>(agent, profile, policies=<span class="str">"..."</span>)

<span class="fn">print</span>(report[<span class="str">"summary"</span>])
<span class="cm"># { pass_rate_pct: 94, passed: 47, failed: 3, total: 50 }</span>`,
};
