/*let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.push ('Passear');
tasksList.push ('Comer');

console.log(tasksList.length); */
// 3

/* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.push ('Andar')

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro */ 

/* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
tasksList.unshift('Andar')
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe'] */

/*let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
tasksList.shift(); // remove o primeiro da lista
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ] */ 

/* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Tomar café');
console.log(indexOfTask);

// 1 */

/*let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf ('Serviços');

console.log(menuServices); */

/*let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push ('Contato')
let indexOfPortfolio = menu.indexOf ('Portfólio') ;

console.log(indexOfPortfolio);
console.log(menu); */

/* let cars = ['Saab', 'Volvo', 'BMW'];

for (let index = 0; index < cars.length; index += 1) {
  console.log (cars[index]); 
} */

/*let groceryList = ['Arroz', 'Feijão', 'Alfece', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log (groceryList[index]);
} */

/* let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5 */
 
/*let frase = 'Hello world, tudo bem com voces';
for (let word of frase) {
  console.log(word);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o" */ 

/*let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
  console.log(arrOfNumbers);
// Resultado: [10, 20, 30]
}
// 11
// 21
// 31 */

/*let counter = 0;

while(counter !== 5) {
  counter += 1;
} */ 

/*function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
} */

// Jogo da MegaSema
/*let meusNumerosDaMega = [3, 6, 10, 45, 47, 59];

let number1 = Math.floor(Math.random() * 60) +1;
let number2 = Math.floor(Math.random() * 60) +1;
let number3 = Math.floor(Math.random() * 60) +1;
let number4 = Math.floor(Math.random() * 60) +1;
let number5 = Math.floor(Math.random() * 60) +1;
let number6 = Math.floor(Math.random() * 60) +1;


let resultadoMegaSena = [number1, number2, number3, number4, number5, number6];

let acertos = 0;

for (let index = 0; index < meusNumerosDaMega.length; index += 1) {
  console.log ('Meus numeros da Mega: ', meusNumerosDaMega[index]);
  for (let index2 = 0; index2 < resultadoMegaSena.length; index2 += 1) {
    console.log ('Resultado da Mega Sena: ', resultadoMegaSena[index2]);
    if (meusNumerosDaMega[index] === resultadoMegaSena[index2]) {
      acertos = acertos + 1;
    }
  }
}
console.log ('Numeros de acertos: ', acertos); */

// Exercicio pratico

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaTotal = 0;

for (let index = 0; index < numbers.length; index += 1){
  somaTotal += numbers[index];
}
console.log(somaTotal)

let media = 0

for (let index = 0; index < numbers.length; index += 1){
  media = somaTotal / 10;
}
console.log(media)
if (media > 20) {
  console.log ('Valor maior que 20')
} else {
  console.log ('Valor menor que 20')
}

let maiorNumero = Math.max.apply(Math,numbers)
console.log (maiorNumero)
