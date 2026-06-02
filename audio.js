// audio.js — Web Audio API, zero dipendenze, zero file esterni
// 3 suoni: Sovereign Proximity drone, Messaggio in arrivo, Caught breakdown

export class LoomAudio {
  constructor() {
    this.ctx = null;
    this.sovereignDrone = null;
    this.sovereignGain = null;
    this.sovereignFilter = null;
    this.enabled = true;
    this._initialized = false;
  }

  // Inizializza solo dopo un gesto utente (requisito browser)
  init() {
    if (this._initialized) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this._initialized = true;
    } catch(e) {
      console.warn('Web Audio non disponibile:', e);
      this.enabled = false;
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled) this.stopSovereignDrone();
    return this.enabled;
  }

  // ── 1. SOVEREIGN PROXIMITY DRONE ─────────────────────────────────
  // Drone basso e lento che cresce con l'alert level della regina
  startSovereignDrone(alertLevel = 1) {
    if (!this.enabled || !this.ctx) return;
    this.vibrateSovereign(alertLevel);
    this.stopSovereignDrone();

    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(
      0.04 + alertLevel * 0.025,
      this.ctx.currentTime + 2.0
    );
    masterGain.connect(this.ctx.destination);
    this.sovereignGain = masterGain;

    // Oscillatore base — frequenza bassa, minacciosa
    const baseFreq = 38 + alertLevel * 6; // 44-56 Hz con alertLevel 1-3
    const osc1 = this.ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);

    // Secondo oscillatore leggermente detuned — crea beating inquietante
    const osc2 = this.ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(baseFreq * 1.5 + 0.7, this.ctx.currentTime);

    // Terzo oscillatore sub-bass
    const osc3 = this.ctx.createOscillator();
    osc3.type = 'triangle';
    osc3.frequency.setValueAtTime(baseFreq * 0.5, this.ctx.currentTime);

    // Filtro passa-basso per ammorbidire
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180 + alertLevel * 40, this.ctx.currentTime);
    filter.Q.setValueAtTime(2, this.ctx.currentTime);
    this.sovereignFilter = filter;

    // LFO per modulazione lenta del volume — respiro
    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.15 + alertLevel * 0.05, this.ctx.currentTime);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(0.008, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(masterGain.gain);

    // Rumore bianco tenue per texture
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.015;
    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(alertLevel * 0.3, this.ctx.currentTime);

    // Connessioni
    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(filter);
    filter.connect(masterGain);
    noise.connect(noiseGain);
    noiseGain.connect(masterGain);

    // Avvia tutto
    [osc1, osc2, osc3, lfo, noise].forEach(n => n.start());
    this.sovereignDrone = { osc1, osc2, osc3, lfo, noise, noiseGain, masterGain };
  }

  updateSovereignAlert(alertLevel) {
    if (!this.sovereignDrone || !this.ctx) return;
    this.vibrateSovereign(alertLevel);
    const { masterGain } = this.sovereignDrone;
    const newVol = 0.04 + alertLevel * 0.025;
    masterGain.gain.linearRampToValueAtTime(newVol, this.ctx.currentTime + 1.0);
    if (this.sovereignFilter) {
      this.sovereignFilter.frequency.linearRampToValueAtTime(
        180 + alertLevel * 40,
        this.ctx.currentTime + 1.0
      );
    }
  }

  stopSovereignDrone() {
    if (!this.sovereignDrone) return;
    const { osc1, osc2, osc3, lfo, noise, masterGain } = this.sovereignDrone;
    try {
      masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.5);
      setTimeout(() => {
        try { [osc1, osc2, osc3, lfo, noise].forEach(n => n.stop()); } catch(e) {}
      }, 1600);
    } catch(e) {}
    this.sovereignDrone = null;
    this.sovereignGain = null;
  }

  // ── 2. MESSAGGIO IN ARRIVO ────────────────────────────────────────
  // Tre click brevi ascendenti — digitale, preciso, urgente
  playIncomingMessage() {
    if (!this.enabled || !this.ctx) return;
    this.vibrateIncoming();
    const now = this.ctx.currentTime;
    const clicks = [0, 0.12, 0.24];
    const freqs  = [880, 1100, 1320];

    clicks.forEach((delay, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freqs[i], now + delay);
      gain.gain.setValueAtTime(0, now + delay);
      gain.gain.linearRampToValueAtTime(0.18, now + delay + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.09);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + delay);
      osc.stop(now + delay + 0.1);
    });
  }

  // ── 3. CAUGHT BREAKDOWN ───────────────────────────────────────────
  // Interferenza che sale e crolla — il momento più memorabile
  playCaught() {
    if (!this.enabled || !this.ctx) return;
    this.stopSovereignDrone();
    this.vibrateCaught();
    const now = this.ctx.currentTime;

    // Sweep di frequenza ascendente — panico
    const sweep = this.ctx.createOscillator();
    sweep.type = 'sawtooth';
    sweep.frequency.setValueAtTime(80, now);
    sweep.frequency.exponentialRampToValueAtTime(1800, now + 1.2);
    const sweepGain = this.ctx.createGain();
    sweepGain.gain.setValueAtTime(0.0, now);
    sweepGain.gain.linearRampToValueAtTime(0.22, now + 0.1);
    sweepGain.gain.linearRampToValueAtTime(0.0, now + 1.2);
    sweep.connect(sweepGain);
    sweepGain.connect(this.ctx.destination);
    sweep.start(now);
    sweep.stop(now + 1.3);

    // Rumore bianco burst — interferenza
    const bufSize = this.ctx.sampleRate * 1.5;
    const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) d[i] = Math.random() * 2 - 1;
    const noiseSrc = this.ctx.createBufferSource();
    noiseSrc.buffer = buf;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.08, now);
    noiseGain.gain.linearRampToValueAtTime(0.18, now + 0.3);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(800, now);
    noiseFilter.Q.setValueAtTime(0.5, now);
    noiseSrc.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);
    noiseSrc.start(now);

    // Tre "glitch" spike — come dati corrotti
    [0.4, 0.75, 1.1].forEach((t, i) => {
      const spike = this.ctx.createOscillator();
      spike.type = 'square';
      spike.frequency.setValueAtTime(200 + i * 300, now + t);
      const spikeGain = this.ctx.createGain();
      spikeGain.gain.setValueAtTime(0.15, now + t);
      spikeGain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.06);
      spike.connect(spikeGain);
      spikeGain.connect(this.ctx.destination);
      spike.start(now + t);
      spike.stop(now + t + 0.07);
    });

    // Drop finale — silenzio improvviso con sub-bass kick
    const kick = this.ctx.createOscillator();
    kick.type = 'sine';
    kick.frequency.setValueAtTime(55, now + 1.3);
    kick.frequency.exponentialRampToValueAtTime(20, now + 1.7);
    const kickGain = this.ctx.createGain();
    kickGain.gain.setValueAtTime(0.35, now + 1.3);
    kickGain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
    kick.connect(kickGain);
    kickGain.connect(this.ctx.destination);
    kick.start(now + 1.3);
    kick.stop(now + 1.9);
  }

  // ── BONUS: ping radar leggero ─────────────────────────────────────
  playPing(type = 'gossip') {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const freq = type === 'alert' ? 660 : 440;
    const vol  = type === 'alert' ? 0.08 : 0.04;
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.7, now + 0.15);
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  // ══ VIBRATION API ════════════════════════════════════════════════
  _vibrate(pattern) {
    if (!this.enabled) return;
    if (!navigator.vibrate) return;
    try { navigator.vibrate(pattern); } catch(e) {}
  }
  vibrateIncoming() { this._vibrate([80]); }
  vibrateSovereign(alertLevel = 1) {
    const patterns = { 1:[30,60,30], 2:[50,40,50,40,50], 3:[80,25,80,25,80,25,80] };
    this._vibrate(patterns[Math.min(3,Math.max(1,alertLevel))] || patterns[1]);
  }
  vibrateCaught() { this._vibrate([100,50,150,40,200,30,250,20,300]); }
}

// Singleton globale
export const audio = new LoomAudio();


