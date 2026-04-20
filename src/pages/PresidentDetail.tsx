import { useParams, Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getPresident, getEvent, voice, isPublished } from '../lib/content';
import { SourceList } from '../components/shared/SourceList';
import type { President, SourcedClaim } from '../lib/types';

function Claim({ claim, mode }: { claim: SourcedClaim; mode: 'scholar' | 'explorer' }) {
  return (
    <li>
      <p>{voice(claim.text, mode)}</p>
    </li>
  );
}

export function PresidentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { mode } = useMode();
  const president = getPresident(id || '');

  if (!president) {
    return (
      <div className="page-content">
        <h1>President Not Found</h1>
        <p><Link to="/presidents">Back to Presidents</Link></p>
      </div>
    );
  }

  if (president.status !== 'published') {
    return (
      <div className="page-content">
        <h1>{president.name}</h1>
        <p className="president-number">
          {getOrdinal(president.number)} President of the United States
          &nbsp;&middot;&nbsp;{president.termStart}–{president.termEnd}
          &nbsp;&middot;&nbsp;{president.party}
        </p>
        <div className="in-progress-notice">
          <p>
            {mode === 'scholar'
              ? 'This president profile is currently being researched and verified. Check back soon.'
              : 'We\'re still working on this page! Come back soon to learn all about ' + president.name + '.'}
          </p>
          <p><Link to="/presidents">Explore other presidents</Link></p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      {/* Header */}
      <div className="president-header">
        <h1>{president.name}</h1>
        <p className="president-number">
          {getOrdinal(president.number)} President of the United States
        </p>
        <div className="president-meta">
          <span>{president.party}</span>
          <span>&middot;</span>
          <span>{president.termStart}–{president.termEnd}</span>
          {president.vicePresidents?.length > 0 && (
            <>
              <span>&middot;</span>
              <span>VP: {president.vicePresidents.join(', ')}</span>
            </>
          )}
        </div>
        <div className="president-life">
          <span>Born: {formatDate(president.born)}, {president.birthplace}</span>
          {president.died && (
            <>
              <span>&nbsp;&middot;&nbsp;</span>
              <span>Died: {formatDate(president.died)}</span>
            </>
          )}
        </div>
      </div>

      {/* Biography */}
      <section className="president-section">
        <h2>{mode === 'scholar' ? 'Biography' : 'The Story'}</h2>
        <p>{voice(president.bio, mode)}</p>
      </section>

      {/* Key Accomplishments */}
      {president.keyAccomplishments?.length > 0 && (
        <section className="president-section">
          <h2>{mode === 'scholar' ? 'Key Accomplishments' : 'Big Achievements'}</h2>
          <ul className="accomplishments-list">
            {president.keyAccomplishments.map((a, i) => (
              <Claim key={i} claim={a} mode={mode} />
            ))}
          </ul>
        </section>
      )}

      {/* Major Events */}
      {president.majorEventIds?.length > 0 && (
        <section className="president-section">
          <h2>{mode === 'scholar' ? 'Major Events During Presidency' : 'What Happened While He Was President'}</h2>
          <ul className="events-list">
            {president.majorEventIds.map(eventId => {
              const event = getEvent(eventId);
              if (!event) return null;
              return (
                <li key={eventId}>
                  <Link to={`/timeline/${event.decade}/${event.id}`}>
                    {voice(event.title, mode)}
                  </Link>
                  <span className="event-date"> — {event.date}</span>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Fun Facts */}
      {president.funFacts?.length > 0 && (
        <section className="president-section">
          <h2>{mode === 'scholar' ? 'Notable Facts' : 'Fun Facts!'}</h2>
          <ul className="fun-facts-list">
            {president.funFacts.map((ff, i) => (
              <Claim key={i} claim={ff} mode={mode} />
            ))}
          </ul>
        </section>
      )}

      {/* Sources */}
      <SourceList sources={president.sources} />
    </div>
  );
}

function getOrdinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}
