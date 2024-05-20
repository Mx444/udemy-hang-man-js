"use strict";

class HangMan {
  constructor(randomKeywords) {
    this.keyword =
      randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
    this.numOfAttempts = 5;
    this.charactersDiscovered = [];
  }

  check(character) {
    if (!/^[a-zA-Z]$/.test(character)) {
      return console.log("Inserisci solo lettere dell'alfabeto.");
    }

    if (this.numOfAttempts === 0) return "HAI PERSO!";
    if (this.charactersDiscovered.includes(character))
      return console.log("Hai già inserito questa lettera");

    this.charactersDiscovered.push(character);
    if (!this.keyword.includes(character)) this.numOfAttempts--;

    const discoveredWord = this.keyword
      .split("")
      .map((ch) => (this.charactersDiscovered.includes(ch) ? ch : "*"));
    if (discoveredWord.join("") === this.keyword)
      return console.log(`${discoveredWord.join("")} HAI VINTO!`);

    return console.log(
      `${discoveredWord.join("")} TENTATIVI RIMASTI: ${this.numOfAttempts}`
    );
  }
}

const randomKeywords = [
  "casa",
  "albero",
  "gatto",
  "computer",
  "libro",
  "sole",
  "tavolo",
  "chiave",
  "cielo",
  "amico",
  "giorno",
  "scuola",
  "musica",
  "finestra",
  "mare",
  "porta",
  "lingua",
  "tempo",
  "ombrello",
  "giardino",
  "montagna",
  "notte",
  "lampada",
  "stella",
  "telefono",
  "strada",
  "pane",
  "penna",
  "arte",
  "vino",
  "maglia",
  "auto",
  "fratello",
  "verde",
  "donna",
  "amore",
  "pallone",
  "viaggio",
  "carta",
  "chitarra",
  "quadro",
  "sedia",
  "piede",
  "canzone",
  "nuvola",
  "bottiglia",
  "fiume",
  "oro",
  "treno",
  "dente",
  "anima",
  "mente",
  "fiore",
  "bacio",
  "passione",
  "riso",
  "felicità",
  "sorriso",
  "tristezza",
  "sogno",
  "tesoro",
  "fantasia",
  "segreto",
  "avventura",
  "fortuna",
  "mistero",
  "avventura",
  "vittoria",
  "sfida",
  "ispirazione",
  "meraviglia",
  "energia",
  "riflessione",
  "integrità",
  "equilibrio",
  "generosità",
  "conoscenza",
  "ambizione",
  "obiettivo",
  "creatività",
  "amicizia",
  "speranza",
  "pazienza",
  "gratitudine",
  "determinazione",
  "successo",
  "gioia",
  "felicità",
  "amore",
  "pace",
  "armonia",
  "serenità",
  "libertà",
  "rispetto",
  "fiducia",
  "comprensione",
  "solidarietà",
];

const game = new HangMan(randomKeywords);

game.check("a");
game.check("z");
game.check("l");
game.check("s");
game.check("y");
game.check("r");
