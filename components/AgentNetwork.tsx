"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Standup", x: 210, y: 50 },
  { label: "Blocker", x: 340, y: 105 },
  { label: "Health", x: 340, y: 215 },
  { label: "Approval", x: 210, y: 270 },
  { label: "Jira sync", x: 80, y: 215 },
  { label: "Slack", x: 80, y: 105 },
];

const CORE = { x: 210, y: 160 };

function linePath(n: { x: number; y: number }) {
  return `M${n.x},${n.y} L${CORE.x},${CORE.y}`;
}

export default function AgentNetwork() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface1 p-4">
      <svg
        viewBox="0 0 420 320"
        className="h-full w-full"
        role="img"
        aria-label="Six specialized agents connected to a central orchestrator core"
      >
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24,0 L0,0 L0,24" fill="none" stroke="#1c1e22" strokeWidth={1} />
          </pattern>
        </defs>
        <rect width="420" height="320" fill="url(#grid)" />

        {nodes.map((n, i) => (
          <motion.path
            key={n.label}
            d={linePath(n)}
            fill="none"
            stroke="#5e6ad2"
            strokeOpacity={0.4}
            strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        {nodes.map((n, i) => (
          <circle key={`dot-${n.label}`} r="3" fill="#828fff">
            <animateMotion dur="2.8s" begin={`${i * 0.4}s`} repeatCount="indefinite" path={linePath(n)} />
          </circle>
        ))}

        {[0, 1].map((i) => (
          <motion.circle
            key={`ping-${i}`}
            cx={CORE.x}
            cy={CORE.y}
            r={30}
            fill="none"
            stroke="#5e6ad2"
            strokeWidth={1}
            style={{ transformOrigin: `${CORE.x}px ${CORE.y}px` }}
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 1.7 }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
          />
        ))}

        <circle cx={CORE.x} cy={CORE.y} r={30} fill="#5e6ad2" />
        <text x={CORE.x} y={CORE.y - 2} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f7f8f8" fontFamily="monospace">
          core
        </text>
        <text x={CORE.x} y={CORE.y + 11} textAnchor="middle" fontSize={8} fill="#d0d6e0" fontFamily="monospace" opacity={0.8}>
          orchestrator
        </text>

        {nodes.map((n) => (
          <g key={`box-${n.label}`}>
            <rect
              x={n.x - 40}
              y={n.y - 14}
              width={80}
              height={28}
              rx={8}
              fill="#141516"
              stroke="#34343a"
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontSize={10.5}
              fontFamily="monospace"
              fill="#d0d6e0"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
