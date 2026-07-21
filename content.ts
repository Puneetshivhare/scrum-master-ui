export const content = {
  projectName: "AI Scrum Master",
  tagline: "Automates 60-70% of Scrum Master busywork, with humans still in charge.",
  description:
    "An AI agile-ops system where six specialized agents run standups, watch for blockers, and report sprint health — read-only by default, with human approval required for anything high-risk.",
  badges: ["FastAPI", "React", "Jira", "Slack"],
  stats: [
    { value: "6", label: "Specialized agents" },
    { value: "60-70%", label: "SM busywork automated" },
    { value: "40-60%", label: "Fewer meetings" },
  ],
  features: [
    {
      title: "Async standups",
      description:
        "Collects standup responses async, generates a summary, and flags blockers automatically — no live meeting required.",
    },
    {
      title: "Blocker detection",
      description:
        "Scans Jira and Git activity on a schedule and escalates stalled tickets based on how long they've been stuck.",
    },
    {
      title: "Sprint health monitoring",
      description:
        "Tracks velocity and burndown, and sends a plain-language risk summary to stakeholders every day.",
    },
    {
      title: "Approval-gated actions",
      description:
        "Agents can suggest and flag freely, but committing scope or messaging leadership always requires human sign-off.",
    },
  ],
  architecture: ["Admin UI (React)", "FastAPI orchestration", "Agent runtime", "MCP integrations"],
  githubUrl: "https://github.com/Puneetshivhare/Srum-Master",
  status: "In development",
};
