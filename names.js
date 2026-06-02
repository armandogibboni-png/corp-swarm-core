// names.js v5 — pool espanso per eliminare duplicati con 200 agenti
const SURNAMES_IT = [
  'Rossi','Ferrari','Russo','Bianchi','Romano','Colombo','Ricci','Marini','Greco','Bruno',
  'Gallo','Conti','De Luca','Costa','Giordano','Mancini','Rizzo','Lombardi','Moretti','Barbieri',
  'Esposito','Ferrara','Santoro','Rinaldi','Caruso','Galli','Vitale','Serra','Leone','Longo',
  'Gentile','Martinelli','Pellegrini','Palumbo','Silvestri','Gatti','Carbone','Valentini','Mele','Guerra',
  'Donati','Neri','D\'Angelo','Bernardi','Cattaneo','Cattani','Montanari','Negri','Milani','Bianco',
  'Benedetti','Riva','Grassi','Poli','Perrone','Fabbri','Testa','Ferretti','De Angelis','Monti',
  'Marchetti','Bassi','Coppola','Sala','Farina','Romagnoli','Rizzi','Parisi','Caputo','Sanna'
];

const SURNAMES_EN = [
  'Smith','Jones','Miller','Davis','Wilson','Moore','Taylor','Anderson','Brown','Thomas',
  'Murphy','Kelly','Walsh','Ryan','O\'Brien','McCarthy','Burke','Collins','Hayes','Lynch',
  'O\'Connor','Byrne','Kennedy','Doyle','O\'Sullivan','Gallagher','O\'Neill','Doherty','Farrell','Quinn',
  'Fitzgerald','Carroll','Dunne','Brennan','Connolly','Flanagan','Foley','Nolan','Duffy','Sheridan',
  'McGowan','Barry','Higgins','Whelan','Malone','Monaghan','Kavanagh','Clifford','Hughes','Ward'
];

const FIRST_NAMES = {
  MILANO_STARTUP: {
    M: ['Jacopo','Tommaso','Federico','Edoardo','Filippo','Alessandro','Valerio','Christian','Giorgio','Mattia',
        'Lorenzo','Nicola','Riccardo','Davide','Marco','Luca','Simone','Andrea','Emanuele','Fabio',
        'Pietro','Giovanni','Stefano','Michele','Claudio','Roberto','Alberto','Massimo','Paolo','Daniele'],
    F: ['Camilla','Ludovica','Beatrice','Ginevra','Matilde','Eleonora','Sofia','Chiara','Martina','Alice',
        'Federica','Giulia','Sara','Valentina','Irene','Alessia','Marta','Silvia','Elena','Veronica',
        'Francesca','Laura','Paola','Giorgia','Roberta','Serena','Michela','Claudia','Noemi','Jessica']
  },
  VILLAGGIO_VACANZE: {
    M: ['Marco','Luca','Simone','Andrea','Diego','Mirko','Danilo','Alessio','Emanuele','Fabio',
        'Kevin','Nico','Gianluca','Roberto','Cristian','Maurizio','Stefano','Pasquale','Giovanni','Antonio',
        'Salvatore','Franco','Renato','Sergio','Piero','Bruno','Carlo','Dario','Ivan','Mauro'],
    F: ['Jessica','Vanessa','Federica','Noemi','Francesca','Elisa','Valentina','Serena','Michela','Claudia',
        'Laura','Paola','Giorgia','Roberta','Silvia','Manuela','Cristina','Barbara','Monica','Daniela',
        'Rossella','Patrizia','Antonella','Sabrina','Graziella','Carmen','Loredana','Tiziana','Marina','Nadia']
  },
  STUDENTATO: {
    M: ['Luca','Andrea','Stefano','Michele','Antonio','Giovanni','Pietro','Davide','Enrico','Claudio',
        'Francesco','Samuele','Emilio','Raffaele','Tomas','Riccardo','Marco','Federico','Lorenzo','Nicola',
        'Alessio','Simone','Filippo','Giacomo','Leonardo','Matteo','Edoardo','Valerio','Jacopo','Tommaso'],
    F: ['Alessia','Marta','Silvia','Elena','Veronica','Giulia','Francesca','Chiara','Sara','Anna',
        'Rachele','Nadia','Ilaria','Caterina','Viviana','Federica','Valentina','Beatrice','Matilde','Sofia',
        'Ginevra','Ludovica','Camilla','Irene','Martina','Alice','Eleonora','Serena','Michela','Laura']
  },
  PAESE_BORGO: {
    M: ['Rocco','Carmine','Pasquale','Saverio','Peppino','Vincenzo','Salvatore','Antonio','Ciccio','Luigi',
        'Donato','Mauro','Sergio','Enzo','Gino','Raffaele','Gerardo','Ciro','Cosimo','Vito',
        'Oronzo','Benito','Italo','Armando','Renzo','Gildo','Ernesto','Dino','Amedeo','Biagio'],
    F: ['Assunta','Filomena','Carmela','Immacolata','Rosa','Maria','Concetta','Nunzia','Grazia','Teresa',
        'Lucia','Angela','Patrizia','Antonietta','Rita','Rosaria','Giuseppina','Addolorata','Annunziata','Elvira',
        'Dora','Ines','Wanda','Adele','Gilda','Norma','Lina','Pina','Tina','Ida']
  },
  DUBLINO_BIGTECH: {
    M: ['James','Conor','Patrick','Sean','Liam','Cian','Darragh','Eoin','Shane','Niall',
        'Fionn','Ciaran','Brendan','Declan','Kevin','Ronan','Cormac','Donal','Fergus','Oisin',
        'Cathal','Padraig','Ruairi','Seamus','Tiernan','Barry','Dermot','Gavin','Hugh','Kieran'],
    F: ['Aoife','Siobhan','Niamh','Ciara','Orla','Roisin','Clodagh','Aisling','Sinead','Fionnuala',
        'Emma','Kate','Sarah','Rachel','Lauren','Caoimhe','Sorcha','Grainne','Maeve','Dearbhla',
        'Eimear','Saoirse','Muireann','Blathnaid','Cliona','Ailbhe','Sadhbh','Orlaith','Riona','Deirdre']
  }
};

export function generateUniqueSwarmNames(count, contextKey) {
  const pool = FIRST_NAMES[contextKey] || FIRST_NAMES.MILANO_STARTUP;
  const surnames = (contextKey === 'DUBLINO_BIGTECH') ? SURNAMES_EN : SURNAMES_IT;
  const uniqueNames = new Set();
  let attempts = 0;
  while (uniqueNames.size < count && attempts < 10000) {
    attempts++;
    const gender = Math.random() > 0.5 ? 'M' : 'F';
    const first = pool[gender][Math.floor(Math.random() * pool[gender].length)];
    const last = surnames[Math.floor(Math.random() * surnames.length)];
    uniqueNames.add(`${first} ${last}`);
  }
  const result = Array.from(uniqueNames);
  while (result.length < count) result.push(`Agente ${result.length + 1}`);
  return result;
}
