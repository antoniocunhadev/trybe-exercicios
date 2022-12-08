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

// Exercício prático - Imprimir a maior e a menor palavra do Array

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array [0]

for (let index = 0; index < array.length; index +=1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index]
  }
}
console.log (maiorPalavra)

let menorPalavra = array [0]

for (let index = 0; index < array.length; index +=1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index]
  }
}

console.log (menorPalavra)


