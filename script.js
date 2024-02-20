const kmPercorrere = parseFloat (prompt ('Quanti km dei percorrere?'));

const anni = parseInt (prompt ('Quanti anni hai?'));


const costoKm = 0.21;

let prezzoBiglietto = kmPercorrere * costoKm;
console.log (kmPercorrere, anni, prezzoBiglietto);

if (anni <= 17) {
  let scontoMin = prezzoBiglietto * 20 / 100
  prezzoBiglietto = prezzoBiglietto - scontoMin
} else if (anni >= 66) {
  let scontoMin = prezzoBiglietto * 40 / 100
  prezzoBiglietto = prezzoBiglietto - scontoMin
}

console.log (prezzoBiglietto.toFixed(2))

document.getElementById ('price').innerHTML += prezzoBiglietto.toFixed(2)