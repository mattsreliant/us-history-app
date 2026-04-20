import { Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getPresidents } from '../lib/content';

export function PresidentsPage() {
  const { mode } = useMode();
  const presidents = getPresidents().sort((a, b) => a.number - b.number);

  return (
    <div className="page-content" style={{ maxWidth: '1000px' }}>
      <h1>{mode === 'scholar' ? 'The Presidents' : 'Meet the Presidents!'}</h1>
      <p style={{ marginBottom: '32px', color: 'var(--muted)' }}>
        {mode === 'scholar'
          ? 'All 47 presidents of the United States, from George Washington to the present.'
          : 'Every single president who has led the United States of America!'}
      </p>

      <div className="presidents-grid">
        {presidents.map(p => (
          <Link
            key={p.id}
            to={`/presidents/${p.id}`}
            className={`president-card ${p.status !== 'published' ? 'muted' : ''}`}
          >
            <div className="president-card-number">#{p.number}</div>
            <div className="president-card-name">{p.name}</div>
            <div className="president-card-info">
              {p.party} &middot; {p.termStart}–{p.termEnd}
            </div>
            {p.status !== 'published' && (
              <div className="president-card-badge">In progress</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
