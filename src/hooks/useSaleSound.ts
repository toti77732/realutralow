export function playSaleSound() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

    const playTone = (
      freq: number,
      startTime: number,
      duration: number,
      gainVal: number,
      type: OscillatorType = "sine"
    ) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(gainVal, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    const now = ctx.currentTime;

    // Cash register "cha-ching" sound
    playTone(880, now, 0.1, 0.4, "square");
    playTone(1320, now + 0.05, 0.12, 0.35, "square");
    playTone(1760, now + 0.1, 0.15, 0.3, "square");
    playTone(2200, now + 0.15, 0.2, 0.25, "square");

    // Bell ding
    playTone(1046, now + 0.3, 0.4, 0.5, "sine");
    playTone(1318, now + 0.35, 0.35, 0.4, "sine");
    playTone(1568, now + 0.4, 0.5, 0.45, "sine");
    playTone(2093, now + 0.45, 0.6, 0.35, "sine");
  } catch (e) {
    // silently fail if audio context is not available
  }
}
