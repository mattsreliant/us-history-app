// ══════════════════════════════════════════════════════════════
// Site Footer
// ══════════════════════════════════════════════════════════════

import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/about">About & Sources</Link>
          <Link to="/about#sourcing-policy">Sourcing Policy</Link>
        </div>
        <p className="footer-privacy">
          This site uses privacy-friendly analytics. No cookies, no personal data collected.
        </p>
        <p className="footer-copyright">
          A free educational resource. All historical images are public domain.
        </p>
      </div>
    </footer>
  );
}
