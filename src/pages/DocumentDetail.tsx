import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getDocument, voice } from '../lib/content';
import { SourceList } from '../components/shared/SourceList';

export function DocumentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { mode } = useMode();
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());

  const doc = id ? getDocument(id) : undefined;

  if (!doc) {
    return (
      <div className="page-content">
        <h1>{mode === 'scholar' ? 'Document Not Found' : 'Oops!'}</h1>
        <p>
          {mode === 'scholar'
            ? 'The requested document could not be found.'
            : 'We couldn\'t find that document. Try going back!'}
        </p>
        <Link to="/documents">&larr; Back to Documents</Link>
      </div>
    );
  }

  const allExpanded = expandedSections.size === doc.sections.length;

  function toggleSection(index: number) {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  function toggleAll() {
    if (allExpanded) {
      setExpandedSections(new Set());
    } else {
      setExpandedSections(new Set(doc!.sections.map((_, i) => i)));
    }
  }

  return (
    <div className="page-content document-detail">
      <Link to="/documents" className="back-link">&larr; All Documents</Link>

      <h1>{doc.title}</h1>
      <div className="document-meta">
        <span className="document-year">{doc.year}</span>
        <span className="document-category">{doc.category}</span>
      </div>

      <p className="document-description">{voice(doc.description, mode)}</p>

      {doc.preamble && (
        <blockquote className="document-preamble">
          {doc.preamble}
        </blockquote>
      )}

      <div className="document-controls">
        <button className="expand-toggle" onClick={toggleAll}>
          {allExpanded ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      <div className="document-sections">
        {doc.sections.map((section, i) => {
          const isOpen = expandedSections.has(i);
          return (
            <div key={i} className={`document-section ${isOpen ? 'open' : ''}`}>
              <button
                className="document-section-heading"
                onClick={() => toggleSection(i)}
                aria-expanded={isOpen}
              >
                <span>{section.heading}</span>
                <span className="section-chevron">{isOpen ? '\u25B2' : '\u25BC'}</span>
              </button>
              {isOpen && (
                <div className="document-section-text">
                  {section.text}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <SourceList sources={doc.sources} />
    </div>
  );
}
