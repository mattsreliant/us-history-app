// ══════════════════════════════════════════════════════════════
// Mode Toggle — Scholar / Explorer switch
// Prominent toggle in the header (spec §2.3).
// ══════════════════════════════════════════════════════════════

import { useMode } from '../../lib/mode';

export function ModeToggle() {
  const { mode, toggleMode } = useMode();

  return (
    <button
      onClick={toggleMode}
      className="mode-toggle"
      aria-label={`Switch to ${mode === 'scholar' ? 'Explorer' : 'Scholar'} mode`}
      title={`Currently in ${mode === 'scholar' ? 'Scholar' : 'Explorer'} mode. Click to switch.`}
    >
      <span className={`mode-toggle-option ${mode === 'scholar' ? 'active' : ''}`}>
        Scholar
      </span>
      <span className={`mode-toggle-option ${mode === 'explorer' ? 'active' : ''}`}>
        Explorer
      </span>
    </button>
  );
}
