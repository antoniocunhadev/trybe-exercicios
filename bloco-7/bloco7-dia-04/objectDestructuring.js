// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };


// // const { name, seller } = product;
// // console.log(name); // Smart TV Crystal UHD
// // console.log(seller); // Casas de Minas

// console.log(product.name);

// // definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;

const weekdays = ['Domingão', ...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


const alimentos = {
  frutas: ['goiaba', 'laranja', 'melancia', 'manga'],
  legumes: ['pepino', 'chuchu', 'brocolis', 'abobora']
}

const {frutas, legumes} = alimentos

// const compras = [...frutas, ...legumes];
console.log(...frutas);

// console.log(compras);

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática


const user = {
  names: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const persona = {...user, ...jobInfos}

console.log(persona);

const {names, age, nationality} = user
const {profession, squad, squadInitials} = jobInfos

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);