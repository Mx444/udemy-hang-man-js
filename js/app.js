"use strict";

console.log(`⚙️ CMD : 
- trovaParola("lettera")
- oneShot("parolaDaIndovinare")`);

const parole = [
  "albero",
  "banca",
  "cane",
  "dado",
  "elefante",
  "fiume",
  "gatto",
  "hotel",
  "isola",
  "jazz",
  "kiwi",
  "luna",
  "mare",
  "nave",
  "orso",
  "piano",
  "quadro",
  "rosa",
  "sole",
  "tavolo",
  "uva",
  "vela",
  "zebra",
  "aereo",
  "bicicletta",
  "casa",
  "delfino",
  "elefante",
  "flauto",
  "giraffa",
  "hotel",
  "iguana",
  "jet",
  "koala",
  "lampada",
  "montagna",
  "ninja",
  "occhiali",
  "pasta",
  "quaderno",
  "rana",
  "squalo",
  "tigre",
  "unicorno",
  "valigia",
  "zaino",
  "angelo",
  "barca",
  "caramella",
  "dinosauro",
  "elicottero",
  "finestra",
  "giardino",
  "hacker",
  "internet",
  "juventus",
  "koan",
  "lupo",
  "mucca",
  "nocciola",
  "occhio",
  "pianoforte",
  "quasar",
  "radar",
  "scarpa",
  "telefono",
  "uva",
  "volpe",
  "zebra",
  "arte",
  "bicchiere",
  "chiave",
  "dado",
  "energia",
  "fiore",
  "giacca",
  "hamburger",
  "isola",
  "jogging",
  "karma",
  "leone",
  "motore",
  "natura",
  "occhio",
  "pesce",
  "quadro",
  "ruota",
  "sedia",
  "tavolo",
  "unione",
  "vaso",
  "zaino",
  "astronauta",
  "borsa",
  "calendario",
  "dentista",
  "eco",
  "flauto",
];

const disegniOmino = [
  `
  +---+
  |   |
      |
      |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========
`,
];

const parola = parole[Math.floor(Math.random() * parole.length)];
let numTentativi = 5;
const lettereScoperte = [];
const lettereSbagliate = [];
let giocoFinito = false;

function disegnaOmino(tentativiRimasti) {
  const disegnoAttuale = disegniOmino[disegniOmino.length - tentativiRimasti];
  console.log(disegnoAttuale);
}

function trovaParola(lettera) {
  if (lettera.length >= 2) {
    console.log("⚠️ Puoi inserire solo una lettera!");
    return;
  }
  if (/[0-9\W_]/.test(lettera)) {
    console.log(
      "⚠️ Puoi inserire solo una lettera e non numeri o caratteri speciali!"
    );
    return;
  }
  if (giocoFinito) {
    console.log("⚠️ Il gioco è finito. Non puoi più inserire lettere.");
    return;
  }
  if (numTentativi <= 0) {
    console.log(
      `💩 Hai perso! Parola da indovinare: ${parola.toLocaleUpperCase()}`
    );
    giocoFinito = true;
    return;
  }
  if (lettereScoperte.includes(lettera)) {
    console.log("⚠️ Lettera già inserita!");
    return;
  }
  if (!parola.includes(lettera)) {
    disegnaOmino(numTentativi);
    lettereSbagliate.push(lettera);
    numTentativi--;
    console.log(
      `❌ Lettera sbagliata! Tentativi rimasti: ${numTentativi} - Lettere sbagliate: ${lettereSbagliate
        .join(", ")
        .toLocaleUpperCase()}`
    );
    return;
  }

  lettereScoperte.push(lettera);

  const parolaDivisa = parola.split("");
  const lettereIndovinate = parolaDivisa.map((lettera) =>
    lettereScoperte.includes(lettera) ? lettera : `*`
  );
  console.log(lettereIndovinate.join("").toLocaleUpperCase());

  if (lettereIndovinate.join("") === parola) {
    console.log(
      `🎉 Hai vinto! Parola: ${lettereIndovinate.join("").toLocaleUpperCase()}`
    );
    giocoFinito = true;
  }
}

function oneShot(parolaDaIndovinare) {
  if (giocoFinito) {
    console.log("⚠️ Il gioco è finito. Non puoi più inserire lettere.");
    return;
  }
  if (/[0-9\W_]/.test(parolaDaIndovinare)) {
    console.log(
      "⚠️ Puoi inserire solo una parola e non numeri o caratteri speciali!"
    );
    return;
  }
  if (parolaDaIndovinare === parola) {
    console.log(`🎉 Hai vinto! Parola: ${parola.toLocaleUpperCase()}`);
    giocoFinito = true;
  } else {
    numTentativi = 0;
    giocoFinito = true;
    console.log(
      `💩 Hai perso! Parola da indovinare: ${parola.toLocaleUpperCase()}`
    );
  }
}
