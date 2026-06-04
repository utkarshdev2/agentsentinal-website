import { useState } from "react";
import { codeSamples } from "../data/constants";

const TABS = ["inspect", "optimize", "stress_test"];

export default function CodeSection() {
  const [activeTab, setActiveTab] = useState("inspect");

  return (
    <section id="code" style={{ paddingTop: 0 }}>
      <div className="section-label">Usage</div>
      <h2>Clean Python API.<br /><span>Three calls.</span></h2>
      <p className="section-desc">
        Integrates with any existing agent workflow — no framework lock-in.
      </p>

      <div className="code-block">
        <div className="code-tabs">
          {TABS.map((tab) => (
            <div
              key={tab}
              className={`code-tab${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}()
            </div>
          ))}
        </div>
        <pre dangerouslySetInnerHTML={{ __html: codeSamples[activeTab] }} />
      </div>
    </section>
  );
}
