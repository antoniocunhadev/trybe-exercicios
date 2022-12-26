//Crie uma função que ligue e desligue um motor de um carro.

let statusCar = 'desligado'
const ligarDesligar = () => statusCar === 'desligado' ? statusCar = 'ligado' : statusCar = 'desligado';

console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);

let carDesligado = `desligado`
function ligarDesligar () {
  
  if (carDesligado === `desligado`) {
    carDesligado = `ligado`
  } else {
    carDesligado = `desligado`
  } 
  return `O motor está ${carDesligado}`
}
console.log(ligarDesligar()); 
console.log(ligarDesligar());
console.log(ligarDesligar()); 
console.log(ligarDesligar());

//Crie uma função que calcule a área de um círculo.

let pi = 3.14 // Ou utilizar Math.PI
circleArea = raio => pi * (raio**2);
console.log(`Essa é a área do círculo: ${circleArea(5)}`); 

//Area do circulo sem função
let raio = 5
console.log (Math.PI * (raio**2))

//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

longestWord ('Antonio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

function longestWord (frase) {
  let array = frase.split(' ')
  let maiorPalavra = array[0]

  for (let index = 0; index < array.length; index +=1) {
    if (array[index].length > maiorPalavra.length  ) {
      maiorPalavra = array[index]
    }   
}
return maiorPalavra
}
console.log(longestWord ('Antonio foi no banheiro e não sabemos o que aconteceu'));

// sem o uso da funcao
let texto = 'Antonio foi no banheiro e não sabemos o que aconteceu'
let array = texto.split(' ');
let maiorPalavra = array[0]


for (let index in array) {
  if (array[index].length > maiorPalavra.length  ) {
    maiorPalavra = array[index]
  }
} 
console.log(maiorPalavra)

// usando for of sem o usa da funcao

let texto = 'Antonio foi no banheiro e não sabemos o que aconteceu';
let array = texto.split(' ');
let tamanhoMaximo = 0
let maiorPalavra = '';

for (let palavra of array) {
  if (palavra.length > tamanhoMaximo) {
    tamanhoMaximo = palavra.length
    maiorPalavra = palavra
  }
}
console.log(maiorPalavra);

// for of utilizando funcao

function longestWord (frase) {
  let array = frase.split(' ')
  let tamanhoMaximo = 0
  let maiorPalavra = ''

  for (let palavra of array) {
    if (palavra.length > tamanhoMaximo) {
      tamanhoMaximo = palavra.length
      maiorPalavra = palavra
    }
}
return maiorPalavra
}
console.log(longestWord ('Antonio foi no banheiro e não sabemos o que aconteceu'));




