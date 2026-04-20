import { useParams, Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getDecade, getEvents, voice } from '../lib/content';
import { SourceList } from '../components/shared/SourceList';

export function DecadeDetailPage() {
  const { decadeId } = useParams<{ decadeId: string }>();
  const { mode } = useMode();
  const decade = getDecade(decadeId || '');

  if (!decade) {
    return (
      <div className="page-content">
        <h1>Decade Not Found</h1>
        <p><Link to="/timeline">Back to Timeline</Link></p>
      </div>
    );
  }

  if (decade.status !== 'published') {
    return (
      <div className="page-content">
        <h1>{decade.label}</h1>
        <div className="in-progress-notice">
          <p>
            {mode === 'scholar'
              ? 'This decade is currently being researched and verified. Check back soon.'
              : 'We\'re still working on this page! Come back soon!'}
          </p>
          <p><Link to="/timeline">Explore the timeline</Link></p>
        </div>
      </div>
    );
  }

  const events = getEvents(decade.id).sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="page-content">
      <Link to="/timeline" className="back-link">&larr; Back to Timeline</Link>

      <h1>{decade.label}</h1>
      <h2 className="decade-headline">{voice(decade.headline, mode)}</h2>
      <p className="decade-summary">{voice(decade.summary, mode)}</p>

      {events.length > 0 && (
        <section className="decade-events">
          <h2>{mode === 'scholar' ? 'Key Events' : 'What Happened'}</h2>
          <div className="events-timeline">
            {events.map(event => (
              <Link
                key={event.id}
                to={`/timeline/${decade.id}/${event.id}`}
                className="event-card"
              >
                <div className="event-card-date">{formatEventDate(event.date)}</div>
                <div className="event-card-title">{voice(event.title, mode)}</div>
                <div className="event-card-summary">{voice(event.summary, mode)}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SourceList sources={decade.sources} />
    </div>
  );
}

function formatEventDate(dateStr: string): string {
  if (dateStr.includes('-') && dateStr.length === 10) {
    try {
      const d = new Date(dateStr + 'T00:00:00');
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch { return dateStr; }
  }
  return dateStr;
}
