import React, { useState, useRef, useEffect } from "react";

const SKILLS = [
  "Python", "PyTorch", "TensorFlow", "Transformers",
  "OpenAI API", "LangChain", "Qdrant", "Neo4j",
  "Docker", "Kubernetes", "AWS", "Azure",
  "SQL", "Pandas", "FastAPI", "Flask"
];

const SKILL_DESCRIPTIONS = {
  Python: "Versatile language for AI, data, and backend.",
  PyTorch: "Deep learning framework for research & production.",
  TensorFlow: "Google's scalable ML library.",
  Transformers: "State-of-the-art NLP models.",
  "OpenAI API": "Access GPT, DALL·E, and more.",
  LangChain: "Framework for building LLM apps.",
  Qdrant: "Vector database for semantic search.",
  Neo4j: "Graph database for connected data.",
  Docker: "Containerization for reproducible environments.",
  Kubernetes: "Orchestration for scalable deployments.",
  AWS: "Cloud platform for hosting and ML.",
  Azure: "Microsoft's cloud & AI services.",
  SQL: "Structured data querying.",
  Pandas: "Data analysis in Python.",
  FastAPI: "High-performance Python APIs.",
  Flask: "Lightweight Python web framework."
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const pillsRef = useRef([]);

  // Close tooltip when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (
        !pillsRef.current.some(ref => ref && ref.contains(e.target)) &&
        !e.target.closest(".node-tooltip")
      ) {
        setActiveSkill(null);
        setHoveredSkill(null);
      }
    }
    if (activeSkill) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [activeSkill]);

  function handleSkillHover(skill, e, idx) {
    setHoveredSkill(skill);
    setActiveSkill(skill);
    const rect = e.target.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 18
    });
  }

  function handleSkillLeave() {
    setHoveredSkill(null);
    setActiveSkill(null);
  }

  function handleClose() {
    setActiveSkill(null);
    setHoveredSkill(null);
  }

  return (
    <section id="skills" className="section container" aria-labelledby="skills-heading">
      <h2 id="skills-heading">SKILLS</h2>
      <p style={{ color: "var(--muted)" }}>
        My technical stack, tools and workflows I use day-to-day.
      </p>
      <div style={{ marginTop: 12, position: "relative" }} className="skills-list" role="list">
        {SKILLS.map((s, idx) => {
          // Connected animation: hovered pill is big, neighbors are slightly scaled
          let style = {
            cursor: "pointer",
            outline: "none",
            border: "none",
            transition:
              "transform 0.25s cubic-bezier(.5,1.5,.5,1), box-shadow 0.2s, background 0.3s"
          };
          if (hoveredSkill === s) {
            style = {
              ...style,
              background: "linear-gradient(90deg,var(--accent1),var(--accent2))",
              color: "#061025",
              boxShadow: "0 0 24px #00e0ff88",
              transform: "scale(1.18) rotate(-3deg)"
            };
          } else if (
            hoveredSkill &&
            (SKILLS[idx - 1] === hoveredSkill || SKILLS[idx + 1] === hoveredSkill)
          ) {
            style = {
              ...style,
              transform: "scale(1.07)",
              boxShadow: "0 0 10px #00e0ff44"
            };
          }
          return (
            <button
              key={s}
              ref={el => (pillsRef.current[idx] = el)}
              role="listitem"
              className={`skill-pill${activeSkill === s ? " active" : ""}`}
              style={style}
              onMouseEnter={e => handleSkillHover(s, e, idx)}
              onMouseLeave={handleSkillLeave}
              tabIndex={0}
              aria-label={s + " skill"}
            >
              {s}
            </button>
          );
        })}
        {activeSkill && (
          <div
            className="node-tooltip"
            style={{
              position: "fixed",
              left: tooltipPos.x,
              top: tooltipPos.y,
              zIndex: 100,
              opacity: 1,
              pointerEvents: "none"
            }}
          >
            <span style={{ fontWeight: 700 }}>{activeSkill}</span>
            <span style={{ color: "#444", marginLeft: 8 }}>
              {SKILL_DESCRIPTIONS[activeSkill]}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}