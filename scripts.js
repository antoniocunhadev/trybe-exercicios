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

// Exercício bônus - Criar forma geometríca 
let n = 3;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
  console.log(inputLine); 
};

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
