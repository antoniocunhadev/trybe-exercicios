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
