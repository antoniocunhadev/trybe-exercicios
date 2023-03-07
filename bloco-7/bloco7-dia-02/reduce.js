// const numbers = [1, 32, 44, 2, 3];

// const totalSum = numbers.reduce((acc, curr) => {
//   console.log(`valor do acc é ${acc} e o de curr é ${curr}`);

//   return acc + curr;
// }, 30);

// console.log(`valor final do acc é ${totalSum}`);

// const numbers = [50, 85, -30, 3, 15];

// // const bigger = numbers.reduce((bigger, number) => {
// //   return bigger > number ? bigger : number;
// // });

// // console.log(bigger);

// const getBigger = (bigger, number) => (bigger > number ? bigger : number);
// const bigger = numbers.reduce(getBigger);
// console.log(bigger); // 85

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const isEven = (number) => number % 2 === 0;
// const sum = (accumulator, number) => accumulator + number;

// const sumNumbers = (array) => array.filter(isEven).reduce(sum); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getBestClass = (acc, materia) => (acc.nota > materia.nota) ? acc : materia;

const reportBest = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name,
}));

console.log(reportBest(estudantes));