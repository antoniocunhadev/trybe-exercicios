function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()

  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
 
   pessoa = {nome: 'Luna',
   idade: 19
  }
   // Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

  const favoriteFood = 'Lasanha';
  favoriteFood = 'Hamburguer';
  console.log(favoriteFood);

  const name = 'Adriana';
  const lastName = 'Soares';
  console.log(`Olá, ${name} ${lastName}!`);
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log(`O resultado da soma de ${a} e ${b} é: ${a + b})`);

  const numeroAleatorio = () => Math.random() 
  console.log(numeroAleatorio());

  const hello = (nome) => `Olá, ${nome}!`
  console.log(hello('Ivan'));

nome = 'antonio'
var nome;
console.log(nome);

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
console.log(nomeCompleto('Ivan', 'Pires'));

let speed = 121;
const speedCar = (speed) => speed >=120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
console.log(speedCar(speed));