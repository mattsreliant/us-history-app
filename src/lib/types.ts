// ══════════════════════════════════════════════════════════════
// US History App — Core TypeScript Types
// Matches spec §3.2 exactly. Every content entry uses these shapes.
// ══════════════════════════════════════════════════════════════

export type Mode = 'scholar' | 'explorer';
export type DualVoice = { scholar: string; explorer: string };
export type PublicationStatus = 'published' | 'drafting' | 'planned';

export type Source = {
  citation: string;
  url: string;
  publisher: string;
  tier: 1 | 2;
  accessedDate: string; // YYYY-MM-DD
};

export type SourcedClaim = {
  text: DualVoice;
  sources: Source[];
};

export type EraTag =
  | 'revolutionary' | 'early-republic' | 'antebellum' | 'civil-war'
  | 'reconstruction' | 'gilded-age' | 'progressive' | 'interwar'
  | 'wwii' | 'postwar' | 'modern' | 'contemporary';

export type EventTag =
  | 'war' | 'civil-rights' | 'economy' | 'science-tech'
  | 'culture' | 'politics' | 'disaster' | 'exploration';

export type DiscoverCategory =
  | 'science' | 'invention' | 'arts' | 'sports'
  | 'civil-rights' | 'business' | 'exploration' | 'culture';

export type QuizTopic =
  | 'presidents' | 'decades' | 'inventions' | 'civil-rights'
  | 'wars' | 'general';

// ── Content entities ─────────────────────────────────────────

export type Decade = {
  id: string;
  status: PublicationStatus;
  label: string;
  era: EraTag;
  headline: DualVoice;
  summary: DualVoice;
  eventIds: string[];
  keyFigureIds: string[];
  imageUrl: string;
  imageCredit: string;
  sources: Source[];
};

export type HistoricalEvent = {
  id: string;
  status: PublicationStatus;
  title: DualVoice;
  date: string; // "YYYY-MM-DD" | "YYYY" | "YYYY-YYYY"
  decade: string;
  summary: DualVoice;
  significance: DualVoice;
  relatedPresidentIds: string[];
  relatedPeopleIds: string[];
  tags: EventTag[];
  sources: Source[];
};

export type President = {
  id: string;
  status: PublicationStatus;
  number: number;
  name: string;
  party: string;
  termStart: string;
  termEnd: string;
  vicePresidents: string[];
  born: string;
  died: string | null;
  birthplace: string;
  portraitUrl: string;
  portraitCredit: string;
  bio: DualVoice;
  keyAccomplishments: SourcedClaim[];
  majorEventIds: string[];
  funFacts: SourcedClaim[];
  sources: Source[];
};

export type DiscoverEntry = {
  id: string;
  status: PublicationStatus;
  type: 'invention' | 'person';
  name: string;
  year: string;
  role: string;
  category: DiscoverCategory;
  summary: DualVoice;
  funFacts: SourcedClaim[];
  imageUrl: string;
  imageCredit: string;
  sources: Source[];
};

export type QuizQuestion = {
  id: string;
  status: PublicationStatus;
  topic: QuizTopic;
  difficulty: 'easy' | 'medium' | 'hard';
  mode: 'scholar' | 'explorer' | 'both';
  prompt: DualVoice;
  options: DualVoice[];
  correctIndex: number;
  explanation: DualVoice;
  sources: Source[];
};

export type Quiz = {
  id: string;
  status: PublicationStatus;
  title: DualVoice;
  description: DualVoice;
  topic: QuizTopic;
  difficulty: 'easy' | 'medium' | 'hard';
  questionIds: string[];
};
