// Exercício prático - fatorial de 10

let fatorial = 10
let resultado = fatorial

for (let index = 1; index < fatorial; index +=1) {
  resultado *= index
}
console.log ('O fatorial de ' + fatorial + ' é: ' + resultado)


// Exercício prático - inverter a palavra

let word = 'tryber';
let newWord = ''

for (let index = word.length -1; index >=0; index -=1) {
  newWord += word[index]
}

console.log (newWord)




