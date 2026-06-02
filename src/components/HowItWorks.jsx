import { flowNodes, operations } from "../data/constants";
import WorkflowDiagram from "./WorkflowDiagram";

function PipelineFlow() {
  return (
    <div className="flow-wrap" style={{ marginBottom: "3rem" }}>
      <div className="flow">
        {flowNodes.map((node, i) => (
          <div key={i} className="flow-node">
            <div className="flow-node-icon">{node.icon}</div>
            <div className="flow-node-title">{node.title}</div>
            <div className="flow-node-sub" style={{ whiteSpace: "pre-line" }}>
              {node.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OperationCard({ num, fn, title, desc}) {
  return (
    <div className="op-card">
      <div className="op-num">{num}</div>
      <div className="op-name">{fn}</div>
      <div className="op-title">{title}</div>
      <p className="op-desc">{desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="section-label">Pipeline</div>
      <h2>Three operations.<br /><span>One hardened agent.</span></h2>
      <p className="section-desc">
        A deterministic, auditable pipeline that takes your raw agent and returns one that's been
        inspected, improved, and adversarially verified.
      </p>

      <WorkflowDiagram />

      <div className="ops-grid">
        {operations.map((op) => (
          <OperationCard key={op.num} {...op} />
        ))}
      </div>
    </section>
  );
}
