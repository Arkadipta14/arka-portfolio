import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer(){
  return (
    <footer className="footer container" id="contact" role="contentinfo">
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:12}}>
        <a href="mailto:you@example.com" style={{color:"var(--muted)", textDecoration:"none"}}><FaEnvelope/> Email</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{color:"var(--muted)"}}><FaGithub/> GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{color:"var(--muted)"}}><FaLinkedin/> LinkedIn</a>
      </div>

      <div style={{color:"var(--muted)", fontSize:13}}>© {new Date().getFullYear()} Arkadipta Paul — Built with ❤️ and vectors</div>
    </footer>
  );
}
