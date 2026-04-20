// ══════════════════════════════════════════════════════════════
// Source List — renders citations at the bottom of detail pages
// Spec §4.5: every detail page has a Sources section.
// ══════════════════════════════════════════════════════════════

import { useState } from 'react';
import type { Source } from '../../lib/types';

type Props = {
  sources: Source[];
  collapsible?: boolean;
};

export function SourceList({ sources, collapsible = true }: Props) {
  const [open, setOpen] = useState(!collapsible);

  if (!sources.length) return null;

  return (
    <section className="source-list" aria-label="Sources">
      {collapsible ? (
        <button
          className="source-list-toggle"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          Sources ({sources.length}) {open ? '−' : '+'}
        </button>
      ) : (
        <h3 className="source-list-heading">Sources</h3>
      )}

      {open && (
        <ol className="source-list-items">
          {sources.map((src, i) => (
            <li key={i} className="source-item">
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                {src.citation}
              </a>
              <span className="source-meta">
                {src.publisher}
                {src.tier === 1 && <span className="source-tier" title="Tier 1: Primary source"> T1</span>}
                {' '}&middot; Accessed {src.accessedDate}
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
