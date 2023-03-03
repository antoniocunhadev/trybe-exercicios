const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false

console.log(verifyGrades);

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  //Adicione seu código aqui
let verificaIdade = (array, idadeMinima) => {
  return array.every((person) => person.age >= idadeMinima)
} 

console.log(verificaIdade(people, 18));
console.log(verificaIdade(people, 14));