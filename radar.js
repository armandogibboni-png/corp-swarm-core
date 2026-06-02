// radar.js v8 — tooltip hover/tap, linee 2 livelli, aura stanza, effetti payload
export class RadarRenderer {
  constructor(canvasId, engine, onNodeSelected, onClearSelection) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.engine = engine;
    this.onNodeSelected = onNodeSelected;
    this.onClearSelection = onClearSelection;
    this.activeNodeId = null;
    this.pings = {};
    this.payloadEffects = [];
    this.hoveredAgent = null;
    this.mouseX = 0; this.mouseY = 0;
    this._initEvents();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  _initEvents() {
    // Click
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
      const found = this._findNearestAgent(cx, cy, 20);
      if (found) { this.activeNodeId = found.id; this.onNodeSelected(found); }
      else { this.activeNodeId = null; this.onClearSelection(); }
    });
    // Hover desktop
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      this.hoveredAgent = this._findNearestAgent(this.mouseX, this.mouseY, 18);
    });
    this.canvas.addEventListener('mouseleave', () => { this.hoveredAgent = null; });
    // Long tap mobile
    let tapTimer = null;
    this.canvas.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      const cx = t.clientX - rect.left, cy = t.clientY - rect.top;
      tapTimer = setTimeout(() => {
        this.hoveredAgent = this._findNearestAgent(cx, cy, 30);
        this.mouseX = cx; this.mouseY = cy;
      }, 400);
    });
    this.canvas.addEventListener('touchend', () => {
      clearTimeout(tapTimer);
      setTimeout(() => { this.hoveredAgent = null; }, 2000);
    });
  }

  _findNearestAgent(cx, cy, maxDist) {
    let closest = null, minD = maxDist;
    this.engine.agents.forEach(a => {
      const d = Math.hypot(a.x - cx, a.y - cy);
      if (d < minD) { closest = a; minD = d; }
    });
    return closest;
  }

  triggerPing(nodeId, type = 'gossip') {
    this.pings[nodeId] = { color: type === 'alert' ? '#ffdd00' : '#55ff88', intensity: 1.0, radius: 0 };
  }

  triggerPayloadEffect(agentIds, visualEffect) {
    const colorMap = { glow_green:'rgba(85,232,136,', flash_red:'rgba(224,85,85,', pulse_gold:'rgba(200,169,126,' };
    this.payloadEffects.push({ ids: agentIds||[], color: colorMap[visualEffect]||'rgba(126,207,200,', intensity: 1.0 });
  }

  _nodeColor(agent) {
    const rel = this.engine.playerRelations[agent.id];
    if (agent.isBlacklisted) return '#1a1a2a';
    if (agent.isQueen && !agent.queenNeutralized) return '#e05555';
    if (agent.queenNeutralized) return '#2a4a2a';
    if (agent.isRecurring) return '#9a7ecf';
    if (!rel || rel.interactionCount === 0) return '#2a3344';
    if (rel.trustTier >= 2 || rel.interactionCount > 6) return '#c8a97e';
    return '#7ecfc8';
  }

  render() {
    const W = this.canvas.width, H = this.canvas.height;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, W, H);
    this.engine.agents.forEach(a => { a.x = a.rx * W; a.y = a.ry * H; });

    // ── ZONE con colore anxiety ───────────────────────────────────────
    const zones = this.engine.config?.zones || [];
    zones.forEach(z => {
      const x = z.rx*W, y = z.ry*H, r = z.rr * Math.min(W,H);
      const roomData = this.engine.rooms?.[z.label];
      const anxiety = roomData?.anxiety || 0;
      // Colore zona in base all'anxiety
      const zoneAlpha = 0.02 + anxiety * 0.06;
      const strokeAlpha = 0.05 + anxiety * 0.15;
      const zoneColor = anxiety > 0.6
        ? `rgba(224,85,85,${strokeAlpha})`
        : `rgba(126,207,200,${strokeAlpha})`;
      const fillColor = anxiety > 0.6
        ? `rgba(224,85,85,${zoneAlpha})`
        : `rgba(126,207,200,${zoneAlpha})`;
      ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2);
      ctx.strokeStyle = zoneColor; ctx.lineWidth = anxiety > 0.6 ? 1.5 : 1;
      ctx.stroke(); ctx.fillStyle = fillColor; ctx.fill();
      // Label zona con indicatore anxiety
      ctx.textAlign = 'center';
      const anxietyLabel = anxiety > 0.7 ? ' ⚠' : anxiety > 0.4 ? ' ·' : '';
      ctx.fillStyle = anxiety > 0.6 ? 'rgba(224,85,85,0.7)' : 'rgba(126,207,200,0.25)';
      ctx.font = '9px monospace';
      ctx.fillText(z.label + anxietyLabel, x, y - r - 6);
      // Player room indicator
      if (this.engine.playerRoom === z.label) {
        ctx.beginPath(); ctx.arc(x, y + r + 12, 4, 0, Math.PI*2);
        ctx.fillStyle = '#c8a97e'; ctx.fill();
        ctx.fillStyle = '#c8a97e'; ctx.font = 'bold 8px monospace';
        ctx.fillText('YOU', x, y + r + 24);
      }
    });
    ctx.textAlign = 'left';

    // ── LIVELLO 1: linee geografiche (stessa stanza) ─────────────────
    // Linea blu tenue tra agenti nella stessa stanza
    const byRoom = {};
    this.engine.agents.forEach(a => {
      if (a.isBlacklisted) return;
      if (!byRoom[a.currentZone]) byRoom[a.currentZone] = [];
      byRoom[a.currentZone].push(a);
    });
    Object.values(byRoom).forEach(group => {
      if (group.length < 2) return;
      for (let i = 0; i < group.length && i < 8; i++) {
        for (let j = i+1; j < group.length && j < 8; j++) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(100,160,220,0.04)';
          ctx.lineWidth = 1;
          ctx.moveTo(group[i].x, group[i].y);
          ctx.lineTo(group[j].x, group[j].y);
          ctx.stroke();
        }
      }
    });

    // ── LIVELLO 2: linee egemonia regina (crimson/purple, persistenti) ─
    this.engine.queens?.forEach(q => {
      if (!q.identified && !q.neutralized) return; // solo se identificata
      const queenAgent = this.engine.agents.find(a => a.id === q.agentId);
      if (!queenAgent) return;
      const col = q.neutralized ? 'rgba(85,232,136,' : 'rgba(180,50,50,';
      (queenAgent.followers || []).slice(0, 4).forEach(fid => {
        const follower = this.engine.agents.find(a => a.id === fid);
        if (!follower || follower.isBlacklisted) return;
        ctx.beginPath();
        ctx.strokeStyle = col + '0.4)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 4]);
        ctx.moveTo(queenAgent.x, queenAgent.y);
        ctx.lineTo(follower.x, follower.y);
        ctx.stroke();
        ctx.setLineDash([]);
      });
    });

    // ── AURA REGINE ──────────────────────────────────────────────────
    this.engine.queens?.forEach(q => {
      if (q.neutralized) return;
      const agent = this.engine.agents.find(a => a.id === q.agentId);
      if (!agent) return;
      const pulse = 0.3 + 0.2 * Math.sin(Date.now() * 0.002);
      const auraR = 28 + q.alertLevel * 10;
      ctx.beginPath(); ctx.arc(agent.x, agent.y, auraR, 0, Math.PI*2);
      ctx.strokeStyle = `rgba(224,85,85,${pulse + q.alertLevel*0.1})`;
      ctx.lineWidth = 1 + q.alertLevel;
      ctx.setLineDash([4,4]); ctx.stroke(); ctx.setLineDash([]);
    });

    // ── EFFETTI PAYLOAD ──────────────────────────────────────────────
    this.payloadEffects = this.payloadEffects.filter(eff => {
      eff.intensity -= 0.02;
      if (eff.intensity <= 0) return false;
      eff.ids.forEach(id => {
        const a = this.engine.agents.find(x => x.id === id);
        if (!a) return;
        ctx.beginPath(); ctx.arc(a.x, a.y, 12 + (1-eff.intensity)*10, 0, Math.PI*2);
        ctx.fillStyle = `${eff.color}${eff.intensity*0.4})`; ctx.fill();
      });
      return true;
    });

    // ── PINGS ────────────────────────────────────────────────────────
    Object.entries(this.pings).forEach(([nodeId, ping]) => {
      const agent = this.engine.agents.find(a => a.id === nodeId);
      if (!agent) return;
      ping.radius += 2.5; ping.intensity -= 0.025;
      if (ping.intensity <= 0) { delete this.pings[nodeId]; return; }
      ctx.beginPath(); ctx.arc(agent.x, agent.y, ping.radius, 0, Math.PI*2);
      ctx.strokeStyle = ping.color === '#ffdd00'
        ? `rgba(255,221,0,${ping.intensity})` : `rgba(85,255,136,${ping.intensity})`;
      ctx.lineWidth=1; ctx.stroke();
    });

    // ── NODI ─────────────────────────────────────────────────────────
    this.engine.agents.forEach(agent => {
      const rel = this.engine.playerRelations[agent.id];
      const isSelected = this.activeNodeId === agent.id;
      const isHovered = this.hoveredAgent?.id === agent.id;
      const color = this._nodeColor(agent);
      // Wiretap: stanza buggata svela tutti i nodi presenti
      const roomBugged = this.engine.rooms?.[agent.currentZone]?.bugged;

      if (agent.isQueen && !agent.queenNeutralized) {
        const pulse = 0.7 + 0.3 * Math.sin(Date.now() * 0.005 + agent.index);
        const size = (isSelected||isHovered ? 12 : 7) * pulse;
        ctx.beginPath();
        ctx.moveTo(agent.x, agent.y+size);
        ctx.lineTo(agent.x-size*0.866, agent.y-size*0.5);
        ctx.lineTo(agent.x+size*0.866, agent.y-size*0.5);
        ctx.closePath(); ctx.fillStyle='#e05555'; ctx.fill();
        ctx.strokeStyle='rgba(255,100,100,0.6)'; ctx.lineWidth=1.5; ctx.stroke();
      } else if (agent.isRecurring) {
        const size = isSelected||isHovered ? 8 : 5;
        ctx.beginPath();
        ctx.moveTo(agent.x, agent.y-size); ctx.lineTo(agent.x+size, agent.y);
        ctx.lineTo(agent.x, agent.y+size); ctx.lineTo(agent.x-size, agent.y);
        ctx.closePath(); ctx.fillStyle='#9a7ecf'; ctx.fill();
      } else if (agent.isHub && rel?.interactionCount > 0) {
        const pulse = 0.7 + 0.3*Math.sin(Date.now()*0.004+agent.index);
        const size = (isSelected||isHovered ? 10 : 6) * pulse;
        ctx.beginPath();
        ctx.moveTo(agent.x, agent.y+size);
        ctx.lineTo(agent.x-size*0.866, agent.y-size*0.5);
        ctx.lineTo(agent.x+size*0.866, agent.y-size*0.5);
        ctx.closePath(); ctx.fillStyle=rel?.trustTier>=2?'#c8a97e':'#7ecfc8'; ctx.fill();
      } else {
        const r = isSelected||isHovered ? 6 : (agent.isBlacklisted ? 2 : 3);
        ctx.beginPath(); ctx.arc(agent.x, agent.y, r, 0, Math.PI*2);
        let fc = color;
        if (rel?.trustTier >= 2) {
          const p = 0.6+0.4*Math.sin(Date.now()*0.003+agent.index);
          fc = `rgba(200,169,126,${p})`;
        }
        ctx.fillStyle = fc; ctx.fill();
      }

      // Ring per wiretap (stanza monitorata)
      if (roomBugged && !agent.isBlacklisted) {
        ctx.beginPath(); ctx.arc(agent.x, agent.y, 9, 0, Math.PI*2);
        ctx.strokeStyle = 'rgba(154,126,207,0.5)'; ctx.lineWidth=1; ctx.stroke();
      }

      // Label selected
      if (isSelected) {
        ctx.fillStyle='#ffffff'; ctx.font='bold 11px monospace';
        ctx.fillText(agent.name, agent.x+10, agent.y+4);
        if (agent.currentZone) {
          ctx.fillStyle='#445566'; ctx.font='9px monospace';
          ctx.fillText(`@ ${agent.currentZone}`, agent.x+10, agent.y+16);
        }
        if (agent.isQueen) { ctx.fillStyle='#e05555'; ctx.fillText('◆ REGINA', agent.x+10, agent.y+28); }
      }
    });

    // ── BEACON VISIVO SUI NODI ───────────────────────────────────────
    this.engine.agents.forEach(agent => {
      if (agent.isBlacklisted || !agent.x) return;
      const beacon = this.engine.getAgentBeacon(agent);
      if (beacon.priority < 4) return; // solo WARM e sopra
      const rel = this.engine.playerRelations[agent.id];
      const known = rel && rel.interactionCount > 0;
      const roomBugged = this.engine.rooms?.[agent.currentZone]?.bugged;
      if (!known && !roomBugged && beacon.signal !== 'SOVEREIGN') return;
      // Piccolo dot beacon nell'angolo in alto a destra del nodo
      const dotX = agent.x + 5, dotY = agent.y - 5;
      ctx.beginPath(); ctx.arc(dotX, dotY, 3, 0, Math.PI*2);
      ctx.fillStyle = beacon.color; ctx.fill();
    });

    // ── PROXIMITY RING — stessa stanza del player ─────────────────────
    if (this.engine.playerRoom) {
      const playerRoomAgents = this.engine.getRoomAgents(this.engine.playerRoom);
      playerRoomAgents.forEach(agent => {
        if (agent.isBlacklisted || !agent.x) return;
        // Ring sottile dorato intorno agli agenti nella stessa stanza del player
        ctx.beginPath(); ctx.arc(agent.x, agent.y, 11, 0, Math.PI*2);
        ctx.strokeStyle = 'rgba(200,169,126,0.25)';
        ctx.lineWidth = 1; ctx.stroke();
      });

      // SOVEREIGN in stessa stanza: ring pulsante rosso più intenso
      this.engine.queens?.forEach(q => {
        if (q.neutralized) return;
        const qAgent = this.engine.agents.find(a => a.id === q.agentId);
        if (!qAgent || qAgent.currentZone !== this.engine.playerRoom) return;
        const pulse = 0.5 + 0.5 * Math.sin(Date.now() * 0.008);
        ctx.beginPath(); ctx.arc(qAgent.x, qAgent.y, 22 + pulse * 8, 0, Math.PI*2);
        ctx.strokeStyle = `rgba(224,85,85,${0.6 + pulse * 0.3})`;
        ctx.lineWidth = 2; ctx.stroke();
        // Testo warning
        ctx.fillStyle = `rgba(224,85,85,${0.7 + pulse * 0.2})`;
        ctx.font = 'bold 8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('SOVEREIGN PROXIMITY', qAgent.x, qAgent.y - 28);
        ctx.textAlign = 'left';
      });
    }

    // ── TOOLTIP HOVER ─────────────────────────────────────────────────
    if (this.hoveredAgent && this.hoveredAgent.id !== this.activeNodeId) {
      const a = this.hoveredAgent;
      const rel = this.engine.playerRelations[a.id];
      const known = rel && rel.interactionCount > 0;
      const roomBugged = this.engine.rooms?.[a.currentZone]?.bugged;
      const nameStr = (known || roomBugged) ? a.name : '[ENCRYPTED_NODE]';
      const beacon = this.engine.getAgentBeacon(a);
      const statusStr = known || roomBugged ? `${beacon.icon} ${beacon.signal}` : 'UNKNOWN';
      const roomStr = (known || roomBugged) ? (a.currentZone || '?') : '???';
      const sameRoom = a.currentZone === this.engine.playerRoom;
      const proxHint = sameRoom ? ' [PROXIMITY]' : '';
      const tip = `${nameStr} // ${statusStr} // ${roomStr}${proxHint}`;

      // Sfondo tooltip
      const padding = 8, tipW = ctx.measureText(tip).width + padding*2;
      let tx = this.mouseX + 14, ty = this.mouseY - 10;
      if (tx + tipW > W) tx = this.mouseX - tipW - 6;
      ctx.fillStyle = 'rgba(4,7,13,0.92)';
      ctx.fillRect(tx - padding, ty - 14, tipW, 22);
      ctx.strokeStyle = a.isQueen ? '#e05555' : a.isRecurring ? '#9a7ecf' : '#1e3040';
      ctx.lineWidth = 1; ctx.strokeRect(tx - padding, ty - 14, tipW, 22);
      ctx.fillStyle = a.isQueen ? '#e05555' : a.isRecurring ? '#9a7ecf' : '#7ecfc8';
      ctx.font = '9px monospace';
      ctx.fillText(tip, tx, ty);
    }
  }
}

