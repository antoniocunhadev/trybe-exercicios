const checkNumber = (myNumber, number) => myNumber === number;

const resultLoretia = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1 )
  console.log(`Numero sorteado: ${number}`);
  console.log(`Meu numero: ${myNumber}`);
  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
}

console.log(resultLoretia(1, checkNumber));