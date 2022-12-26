// Bonus
function substituaX(nome) {
  const frase = 'Tryber x aqui depois!';
  let fraseArray = frase.split(' ');

  for (let index in fraseArray) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome
    } 
  }
  return fraseArray.join(' ')
}
//console.log (substituaX('Antonio'))

function minhasSkills(funcao1) {
  const skills = ['HTML', 'CSS','JavaScript']
  let concatena = `${funcao1}
As minhas três pricipais habilidades:
${skills[0]}
${skills[1]}
${skills[2]}`
  return concatena
}
console.log(minhasSkills(substituaX('Antonio')));
