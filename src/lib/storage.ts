// ══════════════════════════════════════════════════════════════
// Storage — localStorage wrapper with v2 account-ready interface
// Spec §7.5: v1 uses localStorage. v2 drops in a server-backed
// implementation without touching consumers.
// ══════════════════════════════════════════════════════════════

import type { Mode } from './types';

export type QuizProgress = {
  quizId: string;
  score: number;
  totalQuestions: number;
  completedAt: string; // ISO timestamp
  missedQuestionIds: string[];
};

export type Badge = {
  id: string;
  label: string;
  earnedAt: string;
};

export interface ProgressStore {
  getQuizProgress(quizId: string): QuizProgress | null;
  setQuizProgress(quizId: string, progress: QuizProgress): Promise<void>;
  getAllQuizProgress(): QuizProgress[];
  getBadges(): Badge[];
  addBadge(badge: Badge): Promise<void>;
  getModePreference(): Mode;
  setModePreference(mode: Mode): Promise<void>;
}

// ── localStorage implementation (v1) ────────────────────────

const KEYS = {
  quizProgress: 'us-history-quiz-progress',
  badges: 'us-history-badges',
  mode: 'us-history-mode',
};

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch { /* quota or blocked */ }
}

export const localStore: ProgressStore = {
  getQuizProgress(quizId: string): QuizProgress | null {
    const all = readJSON<Record<string, QuizProgress>>(KEYS.quizProgress, {});
    return all[quizId] ?? null;
  },

  async setQuizProgress(quizId: string, progress: QuizProgress): Promise<void> {
    const all = readJSON<Record<string, QuizProgress>>(KEYS.quizProgress, {});
    all[quizId] = progress;
    writeJSON(KEYS.quizProgress, all);
  },

  getAllQuizProgress(): QuizProgress[] {
    const all = readJSON<Record<string, QuizProgress>>(KEYS.quizProgress, {});
    return Object.values(all);
  },

  getBadges(): Badge[] {
    return readJSON<Badge[]>(KEYS.badges, []);
  },

  async addBadge(badge: Badge): Promise<void> {
    const badges = readJSON<Badge[]>(KEYS.badges, []);
    if (!badges.find(b => b.id === badge.id)) {
      badges.push(badge);
      writeJSON(KEYS.badges, badges);
    }
  },

  getModePreference(): Mode {
    const stored = readJSON<string>(KEYS.mode, 'scholar');
    return stored === 'explorer' ? 'explorer' : 'scholar';
  },

  async setModePreference(mode: Mode): Promise<void> {
    writeJSON(KEYS.mode, mode);
  },
};
