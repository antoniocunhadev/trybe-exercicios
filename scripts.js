
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

