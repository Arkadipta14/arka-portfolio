import React, { useState } from "react";
import projects from "../data/projects";
export default function ProjectCard({p}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project-card-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="project-card-inner">
        <article className="project-card-front">
          <div>
            <h3 id={`p-${p.id}`}>{p.title}</h3>
            <div className="project-meta">{p.short}</div>
            <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
              {p.tech.map(t=> (
                <div
                  key={t}
                  style={{
                    fontFamily:"var(--mono)",
                    fontSize:12,
                    color:"var(--muted)",
                    background:"rgba(255,255,255,0.02)",
                    padding:"6px 8px",
                    borderRadius:8
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
          <a
            className="cta"
            href="#"
            onClick={handleFlip}
            style={{
              marginTop: "auto",
              alignSelf: "flex-end"
            }}
          >
            View Details
          </a>
        </article>

        <article className="project-card-back">
          <h3>{p.title} - Details</h3>
          <ul>
            {p.details.map((details, index) => (
              <li key={index}>{details}</li>
            ))}
          </ul>
          <a
            className="cta"
            href="#"
            onClick={handleFlip}
            style={{
              marginTop: "auto",
              alignSelf: "flex-end"
            }}
          >
            Back
          </a>
        </article>
      </div>
    </div>
  );
}