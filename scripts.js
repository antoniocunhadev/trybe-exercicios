let fruits = [3, 4, 10, 1, 12];
let somaFruits =0

for (let index = 0; index < fruits.length; index += 1) {
  somaFruits += fruits[index]
}

if (somaFruits > 15) {
  console.log (somaFruits)
} else {
  console.log ('Valor menor que 16')
}

const n = 9 ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);

const n = 5;

let resultado = 0;
for (let index = 0; index <= n; index += 1) {
  resultado =+ index
};
console.log(resultado)

let array = []

for (let index = 1; index <= 100; index += 1) {
  array.push(index)
}
console.log (array)
let soma = 0;
for (let index = 0; index < array.length; index += 1){
  soma += array[index];
}
console.log(soma)
