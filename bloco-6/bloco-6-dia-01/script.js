// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';

// const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
//   objeto[novaPropriedade] = valor;
// };

// adicionaPropriedade(customer, newKey, lastName);
// console.log(customer);

// newKey = 'carroPreferido'
// const carroPreferido = 'F-150'

// adicionaPropriedade (customer, newKey, carroPreferido)
// console.log(customer);

// newKey = 'fullName'
// const fullName = `${customer.firstName} ${customer.lastName}`

// adicionaPropriedade(customer, newKey, fullName)
// console.log(customer);

const pessoaEstudante = {
  name: 'Antonio',
  lastName: 'Cunha',
  email: 'antonio.frango@gmail.com'
}

console.log(pessoaEstudante);

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor
};

newKey = 'telefone'
const telefone = '(13) 99122-7327'

adicionaPropriedade(pessoaEstudante, newKey, telefone)
console.log(pessoaEstudante);

newKey = 'github'
const gitHub = 'https://github.com/antoniocunhadev'

adicionaPropriedade(pessoaEstudante, newKey, gitHub)
console.log(pessoaEstudante);

newKey = 'linkedin'
const linkedin = 'https://www.linkedin.com/in/antoniocunhadev/'

adicionaPropriedade(pessoaEstudante, newKey, linkedin)
console.log(pessoaEstudante);




