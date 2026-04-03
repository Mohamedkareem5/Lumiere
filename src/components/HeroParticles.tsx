import { memo } from 'react';

/**
 * Animated hero background — visible floating gradient orbs
 * with clear, smooth motion. Pure CSS, GPU-accelerated.
 */
function HeroBackground() {
  return (
    <div className="hero-bg-container">
      {/* Orb 1 — Large warm gold, top-left drift */}
      <div className="hero-orb hero-orb-1" />

      {/* Orb 2 — Amber, right side drift */}
      <div className="hero-orb hero-orb-2" />

      {/* Orb 3 — Soft peach, bottom drift */}
      <div className="hero-orb hero-orb-3" />

      {/* Orb 4 — Light cream, center float */}
      <div className="hero-orb hero-orb-4" />

      {/* Orb 5 — Small golden accent */}
      <div className="hero-orb hero-orb-5" />

      {/* Bottom fade to match next section */}
      <div className="hero-bottom-fade" />
    </div>
  );
}

export default memo(HeroBackground);
