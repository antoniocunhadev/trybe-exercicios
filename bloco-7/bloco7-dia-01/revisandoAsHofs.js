const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];
// forEach
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`))

//find
let people = pessoas.find((pessoa) => pessoa.nome === 'Aline')

console.log(people);

// some
let ageSome = pessoas.some((pessoa) => pessoa.idade > 30);

console.log(ageSome);

// every
let ageEvery = pessoas.every((pessoa) => pessoa.idade > 30);

console.log(ageEvery);

