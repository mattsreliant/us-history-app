// ══════════════════════════════════════════════════════════════
// Mode Context — Scholar / Explorer toggle
// Persists preference in localStorage. Toggles a root class on
// <html> so all CSS theming flows from it (spec §2.3).
// ══════════════════════════════════════════════════════════════

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Mode } from './types';

type ModeContextValue = {
  mode: Mode;
  toggleMode: () => void;
  setMode: (m: Mode) => void;
};

const ModeContext = createContext<ModeContextValue | null>(null);

const STORAGE_KEY = 'us-history-mode';

function getStoredMode(): Mode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'scholar' || stored === 'explorer') return stored;
  } catch { /* SSR or storage blocked */ }
  return 'scholar'; // default per spec §2.3
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>(getStoredMode);

  useEffect(() => {
    // Apply root class on <html> so all theming flows from CSS
    const html = document.documentElement;
    html.classList.remove('mode-scholar', 'mode-explorer');
    html.classList.add(`mode-${mode}`);
    try { localStorage.setItem(STORAGE_KEY, mode); } catch { /* ignore */ }
  }, [mode]);

  const toggleMode = () => setModeState(m => m === 'scholar' ? 'explorer' : 'scholar');
  const setMode = (m: Mode) => setModeState(m);

  return (
    <ModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode(): ModeContextValue {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error('useMode must be used within a ModeProvider');
  return ctx;
}
