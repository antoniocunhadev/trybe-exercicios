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

// newKey = 'telefone'
// const telefone = '(13) 99122-7327'
// pessoaEstudante[newKey] = telefone
// console.log(pessoaEstudante);

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor
};

adicionaPropriedade(pessoaEstudante, 'telefone', '(13) 99122-7327')

adicionaPropriedade(pessoaEstudante, 'gitHub' , 'https://github.com/antoniocunhadev')

adicionaPropriedade(pessoaEstudante,  'linkedin' , 'https://www.linkedin.com/in/antoniocunhadev/')

console.log(pessoaEstudante);




