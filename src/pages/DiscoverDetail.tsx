import { useParams, Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getDiscoverEntry, voice } from '../lib/content';
import { SourceList } from '../components/shared/SourceList';

export function DiscoverDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { mode } = useMode();
  const entry = getDiscoverEntry(id || '');

  if (!entry) {
    return (
      <div className="page-content">
        <h1>Not Found</h1>
        <p><Link to="/discover">Back to Discover</Link></p>
      </div>
    );
  }

  return (
    <div className="page-content">
      <Link to="/discover" className="back-link">&larr; Back to Discover</Link>

      <div className="discover-detail-header">
        <span className="discover-detail-type">{entry.type === 'invention' ? 'Invention' : 'Notable Person'}</span>
        <h1>{entry.name}</h1>
        <p className="discover-detail-meta">{entry.year} &middot; {entry.role}</p>
      </div>

      <section className="discover-detail-section">
        <p>{voice(entry.summary, mode)}</p>
      </section>

      {entry.funFacts && entry.funFacts.length > 0 && (
        <section className="discover-detail-section">
          <h2>{mode === 'scholar' ? 'Notable Facts' : 'Fun Facts!'}</h2>
          <ul className="fun-facts-list">
            {entry.funFacts.map((ff, i) => (
              <li key={i}>{voice(ff.text, mode)}</li>
            ))}
          </ul>
        </section>
      )}

      <SourceList sources={entry.sources} />
    </div>
  );
}
