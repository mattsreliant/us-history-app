import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getDocuments, voice } from '../lib/content';
import type { DocumentCategory } from '../lib/types';

const CATEGORIES: { value: DocumentCategory | 'all'; label: string; labelKid: string }[] = [
  { value: 'all', label: 'All Documents', labelKid: 'Everything!' },
  { value: 'founding', label: 'Founding Documents', labelKid: 'How America Started' },
  { value: 'amendment', label: 'Amendments', labelKid: 'Changes to the Rules' },
  { value: 'landmark', label: 'Landmark Documents', labelKid: 'Important Papers' },
  { value: 'speech', label: 'Speeches', labelKid: 'Famous Speeches' },
];

export function DocumentsPage() {
  const { mode } = useMode();
  const [filter, setFilter] = useState<DocumentCategory | 'all'>('all');

  const docs = filter === 'all' ? getDocuments() : getDocuments(filter);
  const sorted = [...docs].sort((a, b) => {
    const ya = parseInt(a.year.match(/\d{4}/)?.[0] || '9999');
    const yb = parseInt(b.year.match(/\d{4}/)?.[0] || '9999');
    return ya - yb;
  });

  return (
    <div className="page-content" style={{ maxWidth: '1000px' }}>
      <h1>{mode === 'scholar' ? 'Primary Documents' : 'Important Documents!'}</h1>
      <p style={{ marginBottom: '24px', color: 'var(--muted)' }}>
        {mode === 'scholar'
          ? 'Read the foundational texts that shaped the United States \u2014 from the Declaration of Independence to the constitutional amendments.'
          : 'Read the actual words that built America! These are the real documents that created our country and its rules.'}
      </p>

      <div className="discover-filters" style={{ marginBottom: '32px' }}>
        {CATEGORIES.map(cat => {
          const count = cat.value === 'all'
            ? getDocuments().length
            : getDocuments(cat.value).length;
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

      {sorted.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '48px' }}>
          {mode === 'scholar' ? 'No documents in this category yet.' : 'Nothing here yet \u2014 check back soon!'}
        </p>
      ) : (
        <div className="documents-list">
          {sorted.map(doc => (
            <Link key={doc.id} to={`/documents/${doc.id}`} className="document-card">
              <div className="document-card-year">{doc.year}</div>
              <div className="document-card-title">{doc.shortTitle}</div>
              <div className="document-card-desc">{voice(doc.description, mode).slice(0, 180)}...</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
