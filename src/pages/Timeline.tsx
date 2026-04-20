import { Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getDecades, getEvents, voice } from '../lib/content';

const ERA_COLORS: Record<string, string> = {
  'revolutionary': '#8B4513',
  'early-republic': '#B8860B',
  'antebellum': '#CD853F',
  'civil-war': '#DC143C',
  'reconstruction': '#4682B4',
  'gilded-age': '#DAA520',
  'progressive': '#2E8B57',
  'interwar': '#708090',
  'wwii': '#556B2F',
  'postwar': '#4169E1',
  'modern': '#6A5ACD',
  'contemporary': '#20B2AA',
};

export function TimelinePage() {
  const { mode } = useMode();
  const decades = getDecades().sort((a, b) => a.id.localeCompare(b.id));

  return (
    <div className="page-content" style={{ maxWidth: '1000px' }}>
      <h1>{mode === 'scholar' ? 'Timeline of American History' : 'Journey Through Time!'}</h1>
      <p style={{ marginBottom: '32px', color: 'var(--muted)' }}>
        {mode === 'scholar'
          ? 'Explore the major events of each decade from the 1770s to today.'
          : 'Hop through the decades and discover what happened in America!'}
      </p>

      <div className="timeline-grid">
        {decades.map(decade => {
          const isPublished = decade.status === 'published';
          const events = isPublished ? getEvents(decade.id) : [];
          const color = ERA_COLORS[decade.era] || '#888';

          return (
            <div
              key={decade.id}
              className={`timeline-decade-card ${!isPublished ? 'muted' : ''}`}
              style={{ borderLeftColor: color }}
            >
              <Link
                to={isPublished ? `/timeline/${decade.id}` : '#'}
                className="timeline-decade-link"
                onClick={e => !isPublished && e.preventDefault()}
              >
                <div className="timeline-decade-label">{decade.label}</div>
                {isPublished && decade.headline ? (
                  <div className="timeline-decade-headline">{voice(decade.headline, mode)}</div>
                ) : (
                  <div className="timeline-decade-headline muted-text">
                    {mode === 'scholar' ? 'Being researched...' : 'Coming soon!'}
                  </div>
                )}
                {isPublished && events.length > 0 && (
                  <div className="timeline-decade-count">{events.length} events</div>
                )}
                {!isPublished && (
                  <div className="president-card-badge">In progress</div>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
