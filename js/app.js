"use strict";
console.log(`⚙️ CMD : trovaParola("lettera")`);
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
const parola = parole[Math.floor(Math.random() * parole.length)];
let numTentativi = 5;
const lettereScoperte = [];
let giocoFinito = false;

function trovaParola(lettera) {
  if (giocoFinito) {
    console.log("IL GIOCO È FINITO. NON PUOI PIÙ INSERIRE LETTERE. ⚠️");
    return;
  }
  if (numTentativi === 0) {
    console.log("HAI PERSO! 💩");
    giocoFinito = true;
    return;
  }
  if (lettereScoperte.includes(lettera)) {
    console.log("LETTERA GIA INSERITA! ⚠️");
    return;
  }
  if (!parola.includes(lettera)) {
    numTentativi--;
    console.log(`LETTERA SBAGLIATA! TENTATIVI RIMASTI : ${numTentativi} ❌`);
  }
  lettereScoperte.push(lettera);

  const parolaDivisa = parola.split("");
  const lettereIndovinate = parolaDivisa.map((lettera) =>
    lettereScoperte.includes(lettera) ? lettera : `*`
  );
  console.log(lettereIndovinate.join(""));

  if (lettereIndovinate.join("") === parola) {
    console.log(
      `HAI VINTO! PAROLA : ${lettereIndovinate.join("").toLocaleUpperCase()} 🎉`
    );
    giocoFinito = true;
  }
}
