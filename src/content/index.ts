// ══════════════════════════════════════════════════════════════
// Content Registry — imports all JSON content and registers it
// with the content loader so pages can access it.
// ══════════════════════════════════════════════════════════════

import {
  registerDecades,
  registerEvents,
  registerPresidents,
  registerDiscover,
} from '../lib/content';

// ── Decades ─────────────────────────────────────────────────
const decadeModules = import.meta.glob('./decades/*.json', { eager: true });
const decades = Object.values(decadeModules).map((m: any) => m.default);
registerDecades(decades);

// ── Events ──────────────────────────────────────────────────
const eventModules = import.meta.glob('./events/*.json', { eager: true });
const events = Object.values(eventModules).map((m: any) => m.default);
registerEvents(events);

// ── Presidents ──────────────────────────────────────────────
const presidentModules = import.meta.glob('./presidents/*.json', { eager: true });
const presidents = Object.values(presidentModules).map((m: any) => m.default);
registerPresidents(presidents);

// ── Discover (inventions & people) ──────────────────────────
const discoverModules = import.meta.glob('./discover/*.json', { eager: true });
const discover = Object.values(discoverModules).map((m: any) => m.default);
registerDiscover(discover);

export { decades, events, presidents, discover };
