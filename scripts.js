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

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index = 0; index < cars.length; index += 1) {
  console.log (cars[index]);
}