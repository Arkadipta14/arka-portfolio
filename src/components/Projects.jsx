import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects(){
  return (
    <section id="projects" className="section container" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <p style={{color:"var(--muted)"}}>A selection of production work and prototypes relevant to LLMs & ML systems.</p>

      <div className="projects-grid" style={{marginTop:12}}>
        {projects.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
