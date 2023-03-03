const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

let gerente = pessoas.some((pessoas) => pessoas.cargo === 'Gerência')
let proprietario = pessoas.some((pessoas) => pessoas.cargo === 'Product Owner')

console.log(gerente);
console.log(proprietario);

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('W', listNames)); // false

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const list = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nameList) => nameList === name)
};

console.log(list(names, 'Ana'));
console.log(list(names, 'Pedro'));
