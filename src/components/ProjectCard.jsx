import React from "react";

export default function ProjectCard({p}){
  return (
    <article className="project-card" aria-labelledby={`p-${p.id}`}>
      <h3 id={`p-${p.id}`}>{p.title}</h3>
      <div className="project-meta">{p.short}</div>
      <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
        {p.tech.map(t=> <div key={t} style={{fontFamily:"var(--mono)", fontSize:12, color:"var(--muted)", background:"rgba(255,255,255,0.02)", padding:"6px 8px", borderRadius:8}}>{t}</div>)}
      </div>
      <a className="cta" href={p.link} onClick={(e)=>e.preventDefault()}>View details</a>
    </article>
  );
}
