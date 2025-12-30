import React, { useState, useEffect } from "react";

export default function Home() {
  const [tooltip, setTooltip] = useState({ idx: 0, visible: true });
  const [, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 40);
    return () => clearInterval(interval);
  }, []);

  // Auto-cycle tooltips
  useEffect(() => {
    const interval = setInterval(() => {
      setTooltip(prev => ({ idx: (prev.idx + 1) % 5, visible: true }));
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { left: 20, top: 18, size: 24 },
    { left: 48, top: 12, size: 22 },
    { left: 72, top: 34, size: 18 },
    { left: 60, top: 68, size: 20 },
    { left: 30, top: 60, size: 14 }
  ];

  const messages = [
  "Ask me about LLMs!",
  "I automate research.",
  "Building smarter healthcare.",
  "Let's talk GenAI.",
  "From data to deployment."
  ];

  return (
    <section id="home" className="home container" aria-labelledby="home-heading">
      <div className="hero-left">
        <div className="hero-card">
          <div className="badge">AI · ML · RAG</div>
          <h3 className="hi">Hi, I am</h3>
          <h1 className="title">Arkadipta Paul — AI Engineer</h1>
          <p className="subtitle">
            I build production-ready AI-based systems, LLM integrations and robust data pipelines for life sciences & healthcare.
            I enjoy converting research into reliable software and automating things that used to be tedious.
          </p>

          <div className="grid">
            <div className="card">
              <strong>Current Focus</strong>
              <div style={{color:"var(--muted)", marginTop:8}}>Hybrid RAG Systems · Vector DB</div>
            </div>
            <div className="card">
              <strong>Language</strong>
              <div style={{color:"var(--muted)", marginTop:8}}>Python · SQL · Java</div>
            </div>
            <div className="card">
              <strong>Cloud</strong>
              <div style={{color:"var(--muted)", marginTop:8}}>AWS · Azure</div>
            </div>
            <div className="card">
              <strong>Tools</strong>
              <div style={{color:"var(--muted)", marginTop:8}}>LangChain · Langfuse · Langflow</div>
            </div>
          </div>
        </div>
      </div>
      <aside className="hero-right" aria-hidden>
        <div className="animated-nodes-area">
          {nodes.map((node, idx) => {
            const left = `calc(${node.left}% + ${Math.sin(Date.now()/800 + idx) * 16}px)`;
            const top = `calc(${node.top}% + ${Math.cos(Date.now()/800 + idx) * 12}px)`;
            return (
              <React.Fragment key={idx}>
                <div
                  className={`node animated-node`}
                  style={{
                    left,
                    top,
                    width: node.size,
                    height: node.size,
                    background: "#7b61ff"
                  }}
                  aria-label={`Animated node ${idx+1}`}
                />
                {tooltip.visible && tooltip.idx === idx && (
                  <div
                    className="node-tooltip"
                    style={{
                      left,
                      top: `calc(${node.top}% + ${Math.cos(Date.now()/800 + idx) * 12 - 32}px)`,
                    }}
                  >
                    {messages[idx]}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </aside>
    </section>
  );
}