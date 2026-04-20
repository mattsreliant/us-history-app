/**
 * Content Validation Script (spec §4.3)
 *
 * Runs in CI and on every local build. Fails if any published content
 * entry violates the verification policy. Drafting entries are allowed
 * to be incomplete. Planned entries only need id + label/name + dates.
 *
 * Usage:
 *   npx tsx scripts/validate-content.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// ── Pre-approved source domains (spec §4.1) ─────────────────

const TIER_1_DOMAINS = [
  'loc.gov',
  'archives.gov',
  'si.edu',
  'millercenter.org',
  'history.house.gov',
  'senate.gov',
  'history.state.gov',
  'nps.gov',
  'whitehousehistory.org',
  'mountvernon.org',
  'monticello.org',
  // Presidential libraries (.gov sites)
];

const TIER_2_DOMAINS = [
  'britannica.com',
  // University press pages and DOI links are checked by pattern, not domain
];

const DISALLOWED_DOMAINS = [
  'wikipedia.org',
  'medium.com',
  'substack.com',
  'reddit.com',
  'quora.com',
];

// ── Types (matching src/lib/types.ts) ───────────────────────

type Source = {
  citation: string;
  url: string;
  publisher: string;
  tier: 1 | 2;
  accessedDate: string;
};

type PublicationStatus = 'published' | 'drafting' | 'planned';

// ── Validation logic ────────────────────────────────────────

type ValidationError = {
  file: string;
  field: string;
  message: string;
  severity: 'error' | 'warning';
};

const errors: ValidationError[] = [];

function addError(file: string, field: string, message: string, severity: 'error' | 'warning' = 'error') {
  errors.push({ file, field, message, severity });
}

function getDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    // Strip www. prefix
    return hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

function isDomainApproved(url: string): boolean {
  const domain = getDomain(url);
  if (!domain) return false;

  // Check disallowed first
  if (DISALLOWED_DOMAINS.some(d => domain.endsWith(d))) return false;

  // Tier 1
  if (TIER_1_DOMAINS.some(d => domain.endsWith(d))) return true;

  // Tier 2
  if (TIER_2_DOMAINS.some(d => domain.endsWith(d))) return true;

  // Presidential library .gov sites
  if (domain.endsWith('.gov')) return true;

  // DOI links (peer-reviewed journals)
  if (domain === 'doi.org' || domain.endsWith('doi.org')) return true;

  // University domains (.edu)
  if (domain.endsWith('.edu')) return true;

  return false;
}

function isTier1(url: string): boolean {
  const domain = getDomain(url);
  if (!domain) return false;
  if (TIER_1_DOMAINS.some(d => domain.endsWith(d))) return true;
  if (domain.endsWith('.gov')) return true; // Presidential libraries
  return false;
}

function validateSources(file: string, fieldName: string, sources: Source[], requireTier1: boolean): void {
  if (!sources || !Array.isArray(sources)) {
    addError(file, fieldName, 'sources field is missing or not an array');
    return;
  }

  if (sources.length < 2) {
    addError(file, fieldName, `requires at least 2 sources, found ${sources.length}`);
  }

  let hasTier1 = false;
  for (const [i, src] of sources.entries()) {
    if (!src.citation) {
      addError(file, `${fieldName}[${i}].citation`, 'missing citation text');
    }
    if (!src.url) {
      addError(file, `${fieldName}[${i}].url`, 'missing source URL');
    } else {
      if (!isDomainApproved(src.url)) {
        addError(file, `${fieldName}[${i}].url`, `domain not on approved list: ${getDomain(src.url)}`);
      }
      if (DISALLOWED_DOMAINS.some(d => getDomain(src.url).endsWith(d))) {
        addError(file, `${fieldName}[${i}].url`, `DISALLOWED source: ${getDomain(src.url)}`);
      }
      if (isTier1(src.url)) hasTier1 = true;
    }
    if (!src.publisher) {
      addError(file, `${fieldName}[${i}].publisher`, 'missing publisher');
    }
    if (src.tier !== 1 && src.tier !== 2) {
      addError(file, `${fieldName}[${i}].tier`, `invalid tier: ${src.tier}`);
    }
    if (!src.accessedDate || !/^\d{4}-\d{2}-\d{2}$/.test(src.accessedDate)) {
      addError(file, `${fieldName}[${i}].accessedDate`, 'missing or invalid date (expected YYYY-MM-DD)');
    }
  }

  if (requireTier1 && !hasTier1) {
    addError(file, fieldName, 'requires at least one Tier 1 source');
  }
}

function validateDualVoice(file: string, fieldName: string, dv: any): void {
  if (!dv || typeof dv !== 'object') {
    addError(file, fieldName, 'missing or invalid DualVoice field');
    return;
  }
  if (!dv.scholar || typeof dv.scholar !== 'string') {
    addError(file, `${fieldName}.scholar`, 'missing scholar voice text');
  }
  if (!dv.explorer || typeof dv.explorer !== 'string') {
    addError(file, `${fieldName}.explorer`, 'missing explorer voice text');
  }
}

// ── Per-type validators ─────────────────────────────────────

function validateDecade(file: string, data: any): void {
  if (data.status === 'planned') {
    if (!data.id) addError(file, 'id', 'planned entry requires id');
    if (!data.label) addError(file, 'label', 'planned entry requires label');
    return;
  }
  if (data.status === 'drafting') return; // No enforcement on drafts

  // Published — full validation
  if (!data.id) addError(file, 'id', 'missing id');
  if (!data.label) addError(file, 'label', 'missing label');
  if (!data.era) addError(file, 'era', 'missing era tag');
  validateDualVoice(file, 'headline', data.headline);
  validateDualVoice(file, 'summary', data.summary);
  validateSources(file, 'sources', data.sources, true);
}

function validateEvent(file: string, data: any): void {
  if (data.status !== 'published') return;
  if (!data.id) addError(file, 'id', 'missing id');
  if (!data.date) addError(file, 'date', 'missing date');
  if (!data.decade) addError(file, 'decade', 'missing decade reference');
  validateDualVoice(file, 'title', data.title);
  validateDualVoice(file, 'summary', data.summary);
  validateDualVoice(file, 'significance', data.significance);
  validateSources(file, 'sources', data.sources, true);
}

function validatePresident(file: string, data: any): void {
  if (data.status === 'planned') {
    if (!data.id) addError(file, 'id', 'planned entry requires id');
    if (!data.name) addError(file, 'name', 'planned entry requires name');
    if (!data.number) addError(file, 'number', 'planned entry requires number');
    if (!data.termStart) addError(file, 'termStart', 'planned entry requires termStart');
    if (!data.termEnd) addError(file, 'termEnd', 'planned entry requires termEnd');
    return;
  }
  if (data.status === 'drafting') return;

  // Published
  if (!data.id) addError(file, 'id', 'missing id');
  if (!data.name) addError(file, 'name', 'missing name');
  if (!data.number) addError(file, 'number', 'missing number');
  if (!data.party) addError(file, 'party', 'missing party');
  validateDualVoice(file, 'bio', data.bio);
  validateSources(file, 'sources', data.sources, true);

  // Fun facts require strictest sourcing (spec §4.2 rule 3)
  if (data.funFacts && Array.isArray(data.funFacts)) {
    for (const [i, ff] of data.funFacts.entries()) {
      validateDualVoice(file, `funFacts[${i}].text`, ff.text);
      validateSources(file, `funFacts[${i}].sources`, ff.sources, true);
    }
  }
}

function validateDiscover(file: string, data: any): void {
  if (data.status !== 'published') return;
  if (!data.id) addError(file, 'id', 'missing id');
  if (!data.name) addError(file, 'name', 'missing name');
  validateDualVoice(file, 'summary', data.summary);
  validateSources(file, 'sources', data.sources, true);

  if (data.funFacts && Array.isArray(data.funFacts)) {
    for (const [i, ff] of data.funFacts.entries()) {
      validateSources(file, `funFacts[${i}].sources`, ff.sources, true);
    }
  }
}

function validateQuiz(file: string, data: any): void {
  if (data.status !== 'published') return;
  if (!data.id) addError(file, 'id', 'missing id');
  validateDualVoice(file, 'title', data.title);
  if (!data.questionIds || data.questionIds.length < 10) {
    addError(file, 'questionIds', 'quiz requires at least 10 questions');
  }
}

function validateQuestion(file: string, data: any): void {
  if (data.status !== 'published') return;
  if (!data.id) addError(file, 'id', 'missing id');
  validateDualVoice(file, 'prompt', data.prompt);
  if (!data.options || data.options.length !== 4) {
    addError(file, 'options', 'exactly 4 options required');
  }
  if (data.correctIndex === undefined || data.correctIndex < 0 || data.correctIndex > 3) {
    addError(file, 'correctIndex', 'must be 0-3');
  }
  validateDualVoice(file, 'explanation', data.explanation);
  validateSources(file, 'sources', data.sources, true);
}

// ── Main ────────────────────────────────────────────────────

function loadJSON(filePath: string): any {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

function walkDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkDir(full));
    else if (entry.name.endsWith('.json')) files.push(full);
  }
  return files;
}

const contentDir = path.resolve(import.meta.dirname, '..', 'src', 'content');

console.log('Validating content...\n');

// Quiz folder contains both quiz definitions (have questionIds) and
// individual questions (have correctIndex). Route to the right validator.
function validateQuizOrQuestion(file: string, data: any): void {
  if (data.questionIds) {
    validateQuiz(file, data);
  } else if (data.correctIndex !== undefined) {
    validateQuestion(file, data);
  }
}

const validators: Record<string, (file: string, data: any) => void> = {
  decades: validateDecade,
  events: validateEvent,
  presidents: validatePresident,
  discover: validateDiscover,
  quizzes: validateQuizOrQuestion,
};

let totalFiles = 0;
let publishedCount = 0;
let draftingCount = 0;
let plannedCount = 0;

for (const [folder, validator] of Object.entries(validators)) {
  const dir = path.join(contentDir, folder);
  const files = walkDir(dir);
  for (const file of files) {
    totalFiles++;
    try {
      const data = loadJSON(file);
      if (data.status === 'published') publishedCount++;
      else if (data.status === 'drafting') draftingCount++;
      else if (data.status === 'planned') plannedCount++;
      validator(path.relative(contentDir, file), data);
    } catch (e: any) {
      addError(path.relative(contentDir, file), 'JSON', `failed to parse: ${e.message}`);
    }
  }
}

// ── Report ──────────────────────────────────────────────────

console.log(`Files scanned: ${totalFiles}`);
console.log(`  Published: ${publishedCount}`);
console.log(`  Drafting:  ${draftingCount}`);
console.log(`  Planned:   ${plannedCount}`);
console.log();

const errs = errors.filter(e => e.severity === 'error');
const warns = errors.filter(e => e.severity === 'warning');

if (warns.length) {
  console.log(`Warnings (${warns.length}):`);
  for (const w of warns) {
    console.log(`  ⚠  ${w.file} → ${w.field}: ${w.message}`);
  }
  console.log();
}

if (errs.length) {
  console.log(`ERRORS (${errs.length}):`);
  for (const e of errs) {
    console.log(`  ✗  ${e.file} → ${e.field}: ${e.message}`);
  }
  console.log('\nValidation FAILED.');
  process.exit(1);
} else {
  console.log('Validation PASSED.');
}
