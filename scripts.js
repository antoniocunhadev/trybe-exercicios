// Bonus
function substituaX(nome) {
  const frase = 'Tryber x aqui depois !';
  let fraseArray = frase.split(' ');

  for (let index in fraseArray) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome
    } 
  }
  return fraseArray.join(' ')
}
console.log (substituaX('Antonio'))