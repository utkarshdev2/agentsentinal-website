export default function WorkflowDiagram() {
  return (
    <svg width="90%" viewBox="0 0 680 520" role="img">
      <title>Agent Sentinel core workflow diagram</title>
      <desc>
        Landscape flowchart showing the Agent Sentinel pipeline from source file
        through inspection, testing, improvement, and final audit report.
      </desc>
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="context-stroke"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </marker>
      </defs>

      {/* Row 1 */}
      <g>
        <rect
          x="20"
          y="30"
          width="112"
          height="52"
          rx="4"
          fill="var(--bg3)"
          stroke="var(--border)"
          strokeWidth="0.5"
        />
        <text
          fontFamily="var(--font-head)"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
          x="76"
          y="52"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Your agent
        </text>
        <text
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--muted)"
          x="76"
          y="68"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Source file
        </text>
      </g>
      <line
        x1="132"
        y1="56"
        x2="156"
        y2="56"
        stroke="var(--muted)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      <g>
        <rect
          x="156"
          y="30"
          width="130"
          height="52"
          rx="4"
          fill="rgba(99,102,241,0.15)"
          stroke="rgba(99,102,241,0.4)"
          strokeWidth="0.5"
        />
        <text
          fontFamily="var(--font-head)"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
          x="221"
          y="52"
          textAnchor="middle"
          dominantBaseline="central"
        >
          AgentIntake
        </text>
        <text
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--muted)"
          x="221"
          y="68"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Framework detection
        </text>
      </g>
      <line
        x1="286"
        y1="56"
        x2="310"
        y2="56"
        stroke="var(--muted)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      <g>
        <rect
          x="310"
          y="30"
          width="146"
          height="60"
          rx="4"
          fill="rgba(99,102,241,0.15)"
          stroke="rgba(99,102,241,0.4)"
          strokeWidth="0.5"
        />
        <text
          fontFamily="var(--font-head)"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
          x="383"
          y="52"
          textAnchor="middle"
          dominantBaseline="central"
        >
          InspectorAgent
        </text>
        <text
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--muted)"
          x="383"
          y="68"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan x="383" dy="0">
            prompt · tools
          </tspan>
          <tspan x="383" dy="14">
            · memory
          </tspan>
        </text>
      </g>
      <line
        x1="456"
        y1="56"
        x2="482"
        y2="56"
        stroke="var(--muted)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      <g>
        <rect
          x="482"
          y="30"
          width="178"
          height="60"
          rx="4"
          fill="rgba(20,184,166,0.15)"
          stroke="rgba(20,184,166,0.4)"
          strokeWidth="0.5"
        />
        <text
          fontFamily="var(--font-head)"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
          x="571"
          y="52"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Concurrent analyses
        </text>
        <text
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--muted)"
          x="571"
          y="68"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan x="571" dy="0">
            semantic · policy
          </tspan>
          <tspan x="571" dy="14">
            · compliance
          </tspan>
        </text>
      </g>

      {/* Down arrow to InspectedAgentProfile */}
      <line
        x1="571"
        y1="90"
        x2="571"
        y2="130"
        stroke="var(--muted)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      {/* Row 2 */}
      <g>
        <rect
          x="448"
          y="130"
          width="230"
          height="52"
          rx="4"
          fill="rgba(20,184,166,0.15)"
          stroke="rgba(20,184,166,0.4)"
          strokeWidth="0.5"
        />
        <text
          fontFamily="var(--font-head)"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
          x="562"
          y="152"
          textAnchor="middle"
          dominantBaseline="central"
        >
          InspectedAgentProfile
        </text>
        <text
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--muted)"
          x="570"
          y="168"
          textAnchor="middle"
          dominantBaseline="central"
        >
          risk_flags · scores · compliance
        </text>
      </g>
      <line
        x1="448"
        y1="156"
        x2="356"
        y2="156"
        stroke="var(--muted)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      <g>
        <rect
          x="210"
          y="130"
          width="146"
          height="52"
          rx="4"
          fill="rgba(251,113,133,0.15)"
          stroke="rgba(251,113,133,0.4)"
          strokeWidth="0.5"
        />
        <text
          fontFamily="var(--font-head)"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
          x="283"
          y="152"
          textAnchor="middle"
          dominantBaseline="central"
        >
          TestAgent
        </text>
        <text
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--muted)"
          x="283"
          y="168"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Adversarial stress test
        </text>
      </g>
      <line
        x1="283"
        y1="182"
        x2="283"
        y2="250"
        stroke="var(--muted)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      {/* Decision diamond */}
      <polygon
        points="283,250 340,285 283,320 226,285"
        fill="rgba(245,158,11,0.15)"
        stroke="rgba(245,158,11,0.5)"
        strokeWidth="0.5"
      />
      <text
        fontFamily="var(--font-head)"
        fontSize="12"
        fontWeight="700"
        fill="#fff"
        x="283"
        y="281"
        textAnchor="middle"
        dominantBaseline="central"
      >
        Pass rate
      </text>
      <text
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--muted)"
        x="283"
        y="295"
        textAnchor="middle"
        dominantBaseline="central"
      >
        ≥ threshold?
      </text>

      {/* YES → Audit */}
      <line
        x1="340"
        y1="285"
        x2="448"
        y2="285"
        stroke="var(--muted)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />
      <text
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="var(--amber)"
        x="394"
        y="275"
        textAnchor="middle"
      >
        yes
      </text>

      <g>
        <rect
          x="448"
          y="259"
          width="192"
          height="52"
          rx="4"
          fill="rgba(34,197,94,0.15)"
          stroke="rgba(34,197,94,0.4)"
          strokeWidth="0.5"
        />
        <text
          fontFamily="var(--font-head)"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
          x="544"
          y="281"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Audit complete
        </text>
        <text
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--muted)"
          x="544"
          y="297"
          textAnchor="middle"
          dominantBaseline="central"
        >
          audit_report.json + .md
        </text>
      </g>

      {/* NO → PromptImprover */}
      <line
        x1="283"
        y1="320"
        x2="283"
        y2="380"
        stroke="var(--muted)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />
      <text
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="var(--amber)"
        x="267"
        y="355"
        textAnchor="middle"
      >
        no
      </text>

      <g>
        <rect
          x="180"
          y="380"
          width="206"
          height="52"
          rx="4"
          fill="rgba(59,130,246,0.15)"
          stroke="rgba(59,130,246,0.4)"
          strokeWidth="0.5"
        />
        <text
          fontFamily="var(--font-head)"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
          x="283"
          y="402"
          textAnchor="middle"
          dominantBaseline="central"
        >
          PromptImprover
        </text>
        <text
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--muted)"
          x="283"
          y="418"
          textAnchor="middle"
          dominantBaseline="central"
        >
          DSPy-based rewrite
        </text>
      </g>
      <line
        x1="386"
        y1="406"
        x2="458"
        y2="406"
        stroke="var(--muted)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      <g>
        <rect
          x="458"
          y="380"
          width="182"
          height="52"
          rx="4"
          fill="rgba(59,130,246,0.15)"
          stroke="rgba(59,130,246,0.4)"
          strokeWidth="0.5"
        />
        <text
          fontFamily="var(--font-head)"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
          x="549"
          y="402"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Re-inspect
        </text>
        <text
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--muted)"
          x="549"
          y="418"
          textAnchor="middle"
          dominantBaseline="central"
        >
          With improved prompt
        </text>
      </g>

      {/* Loop back to diamond */}
      <path
        d="M549 380 L549 344 L283 344 L283 320"
        fill="none"
        stroke="var(--muted)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      {/* Max iterations dashed → Audit */}
      <path
        d="M640 406 L640 285"
        fill="none"
        stroke="var(--muted)"
        strokeWidth="1"
        strokeDasharray="4 3"
        markerEnd="url(#arrow)"
      />
      <text
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="var(--muted)"
        x="655"
        y="350"
        textAnchor="middle"
        transform="rotate(-90,655,350)"
      >
        max iterations
      </text>
    </svg>
  );
}
