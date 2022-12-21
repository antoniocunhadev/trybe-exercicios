let info = [
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
},

{
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}
]

console.log (info[0].personagem + ' e ' + info[1].personagem)
console.log (info[0].origem + ' e ' + info[1].origem)
console.log (info[0].nota + ' e ' + info[1].origem)

if (info[0].recorrente === 'Sim' && info[1].recorrente === 'Sim') {
  console.log ('Ambos s')
}

// Leitura de Objetos
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    },

    {
      titulo: 'Harry Potter e o Prisioiro de Azkaban',
      autor: 'JK Rling',
      editora: 'Rco',
    }
    
  ],
};
console.log ('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)
console.log ('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos')

// Exercicios funções 

//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(string){
  let reverse = string.split('').reverse().join('')
  return string === reverse
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'))

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(numbers) {
  let maiorIndice = 0
  for (indice in numbers) {
    if (numbers[maiorIndice] < numbers[indice]) {
      maiorIndice = indice
    }
  }
  return maiorIndice
}
console.log (maiorValor([2, 3, 6, 7, 10, 1]))

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor (numbers) {
  let menorIndice = 0
  for (indice in numbers) {
    if (numbers[menorIndice] > numbers[indice]) {
      menorIndice = indice
    }
  }
  return menorIndice
}
console.log (menorValor([2, 4, 6, 7, 10, 0, -3]))

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorCaracter (string) {
  let maiorPalavra = string[0]

    for (let indice in string) {
      if (maiorPalavra.length < string[indice].length) {
      maiorPalavra = string[indice]
     }
    }
    return maiorPalavra
}
console.log (maiorCaracter (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// Exemplo sem função
let string = ['mesa' , 'José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'parelelogramo']
let stringTotal = string[0]

for (let indice in string) { 
  if (stringTotal.length < string[indice].length) {
    stringTotal = string[indice]
  }   
}
console.log(stringTotal)

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }

  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somaTodosNumeros(numero) {
  let total = 0;

  for (let index = 0; index <= numero; index += 1) {
    total += index;
  }
  return total;
}

console.log(somaTodosNumeros(5)); 

// Exemplo sem função

let N = 5
let resultado = N
for (let index = 1; index < N; index +=1) {
  resultado *= index
}
console.log (resultado)

// Exercicio Bonus - criar um programa que leia numeros romanos e transforme em numeros inteiros.

const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};
function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  const len = numero.length;
  let soma = numerosRomanos[numero[len - 1]];
  let atual = numerosRomanos[numero[len - 1]];

  for (let i = 2; i <= len; i += 1) {
    const prox = numerosRomanos[numero[len - i]];

    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }

    atual = prox;
  }

  return soma;
}

console.log(romanoParaDecimal('MMXVIII')); // 2018
console.log(romanoParaDecimal('VI')); // 6
console.log(romanoParaDecimal('IV')); // 4
