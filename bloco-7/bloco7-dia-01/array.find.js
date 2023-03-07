const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

let age = idades.find((idade) => idade < 20); // 18

console.log(age);

const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

let numeros = numbers.find((numbers) => numbers % 3 === 0 && numbers % 5 === 0);

console.log(numeros);

const names = ["João", "Irene", "Fernando", "Maria"];

// Adicione seu código aqui
let nomes = names.find((names) => names.length === 5);

console.log(nomes);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui

let music = musicas.find((musicas) => musicas.id === '31031685')

console.log(music);