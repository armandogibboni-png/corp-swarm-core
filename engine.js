// engine.js v7 — relazioni agent-to-agent, regine antagoniste, 3 tipi missione, progressione
import { generateUniqueSwarmNames } from './names.js';
import { CONTEXT_CONFIG, LORE_BY_CONTEXT, FALLBACK_MATRIX, MISSION_TEMPLATES } from './prose.js';

// ── PROGRESSIONE CROSS-PARTITA ────────────────────────────────────────────────
export const Progress = {
  get() {
    try { return JSON.parse(localStorage.getItem('loom_progress') || '{}'); } catch { return {}; }
  },
  save(data) { localStorage.setItem('loom_progress', JSON.stringify(data)); },
  addVictory(scenario, method, turns) {
    const p = this.get();
    p.victories = (p.victories || 0) + 1;
    p.totalTurns = (p.totalTurns || 0) + turns;
    p.scenariosCompleted = p.scenariosCompleted || [];
    if (!p.scenariosCompleted.includes(scenario)) p.scenariosCompleted.push(scenario);
    p.lastMethod = method;
    p.title = this.computeTitle(p.victories);
    p.difficultyMod = Math.min(3, Math.floor(p.victories / 2)); // aumenta ogni 2 vittorie
    this.save(p); return p;
  },
  computeTitle(v) {
    if (v === 0) return 'Osservatore';
    if (v === 1) return 'Infiltrato';
    if (v < 4)  return 'Manipolatore';
    if (v < 7)  return 'Fantasma';
    if (v < 10) return 'Architetto delle Ombre';
    return 'LOOM';
  },
  getDifficultyMod() { return this.get().difficultyMod || 0; }
};

// ── PERSONAGGI RICORRENTI ─────────────────────────────────────────────────────
// Appaiono in ogni scenario con ruoli leggermente diversi
export const RECURRING = [
  {
    id: 'recurring_0', baseName: 'Il Custode',
    aliases: { MILANO_STARTUP:'Marco Sartori', VILLAGGIO_VACANZE:'Mario Conti',
      PAESE_BORGO:'Don Carmelo', DUBLINO_BIGTECH:'Marcus Ward',
      OSPEDALE_NOTTURNO:'Dr. Mancini', NAVE_CROCIERA:'Capitano Ferretti',
      DEFAULT:'Marco Ferretti' },
    role: 'Sempre nella stessa fazione di potere. Sa più di quello che dice. Non ti tradisce mai — ma non ti aiuta mai gratis.',
    betraysAt: 0.8 // tradisce se il suo sospetto supera questo
  },
  {
    id: 'recurring_1', baseName: 'La Spia',
    aliases: { MILANO_STARTUP:'Alessia Neri', VILLAGGIO_VACANZE:'Vanessa Costa',
      PAESE_BORGO:'Filomena Greco', DUBLINO_BIGTECH:'Aoife Murphy',
      OSPEDALE_NOTTURNO:'Dott.ssa Ricci', DEFAULT:'Alessia Neri' },
    role: 'Ti sembra alleata. Ti ha già tradito una volta in una partita precedente. O forse sei tu quello che la usa.',
    betraysAt: 0.6
  },
];

export class SwarmEngine {
  constructor(contextKey) {
    this.contextKey = contextKey;
    this.config = CONTEXT_CONFIG[contextKey];
    this.factions = this.config.factions;
    this.agents = [];
    this.playerRelations = {};
    this.agentRelations = {}; // relazioni agent-to-agent
    this.factionSuspicion = {};
    this.factions.forEach(f => this.factionSuspicion[f] = 0.10);
    this.networkSuspicion = 0.10;
    this.ghostTimers = {};
    this.queens = [];
    this.activeMissions = [];
    this.missionAgents = {};
    this.onCreditsChange = null;
    this.onCreditEvent = null;
    this.onQueenAlert = null; // callback quando regina reagisce
    this.onMidgameEvent = null;
    this.onRoomAlert = null;
    this.onCaught = null;
    this.onFieldOpComplete = null;
    this.onProximityEvent = null;
    this.onPosturaChange = null;
    this.onVisibleEntry = null;
    this.onBaseDecay = null;
    this.playerPostura = 'NEUTRALE';
    this.playerInBase = false;
    this.playerVisited = new Set();
    this.turn = 0; // conta i messaggi inviati
    this.midgameTriggered = false;
    const diff = Progress.getDifficultyMod();
    this.suspicionMultiplier = 1 + (diff * 0.25); // difficoltà crescente
    localStorage.setItem('loom_credits', '100');
  }

  init() {
    this.agents = [];
    const identities = generateUniqueSwarmNames(200, this.contextKey);
    const loreByFaction = LORE_BY_CONTEXT[this.contextKey] || {};
    const zones = this.config.zones || [];

    for (let i = 0; i < 200; i++) {
      const faction = this.factions[i % this.factions.length];
      const center = this.config.factionCenters[faction];
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.03 + Math.random() * 0.10;
      const lorePool = loreByFaction[faction] || ['Nasconde qualcosa.'];
      const isHub = (i < this.factions.length);
      const isMissionAgent = isHub;
      const zone = zones.length > 0 ? zones[Math.floor(Math.random() * zones.length)] : null;

      this.agents.push({
        id: `node_${i}`,
        name: identities[i],
        faction,
        pressure: isHub ? 0.05 : Math.random() * 0.25,
        ghostProbability: isHub ? 0.05 : 0.15 + Math.random() * 0.40,
        betrayalThreshold: 0.65 + Math.random() * 0.25,
        currentLoreSnippet: lorePool[i % lorePool.length],
        isBlacklisted: false,
        isHub, isMissionAgent,
        isQueen: false, queenNeutralized: false, isRecurring: false,
        rx: center.rx + Math.cos(angle) * radius,
        ry: center.ry + Math.sin(angle) * radius,
        targetRx: center.rx + Math.cos(angle) * radius,
        targetRy: center.ry + Math.sin(angle) * radius,
        x: 0, y: 0, index: i,
        alliances: [], feuds: [],
        incomingCooldown: 0,
        currentZone: zone ? zone.label : null,
        zoneChangeCooldown: Math.floor(Math.random() * 300),
        followers: [],
        agentSuspicionOf: {}, // questo agente sospetta di altri agenti
      });
      this.playerRelations[`node_${i}`] = {
        trustTier: 0, interactionCount: 0, history: [], _dossierPaid: false
      };
    }

    this.agents.forEach((agent, i) => {
      agent.alliances.push(`node_${(i + 1) % 200}`);
      agent.alliances.push(`node_${(i + 4) % 200}`);
      agent.feuds.push(`node_${(i + 35) % 200}`);
    });

    // Relazioni agent-to-agent iniziali
    this.agents.forEach(a => {
      this.agentRelations[a.id] = {};
      a.alliances.forEach(bid => { this.agentRelations[a.id][bid] = 0.7; });
      a.feuds.forEach(bid => { this.agentRelations[a.id][bid] = -0.3; });
    });

    this._injectRecurringCharacters();
    this.initQueens();
    this._generateMissions();
    this.initRooms();
  }

  // ── PERSONAGGI RICORRENTI ─────────────────────────────────────────
  _injectRecurringCharacters() {
    RECURRING.forEach((rec, ri) => {
      const agent = this.agents[ri]; // prende i primi agenti
      if (!agent) return;
      const name = rec.aliases[this.contextKey] || rec.aliases.DEFAULT;
      agent.name = name;
      agent.isRecurring = true;
      agent.recurringId = rec.id;
      agent.recurringRole = rec.role;
      agent.betraysAt = rec.betraysAt;
    });
  }

  // ── REGINE ────────────────────────────────────────────────────────
  initQueens() {
    this.queens = [];
    const queensFactions = this.factions.slice(0, 2);
    queensFactions.forEach(faction => {
      const hubs = this.agents.filter(a => a.isHub && a.faction === faction && !a.isRecurring);
      const queen = hubs[0] || this.agents.find(a => a.faction === faction && !a.isRecurring);
      if (!queen) return;
      queen.isQueen = true;
      queen.queenNeutralized = false;
      queen.queenAlertSent = false;
      queen.followers = this.agents
        .filter(a => a.faction === faction && !a.isQueen && !a.isMissionAgent)
        .slice(0, 8).map(a => a.id);
      // La regina ha relazioni più forti con i suoi followers
      queen.followers.forEach(fid => {
        this.agentRelations[queen.id][fid] = 0.95;
        this.agentRelations[fid] = this.agentRelations[fid] || {};
        this.agentRelations[fid][queen.id] = 0.9;
      });
      this.queens.push({
        agentId: queen.id, faction,
        realName: queen.name, secret: queen.currentLoreSnippet,
        neutralized: false, neutralizeMethod: null,
        followersBlacklisted: 0, secretsCollected: 0,
        identified: false, alertLevel: 0, // 0-3: aumenta quando il player si avvicina
      });
    });
  }


  // ── SISTEMA STANZE (6 stanze per scenario) ───────────────────────
  initRooms() {
    this.rooms = {}; // { label: { anxiety:0, agents:[], events:[] } }
    const zones = this.config.zones || [];
    zones.forEach(z => {
      this.rooms[z.label] = { anxiety: 0.1, agents: [], alertActive: false, bugged: false, bugTurns: 0 };
    });
    // Distribuzione iniziale agenti nelle stanze
    this._distributeAgentsToRooms();
    // Posizione iniziale player: prima stanza
    this.playerRoom = zones[0]?.label || null;
    this.activeFieldOp = null; // { type, targetId, targetRoom, turnsLeft, onCatch }
    this.freePayloadUses = 0; // dalla slot machine
  }

  _distributeAgentsToRooms() {
    const zones = this.config.zones || [];
    if (!zones.length) return;
    Object.keys(this.rooms).forEach(r => { this.rooms[r].agents = []; });
    this.agents.forEach(agent => {
      if (!agent.currentZone || !this.rooms[agent.currentZone]) {
        const z = zones[Math.floor(Math.random() * zones.length)];
        agent.currentZone = z.label;
      }
      if (this.rooms[agent.currentZone]) {
        this.rooms[agent.currentZone].agents.push(agent.id);
      }
    });
  }

  movePlayerTo(roomLabel) {
    if (!this.rooms[roomLabel]) return false;
    this.playerRoom = roomLabel;
    // Controlla se il player entra in una stanza con un field op attivo in rischio
    this._checkCaughtOnEntry(roomLabel);
    return true;
  }

  getRoomAgents(roomLabel) {
    const room = this.rooms[roomLabel];
    if (!room) return [];
    return room.agents.map(id => this.agents.find(a => a.id === id)).filter(Boolean);
  }

  getRoomAnxiety(roomLabel) {
    return this.rooms[roomLabel]?.anxiety || 0;
  }

  // Aggiorna stanze ogni tick
  tickRooms() {
    const zones = this.config.zones || [];
    if (!zones.length) return;
    // Ridistribuisci agenti
    this._distributeAgentsToRooms();
    // Decadimento anxiety
    Object.keys(this.rooms).forEach(r => {
      const room = this.rooms[r];
      if (room.anxiety > 0.1) room.anxiety = Math.max(0.1, room.anxiety - 0.002);
      // Bug timer
      if (room.bugged) {
        room.bugTurns--;
        if (room.bugTurns <= 0) { room.bugged = false; room.bugTurns = 0; }
      }
      // Spike casuale anxiety (ogni tanto una stanza diventa calda)
      if (Math.random() < 0.001) {
        room.anxiety = Math.min(1, room.anxiety + 0.3);
        room.alertActive = true;
        if (this.onRoomAlert) this.onRoomAlert(r, room.anxiety);
      } else if (room.anxiety < 0.4) {
        room.alertActive = false;
      }
    });
    // Field op timer
    if (this.activeFieldOp) {
      this.activeFieldOp.turnsLeft--;
      if (this.activeFieldOp.turnsLeft <= 0) {
        this._resolveFieldOp();
      }
      this._checkCaughtOnEntry(null); // controlla ogni tick
    }
  }

  // Controlla se il target torna nella stanza durante un field op
  _checkCaughtOnEntry(roomLabel) {
    if (!this.activeFieldOp) return;
    const op = this.activeFieldOp;
    if (op.type === 'search_belongings' || op.type === 'safe_cracking') {
      const target = this.agents.find(a => a.id === op.targetId);
      if (!target) return;
      const targetNowInOpRoom = target.currentZone === op.targetRoom;
      if (targetNowInOpRoom && op.turnsLeft > 0) {
        this._triggerCaught(op.targetId);
      }
    }
  }

  _triggerCaught(targetId) {
    const agent = this.agents.find(a => a.id === targetId);
    if (!agent) return;
    // Conseguenze: sospetto a 95%, trust → traitor
    this.factionSuspicion[agent.faction] = 0.95;
    const rel = this.playerRelations[targetId];
    if (rel) { rel.trustTier = -1; rel.traitor = true; }
    // Blocca romance storylines
    agent.romanceLocked = true;
    this.activeFieldOp = null;
    if (this.onCaught) this.onCaught(agent);
  }

  _resolveFieldOp() {
    const op = this.activeFieldOp;
    this.activeFieldOp = null;
    if (this.onFieldOpComplete) this.onFieldOpComplete(op);
  }


  // ══ BEACON SYSTEM ════════════════════════════════════════════════
  getAgentBeacon(agent) {
    if (agent.isBlacklisted) return { signal:'DARK', icon:'⬛', color:'#1a1a2a', priority:0 };
    if (agent.isQueen && !agent.queenNeutralized) return { signal:'SOVEREIGN', icon:'◆', color:'#e05555', priority:10 };
    if (agent.isRecurring) return { signal:'RECURRING', icon:'★', color:'#9a7ecf', priority:8 };
    if (agent.isMissionAgent) {
      const mission = this.activeMissions.find(m => m.givenBy === agent.id && m.status === 'active');
      if (mission) return { signal:'HANDLER', icon:'🎯', color:'#c8a97e', priority:9 };
    }
    const mission = this.activeMissions.find(m => m.targetId === agent.id && m.status === 'active');
    if (mission) return { signal:'TARGET', icon:'🔍', color:'#c8a97e', priority:7 };
    if (agent.pressure > 0.65) return { signal:'HOT', icon:'🔴', color:'#e05555', priority:6 };
    if (agent.pressure > 0.30) return { signal:'WARM', icon:'🟡', color:'#c8a97e', priority:4 };
    return { signal:'COLD', icon:'🟢', color:'#55e888', priority:2 };
  }

  // Beacon di tutti gli agenti in una stanza — solo i notevoli
  getRoomBeacons(roomLabel) {
    const agents = this.getRoomAgents(roomLabel);
    return agents
      .map(a => ({ agent: a, beacon: this.getAgentBeacon(a) }))
      .filter(x => x.beacon.priority >= 4) // solo WARM e sopra
      .sort((a,b) => b.beacon.priority - a.beacon.priority)
      .slice(0, 5);
  }

  // ══ PROXIMITY MODIFIERS ═══════════════════════════════════════════
  getProximityContext(targetId) {
    const target = this.agents.find(a => a.id === targetId);
    if (!target) return { sameRoom: false, costMod: 1, effectMod: 1, canSearchBelongings: false };

    const sameRoom = target.currentZone === this.playerRoom;
    const roomAnxiety = this.rooms?.[this.playerRoom]?.anxiety || 0;
    const targetRoomAnxiety = this.rooms?.[target.currentZone]?.anxiety || 0;

    // Stessa stanza: Affinity più economica e efficace
    const costMod = sameRoom
      ? (roomAnxiety > 0.6 ? 0.3 : 0.8)   // stessa stanza HOT: -70%; normale: -20%
      : (roomAnxiety > 0.6 ? 0.5 : 1.0);   // stanza diversa HOT: -50%; normale: normale

    const effectMod = sameRoom
      ? (roomAnxiety > 0.6 ? 2.5 : 1.3)
      : (roomAnxiety > 0.6 ? 2.0 : 1.0);

    return {
      sameRoom,
      costMod,
      effectMod,
      canSearchBelongings: !sameRoom,       // Search solo se target assente
      canSafeCracking: !sameRoom && target.currentZone !== this.playerRoom,
      affinityBonus: sameRoom,
      targetAnxiety: target.pressure,
      roomAnxiety,
    };
  }

  // ══ PROXIMITY TICK — conseguenze di stare vicino alla regina ══════
  tickProximity() {
    if (!this.playerRoom) return;
    const events = [];

    // Regina nella stessa stanza
    this.queens.forEach(q => {
      if (q.neutralized) return;
      const queenAgent = this.agents.find(a => a.id === q.agentId);
      if (!queenAgent || queenAgent.currentZone !== this.playerRoom) return;

      // Alert cresce ogni turno di presenza
      if (this.turn % 20 === 0) { // ogni 20 turni
        q.alertLevel = Math.min(3, q.alertLevel + 1);
        if (!q.queenAlertSent && q.alertLevel >= 2) {
          q.queenAlertSent = true;
          if (this.onQueenAlert) this.onQueenAlert(q);
        }
        events.push({
          type: 'queen_proximity',
          text: `[SOVEREIGN] ${queenAgent.name.split(' ')[0]} ha rilevato la tua presenza. Alert +1.`,
          agentId: q.agentId
        });
      }
    });

    // Follower della regina nella stessa stanza
    this.queens.forEach(q => {
      if (q.neutralized) return;
      const queenAgent = this.agents.find(a => a.id === q.agentId);
      if (!queenAgent) return;
      (queenAgent.followers || []).forEach(fid => {
        const follower = this.agents.find(a => a.id === fid);
        if (!follower || follower.isBlacklisted) return;
        if (follower.currentZone === this.playerRoom && this.turn % 8 === 0) {
          this.factionSuspicion[follower.faction] = Math.min(1,
            (this.factionSuspicion[follower.faction] || 0) + 0.04);
          events.push({
            type: 'follower_proximity',
            text: `[BEACON] ${follower.name.split(' ')[0]} è un follower della regina. Sospetto +4%.`,
            agentId: fid
          });
        }
      });
    });

    return events;
  }

  // ══ SINERGIA FIELD OPS → MISSIONI ════════════════════════════════
  // Controlla se una Field Op ha completato una missione
  checkFieldOpMissionProgress(opType, targetId, result) {
    const completed = [];
    this.activeMissions.forEach(mission => {
      if (mission.status !== 'active') return;
      if (mission.targetId !== targetId) return;

      let done = false;

      // Intel missions: risolte da search_belongings, encrypted_confession, shadow_stalking
      if (mission.type === 'intel') {
        if (['search_belongings', 'encrypted_confession', 'safe_cracking'].includes(opType) && result.success) {
          done = true;
        }
      }
      // Disinfo missions: risolte da anonymous_slander, environmental_diversion, digital_gaslighting
      if (mission.type === 'disinfo') {
        if (['anonymous_slander', 'environmental_diversion', 'digital_gaslighting'].includes(opType) && result.success) {
          done = true;
        }
      }
      // Timed missions: casual_encounter accelera (riduce timer di 3)
      if (mission.type === 'timed') {
        if (opType === 'casual_encounter' && result.success) {
          mission.timeLimit = Math.max(2, (mission.timeLimit || 15) - 3);
        }
        // bait_date + target nella stessa stanza = completamento immediato
        if (opType === 'bait_date' && result.success) {
          done = true;
        }
      }

      if (done) {
        mission.status = 'completed';
        completed.push(mission);
        // Aggiorna segreti raccolti per le regine
        this.queens.forEach(q => {
          const queenAgent = this.agents.find(a => a.id === q.agentId);
          if (!queenAgent) return;
          if ((queenAgent.followers||[]).includes(targetId)) {
            q.secretsCollected = Math.min(3, (q.secretsCollected||0) + 1);
            this.checkQueenProgress(q);
          }
        });
      }
    });
    return completed;
  }

  // ══ FIELD OP CON PROXIMITY MODIFIER ══════════════════════════════
  launchFieldOpWithProximity(type, targetId, zoneLabel, options) {
    // Calcola modificatori di prossimità
    const prox = targetId ? this.getProximityContext(targetId) : { costMod:1, effectMod:1 };

    // Blocco etica
    const BLOCKED = ['drug','alcohol','hate','violence','sex','weapon'];
    if (BLOCKED.some(b => (options?.text||'').toLowerCase().includes(b))) {
      return { success:false, text:'[ERROR] FIELD_OP REJECTED // PROTOCOL COMPLIANCE VIOLATION' };
    }

    // Lancia con modificatori
    const result = this.launchFieldOp(type, targetId, zoneLabel, { ...options, proximityMod: prox });

    if (result.success) {
      // Controlla completamento missioni
      const completedMissions = this.checkFieldOpMissionProgress(type, targetId, result);
      result.completedMissions = completedMissions;

      // Aggiorna segreti raccolti se necessario
      if (['search_belongings','encrypted_confession','safe_cracking'].includes(type)) {
        const target = this.agents.find(a => a.id === targetId);
        if (target) {
          const rel = this.playerRelations[targetId];
          if (rel) rel.interactionCount = Math.max(rel.interactionCount, 4);
        }
      }
    }

    return result;
  }


  // ══ SISTEMA POSTURA ══════════════════════════════════════════════
  // OMBRA | NEUTRALE | VISIBILE | BASE
  setPostura(postura) {
    const prev = this.playerPostura;
    this.playerPostura = postura;

    if (postura === 'BASE') {
      this.playerRoom = null;
      this.playerInBase = true;
      if (this.onPosturaChange) this.onPosturaChange(postura, null);
      return { success: true, text: 'Sei rientrato alla base. Operazioni remote disponibili.' };
    }

    this.playerInBase = false;

    const costByPostura = { OMBRA: 15, NEUTRALE: 0, VISIBILE: 0 };
    const cost = costByPostura[postura] || 0;
    if (cost > 0 && !this.spendCredits(cost)) {
      this.playerPostura = prev;
      return { success: false, text: `Crediti insufficienti per postura OMBRA (${cost} pts).` };
    }

    if (this.onPosturaChange) this.onPosturaChange(postura, this.playerRoom);
    return { success: true, cost };
  }

  moveWithPostura(roomLabel, postura) {
    if (!this.rooms[roomLabel]) return { success: false, text: 'Stanza non trovata.' };

    // Applica postura
    const postaraResult = this.setPostura(postura);
    if (!postaraResult.success) return postaraResult;

    if (postura === 'BASE') return postaraResult;

    const prev = this.playerRoom;
    this.playerRoom = roomLabel;
    this.playerVisited = this.playerVisited || new Set();
    const firstVisit = !this.playerVisited.has(roomLabel);
    this.playerVisited.add(roomLabel);

    const room = this.rooms[roomLabel];
    const anxiety = room?.anxiety || 0;
    const queenHere = this.queens?.some(q => {
      const qa = this.agents.find(a => a.id === q.agentId);
      return qa && qa.currentZone === roomLabel && !q.neutralized;
    });

    // Calcola rischio spostamento
    let riskLevel = 'silenzioso';
    let suspicionHit = 0;

    if (postura === 'OMBRA') {
      riskLevel = 'invisibile';
      suspicionHit = 0;
    } else if (postura === 'VISIBILE') {
      riskLevel = 'esposto';
      suspicionHit = 0.05;
      // Annuncia entrata nel monitor di tutti gli agenti della stanza
      if (this.onVisibleEntry) {
        const agentsHere = this.getRoomAgents(roomLabel).slice(0, 4);
        this.onVisibleEntry(roomLabel, agentsHere);
      }
    } else { // NEUTRALE
      if (queenHere) { riskLevel = 'critico'; suspicionHit = 0.05; }
      else if (anxiety > 0.6) { riskLevel = 'rischioso'; suspicionHit = 0.05; }
      else if (anxiety > 0.3) { riskLevel = 'moderato'; suspicionHit = 0.02; }
      else { riskLevel = 'silenzioso'; suspicionHit = 0; }
    }

    // Applica sospetto
    if (suspicionHit > 0) {
      const faction = this.agents.find(a => a.currentZone === roomLabel && !a.isBlacklisted)?.faction;
      if (faction) this.raiseFactionSuspicion(faction, suspicionHit, null);
    }

    // Regina in stanza: alert immediato se VISIBILE o NEUTRALE
    if (queenHere && postura !== 'OMBRA') {
      const q = this.queens.find(q => {
        const qa = this.agents.find(a => a.id === q.agentId);
        return qa && qa.currentZone === roomLabel && !q.neutralized;
      });
      if (q) {
        q.alertLevel = Math.min(3, q.alertLevel + (postura === 'VISIBILE' ? 2 : 1));
        if (this.onQueenAlert && q.alertLevel >= 2) this.onQueenAlert(q);
      }
    }

    // Check caught se field op attiva
    this._checkCaughtOnEntry(roomLabel);

    return {
      success: true,
      riskLevel,
      suspicionHit,
      queenHere,
      firstVisit,
      room: roomLabel,
      postura,
    };
  }

  // Verifica se una Field Op è consentita con la postura corrente
  canDoFieldOp(type) {
    const postura = this.playerPostura || 'NEUTRALE';
    // Ops che richiedono presenza fisica — vietate in OMBRA dalla base
    const PRESENCE_OPS = ['casual_encounter','targeted_gift','encrypted_confession',
      'bait_date','weaponized_jealousy'];
    // Ops vietate in BASE (richiedono presenza)
    const BASE_BLOCKED = ['casual_encounter','targeted_gift','encrypted_confession',
      'bait_date','weaponized_jealousy','search_belongings','safe_cracking'];
    // Ops vietate in OMBRA (richiedono interazione diretta)
    const OMBRA_BLOCKED = ['casual_encounter','targeted_gift','encrypted_confession',
      'bait_date','weaponized_jealousy'];

    if (this.playerInBase && BASE_BLOCKED.includes(type)) {
      return { allowed: false, reason: 'Operazione non disponibile dalla base. Richiede presenza fisica.' };
    }
    if (postura === 'OMBRA' && OMBRA_BLOCKED.includes(type)) {
      return { allowed: false, reason: 'Operazione non disponibile in ombra. Saresti rilevato.' };
    }
    return { allowed: true };
  }

  // Decadimento sospetto in base
  tickBase() {
    if (!this.playerInBase) return;
    if (this.turn % 10 === 0) {
      this.factions.forEach(f => {
        this.factionSuspicion[f] = Math.max(0.10,
          (this.factionSuspicion[f] || 0) - 0.02);
      });
      if (this.onBaseDecay) this.onBaseDecay();
    }
  }

  // Affinità bonus per VISIBILE
  getConversationMods() {
    const postura = this.playerPostura || 'NEUTRALE';
    if (postura === 'VISIBILE') return { trustMod: 1.5, inboundChance: 2.0 };
    if (postura === 'OMBRA')    return { trustMod: 0.5, inboundChance: 0.0 };
    return { trustMod: 1.0, inboundChance: 1.0 };
  }

  // ── FIELD OPERATIONS ──────────────────────────────────────────────
  launchFieldOp(type, targetId, zoneLabel, options) {
    const target = this.agents.find(a => a.id === targetId);
    const roomAnxiety = zoneLabel ? (this.rooms[zoneLabel]?.anxiety || 0) : 0;
    const costMod = roomAnxiety > 0.6 ? 0.5 : 1; // alto anxiety = 50% sconto
    const effectMod = roomAnxiety > 0.6 ? 2 : 1;  // alto anxiety = doppio effetto

    const OPS = {
      // SET 1 — AFFINITY
      casual_encounter: {
        cost: Math.floor(20 * costMod), turns: 0,
        exec: () => {
          if (target) {
            target.pressure = Math.max(0, target.pressure - 0.15 * effectMod);
            const rel = this.playerRelations[targetId];
            if (rel) rel.trustTier = Math.max(rel.trustTier, 0);
          }
          return { text: `Incontro casuale con ${target?.name.split(' ')[0]}. Tensione calata.`, type: 'positive' };
        }
      },
      targeted_gift: {
        cost: Math.floor(40 * costMod), turns: 0,
        exec: () => {
          if (!target) return { text: 'Target non trovato.', type: 'negative' };
          const rel = this.playerRelations[targetId];
          // Controlla se il regalo corrisponde all'archetipo (semplificato: 50% chance)
          const match = Math.random() > 0.5;
          if (match) {
            rel.trustTier = Math.min(2, rel.trustTier + 1);
            return { text: `Il regalo ha colpito nel segno. Bond raddoppiato con ${target.name.split(' ')[0]}.`, type: 'positive' };
          } else {
            target.pressure = Math.min(1, target.pressure + 0.2 * effectMod);
            return { text: `Regalo sbagliato. ${target.name.split(' ')[0]} è diventato/a sospettoso/a.`, type: 'negative' };
          }
        }
      },
      encrypted_confession: {
        cost: Math.floor(60 * costMod), turns: 2,
        requires: { trustTier: 1 },
        exec: () => {
          if (!target) return { text: 'Target non trovato.', type: 'negative' };
          const rel = this.playerRelations[targetId];
          if (rel.trustTier < 1) return { text: 'Fiducia insufficiente per questa operazione.', type: 'negative' };
          // Sblocca segreto gratis
          rel.interactionCount = Math.max(rel.interactionCount, 10);
          return { text: `Confessione criptata inviata. Il segreto di ${target.name.split(' ')[0]} è sbloccato.`, type: 'positive', unlockSecret: targetId };
        }
      },
      bait_date: {
        cost: Math.floor(80 * costMod), turns: 3,
        exec: () => {
          if (!target || !zoneLabel) return { text: 'Parametri mancanti.', type: 'negative' };
          // Sposta il target nella stanza del player
          const zones = this.config.zones || [];
          const destZone = zones.find(z => z.label === this.playerRoom) || zones[0];
          if (destZone) {
            target.targetRx = destZone.rx + (Math.random()-0.5)*0.05;
            target.targetRy = destZone.ry + (Math.random()-0.5)*0.05;
            target.currentZone = destZone.label;
            target.zoneChangeCooldown = 999;
          }
          return { text: `${target.name.split(' ')[0]} è stato/a attirato/a verso ${destZone?.label}.`, type: 'positive' };
        }
      },
      weaponized_jealousy: {
        cost: Math.floor(100 * costMod), turns: 0,
        exec: () => {
          // Trova la regina della fazione del target e falla muovere per panico
          const queen = this.agents.find(a => a.isQueen && a.faction === target?.faction);
          if (queen) {
            queen.pressure = Math.min(1, queen.pressure + 0.4 * effectMod);
            queen.zoneChangeCooldown = 0; // si sposta subito
            const q = this.queens.find(q => q.agentId === queen.id);
            if (q) q.alertLevel = Math.min(3, q.alertLevel + 2);
          }
          return { text: `Gelosia innescata. La regina ${target?.faction} si è spostata per il panico.`, type: 'positive' };
        }
      },
      // SET 2 — INTEL
      shadow_stalking: {
        cost: Math.floor(50 * costMod), turns: 4,
        exec: () => {
          this.activeFieldOp = { type: 'shadow_stalking', targetId, targetRoom: target?.currentZone, turnsLeft: 4, effectMod };
          return { text: `Stalking avviato su ${target?.name.split(' ')[0]}. Monitoraggio attivo per 4 turni.`, type: 'positive', ongoing: true };
        }
      },
      wiretap: {
        cost: Math.floor(70 * costMod), turns: 3,
        exec: () => {
          if (zoneLabel && this.rooms[zoneLabel]) {
            this.rooms[zoneLabel].bugged = true;
            this.rooms[zoneLabel].bugTurns = 3;
          }
          return { text: `Intercettazione piazzata in ${zoneLabel}. Identità svelate per 3 turni.`, type: 'positive' };
        }
      },
      search_belongings: {
        cost: Math.floor(90 * costMod), turns: 5,
        exec: () => {
          if (!target) return { text: 'Target non trovato.', type: 'negative' };
          if (target.currentZone === this.playerRoom) {
            return { text: `${target.name.split(' ')[0]} è nella tua stessa stanza. Impossibile perquisire.`, type: 'negative' };
          }
          this.activeFieldOp = { type: 'search_belongings', targetId, targetRoom: target.currentZone, turnsLeft: 5, effectMod };
          return { text: `Perquisizione avviata. Hai 5 turni prima che ${target.name.split(' ')[0]} torni.`, type: 'positive', ongoing: true };
        }
      },
      safe_cracking: {
        cost: Math.floor(150 * costMod), turns: 8,
        exec: () => {
          if (!target) return { text: 'Target non trovato.', type: 'negative' };
          const distantRoom = target.currentZone !== this.playerRoom;
          if (!distantRoom) return { text: 'Il target deve essere lontano per questa operazione.', type: 'negative' };
          this.activeFieldOp = { type: 'safe_cracking', targetId, targetRoom: target.currentZone, turnsLeft: 8, effectMod };
          return { text: `Cracking della cassaforte avviato. 8 turni. Alto rischio.`, type: 'negative', ongoing: true };
        }
      },
      // SET 3 — WARFARE
      anonymous_slander: {
        cost: Math.floor(60 * costMod), turns: 0,
        exec: () => {
          if (!target) return { text: 'Target non trovato.', type: 'negative' };
          // Rompe il clustering tra fazioni
          const otherFaction = this.factions.find(f => f !== target.faction);
          this.agents.filter(a => a.faction === target.faction).forEach(a => {
            a.feuds = [...new Set([...a.feuds, ...this.agents.filter(x=>x.faction===otherFaction).slice(0,3).map(x=>x.id)])];
          });
          this.raiseFactionSuspicion(target.faction, 0.1 * effectMod, target.id);
          return { text: `Calunnia diffusa. Clustering tra ${target.faction} e ${otherFaction} spezzato.`, type: 'negative' };
        }
      },
      digital_gaslighting: {
        cost: Math.floor(80 * costMod), turns: 0,
        exec: () => {
          if (!target) return { text: 'Target non trovato.', type: 'negative' };
          target.pressure = 1.0;
          target.isBlacklisted = true;
          this.raiseFactionSuspicion(target.faction, 0.08 * effectMod, target.id);
          return { text: `${target.name.split(' ')[0]} ha raggiunto il collasso psicologico. Auto-isolato.`, type: 'negative' };
        }
      },
      environmental_diversion: {
        cost: Math.floor(120 * costMod), turns: 0,
        exec: () => {
          if (!zoneLabel) return { text: 'Specifica una stanza.', type: 'negative' };
          // Forza tutti gli agenti non impegnati a muoversi nella stanza
          const zones = this.config.zones || [];
          const target_zone = zones.find(z => z.label === zoneLabel);
          if (!target_zone) return { text: 'Stanza non trovata.', type: 'negative' };
          this.agents.filter(a => !a.isBlacklisted && !a.isQueen).slice(0, 20).forEach(a => {
            a.targetRx = target_zone.rx + (Math.random()-0.5)*0.08;
            a.targetRy = target_zone.ry + (Math.random()-0.5)*0.08;
            a.currentZone = target_zone.label;
            a.zoneChangeCooldown = 200;
          });
          if (this.rooms[zoneLabel]) this.rooms[zoneLabel].anxiety = Math.min(1, this.rooms[zoneLabel].anxiety + 0.5);
          return { text: `Diversione ambientale in ${zoneLabel}. 20 agenti dirottati.`, type: 'negative', visualEffect: 'flash_red', affectedIds: [] };
        }
      }
    };

    const op = OPS[type];
    if (!op) return { success: false, text: 'Operazione non riconosciuta.' };

    // Controllo etica
    const BLOCKED = ['drug','alcohol','hate','violence','sex','weapon'];
    const inputText = (options?.text || '').toLowerCase();
    if (BLOCKED.some(b => inputText.includes(b))) {
      return { success: false, text: '[ERROR] FIELD_OP REJECTED // PROTOCOL COMPLIANCE VIOLATION' };
    }

    // Controlla crediti
    if (!this.spendCredits(op.cost)) {
      return { success: false, text: `Crediti insufficienti (${op.cost} richiesti).` };
    }

    const result = op.exec();
    result.cost = op.cost;
    result.success = true;
    return result;
  }

  // ── GENERAZIONE MISSIONI (3 tipi) ─────────────────────────────────
  _generateMissions() {
    this.activeMissions = [];
    const MISSION_TYPES = ['intel', 'disinfo', 'timed'];

    this.factions.forEach((faction, fi) => {
      const mAgent = this.agents[fi];
      const templates = MISSION_TEMPLATES[this.contextKey]?.[faction] || MISSION_TEMPLATES.DEFAULT;
      const template = templates[Math.floor(Math.random() * templates.length)];
      const targets = this.agents.filter(a => a.id !== mAgent.id && !a.isMissionAgent);
      const target = targets[Math.floor(Math.random() * targets.length)];
      const type = MISSION_TYPES[fi % MISSION_TYPES.length];

      this.activeMissions.push({
        id: `mission_${fi}`, faction,
        type, // 'intel' | 'disinfo' | 'timed'
        givenBy: mAgent.id, givenByName: mAgent.name,
        targetId: target.id, targetName: target.name, targetFaction: target.faction,
        description: template.replace('{target}', target.name.split(' ')[0]).replace('{faction}', target.faction),
        status: 'active',
        reward: type === 'timed' ? '+200 pts — bonus velocità' : '+150 pts + Slot Machine',
        // Per timed: timer in turni
        timeLimit: type === 'timed' ? 15 : null,
        turnsUsed: 0,
        // Per disinfo: quale rumor iniettare
        disinfoZone: type === 'disinfo' ? (this.config.zones?.[0]?.label || null) : null,
        disinfoCompleted: false,
      });
    });
  }

  // ── TICK ──────────────────────────────────────────────────────────
  tick() {
    this.tickRooms();
    this.tickBase();
    const proximityEvents = this.tickProximity();
    if (proximityEvents && proximityEvents.length > 0 && this.onProximityEvent) {
      proximityEvents.forEach(e => this.onProximityEvent(e));
    }
    const zones = this.config.zones || [];
    this.agents.forEach(agent => {
      if (agent.pressure > 0) agent.pressure = Math.max(0, agent.pressure - 0.001);
      if (this.factionSuspicion[agent.faction] > 0.85) agent.isBlacklisted = true;
      if (agent.incomingCooldown > 0) agent.incomingCooldown--;

      if (zones.length > 0) {
        if (agent.zoneChangeCooldown <= 0) {
          // Le regine si muovono più lentamente e preferiscono certe zone
          const targetZones = agent.isQueen
            ? zones.slice(0, 2) // regine restano nelle zone di potere
            : zones;
          const newZone = targetZones[Math.floor(Math.random() * targetZones.length)];
          const spread = agent.isQueen ? 0.02 : 0.04 + Math.random() * 0.06;
          const a = Math.random() * Math.PI * 2;
          agent.targetRx = newZone.rx + Math.cos(a) * spread;
          agent.targetRy = newZone.ry + Math.sin(a) * spread;
          agent.currentZone = newZone.label;
          agent.zoneChangeCooldown = agent.isQueen
            ? 600 + Math.floor(Math.random() * 400)
            : 200 + Math.floor(Math.random() * 400);
        } else {
          agent.zoneChangeCooldown--;
          agent.rx += (agent.targetRx - agent.rx) * 0.002;
          agent.ry += (agent.targetRy - agent.ry) * 0.002;
        }
      }
    });

    // Dinamiche agent-to-agent: se il player interagisce con A,
    // gli alleati di A aumentano sospetto verso il player
    Object.keys(this.ghostTimers).forEach(agentId => {
      this.ghostTimers[agentId]--;
      if (this.ghostTimers[agentId] <= 0) {
        const agent = this.agents.find(a => a.id === agentId);
        if (agent) { agent.incomingCooldown = 500; agent.pressure = Math.min(1, agent.pressure + 0.1); }
        delete this.ghostTimers[agentId];
      }
    });
  }

  scalePositions(width, height) {
    this.agents.forEach(a => { a.x = a.rx * width; a.y = a.ry * height; });
  }

  // ── SOSPETTO CON EFFETTI AGENT-TO-AGENT ──────────────────────────
  raiseFactionSuspicion(faction, amount, interactedAgentId) {
    const actual = amount * this.suspicionMultiplier;
    this.factionSuspicion[faction] = Math.min(1.0, (this.factionSuspicion[faction] || 0) + actual);
    this.networkSuspicion = Math.min(1.0, this.networkSuspicion + actual * 0.25);

    // Gli alleati dell'agente con cui hai interagito aumentano sospetto
    if (interactedAgentId) {
      const agent = this.agents.find(a => a.id === interactedAgentId);
      if (agent) {
        agent.alliances.forEach(allId => {
          const ally = this.agents.find(a => a.id === allId);
          if (ally && !ally.isBlacklisted) {
            ally.pressure = Math.min(1, ally.pressure + actual * 0.3);
          }
        });
        // I nemici dell'agente invece diventano curiosi (potrebbero aiutarti)
        agent.feuds.forEach(feudId => {
          const enemy = this.agents.find(a => a.id === feudId);
          if (enemy && !enemy.isBlacklisted) {
            enemy.pressure = Math.max(0, enemy.pressure - actual * 0.1);
          }
        });
      }
    }

    // Regina reagisce se il sospetto della sua fazione supera 0.5
    this.queens.forEach(q => {
      if (q.faction === faction && !q.neutralized && !q.queenAlertSent) {
        q.alertLevel = Math.min(3, q.alertLevel + 1);
        if (this.factionSuspicion[faction] > 0.5 && !q.queenAlertSent) {
          q.queenAlertSent = true;
          if (this.onQueenAlert) this.onQueenAlert(q);
        }
      }
    });

    return this.factionSuspicion[faction] > 0.85;
  }

  // ── TRADIMENTO PERSONAGGI RICORRENTI ─────────────────────────────
  checkRecurringBetrayal(agentId) {
    const agent = this.agents.find(a => a.id === agentId);
    if (!agent || !agent.isRecurring) return false;
    const rec = RECURRING.find(r => r.id === agent.recurringId);
    if (!rec) return false;
    const suspicion = this.factionSuspicion[agent.faction] || 0;
    return suspicion > (agent.betraysAt || 0.8);
  }

  // ── EVENTO A METÀ PARTITA ─────────────────────────────────────────
  checkMidgameEvent() {
    if (this.midgameTriggered) return null;
    const completedMissions = this.activeMissions.filter(m => m.status === 'completed').length;
    if (completedMissions < 2) return null;
    this.midgameTriggered = true;

    // Scegli un evento casuale
    const events = [
      {
        type: 'agent_eliminated',
        desc: 'Un agente è sparito dalla rete. La tua copertura si è parzialmente assottigliata.',
        action: () => {
          // Elimina un agente casuale non-regina non-ricorrente
          const targets = this.agents.filter(a => !a.isQueen && !a.isRecurring && !a.isBlacklisted);
          if (targets.length > 0) {
            const victim = targets[Math.floor(Math.random() * targets.length)];
            victim.isBlacklisted = true;
            return victim.name;
          }
          return 'Agente sconosciuto';
        }
      },
      {
        type: 'queen_switches',
        desc: 'Una delle regine ha cambiato tattica. Il suo sospetto verso di te è aumentato drasticamente.',
        action: () => {
          const activeQueen = this.queens.find(q => !q.neutralized);
          if (activeQueen) {
            this.factionSuspicion[activeQueen.faction] = Math.min(0.8,
              (this.factionSuspicion[activeQueen.faction] || 0) + 0.25);
            activeQueen.alertLevel = 3;
            return activeQueen.realName;
          }
          return null;
        }
      },
      {
        type: 'new_informant',
        desc: 'Un agente ti contatta spontaneamente. Dice di avere qualcosa di importante.',
        action: () => {
          const candidates = this.agents.filter(a =>
            !a.isBlacklisted && !a.isQueen && !a.isMissionAgent &&
            this.playerRelations[a.id].interactionCount === 0
          );
          if (candidates.length > 0) {
            const informant = candidates[Math.floor(Math.random() * candidates.length)];
            informant.incomingCooldown = 0;
            return informant;
          }
          return null;
        }
      }
    ];

    const event = events[Math.floor(Math.random() * events.length)];
    const result = event.action();
    return { type: event.type, desc: event.desc, result };
  }

  // ── TURNI E TIMER MISSIONI ────────────────────────────────────────
  advanceTurn() {
    this.turn++;
    // Aggiorna timer missioni a tempo
    this.activeMissions.forEach(m => {
      if (m.type === 'timed' && m.status === 'active' && m.timeLimit) {
        m.turnsUsed++;
        if (m.turnsUsed >= m.timeLimit) {
          m.status = 'failed';
          if (this.onMidgameEvent) {
            this.onMidgameEvent({ type: 'mission_timeout', mission: m });
          }
        }
      }
    });
    // Controlla evento metà partita
    const midgame = this.checkMidgameEvent();
    if (midgame && this.onMidgameEvent) this.onMidgameEvent(midgame);
  }

  // ── COMPLETAMENTO MISSIONE ────────────────────────────────────────
  checkMissionProgress(agentId) {
    const completed = [];
    this.activeMissions.forEach(mission => {
      if (mission.status !== 'active') return;
      if (mission.targetId === agentId) {
        const rel = this.playerRelations[agentId];
        let done = false;
        if (mission.type === 'intel' && rel.interactionCount >= 3 && rel.trustTier >= 1) done = true;
        if (mission.type === 'timed' && rel.interactionCount >= 2) done = true;
        if (mission.type === 'disinfo' && mission.disinfoCompleted) done = true;
        if (done) { mission.status = 'completed'; completed.push(mission); }
      }
    });
    return completed;
  }

  completeDismfoMission(zoneLabel) {
    this.activeMissions.forEach(m => {
      if (m.type === 'disinfo' && m.status === 'active' && m.disinfoZone === zoneLabel) {
        m.disinfoCompleted = true;
      }
    });
  }

  // ── REGINE: CONTROLLO NEUTRALIZZAZIONE ───────────────────────────
  checkQueenProgress(queenData) {
    const agent = this.agents.find(a => a.id === queenData.agentId);
    if (!agent || queenData.neutralized) return false;
    const blacklisted = (agent.followers || []).filter(fid => {
      const fa = this.agents.find(a => a.id === fid);
      return fa && fa.isBlacklisted;
    }).length;
    queenData.followersBlacklisted = blacklisted;
    if (blacklisted >= 4) {
      queenData.neutralized = true; queenData.neutralizeMethod = 'ISOLAMENTO';
      agent.queenNeutralized = true; return true;
    }
    const factionMission = this.activeMissions.find(
      m => m.faction === queenData.faction && m.status === 'completed'
    );
    if (queenData.secretsCollected >= 3 && factionMission) {
      queenData.neutralized = true; queenData.neutralizeMethod = 'ESPOSIZIONE';
      agent.queenNeutralized = true; return true;
    }
    return false;
  }

  isGameOver() { return this.factions.every(f => this.factionSuspicion[f] > 0.85); }
  isVictory() {
    return this.queens && this.queens.length >= 2 && this.queens.every(q => q.neutralized);
  }

  // ── CREDITI ───────────────────────────────────────────────────────
  getCredits() { return parseInt(localStorage.getItem('loom_credits') || '100'); }
  setCredits(v) {
    localStorage.setItem('loom_credits', Math.max(0, Math.floor(v)));
    if (this.onCreditsChange) this.onCreditsChange(this.getCredits());
  }
  addCredits(amount, reason) {
    this.setCredits(this.getCredits() + amount);
    if (this.onCreditEvent) this.onCreditEvent(+amount, reason);
  }
  spendCredits(amount) {
    if (this.getCredits() < amount) return false;
    this.setCredits(this.getCredits() - amount); return true;
  }
  getPayloadCost(subgroup) {
    return { synergize:30, rumor_positive:30, abundance:30,
             chaos:50, rumor_negative:50, scarcity:50,
             emulation:75, persecution:100 }[subgroup] || 30;
  }
  getDossierCost(level) { return level === 'intermediate' ? 50 : 150; }

  // ── SLOT MACHINE ──────────────────────────────────────────────────
  spinSlot() {
    const outcomes = [
      { type:'points',  symbol:'🔍', label:'+75 Credits',      weight:40 },
      { type:'dossier', symbol:'📂', label:'Dossier Gratis',   weight:25 },
      { type:'payload', symbol:'⚡', label:'Payload Gratuito', weight:25 },
      { type:'jackpot', symbol:'💀', label:'+150 Credits',     weight:10 },
    ];
    const total = outcomes.reduce((s,o) => s + o.weight, 0);
    let r = Math.random() * total;
    let result = outcomes[0];
    for (const o of outcomes) { r -= o.weight; if (r <= 0) { result = o; break; } }
    const symbols = outcomes.map(o => o.symbol);
    const reel = () => symbols[Math.floor(Math.random() * symbols.length)];
    const reels = [reel(), reel(), result.symbol];
    if (result.type === 'points')  this.addCredits(75, 'Slot: bonus');
    if (result.type === 'jackpot') this.addCredits(150, 'Slot: JACKPOT');
    return { reels, result };
  }

  // ── PAYLOAD ───────────────────────────────────────────────────────
  applyPayload(actionGroup, subgroup, zone, targetId) {
    const results = [];
    let affected = [];
    if (zone) affected = this.getAgentsInZone(zone);
    else if (targetId) { const a = this.agents.find(x => x.id === targetId); if (a) affected = [a]; }
    else affected = this.agents.filter(a => !a.isBlacklisted).slice(0, 10);

    switch(`${actionGroup}.${subgroup}`) {
      case 'direct.synergize':
        affected.forEach(a => { a.pressure = Math.max(0, a.pressure - 0.15); });
        results.push({ type:'positive', text:`Allineamento attivato. ${affected.length} agenti stabilizzati.`,
          visualEffect: 'glow_green', affectedIds: affected.map(a=>a.id) });
        break;
      case 'direct.chaos':
        affected.forEach(a => { a.pressure = Math.min(1, a.pressure + 0.20);
          this.raiseFactionSuspicion(a.faction, 0.05, a.id); });
        results.push({ type:'negative', text:`Interferenza iniettata. ${affected.length} agenti destabilizzati.`,
          visualEffect: 'flash_red', affectedIds: affected.map(a=>a.id) });
        break;
      case 'direct.emulation':
        if (targetId) { const hub = this.agents.find(a => a.id === targetId);
          if (hub) { hub.isHub = true; hub.pressure = Math.max(0, hub.pressure - 0.1); }
          results.push({ type:'positive', text:`${hub?.name.split(' ')[0]||'Agente'} promosso a hub.`,
            visualEffect: 'pulse_gold', affectedIds: [targetId] }); }
        break;
      case 'direct.persecution':
        if (targetId) { const outcast = this.agents.find(a => a.id === targetId);
          if (outcast) { outcast.pressure = Math.min(1, outcast.pressure + 0.35);
            outcast.incomingCooldown = 200;
            // Aggiorna relazioni: chi è alleato dell'outcast ora ti vede con più sospetto
            outcast.alliances.forEach(aid => {
              const ally = this.agents.find(a => a.id === aid);
              if (ally) ally.pressure = Math.min(1, ally.pressure + 0.1);
            });
          }
          results.push({ type:'negative', text:`Isolamento avviato. Rete dell'agente compromessa.`,
            visualEffect: 'flash_red', affectedIds: [targetId, ...(this.agents.find(a=>a.id===targetId)?.alliances||[])] }); }
        break;
      case 'indirect.rumor_positive':
        affected.forEach(a => { a.pressure = Math.max(0, a.pressure - 0.08); });
        results.push({ type:'positive', text:`Rumor positivo diffuso. Tensione in calo.`,
          visualEffect: 'glow_green', affectedIds: affected.map(a=>a.id) });
        // Controlla missioni disinfo
        if (zone) this.completeDismfoMission(zone);
        break;
      case 'indirect.rumor_negative':
        affected.forEach(a => { a.pressure = Math.min(1, a.pressure + 0.10);
          this.raiseFactionSuspicion(a.faction, 0.03, a.id); });
        results.push({ type:'negative', text:`Paranoia iniettata. Fiducia locale in caduta.`,
          visualEffect: 'flash_red', affectedIds: affected.map(a=>a.id) });
        if (zone) this.completeDismfoMission(zone);
        break;
      case 'indirect.abundance':
        affected.forEach(a => { a.pressure = Math.max(0, a.pressure - 0.12);
          a.ghostProbability = Math.max(0.05, a.ghostProbability - 0.1); });
        results.push({ type:'positive', text:`Risorse diffuse. Collaborazione in aumento.`,
          visualEffect: 'glow_green', affectedIds: affected.map(a=>a.id) });
        break;
      case 'indirect.scarcity':
        affected.forEach(a => { a.pressure = Math.min(1, a.pressure + 0.15);
          a.ghostProbability = Math.min(0.9, a.ghostProbability + 0.1); });
        results.push({ type:'negative', text:`Scarsità indotta. Movimenti erratici, panico in aumento.`,
          visualEffect: 'flash_red', affectedIds: affected.map(a=>a.id) });
        break;
    }
    return { results, affected };
  }

  reset() {
    this.factions.forEach(f => this.factionSuspicion[f] = 0.10);
    this.activeFieldOp = null;
    if (this.playerRoom !== undefined) this.initRooms();
    this.networkSuspicion = 0.10;
    this.ghostTimers = {}; this.turn = 0; this.midgameTriggered = false;
    this.activeMissions = [];
    this.agents.forEach(a => {
      a.isBlacklisted = false; a.pressure = a.isMissionAgent ? 0.05 : Math.random() * 0.25;
      a.incomingCooldown = 0; a.zoneChangeCooldown = Math.floor(Math.random() * 300);
      a.queenAlertSent = false;
    });
    Object.keys(this.playerRelations).forEach(id => {
      this.playerRelations[id] = { trustTier:0, interactionCount:0, history:[], _dossierPaid:false };
    });
    localStorage.setItem('loom_credits', '100');
  }

  startGhostTimer(agentId, ticks=180) { this.ghostTimers[agentId] = ticks; }
  pickIncomingSender() {
    const candidates = this.agents.filter(a =>
      !a.isBlacklisted && a.incomingCooldown === 0 &&
      this.playerRelations[a.id].interactionCount > 0 && !this.ghostTimers[a.id]
    );
    if (!candidates.length) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }
  getAgentsInZone(zoneLabel) {
    return this.agents.filter(a => a.currentZone === zoneLabel && !a.isBlacklisted);
  }
  getLocalFallback(agentId, tier, pressure) {
    const matrix = FALLBACK_MATRIX;
    const level = pressure > 0.65 ? 'alta' : pressure > 0.30 ? 'media' : 'bassa';
    const pool = matrix[tier]?.[level] || matrix[0]?.['bassa'] || ['Ok.'];
    const v = JSON.parse(localStorage.getItem('loom_swarm_vocabulary') || '{}');
    const mood = pressure > 0.65 ? 'high_stress' : 'normal';
    const learned = (v[agentId] || []).filter(x => x.tier === tier && x.mood === mood);
    if (learned.length) return learned[Math.floor(Math.random() * learned.length)].text;
    return pool[Math.floor(Math.random() * pool.length)];
  }
  learnPhraseFromLLM(agentId, tier, pressure, phrase) {
    let v = JSON.parse(localStorage.getItem('loom_swarm_vocabulary') || '{}');
    if (!v[agentId]) v[agentId] = [];
    const mood = pressure > 0.65 ? 'high_stress' : 'normal';
    if (!v[agentId].some(x => x.text === phrase.trim())) v[agentId].push({ tier, mood, text: phrase.trim() });
    if (v[agentId].length > 12) v[agentId].shift();
    localStorage.setItem('loom_swarm_vocabulary', JSON.stringify(v));
  }
  extractNodeStoryline(agentId) {
    const agent = this.agents.find(a => a.id === agentId);
    const rel = this.playerRelations[agentId];
    const ally = this.agents.find(a => a.id === agent.alliances[0]);
    return {
      name: agent.name, faction: agent.faction, isHub: agent.isHub,
      isMissionAgent: agent.isMissionAgent, isQueen: agent.isQueen,
      isRecurring: agent.isRecurring, recurringRole: agent.recurringRole,
      pressure: agent.pressure, trustTier: rel.trustTier,
      interactionCount: rel.interactionCount, zone: agent.currentZone,
      ally: ally ? ally.name : null,
      secret: rel.interactionCount > 2 ? agent.currentLoreSnippet : null,
      hasMission: !!this.activeMissions.find(m => m.givenBy === agentId && m.status === 'active'),
    };
  }
  calculateAsynchronousDelay(agent) {
    const queenMod = agent.isQueen ? 0.5 : 1; // regine rispondono più in fretta (più pericolose)
    return (1200 + (agent.ghostProbability * 3500) + (agent.pressure * 2000)) * queenMod;
  }
}




