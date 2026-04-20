import { useParams, Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getEvent, getPresident, voice } from '../lib/content';
import { SourceList } from '../components/shared/SourceList';

export function EventDetailPage() {
  const { decadeId, eventId } = useParams<{ decadeId: string; eventId: string }>();
  const { mode } = useMode();
  const event = getEvent(eventId || '');

  if (!event) {
    return (
      <div className="page-content">
        <h1>Event Not Found</h1>
        <p><Link to="/timeline">Back to Timeline</Link></p>
      </div>
    );
  }

  return (
    <div className="page-content">
      <Link to={`/timeline/${decadeId || event.decade}`} className="back-link">
        &larr; Back to the {event.decade}
      </Link>

      <h1>{voice(event.title, mode)}</h1>
      <p className="event-date-hero">{formatEventDate(event.date)}</p>

      <section className="event-section">
        <h2>{mode === 'scholar' ? 'What Happened' : 'The Story'}</h2>
        <p>{voice(event.summary, mode)}</p>
      </section>

      <section className="event-section">
        <h2>{mode === 'scholar' ? 'Significance' : 'Why It Matters'}</h2>
        <p>{voice(event.significance, mode)}</p>
      </section>

      {event.relatedPresidentIds?.length > 0 && (
        <section className="event-section">
          <h2>{mode === 'scholar' ? 'Related Presidents' : 'Presidents Involved'}</h2>
          <ul>
            {event.relatedPresidentIds.map(pid => {
              const pres = getPresident(pid);
              if (!pres) return null;
              return (
                <li key={pid}>
                  {pres.status === 'published' ? (
                    <Link to={`/presidents/${pid}`}>{pres.name}</Link>
                  ) : (
                    <span>{pres.name}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {event.tags?.length > 0 && (
        <div className="event-tags">
          {event.tags.map(tag => (
            <span key={tag} className="event-tag">{tag}</span>
          ))}
        </div>
      )}

      <SourceList sources={event.sources} />
    </div>
  );
}

function formatEventDate(dateStr: string): string {
  if (dateStr.includes('-') && dateStr.length === 10) {
    try {
      const d = new Date(dateStr + 'T00:00:00');
      return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    } catch { return dateStr; }
  }
  return dateStr;
}
