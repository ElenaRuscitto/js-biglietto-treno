const kmPercorrere = parseFloat (prompt ('Quanti km dei percorrere?'));

const anni = parseInt (prompt ('Quanti anni hai?'));


const costoKm = 0.21;

let prezzoBiglietto = kmPercorrere * costoKm;
console.log (kmPercorrere, anni, prezzoBiglietto);

if (anni <= 17) {
  let scontoMin = prezzoBiglietto * 20 / 100
  prezzoBiglietto = prezzoBiglietto - scontoMin
}

if (anni >= 65) {
  let scontoMin = prezzoBiglietto * 40 / 100
  prezzoBiglietto = prezzoBiglietto - scontoMin
}

console.log (prezzoBiglietto.toFixed(2))