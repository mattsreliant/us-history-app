// ══════════════════════════════════════════════════════════════
// Site Header — nav + search + mode toggle
// ══════════════════════════════════════════════════════════════

import { Link } from 'react-router-dom';
import { ModeToggle } from './ModeToggle';
import { SearchButton } from './Search';
import { useMode } from '../../lib/mode';

export function Header() {
  const { mode } = useMode();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-title">
          {mode === 'scholar' ? 'US History' : 'US History for Kids'}
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/timeline">Timeline</Link>
          <Link to="/presidents">Presidents</Link>
          <Link to="/discover">Discover</Link>
          <Link to="/quizzes">Quizzes</Link>
          <Link to="/about">About</Link>
        </nav>

        <SearchButton />
        <ModeToggle />
      </div>
    </header>
  );
}
