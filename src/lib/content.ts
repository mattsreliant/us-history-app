// ══════════════════════════════════════════════════════════════
// Content loader — publication-status-aware (spec §8.5)
// Only returns 'published' content to consumers. The PREVIEW
// env flag optionally includes 'drafting' for local review.
// ══════════════════════════════════════════════════════════════

import type { Decade, HistoricalEvent, President, DiscoverEntry, Quiz, QuizQuestion, PublicationStatus } from './types';

// Content imports — these will be populated as content is authored
import type { Mode } from './types';

// ── Raw content registries (populated by JSON imports) ──────

// These will be lazily loaded from /src/content/**/*.json files.
// For now, provide empty registries that the app can query without
// crashing. As content files are added, they register here.

let _decades: Decade[] = [];
let _events: HistoricalEvent[] = [];
let _presidents: President[] = [];
let _discover: DiscoverEntry[] = [];
let _quizzes: Quiz[] = [];
let _questions: QuizQuestion[] = [];

// Registration functions for content modules
export function registerDecades(items: Decade[]) { _decades = items; }
export function registerEvents(items: HistoricalEvent[]) { _events = items; }
export function registerPresidents(items: President[]) { _presidents = items; }
export function registerDiscover(items: DiscoverEntry[]) { _discover = items; }
export function registerQuizzes(items: Quiz[]) { _quizzes = items; }
export function registerQuestions(items: QuizQuestion[]) { _questions = items; }

// ── Publication filter ──────────────────────────────────────

const PREVIEW = import.meta.env.VITE_PREVIEW === 'true';

function isVisible(status: PublicationStatus): boolean {
  if (status === 'published') return true;
  if (status === 'drafting' && PREVIEW) return true;
  return false;
}

// ── Public API ──────────────────────────────────────────────

export function getDecades(): Decade[] {
  // All decades are always returned (for timeline rendering).
  // Published ones get full data; planned/drafting ones render muted.
  return _decades;
}

export function getPublishedDecades(): Decade[] {
  return _decades.filter(d => isVisible(d.status));
}

export function getDecade(id: string): Decade | undefined {
  return _decades.find(d => d.id === id);
}

export function getEvents(decadeId?: string): HistoricalEvent[] {
  const visible = _events.filter(e => isVisible(e.status));
  if (decadeId) return visible.filter(e => e.decade === decadeId);
  return visible;
}

export function getEvent(id: string): HistoricalEvent | undefined {
  const e = _events.find(e => e.id === id);
  return e && isVisible(e.status) ? e : undefined;
}

export function getPresidents(): President[] {
  // All presidents always returned (like decades — for the grid).
  return _presidents;
}

export function getPublishedPresidents(): President[] {
  return _presidents.filter(p => isVisible(p.status));
}

export function getPresident(id: string): President | undefined {
  return _presidents.find(p => p.id === id);
}

export function getDiscoverEntries(category?: string): DiscoverEntry[] {
  const visible = _discover.filter(d => isVisible(d.status));
  if (category) return visible.filter(d => d.category === category);
  return visible;
}

export function getDiscoverEntry(id: string): DiscoverEntry | undefined {
  const d = _discover.find(d => d.id === id);
  return d && isVisible(d.status) ? d : undefined;
}

export function getQuizzes(): Quiz[] {
  return _quizzes.filter(q => isVisible(q.status));
}

export function getQuiz(id: string): Quiz | undefined {
  const q = _quizzes.find(q => q.id === id);
  return q && isVisible(q.status) ? q : undefined;
}

export function getQuestions(questionIds: string[]): QuizQuestion[] {
  return _questions.filter(q => questionIds.includes(q.id) && isVisible(q.status));
}

// ── Utility: voice-aware text accessor ──────────────────────

export function voice<T extends { scholar: string; explorer: string }>(dual: T, mode: Mode): string {
  return dual[mode];
}

// ── Utility: is an entity published? (for renderLink) ───────

export function isPublished(entity: { status: PublicationStatus } | undefined): boolean {
  return entity?.status === 'published';
}
