const user = {
  name: 'Marlete',
  age: 60
};

// desestruturamos a propriedade name e atribuímos como variável
const { name } = user;

// conseguimos utilizar a propriedade como variável
console.log(name); // Marlete

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [num1, num2, num3] = primeNumbers

const soma = (a, b) => {
  console.log(a + b);
}

soma(num1,num3)
soma(num1,num2,)

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal]

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,,...numerosPares] = numerosPares

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima