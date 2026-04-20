import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getDiscoverEntries, voice } from '../lib/content';
import type { DiscoverCategory } from '../lib/types';

const CATEGORIES: { value: DiscoverCategory | 'all'; label: string; labelKid: string }[] = [
  { value: 'all', label: 'All', labelKid: 'Everything!' },
  { value: 'invention', label: 'Inventions', labelKid: 'Cool Inventions' },
  { value: 'science', label: 'Science', labelKid: 'Science!' },
  { value: 'civil-rights', label: 'Civil Rights', labelKid: 'Civil Rights' },
  { value: 'arts', label: 'Arts & Culture', labelKid: 'Art & Music' },
  { value: 'sports', label: 'Sports', labelKid: 'Sports' },
  { value: 'exploration', label: 'Exploration', labelKid: 'Exploration' },
  { value: 'business', label: 'Business', labelKid: 'Business' },
];

export function DiscoverPage() {
  const { mode } = useMode();
  const [filter, setFilter] = useState<DiscoverCategory | 'all'>('all');
  const entries = filter === 'all' ? getDiscoverEntries() : getDiscoverEntries(filter);

  return (
    <div className="page-content" style={{ maxWidth: '1000px' }}>
      <h1>{mode === 'scholar' ? 'Discover: Inventions & People' : 'Discover Amazing Things!'}</h1>
      <p style={{ marginBottom: '24px', color: 'var(--muted)' }}>
        {mode === 'scholar'
          ? 'Explore the inventions, innovations, and remarkable individuals that shaped American history.'
          : 'Learn about awesome inventions and incredible people from America\'s past!'}
      </p>

      <div className="discover-filters">
        {CATEGORIES.map(cat => {
          const count = cat.value === 'all'
            ? getDiscoverEntries().length
            : getDiscoverEntries(cat.value).length;
          if (count === 0 && cat.value !== 'all') return null;
          return (
            <button
              key={cat.value}
              className={`filter-chip ${filter === cat.value ? 'active' : ''}`}
              onClick={() => setFilter(cat.value)}
            >
              {mode === 'scholar' ? cat.label : cat.labelKid} ({count})
            </button>
          );
        })}
      </div>

      {entries.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '48px' }}>
          {mode === 'scholar' ? 'No entries in this category yet.' : 'Nothing here yet — check back soon!'}
        </p>
      ) : (
        <div className="discover-grid">
          {entries.map(entry => (
            <Link key={entry.id} to={`/discover/${entry.id}`} className="discover-card">
              <div className="discover-card-type">{entry.type === 'invention' ? 'Invention' : 'Person'}</div>
              <div className="discover-card-name">{entry.name}</div>
              <div className="discover-card-year">{entry.year} &middot; {entry.role}</div>
              <div className="discover-card-summary">{voice(entry.summary, mode).slice(0, 120)}...</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
