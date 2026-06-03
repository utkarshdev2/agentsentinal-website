import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">[ Agent Sentinel ]</div>

      <div className="footer-links">
        <a href="https://github.com/nitin3150/agentsentinel" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <Link to="/docs">Docs</Link>
        <a href="#risks">Risk Model</a>
        <a href="#install">Quick Start</a>
      </div>

      <div className="footer-badge">MIT License</div>
    </footer>
  );
}
