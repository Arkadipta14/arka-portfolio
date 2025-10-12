import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer(){
  return (
    <footer className="footer container" id="contact" role="contentinfo">
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:12}}>
        <a href="mailto:arkadiptapaul2@gmail.com" style={{color:"var(--muted)", textDecoration:"none"}}><FaEnvelope/> Email</a>
        <a href="https://github.com/Arkadipta14" target="_blank" rel="noreferrer" style={{color:"var(--muted)"}}><FaGithub/> GitHub</a>
        <a href="https://www.linkedin.com/in/arkadipta-paul-855a5418b/" target="_blank" rel="noreferrer" style={{color:"var(--muted)"}}><FaLinkedin/> LinkedIn</a>
      </div>

      <div style={{color:"var(--muted)", fontSize:13}}>© {new Date().getFullYear()} Arkadipta Paul — Built with ❤️ and vectors</div>
    </footer>
  );
}
