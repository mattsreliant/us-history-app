import { useMode } from '../lib/mode';
import { getPublishedPresidents, getPublishedDecades, getEvents, getDiscoverEntries } from '../lib/content';

export function AboutPage() {
  const { mode } = useMode();
  const presCount = getPublishedPresidents().length;
  const decCount = getPublishedDecades().length;
  const eventCount = getEvents().length;
  const discoverCount = getDiscoverEntries().length;

  return (
    <div className="page-content">
      <h1>{mode === 'scholar' ? 'About & Sources' : 'About This Site'}</h1>

      <section className="about-section">
        <h2>{mode === 'scholar' ? 'Our Mission' : 'What Is This Site?'}</h2>
        <p>
          {mode === 'scholar'
            ? 'This is a free, web-based educational resource covering United States history: major events by decade, all 47 presidents, and notable inventions and people. One site, two audiences, one rigorously verified content database.'
            : 'This website helps you learn about American history in a fun and easy way! You can explore timelines, learn about presidents, discover cool inventions, and take quizzes. Everything is written so kids ages 8-12 can understand it.'}
        </p>
      </section>

      <section className="about-section" id="sourcing-policy">
        <h2>{mode === 'scholar' ? 'Sourcing Policy' : 'How Do We Know This Stuff Is True?'}</h2>
        <p>
          {mode === 'scholar'
            ? 'Every factual claim on this site is sourced from pre-approved Tier 1 institutions. We do not draft content from memory or use unverified sources. Each entry requires at least two sources, with at least one from a primary institution. Where historians disagree, we acknowledge the disagreement rather than presenting a single interpretation as fact.'
            : 'Great question! We only use information from trusted places like the Library of Congress, the National Park Service, and university research centers. Every fact has been checked against at least two sources. If we\'re not sure about something, we say so instead of guessing.'}
        </p>

        <h3>{mode === 'scholar' ? 'Tier 1 Sources (Primary)' : 'Our Trusted Sources'}</h3>
        <ul className="source-policy-list">
          <li><a href="https://millercenter.org" target="_blank" rel="noopener noreferrer">Miller Center, University of Virginia</a> {mode === 'explorer' && '— Presidential history experts'}</li>
          <li><a href="https://loc.gov" target="_blank" rel="noopener noreferrer">Library of Congress</a> {mode === 'explorer' && '— America\'s biggest library'}</li>
          <li><a href="https://archives.gov" target="_blank" rel="noopener noreferrer">National Archives</a> {mode === 'explorer' && '— Where important documents are kept'}</li>
          <li><a href="https://si.edu" target="_blank" rel="noopener noreferrer">Smithsonian Institution</a> {mode === 'explorer' && '— Amazing museums in Washington, D.C.'}</li>
          <li><a href="https://nps.gov" target="_blank" rel="noopener noreferrer">National Park Service</a> {mode === 'explorer' && '— They take care of historic places'}</li>
          <li><a href="https://whitehousehistory.org" target="_blank" rel="noopener noreferrer">White House Historical Association</a></li>
          <li><a href="https://history.state.gov" target="_blank" rel="noopener noreferrer">State Department Office of the Historian</a></li>
          <li><a href="https://mountvernon.org" target="_blank" rel="noopener noreferrer">Mount Vernon</a> {mode === 'explorer' && '— George Washington\'s home'}</li>
          <li><a href="https://monticello.org" target="_blank" rel="noopener noreferrer">Monticello</a> {mode === 'explorer' && '— Thomas Jefferson\'s home'}</li>
        </ul>

        {mode === 'scholar' && (
          <>
            <h3>Tier 2 Sources (Supplementary)</h3>
            <ul className="source-policy-list">
              <li>Encyclopedia Britannica (britannica.com) — only with Tier 1 corroboration</li>
              <li>Major university press publications</li>
              <li>Peer-reviewed journal articles (via DOI)</li>
            </ul>

            <h3>Explicitly Disallowed</h3>
            <ul className="source-policy-list disallowed">
              <li>Wikipedia (not cited even as secondary)</li>
              <li>Blogs, Medium, Substack</li>
              <li>User-generated content (Reddit, Quora)</li>
              <li>Content farms or SEO-optimized history sites</li>
              <li>Other AI-generated content</li>
            </ul>
          </>
        )}
      </section>

      <section className="about-section">
        <h2>{mode === 'scholar' ? 'Two Modes, One Database' : 'Scholar Mode & Explorer Mode'}</h2>
        <p>
          {mode === 'scholar'
            ? 'This site offers two reading experiences. Scholar Mode (currently active) presents history with full context, nuance, and academic rigor. Explorer Mode adapts the same verified facts for younger readers (ages 8-12), using simpler language without introducing any new claims. Both modes draw from the same underlying database — the facts are identical, only the voice changes.'
            : 'This site has two modes! Explorer Mode (that\'s what you\'re using now) is written for kids ages 8-12. Scholar Mode is for adults and uses bigger words and more details. Both modes have the exact same facts — we just explain things differently. Try clicking the toggle in the top-right corner to switch!'}
        </p>
      </section>

      <section className="about-section">
        <h2>{mode === 'scholar' ? 'Publication Progress' : 'How Much Is Done?'}</h2>
        <div className="progress-stats">
          <div className="progress-stat">
            <span className="progress-number">{presCount}</span>
            <span className="progress-label">{mode === 'scholar' ? 'Presidents Published' : 'Presidents'}</span>
          </div>
          <div className="progress-stat">
            <span className="progress-number">{decCount}</span>
            <span className="progress-label">{mode === 'scholar' ? 'Decades Published' : 'Decades'}</span>
          </div>
          <div className="progress-stat">
            <span className="progress-number">{eventCount}</span>
            <span className="progress-label">{mode === 'scholar' ? 'Events Published' : 'Events'}</span>
          </div>
          <div className="progress-stat">
            <span className="progress-number">{discoverCount}</span>
            <span className="progress-label">{mode === 'scholar' ? 'Discover Entries' : 'Cool Things'}</span>
          </div>
        </div>
        <p style={{ marginTop: '16px', color: 'var(--muted)', fontSize: '0.85rem' }}>
          {mode === 'scholar'
            ? 'New content is added regularly. Every claim is sourced and verified before publication. We would rather ship less than ship unverified.'
            : 'We\'re always adding more! Every fact gets checked carefully before we put it on the site.'}
        </p>
      </section>

      <section className="about-section">
        <h2>{mode === 'scholar' ? 'Images' : 'Where Do the Pictures Come From?'}</h2>
        <p>
          {mode === 'scholar'
            ? 'All historical images on this site are in the public domain, sourced from the Library of Congress, National Archives, and Wikimedia Commons (with verified public domain status). Presidential portraits are official U.S. government works or pre-1928 photographs. Every image includes attribution.'
            : 'All the pictures on this site are free to use! They come from places like the Library of Congress and are either old enough that anyone can use them, or they were taken by the government (which means they belong to everyone).'}
        </p>
      </section>

      <section className="about-section">
        <h2>{mode === 'scholar' ? 'Report an Error' : 'Did We Get Something Wrong?'}</h2>
        <p>
          {mode === 'scholar'
            ? 'If you find a factual error, broken source link, or any other issue, please let us know. Accuracy is our highest priority.'
            : 'If you spot a mistake, tell a teacher or parent and have them email us! We want everything to be correct.'}
        </p>
        <p style={{ marginTop: '8px' }}>
          <a href="mailto:corrections@us-history-app.pages.dev">corrections@us-history-app.pages.dev</a>
        </p>
      </section>

      <section className="about-section">
        <h2>{mode === 'scholar' ? 'Privacy' : 'Your Privacy'}</h2>
        <p>
          {mode === 'scholar'
            ? 'This site uses privacy-friendly analytics (no cookies, no personal data, no fingerprinting). Your quiz progress is stored locally in your browser and is never sent to any server. We do not collect, store, or sell any personal information.'
            : 'We don\'t track you or collect your information. Your quiz scores are saved right on your computer, not on our servers. We respect your privacy!'}
        </p>
      </section>
    </div>
  );
}
