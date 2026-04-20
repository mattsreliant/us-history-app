import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { useMode } from '../../lib/mode';
import {
  getPublishedPresidents,
  getPublishedDecades,
  getDiscoverEntries,
  getEvents,
  voice,
} from '../../lib/content';

type SearchResult = {
  type: 'president' | 'decade' | 'event' | 'discover';
  id: string;
  title: string;
  subtitle: string;
  url: string;
};

function buildIndex(mode: 'scholar' | 'explorer'): SearchResult[] {
  const items: SearchResult[] = [];

  for (const p of getPublishedPresidents()) {
    items.push({
      type: 'president',
      id: p.id,
      title: p.name,
      subtitle: `${p.party} · ${p.termStart}–${p.termEnd}`,
      url: `/presidents/${p.id}`,
    });
  }

  for (const d of getPublishedDecades()) {
    items.push({
      type: 'decade',
      id: d.id,
      title: d.label,
      subtitle: voice(d.headline, mode),
      url: `/timeline/${d.id}`,
    });
  }

  for (const e of getEvents()) {
    items.push({
      type: 'event',
      id: e.id,
      title: voice(e.title, mode),
      subtitle: `${e.date} · ${e.decade}`,
      url: `/timeline/${e.decade}/${e.id}`,
    });
  }

  for (const d of getDiscoverEntries()) {
    items.push({
      type: 'discover',
      id: d.id,
      title: d.name,
      subtitle: `${d.year} · ${d.role}`,
      url: `/discover/${d.id}`,
    });
  }

  return items;
}

const TYPE_LABELS: Record<string, string> = {
  president: 'Presidents',
  decade: 'Decades',
  event: 'Events',
  discover: 'Discover',
};

export function SearchDialog() {
  const { mode } = useMode();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(() => buildIndex(mode), [mode]);
  const fuse = useMemo(
    () => new Fuse(index, { keys: ['title', 'subtitle'], threshold: 0.35 }),
    [index]
  );

  const results = query.length >= 2 ? fuse.search(query, { limit: 20 }).map(r => r.item) : [];

  // Group results by type
  const grouped = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    for (const r of results) {
      if (!groups[r.type]) groups[r.type] = [];
      groups[r.type].push(r);
    }
    return groups;
  }, [results]);

  const flatResults = results;

  // Keyboard shortcut: Cmd/Ctrl+K
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Focus input when opening
  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Keyboard navigation in results
  function handleInputKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx(i => Math.min(i + 1, flatResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && flatResults[selectedIdx]) {
      navigate(flatResults[selectedIdx].url);
      setOpen(false);
    }
  }

  if (!open) return null;

  return (
    <div className="search-overlay" onClick={() => setOpen(false)}>
      <div className="search-dialog" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder={mode === 'scholar' ? 'Search history...' : 'Search for anything!'}
            value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIdx(0); }}
            onKeyDown={handleInputKey}
          />
          <kbd className="search-kbd">ESC</kbd>
        </div>

        {query.length >= 2 && (
          <div className="search-results">
            {flatResults.length === 0 ? (
              <div className="search-empty">
                {mode === 'scholar' ? 'No results found.' : 'Nothing found — try different words!'}
              </div>
            ) : (
              Object.entries(grouped).map(([type, items]) => (
                <div key={type} className="search-group">
                  <div className="search-group-label">{TYPE_LABELS[type]}</div>
                  {items.map(item => {
                    const idx = flatResults.indexOf(item);
                    return (
                      <button
                        key={item.id}
                        className={`search-result-item ${idx === selectedIdx ? 'selected' : ''}`}
                        onClick={() => { navigate(item.url); setOpen(false); }}
                        onMouseEnter={() => setSelectedIdx(idx)}
                      >
                        <span className="search-result-title">{item.title}</span>
                        <span className="search-result-subtitle">{item.subtitle}</span>
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        )}

        {query.length < 2 && (
          <div className="search-hint">
            {mode === 'scholar'
              ? 'Type at least 2 characters to search presidents, events, decades, and more.'
              : 'Start typing to find cool stuff about American history!'}
          </div>
        )}
      </div>
    </div>
  );
}

export function SearchButton() {
  return (
    <button
      className="search-trigger"
      onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
      aria-label="Search"
      title="Search (Ctrl+K)"
    >
      <span className="search-trigger-icon">&#x1F50D;</span>
      <kbd className="search-trigger-kbd">Ctrl+K</kbd>
    </button>
  );
}
