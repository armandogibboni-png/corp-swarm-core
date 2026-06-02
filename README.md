# LOOM // Swarm Core

> *Un simulatore di spionaggio sociale e manipolazione di reti umane.*

**[▶ Gioca ora](https://loomgeminiedit.vercel.app)**

---

## Cos'è LOOM

LOOM è un gioco investigativo browser-based in cui infiltri reti sociali reali — startup, villaggi, ospedali, festival, borghi medievali — per smantellare strutture di potere occulte prima di essere scoperto.

Non spari. Non corri. Parli con le persone giuste, raccogli i segreti che non dovresti conoscere, e manipoli l'ambiente intorno a te per isolare chi ti vuole fermare.

Ogni partita dura 15-30 minuti. Ogni scenario è generato casualmente. Ogni run è diverso.

---

## Come si gioca

### 1. Lo scenario

All'avvio ricevi uno **scenario casuale** tra 13 disponibili — una startup milanese, un villaggio vacanze, un collegio religioso, una nave da crociera, un festival musicale e altri. Ogni scenario ha la sua intro narrativa, le sue fazioni, i suoi segreti.

Leggi l'intro. Capisci chi sei e cosa è successo. Poi infiltrati.

### 2. La rete

Ogni scenario ha **200 agenti** distribuiti in **6 zone geografiche** — stanze, piazze, corridoi, ponti di comando. Gli agenti si muovono tra le zone in tempo reale, formano cluster, si incontrano, si evitano.

Sul **radar** vedi la rete. I nodi cambiano forma e colore in base a quello che sai di loro:

| Colore | Significato |
|--------|-------------|
| ⬛ Grigio scuro | Sconosciuto |
| 🔵 Azzurro | Hai parlato con lui |
| 🟡 Oro pulsante | Hai il suo dossier completo |
| 🔺 Triangolo rosso | **Regina** — obiettivo primario |
| ◆ Diamante viola | Personaggio ricorrente |

### 3. Il sistema Beacon

Ogni agente emette un **segnale passivo** visibile quando entri nella sua zona o quando lo selezioni:

| Beacon | Condizione | Strategia |
|--------|-----------|-----------|
| 🟢 COLD | Pressione < 30% | Momento ideale per l'approccio |
| 🟡 WARM | Pressione 30-65% | Agente attivo, potenzialmente utile |
| 🔴 HOT | Pressione > 65% | Vulnerabile o pericoloso |
| 🎯 TARGET | Ha una missione attiva su di lui | Priorità alta |
| 🎯 HANDLER | Ha una missione da darti | Parlagli subito |
| ◆ SOVEREIGN | È una Regina | Alto rischio, alto reward |

Quando entri in una stanza, il monitor mostra automaticamente i beacon degli agenti notevoli presenti.

### 4. Le Regine

Ogni partita ha **due Regine** — figure di potere nascoste nella rete. Sono il tuo obiettivo finale.

Le Regine controllano fino a 8 **follower diretti**. Finché la loro rete regge, sono quasi intoccabili. Una volta identificate, linee tratteggiate cremisi le collegano visivamente ai loro follower sul radar.

**Tre strade per neutralizzarle:**

**Strada A — Esposizione**
Raccogli i segreti di 3 follower diretti + completa 1 missione nella sua fazione. La Regina viene esposta alla rete e perde il suo potere.

**Strada B — Isolamento**
Usa Persecution o Digital Gaslighting su 4 follower diretti fino a blacklistarli. Senza rete, la Regina crolla da sola.

**Strada C — Scan Diretto**
Costa 300 crediti ma rivela immediatamente la sua identità. Poi apri un tunnel diretto e falla parlare.

> ⚠ **Attenzione:** Entrare nella stessa stanza di una Regina aumenta il suo alert level ogni 5 turni. A alert 3 ti contatta direttamente — e sa già chi sei.

### 5. I LOOM Credits

Ogni azione costa crediti. Ogni risultato ne guadagna.

**Guadagni:**
- Prima conversazione con un agente: **+10**
- Trust Tier 1 raggiunto: **+25**
- Trust Tier 2 raggiunto: **+50**
- Segreto sbloccato via conversazione: **+30**
- Missione completata: **+150**
- Regina neutralizzata: **+200**
- Slot machine — jackpot: **+150**

**Costi principali:**
- Dossier intermedio: **50 pts**
- Dossier completo: **150 pts**
- Field Operations: **20–150 pts** (vedi sotto)
- Scan Regina: **300 pts**

Parti con **100 crediti**. Ogni vittoria aumenta la difficoltà della prossima partita.

### 6. Il Sistema Stanze e la Prossimità

Muoverti tra le 6 zone non è obbligatorio — ma cambia tutto quello che puoi fare.

**Essere nella stessa stanza del target:**
- Affinity Operations: costo -20%, effetto +30%
- Il tooltip mostra `[PROXIMITY]`
- Il proximity badge in alto a destra ti avvisa in tempo reale

**Essere lontano dal target:**
- Search Belongings e Safe Cracking diventano disponibili
- Le Ops "remote" non richiedono presenza fisica

**Zone ad alta anxiety (>60%):**
- Warfare Operations: costo -50%, effetto ×2
- La zona diventa rossa sul radar con badge ⚠ HOT

---

## Command Payload e Field Operations

### Command Payload
Il terminale in basso a sinistra. Invia comandi globali alla rete o all'entità LOOM. Se scrivi il nome di una zona nel testo, il rumor si diffonde lì e colpisce tutti gli agenti presenti.

### Field Operations
Il pannello ⚡ — 12 operazioni in 3 set, ognuna con costo e rischio precisi.

#### 💕 Affinity Operations
| Operazione | Costo | Effetto |
|-----------|-------|---------|
| Casual Encounter | 20 pts | Ansia -15%, piccolo boost fiducia |
| Targeted Gift | 40 pts | Match → Bond ×2 · Mismatch → Paranoia ↑ |
| Encrypted Confession | 60 pts | Richiede Trust ≥1 · Sblocca segreto gratis |
| Bait Date | 80 pts | Sposta fisicamente il target nella tua zona |
| Weaponized Jealousy | 100 pts | Provoca panico nella regina della fazione |

#### 🔍 Intel Operations
| Operazione | Costo | Effetto |
|-----------|-------|---------|
| Shadow Stalking | 50 pts | Intercetta sussurri per 4 turni |
| Wiretap Fixation | 70 pts | Svela identità in una zona · 3 turni |
| Search Belongings | 90 pts | Solo se target assente · Timer 5 turni |
| Safe Cracking | 150 pts | Alto rischio · Timer 8 turni · Masterkey |

#### ⚔️ Warfare Operations
| Operazione | Costo | Effetto |
|-----------|-------|---------|
| Anonymous Slander | 60 pts | Spezza clustering tra fazioni |
| Digital Gaslighting | 80 pts | Porta il target al collasso · Auto-isola |
| Environmental Diversion | 120 pts | Svuota una zona · Diversion di massa |

> ⚠ **Caught Mechanics:** Se il target torna nella sua stanza durante Search Belongings o Safe Cracking, vieni scoperto immediatamente. Sospetto fazione al 95%, trust azzerato, romance storyline bloccata permanentemente.

---

## Le Missioni

Ogni fazione ha un **informatore** — il primo agente che ti contatta all'avvio. Ti dà una missione investigativa neutrale: non ti chiede lealtà, ti chiede risultati.

**3 tipi di missione:**

🔍 **INTEL** — Raccogli informazioni sull'agente target. Risolvibile via conversazioni o Search Belongings.

💬 **DISINFO** — Inietta un rumor in una zona specifica. Risolvibile via Anonymous Slander o Environmental Diversion.

⏱ **A TEMPO** — Completa prima che il timer scada. Casual Encounter riduce il timer. Bait Date la completa immediatamente.

---

## Scenari disponibili

| Scenario | Ambientazione | Tensione |
|----------|--------------|---------|
| 🏢 Startup Milano | Open space, funding rounds | Qualcuno ha leakato prima del closing |
| 🏖️ Villaggio Vacanze | Animatori, turisti, ombrelloni | Un animatore è sparito. Nessuno fa domande |
| 🎓 Studentato | Coinquilini, esami, notti insonni | Una segnalazione anonima ha rovinato qualcuno |
| 🏘️ Paese Borgo | Tutti si conoscono, nessuno parla | Un terreno vale milioni. Tu sai perché |
| 🍀 Dublino BigTech | Expat, layoff, open bar | La lista dei prossimi tagli esiste già |
| 🏥 Ospedale Notturno | Turni di notte, corsie vuote | Tre referti modificati dopo la firma |
| ⛪ Collegio Religioso | Regole ferree, comunità chiusa | Un archivio sigillato dal 1987 |
| 🚢 Nave da Crociera | Spazio chiuso, 60 ore all'attracco | La 314 è sparita. La cabina era troppo pulita |
| 🎭 Compagnia Teatrale | Ego, gelosie, prima tra 48 ore | I cavi audio tagliati di notte |
| 🏚️ Condominio | Palazzo anni '70, assemblea in arrivo | Un'offerta di acquisto che non torna |
| 🏫 Liceo | Professori, studenti, potere asimmetrico | Un video che sta circolando |
| 🌿 Comunità Eco | Ritiro spirituale, off-grid | Il fondatore trattiene le persone |
| 🎪 Festival Musicale | Backstage, 72 ore, 50k persone | Una busta che ha fatto impallidire qualcuno |

---

## Progressione Cross-Partita

Ogni vittoria viene registrata. Il tuo **rango** sale con le vittorie:

`Osservatore` → `Infiltrato` → `Manipolatore` → `Fantasma` → `Architetto delle Ombre` → `LOOM`

La difficoltà aumenta ogni 2 vittorie — il sospetto scala più velocemente, le Regine reagiscono prima.

L'**Archivio** (📊 nel wallet) mostra vittorie totali, scenari completati e rango attuale.

---

## Personaggi Ricorrenti

Due personaggi appaiono in ogni scenario con nome diverso ma comportamento identico:

**Il Custode** — sempre nella fazione di potere. Sa più di quello che dice. Non ti tradisce mai, ma non ti aiuta mai gratis.

**La Spia** — sembra alleata. Ha già tradito qualcuno in una partita precedente. O forse sei tu quello che la usa.

Entrambi appaiono sul radar con il simbolo a diamante viola ◆. Se il sospetto della loro fazione supera la loro soglia di tradimento, il tunnel si chiude — e non è un bug. È il gioco che ti mostra lo specchio.

---

## Setup tecnico

LOOM è un'applicazione serverless deployata su Vercel. Richiede una chiave API per attivare le risposte AI degli agenti.

### Provider supportati
- **Gemini** (Google) — `gemini-1.5-flash` — consigliato
- **Groq** (Llama 3.3) — veloce e gratuito per uso personale
- **OpenAI** (GPT-4o mini)
- **Mistral** (Small)

### Configurazione
1. Apri il gioco
2. Nel pannello in basso a sinistra, seleziona il provider
3. Inserisci la tua API key
4. Salva — la chiave rimane in localStorage, non viene mai inviata a server LOOM

> La chiave API viene usata esclusivamente per le chiamate AI degli agenti. Non viene mai loggata o conservata server-side.

### Modalità offline
Senza API key il gioco funziona in modalità **Connessione Degradata** — gli agenti rispondono con frasi apprese dalle sessioni precedenti o con fallback contestuali pre-generati. Puoi giocare, raccogliere dossier, usare Field Operations e muoverti tra le zone. La qualità delle conversazioni è ridotta.

---

## Stack tecnico

```
Frontend      Vanilla JS ES Modules + Canvas API
Backend       Vercel Serverless Functions (api/chat.js)
Database      Firebase Firestore (progressione DNA partita)
AI            Anthropic / Google / Groq / Mistral API
Deploy        Vercel
```

**Nessun framework.** Nessuna build step. Nessuna dipendenza npm. Un file HTML, tre moduli JS, una serverless function.

---

## Struttura del progetto

```
/
├── index.html          # Frontend completo — UI, Canvas, game loop
├── engine.js           # SwarmEngine — agenti, crediti, missioni, regine, beacon
├── radar.js            # RadarRenderer — canvas, tooltip, linee connessione
├── prose.js            # Contenuti — scenari, lore, intro, finali, missioni
├── names.js            # Generatore nomi contestuali per 13 scenari
├── api/
│   └── chat.js         # Serverless function — routing AI providers
└── README.md
```

---

## Roadmap

- [ ] Audio ambientale contestuale per zona
- [ ] Tema narrativo esplicito — finali con giudizio morale
- [ ] Modalità multiplayer asincrona — due player nella stessa rete
- [ ] Editor scenari custom
- [ ] Internazionalizzazione EN/IT

---

## Note di design

LOOM nasce come esperimento su una domanda precisa: *è possibile rendere la manipolazione sociale un mechanic di gioco senza renderla banale?*

La risposta è che il gioco deve avere conseguenze — non solo in termini di punti, ma in termini narrativi. Isolare un agente con Persecution è una mossa vincente. Ma il finale ti dice cosa è successo a quell'agente dopo. Non per farti sentire in colpa obbligatoriamente, ma per ricordarti che ogni nodo della rete era una persona.

Il sistema delle Regine nasce da questa logica: non sono boss da battere. Sono il centro di gravità di un sistema sociale. Smontarle richiede smontare la rete attorno a loro — e quella rete è fatta di persone con pressioni, segreti, alleanze. Non puoi vincere senza capire le persone. Non puoi capire le persone senza avvicinarti a loro. E avvicinarti ha sempre un costo.

---

*LOOM è un progetto in sviluppo attivo.*
