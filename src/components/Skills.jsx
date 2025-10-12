import React from "react";

const SKILLS = [
  "Python", "PyTorch", "TensorFlow", "Transformers",
  "OpenAI API", "LangChain", "Qdrant", "Neo4j",
  "Docker", "Kubernetes", "AWS", "Azure",
  "SQL", "Pandas", "FastAPI", "Flask"
];

export default function Skills(){
  return (
    <section id="skills" className="section container" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      <p style={{color:"var(--muted)"}}>My technical stack, tools and workflows I use day-to-day.</p>

      <div style={{marginTop:12}} className="skills-list" role="list">
        {SKILLS.map(s=>(
          <div role="listitem" key={s} className="skill-pill">{s}</div>
        ))}
      </div>
    </section>
  );
}
