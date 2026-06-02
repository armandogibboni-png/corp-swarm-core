// prose.js — tutti i contesti

export const CONTEXT_CONFIG = {
  MILANO_STARTUP: {
    label: '🏢 Startup Milano',
    subtitle: 'Open space, funding rounds, coltelli nella schiena',
    factions: ['MANAGEMENT','DEV_TEAM','MARKETING','FOUNDERS'],
    factionLabels: { MANAGEMENT:'MGT', DEV_TEAM:'DEV', MARKETING:'MKT', FOUNDERS:'FND' },
    factionCenters: {
      MANAGEMENT: { rx:0.25, ry:0.28 },
      DEV_TEAM:   { rx:0.75, ry:0.28 },
      MARKETING:  { rx:0.25, ry:0.72 },
      FOUNDERS:   { rx:0.75, ry:0.72 }
    }
  },
  VILLAGGIO_VACANZE: {
    label: '🏖️ Villaggio Vacanze',
    subtitle: 'Animatori, turisti, segreti sotto l\'ombrellone',
    factions: ['ANIMATORI','TURISTI','STAFF','DIREZIONE'],
    factionLabels: { ANIMATORI:'ANI', TURISTI:'TUR', STAFF:'STF', DIREZIONE:'DIR' },
    factionCenters: {
      ANIMATORI: { rx:0.25, ry:0.28 },
      TURISTI:   { rx:0.75, ry:0.28 },
      STAFF:     { rx:0.25, ry:0.72 },
      DIREZIONE: { rx:0.75, ry:0.72 }
    }
  },
  STUDENTATO: {
    label: '🎓 Studentato',
    subtitle: 'Esami, coinquilini, drammi alle 2 di notte',
    factions: ['PRIMO_ANNO','VETERANI','FUORICORSO','RESIDENT_TUTOR'],
    factionLabels: { PRIMO_ANNO:'1°', VETERANI:'VET', FUORICORSO:'FC', RESIDENT_TUTOR:'RT' },
    factionCenters: {
      PRIMO_ANNO:     { rx:0.25, ry:0.28 },
      VETERANI:       { rx:0.75, ry:0.28 },
      FUORICORSO:     { rx:0.25, ry:0.72 },
      RESIDENT_TUTOR: { rx:0.75, ry:0.72 }
    }
  },
  PAESE_BORGO: {
    label: '🏘️ Paese / Borgo',
    subtitle: 'Tutti si conoscono, nessuno dimentica niente',
    factions: ['VECCHI_DEL_POSTO','FAMIGLIE','GIOVANI','FORESTIERI'],
    factionLabels: { VECCHI_DEL_POSTO:'VEC', FAMIGLIE:'FAM', GIOVANI:'GIO', FORESTIERI:'FOR' },
    factionCenters: {
      VECCHI_DEL_POSTO: { rx:0.25, ry:0.28 },
      FAMIGLIE:         { rx:0.75, ry:0.28 },
      GIOVANI:          { rx:0.25, ry:0.72 },
      FORESTIERI:       { rx:0.75, ry:0.72 }
    }
  },
  DUBLINO_BIGTECH: {
    label: '🍀 Dublino BigTech',
    subtitle: 'Expat, layoff, open bar il venerdì',
    factions: ['ENGINEERING','SALES','PEOPLE_OPS','LEADERSHIP'],
    factionLabels: { ENGINEERING:'ENG', SALES:'SAL', PEOPLE_OPS:'HR', LEADERSHIP:'LDR' },
    factionCenters: {
      ENGINEERING: { rx:0.25, ry:0.28 },
      SALES:       { rx:0.75, ry:0.28 },
      PEOPLE_OPS:  { rx:0.25, ry:0.72 },
      LEADERSHIP:  { rx:0.75, ry:0.72 }
    }
  }
};

export const LORE_BY_CONTEXT = {
  MILANO_STARTUP: {
    MANAGEMENT: [
      "Sa chi ha leakato i salary range interni. Non dice niente perché ci guadagna.",
      "Sta cercando un altro lavoro in segreto. Ha già fatto due colloqui.",
      "Ha le prove che il suo manager ha falsificato i dati del Q3.",
      "Fa il doppio gioco con i Founders: li informa su tutto il team.",
      "Sa che il prossimo round di funding è a rischio. Non lo ha detto a nessuno.",
      "Sta raccogliendo firme per una petizione interna contro il CEO.",
      "Ha letto le email private del collega perché aveva lasciato la sessione aperta.",
      "Riceve bonus nascosti che il resto del team non sa esistano.",
      "Ha sabotato la candidatura di un collega per una promozione.",
      "Conosce il vero motivo per cui l'ultimo CTO se ne è andato.",
      "Sta facendo trapelare info ai competitor tramite LinkedIn anonimo.",
      "Ha un accordo segreto con un fornitore esterno.",
      "Sa che il prodotto ha un bug critico in produzione. Non lo ha segnalato.",
      "Sta aspettando il momento giusto per fare causa all'azienda.",
      "Ha convinto il board a tagliare il budget del DEV_TEAM per proteggere il suo."
    ],
    DEV_TEAM: [
      "Il codice messo in produzione venerdì ha un memory leak. Spera nessuno se ne accorga.",
      "Sta lavorando di notte a una startup concorrente.",
      "Ha copiato una libreria open source senza citarla. È un problema legale.",
      "Sa che la deadline del prossimo sprint è impossibile ma non lo dice.",
      "Ha accesso all'ambiente di produzione e può vedere dati degli utenti.",
      "Sta documentando i bug nascosti per usarli come leva per un aumento.",
      "Il suo repo privato contiene codice proprietario dell'azienda.",
      "Ha simulato ore di lavoro remote per mesi.",
      "Sa che il sistema di autenticazione ha una vulnerabilità critica.",
      "Sta per dimettersi e portarsi dietro tutta la documentazione tecnica.",
      "Ha bypasato il code review tre volte questa settimana.",
      "Conosce le credenziali admin di un sistema legacy che nessuno monitora.",
      "Ha venduto dati di telemetria a una società di ricerca.",
      "Sta costruendo una feature non autorizzata nel tempo aziendale.",
      "Sa chi ha causato il down del servizio il mese scorso."
    ],
    MARKETING: [
      "Ha gonfiato i numeri del report trimestrale del 30%.",
      "Sta spendendo il budget campagne su progetti personali.",
      "Ha una relazione con un cliente strategico. Conflitto di interessi totale.",
      "I testimonial del sito sono falsi — li ha scritti lei stessa.",
      "Sa che il prodotto non regge le promesse fatte agli investitori.",
      "Sta per portare via tre clienti chiave se cambia azienda.",
      "La campagna da 50k non ha portato un lead. Ha cambiato i KPI per coprirlo.",
      "Sta negoziando con un'agenzia concorrente in segreto.",
      "Ha eliminato feedback negativi dal CRM prima della review.",
      "Sa che il brand è stato citato negativamente su un podcast da 200k ascolti.",
      "Ha promesso funzionalità inesistenti a un cliente enterprise.",
      "Conosce l'identità dell'account anonimo che critica l'azienda su Twitter.",
      "Sta raccogliendo contatti dei clienti per portarseli via.",
      "Usa l'account pubblicitario aziendale per campagne personali.",
      "Ha accesso agli account social aziendali e li usa per scopi propri."
    ],
    FOUNDERS: [
      "Sa che il runway finanziario finisce tra 4 mesi. Lo sa solo lui.",
      "Sta negoziando una exit mentre dice al team di voler crescere.",
      "Ha usato fondi aziendali per spese personali.",
      "Ha promesso equity a tre persone per lo stesso pool di shares.",
      "Sa che il co-founder sta per mollare tutto.",
      "Ha un side deal con un investitore che bypassa il board.",
      "Ha falsificato le proiezioni nel pitch deck.",
      "Sta portando avanti un progetto parallelo con soldi aziendali.",
      "Sa che un ex dipendente sta per fare causa all'azienda.",
      "Ha mentito agli investitori sulla traction del prodotto.",
      "Il suo visto di lavoro è scaduto tre mesi fa.",
      "Sa chi ha leakato le info alla stampa. È qualcuno di fidato.",
      "Ha accesso a tutti i dati utenti e li ha condivisi con un partner.",
      "Sta valutando di licenziare metà del team dopo il prossimo funding.",
      "Ha un accordo di non concorrenza scaduto che non ha rinnovato di proposito."
    ]
  },

  VILLAGGIO_VACANZE: {
    ANIMATORI: [
      "Ogni sera sparisce per un'ora. Nessuno sa dove va.",
      "Sta inscenando una storia d'amore con un turista per scommessa.",
      "Ha rubato le idee di un collega per lo spettacolo serale.",
      "Sa chi ha rotto la barca del noleggio. Non l'ha detto alla direzione.",
      "Sta registrando video dei turisti senza permesso per i social.",
      "Ha una storia segreta con qualcuno dello staff.",
      "Il contratto stagionale che ha firmato aveva una clausola che non ha letto.",
      "Sa che la piscina ha un problema di ph che non è stato sistemato.",
      "Sta cercando di farsi assumere altrove prima della fine della stagione.",
      "Ha mentito sul curriculum per avere questo posto.",
      "Organizza feste private in spiaggia dopo la chiusura. La direzione non lo sa.",
      "Sa che un collega sta rubando dal bar.",
      "Ha una relazione con un ospite che tornerà il mese prossimo.",
      "Conosce la password del sistema di prenotazioni.",
      "Sta pianificando di mollare a metà stagione senza preavviso."
    ],
    TURISTI: [
      "Non è qui in vacanza. Sta facendo un'inchiesta giornalistica.",
      "Ha portato con sé qualcosa che non avrebbe dovuto portare.",
      "Sta sfuggendo a qualcosa. Non è chiaro cosa.",
      "Ha già litigato con il vicino di ombrellone. Sta aspettando il momento giusto.",
      "Ha sentito per sbaglio una conversazione privata tra lo staff.",
      "Sta fingendo di essere in coppia. Non lo sono.",
      "È stato qui l'anno scorso. Qualcosa è cambiato e lo sta notando.",
      "Conosce qualcuno dello staff da prima. Non vuole che si sappia.",
      "Ha trovato qualcosa sulla spiaggia che non ha consegnato.",
      "Sta fotografando zone che non dovrebbe fotografare.",
      "Ha fatto una recensione anonima devastante online prima di arrivare.",
      "Sa qualcosa sulla direzione che nessun altro turista sa.",
      "Sta cercando qualcuno specifico tra gli ospiti.",
      "Ha prenotato con un nome diverso dal suo reale.",
      "È allergico a qualcosa nel buffet ma non lo ha detto a nessuno."
    ],
    STAFF: [
      "Serve i drink più generosi agli ospiti che lasciano mance. Gli altri ricevono acqua.",
      "Ha le chiavi di tutte le camere. Anche quelle che non dovrebbe avere.",
      "Sa cosa succede realmente nelle camere 14 e 15.",
      "Sta organizzando uno sciopero silenzioso con altri colleghi.",
      "Ha trovato un oggetto di valore e non l'ha consegnato all'ufficio oggetti smarriti.",
      "Conosce l'identità del recensore anonimo che ha devastato il villaggio su TripAdvisor.",
      "Sta vendendo informazioni sugli ospiti VIP a un paparazzo.",
      "Ha accesso ai dati delle carte di credito degli ospiti.",
      "Sa che il cuoco principale usa ingredienti scaduti di poco.",
      "Sta simulando ore extra sul foglio presenze.",
      "Ha una copia delle istruzioni antincendio ma non ricorda dove le ha messe.",
      "Sa chi ha occupato la suite senza pagare il supplemento.",
      "Sta facendo lavorare un collega con documenti irregolari.",
      "Conosce il codice della cassaforte dell'ufficio.",
      "Ha visto qualcosa quella notte di luglio. Non lo dirà mai."
    ],
    DIREZIONE: [
      "Sa che il villaggio ha una perdita idrica non segnalata da settimane.",
      "Sta tagliando i costi sul cibo senza che gli ospiti se ne accorgano.",
      "Ha promesso promozioni che non può mantenere.",
      "Sa che l'ispezione sanitaria del mese scorso è stata aggiustata.",
      "Sta valutando di non rinnovare il contratto a metà del personale.",
      "Ha una trattativa in corso per vendere il villaggio. Non lo sa nessuno.",
      "Sa che il villaggio concorrente li ha già superati nelle prenotazioni.",
      "Usa i fondi di manutenzione per altro.",
      "Ha un accordo privato con alcuni tour operator che gli altri non conoscono.",
      "Sa che un ospite ha intenzione di fare causa.",
      "Ha nascosto un incidente accaduto in piscina tre settimane fa.",
      "Sta cercando un capro espiatorio tra lo staff per il calo delle recensioni.",
      "Conosce il vero motivo per cui il direttore precedente è stato licenziato.",
      "Ha promesso esclusiva a due fornitori diversi per lo stesso servizio.",
      "Sa che una parte dell'edificio non è a norma antisismica."
    ]
  },

  STUDENTATO: {
    PRIMO_ANNO: [
      "Ha barato all'esame di ammissione. Non lo sa nessuno.",
      "Sta pensando di mollare ma non lo ha detto ai genitori.",
      "Ha una cotta per il coinquilino del piano di sopra.",
      "Non sa cucinare niente. Vive di piadine e senso di colpa.",
      "Ha mentito sull'età per entrare in un locale la prima settimana.",
      "Ha già perso le chiavi due volte.",
      "Sta piangendo ogni sera ma dice a tutti che sta bene.",
      "Non ha capito il programma di Analisi 1 ma finge di sì.",
      "Ha speso i soldi del semestre in tre settimane.",
      "Sta flirtando con il tutor del dormitorio.",
      "Ha copiato la tesina di uno studente degli anni precedenti.",
      "Si è iscritto alla facoltà sbagliata ma è troppo in imbarazzo per dirlo.",
      "I genitori pensano che stia studiando. Sono tre giorni che non apre un libro.",
      "Ha un esame domani mattina e non si è ancora seduto a studiare.",
      "Ha trovato il diario di qualcuno e lo sta leggendo."
    ],
    VETERANI: [
      "Sa quale professore passa gli esami a chi porta i regali giusti.",
      "Conosce le combinazioni di tutti gli armadietti del corridoio B.",
      "Ha ancora la chiave del laboratorio da due anni fa. Nessuno gliel'ha chiesta.",
      "Sa chi ha bruciato il microonde in cucina comune. Non è stato lui.",
      "Sta vendendo appunti vecchi come se fossero aggiornati.",
      "Ha una storia complicata con qualcuno del piano di sopra.",
      "Sa dove trovare gli esami degli anni precedenti per ogni corso.",
      "Conosce i turni del custode a memoria. Non è un caso.",
      "Ha modificato la lista delle prenotazioni della sala studio.",
      "Sa che la ragazza del 3C mente sulla sua età.",
      "Sta passando a qualcuno le risposte durante le simulazioni d'esame.",
      "Ha accesso al sistema wifi admin. Lo usa solo per sé.",
      "Sa che due coinquilini stanno subaffittando la stanza in nero.",
      "Conosce il segreto del residente tutor che non vorrebbe uscisse.",
      "Ha votato contro il coinquilino all'assemblea ma gli ha detto il contrario."
    ],
    FUORICORSO: [
      "È fuoricorso da tre anni. La famiglia pensa che stia ancora al quarto anno.",
      "Ha provato lo stesso esame sette volte.",
      "Conosce ogni angolo dello studentato meglio di chi ci lavora.",
      "Ha una storia con qualcuno che non doveva.",
      "Sta cercando di far sembrare il CV meno disperato di quello che è.",
      "Sa che il regolamento dello studentato è stato violato tre volte questa settimana.",
      "Non ha più l'iscrizione attiva ma vive ancora qui.",
      "Ha le chiavi di una stanza che ufficialmente è vuota.",
      "Conosce qualcuno nell'ufficio segreteria che gli sistema le cose.",
      "Sa dov'è il punto cieco delle telecamere.",
      "Sta pianificando di mollare il corso ma non ha ancora detto niente.",
      "Ha accumulato un debito con tre diversi coinquilini.",
      "Sa cose su quasi tutti quelli che abitano al primo piano.",
      "Ha trovato un modo per accedere alla rete interna universitaria.",
      "Tiene qualcosa nel magazzino che non dovrebbe stare lì."
    ],
    RESIDENT_TUTOR: [
      "Sa chi ha sfondato la porta del bagno comune. Non lo ha segnalato.",
      "Ha letto i dossier di segnalazione su quasi tutti gli studenti.",
      "Sta coprendo una violazione del regolamento in cambio di silenzio.",
      "Ha una relazione non dichiarata con un residente.",
      "Conosce la combinazione della cassaforte dell'ufficio.",
      "Sa che lo studentato ha una lista nera non ufficiale.",
      "Sta usando la sala riunioni per motivi non autorizzati.",
      "Ha promesso a tre studenti diversi la stessa camera singola.",
      "Sa chi fa entrare estranei di notte.",
      "Sta raccogliendo informazioni per un report interno che nessuno ha commissionato.",
      "Ha accesso ai dati personali di tutti i residenti.",
      "Sa che uno studente è in una situazione difficile ma non ha fatto niente.",
      "Conosce il contenuto delle segnalazioni anonime.",
      "Ha modificato il registro presenze due volte questo mese.",
      "Sa che la struttura ha un problema strutturale che non è stato comunicato."
    ]
  },

  PAESE_BORGO: {
    VECCHI_DEL_POSTO: [
      "Sa cosa è successo davvero quella notte del '94. Non lo ha mai detto.",
      "Conosce i confini reali dei terreni da prima che venissero ridisegnati.",
      "Sa chi era davvero il padre di qualcuno nel paese.",
      "Ha una disputa irrisolta con la famiglia del vicolo di sotto.",
      "Conosce l'accordo informale che regola chi può vendere cosa in paese.",
      "Sa dove sono nascosti i documenti che qualcuno sta cercando.",
      "Ha visto cose nel '09 che spiegherebbero molto. Non parla.",
      "Conosce il vero motivo per cui quella famiglia se ne andò.",
      "Sa che la fontana in piazza non è poi così medievale come dicono.",
      "Ha un debito morale con qualcuno che è morto.",
      "Conosce l'identità del donatore anonimo della sagra.",
      "Sa chi ha rubato dall'oratorio venti anni fa.",
      "Tiene ancora una lettera che non avrebbe dovuto conservare.",
      "Sa che il terreno del nuovo costruttore è contestato da tre famiglie.",
      "Conosce un passaggio segreto tra due proprietà che nessuno usa più."
    ],
    FAMIGLIE: [
      "Sta cercando di vendere casa in segreto.",
      "Sa che suo figlio ha qualcosa a che fare con i vandalismi del mese scorso.",
      "Ha un accordo con il negozio del paese che non tutti conoscono.",
      "Sta litigando per l'eredità con un parente che abita tre porte più avanti.",
      "Sa che i coniugi del vicolo hanno problemi seri.",
      "Ha firmato una petizione e poi l'ha negato pubblicamente.",
      "Conosce la storia dietro alla villa abbandonata fuori dal centro.",
      "Sa chi ha chiamato i carabinieri quella notte di agosto.",
      "Ha prestato soldi a qualcuno che non li restituirà.",
      "Sta tenendo segreto qualcosa ai figli che presto salterà fuori.",
      "Sa che il Comune ha approvato una variante urbanistica che favorisce qualcuno.",
      "Conosce il vero motivo per cui il parroco si è trasferito.",
      "Ha visto qualcosa nel bosco che non tornava. Non ne ha parlato.",
      "Sa che una famiglia del paese ha una seconda identità da qualche parte.",
      "Tiene un registro informale di chi deve cosa a chi nel paese."
    ],
    GIOVANI: [
      "Sa dove si ritrova il gruppo che disturba il paese di notte.",
      "Sta pianificando di andarsene dal paese per sempre. I genitori non lo sanno.",
      "Ha una storia con qualcuno che tutti pensano sia solo un amico.",
      "Sa chi ha scritto le cose sul muro della scuola.",
      "Conosce l'accesso alla cascina abbandonata che nessuno usa.",
      "Sta lavorando in nero per qualcuno del paese.",
      "Ha sentito una conversazione privata che lo riguarda.",
      "Sa che il bar del centro serve minori. È uno di loro.",
      "Ha trovato qualcosa nel bosco che non ha mostrato a nessuno.",
      "Sta mentendo ai genitori sulla sua vita fuori dal paese.",
      "Conosce l'identità dell'account anonimo che posta sul gruppo Facebook del paese.",
      "Sa chi ha rovesciato il cestino davanti al municipio.",
      "Ha una chiave di una proprietà che non è sua.",
      "Sta organizzando qualcosa per l'estate che non tutti approveranno.",
      "Sa dove si trova qualcuno che tutti pensano sia partito."
    ],
    FORESTIERI: [
      "Non è qui per turismo. C'è qualcosa che sta cercando.",
      "Conosce qualcuno del paese da prima. Non vuole che si sappia.",
      "Ha comprato casa ma non ha intenzione di abitarci.",
      "Sa cose sul paese che i residenti non sanno di lui.",
      "Sta raccogliendo informazioni per qualcuno che non ha mai menzionato.",
      "Ha fatto una domanda strana al bar. Nessuno sa perché.",
      "Sa qual è il valore reale dei terreni che qualcuno sta vendendo.",
      "Viene da un posto che non combacia con il suo accento.",
      "Ha incontrato qualcuno qui che non si aspettava di trovare.",
      "Sta fotografando edifici con troppa precisione per essere turismo.",
      "Conosce la storia del paese meglio dei residenti. È strano.",
      "Ha parlato con il sindaco in privato prima di arrivare.",
      "Sa che una proprietà qui è legata a qualcosa di più grande.",
      "Porta con sé documenti che non lascia mai fuori dalla sua vista.",
      "Sa qualcosa su questa zona che cambierebbe tutto se venisse fuori."
    ]
  },

  DUBLINO_BIGTECH: {
    ENGINEERING: [
      "Sa che il sistema di autenticazione ha una falla critica da sei mesi.",
      "Sta lavorando su un progetto personale con infrastruttura aziendale.",
      "Ha copiato blocchi di codice proprietario per un progetto freelance.",
      "Sa che il prossimo round di layoff partirà dal suo team.",
      "Ha accesso a dati di produzione che non dovrebbe vedere.",
      "Sta cercando lavoro di nascosto. Ha già tre colloqui questa settimana.",
      "Ha il visto scaduto. Continua a lavorare sperando che nessuno controlli.",
      "Sa che il capo ha attribuito il suo lavoro a qualcun altro nel report annuale.",
      "Conosce una backdoor nel sistema legacy che nessuno ha mai chiuso.",
      "Sta simulando remote work mentre è in realtà fuori dall'Europa.",
      "Ha modificato i benchmark per far sembrare migliori le performance del sistema.",
      "Sa che il GDPR è stato violato nell'ultimo deployment.",
      "Sta raccogliendo prove per un whistleblowing che non ha ancora deciso di fare.",
      "Conosce le credenziali di admin di un sistema che nessuno più monitora.",
      "Ha firmato un NDA e poi ha parlato con un giornalista tech."
    ],
    SALES: [
      "Ha promesso funzionalità inesistenti a un cliente da 2M di contratto.",
      "Sta gonfiando il pipeline per raggiungere il quota di fine trimestre.",
      "Ha un accordo informale con un broker esterno.",
      "Sa che il cliente più grande sta valutando di andarsene.",
      "Sta portando contatti aziendali nel suo CRM personale.",
      "Ha falsificato le note di una call con un prospect.",
      "Sa che il competitor ha già chiuso un deal che pensavano fosse loro.",
      "Conosce la politica di pricing reale, non quella dichiarata.",
      "Sta negoziando la sua uscita mentre chiude un contratto importante.",
      "Ha bypassato il processo di approvazione legale su un accordo.",
      "Sa che un cliente pagante usa il prodotto per scopi non previsti nel contratto.",
      "Ha condiviso la roadmap con un prospect senza autorizzazione.",
      "Sta per portare via un account da 500k se cambia azienda.",
      "Conosce l'identità del cliente anonimo che ha fatto la review negativa su G2.",
      "Ha promesso SLA che il team tecnico non può rispettare."
    ],
    PEOPLE_OPS: [
      "Sa chi è nella lista del prossimo round di layoff. Non può dirlo.",
      "Ha accesso ai salary di tutti. Alcuni sono molto diversi da quello che la gente pensa.",
      "Sta coprendo una segnalazione HR che non è stata gestita.",
      "Sa che un manager ha avuto un comportamento scorretto. Il caso è stato chiuso.",
      "Conosce le performance review reali, non quelle condivise.",
      "Ha promesso promozioni che il budget non consente.",
      "Sa che due persone nel team hanno una relazione non dichiarata.",
      "Sta gestendo un caso disciplinare che non risulta nei documenti ufficiali.",
      "Conosce le ragioni reali per cui tre persone si sono dimesse nell'ultimo mese.",
      "Ha visto il contenuto di una segnalazione anonima che riguarda qualcuno di specifico.",
      "Sa che la politica di smart working cambierà il mese prossimo. Non è ancora pubblica.",
      "Ha accesso ai dati medici di alcuni dipendenti tramite il piano assicurativo.",
      "Sta raccogliendo dati su chi prende troppe sick leave.",
      "Conosce l'esito di una causa di lavoro che non è stato comunicato al team.",
      "Sa che il CEO ha visitato un headhunter la settimana scorsa."
    ],
    LEADERSHIP: [
      "Sa che i numeri del Q3 verranno aggiustati prima della board meeting.",
      "Sta trattando un'acquisizione in segreto. Il team non lo sa.",
      "Ha usato budget discrezionale per motivi non ufficiali.",
      "Sa che un VP ha intenzione di dimettersi entro fine anno.",
      "Sta pianificando una ristrutturazione che dimezzerà due team.",
      "Ha promesso equity a qualcuno usando shares che non esistono ancora.",
      "Sa che il prodotto principale perderà un cliente enterprise fondamentale.",
      "Conosce il vero runway prima che serva un altro round.",
      "Ha dato indicazioni al team legale per rallentare una causa.",
      "Sta valutando di delocalizzare il team engineering in un paese a costo minore.",
      "Sa che il board ha già discusso di cambiare il CEO.",
      "Ha un accordo di buonuscita confidenziale con qualcuno che ha già lasciato.",
      "Conosce i dettagli di una data breach che non è stata comunicata pubblicamente.",
      "Sa che la due diligence di un potenziale acquirente ha trovato qualcosa.",
      "Sta costruendo una exit strategy personale indipendente da quella aziendale."
    ]
  }
};

export const INCOMING_MESSAGES = {
  // Startup
  MANAGEMENT: [
    "Ehi, hai un secondo? Devo dirti una cosa ma non qui.",
    "Ho visto chi stavi guardando. Stai attento.",
    "Domani c'è una riunione che non è sul calendario ufficiale.",
    "Non fidarti di quello che ti dicono i Founders. Ti sto avvisando.",
    "Ho sentito il tuo nome in una conversazione che non avresti dovuto finire lì.",
    "So chi ha fatto trapelare quella cosa. Vuoi saperlo?",
    "Stanno monitorando chi parla con chi. Già lo sai?"
  ],
  DEV_TEAM: [
    "Hey, c'è una cosa strana nel sistema.",
    "Ho trovato qualcosa nel codice che non dovrebbe essere lì.",
    "Stai chattando con qualcuno del management? Sii cauto.",
    "Il sistema logga più di quello che pensano. Compreso questo.",
    "Ho bisogno di parlarti offline. Hai Signal?",
    "Quel bug della settimana scorsa? Non era un bug."
  ],
  MARKETING: [
    "Ho sentito dire una cosa su di te in una call che non dovevi sentire.",
    "Sai perché l'ultimo collega è sparito così in fretta?",
    "Posso fidarmi di te? Ho bisogno di dirlo a qualcuno.",
    "Ho salvato uno screenshot che potrebbe interessarti.",
    "Non aprire quella mail se ti arriva."
  ],
  FOUNDERS: [
    "Dobbiamo parlare. Ma non adesso e non qui.",
    "Hai un'idea di cosa sta succedendo davvero?",
    "Ti sei mai chiesto perché certi nodi scompaiono dalla rete?",
    "Ho un'informazione che vale molto. Dipende da chi la vuole.",
    "Se esci da questa rete adesso, probabilmente è la scelta giusta."
  ],
  // Villaggio
  ANIMATORI: [
    "Stasera dopo le 23 non fermarti in spiaggia.",
    "Hai visto chi è arrivato ieri? Conosco quella faccia da qualche parte.",
    "Ti posso dire una cosa ma devi promettermi che non viene fuori.",
    "La direzione sa più di quello che dice.",
    "Quell'ospite del bungalow 7 fa domande strane. Troppo strane."
  ],
  TURISTI: [
    "Sai dove posso trovare qualcuno di cui fidarmi qui?",
    "Ho sentito qualcosa stanotte che non mi torna.",
    "Non sono sicuro che questo posto sia quello che sembra.",
    "Tu sembri qualcuno con cui si può parlare."
  ],
  STAFF: [
    "Non lasciare niente di valore in camera.",
    "Ci sono cose che succedono qui di notte che la direzione preferisce non sapere.",
    "Quella persona ti sta guardando da un po'. L'hai notato?",
    "Posso dirti qualcosa in confidenza?"
  ],
  DIREZIONE: [
    "Ti tengo d'occhio. Non in senso negativo.",
    "Ci sono ospiti che ci interessano più di altri. Tu sei tra quelli.",
    "Hai fatto domande strane. Qualcuno me l'ha fatto notare."
  ],
  // Studentato
  PRIMO_ANNO: [
    "Non so a chi dirlo ma devo dirlo a qualcuno.",
    "Ho visto qualcosa nel corridoio stanotte che non capisco.",
    "Mi puoi aiutare con una cosa? Non voglio che lo sappia nessuno."
  ],
  VETERANI: [
    "Sei nuovo, quindi te lo dico io: stai attento al tutor del piano B.",
    "Ho capito cosa stai cercando. Posso aiutarti.",
    "Non usare quella stanza. Mai. Fidati."
  ],
  FUORICORSO: [
    "So cose su questo posto che non trovi su nessun volantino.",
    "Sei il tipo di persona con cui vale la pena parlare.",
    "Ho sentito il tuo nome in una conversazione strana."
  ],
  RESIDENT_TUTOR: [
    "Devo dirti qualcosa in via ufficiale. Ma preferisco farlo così.",
    "Hai detto qualcosa che è arrivato a orecchie che non doveva.",
    "Ti consiglio di stare sotto il radar per un po'."
  ],
  // Borgo
  VECCHI_DEL_POSTO: [
    "Ti osservo da quando sei arrivato. Hai le facce giuste.",
    "Ci sono cose su questo paese che non si trovano da nessuna parte.",
    "Se vuoi capire davvero cosa succede qui, devi sentire me."
  ],
  FAMIGLIE: [
    "Hai fatto domande alle persone sbagliate.",
    "Non tutto quello che ti dicono qui è vero.",
    "Posso dirti qualcosa che forse cambia il modo in cui vedi le cose."
  ],
  GIOVANI: [
    "Sai dove andiamo stasera? Vieni con noi.",
    "Ho sentito una cosa su di te. Niente di grave. Anzi.",
    "Sei diverso dagli altri che arrivano qui."
  ],
  FORESTIERI: [
    "Anch'io non sono di qui. Possiamo parlare.",
    "Ho trovato qualcosa che potrebbe interessarti.",
    "Stai cercando la stessa cosa che sto cercando io?"
  ],
  // Dublino
  ENGINEERING: [
    "Hai controllato i log di ieri sera? C'è qualcosa di strano.",
    "Non usare Slack per questa cosa. Scrivimi su altro.",
    "So che stai cercando risposte. Forse posso aiutarti."
  ],
  SALES: [
    "Ho sentito il tuo nome in una call che non ti riguardava.",
    "Attento a quello che dici nelle standup. Qualcuno riporta.",
    "Ho un'informazione che potrebbe farti comodo."
  ],
  PEOPLE_OPS: [
    "Non posso dirti niente ufficialmente. Ma uffici ufficiosamente.",
    "Hai fatto qualcosa che ha attirato attenzione. Non in senso positivo.",
    "C'è qualcosa nel tuo dossier che dovresti sapere."
  ],
  LEADERSHIP: [
    "Ti sto osservando. In senso positivo, per ora.",
    "Sei il tipo di persona con cui vale la pena avere una conversazione privata.",
    "Hai capito qualcosa che altri non hanno capito. È interessante."
  ]
};

export const MONITOR_MESSAGES = {
  gossip: [
    "{a} e {b} si mandano messaggi da mezz'ora.",
    "{a} ha aperto il profilo di {b} tre volte oggi.",
    "{a} sta evitando {b} dopo quello che è successo ieri.",
    "{a} e {b} hanno pranzato insieme fuori.",
    "{a} ha passato qualcosa a {b} senza dirlo a nessuno.",
    "{a} ha cambiato tono con {b} dopo stamattina.",
    "{a} e {b} si sono fermati a parlare per venti minuti.",
    "{a} ha guardato lo schermo di {b} mentre passava.",
    "{a} ha cercato il nome di {b} nella lista.",
    "{a} non risponde ai messaggi di {b} da ieri."
  ],
  alert: [
    "Qualcuno ha alzato la voce vicino a {a}.",
    "{a} ha aperto qualcosa che non dovrebbe vedere.",
    "{a} sta parlando di te con qualcun altro.",
    "Il nome di {a} è comparso in una conversazione che non lo riguardava.",
    "{a} si è fermato a guardarti. Forse è un caso."
  ]
};

// ── ZONE GEOGRAFICHE PER SCENARIO ─────────────────────────────────────────────
// Aggiunta in coda a prose.js come export aggiuntiva

export const ZONE_CONFIG = {
  MILANO_STARTUP: [
    { label: 'Open Space',   rx: 0.35, ry: 0.35, rr: 0.12 },
    { label: 'Sala Riunioni',rx: 0.65, ry: 0.30, rr: 0.09 },
    { label: 'Macchinetta',  rx: 0.30, ry: 0.60, rr: 0.07 },
    { label: 'Terrazzo',     rx: 0.65, ry: 0.65, rr: 0.09 },
  ],
  VILLAGGIO_VACANZE: [
    { label: 'Spiaggia',     rx: 0.30, ry: 0.25, rr: 0.13 },
    { label: 'Bar',          rx: 0.70, ry: 0.28, rr: 0.08 },
    { label: 'Reception',    rx: 0.28, ry: 0.68, rr: 0.09 },
    { label: 'Anfiteatro',   rx: 0.70, ry: 0.68, rr: 0.10 },
  ],
  STUDENTATO: [
    { label: 'Cucina Comune',rx: 0.30, ry: 0.28, rr: 0.10 },
    { label: 'Sala Studio',  rx: 0.70, ry: 0.28, rr: 0.09 },
    { label: 'Corridoio B',  rx: 0.30, ry: 0.68, rr: 0.08 },
    { label: 'Cortile',      rx: 0.70, ry: 0.68, rr: 0.11 },
  ],
  PAESE_BORGO: [
    { label: 'La Piazza',    rx: 0.50, ry: 0.40, rr: 0.13 },
    { label: 'La Taverna',   rx: 0.25, ry: 0.65, rr: 0.09 },
    { label: 'Via Centrale', rx: 0.70, ry: 0.30, rr: 0.08 },
    { label: 'Il Sagrato',   rx: 0.72, ry: 0.65, rr: 0.08 },
  ],
  DUBLINO_BIGTECH: [
    { label: 'Floor 3',      rx: 0.30, ry: 0.28, rr: 0.11 },
    { label: 'Rooftop Bar',  rx: 0.70, ry: 0.28, rr: 0.09 },
    { label: 'Sala Ping-Pong',rx:0.28, ry: 0.68, rr: 0.08 },
    { label: 'Hot Desk Area',rx: 0.70, ry: 0.68, rr: 0.10 },
  ],
};

// ── INTERCETTAZIONI AMBIENTALI (per zona) ─────────────────────────────────────
export const AMBIENT_INTERCEPTS = {
  MILANO_STARTUP: {
    'Open Space': [
      '{a} ha abbassato la voce quando si è avvicinato qualcuno.',
      '{a} ha chiuso il laptop di scatto.',
      '{a} sta guardando lo schermo di qualcun altro senza che se ne accorga.',
      '{a} ha alzato gli occhi quando hai attraversato la stanza. Li ha subito abbassati.',
      '{a} e {b} hanno smesso di parlare non appena ti hanno visto.',
      'Qualcuno ha lasciato un documento aperto sulla stampante. Nessuno è venuto a prenderlo.',
      '{a} ha mandato un messaggio, poi ha guardato intorno prima di rimettere il telefono in tasca.',
    ],
    'Sala Riunioni': [
      'Voci dalla Sala Riunioni. Qualcuno ha alzato il tono.',
      'La riunione doveva durare 30 minuti. Sono dentro da due ore.',
      'Chi è entrato non corrisponde alla lista dell\'invito.',
      '{a} è uscito dalla sala prima degli altri. Non ha salutato nessuno.',
      'La porta è rimasta socchiusa per qualche minuto. Poi qualcuno l\'ha chiusa dall\'interno.',
      'Una voce ha detto chiaramente "non qui". Poi silenzio.',
    ],
    'Macchinetta': [
      '{a} e {b} si sono allontanati non appena ti sei avvicinato.',
      'Conversazione interrotta alla macchinetta. Sorrisi forzati.',
      '{a} ha aspettato che finisse il suo turno prima di avvicinarsi a {b}.',
      '{a} ha lasciato il caffè sul bordo senza berlo. È rimasto lì per dieci minuti.',
      'Qualcuno ha scritto qualcosa sul taccuino e lo ha richiuso subito.',
    ],
    'Terrazzo': [
      'Sul terrazzo {a} era al telefono. Ha smesso non appena ti ha visto.',
      '{a} era appoggiato al corrimano. Guardava giù. Non si è accorto di niente.',
      '{a} e {b} stavano parlando. Si sono separati quando qualcuno ha aperto la porta.',
      'Qualcuno ha lasciato un mozzicone sul cornicione. Non è di chi lavora qui.',
      '{a} è rimasto fuori molto più del normale. Quando è rientrato aveva l\'aria di chi ha deciso qualcosa.',
    ],
  },
  VILLAGGIO_VACANZE: {
    'Spiaggia': [
      '{a} e {b} vicino all\'ombrellone 14. Parlavano sottovoce.',
      'Qualcuno ha lasciato qualcosa nella sabbia. Nessuno è tornato a prenderlo.',
      '{a} non è rientrato con il gruppo. Nessuno ha fatto domande.',
      '{a} guardava il mare ma i suoi occhi si spostavano spesso verso {b}.',
      'Un pezzo di carta è passato di mano tra {a} e {b}. Veloce. Nessuno l\'ha visto tranne te.',
      '{a} si è alzato e si è spostato quando si è avvicinato qualcuno.',
    ],
    'Bar': [
      '{a} ha guardato il conto due volte prima di pagare.',
      'Il barista ha servito {a} senza che ordinasse. Si conoscono da prima.',
      'Qualcuno ha lasciato un foglietto sotto il bicchiere. È rimasto lì.',
      '{a} ha risposto al telefono e si è alzato subito dal bancone.',
      '{a} e {b} seduti allo stesso tavolo. Nessuno dei due parlava. Aspettavano qualcosa.',
      'Un drink ordinato e non ritirato. {a} non è tornato.',
    ],
    'Reception': [
      'Alla reception hanno abbassato la voce quando sei entrato.',
      '{a} ha chiesto informazioni su una stanza che non è la sua.',
      'Una chiamata urgente per {a}. Non si sapeva che fosse qui.',
      '{a} ha guardato il registro delle presenze quando pensava che nessuno guardasse.',
      'Una busta lasciata alla reception. Nessuno è venuto a ritirarla.',
    ],
    'Anfiteatro': [
      'Le prove serali sono state cancellate senza spiegazioni.',
      '{a} non c\'era allo spettacolo. Nessuno sa dove fosse.',
      '{a} e {b} nell\'anfiteatro vuoto. Si sono fermati quando hanno sentito i passi.',
      'Qualcuno ha spostato le sedie. Non corrispondono alla disposizione di prima.',
    ],
  },
  STUDENTATO: {
    'Cucina Comune': [
      '{a} ha smesso di parlare appena sei entrato in cucina.',
      'Qualcuno ha lasciato qualcosa nel frigo con un nome scritto sopra. Non è il suo.',
      '{a} stava scrivendo su un foglio. Lo ha coperto con il braccio quando ti ha visto.',
      '{a} e {b} in cucina a un\'ora strana. Si sono fermati a guardarti.',
      'Un telefono lasciato sul tavolo ha vibrato tre volte. Nessuno è venuto a rispondere.',
    ],
    'Sala Studio': [
      'La prenotazione è stata cancellata all\'ultimo. Qualcuno non voleva essere trovato lì.',
      '{a} davanti a uno schermo spento. Pensava.',
      'Un post-it sul tavolo con un numero. Qualcuno lo stava aspettando.',
      '{a} ha aperto un file e lo ha chiuso subito quando si è seduto {b}.',
      'Una sedia spostata. Qualcuno era qui poco fa.',
    ],
    'Corridoio B': [
      '{a} è uscito da una stanza che non è la sua.',
      'La porta del 3C era aperta. Adesso è chiusa a doppia mandata.',
      '{a} camminava veloce. Ha cambiato direzione quando ti ha visto.',
      'Qualcuno ha lasciato cadere qualcosa. Si è fermato a raccoglierlo solo dopo aver guardato intorno.',
      '{a} e {b} fermi al fondo del corridoio. Si sono separati quando qualcuno si è avvicinato.',
    ],
    'Cortile': [
      '{a} e {b} nel cortile. Si sono separati quando ti hanno visto.',
      'Qualcuno aspettava seduto. Si è alzato e se n\'è andato senza che nessuno arrivasse.',
      '{a} ha passato qualcosa a {b}. Veloce. Con le mani basse.',
      'Una conversazione interrotta di colpo. {a} ha fatto finta di guardare il telefono.',
    ],
  },
  PAESE_BORGO: {
    'La Piazza': [
      '{a} ha smesso di salutare {b} da stamattina.',
      'Due persone che di solito si fermano a parlare si sono incrociate senza guardarsi.',
      '{a} attraversava la piazza e ha cambiato lato della strada quando ha visto {b}.',
      'Qualcuno ha letto la bacheca del comune più a lungo del normale.',
      '{a} si è fermato a osservare qualcosa che non c\'era. Pensava.',
      'Una conversazione interrotta. Tutti si sono voltati quando sei arrivato tu.',
    ],
    'La Taverna': [
      'Una discussione interrotta quando sei entrato. Sorrisi di circostanza.',
      '{a} ha offerto qualcosa da bere a {b} senza motivo apparente.',
      'Qualcuno ha lasciato un numero scritto sul tovagliolo. È ancora lì.',
      '{a} è rimasto dopo la chiusura. Il titolare non ha detto niente.',
      '{a} e {b} allo stesso tavolo. Non si parlavano. Aspettavano.',
    ],
    'Via Centrale': [
      '{a} ti ha guardato dalla finestra mentre passavi. Ha fatto un passo indietro.',
      'Una macchina ferma in via centrale da tre giorni. Nessuno sa di chi è.',
      '{a} e {b} si sono incrociati. Due parole. Poi ognuno per la sua strada.',
      'Qualcuno ha fotografato qualcosa. Non era turismo.',
    ],
    'Il Sagrato': [
      'Una conversazione interrotta fuori dalla chiesa.',
      '{a} e {b} si sono stretti la mano in modo strano. Più lungo del solito.',
      '{a} è entrato in chiesa fuori dall\'orario delle messe.',
      'Qualcuno ha lasciato qualcosa sotto la panchina del sagrato. C\'è ancora.',
    ],
  },
  DUBLINO_BIGTECH: {
    'Floor 3': [
      '{a} ha chiuso il ticket senza risolverlo.',
      'Schermo condiviso per errore. {a} ha chiuso tutto in fretta.',
      'Slack silenziato nel floor. Qualcosa è successo.',
      '{a} ha guardato lo schermo di {b} mentre passava. {b} non se n\'è accorto.',
      'Un meeting cancellato all\'ultimo. Nessuna spiegazione nel calendario.',
      '{a} ha mandato un messaggio e ha aspettato la risposta senza smettere di guardare il telefono.',
    ],
    'Rooftop Bar': [
      '{a} e {b} sottovoce. Si sono spostati quando ti hanno visto.',
      'Qualcuno ha offerto da bere a {a}. Non è una cosa normale qui.',
      '{a} è rimasto sul rooftop dopo che tutti erano rientrati.',
      'Una conversazione che sembrava casual. Non lo era.',
    ],
    'Sala Ping-Pong': [
      '{a} ha interrotto la partita per rispondere a un messaggio. Poi è rimasto a fissare lo schermo.',
      'La sala era prenotata. Nessuno ci è entrato.',
      '{a} e {b} che giocavano si sono fermati quando sei entrato tu.',
    ],
    'Hot Desk Area': [
      '{a} si è seduto in una postazione lontana da dove lavora di solito.',
      'Un laptop lasciato incustodito con lo schermo ancora acceso.',
      '{a} ha cercato qualcosa nei cassetti di una scrivania che non è la sua.',
      'Qualcuno ha spostato il divisorio. Ora si vede meno dall\'ingresso.',
    ],
  },
};

// ── FALLBACK MATRIX (pattern matching offline) ─────────────────────────────────
export const FALLBACK_MATRIX = {
  0: { // trustTier 0 — sconosciuto
    bassa:  ['Ok.', 'Sì?', 'Non ti conosco abbastanza per rispondere a questo.', 'Mmh.', 'Lasciami pensare.'],
    media:  ['Non è il momento.', 'Parla con qualcun altro.', 'Ho sentito, ma non posso dirti niente.'],
    alta:   ['Non scrivermi.', 'Lasciami stare.', 'Non adesso, davvero.'],
  },
  1: { // trustTier 1 — conosciuto
    bassa:  ['Capito. Ci torno su.', 'Interessante quello che dici.', 'Fammi fare due conti.', 'Ok, ne parliamo.'],
    media:  ['C\'è qualcosa che non torna.', 'Preferisco non dirlo qui.', 'Senti, lasciami un po\' di tempo.'],
    alta:   ['Non riesco a pensare adesso.', 'Ci sono troppe cose che succedono.', 'Scrivimi dopo.'],
  },
  2: { // trustTier 2 — profilato / alto bond
    bassa:  ['Tra noi posso dirtelo: sì.', 'Sospettavo anche io la stessa cosa.', 'Ci avevo pensato, ma non ne avevo parlato con nessuno.'],
    media:  ['Non mi fidavo di dirtelo prima. Adesso sì.', 'Quello che sai cambia le cose.', 'Dobbiamo muoverci in fretta.'],
    alta:   ['Ho paura che stiano guardando.', 'Non posso parlarne qui. Trovami da solo.', 'Stai attento a chi parla di te.'],
  },
};

// ── PATCH: aggiungi zones a CONTEXT_CONFIG ────────────────────────────────────
Object.keys(CONTEXT_CONFIG).forEach(key => {
  if (ZONE_CONFIG[key]) CONTEXT_CONFIG[key].zones = ZONE_CONFIG[key];
});


// ── MISSION TEMPLATES ─────────────────────────────────────────────────────────
export const MISSION_TEMPLATES = {
  MILANO_STARTUP: {
    MANAGEMENT:  ['Scopri cosa sa {target} sul leak dei salary. Avvicinalo e fammi sapere.', 'C\'è qualcosa che non torna con {target} di {faction}. Parlaci. Dimmi cosa nasconde.', 'Ho bisogno di sapere se {target} è coinvolto nella fuga di notizie. Sii discreto.'],
    DEV_TEAM:    ['Sospetto che {target} abbia accesso a qualcosa che non dovrebbe. Scopri cosa.', '{target} di {faction} sa qualcosa sul down del mese scorso. Avvicinalo prima che parli con altri.', 'Trova un modo per far parlare {target}. Voglio sapere cosa sta costruendo di notte.'],
    MARKETING:   ['Quei numeri del report non tornano. {target} sa qualcosa. Scopri cosa.', 'Ho bisogno di sapere se {target} sta davvero portando via clienti. Avvicinalo.', '{target} di {faction} ha informazioni che potrebbero cambiare le cose. Parlaci.'],
    FOUNDERS:    ['So che {target} sa dove finiscono davvero i soldi. Hai bisogno di farglielo dire.', '{target} di {faction} era in quella riunione. Scopri cosa si è detto.', 'Il futuro di tutto dipende da quello che sa {target}. Avvicinalo. Adesso.'],
  },
  VILLAGGIO_VACANZE: {
    ANIMATORI:   ['Quella notte di luglio {target} era sveglio. Scopri cosa ha visto.', 'Ho bisogno di sapere se {target} ha davvero rubato dal bar o se è solo una storia.', '{target} organizza qualcosa dopo la chiusura. Scopri cosa.'],
    TURISTI:     ['Quell\'ospite — {target} — non è qui per caso. Scopri cosa sta cercando.', '{target} ha trovato qualcosa sulla spiaggia. Ho bisogno di sapere cos\'è.', 'Non mi fido di {target}. Avvicinalo e dimmi cosa sa sulla direzione.'],
    STAFF:       ['Le chiavi delle camere. {target} le ha tutte. Scopri se le usa.', '{target} conosce l\'identità del recensore. Ho bisogno di saperlo.', 'Voglio sapere cosa c\'era in quella cassaforte. {target} sa. Fallo parlare.'],
    DIREZIONE:   ['Quella trattativa di vendita — {target} ne sa più di quanto dice. Scopri i dettagli.', 'L\'ispezione sanitaria. {target} era presente. Fammi sapere cosa sa.', 'Ho bisogno di sapere se {target} sta davvero cercando un capro espiatorio o se sono io.'],
  },
  STUDENTATO: {
    PRIMO_ANNO:  ['{target} ha trovato qualcosa. Non ho capito cosa. Scoprilo prima che lo dica a qualcun altro.', 'Quella tesina. {target} l\'ha copiata o no? Ho bisogno di saperlo.', 'Sento che {target} sta per mollare. Scopri perché. Potrebbe essere utile.'],
    VETERANI:    ['{target} sa dove trovare gli esami vecchi. Ho bisogno di quel canale.', 'Il tutor del piano B. {target} sa qualcosa di lui. Fallo parlare.', '{target} ha modificato la lista della sala studio. Scopri perché e a favore di chi.'],
    FUORICORSO:  ['{target} conosce qualcuno in segreteria. Ho bisogno di quel contatto.', 'Quella stanza vuota. {target} ha le chiavi. Scopri cosa c\'è dentro.', '{target} sa dov\'è il punto cieco delle telecamere. Ho bisogno di saperlo.'],
    RESIDENT_TUTOR: ['{target} ha letto il mio dossier. Scopri cosa sa.', 'Quella segnalazione anonima. {target} ne conosce il contenuto. Fammelo sapere.', 'Il registro presenze. {target} l\'ha modificato. Scopri a favore di chi.'],
  },
  PAESE_BORGO: {
    VECCHI_DEL_POSTO: ['Quella notte del \'94. {target} c\'era. Ha visto. Ho bisogno che parli.', 'I confini dei terreni. {target} li conosce davvero. Fammelo sapere prima che vendano.', '{target} tiene una lettera. Ho bisogno di sapere da chi è.'],
    FAMIGLIE:    ['{target} sta cercando di vendere casa. Scopri a chi e perché in segreto.', 'Quei vandalismi. {target} sa chi è stato. Avvicinalo prima che decida di parlare.', '{target} ha prestato soldi a qualcuno. Scopri a chi e quanto.'],
    GIOVANI:     ['Quella cascina abbandonata. {target} ha l\'accesso. Scopri cosa ci fanno dentro.', '{target} sa chi è l\'account anonimo del gruppo Facebook. Ho bisogno di saperlo.', 'Quella persona che tutti pensano sia partita. {target} sa dov\'è. Scoprilo.'],
    FORESTIERI:  ['{target} non è qui per turismo. Scopri per chi lavora davvero.', 'Quei documenti che {target} porta sempre con sé. Scopri cosa contengono.', '{target} ha parlato con il sindaco in privato. Ho bisogno di sapere cosa si sono detti.'],
  },
  DUBLINO_BIGTECH: {
    ENGINEERING: ['{target} conosce una backdoor che nessuno dovrebbe conoscere. Scopri i dettagli.', 'Il GDPR violato nell\'ultimo deploy. {target} sa tutto. Fammelo dire.', '{target} sta raccogliendo prove per qualcosa. Scopri cosa prima che le usi.'],
    SALES:       ['{target} sta portando via un account enorme. Ho bisogno di saperlo prima che sia troppo tardi.', 'Quella call con il prospect. {target} ha promesso qualcosa che non può mantenere. Scopri cosa.', '{target} conosce il pricing reale. Scopri se lo ha condiviso con qualcuno.'],
    PEOPLE_OPS:  ['La lista del prossimo layoff. {target} la conosce. Ho bisogno di un nome.', '{target} sta coprendo una segnalazione. Scopri di chi si tratta.', 'Il CEO ha visitato un headhunter. {target} lo sa. Fammelo confermare.'],
    LEADERSHIP:  ['Quell\'acquisizione in corso. {target} ne sa i dettagli. Scopri tutto.', 'Il runway reale. {target} lo conosce. Ho bisogno di quel numero.', '{target} ha un accordo di buonuscita segreto con qualcuno. Scopri con chi.'],
  },
  DEFAULT: ['Scopri cosa nasconde {target}.', 'Ho bisogno di informazioni su {target} di {faction}.', 'Avvicinati a {target}. C\'è qualcosa che non torna.'],
};



// ══════════════════════════════════════════════════════════════════════════════
// NUOVI SCENARI — aggiunti a CONTEXT_CONFIG
// ══════════════════════════════════════════════════════════════════════════════

// Patch CONTEXT_CONFIG con i nuovi scenari
Object.assign(CONTEXT_CONFIG, {
  OSPEDALE_NOTTURNO: {
    label: '🏥 Ospedale Notturno',
    subtitle: 'Turni di notte, corsie vuote, referti modificati',
    factions: ['MEDICI','INFERMIERI','AMMINISTRAZIONE','PAZIENTI'],
    factionLabels: { MEDICI:'MED', INFERMIERI:'INF', AMMINISTRAZIONE:'AMM', PAZIENTI:'PAZ' },
    factionCenters: {
      MEDICI:          { rx:0.25, ry:0.28 },
      INFERMIERI:      { rx:0.75, ry:0.28 },
      AMMINISTRAZIONE: { rx:0.25, ry:0.72 },
      PAZIENTI:        { rx:0.75, ry:0.72 }
    },
    zones: [
      { label: 'Corsia A', rx:0.28, ry:0.28, rr:0.10 },
      { label: 'Pronto Soccorso', rx:0.72, ry:0.28, rr:0.11 },
      { label: 'Archivio', rx:0.28, ry:0.70, rr:0.08 },
      { label: 'Sala Medici', rx:0.72, ry:0.70, rr:0.09 },
    ]
  },
  COLLEGIO_RELIGIOSO: {
    label: '⛪ Collegio Religioso',
    subtitle: 'Regole ferree, comunità chiusa, archivi sigillati',
    factions: ['DOCENTI','STUDENTI_INTERNI','PERSONALE','VERTICE'],
    factionLabels: { DOCENTI:'DOC', STUDENTI_INTERNI:'STU', PERSONALE:'PER', VERTICE:'VER' },
    factionCenters: {
      DOCENTI:           { rx:0.25, ry:0.28 },
      STUDENTI_INTERNI:  { rx:0.75, ry:0.28 },
      PERSONALE:         { rx:0.25, ry:0.72 },
      VERTICE:           { rx:0.75, ry:0.72 }
    },
    zones: [
      { label: 'Cappella', rx:0.50, ry:0.25, rr:0.09 },
      { label: 'Aula Magna', rx:0.28, ry:0.60, rr:0.10 },
      { label: 'Archivio', rx:0.72, ry:0.35, rr:0.08 },
      { label: 'Refettorio', rx:0.72, ry:0.68, rr:0.10 },
    ]
  },
  NAVE_CROCIERA: {
    label: '🚢 Nave da Crociera',
    subtitle: 'Spazio chiuso, gerarchia rigida, 60 ore all\'attracco',
    factions: ['UFFICIALI','PERSONALE_BORDO','PASSEGGERI','SICUREZZA'],
    factionLabels: { UFFICIALI:'UFF', PERSONALE_BORDO:'PER', PASSEGGERI:'PAS', SICUREZZA:'SIC' },
    factionCenters: {
      UFFICIALI:       { rx:0.25, ry:0.28 },
      PERSONALE_BORDO: { rx:0.75, ry:0.28 },
      PASSEGGERI:      { rx:0.25, ry:0.72 },
      SICUREZZA:       { rx:0.75, ry:0.72 }
    },
    zones: [
      { label: 'Ponte Comando', rx:0.28, ry:0.25, rr:0.09 },
      { label: 'Ristorante', rx:0.72, ry:0.28, rr:0.10 },
      { label: 'Cabine', rx:0.28, ry:0.68, rr:0.11 },
      { label: 'Sala Macchine', rx:0.72, ry:0.68, rr:0.08 },
    ]
  },
  COMPAGNIA_TEATRALE: {
    label: '🎭 Compagnia Teatrale',
    subtitle: 'Ego, gelosie, prima tra 48 ore',
    factions: ['ATTORI','REGIA','TECNICI','PRODUZIONE'],
    factionLabels: { ATTORI:'ATT', REGIA:'REG', TECNICI:'TEC', PRODUZIONE:'PRO' },
    factionCenters: {
      ATTORI:     { rx:0.25, ry:0.28 },
      REGIA:      { rx:0.75, ry:0.28 },
      TECNICI:    { rx:0.25, ry:0.72 },
      PRODUZIONE: { rx:0.75, ry:0.72 }
    },
    zones: [
      { label: 'Palcoscenico', rx:0.50, ry:0.28, rr:0.12 },
      { label: 'Camerini', rx:0.25, ry:0.65, rr:0.09 },
      { label: 'Cabina Regia', rx:0.72, ry:0.35, rr:0.08 },
      { label: 'Magazzino', rx:0.72, ry:0.68, rr:0.09 },
    ]
  },
  CONDOMINIO: {
    label: '🏚️ Condominio',
    subtitle: 'Palazzo anni \'70, offerta sospetta, assemblea in arrivo',
    factions: ['PROPRIETARI','INQUILINI','AMMINISTRATORE','ESTERNI'],
    factionLabels: { PROPRIETARI:'PRO', INQUILINI:'INQ', AMMINISTRATORE:'AMM', ESTERNI:'EST' },
    factionCenters: {
      PROPRIETARI:    { rx:0.25, ry:0.28 },
      INQUILINI:      { rx:0.75, ry:0.28 },
      AMMINISTRATORE: { rx:0.25, ry:0.72 },
      ESTERNI:        { rx:0.75, ry:0.72 }
    },
    zones: [
      { label: 'Atrio', rx:0.50, ry:0.35, rr:0.10 },
      { label: 'Cantina', rx:0.28, ry:0.68, rr:0.09 },
      { label: 'Tetto', rx:0.72, ry:0.28, rr:0.08 },
      { label: 'Cortile', rx:0.72, ry:0.68, rr:0.10 },
    ]
  },
  LICEO: {
    label: '🏫 Liceo',
    subtitle: 'Professori, studenti, un video che sta circolando',
    factions: ['PROFESSORI','STUDENTI','BIDELLI','DIRIGENZA'],
    factionLabels: { PROFESSORI:'PRO', STUDENTI:'STU', BIDELLI:'BID', DIRIGENZA:'DIR' },
    factionCenters: {
      PROFESSORI: { rx:0.25, ry:0.28 },
      STUDENTI:   { rx:0.75, ry:0.28 },
      BIDELLI:    { rx:0.25, ry:0.72 },
      DIRIGENZA:  { rx:0.75, ry:0.72 }
    },
    zones: [
      { label: 'Corridoio', rx:0.50, ry:0.32, rr:0.11 },
      { label: 'Bagni', rx:0.25, ry:0.65, rr:0.07 },
      { label: 'Sala Prof', rx:0.72, ry:0.30, rr:0.09 },
      { label: 'Cortile', rx:0.72, ry:0.68, rr:0.11 },
    ]
  },
  COMUNITA_ECO: {
    label: '🌿 Comunità Eco',
    subtitle: 'Ritiro spirituale, off-grid, qualcuno vuole andarsene',
    factions: ['FONDATORI','RESIDENTI','NUOVI_ARRIVATI','OSPITI'],
    factionLabels: { FONDATORI:'FON', RESIDENTI:'RES', NUOVI_ARRIVATI:'NUO', OSPITI:'OSP' },
    factionCenters: {
      FONDATORI:      { rx:0.25, ry:0.28 },
      RESIDENTI:      { rx:0.75, ry:0.28 },
      NUOVI_ARRIVATI: { rx:0.25, ry:0.72 },
      OSPITI:         { rx:0.75, ry:0.72 }
    },
    zones: [
      { label: 'Sala Comune', rx:0.50, ry:0.30, rr:0.12 },
      { label: 'Orto', rx:0.25, ry:0.68, rr:0.10 },
      { label: 'Casa del Fondatore', rx:0.72, ry:0.28, rr:0.08 },
      { label: 'Sentiero', rx:0.72, ry:0.68, rr:0.09 },
    ]
  },
  FESTIVAL_MUSICALE: {
    label: '🎪 Festival Musicale',
    subtitle: 'Backstage, 72 ore, una busta che ha fatto impallidire qualcuno',
    factions: ['ARTISTI','STAFF_TECNICO','SECURITY','ORGANIZZAZIONE'],
    factionLabels: { ARTISTI:'ART', STAFF_TECNICO:'TEC', SECURITY:'SEC', ORGANIZZAZIONE:'ORG' },
    factionCenters: {
      ARTISTI:        { rx:0.25, ry:0.28 },
      STAFF_TECNICO:  { rx:0.75, ry:0.28 },
      SECURITY:       { rx:0.25, ry:0.72 },
      ORGANIZZAZIONE: { rx:0.75, ry:0.72 }
    },
    zones: [
      { label: 'Backstage', rx:0.28, ry:0.28, rr:0.11 },
      { label: 'Palco Principale', rx:0.72, ry:0.28, rr:0.10 },
      { label: 'Area VIP', rx:0.28, ry:0.68, rr:0.09 },
      { label: 'Perimetro', rx:0.72, ry:0.68, rr:0.10 },
    ]
  },
});

// ══════════════════════════════════════════════════════════════════════════════
// INTRO PER OGNI SCENARIO
// ══════════════════════════════════════════════════════════════════════════════
export const SCENARIO_INTROS = {
  MILANO_STARTUP: {
    lines: [
      "Lavoro qui da otto mesi.",
      "Ho sempre pensato che il caos fosse normale in una startup.",
      "Tre giorni fa ho trovato una email non mia nella mia cartella.",
      "Qualcuno ha usato il mio account. Qualcuno che sapeva la mia password.",
      "Devo capire chi controlla davvero questa rete.",
      "Prima che decidano di rimuovermi."
    ],
    obiettivo: "Identifica le due regine della rete. Neutralizzale prima di essere oscurato."
  },
  VILLAGGIO_VACANZE: {
    lines: [
      "Secondo anno qui come animatore.",
      "Conosco tutti, o almeno credevo.",
      "Marco era il mio collega di turno.",
      "Lunedì mattina il suo letto era vuoto.",
      "Il suo nome era già sparito dai turni. Nessuno ha detto niente.",
      "Qualcuno in questo villaggio sa cosa è successo a Marco."
    ],
    obiettivo: "Scopri cosa è successo. Le regine sanno. Arrivaci prima che la stagione finisca."
  },
  STUDENTATO: {
    lines: [
      "Primo anno fuori casa.",
      "Pensavo che il problema più grande sarebbe stato cucinare.",
      "Una settimana fa qualcuno ha presentato una segnalazione contro di me.",
      "I dettagli erano troppo precisi per essere inventati.",
      "Qualcuno mi osservava da dentro queste mura.",
      "Devo scoprire chi."
    ],
    obiettivo: "Trova chi ti sorveglia. Le due regine controllano il flusso di informazioni. Smontale."
  },
  PAESE_BORGO: {
    lines: [
      "Sono arrivato per vendere la casa di mio nonno.",
      "Doveva essere una settimana.",
      "Il notaio mi ha chiamato il secondo giorno.",
      "Qualcuno aveva già presentato un'offerta prima che io arrivassi.",
      "Sapevano che stavo arrivando.",
      "Questo paese nasconde qualcosa su quel terreno."
    ],
    obiettivo: "Scopri chi tira i fili prima di firmare qualsiasi cosa."
  },
  DUBLINO_BIGTECH: {
    lines: [
      "Quattro anni qui.",
      "Ho sempre pensato di essere al sicuro.",
      "Venerdì il mio manager mi ha guardato in modo strano durante la standup.",
      "Ho controllato Slack: i profili di tre colleghi erano spariti.",
      "Qualcuno ha già la lista dei prossimi tagli.",
      "Devo sapere se il mio nome è su quella lista."
    ],
    obiettivo: "Infiltra la rete. Le due regine sanno chi verrà tagliato. Scoprile prima che tocchi a te."
  },
  OSPEDALE_NOTTURNO: {
    lines: [
      "Faccio il turno di notte da due anni.",
      "Ho visto cose strane. Le ho sempre archiviate come coincidenze.",
      "Tre pazienti. Stesso reparto. Stessa reazione avversa inspiegabile.",
      "I referti sono stati modificati dopo la firma del primario.",
      "Qualcuno in questo ospedale sta coprendo qualcosa.",
      "E io sono l'unico che ha notato il pattern."
    ],
    obiettivo: "Trova chi ha modificato i referti. Le regine proteggono il segreto. Smontale."
  },
  COLLEGIO_RELIGIOSO: {
    lines: [
      "Insegno qui da sei mesi.",
      "L'ambiente è chiuso, le regole sono rigide.",
      "Ieri il rettore ha annunciato che un archivio sigillato dal 1987 rimarrà chiuso.",
      "La reazione di alcuni colleghi era troppo sollevata per essere normale.",
      "Qualcuno in questo collegio sa cosa c'è in quell'archivio.",
      "E vuole che resti sepolto."
    ],
    obiettivo: "Accedi all'archivio attraverso la rete. Le regine custodiscono la chiave."
  },
  NAVE_CROCIERA: {
    lines: [
      "Sono imbarcato come tecnico di bordo.",
      "Quarta traversata. Pensavo di conoscere questa nave a memoria.",
      "Ieri sera la signora della 314 non si è presentata a cena.",
      "Stamattina la sua cabina era vuota, pulita.",
      "Il suo nome era già sparito dal registro passeggeri.",
      "Mancano 60 ore all'attracco."
    ],
    obiettivo: "Scopri cosa è successo alla 314. Le regine controllano le informazioni a bordo."
  },
  COMPAGNIA_TEATRALE: {
    lines: [
      "Sono entrato in questa compagnia come aiuto regista tre settimane fa.",
      "La prima è dopodomani.",
      "Stanotte qualcuno ha tagliato i cavi del sistema audio principale.",
      "Non era un incidente. Era chirurgico.",
      "Solo qualcuno che conosce questo teatro poteva farlo.",
      "Devo trovarlo prima che distrugga qualcosa che non si può riparare."
    ],
    obiettivo: "Identifica il sabotatore. Le regine sanno chi è. Arrivaci prima della prima."
  },
  CONDOMINIO: {
    lines: [
      "Vivo al terzo piano da due anni.",
      "Pensavo di conoscere i miei vicini.",
      "La settimana scorsa è arrivata una proposta di acquisto dell'intero palazzo.",
      "Una cifra che non torna. Tre condomini hanno già firmato.",
      "Gli altri hanno ricevuto visite notturne.",
      "Qualcuno sta comprando questo palazzo pezzo per pezzo."
    ],
    obiettivo: "Blocca l'acquisizione. Le due regine gestiscono la pressione sui condomini."
  },
  LICEO: {
    lines: [
      "Insegno qui da tre anni.",
      "Ho sempre pensato di capire le dinamiche di questo posto.",
      "Lunedì un video ha cominciato a circolare tra gli studenti.",
      "Nessuno dice da dove viene.",
      "Chi c'è nel video non è venuto a scuola da due giorni.",
      "Qualcuno dentro questo edificio lo sta usando come leva."
    ],
    obiettivo: "Trova chi ha girato il video. Le regine controllano il flusso di informazioni."
  },
  COMUNITA_ECO: {
    lines: [
      "Sono arrivato per un weekend di ritiro.",
      "Sono rimasto tre settimane. Non so esattamente perché.",
      "Ieri ho sentito per caso una conversazione.",
      "Una ragazza stava cercando di andarsene. Le hanno detto che non poteva.",
      "Aveva firmato qualcosa. Io non ho firmato niente. Ancora.",
      "Qualcuno tiene le persone qui con metodi che non sono spirituali."
    ],
    obiettivo: "Smonta la struttura di controllo. Le due regine gestiscono il consenso forzato."
  },
  FESTIVAL_MUSICALE: {
    lines: [
      "Lavoro nel backstage come coordinatore logistico.",
      "È il caos normale. O almeno lo era.",
      "Stamattina uno degli headliner ha ricevuto una busta.",
      "L'ho visto impallidire. Ha detto che era un errore. L'ha bruciata.",
      "Le mani gli tremavano.",
      "Qualcuno tra staff, artisti e security sa cosa c'era in quella busta."
    ],
    obiettivo: "Scopri la minaccia prima che il festival finisca e tutti spariscano."
  },
};

// ══════════════════════════════════════════════════════════════════════════════
// LORE PER NUOVI SCENARI
// ══════════════════════════════════════════════════════════════════════════════
const NEW_LORE = {
  OSPEDALE_NOTTURNO: {
    MEDICI: [
      "Ha firmato un referto che non aveva letto. Lo sa solo lui.",
      "Sa quali farmaci mancano dall'inventario e dove sono finiti.",
      "Ha coperto un errore del primario tre mesi fa. Non è stato l'unico.",
      "Conosce l'identità del paziente ricoverato sotto falso nome.",
      "Ha accesso ai dati clinici di tutto il reparto. Li ha usati.",
      "Sa che l'ispezione dell'ASL è stata spostata. Non per caso.",
      "Ha una relazione con qualcuno dell'amministrazione. Conflitto di interessi.",
      "Conosce il vero motivo del trasferimento del primario precedente.",
      "Ha modificato un dosaggio. Nessuno se n'è accorto. Ancora.",
      "Sa chi ha accesso all'archivio farmaci di notte.",
      "Ha visto qualcosa nella corsia A alle 3 di notte. Non lo ha segnalato.",
      "Conosce i nomi dei tre pazienti con la reazione avversa. Sa anche il perché.",
      "Ha ricevuto una busta. Non l'ha aperta davanti a nessuno.",
      "Sa che i referti modificati portano tutti la stessa firma digitale.",
      "Sta cercando di trasferirsi. Ha già fatto domanda in tre ospedali."
    ],
    INFERMIERI: [
      "Somministra farmaci fuori protocollo su richiesta di un medico specifico.",
      "Sa cosa succede nell'archivio dopo le 2 di notte.",
      "Ha copiato delle cartelle cliniche. Non le ha ancora usate.",
      "Conosce il codice della cassaforte dei medicinali controllati.",
      "Sa chi entra in reparto con badge falsi durante il turno di notte.",
      "Ha sentito una conversazione nella sala medici che non doveva sentire.",
      "Sta raccogliendo prove di qualcosa. Non ha ancora deciso cosa farne.",
      "Conosce l'infermiera del turno precedente. Sa perché è stata licenziata.",
      "Ha accesso alle telecamere del corridoio. Le guarda spesso.",
      "Sa che un paziente non è quello che dice di essere.",
      "Ha trovato qualcosa nel magazzino. Lo ha rimesso a posto senza dire niente.",
      "Conosce il nome del fornitore che consegna di notte senza registrazione.",
      "Sa che tre pazienti hanno firmato moduli identici senza capirli.",
      "Ha visto il primario uscire con qualcuno che non lavora qui.",
      "Tiene un diario di tutto quello che vede nel turno di notte."
    ],
    AMMINISTRAZIONE: [
      "Sa che i fondi del reparto sono stati dirottati. Non sa dove.",
      "Ha accesso ai dati di fatturazione. Alcune voci non tornano.",
      "Conosce l'identità del consulente esterno che viene ogni martedì.",
      "Ha firmato documenti senza leggerli. Ora se ne pente.",
      "Sa che l'ospedale è in trattativa per una fusione. Non è pubblica.",
      "Conosce il motivo del ricovero anonimo al quinto piano.",
      "Ha ricevuto istruzioni di non registrare certi accessi nel sistema.",
      "Sa che i dati di tre pazienti sono stati cancellati dall'archivio digitale.",
      "Conosce qualcuno nella direzione regionale. Lo usa come leva.",
      "Ha una copia dei contratti che nessuno dovrebbe avere.",
      "Sa che l'ispezione ha trovato anomalie. Il report è stato modificato.",
      "Conosce il vero proprietario della società di consulenza esterna.",
      "Ha accesso ai movimenti bancari dell'ospedale. Qualcosa non torna.",
      "Sa che due medici hanno contratti separati non comunicati al consiglio.",
      "Sta valutando di fare una segnalazione. Non ha ancora deciso."
    ],
    PAZIENTI: [
      "Non è qui per i motivi che ha dichiarato al ricovero.",
      "Ha visto qualcosa dalla finestra della sua stanza. Di notte.",
      "Conosce qualcuno del personale da prima. Non vuole che si sappia.",
      "Ha sentito una conversazione tra due medici. Non avrebbe dovuto.",
      "Sta registrando tutto dal suo letto con il telefono.",
      "Sa chi ha modificato la sua cartella clinica. Lo ha visto.",
      "Ha ricevuto una visita non registrata. L'ospite non aveva badge.",
      "Conosce il paziente della 314. Molto più di quanto dice.",
      "Ha trovato qualcosa sotto il materasso. Lo tiene nascosto.",
      "Sta aspettando di essere dimesso per andare dalla polizia.",
      "Conosce il vero nome di uno dei medici. Non corrisponde al cartellino.",
      "Ha scattato una foto a qualcosa che non avrebbe dovuto vedere.",
      "Sa che la sua diagnosi è stata cambiata senza dirgli perché.",
      "Conosce qualcuno fuori che sta aspettando sue notizie.",
      "Sta fingendo di dormire da tre giorni. Osserva tutto."
    ]
  },
  COLLEGIO_RELIGIOSO: {
    DOCENTI: [
      "Sa cosa c'è nell'archivio del 1987. Non lo aprirà mai.",
      "Ha letto documenti che gli sono stati mostrati per errore.",
      "Conosce la vera ragione per cui il rettore precedente è stato rimosso.",
      "Ha una copia di una lettera che doveva essere distrutta.",
      "Sa che due studenti sono stati espulsi per ragioni diverse da quelle dichiarate.",
      "Conosce l'identità del donatore anonimo che finanzia la struttura.",
      "Ha accesso all'archivio storico. Sa cosa manca.",
      "Sa che il collegio possiede proprietà non dichiarate.",
      "Ha sentito una confessione informale che lo ha cambiato.",
      "Conosce qualcuno fuori che sta indagando su questa struttura.",
      "Sa che il vertice comunica con l'esterno in modo non ufficiale.",
      "Ha trovato una cartella con nomi che non riconosce. Alcuni sono noti.",
      "Conosce la combination della cassaforte dello studio del rettore.",
      "Sa che l'archivio del 1987 contiene nomi ancora attivi nella struttura.",
      "Sta cercando un modo per uscire senza conseguenze."
    ],
    STUDENTI_INTERNI: [
      "Sa dove si trovano le chiavi dell'archivio quando il custode dorme.",
      "Ha sentito qualcosa la notte dell'annuncio del rettore.",
      "Conosce un passaggio segreto tra l'ala vecchia e quella nuova.",
      "Ha trovato un documento nascosto nella sua stanza da un occupante precedente.",
      "Sa chi si incontra nella cappella dopo le 23.",
      "Ha visto qualcosa che non avrebbe dovuto. Gli è stato chiesto di dimenticare.",
      "Conosce qualcuno del personale che vuole uscire dalla struttura.",
      "Sa dove si trova il telefono proibito che passa tra gli studenti.",
      "Ha memorizzato una sequenza di numeri che ha visto per caso.",
      "Conosce la storia vera di uno studente che è 'partito' due anni fa.",
      "Sa che il vitto è controllato. Ha trovato prove.",
      "Ha nascosto qualcosa che potrebbe essere utile a qualcuno.",
      "Conosce il nome della persona nell'archivio che firma tutto.",
      "Sa che alcuni studenti vengono scelti per incarichi speciali. Non vuole esserlo.",
      "Ha un modo per comunicare con l'esterno che nessuno conosce."
    ],
    PERSONALE: [
      "Pulisce l'archivio ogni martedì. Sa cosa c'è dentro.",
      "Ha sentito conversazioni che non avrebbe dovuto sentire.",
      "Conosce le abitudini notturne del vertice.",
      "Sa dove vengono tenuti i documenti riservati quando l'archivio è chiuso.",
      "Ha una copia delle chiavi che non avrebbe dovuto fare.",
      "Conosce l'identità delle persone che vengono in visita non ufficiale.",
      "Sa che il cibo di alcuni studenti viene preparato diversamente.",
      "Ha trovato qualcosa nel cestino che non avrebbe dovuto buttare.",
      "Conosce il custode segreto dell'archivio. Non è il rettore.",
      "Sa che la struttura riceve fondi da fonti che non corrispondono ai bilanci.",
      "Ha visto entrare qualcuno dall'ingresso secondario di notte.",
      "Conosce la storia di tre persone che lavoravano qui e sono sparite.",
      "Sa dove è nascosta la copia cartacea dell'archivio digitale.",
      "Ha ricevuto istruzioni di non parlare con certi studenti.",
      "Conosce il vero scopo di una stanza che risulta come magazzino."
    ],
    VERTICE: [
      "Sa esattamente cosa c'è nell'archivio del 1987. È lì per sua volontà.",
      "Ha autorizzato qualcosa trent'anni fa che non può essere reso pubblico.",
      "Conosce l'identità di chi finanzia la struttura e cosa vuole in cambio.",
      "Ha la chiave dell'archivio. Ne esiste un'altra. Non sa dove.",
      "Sa che qualcuno sta cercando di aprire l'archivio. Lo sa da settimane.",
      "Ha preso decisioni su studenti che non risultano nei registri ufficiali.",
      "Conosce il contenuto di ogni lettera che entra ed esce dalla struttura.",
      "Sa che due docenti stanno collaborando con qualcuno di esterno.",
      "Ha un accordo con un'istituzione esterna che non è mai stato reso pubblico.",
      "Conosce il vero motivo per cui certe famiglie mandano qui i figli.",
      "Sa chi ha accesso al sistema di sorveglianza. Non è il personale.",
      "Ha firmato documenti che potrebbero distruggerlo se venissero fuori.",
      "Conosce il nome del successore designato. Non è chi tutti pensano.",
      "Sa che l'archivio contiene prove di qualcosa che potrebbe riaprire casi chiusi.",
      "Sta pianificando qualcosa prima che qualcuno arrivi prima di lui."
    ]
  },
  FESTIVAL_MUSICALE: {
    ARTISTI: [
      "Sa chi ha mandato la busta. E perché.",
      "Sta performando sotto un nome d'arte per nascondere la sua identità reale.",
      "Ha un accordo privato con l'organizzazione che non è nel contratto.",
      "Sa che un altro artista è in pericolo. Non ha detto niente.",
      "Conosce qualcuno della security da prima. Non è una coincidenza.",
      "Ha ricevuto istruzioni di non parlare con certi giornalisti.",
      "Sa che il festival è usato per coprire qualcosa di più grande.",
      "Ha visto un passaggio di denaro contante nel backstage.",
      "Conosce la vera identità di chi gestisce la sicurezza VIP.",
      "Sa che il prossimo set è stato modificato senza dirgli perché.",
      "Ha trovato qualcosa nel camerino che non era suo.",
      "Conosce il contenuto della busta. L'ha bruciata lui.",
      "Sa che il festival ha perso i soldi ma continua. Qualcuno copre i buchi.",
      "Ha una registrazione audio di qualcosa che è successo backstage.",
      "Sta cercando di sparire prima della fine del festival."
    ],
    STAFF_TECNICO: [
      "Sa chi ha accesso al sistema audio principale dopo le 23.",
      "Ha installato qualcosa che non era nel piano tecnico. Su richiesta.",
      "Conosce l'identità di chi è entrato con credenziali false.",
      "Sa che le telecamere di sicurezza in due zone sono state disattivate.",
      "Ha visto qualcosa nel perimetro che non ha segnalato.",
      "Conosce il motivo per cui certi spazi sono stati dichiarati off-limits.",
      "Sa dove vengono stoccate le cose che non risultano nell'inventario.",
      "Ha ricevuto istruzioni di non fare domande su certi accessi.",
      "Conosce il nome di chi ha ordinato le modifiche al piano tecnico.",
      "Sa che il sistema di comunicazione interna viene monitorato.",
      "Ha trovato un dispositivo nascosto in un posto che non avrebbe dovuto.",
      "Conosce qualcuno della security che non è chi dice di essere.",
      "Sa che certi materiali sono arrivati con documentazione falsa.",
      "Ha le chiavi di accesso a zone che ufficialmente non esistono.",
      "Sta aspettando la fine del festival per andarsene senza lasciare tracce."
    ],
    SECURITY: [
      "Sa cosa c'era nella busta. Era il suo lavoro consegnarla.",
      "Conosce l'identità delle persone nel perimetro che non hanno badge.",
      "Ha ricevuto istruzioni di ignorare certi movimenti. Sa perché.",
      "Sa chi paga la security parallela che nessuno ha assunto ufficialmente.",
      "Conosce l'uscita di emergenza che non è sulle mappe.",
      "Ha visto qualcosa nel settore VIP che lo ha fatto chiedere se uscire.",
      "Sa che tre persone nell'area stampa non sono giornalisti.",
      "Conosce il nome di chi gestisce l'accesso alle zone riservate.",
      "Ha una registrazione video di qualcosa che è successo ieri notte.",
      "Sa che il suo superiore ha ricevuto soldi per guardare dall'altra parte.",
      "Conosce l'identità del contatto esterno che coordina gli accessi.",
      "Sa che qualcuno verrà prelevato durante il festival. Non sa quando.",
      "Ha trovato un veicolo nel perimetro con documentazione che non torna.",
      "Conosce il piano B dell'organizzazione se le cose vanno storte.",
      "Sta aspettando di sapere se è al sicuro prima di parlare con qualcuno."
    ],
    ORGANIZZAZIONE: [
      "Sa che il festival è in perdita da tre anni. I soldi vengono da altrove.",
      "Conosce l'identità del vero finanziatore. Non è quello nei comunicati.",
      "Ha firmato contratti che contengono clausole illegali.",
      "Sa chi ha mandato la busta e cosa c'era dentro.",
      "Conosce il motivo per cui certi artisti sono stati invitati. Non è la musica.",
      "Ha accesso ai movimenti finanziari del festival. Qualcosa non torna.",
      "Sa che alcuni accrediti sono stati venduti a persone specifiche.",
      "Conosce l'accordo tra il festival e un'entità che non può essere nominata.",
      "Ha ricevuto pressioni per mantenere certi spazi liberi da sorveglianza.",
      "Sa che qualcuno nel suo team lavora per qualcun altro.",
      "Conosce il vero scopo della zona VIP nel terzo giorno.",
      "Ha una copia dei contratti che non devono essere visti.",
      "Sa che il festival verrà cancellato. Non per ragioni artistiche.",
      "Conosce il nome di chi ha ordinato la consegna della busta.",
      "Sta cercando di capire quanto sa l'altra parte prima di muoversi."
    ]
  }
};

// Merge LORE_BY_CONTEXT con i nuovi scenari
Object.assign(LORE_BY_CONTEXT, NEW_LORE);

// NOMI per i nuovi scenari
const NEW_NAMES = {
  OSPEDALE_NOTTURNO: {
    M: ['Marco','Luca','Andrea','Stefano','Giovanni','Roberto','Paolo','Alberto','Francesco','Davide',
        'Nicola','Giorgio','Emilio','Riccardo','Claudio','Antonio','Giuseppe','Sergio','Bruno','Carlo'],
    F: ['Giulia','Sara','Marta','Elena','Chiara','Silvia','Laura','Federica','Valentina','Alessia',
        'Monica','Roberta','Cristina','Barbara','Paola','Annalisa','Francesca','Michela','Nadia','Rita']
  },
  COLLEGIO_RELIGIOSO: {
    M: ['Pietro','Paolo','Giovanni','Luca','Marco','Matteo','Filippo','Giacomo','Tommaso','Andrea',
        'Benedetto','Francesco','Domenico','Antonio','Giuseppe','Ignazio','Lorenzo','Agostino','Bruno','Sergio'],
    F: ['Maria','Anna','Elena','Teresa','Rosa','Angela','Lucia','Giulia','Chiara','Benedetta',
        'Cecilia','Agnese','Caterina','Elisabetta','Giovanna','Margherita','Cristina','Veronica','Silvia','Marta']
  },
  NAVE_CROCIERA: {
    M: ['Adriano','Marino','Corsaro','Flavio','Massimo','Diego','Simone','Filippo','Roberto','Enrico',
        'Davide','Luca','Marco','Andrea','Giorgio','Pietro','Carlo','Franco','Enzo','Gianni'],
    F: ['Marina','Flavia','Adriana','Sofia','Elena','Giulia','Sara','Laura','Chiara','Valentina',
        'Federica','Alessia','Monica','Roberta','Cristina','Barbara','Paola','Serena','Michela','Nadia']
  },
  COMPAGNIA_TEATRALE: {
    M: ['Lorenzo','Matteo','Filippo','Alessandro','Riccardo','Edoardo','Jacopo','Valerio','Nicola','Tommaso',
        'Leonardo','Emanuele','Claudio','Roberto','Stefano','Andrea','Marco','Luca','Giovanni','Pietro'],
    F: ['Beatrice','Camilla','Ludovica','Ginevra','Matilde','Sofia','Chiara','Martina','Alice','Irene',
        'Eleonora','Valentina','Federica','Giulia','Sara','Alessia','Marta','Silvia','Elena','Francesca']
  },
  CONDOMINIO: {
    M: ['Bruno','Gino','Enzo','Sergio','Mauro','Franco','Carlo','Mario','Luigi','Giovanni',
        'Renato','Armando','Renzo','Dino','Alberto','Roberto','Maurizio','Claudio','Paolo','Antonio'],
    F: ['Carla','Rosa','Maria','Giuseppina','Carmela','Teresa','Angela','Lucia','Rita','Patrizia',
        'Rossella','Daniela','Antonella','Sabrina','Monica','Barbara','Cristina','Roberta','Paola','Laura']
  },
  LICEO: {
    M: ['Leonardo','Matteo','Filippo','Alessandro','Riccardo','Lorenzo','Edoardo','Jacopo','Nicola','Tommaso',
        'Luca','Andrea','Stefano','Francesco','Michele','Antonio','Giovanni','Pietro','Davide','Enrico'],
    F: ['Beatrice','Camilla','Ginevra','Matilde','Sofia','Chiara','Martina','Alice','Irene','Eleonora',
        'Valentina','Federica','Giulia','Sara','Alessia','Marta','Silvia','Elena','Francesca','Laura']
  },
  COMUNITA_ECO: {
    M: ['Sole','Fausto','Silvio','Daniele','Marco','Andrea','Luca','Stefano','Giovanni','Roberto',
        'Paolo','Alberto','Francesco','Davide','Nicola','Giorgio','Emilio','Riccardo','Claudio','Antonio'],
    F: ['Luna','Fiamma','Selene','Aurora','Iris','Maya','Sofia','Chiara','Marta','Elena',
        'Giulia','Sara','Laura','Federica','Valentina','Alessia','Monica','Roberta','Cristina','Barbara']
  },
  FESTIVAL_MUSICALE: {
    M: ['Jake','Tyler','Jordan','Casey','Morgan','Riley','Alex','Sam','Charlie','Dakota',
        'Marco','Luca','Andrea','Stefano','Diego','Simone','Filippo','Roberto','Enrico','Davide'],
    F: ['Maya','Zoe','Chloe','Emma','Olivia','Ava','Sophia','Isabella','Mia','Charlotte',
        'Giulia','Sara','Chiara','Martina','Alice','Federica','Valentina','Alessia','Monica','Roberta']
  }
};

// Patch generateUniqueSwarmNames per supportare nuovi scenari
// (gestito nel names.js — qui esportiamo i pool aggiuntivi)
export const EXTRA_FIRST_NAMES = NEW_NAMES;

// INCOMING MESSAGES per nuovi scenari
Object.assign(INCOMING_MESSAGES, {
  MEDICI: [
    "Ho bisogno di parlarti. Non qui, non adesso.",
    "Hai visto qualcosa stanotte che non avresti dovuto vedere?",
    "Attento a quello che chiedi in giro. Qualcuno riporta.",
    "Conosco il pattern. Se vuoi capire, trovami in sala medici.",
    "Non firmare niente che ti portano senza leggerlo. Fidati."
  ],
  INFERMIERI: [
    "Ho qualcosa che potrebbe interessarti. Ma non posso dirlo qui.",
    "Hai notato qualcosa di strano nei turni di questa settimana?",
    "Stai facendo domande. Qualcuno lo sa già.",
    "Il magazzino di notte non è mai vuoto. Hai capito?",
    "Posso fidarmi di te? Ho bisogno di dirlo a qualcuno."
  ],
  AMMINISTRAZIONE: [
    "I numeri non tornano. Da mesi. Nessuno vuole sentirlo.",
    "Hai accesso a certi archivi? Ho bisogno di qualcuno che possa guardare.",
    "Non usare il sistema interno per cercare certe cose. Ti tracciano.",
    "So chi ha modificato quei referti. Devo essere sicuro di potermi fidare.",
    "C'è una riunione che non è sul calendario. Domani notte."
  ],
  PAZIENTI: [
    "Puoi avvicinarti? Non voglio che sentano.",
    "Ho visto qualcosa. Dal letto. Di notte. Non so a chi dirlo.",
    "Quella persona che è venuta ieri non era un dottore.",
    "Ho il telefono. Se hai bisogno di qualcosa fuori da qui, posso aiutarti.",
    "So cosa sta succedendo in questo reparto. Ho paura."
  ],
  DOCENTI: [
    "Insegno qui da anni. Non ho mai visto niente del genere.",
    "Hai letto l'annuncio del rettore? Quella storia dell'archivio non torna.",
    "Attento a chi parli. Le mura qui sentono.",
    "Ho qualcosa che potrebbe chiarire molte cose. Ma non adesso.",
    "Conosco qualcuno fuori che sta cercando informazioni su questo posto."
  ],
  STUDENTI_INTERNI: [
    "Sai dove stanno le chiavi vero? Ti mostro qualcosa.",
    "Non fidarti di quello che ti dicono sul collegio. La storia vera è diversa.",
    "Ho trovato qualcosa nella mia stanza. Non so cosa farne.",
    "C'è un modo per comunicare fuori. Ma costa.",
    "Quella stanza che dicono sia un magazzino? Non lo è."
  ],
  PERSONALE: [
    "Pulisco qui da vent'anni. Ho visto cose che non dimentico.",
    "Attento a dove metti i piedi. Letteralmente.",
    "Quella porta al fondo del corridoio? Non è sempre chiusa a chiave.",
    "Ho sentito qualcosa ieri notte. Non avevo capito cosa. Adesso sì.",
    "Se vuoi sapere cosa c'è in quell'archivio, devi sapere chi ha le chiavi."
  ],
  VERTICE: [
    "Ti sto osservando da quando sei arrivato. Sei curioso. È un problema.",
    "Hai fatto domande che non avresti dovuto fare. Te lo dico per il tuo bene.",
    "Ci sono cose qui che non appartengono alla tua comprensione. Ancora.",
    "Possiamo parlare. Ma alle mie condizioni.",
    "So cosa stai cercando. Potresti trovarmi utile. O pericoloso."
  ],
  ARTISTI: [
    "Non sono qui per i motivi che pensi.",
    "Quella busta. L'hai vista? Sai cosa c'era dentro?",
    "Stai cercando qualcosa. Anch'io. Forse possiamo aiutarci.",
    "Non parlare con la security. Non con tutti.",
    "Ho una registrazione. Non so ancora se usarla."
  ],
  STAFF_TECNICO: [
    "Quelle telecamere non registrano tutto. Lo sai?",
    "Ho installato qualcosa che non dovevo. Su richiesta. Adesso mi pento.",
    "C'è qualcuno nel perimetro che non dovrebbe esserci.",
    "Se hai bisogno di accedere a qualcosa, posso aiutarti. Ma ha un costo.",
    "Ho sentito qualcosa via radio che non era per me."
  ],
  SECURITY: [
    "Non sono tutti quelli che sembrano, qui dentro.",
    "Ho visto qualcosa nel settore VIP. Non lo riporto. Non ancora.",
    "Quella busta l'ho consegnata io. Non sapevo cosa c'era dentro. Giuro.",
    "Stai facendo le domande giuste. Stai attento a chi te le sente fare.",
    "C'è qualcuno nel perimetro che lavora per qualcun altro. Non per noi."
  ],
  ORGANIZZAZIONE: [
    "Stai guardando le cose giuste. Continua così.",
    "Il festival finisce in 48 ore. Dopo non ci sarà più niente da trovare.",
    "So chi ha mandato quella busta. E so perché.",
    "Hai il coraggio di sapere cosa sta succedendo davvero qui?",
    "Posso darti accesso a qualcosa. Ma devi fidarti di me. Adesso."
  ],
  FONDATORI: [
    "Sei qui da tre settimane. Stai cominciando a vedere.",
    "Non tutti quelli che vogliono andarsene possono farlo. Hai capito perché?",
    "Ti sto osservando. Non con cattiveria. Con interesse.",
    "C'è qualcosa che devi sapere sulla comunità. Prima che sia troppo tardi.",
    "Ho fondato questo posto. So esattamente cosa non funziona."
  ],
  RESIDENTI: [
    "Sono qui da tre anni. Ho smesso di cercare di andarmene.",
    "Non firmare niente. Niente. Capisci?",
    "Quella ragazza che voleva andarsene. La conosco. Non è la prima.",
    "Ho qualcosa che potrebbe aiutarti. Costa fiducia.",
    "Se esci, esci adesso. Dopo diventa più difficile."
  ],
  NUOVI_ARRIVATI: [
    "Anche tu sei arrivato per un weekend?",
    "Quanto tempo sei qui? Stai notando cose strane?",
    "Non capisco perché non riesco ad andarmene. Tu sì?",
    "Ho bisogno di parlare con qualcuno che non sia già dentro.",
    "C'è un modo per uscire senza che lo sappiano?"
  ],
  OSPITI: [
    "Sono qui per valutare la struttura. Non per quello che pensi.",
    "Ho visto cose in queste tre ore che mi hanno cambiato idea.",
    "Posso uscirti utile. Ho contatti fuori.",
    "Stai cercando qualcosa di specifico o stai solo guardando?",
    "Non sono quello che sembro. E nemmeno tu, scommetto."
  ],
  UFFICIALI: [
    "Su questa nave non succede niente che io non sappia. Quasi.",
    "Quella cabina è stata pulita su mio ordine. Non fare domande.",
    "Hai 48 ore prima dell'attracco. Dopo non posso proteggerti.",
    "So chi sei e perché stai cercando. Possiamo essere utili l'uno all'altro.",
    "C'è una versione ufficiale. E poi c'è quello che è successo davvero."
  ],
  PERSONALE_BORDO: [
    "Non è la prima volta che succede su questa nave.",
    "La cabina 314 non era vuota quando l'hanno pulita.",
    "Ho visto qualcosa quella notte. Ho avuto paura di parlare.",
    "Stai cercando la signora? Anch'io. Ma in modo diverso.",
    "Ci sono zone a bordo che non risultano sulle mappe ufficiali."
  ],
  PASSEGGERI: [
    "Conoscevo la signora della 314. Non di vista.",
    "Ho sentito qualcosa quella notte. Non riesco a smettere di pensarci.",
    "Stai cercando quello che penso? Anch'io. Da ieri.",
    "Non è sicuro parlare in certi punti della nave. Lo sai?",
    "Ho qualcosa nella mia cabina che potrebbe interessarti."
  ],
  SICUREZZA: [
    "Questa nave ha occhi ovunque. Tranne dove servirebbero.",
    "L'ordine di pulire quella cabina non è venuto dagli ufficiali.",
    "Ho visto tre persone uscire da quella cabina quella notte. Non due.",
    "Stai facendo domande pericolose. Continua. Ma con più discrezione.",
    "So cosa è successo. Non so ancora se voglio dirtelo."
  ],
  ATTORI: [
    "Il sabotaggio non è opera di uno solo. Te lo dico io.",
    "Ho visto chi era in cabina regia quella notte. Non era del team tecnico.",
    "Non mi fido di nessuno in questa compagnia. Tranne forse di te.",
    "La prima è dopodomani. Se vuoi scoprire chi è, hai pochissimo tempo.",
    "Ho una registrazione audio del backstage. Non so ancora cosa farne."
  ],
  REGIA: [
    "Il sabotaggio era mirato. Sapeva cosa tagliare per fare il massimo danno.",
    "Ho una lista di chi aveva accesso al sistema audio. È corta.",
    "Non posso fermare la produzione. Ma posso aiutarti a trovare chi è.",
    "C'è qualcuno in questa compagnia che vuole che la prima non vada in scena.",
    "Ho visto qualcosa ieri sera. Stavo per andare dalla polizia."
  ],
  TECNICI: [
    "Quei cavi non si tagliano per caso. Serve sapere dove.",
    "Ho trovato qualcosa nel magazzino che non era lì ieri.",
    "L'accesso al sistema audio di notte richiede il mio badge. Qualcuno l'ha copiato.",
    "So chi era nel backstage dopo la mezzanotte. Non doveva esserci.",
    "Ho le riprese della telecamera interna. Non le ho ancora mostrate a nessuno."
  ],
  PRODUZIONE: [
    "Il sabotaggio ci costerà il doppio dell'assicurazione. Qualcuno lo sapeva.",
    "Ho ricevuto una richiesta strana la settimana scorsa. L'avevo ignorata.",
    "Conosco il motivo per cui qualcuno vuole bloccare questo spettacolo.",
    "C'è qualcuno in questa produzione che lavora per un'altra parte.",
    "So chi ha i motivi. Non so ancora chi ha avuto il coraggio."
  ],
  PROPRIETARI: [
    "Quella proposta di acquisto non viene da dove dicono.",
    "Ho rifiutato di firmare. Stanotte qualcuno ha riga la mia macchina.",
    "So chi ha già firmato e perché. Non era una scelta libera.",
    "Conosco il valore reale di questo palazzo. È dieci volte l'offerta.",
    "C'è qualcuno nell'assemblea che lavora per l'acquirente. Lo so."
  ],
  INQUILINI: [
    "Quella visita notturna non era una coincidenza. L'ho registrata.",
    "Non firmare niente. Ho firmato. Me ne pento.",
    "Ho sentito parlare dell'acquirente. Non è chi dicono.",
    "C'è qualcosa nel contratto che nessuno ha letto. Nemmeno i legali.",
    "Conosco tre inquilini che vogliono resistere. Abbiamo bisogno di aiuto."
  ],
  AMMINISTRATORE: [
    "Sono in una posizione difficile. Ricevo pressioni da entrambe le parti.",
    "Ho documenti che potrebbero bloccare tutto. Ho paura di usarli.",
    "L'acquirente ha contatti che non mi aspettavo. Molto in alto.",
    "So cosa c'è sotto questo palazzo. È il motivo dell'offerta.",
    "Posso aiutarti. Ma ho bisogno che tu mi protegga in cambio."
  ],
  ESTERNI: [
    "Non sono qui per comprare. Sono qui per capire cosa sta succedendo.",
    "Conosco l'acquirente. Non è quello che sembra.",
    "Ho informazioni che cambiano tutto. Ma ho bisogno di qualcuno di cui fidarmi.",
    "Questo palazzo vale molto più dell'offerta. Qualcuno lo sa già.",
    "Sono arrivato troppo tardi per fermare i primi. Ma non è finita."
  ],
  PROFESSORI: [
    "Quel video sta circolando anche in sala professori. Nessuno parla.",
    "So chi l'ha girato. Non posso dirlo ufficialmente. Posso dirtelo così.",
    "Stai facendo le domande giuste. Stai attento a chi te le sente fare.",
    "Ho ricevuto pressioni di non indagare. Da chi non ti aspetteresti.",
    "C'è un secondo video. Non è ancora circolato. Ma esiste."
  ],
  STUDENTI: [
    "So chi ha girato il video. Ma ho paura di dirlo.",
    "Non è solo un video. C'è di più. Lo so.",
    "Stanno cercando di incolpare qualcuno che non c'entra. Lo so.",
    "Ho visto qualcosa sui telefoni di qualcuno. Non avrei dovuto.",
    "Il video è solo la punta. Sotto c'è qualcosa di più grande."
  ],
  BIDELLI: [
    "Vedo tutto qui dentro. Da anni. Non mi nota nessuno.",
    "So chi entra e chi esce e a che ora. Anche di notte.",
    "Ho trovato qualcosa in un'aula che non avrei dovuto trovare.",
    "Quella telecamera nel corridoio non registra. Da tre settimane. Non per caso.",
    "So chi era in quella stanza quando il video è stato girato."
  ],
  DIRIGENZA: [
    "Questo video ci distrugge se viene fuori dove è stato girato.",
    "Ho ricevuto richieste di insabbiare. Da fuori, non da dentro.",
    "So chi è nella scuola coinvolto. Ho paura delle conseguenze.",
    "Ti sto dicendo questo perché non so più a chi rivolgermi.",
    "C'è qualcuno in questo istituto che ha tutto l'interesse a coprire."
  ]
});

// MONITOR MESSAGES per nuovi scenari (aggiunti al pool esistente)
MONITOR_MESSAGES.gossip.push(
  "{a} si è alzato quando è entrato {b}. Poi si è riseduto.",
  "{a} ha evitato lo sguardo di {b} per tutta la mattina.",
  "{a} ha fatto una domanda strana. {b} non ha risposto.",
  "{a} e {b} sono rimasti indietro quando tutti se ne sono andati.",
  "{a} ha controllato il telefono tre volte in cinque minuti."
);

// AMBIENT INTERCEPTS per nuovi scenari
Object.assign(AMBIENT_INTERCEPTS, {
  OSPEDALE_NOTTURNO: {
    'Corsia A': [
      '{a} ha chiuso la porta della stanza prima di parlare.',
      'Qualcuno ha spostato una cartella che non doveva essere lì.',
      '{a} si è fermato fuori dalla stanza 12 più del necessario.',
      'Le luci della corsia si sono abbassate per un minuto. Nessuno ha spiegato perché.',
      '{a} e {b} si sono incrociati senza parlarsi. Non era normale.',
    ],
    'Pronto Soccorso': [
      'Un paziente ha chiesto di qualcuno. Il nome non è nei registri.',
      '{a} ha risposto a una chiamata e ha cambiato espressione.',
      'Una barella è entrata dal corridoio secondario. Non dal principale.',
      '{a} ha firmato qualcosa senza leggere. Poi ha guardato intorno.',
    ],
    'Archivio': [
      'La luce dell\'archivio era accesa alle 3:20. Nessun turno previsto.',
      '{a} è entrato con un badge che non era il suo.',
      'Qualcosa è stato rimosso dallo scaffale C. C\'è ancora la polvere del bordo.',
      '{a} ha fatto una fotografia con il telefono prima di uscire.',
    ],
    'Sala Medici': [
      'Una conversazione interrotta quando sei entrato.',
      '{a} ha chiuso il laptop di scatto.',
      '{a} e {b} stavano guardando qualcosa insieme. L\'hanno nascosto.',
      'Qualcuno ha lasciato un caffè sul tavolo. È ancora caldo. Non c\'è nessuno.',
    ],
  },
  FESTIVAL_MUSICALE: {
    'Backstage': [
      '{a} ha parlato sottovoce con qualcuno fuori dalla porta di servizio.',
      'Un pacco è arrivato senza documentazione. {a} lo ha portato via subito.',
      '{a} e {b} si sono fermati quando ti hanno sentito arrivare.',
      'Qualcuno ha modificato la scaletta senza avvisare nessuno.',
      '{a} stava fotografando qualcosa. Ha abbassato il telefono quando ti ha visto.',
    ],
    'Palco Principale': [
      'I cavi audio sono stati controllati tre volte. Da tre persone diverse.',
      '{a} ha testato qualcosa e poi ha annullato il test senza spiegazioni.',
      'Una zona del palco è stata dichiarata off-limits senza motivazione ufficiale.',
      '{a} ha ricevuto un messaggio e ha lasciato il palco di corsa.',
    ],
    'Area VIP': [
      '{a} e {b} nell\'area VIP. Non erano ospiti. Non avevano badge.',
      'Qualcuno ha prenotato il lounge privato per domani sera. Nome non registrato.',
      '{a} ha consegnato qualcosa a mano a qualcuno che è subito andato via.',
      'Una conversazione interrotta. Tutti si sono girati quando sei entrato.',
    ],
    'Perimetro': [
      'Un veicolo fermo nel perimetro da due ore. Nessuno l\'ha avvicinato.',
      '{a} ha parlato con qualcuno fuori dal cancello. Breve. Poi è rientrato.',
      'Una zona del perimetro non coperta dalle telecamere. Non per caso.',
      '{a} ha cambiato direzione quando ha visto la pattuglia.',
    ],
  },
  COMPAGNIA_TEATRALE: {
    'Palcoscenico': [
      '{a} ha controllato i cavi due volte. Non sembrava soddisfatto.',
      'Qualcuno ha spostato un elemento di scena di notte. Non è nella lista delle modifiche.',
      '{a} e {b} hanno smesso di discutere quando qualcuno ha aperto la porta.',
      'Le luci si sono abbassate per trenta secondi durante le prove. Nessuno ha detto niente.',
    ],
    'Camerini': [
      '{a} ha trovato qualcosa nel camerino che non era suo. Non ha detto niente.',
      'Una porta del camerino era aperta. Nessuno doveva essere lì.',
      '{a} si è cambiato in fretta e se n\'è andato senza aspettare la fine delle prove.',
      '{a} e {b} in camerino con la porta chiusa più del solito.',
    ],
    'Cabina Regia': [
      'Il log degli accessi alla cabina mostra un\'entrata non programmata alle 2:14.',
      '{a} ha guardato i monitor più a lungo del necessario.',
      'Qualcuno ha modificato una impostazione. È stata riportata alla versione precedente senza comunicarlo.',
      '{a} ha usato un badge che non era il suo per accedere.',
    ],
    'Magazzino': [
      'Qualcosa è stato spostato nel magazzino. Non è nell\'inventario.',
      '{a} è uscito dal magazzino con qualcosa sotto il braccio.',
      'Una cassa era aperta. Non era vuota.',
      '{a} e {b} nel magazzino con la luce spenta. Si sono fermati quando hai acceso.',
    ],
  },
  COMUNITA_ECO: {
    'Sala Comune': [
      'Una riunione non programmata. {a} e {b} erano già dentro quando sei arrivato.',
      '{a} ha smesso di parlare quando hai aperto la porta.',
      'Qualcuno ha rimosso un avviso dalla bacheca. Non si sa chi.',
      '{a} distribuiva qualcosa. Lo ha nascosto quando ti ha visto.',
    ],
    'Orto': [
      '{a} e {b} nell\'orto. Non stavano lavorando. Stavano aspettando.',
      'Una zona dell\'orto è recintata. Nessuno spiega perché.',
      '{a} ha scavato qualcosa e l\'ha ricoperto quando si è accorto di essere osservato.',
      '{a} ha passato qualcosa a {b} tra le piante. Veloce.',
    ],
    'Casa del Fondatore': [
      'La luce era accesa fino alle 3. Voci. Poi silenzio.',
      '{a} è entrato senza bussare. È uscito cinque minuti dopo con aria diversa.',
      'Qualcuno ha portato qualcosa dentro. Non l\'ha portato fuori.',
      '{a} stava aspettando fuori dalla porta. Quando si è aperta, è entrato veloce.',
    ],
    'Sentiero': [
      '{a} stava tornando da dove non avrebbe dovuto essere.',
      'Qualcuno ha percorso il sentiero secondario di notte. Le orme sono ancora visibili.',
      '{a} e {b} si sono incrociati sul sentiero. Nessuno ha rallentato.',
      'Un oggetto lasciato a metà sentiero. Qualcuno doveva passare a prenderlo.',
    ],
  },
  CONDOMINIO: {
    'Atrio': [
      '{a} ha controllato la buca delle lettere tre volte in un\'ora.',
      'Una busta senza mittente è rimasta nell\'atrio per due ore.',
      '{a} e {b} si sono incrociati senza salutarsi. Non è normale.',
      'Qualcuno ha modificato il tabellone delle assemblee. La data è cambiata.',
    ],
    'Cantina': [
      '{a} è sceso in cantina con una borsa. Ne è risalito senza.',
      'Qualcosa è stato portato via da una delle cantine. Il lucchetto era forzato.',
      '{a} stava misurando qualcosa con un metro. Ha smesso quando ti ha visto.',
      'Luci accese in cantina alle 2 di notte. Nessun residente dichiara di esserci stato.',
    ],
    'Tetto': [
      '{a} era sul tetto. Non stava facendo niente di visibile.',
      'Qualcuno ha lasciato qualcosa sul tetto. È ancora lì.',
      '{a} e {b} sul tetto. Si sono separati quando hanno sentito i passi.',
      'Una parte del tetto è stata fotografata da qualcuno con attrezzatura professionale.',
    ],
    'Cortile': [
      '{a} stava parlando al telefono in un angolo. Si è spostato quando ti ha visto.',
      'Un\'auto sconosciuta parcheggiata nel cortile da tre giorni. Targa coperta.',
      '{a} e {b} nel cortile. Quando sei arrivato, {a} è andato via subito.',
      'Qualcuno ha fotografato le finestre del palazzo dal cortile.',
    ],
  },
  LICEO: {
    'Corridoio': [
      '{a} ha passato qualcosa a {b} senza fermarsi.',
      'Un gruppo si è disperso non appena ti ha visto arrivare.',
      '{a} stava guardando il telefono con l\'aria di chi aspetta qualcosa.',
      'Una conversazione interrotta. Tutti hanno cambiato argomento insieme.',
    ],
    'Bagni': [
      'Qualcuno ha scritto qualcosa sul muro. È stato cancellato prima che potessi leggerlo.',
      '{a} è entrato e uscito tre volte in dieci minuti.',
      'Un telefono lasciato sul bordo del lavandino. Schermo acceso.',
      '{a} e {b} erano già dentro quando sei entrato. Hanno smesso di parlare.',
    ],
    'Sala Prof': [
      'La sala era chiusa dall\'interno. Voci.',
      '{a} ha fermato la conversazione non appena ti ha visto attraverso il vetro.',
      'Un fascicolo lasciato sul tavolo. È sparito prima che potessi avvicinarti.',
      '{a} stava copiando qualcosa a mano. Ha coperto il foglio.',
    ],
    'Cortile': [
      '{a} si è spostato dall\'altra parte quando ti ha visto.',
      'Un gruppo di studenti si è dissolto troppo in fretta.',
      '{a} e {b} seduti lontano dagli altri. Non stavano mangiando.',
      'Qualcosa è passato di mano vicino alle panchine. Non si è capito cosa.',
    ],
  },
  COLLEGIO_RELIGIOSO: {
    'Cappella': [
      '{a} era in cappella fuori dall\'orario delle funzioni.',
      'Qualcuno ha lasciato un foglio piegato tra i banchi. Non era una preghiera.',
      '{a} e {b} in cappella con la porta socchiusa. Si sono fermati quando hai aperto.',
      'Una candela accesa in un angolo senza nessuno intorno.',
    ],
    'Aula Magna': [
      'Una riunione non ufficiale. {a} era tra i presenti.',
      'Qualcuno ha spostato i microfoni. Non risulta nessuna modifica programmata.',
      '{a} stava leggendo qualcosa che ha chiuso in fretta.',
      'Il proiettore era acceso senza nessuno in sala.',
    ],
    'Archivio': [
      'La porta dell\'archivio era socchiusa. Nessun accesso risulta nel registro.',
      '{a} aveva le chiavi in mano vicino all\'archivio. Le ha rimesse in tasca subito.',
      'Qualcosa è stato rimosso dallo scaffale. Il segno nella polvere è ancora visibile.',
      '{a} stava fotografando dei documenti con il telefono.',
    ],
    'Refettorio': [
      '{a} non ha mangiato. Stava aspettando qualcosa.',
      'Una conversazione interrotta quando sei entrato.',
      '{a} e {b} seduti insieme. Non è la loro abitudine.',
      'Qualcuno ha lasciato un messaggio scritto su un tovagliolo. È stato tolto prima che potessi leggerlo.',
    ],
  },
  NAVE_CROCIERA: {
    'Ponte Comando': [
      '{a} ha risposto a una chiamata e ha lasciato il ponte senza spiegazioni.',
      'Il log di navigazione mostra una deviazione non programmata.',
      '{a} stava guardando qualcosa sul radar. Ha chiuso lo schermo.',
      'Una conversazione via radio interrotta non appena sei entrato.',
    ],
    'Ristorante': [
      'Il tavolo della 314 è rimasto apparecchiato per tutta la cena. Nessuno ha detto niente.',
      '{a} ha cambiato il posto di un passeggero senza spiegazioni.',
      '{a} e {b} hanno parlato sottovoce durante il servizio.',
      'Qualcuno ha lasciato qualcosa sotto un piatto. È stato rimosso prima della fine della cena.',
    ],
    'Cabine': [
      'La cabina 314 è stata pulita due volte in una mattina.',
      '{a} stava controllando i numeri delle cabine uno per uno.',
      'Una cabina senza nome sul registro risulta occupata.',
      '{a} è uscito da una cabina che non era la sua.',
    ],
    'Sala Macchine': [
      '{a} ha modificato qualcosa. Non era una manutenzione programmata.',
      'Una zona della sala macchine è stata dichiarata off-limits senza motivazione.',
      '{a} e {b} nella sala macchine con la porta chiusa dall\'interno.',
      'Qualcosa è stato portato nella sala macchine in una cassa senza etichetta.',
    ],
  },
});


// ══════════════════════════════════════════════════════════════════════════════
// FINALI NARRATIVI — chiudono la storia dell'intro per ogni scenario
// ══════════════════════════════════════════════════════════════════════════════
export const SCENARIO_ENDINGS = {
  MILANO_STARTUP: {
    ESPOSIZIONE: [
      "Hai raccolto abbastanza.",
      "Il nome che cercavi era lì da settimane.",
      "Tre giorni dopo che hai condiviso le prove, metà del management è sparito.",
      "La tua email è ancora attiva. Per ora.",
      "Nessuno ti ha ringraziato. Non te lo aspettavi."
    ],
    ISOLAMENTO: [
      "Li hai smontati uno per uno.",
      "Non sanno ancora chi è stato.",
      "La rete che controllavano adesso è silenziosa.",
      "Hai vinto. Ma hai imparato cose che non puoi disimparare.",
      "Il prossimo funding round andrà storto per altri motivi. Non per te."
    ]
  },
  VILLAGGIO_VACANZE: {
    ESPOSIZIONE: [
      "Marco non era partito.",
      "Lo hai scoperto il terzo giorno, parlando con la persona sbagliata nel posto giusto.",
      "La direzione ha chiuso il caso in silenzio.",
      "Hai lasciato il villaggio prima della fine della stagione.",
      "Non hai mai saputo perché. E forse era meglio così."
    ],
    ISOLAMENTO: [
      "Chi sapeva adesso non può più parlare con chi non sapeva.",
      "Il segreto è ancora lì. Ma chi lo custodiva è solo.",
      "La stagione è finita. Marco è ancora un nome che nessuno pronuncia.",
      "Hai fatto quello che potevi. Non era abbastanza. Era comunque qualcosa."
    ]
  },
  PAESE_BORGO: {
    ESPOSIZIONE: [
      "Il terreno valeva molto più di quello che pensavi.",
      "E il motivo era sotterrato letteralmente.",
      "Hai firmato. Ma hai firmato sapendo.",
      "Il paese continua. Le famiglie continuano. Alcune cose non cambiano.",
      "Sei partito il martedì mattina. Nessuno ti ha salutato."
    ],
    ISOLAMENTO: [
      "Le tre famiglie che tiravano i fili adesso non si parlano.",
      "Il notaio ha chiuso l'ufficio per una settimana. Nessuno sa perché.",
      "Hai ancora la chiave della casa di tuo nonno.",
      "Non l'hai venduta."
    ]
  },
  DUBLINO_BIGTECH: {
    ESPOSIZIONE: [
      "La lista esisteva. Il tuo nome non era sopra.",
      "Non perché fossi al sicuro. Perché qualcuno l'aveva rimosso.",
      "Non sai chi. Non vuoi saperlo.",
      "Sei ancora lì. Stai ancora guardando.",
      "Il prossimo ciclo di tagli arriverà tra sei mesi. Sei pronto."
    ],
    ISOLAMENTO: [
      "Chi gestiva le liste adesso non può più farlo.",
      "La rete si è svuotata in silenzio.",
      "Due VP hanno dato le dimissioni la stessa settimana.",
      "Il comunicato diceva 'per motivi personali'.",
      "Nessuno ha chiesto altro."
    ]
  },
  OSPEDALE_NOTTURNO: {
    ESPOSIZIONE: [
      "I referti erano stati modificati da dentro.",
      "Non da un medico. Da qualcuno che aveva accesso ai medici.",
      "L'ASL ha riaperto l'indagine quattordici giorni dopo.",
      "Tre persone sono state sospese.",
      "I pazienti non lo sapranno mai."
    ],
    ISOLAMENTO: [
      "La catena di comando che copriva il pattern adesso è spezzata.",
      "I dati corretti sono stati ripristinati.",
      "Non sai da chi. Forse qualcuno ti ha visto lavorare.",
      "Il turno di notte è cambiato.",
      "Qualcosa è diverso. Non riesci a dire esattamente cosa."
    ]
  },
  NAVE_CROCIERA: {
    ESPOSIZIONE: [
      "La signora della 314 non era sparita.",
      "Era stata spostata.",
      "L'hai capito quaranta minuti prima dell'attracco.",
      "Non era abbastanza tempo per tutto. Era abbastanza per qualcosa.",
      "La nave ha attraccato in orario."
    ],
    ISOLAMENTO: [
      "Chi sapeva dov'era adesso non può più comunicarlo.",
      "La rete di bordo è silenziosa.",
      "Sei sceso tra i primi.",
      "Non ti sei voltato."
    ]
  },
  COMPAGNIA_TEATRALE: {
    ESPOSIZIONE: [
      "La prima è andata in scena.",
      "Non era perfetta. Era reale.",
      "Chi aveva tagliato i cavi non era in sala.",
      "Lo hai capito guardando le sedie vuote nella fila centrale.",
      "L'applauso è durato quattro minuti."
    ],
    ISOLAMENTO: [
      "Il sabotatore è rimasto isolato dalla rete.",
      "Non ha potuto fare altro danno.",
      "Lo spettacolo ha avuto tre repliche.",
      "Non hai detto niente a nessuno.",
      "Alcune cose si risolvono meglio in silenzio."
    ]
  },
  CONDOMINIO: {
    ESPOSIZIONE: [
      "L'acquirente non era chi diceva.",
      "Sotto il palazzo c'era qualcosa che non risultava in nessuna planimetria.",
      "L'assemblea è stata convocata e poi rinviata.",
      "Non hai venduto.",
      "Tre altri condomini nemmeno."
    ],
    ISOLAMENTO: [
      "La rete di pressione si è dissolta.",
      "I condomini che avevano firmato hanno impugnato i contratti.",
      "L'acquirente ha ritirato l'offerta senza spiegazioni.",
      "Vivi ancora al terzo piano.",
      "Ogni tanto qualcuno bussa alla tua porta nel modo sbagliato."
    ]
  },
  LICEO: {
    ESPOSIZIONE: [
      "Il video era stato girato da dentro la scuola.",
      "Da qualcuno che conosceva gli orari, le telecamere, le abitudini.",
      "Non era uno studente.",
      "La preside ha gestito la cosa senza coinvolgere la polizia.",
      "Chi c'era nel video è tornato a scuola il lunedì successivo."
    ],
    ISOLAMENTO: [
      "Chi distribuiva il video adesso non può più farlo.",
      "Il file è stato rimosso da tutti i dispositivi che hai raggiunto.",
      "Non da tutti.",
      "Alcune cose rimangono. Ma rimangono ferme.",
      "È la meglio cosa che puoi fare, a volte."
    ]
  },
  COMUNITA_ECO: {
    ESPOSIZIONE: [
      "Il meccanismo di trattenimento era nei contratti.",
      "Clausole scritte in modo da sembrare consenso.",
      "Ne hai raccolti abbastanza da rendere il pattern visibile.",
      "Sei uscito il giovedì mattina.",
      "La ragazza che voleva andarsene è uscita il giovedì pomeriggio."
    ],
    ISOLAMENTO: [
      "La struttura di controllo è spezzata.",
      "Il fondatore è ancora lì.",
      "Ma le persone che eseguivano adesso non eseguono più.",
      "Alcune comunità sopravvivono anche ai fondatori.",
      "Non sai ancora se questa lo farà."
    ]
  },
  COLLEGIO_RELIGIOSO: {
    ESPOSIZIONE: [
      "L'archivio del 1987 conteneva nomi.",
      "Nomi che erano ancora lì, in ruoli diversi.",
      "Non hai aperto l'archivio. Hai fatto in modo che qualcun altro lo aprisse.",
      "Il rettore si è trasferito tre settimane dopo.",
      "Nessuno ha spiegato perché. Nessuno ha chiesto."
    ],
    ISOLAMENTO: [
      "Chi custodiva l'archivio adesso è solo.",
      "Le chiavi esistono ancora. Ma la rete attorno ad esse è silenziosa.",
      "L'archivio è ancora chiuso.",
      "Ma adesso lo sai. E saperlo cambia tutto, anche senza aprirlo."
    ]
  },
  FESTIVAL_MUSICALE: {
    ESPOSIZIONE: [
      "La busta conteneva una data e un nome.",
      "Non quello dell'artista.",
      "Hai capito il terzo giorno, cinque ore prima della chiusura.",
      "Il festival è finito come previsto.",
      "Non quello che stava per succedere."
    ],
    ISOLAMENTO: [
      "La rete che coordinava l'operazione è stata smontata.",
      "Non sai esattamente cosa stava per succedere.",
      "Sai solo che non è successo.",
      "A volte è abbastanza.",
      "Non sempre."
    ]
  },
  DEFAULT: {
    ESPOSIZIONE: ["Hai trovato quello che cercavi.", "Non era quello che ti aspettavi.", "Ma era la verità."],
    ISOLAMENTO: ["La rete è silenziosa.", "Per adesso.", "È abbastanza."]
  }
};

// ══════════════════════════════════════════════════════════════════════════════
// DESCRIZIONI MISSIONI PER TIPO
// ══════════════════════════════════════════════════════════════════════════════
export const MISSION_TYPE_LABELS = {
  intel:   { icon:'🔍', label:'INTEL',   desc:'Raccogli informazioni su questo agente.' },
  disinfo: { icon:'💬', label:'DISINFO', desc:'Inietta un rumor in questa zona per coprire le tue tracce.' },
  timed:   { icon:'⏱', label:'A TEMPO', desc:'Completa prima che il timer scada.' },
};
