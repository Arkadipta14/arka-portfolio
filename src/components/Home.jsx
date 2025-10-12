import React from "react";

export default function Home(){
  return (
    <section id="home" className="home container" aria-labelledby="home-heading">
      <div className="hero-left">
        <div className="hero-card">
          <div className="badge">AI · ML · MLOps</div>
          <h3 className="hi">Hi, I am</h3>
          <h1 className="title">Arkadipta Paul — AI Engineer</h1>
          <p className="subtitle">
            I build production-ready ML systems, LLM integrations and robust data pipelines for life sciences & healthcare.
            I enjoy converting research into reliable software and automating things that used to be tedious.
          </p>

          <div className="grid">
            <div className="card">
              <strong>Current focus</strong>
              <div style={{color:"var(--muted)", marginTop:8}}>Hybrid RAG systems, vector search, model ops</div>
            </div>
            <div className="card">
              <strong>Languages</strong>
              <div style={{color:"var(--muted)", marginTop:8}}>Python · SQL · JS</div>
            </div>
            <div className="card">
              <strong>Cloud</strong>
              <div style={{color:"var(--muted)", marginTop:8}}>AWS · Azure</div>
            </div>
          </div>

        </div>
      </div>

      <aside className="hero-right" aria-hidden>
        <div className="model-viz">
          <div className="graph" aria-hidden>
            {/* Decorative nodes */}
            <div className="node pulse" style={{left:"20%",top:"18%"}}/>
            <div className="node" style={{left:"48%",top:"12%", width:22, height:22}}/>
            <div className="node" style={{left:"72%",top:"34%", width:18, height:18}}/>
            <div className="node" style={{left:"60%",top:"68%", width:20, height:20}}/>
            <div className="node" style={{left:"30%",top:"60%", width:14, height:14}}/>
            <svg viewBox="0 0 200 120" style={{width:"90%", height:"90%", position:"absolute", opacity:0.6}}>
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#7b61ff" />
                  <stop offset="1" stopColor="#00e0ff" />
                </linearGradient>
              </defs>
              <path d="M10 80 Q 60 10, 120 50 T 190 40" stroke="url(#g)" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
              <circle cx="30" cy="60" r="2.2" fill="#7b61ff" />
            </svg>
          </div>
        </div>
      </aside>
    </section>
  );
}
